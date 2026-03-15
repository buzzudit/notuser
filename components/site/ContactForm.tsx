"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/lib/site/api";
import { contactConversationOptions } from "@/data/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [conversationType, setConversationType] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedConversationType = conversationType.trim();
    const trimmedCompany = company.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName || !trimmedEmail || !trimmedConversationType || !trimmedMessage) {
      return;
    }

    setSending(true);
    try {
      const selectedConversation =
        contactConversationOptions.find(
          (option) => option.value === trimmedConversationType,
        )?.label ?? trimmedConversationType;

      const payload =
        `Name: ${trimmedName}\n` +
        `Email: ${trimmedEmail}\n\n` +
        `Conversation: ${selectedConversation}\n` +
        (trimmedCompany ? `Company / Team: ${trimmedCompany}\n\n` : "\n") +
        `${trimmedMessage}`;

      const result = await api.postMessage(payload);
      if ("ok" in result && result.ok === false) {
        toast.error(result.error);
        return;
      }

      toast.success("Message sent successfully");
      setName("");
      setEmail("");
      setConversationType("");
      setCompany("");
      setMessage("");
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm leading-relaxed text-muted-foreground">
        Use this form for hiring conversations, AI transformation work, portfolio
        deep dives, or strategy discussions. The more context you share, the more
        useful my response can be.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-foreground">
          <span>Name</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            required
            className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
          />
        </label>
        <label className="space-y-2 text-sm text-foreground">
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@company.com"
            required
            className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-foreground">
          <span>Conversation type</span>
          <select
            value={conversationType}
            onChange={(event) => setConversationType(event.target.value)}
            required
            className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground focus:border-primary/50 focus:outline-none"
          >
            <option value="">Select one</option>
            {contactConversationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 text-sm text-foreground">
          <span>Company or team</span>
          <input
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            placeholder="Optional"
            className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm text-foreground">
        <span>Message</span>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Share the role, challenge, or context and I will reply with the most relevant next step."
          rows={6}
          required
          className="w-full resize-none rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
        />
      </label>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {sending ? "Sending..." : "Send message"}
        <Send size={14} />
      </button>
    </form>
  );
}
