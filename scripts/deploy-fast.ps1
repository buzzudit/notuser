param(
  [string]$ProductionUrl = "https://notuser-production.up.railway.app",
  [string]$CommitMessage = "",
  [int]$MaxAttempts = 60,
  [int]$SleepSeconds = 10,
  [int]$RequestTimeoutSec = 20,
  [switch]$RequireHomeOk,
  [switch]$SkipChecks,
  [switch]$NoAutoCommit,
  [switch]$DryRun
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Assert-ExitCode {
  param([string]$StepName)
  if ($LASTEXITCODE -ne 0) {
    throw "$StepName failed with exit code $LASTEXITCODE."
  }
}

function Run-Step {
  param(
    [string]$Label,
    [scriptblock]$Command
  )

  Write-Host "`n==> $Label" -ForegroundColor Cyan
  if ($DryRun) {
    Write-Host "DRY RUN: skipped." -ForegroundColor Yellow
    return
  }

  & $Command
}

function Assert-NoAthenaArtifactory {
  $candidates = [System.Collections.Generic.List[string]]::new()

  if ($env:NPM_CONFIG_REGISTRY) {
    $candidates.Add("env:NPM_CONFIG_REGISTRY=$($env:NPM_CONFIG_REGISTRY)")
  }

  if ($env:npm_config_registry) {
    $candidates.Add("env:npm_config_registry=$($env:npm_config_registry)")
  }

  $projectNpmrc = Join-Path $repoRoot ".npmrc"
  if (Test-Path $projectNpmrc) {
    $projectNpmrcContent = Get-Content -Raw $projectNpmrc
    if ($projectNpmrcContent) {
      $candidates.Add(".npmrc=$projectNpmrcContent")
    }
  }

  $userNpmrc = Join-Path $HOME ".npmrc"
  if (Test-Path $userNpmrc) {
    $userNpmrcContent = Get-Content -Raw $userNpmrc
    if ($userNpmrcContent) {
      $candidates.Add("~/.npmrc=$userNpmrcContent")
    }
  }

  $npmRegistry = (& npm config get registry 2>$null)
  if ($LASTEXITCODE -eq 0 -and -not [string]::IsNullOrWhiteSpace($npmRegistry)) {
    $candidates.Add("npm config registry=$npmRegistry")
  }

  $athenaArtifactoryRefs = @(
    $candidates | Where-Object {
      $_ -match "(?i)athena" -and $_ -match "(?i)artifactory"
    }
  )

  if ($athenaArtifactoryRefs.Count -gt 0) {
    throw "Blocked deploy: Athena Artifactory usage detected in npm configuration. Remove Athena Artifactory settings before deploying."
  }

  $artifactoryRefs = @(
    $candidates | Where-Object {
      $_ -match "(?i)artifactory"
    }
  )

  if ($artifactoryRefs.Count -gt 0) {
    throw "Blocked deploy: Artifactory registry usage is not allowed for this repo."
  }
}

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
Push-Location $repoRoot

try {
  Write-Host "Repo: $repoRoot"
  if ($DryRun) {
    Write-Host "Running in dry-run mode (no writes, no push, no deploy checks)." -ForegroundColor Yellow
  }

  $branch = (& git rev-parse --abbrev-ref HEAD).Trim()
  Assert-ExitCode "Read current branch"
  if ($branch -ne "main") {
    throw "Deploy must run from 'main'. Current branch: '$branch'."
  }

  Assert-NoAthenaArtifactory

  $dirtyStatus = (& git status --porcelain)
  Assert-ExitCode "Read git status"
  $dirtyLines = @($dirtyStatus | Where-Object { -not [string]::IsNullOrWhiteSpace($_) })
  $isDirty = $dirtyLines.Count -gt 0

  if ($isDirty -and $NoAutoCommit) {
    throw "Working tree has changes. Commit them first, or rerun without -NoAutoCommit."
  }

  if ($isDirty) {
    if ([string]::IsNullOrWhiteSpace($CommitMessage)) {
      $CommitMessage = "chore: deploy snapshot $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    }

    Run-Step "Stage changes" { git add -A }
    Assert-ExitCode "git add"

    Run-Step "Commit changes" { git commit -m $CommitMessage }
    Assert-ExitCode "git commit"
  }

  if (-not $SkipChecks) {
    Run-Step "Run lint" { npm run lint }
    Assert-ExitCode "npm run lint"

    Run-Step "Run build" { npm run build }
    Assert-ExitCode "npm run build"
  }

  Run-Step "Push main to origin" { git push origin main }
  Assert-ExitCode "git push"

  if ($DryRun) {
    Write-Host "`nDry run complete." -ForegroundColor Green
    return
  }

  Write-Host "`nWaiting for production deploy to become healthy..." -ForegroundColor Cyan
  $healthy = $false
  $lastFailure = "No response received yet."

  for ($attempt = 1; $attempt -le $maxAttempts; $attempt++) {
    $healthOk = $false
    $healthDetail = "not checked"
    $homeOk = $false
    $homeDetail = "not checked"

    try {
      $health = Invoke-RestMethod -Uri "$ProductionUrl/api/health" -Method GET -TimeoutSec $RequestTimeoutSec
      $healthOk = $health.ok -eq $true
      if ($healthOk) {
        $healthDetail = "ok=true"
      } else {
        $healthDetail = "ok was not true"
      }
    }
    catch {
      $healthDetail = $_.Exception.Message
    }

    try {
      $home = Invoke-WebRequest -Uri $ProductionUrl -UseBasicParsing -TimeoutSec $RequestTimeoutSec
      $homeOk = $home.StatusCode -eq 200
      $homeDetail = "status=$($home.StatusCode)"
    }
    catch {
      $homeDetail = $_.Exception.Message
    }

    $homeRequiredOk = (-not $RequireHomeOk) -or $homeOk
    if ($healthOk -and $homeRequiredOk) {
      if ($RequireHomeOk) {
        Write-Host "Production healthy on attempt $attempt (health endpoint + home page)." -ForegroundColor Green
      } else {
        Write-Host "Production healthy on attempt $attempt (health endpoint)." -ForegroundColor Green
      }
      $healthy = $true
      break
    }

    if ($RequireHomeOk) {
      $lastFailure = "health=[$healthDetail], home=[$homeDetail]"
      Write-Host ("Attempt {0}/{1}: waiting (health=[{2}], home=[{3}])..." -f $attempt, $maxAttempts, $healthDetail, $homeDetail) -ForegroundColor DarkYellow
    } else {
      $lastFailure = "health=[$healthDetail], home(non-blocking)=[$homeDetail]"
      Write-Host ("Attempt {0}/{1}: waiting (health=[{2}], home non-blocking=[{3}])..." -f $attempt, $maxAttempts, $healthDetail, $homeDetail) -ForegroundColor DarkYellow
    }

    Start-Sleep -Seconds $sleepSeconds
  }

  if (-not $healthy) {
    throw "Deploy pushed, but production checks did not pass in time. Last result: $lastFailure"
  }

  Write-Host "`nDeploy complete: $ProductionUrl" -ForegroundColor Green
}
finally {
  Pop-Location
}
