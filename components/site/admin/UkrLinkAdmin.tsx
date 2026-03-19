"use client";

import { useMemo, useState } from "react";
import { Copy, Link2, Lock, Plus, ShieldOff } from "lucide-react";
import { toast } from "sonner";
import { api, type IntentLink } from "@/lib/site/api";

function formatDate(value: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

function getApiErrorMessage(error: unknown, fallback: string) {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return fallback;
}

export function UkrLinkAdmin() {
  const [password, setPassword] = useState("");
  const [links, setLinks] = useState<IntentLink[]>([]);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [deactivatingCode, setDeactivatingCode] = useState<string | null>(null);
  const [org, setOrg] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [positionUrl, setPositionUrl] = useState("");
  const [intentType, setIntentType] = useState("hiring");
  const [notes, setNotes] = useState("");

  const activeCount = useMemo(
    () => links.filter((link) => link.isActive).length,
    [links],
  );

  const loadLinks = async () => {
    const trimmedPassword = password.trim();
    if (!trimmedPassword) {
      toast.error("Enter the admin password first.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await api.getIntentLinks(trimmedPassword);
      if ("ok" in response && response.ok === false) {
        toast.error(response.error);
        setIsUnlocked(false);
        return;
      }

      setLinks(response.links);
      setIsUnlocked(true);
      toast.success("UKR links loaded.");
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Unable to load ukr links."));
      setIsUnlocked(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreate = async (event: React.FormEvent) => {
    event.preventDefault();
    const trimmedPassword = password.trim();
    const trimmedOrg = org.trim();
    if (!trimmedPassword || !trimmedOrg) {
      toast.error("Org and admin password are required.");
      return;
    }

    setIsCreating(true);
    try {
      const response = await api.createIntentLink(trimmedPassword, {
        org: trimmedOrg,
        positionTitle,
        positionUrl,
        intentType,
        notes,
      });

      if ("ok" in response && response.ok === false) {
        toast.error(response.error);
        return;
      }

      setLinks((currentLinks) => [response.link, ...currentLinks]);
      setOrg("");
      setPositionTitle("");
      setPositionUrl("");
      setIntentType("hiring");
      setNotes("");
      setIsUnlocked(true);
      toast.success(`Created ${response.link.url}`);
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Unable to create the ukr link."));
    } finally {
      setIsCreating(false);
    }
  };

  const handleDeactivate = async (code: string) => {
    const trimmedPassword = password.trim();
    if (!trimmedPassword) {
      toast.error("Enter the admin password first.");
      return;
    }

    setDeactivatingCode(code);
    try {
      const response = await api.deactivateIntentLink(trimmedPassword, code);
      if ("ok" in response && response.ok === false) {
        toast.error(response.error);
        return;
      }

      setLinks((currentLinks) =>
        currentLinks.map((link) => (link.code === code ? response.link : link)),
      );
      toast.success(`Deactivated ${code}`);
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Unable to deactivate this ukr link."));
    } finally {
      setDeactivatingCode(null);
    }
  };

  const handleCopy = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Copied link to clipboard.");
    } catch {
      toast.error("Unable to copy the link.");
    }
  };

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-border bg-card p-5 md:p-6">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px_auto] lg:items-end">
          <label className="space-y-2 text-sm text-foreground">
            <span className="inline-flex items-center gap-2">
              <Lock size={14} />
              Admin password
            </span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Required to create and manage links"
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
            />
          </label>

          <div className="rounded-lg border border-border/70 bg-background px-4 py-3 text-sm text-muted-foreground">
            {isUnlocked ? `${activeCount} active of ${links.length} total` : "Locked"}
          </div>

          <button
            type="button"
            onClick={() => {
              void loadLinks();
            }}
            disabled={isLoading}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {isLoading ? "Loading..." : "Unlock manager"}
          </button>
        </div>
      </section>

      {!isUnlocked ? (
        <section className="rounded-xl border border-dashed border-border bg-card p-6 md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
            Locked
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
            Unlock the manager to create and review `ukr` links
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Enter the configured admin password above, then click `Unlock manager`.
            Once unlocked, the page will reveal the create form and the existing-link list.
          </p>
        </section>
      ) : (
        <>
          <section className="rounded-xl border border-border bg-card p-5 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                  Generate link
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                  Create a new `ukr` hiring-intent link
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  This generates a three-letter lowercase code and maps it to the structured
                  hiring context that should tailor the site experience.
                </p>
              </div>
              <div className="rounded-lg border border-border/70 bg-background px-3 py-2 text-sm text-muted-foreground">
                Format: <span className="font-mono text-foreground">?ukr=abc</span>
              </div>
            </div>

            <form onSubmit={handleCreate} className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm text-foreground">
                  <span>Organization</span>
                  <input
                    value={org}
                    onChange={(event) => setOrg(event.target.value)}
                    placeholder="Adobe"
                    required
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
                  />
                </label>

                <label className="space-y-2 text-sm text-foreground">
                  <span>Position title</span>
                  <input
                    value={positionTitle}
                    onChange={(event) => setPositionTitle(event.target.value)}
                    placeholder="Sr Director"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
                  />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm text-foreground">
                  <span>Position URL</span>
                  <input
                    value={positionUrl}
                    onChange={(event) => setPositionUrl(event.target.value)}
                    placeholder="https://linkedin.com/jobs/..."
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
                  />
                </label>

                <label className="space-y-2 text-sm text-foreground">
                  <span>Intent type</span>
                  <input
                    value={intentType}
                    onChange={(event) => setIntentType(event.target.value)}
                    placeholder="hiring"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
                  />
                </label>
              </div>

              <label className="space-y-2 text-sm text-foreground">
                <span>Notes</span>
                <textarea
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  placeholder="searched for projects, wants AI leadership evidence, platform-heavy role..."
                  rows={4}
                  className="w-full resize-none rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
                />
              </label>

              <button
                type="submit"
                disabled={isCreating}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                <Plus size={14} />
                {isCreating ? "Creating..." : "Create ukr link"}
              </button>
            </form>
          </section>

          <section className="rounded-xl border border-border bg-card p-5 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                  Existing links
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                  Manage current hiring-intent links
                </h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  void loadLinks();
                }}
                disabled={isLoading}
                className="rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/40"
              >
                Refresh
              </button>
            </div>

            {links.length === 0 ? (
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                No ukr links exist yet.
              </p>
            ) : (
              <div className="mt-6 space-y-4">
                {links.map((link) => (
                  <article
                    key={link.code}
                    className="rounded-xl border border-border/80 bg-background p-4"
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
                            {link.code}
                          </span>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                              link.isActive
                                ? "bg-primary/10 text-primary"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {link.isActive ? "Active" : "Inactive"}
                          </span>
                        </div>
                        <h4 className="text-base font-semibold text-foreground">
                          {link.positionTitle ? `${link.positionTitle} at ${link.org}` : link.org}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Intent: {link.intentType ?? "Not specified"}
                        </p>
                        {link.notes ? (
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {link.notes}
                          </p>
                        ) : null}
                        {link.positionUrl ? (
                          <a
                            href={link.positionUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
                          >
                            <Link2 size={14} />
                            Source role
                          </a>
                        ) : null}
                        <p className="text-xs text-muted-foreground">
                          Created {formatDate(link.createdAt)}
                        </p>
                      </div>

                      <div className="flex flex-col items-start gap-2 lg:items-end">
                        <code className="rounded-lg border border-border bg-card px-3 py-2 text-xs text-foreground">
                          {link.url}
                        </code>
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              void handleCopy(link.url);
                            }}
                            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground transition-colors hover:border-primary/40"
                          >
                            <Copy size={14} />
                            Copy
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              void handleDeactivate(link.code);
                            }}
                            disabled={!link.isActive || deactivatingCode === link.code}
                            className="inline-flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive transition-colors hover:bg-destructive/15 disabled:opacity-50"
                          >
                            <ShieldOff size={14} />
                            {deactivatingCode === link.code ? "Deactivating..." : "Deactivate"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}
