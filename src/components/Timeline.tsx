import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Clock,
  Compass,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import type { TimelineEvent } from "../types";
import { Img } from "./Image";

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function FloatingShape({
  className,
  delay = 0,
  duration = 6,
}: {
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${className ?? ""}`}
      animate={{
        y: [0, -10, 0],
        x: [0, 5, 0],
        rotate: [0, 5, 0],
        opacity: [0.35, 0.8, 0.35],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function TimelineNode({
  verified,
  active,
}: {
  verified: boolean;
  active: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative z-20 flex h-12 w-12 shrink-0 items-center justify-center">
      {!reduceMotion && (
        <motion.span
          aria-hidden="true"
          className="absolute inset-1 rounded-full border border-[var(--color-emerald-glow)]/30"
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      )}

      <span
        className={`relative flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-xl transition-colors duration-300 ${
          active
            ? "border-[var(--color-emerald-glow)]/60 bg-[var(--color-emerald-glow)] text-[var(--color-bg)] shadow-[0_0_24px_rgba(95,165,132,0.24)]"
            : "border-[var(--color-line-strong)] bg-[var(--color-surface)] text-[var(--color-emerald-glow)]"
        }`}
      >
        {verified ? <Check size={16} strokeWidth={2.5} /> : <Clock size={15} />}
      </span>
    </div>
  );
}

function TimelineItem({
  event,
  index,
  total,
}: {
  event: TimelineEvent;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const reduceMotion = useReducedMotion();
  const isLast = index === total - 1;

  return (
    <motion.article
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -5,
              transition: {
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1],
              },
            }
      }
      className={`group relative flex gap-5 md:min-w-[350px] md:max-w-[390px] md:flex-1 md:flex-col md:gap-0 ${
        isLast ? "pb-0" : "pb-12"
      } md:pb-0`}
      style={{
        scrollSnapAlign: "start",
      }}
    >
      <div className="relative flex shrink-0 flex-col items-center md:mb-6 md:flex-row md:items-center">
        <TimelineNode
          verified={Boolean(event.verified)}
          active={inView}
        />

        {!isLast && (
          <span
            aria-hidden="true"
            className="absolute left-6 top-12 h-[calc(100%+3rem)] w-px bg-gradient-to-b from-[var(--color-emerald-glow)]/45 via-[var(--color-line-strong)] to-[var(--color-line)] md:left-12 md:top-6 md:h-px md:w-[calc(100%+2rem)] md:bg-gradient-to-r"
          />
        )}
      </div>

      <div className="relative min-w-0 flex-1 overflow-hidden rounded-[26px] border border-[var(--color-line-strong)] bg-[var(--color-surface)]/85 p-5 shadow-[0_16px_55px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-500 group-hover:border-[var(--color-emerald-glow)]/45 group-hover:bg-[var(--color-surface)]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,var(--color-emerald-glow)/10,transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <FloatingShape
            className="right-[-25px] top-[-25px] h-24 w-24 border border-[var(--color-emerald-glow)]/15 bg-[var(--color-emerald-glow)]/5"
            delay={index * 0.2}
            duration={6 + index * 0.4}
          />

          <motion.div
            aria-hidden="true"
            className="absolute bottom-5 right-5 h-1.5 w-1.5 rounded-full bg-[var(--color-emerald-glow)]"
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.8, 1],
                    opacity: [0.35, 1, 0.35],
                  }
            }
            transition={{
              duration: 2.5,
              delay: index * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {event.image && (
          <div className="relative mb-5 overflow-hidden rounded-2xl border border-[var(--color-line)]">
            <Img
              src={event.image}
              alt={event.title}
              aspect="aspect-[16/9]"
              className="transition-transform duration-700 group-hover:scale-[1.04]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/35 via-transparent to-transparent" />

            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
              <Compass size={11} />
              Milestone archive
            </div>
          </div>
        )}

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="font-serif text-3xl font-normal leading-none tracking-[-0.04em] text-[var(--color-emerald-glow)]">
              {event.year}
            </p>

            <div className="mt-2 h-px w-10 bg-[var(--color-emerald-glow)]/40 transition-all duration-500 group-hover:w-16" />
          </div>

          {event.verified ? (
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[var(--color-emerald-glow)]/25 bg-[var(--color-emerald-glow)]/10 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-[var(--color-emerald-glow)]">
              <ShieldCheck size={12} />
              Verified
            </span>
          ) : (
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[var(--color-emerald-glow)]/25 bg-[var(--color-emerald-glow)]/10 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-[var(--color-emerald-glow)]">
              <ShieldCheck size={12} />
              Verified
            </span>
          )}
        </div>

        <h3 className="relative mt-5 font-serif text-xl font-normal leading-snug tracking-[-0.02em] text-[var(--color-ink)]">
          {event.title}
        </h3>

        <p className="relative mt-3 max-w-sm text-sm leading-6 text-[var(--color-ink-dim)]">
          {event.description}
        </p>

        <div className="relative mt-6 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
          <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
            <Sparkles
              size={12}
              className="text-[var(--color-emerald-glow)]"
            />
            <span>Chapter {String(index + 1).padStart(2, "0")}</span>
          </div>

          <motion.span
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, 3, 0],
                    opacity: [0.5, 1, 0.5],
                  }
            }
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-[var(--color-ink-faint)] transition-colors duration-300 group-hover:text-[var(--color-emerald-glow)]"
          >
            <ArrowUpRight size={16} />
          </motion.span>
        </div>
      </div>
    </motion.article>
  );
}

export function Timeline({ events }: { events: TimelineEvent[] }) {
  if (!events.length) {
    return (
      <div className="rounded-3xl border border-dashed border-[var(--color-line-strong)] bg-[var(--color-surface)]/40 px-6 py-14 text-center">
        <Sparkles
          size={22}
          className="mx-auto mb-4 text-[var(--color-emerald-glow)]"
        />
        <p className="font-serif text-xl text-[var(--color-ink)]">
          The story is still unfolding.
        </p>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[var(--color-ink-dim)]">
          New milestones will appear here as the archive grows.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-emerald-glow)]" />
          <span>{events.length} recorded milestones</span>
        </div>

        <div className="hidden items-center gap-2 text-[10px] font-medium text-[var(--color-ink-faint)] sm:flex">
          <span>Scroll to explore</span>
          <ArrowUpRight size={13} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:gap-8 md:overflow-x-auto md:pb-6 md:pt-2 md:[scrollbar-color:var(--color-line-strong)_transparent] md:[scrollbar-width:thin]">
        {events.map((event, index) => (
          <TimelineItem
            key={event.id}
            event={event}
            index={index}
            total={events.length}
          />
        ))}
      </div>
    </div>
  );
}