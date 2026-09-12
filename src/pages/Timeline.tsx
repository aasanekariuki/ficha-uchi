import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  CalendarDays,
  CircleDot,
  Compass,
  Sparkles,
  Star,
} from "lucide-react";

import { Seo } from "../components/Seo";
import { SectionHeader } from "../components/SectionHeader";
import { Timeline } from "../components/Timeline";
import { timelineEvents } from "../data/timeline";

function FloatingOrb({
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
        y: [0, -16, 0],
        x: [0, 8, 0],
        scale: [1, 1.06, 1],
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

function FloatingDiamond({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute rotate-45 border border-[var(--color-emerald-glow)]/25 bg-[var(--color-emerald-glow)]/5 ${className ?? ""}`}
      animate={{
        rotate: [45, 55, 45],
        y: [0, -10, 0],
        opacity: [0.35, 0.8, 0.35],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function JourneyOrbit() {
  return (
    <div className="relative hidden h-[280px] w-[280px] shrink-0 lg:block">
      <motion.div
        className="absolute inset-5 rounded-full border border-[var(--color-line-strong)]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute inset-12 rounded-full border border-dashed border-[var(--color-emerald-glow)]/30"
        animate={{ rotate: -360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.04, 1],
            boxShadow: [
              "0 0 0 rgba(95,165,132,0)",
              "0 0 55px rgba(95,165,132,0.15)",
              "0 0 0 rgba(95,165,132,0)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-32 w-32 flex-col items-center justify-center rounded-full border border-[var(--color-emerald-glow)]/25 bg-[var(--color-surface)]/90 text-center backdrop-blur-xl"
        >
          <Compass
            size={25}
            strokeWidth={1.5}
            className="mb-3 text-[var(--color-emerald-glow)]"
          />
          <span className="font-serif text-2xl text-[var(--color-ink)]">
            2013
          </span>
          <span className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
            The beginning
          </span>
        </motion.div>
      </div>

      <motion.div
        className="absolute left-2 top-20 flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] text-[var(--color-emerald-glow)] shadow-xl"
        animate={{ y: [0, -8, 0], rotate: [0, -6, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <CalendarDays size={16} />
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] text-amber-300 shadow-xl"
        animate={{ y: [0, 8, 0], rotate: [0, 10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <Star size={14} />
      </motion.div>

      <motion.div
        className="absolute right-2 top-8 h-2 w-2 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_18px_var(--color-emerald-glow)]"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export function TimelinePage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-glow)] selection:text-[var(--color-bg)]">
      <Seo
        title="Timeline"
        description="Ficha Uchi's history — from founding in Mathare in 2013 to current initiatives."
        path="/timeline"
      />

      <section className="relative overflow-hidden bg-[var(--color-bg-alt)] pt-28 pb-20 sm:pt-32 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,106,79,0.24),transparent_62%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(45,106,79,0.14),transparent_58%)]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          <FloatingOrb
            className="right-[8%] top-28 h-24 w-24 border border-[var(--color-emerald-glow)]/15 bg-[var(--color-emerald-glow)]/5 blur-[1px]"
            delay={0.4}
            duration={7}
          />

          <FloatingOrb
            className="bottom-[-40px] left-[12%] h-36 w-36 border border-white/[0.035] bg-white/[0.02] blur-[2px]"
            delay={1}
            duration={8}
          />

          <FloatingDiamond
            className="right-[30%] top-24 h-5 w-5"
            delay={0.8}
          />

          <FloatingDiamond
            className="bottom-20 left-[42%] h-3 w-3 border-amber-300/20 bg-amber-300/5"
            delay={1.5}
          />

          <motion.div
            className="absolute left-[7%] top-[42%] h-px w-28 origin-left bg-gradient-to-r from-[var(--color-emerald-glow)]/50 to-transparent"
            animate={{
              scaleX: [0.5, 1, 0.5],
              opacity: [0.25, 0.75, 0.25],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container-edit relative z-10">
          <div className="flex flex-col items-start justify-between gap-14 lg:flex-row lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-3xl"
            >
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-emerald-glow)] backdrop-blur-md"
              >
                <Sparkles size={13} />
                Our journey
              </motion.span>

              <h1 className="mt-7 max-w-3xl text-balance font-serif text-5xl font-normal leading-[1.02] tracking-[-0.045em] text-[var(--color-ink)] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
                How we
                <span className="block text-[var(--color-emerald-glow)]">
                  got here.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-[var(--color-ink-dim)] sm:text-lg md:text-xl md:leading-8">
                Tracing the people, milestones, and moments that shaped our
                work — from a local beginning to a growing movement for
                community-led change.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.45,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-9 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-faint)]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/60">
                  <ArrowDown
                    size={14}
                    className="text-[var(--color-emerald-glow)]"
                  />
                </span>
                <span>Explore the milestones</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                rotate: -8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <JourneyOrbit />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
              delay: 0.65,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-16 h-px origin-left bg-gradient-to-r from-[var(--color-emerald-glow)]/40 via-[var(--color-line-strong)] to-transparent md:mt-20"
          >
            <span className="sr-only">Timeline introduction divider</span>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-[var(--color-bg)] py-20 sm:py-24 md:py-32">
        <div className="pointer-events-none absolute left-0 top-32 h-72 w-72 rounded-full bg-[var(--color-emerald-glow)]/[0.035] blur-3xl" />
        <div className="pointer-events-none absolute bottom-20 right-0 h-80 w-80 rounded-full bg-emerald-900/[0.04] blur-3xl" />

        <div className="container-edit relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <SectionHeader
              title="From 2013 to now"
              description="A living record of our growth, community impact, and organizational evolution. Only the founding year is currently verified; other entries remain placeholders pending confirmed dates."
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 28,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.08,
            }}
            transition={{
              delay: 0.15,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mt-14 md:mt-16"
          >
            <div className="pointer-events-none absolute -left-5 -top-6 hidden h-12 w-12 rounded-tl-2xl border-l border-t border-[var(--color-emerald-glow)]/25 md:block" />
            <div className="pointer-events-none absolute -bottom-6 -right-5 hidden h-12 w-12 rounded-br-2xl border-b border-r border-[var(--color-emerald-glow)]/25 md:block" />

            <div className="relative rounded-[30px] border border-[var(--color-line)] bg-[var(--color-surface)]/[0.22] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.08)] sm:p-6 md:p-8">
              <div className="pointer-events-none absolute right-6 top-6 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-emerald-glow)]" />
                Archive view
              </div>

              <div className="pt-5 sm:pt-3">
                <Timeline events={timelineEvents} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.2,
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-[var(--color-line)] pt-7 sm:flex-row sm:items-center md:mt-20"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--color-line-strong)] bg-[var(--color-surface)] text-[var(--color-emerald-glow)]">
                <CircleDot size={15} />
              </span>

              <p className="max-w-md text-xs leading-5 text-[var(--color-ink-faint)]">
                Every milestone represents people, decisions, and shared work.
                The timeline will continue to evolve as records are confirmed.
              </p>
            </div>

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      x: [0, 4, 0],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)]"
            >
              Still becoming
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}