param(
  [string]$ProductionUrl = "https://notuser-production.up.railway.app",
  [string]$CommitMessage = "",
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

  $dirtyStatus = (& git status --porcelain)
  Assert-ExitCode "Read git status"
  $isDirty = $dirtyStatus -and $dirtyStatus.Count -gt 0

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
  $maxAttempts = 30
  $sleepSeconds = 10
  $healthy = $false

  for ($attempt = 1; $attempt -le $maxAttempts; $attempt++) {
    try {
      $health = Invoke-RestMethod -Uri "$ProductionUrl/api/health" -Method GET -TimeoutSec 20
      $home = Invoke-WebRequest -Uri $ProductionUrl -UseBasicParsing -TimeoutSec 20

      if ($home.StatusCode -eq 200 -and $health.ok -eq $true) {
        Write-Host "Production healthy on attempt $attempt." -ForegroundColor Green
        $healthy = $true
        break
      }

      Write-Host ("Attempt {0}/{1}: waiting..." -f $attempt, $maxAttempts) -ForegroundColor DarkYellow
    }
    catch {
      Write-Host ("Attempt {0}/{1}: waiting..." -f $attempt, $maxAttempts) -ForegroundColor DarkYellow
    }

    Start-Sleep -Seconds $sleepSeconds
  }

  if (-not $healthy) {
    throw "Deploy pushed, but production health check did not pass in time. Check Railway logs."
  }

  Write-Host "`nDeploy complete: $ProductionUrl" -ForegroundColor Green
}
finally {
  Pop-Location
}
