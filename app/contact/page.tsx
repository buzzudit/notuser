"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { PageLayout } from "@/components/site/layout/PageLayout";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";
import { api } from "@/lib/site/api";

export default function ContactPage() {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) return;

    setSending(true);
    try {
      const result = await api.postMessage(trimmed);
      if ("ok" in result && result.ok === false) {
        toast.error(result.error);
        return;
      }
      toast.success("Message sent successfully");
      setMessage("");
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Contact</SectionLabel>
        <SectionHeading>Let&apos;s talk</SectionHeading>
        <SectionDescription>
          Have a project in mind, want to collaborate, or just want to say hello?
          Send a message and I&apos;ll get back to you.
        </SectionDescription>
      </SectionShell>

      <SectionShell className="pt-0 md:pt-0">
        <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-4">
          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Your message
            </label>
            <textarea
              id="contact-message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Tell me about your project, idea, or question..."
              rows={6}
              required
              className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:glow-shadow"
            />
          </div>
          <button
            type="submit"
            disabled={sending || !message.trim()}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {sending ? "Sending..." : "Send message"}
            <Send size={14} />
          </button>
        </form>
      </SectionShell>
    </PageLayout>
  );
}
