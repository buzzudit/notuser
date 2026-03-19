"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Loader2, Send, Sparkles } from "lucide-react";
import { circlePrompts } from "@/data/site";
import { ApiError, api } from "@/lib/site/api";

interface AIWorkspaceProps {
  onSubmit?: (message: string) => void;
  compact?: boolean;
  prefill?: string;
  context?: string;
  page?: string;
  shareCode?: string;
  suggestions?: string[];
  helperText?: string;
  autoSubmitOnPrefill?: boolean;
  className?: string;
}

export function AIWorkspace({
  onSubmit,
  compact = false,
  prefill = "",
  context,
  page,
  shareCode,
  suggestions,
  helperText,
  autoSubmitOnPrefill = false,
  className = "",
}: AIWorkspaceProps) {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const lastAutoSubmittedPrefill = useRef<string>("");

  const starterPrompts = useMemo(() => {
    if (suggestions && suggestions.length > 0) {
      return suggestions;
    }

    return compact ? [] : circlePrompts.slice(0, 4);
  }, [compact, suggestions]);

  const runPrompt = useCallback(
    async (prompt: string) => {
      const trimmedPrompt = prompt.trim();
      if (!trimmedPrompt) {
        return;
      }

      onSubmit?.(trimmedPrompt);
      setError("");
      setIsLoading(true);

      try {
        const response = await api.askAI({
          prompt: trimmedPrompt,
          context,
          page,
          shareCode,
        });
        setAnswer(response.answer);
      } catch (requestError) {
        if (requestError instanceof ApiError) {
          setError(requestError.message);
        } else {
          setError("AI response is unavailable right now. Please try again.");
        }
      } finally {
        setIsLoading(false);
      }
    },
    [context, onSubmit, page, shareCode],
  );

  useEffect(() => {
    const trimmedPrefill = prefill.trim();
    if (!trimmedPrefill) {
      return;
    }

    setInput(trimmedPrefill);

    if (
      autoSubmitOnPrefill &&
      lastAutoSubmittedPrefill.current !== trimmedPrefill &&
      !isLoading
    ) {
      lastAutoSubmittedPrefill.current = trimmedPrefill;
      void runPrompt(trimmedPrefill);
    }
  }, [autoSubmitOnPrefill, isLoading, prefill, runPrompt]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) {
      return;
    }

    await runPrompt(trimmedInput);
    setInput("");
  };

  const handleStarter = async (text: string) => {
    setInput(text);
    await runPrompt(text);
  };

  return (
    <div className={`w-full ${compact ? "" : "mx-auto max-w-2xl"} ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center rounded-lg border border-border bg-card transition-colors focus-within:border-primary/50 focus-within:glow-shadow">
          <Sparkles size={16} className="ml-4 shrink-0 text-primary" />
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask anything..."
            aria-label="AI workspace input"
            className="flex-1 bg-transparent px-3 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            aria-label="Send message"
            className="mr-2 rounded-md p-2 text-muted-foreground transition-colors hover:text-primary disabled:opacity-40"
          >
            {isLoading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Send size={16} />
            )}
          </button>
        </div>
      </form>

      {helperText ? (
        <p className="mt-2 text-[11px] text-muted-foreground">{helperText}</p>
      ) : null}

      {error ? (
        <div className="mt-3 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2.5">
          <p className="inline-flex items-center gap-1.5 text-sm text-destructive">
            <AlertCircle size={14} />
            {error}
          </p>
        </div>
      ) : null}

      {isLoading ? (
        <div className="mt-3 rounded-lg border border-border bg-card px-3 py-2.5">
          <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <Loader2 size={14} className="animate-spin" />
            Generating response...
          </p>
        </div>
      ) : null}

      {answer ? (
        <div className="mt-3 rounded-lg border border-primary/20 bg-primary/[0.04] p-4">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-primary">
            AI response
          </p>
          <div className="prose prose-sm max-w-none text-foreground">
            {answer.split('\n').map((line, idx) => {
              const trimmedLine = line.trim();
              if (!trimmedLine) return <br key={idx} />;
              
              if (trimmedLine.match(/^#+\s/)) {
                const level = trimmedLine.match(/^(#+)/)?.[1].length || 1;
                const text = trimmedLine.replace(/^#+\s/, '');
                const headingLevel = Math.min(level + 2, 6);

                if (headingLevel === 2) {
                  return <h2 key={idx} className="font-semibold mt-3 mb-1">{text}</h2>;
                }

                if (headingLevel === 3) {
                  return <h3 key={idx} className="font-semibold mt-3 mb-1">{text}</h3>;
                }

                if (headingLevel === 4) {
                  return <h4 key={idx} className="font-semibold mt-3 mb-1">{text}</h4>;
                }

                if (headingLevel === 5) {
                  return <h5 key={idx} className="font-semibold mt-3 mb-1">{text}</h5>;
                }

                return <h6 key={idx} className="font-semibold mt-3 mb-1">{text}</h6>;
              }
              
              if (trimmedLine.match(/^[\*\-]\s/)) {
                return (
                  <li key={idx} className="ml-4 text-sm leading-relaxed">
                    {trimmedLine.replace(/^[\*\-]\s/, '')}
                  </li>
                );
              }
              
              if (trimmedLine.match(/^\d+\.\s/)) {
                return (
                  <li key={idx} className="ml-4 text-sm leading-relaxed list-decimal">
                    {trimmedLine.replace(/^\d+\.\s/, '')}
                  </li>
                );
              }
              
              return <p key={idx} className="text-sm leading-relaxed mb-2">{line}</p>;
            })}
          </div>
        </div>
      ) : null}

      {starterPrompts.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {starterPrompts.map((starter) => (
            <motion.button
              key={starter}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                void handleStarter(starter);
              }}
              className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
              type="button"
            >
              {starter}
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
}
