"use client";

import { useEffect, useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";
import { api } from "@/lib/site/api";

export function StatusIndicator() {
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    api
      .getHealth()
      .then((response) => setStatus(response.ok ? "ok" : "error"))
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div
      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1"
      role="status"
      aria-label={`System status: ${status}`}
    >
      {status === "loading" ? (
        <span className="h-1.5 w-1.5 animate-pulse-subtle rounded-full bg-muted-foreground" />
      ) : null}
      {status === "ok" ? <CheckCircle size={12} className="text-green-500" /> : null}
      {status === "error" ? <AlertCircle size={12} className="text-destructive" /> : null}
      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        {status === "loading"
          ? "Checking"
          : status === "ok"
            ? "All systems go"
            : "Degraded"}
      </span>
    </div>
  );
}
