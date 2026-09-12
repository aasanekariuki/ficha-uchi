import { useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export function InteractiveProcess({ steps }: { steps: ProcessStep[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
        {steps.map((step, i) => (
          <button
            key={step.id}
            onClick={() => setActive(i)}
            className={`flex shrink-0 items-center gap-3 rounded-sm border px-4 py-3 text-left transition-colors lg:shrink ${
              active === i
                ? "border-blue bg-blue text-cream-soft"
                : "border-charcoal/15 text-charcoal/70 hover:border-charcoal/30"
            }`}
          >
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
                active === i ? "bg-cream-soft/20 text-cream-soft" : "bg-charcoal/8 text-charcoal/60"
              }`}
            >
              {i + 1}
            </span>
            <span className="whitespace-nowrap text-sm font-medium lg:whitespace-normal">{step.title}</span>
          </button>
        ))}
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
        className="flex flex-col gap-4 border border-charcoal/10 bg-cream-soft p-8"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-blue/10 text-blue">
          {steps[active]!.icon}
        </div>
        <h3 className="font-display text-2xl text-charcoal">{steps[active]!.title}</h3>
        <p className="max-w-prose text-base leading-relaxed text-charcoal/65">
          {steps[active]!.description}
        </p>
        <div className="mt-2 flex gap-2">
          {steps.map((_, i) => (
            <span
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors ${
                i === active ? "bg-blue" : "bg-charcoal/10"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
