import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  tone?: "blue" | "gold" | "charcoal" | "cream";
}

const tones: Record<string, string> = {
  blue: "bg-blue/10 text-blue border-blue/25",
  gold: "bg-gold/10 text-gold border-gold/30",
  charcoal: "bg-charcoal/8 text-charcoal border-charcoal/20",
  cream: "bg-cream-soft/10 text-cream-soft border-cream-soft/30",
};

export function Badge({ children, tone = "blue" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
