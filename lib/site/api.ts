/**
 * API service assumptions:
 * GET /api/health -> { ok: boolean; appName: string; environment: string }
 * GET /api/db-test -> { ok: true; totalCount: number; latestMessage: string | null } | { ok: false; error: string }
 * GET /api/messages -> Array<{ id: number; message: string; createdAt: string }>
 * POST /api/messages -> { id: number; message: string; createdAt: string } | { ok: false; error: string }
 * POST /api/ai -> { ok: true; answer: string; model: string } | { ok: false; error: string; code?: string }
 */

const API_BASE = "/api";

export interface HealthResponse {
  ok: boolean;
  appName: string;
  environment: string;
}

export interface DbTestSuccess {
  ok: true;
  totalCount: number;
  latestMessage: string | null;
}

export interface DbTestFailure {
  ok: false;
  error: string;
}

export type DbTestResponse = DbTestSuccess | DbTestFailure;

export interface Message {
  id: number;
  message: string;
  createdAt: string;
}

export interface MessagePostFailure {
  ok: false;
  error: string;
}

export interface AIRequest {
  prompt: string;
  context?: string;
  page?: string;
  shareCode?: string;
}

export interface AIResponse {
  ok: true;
  answer: string;
  model: string;
}

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = "ApiError";
  }
}

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({} as Record<string, unknown>));
    const message =
      typeof (body as Record<string, unknown>).error === "string"
        ? ((body as Record<string, unknown>).error as string)
        : response.statusText;
    throw new ApiError(response.status, message);
  }

  return response.json() as Promise<T>;
}

export const api = {
  getHealth: () => apiFetch<HealthResponse>("/health"),
  getDbTest: () => apiFetch<DbTestResponse>("/db-test"),
  getMessages: () => apiFetch<Message[]>("/messages"),
  postMessage: (message: string) =>
    apiFetch<Message | MessagePostFailure>("/messages", {
      method: "POST",
      body: JSON.stringify({ message }),
    }),
  askAI: (payload: AIRequest) =>
    apiFetch<AIResponse>("/ai", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
} as const;
