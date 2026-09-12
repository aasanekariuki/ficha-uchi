import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Sparkles,
} from "lucide-react";

import type { Story } from "../types";
import { Img } from "./Image";
import { Badge } from "./Badge";

const categoryLabel: Record<string, string> = {
  learners: "Learner story",
  families: "Family story",
  volunteers: "Volunteer story",
  tailors: "Tailor story",
  youth: "Youth story",
  partners: "Partner story",
  team: "Team story",
};

const categoryAccent: Record<string, string> = {
  learners: "from-emerald-400/30 via-transparent to-transparent",
  families: "from-amber-300/25 via-transparent to-transparent",
  volunteers: "from-sky-300/25 via-transparent to-transparent",
  tailors: "from-rose-300/25 via-transparent to-transparent",
  youth: "from-violet-300/25 via-transparent to-transparent",
  partners: "from-cyan-300/25 via-transparent to-transparent",
  team: "from-lime-300/25 via-transparent to-transparent",
};

export function StoryCard({
  story,
  fixedWidth = true,
}: {
  story: Story;
  fixedWidth?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();

  const accent =
    categoryAccent[story.category] ??
    "from-[var(--color-emerald-glow)]/25 via-transparent to-transparent";

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -7,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }
      }
      transition={{
        duration: 0.55,
        ease: "easeOut",
      }}
      className={`group relative h-full ${
        fixedWidth ? "w-72 shrink-0 md:w-80" : "w-full"
      }`}
    >
      <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[2rem] bg-[var(--color-emerald-glow)]/0 blur-2xl transition-all duration-500 group-hover:bg-[var(--color-emerald-glow)]/[0.07]" />

      <Link
        to={`/stories/${story.slug}`}
        className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-500 hover:border-[var(--color-emerald-glow)]/45 hover:bg-[var(--color-surface-hover)] hover:shadow-[0_20px_55px_rgba(0,0,0,0.16)]"
      >
        {/* Decorative corner detail */}
        <div className="pointer-events-none absolute right-5 top-5 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white/80 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
          <ArrowRight
            size={13}
            className="-rotate-45 transition-transform duration-300 group-hover:rotate-0"
          />
        </div>

        {/* Image */}
        <div className="relative overflow-hidden rounded-[1.25rem] bg-[var(--color-bg-alt)]">
          <Img
            src={story.coverImage}
            alt={story.title}
            aspect="aspect-[4/3]"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

          <div
            className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-70 mix-blend-screen`}
          />

          <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/25 px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.13em] text-white/85 backdrop-blur-md">
              <Sparkles size={11} />
              Community voice
            </span>

            <motion.span
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: [0, -3, 0],
                    }
              }
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[var(--color-bg)] shadow-lg"
            >
              <ArrowRight size={14} />
            </motion.span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between px-1 pt-5">
          <div>
            <div className="flex items-center justify-between gap-3">
              <Badge tone="gold">
                {categoryLabel[story.category] ?? story.category}
              </Badge>

              <span className="flex shrink-0 items-center gap-1.5 text-[10px] uppercase tracking-[0.08em] text-[var(--color-ink-faint)]">
                <Calendar size={11} />
                {story.date}
              </span>
            </div>

            <h3 className="mt-4 font-serif text-[1.45rem] font-normal leading-[1.15] tracking-[-0.025em] text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-emerald-glow)]">
              {story.title}
            </h3>

            <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--color-ink-dim)]">
              {story.excerpt}
            </p>
          </div>

          {/* Footer */}
          <div className="mt-7 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-faint)] transition-colors duration-300 group-hover:text-[var(--color-ink-dim)]">
              Read story
            </span>

            <span className="relative flex items-center gap-2 text-xs font-semibold text-[var(--color-emerald-glow)]">
              Explore
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-emerald-glow)]/25 bg-[var(--color-emerald-glow)]/10 transition-all duration-300 group-hover:border-[var(--color-emerald-glow)]/60 group-hover:bg-[var(--color-emerald-glow)]/20">
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </span>
            </span>
          </div>
        </div>

        {/* Bottom animated progress line */}
        <span className="absolute bottom-0 left-5 right-5 h-px origin-left scale-x-0 bg-gradient-to-r from-[var(--color-emerald-glow)] via-[var(--color-emerald-glow)]/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

        {/* Subtle top highlight */}
        <span className="pointer-events-none absolute left-10 right-10 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </Link>
    </motion.article>
  );
}