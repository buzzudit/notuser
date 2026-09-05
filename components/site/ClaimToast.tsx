"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import type { ClaimCitation } from "@/data/claims";

const AUTO_DISMISS_MS = 14000;
const REVEAL_DELAY_MS = 1000;

type ClaimToastProps = {
  citations: ClaimCitation[];
};

/**
 * Greets a reader who clicked a homepage claim card, then gets out of the way. Only
 * appears when the URL carries the `?claim=` this project was linked with — a direct
 * or shared visit sees nothing, so the page itself stays exactly as it always was.
 */
export function ClaimToast({ citations }: ClaimToastProps) {
  const [citation, setCitation] = useState<ClaimCitation | null>(null);
  const [visible, setVisible] = useState(false);
  const dismissTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const claimId = new URLSearchParams(window.location.search).get("claim");
    if (!claimId) return;

    const match = citations.find((item) => item.claim.id === claimId);
    if (!match) return;

    setCitation(match);
    const revealTimer = setTimeout(() => setVisible(true), REVEAL_DELAY_MS);

    const url = new URL(window.location.href);
    url.searchParams.delete("claim");
    window.history.replaceState({}, "", url.toString());

    return () => clearTimeout(revealTimer);
  }, [citations]);

  useEffect(() => {
    if (!citation || !visible) return;
    startDismissTimer();
    return stopDismissTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [citation, visible]);

  function startDismissTimer() {
    stopDismissTimer();
    dismissTimer.current = setTimeout(() => setVisible(false), AUTO_DISMISS_MS);
  }

  function stopDismissTimer() {
    if (dismissTimer.current) clearTimeout(dismissTimer.current);
  }

  if (!citation) return null;

  const dismiss = () => setVisible(false);

  return (
    <div
      onMouseEnter={stopDismissTimer}
      onMouseLeave={startDismissTimer}
      className={`fixed right-4 top-20 z-50 hidden w-[calc(100%-2rem)] max-w-md transition-all duration-300 ease-out sm:right-6 sm:block ${
        visible ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-6 opacity-0"
      }`}
    >
      <div className="blue-banner" role="status">
        <div aria-hidden="true" className="blue-banner-radial absolute inset-0" />
        <div aria-hidden="true" className="blue-banner-grid absolute inset-0" />
        <div aria-hidden="true" className="blue-banner-orb" />

        <div className="relative">
          <div className="flex items-start justify-between gap-3">
            <p className="blue-banner-eyebrow">
              <span className="blue-banner-dot" />
              {citation.claim.eyebrow}
            </p>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss"
              className="-mr-1 -mt-1 shrink-0 rounded-full p-1 text-white/70 transition-colors hover:text-white"
            >
              <X size={16} />
            </button>
          </div>

          <p className="mt-3 text-xl font-semibold tracking-tight text-white">
            {citation.claim.title}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/90">{citation.evidence.note}</p>

          <Link
            href={`#${citation.evidence.anchorId}`}
            onClick={dismiss}
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-white underline-offset-4 hover:underline"
          >
            Read {citation.evidence.anchorLabel} →
          </Link>
        </div>
      </div>
    </div>
  );
}
