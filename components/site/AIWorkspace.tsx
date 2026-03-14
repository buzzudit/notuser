"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { circlePrompts } from "@/data/site";

interface AIWorkspaceProps {
  onSubmit?: (message: string) => void;
  compact?: boolean;
  prefill?: string;
}

export function AIWorkspace({
  onSubmit,
  compact = false,
  prefill = "",
}: AIWorkspaceProps) {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (prefill) {
      setInput(prefill);
    }
  }, [prefill]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!input.trim()) return;

    onSubmit?.(input.trim());
    setInput("");
  };

  const handleStarter = (text: string) => {
    setInput(text);
    onSubmit?.(text);
  };

  return (
    <div className={`w-full ${compact ? "" : "mx-auto max-w-2xl"}`}>
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
            disabled={!input.trim()}
            aria-label="Send message"
            className="mr-2 rounded-md p-2 text-muted-foreground transition-colors hover:text-primary disabled:opacity-30"
          >
            <Send size={16} />
          </button>
        </div>
      </form>

      {!compact && (
        <div className="mt-4 flex flex-wrap gap-2">
          {circlePrompts.slice(0, 4).map((starter) => (
            <motion.button
              key={starter}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleStarter(starter)}
              className="rounded-md border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
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
