"use client";

import { useEffect, useRef } from "react";
import { api } from "@/lib/site/api";

type UkrSessionBridgeProps = {
  persistCode?: string | null;
  clearInvalid?: boolean;
};

export function UkrSessionBridge({
  persistCode = null,
  clearInvalid = false,
}: UkrSessionBridgeProps) {
  const lastActionRef = useRef("");

  useEffect(() => {
    const actionKey = persistCode
      ? `persist:${persistCode}`
      : clearInvalid
        ? "clear"
        : "";

    if (!actionKey || lastActionRef.current === actionKey) {
      return;
    }

    lastActionRef.current = actionKey;

    if (persistCode) {
      void api.persistUkrIntent(persistCode).catch(() => {});
      return;
    }

    if (clearInvalid) {
      void api.clearUkrIntent().catch(() => {});
    }
  }, [clearInvalid, persistCode]);

  return null;
}
