"use client";

import Link from "next/link";
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

type OrderedAnswerItem = {
  title: string;
  bullets: string[];
  paragraphs: string[];
};

function getNextNonEmptyLine(lines: string[], startIndex: number) {
  for (let index = startIndex; index < lines.length; index += 1) {
    const trimmedLine = lines[index].trim();
    if (trimmedLine) {
      return trimmedLine;
    }
  }

  return null;
}

function renderHeading(level: number, key: string, text: string) {
  const headingLevel = Math.min(level + 2, 6);

  if (headingLevel === 2) {
    return <h2 key={key} className="font-semibold mt-3 mb-1">{text}</h2>;
  }

  if (headingLevel === 3) {
    return <h3 key={key} className="font-semibold mt-3 mb-1">{text}</h3>;
  }

  if (headingLevel === 4) {
    return <h4 key={key} className="font-semibold mt-3 mb-1">{text}</h4>;
  }

  if (headingLevel === 5) {
    return <h5 key={key} className="font-semibold mt-3 mb-1">{text}</h5>;
  }

  return <h6 key={key} className="font-semibold mt-3 mb-1">{text}</h6>;
}

function renderInlineContent(text: string, keyPrefix: string) {
  const segments: React.ReactNode[] = [];
  const linkPattern = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null = linkPattern.exec(text);

  while (match) {
    const [fullMatch, label, href] = match;
    const startIndex = match.index;

    if (startIndex > lastIndex) {
      segments.push(text.slice(lastIndex, startIndex));
    }

    segments.push(
      <Link
        key={`${keyPrefix}-${startIndex}`}
        href={href}
        className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
      >
        {label}
      </Link>,
    );

    lastIndex = startIndex + fullMatch.length;
    match = linkPattern.exec(text);
  }

  if (lastIndex < text.length) {
    segments.push(text.slice(lastIndex));
  }

  return segments.length > 0 ? segments : text;
}

function renderAnswerBlocks(answer: string) {
  const lines = answer.split("\n");
  const blocks: React.ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      blocks.push(<br key={`br-${index}`} />);
      index += 1;
      continue;
    }

    if (trimmedLine.match(/^#+\s/)) {
      const level = trimmedLine.match(/^(#+)/)?.[1].length || 1;
      const text = trimmedLine.replace(/^#+\s/, "");
      blocks.push(renderHeading(level, `h-${index}`, text));
      index += 1;
      continue;
    }

    if (trimmedLine.match(/^\d+\.\s/)) {
      const items: OrderedAnswerItem[] = [];
      const start = index;

      while (index < lines.length) {
        const currentLine = lines[index].trim();

        if (!currentLine) {
          const nextNonEmpty = getNextNonEmptyLine(lines, index + 1);
          if (!nextNonEmpty || !nextNonEmpty.match(/^\d+\.\s/)) {
            break;
          }

          index += 1;
          continue;
        }

        if (!currentLine.match(/^\d+\.\s/)) {
          break;
        }

        const item: OrderedAnswerItem = {
          title: currentLine.replace(/^\d+\.\s/, ""),
          bullets: [],
          paragraphs: [],
        };
        index += 1;

        while (index < lines.length) {
          const detailLine = lines[index];
          const trimmedDetailLine = detailLine.trim();

          if (!trimmedDetailLine) {
            const nextNonEmpty = getNextNonEmptyLine(lines, index + 1);
            if (
              !nextNonEmpty ||
              nextNonEmpty.match(/^\d+\.\s/) ||
              nextNonEmpty.match(/^#+\s/)
            ) {
              index += 1;
              break;
            }

            index += 1;
            continue;
          }

          if (trimmedDetailLine.match(/^\d+\.\s/) || trimmedDetailLine.match(/^#+\s/)) {
            break;
          }

          if (trimmedDetailLine.match(/^[\*\-]\s/)) {
            item.bullets.push(trimmedDetailLine.replace(/^[\*\-]\s/, ""));
            index += 1;
            continue;
          }

          item.paragraphs.push(trimmedDetailLine);
          index += 1;
        }

        items.push(item);

        while (index < lines.length && !lines[index].trim()) {
          const nextNonEmpty = getNextNonEmptyLine(lines, index + 1);
          if (nextNonEmpty?.match(/^\d+\.\s/)) {
            index += 1;
            continue;
          }

          break;
        }
      }

      blocks.push(
        <ol key={`ol-${start}`} className="ml-6 list-decimal space-y-4">
          {items.map((item, itemIndex) => (
            <li key={`oli-${start}-${itemIndex}`} className="text-sm leading-relaxed">
              <p>{renderInlineContent(item.title, `olt-${start}-${itemIndex}`)}</p>
              {item.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={`olp-${start}-${itemIndex}-${paragraphIndex}`}
                  className="mt-2 text-sm leading-relaxed"
                >
                  {renderInlineContent(paragraph, `olp-${start}-${itemIndex}-${paragraphIndex}`)}
                </p>
              ))}
              {item.bullets.length > 0 ? (
                <ul className="mt-2 ml-5 list-disc space-y-1">
                  {item.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={`olb-${start}-${itemIndex}-${bulletIndex}`}
                      className="text-sm leading-relaxed"
                    >
                      {renderInlineContent(bullet, `olb-${start}-${itemIndex}-${bulletIndex}`)}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>,
      );
      continue;
    }

    if (trimmedLine.match(/^[\*\-]\s/)) {
      const items: string[] = [];
      const start = index;

      while (index < lines.length) {
        const currentLine = lines[index].trim();
        if (!currentLine) {
          const nextNonEmpty = getNextNonEmptyLine(lines, index + 1);
          if (!nextNonEmpty?.match(/^[\*\-]\s/)) {
            break;
          }

          index += 1;
          continue;
        }

        if (!currentLine.match(/^[\*\-]\s/)) {
          break;
        }

        items.push(currentLine.replace(/^[\*\-]\s/, ""));
        index += 1;
      }

      blocks.push(
        <ul key={`ul-${start}`} className="ml-6 list-disc space-y-1">
          {items.map((item, itemIndex) => (
            <li key={`uli-${start}-${itemIndex}`} className="text-sm leading-relaxed">
              {renderInlineContent(item, `uli-${start}-${itemIndex}`)}
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    blocks.push(
      <p key={`p-${index}`} className="mb-2 text-sm leading-relaxed">
        {renderInlineContent(line, `p-${index}`)}
      </p>,
    );
    index += 1;
  }

  return blocks;
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
          <div className="prose prose-sm max-w-none text-foreground">{renderAnswerBlocks(answer)}</div>
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
