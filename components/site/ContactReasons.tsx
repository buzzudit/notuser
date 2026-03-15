"use client";

import { motion } from "framer-motion";
import { Brain, GraduationCap, Mic, UserCheck } from "lucide-react";

type ContactReasonsProps = {
  reasons: string[];
};

const icons = [
  <UserCheck key="user" size={18} className="text-primary" />,
  <Brain key="brain" size={18} className="text-primary" />,
  <GraduationCap key="grad" size={18} className="text-primary" />,
  <Mic key="mic" size={18} className="text-primary" />,
];

export function ContactReasons({ reasons }: ContactReasonsProps) {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {reasons.map((reason, index) => (
        <motion.li
          key={reason}
          whileHover={{ y: -2 }}
          className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/20"
        >
          <div className="mb-3">{icons[index % icons.length]}</div>
          <p className="text-sm leading-relaxed text-muted-foreground">{reason}</p>
        </motion.li>
      ))}
    </ul>
  );
}
