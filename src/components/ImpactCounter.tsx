import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Clock,
  ArrowUpRight,
  Activity,
  CircleDot,
} from "lucide-react";

import type { ImpactStat } from "../types";

function AnimatedNumber({
  value,
  inView,
}: {
  value: string;
  inView: boolean;
}) {
  const reduceMotion = useReducedMotion();

  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  const target = match
    ? parseInt(match[2].replace(/,/g, ""), 10)
    : null;

  const [display, setDisplay] = useState<number | null>(
    target !== null ? 0 : null,
  );

  const animationFrame = useRef<number | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (target === null) return;

    if (!inView) {
      setDisplay(0);
      hasAnimated.current = false;
      return;
    }

    if (hasAnimated.current) return;

    hasAnimated.current = true;

    if (reduceMotion) {
      setDisplay(target);
      return;
    }

    const duration = 1400;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplay(Math.round(target * easedProgress));

      if (progress < 1) {
        animationFrame.current = requestAnimationFrame(animate);
      } else {
        setDisplay(target);
      }
    };

    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [inView, reduceMotion, target]);

  if (!match || target === null) {
    return <>{value}</>;
  }

  const [, prefix, , suffix] = match;

  return (
    <>
      {prefix}
      {(display ?? 0).toLocaleString()}
      {suffix}
    </>
  );
}

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
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

function FloatingOrb({
  className,
  delay = 0,
  duration = 5,
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
        y: [0, -12, 0],
        x: [0, 5, 0],
        scale: [1, 1.05, 1],
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

function FloatingLine({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute h-px origin-left bg-gradient-to-r from-[var(--color-emerald-glow)]/50 to-transparent ${className ?? ""}`}
      animate={{
        scaleX: [0.65, 1, 0.65],
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function MetricSignal() {
  return (
    <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--color-emerald-glow)]/20 bg-[var(--color-emerald-glow)]/10">
      <motion.div
        className="absolute inset-2 rounded-full border border-[var(--color-emerald-glow)]/40"
        animate={{
          scale: [1, 1.45, 1],
          opacity: [0.8, 0, 0.8],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      <Activity
        size={16}
        strokeWidth={2}
        className="relative text-[var(--color-emerald-glow)]"
      />
    </div>
  );
}

export function ImpactCounter({ stat }: { stat: ImpactStat }) {
  const ref = useRef<HTMLButtonElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={() => setOpen((value) => !value)}
      aria-expanded={open}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -7,
              transition: {
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1],
              },
            }
      }
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      className="group relative isolate flex min-h-[285px] w-full flex-col overflow-hidden rounded-[28px] border border-[var(--color-line-strong)] bg-[var(--color-surface)]/90 p-6 text-left shadow-[0_18px_70px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-colors duration-500 hover:border-[var(--color-emerald-glow)]/45 hover:bg-[var(--color-surface)]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,var(--color-emerald-glow)/12,transparent_36%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <FloatingOrb
          className="right-[-34px] top-[-38px] h-28 w-28 border border-[var(--color-emerald-glow)]/15 bg-[var(--color-emerald-glow)]/5 blur-[1px]"
          delay={0.2}
          duration={6}
        />

        <FloatingOrb
          className="bottom-[-30px] left-[-25px] h-20 w-20 border border-white/[0.04] bg-white/[0.025] blur-[2px]"
          delay={1}
          duration={7}
        />

        <FloatingLine
          className="right-8 top-[92px] w-24"
          delay={0.5}
        />

        <FloatingLine
          className="bottom-14 left-6 w-20"
          delay={1.5}
        />
      </div>

      <div className="relative flex h-full flex-col">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <MetricSignal />

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
                Impact metric
              </span>

              <span className="flex items-center gap-1.5 text-[10px] font-medium text-[var(--color-emerald-glow)]/80">
                <CircleDot size={9} />
                Live impact record
              </span>
            </div>
          </div>

          <motion.span
            animate={
              reduceMotion
                ? undefined
                : {
                    rotate: [0, 8, 0],
                    y: [0, -2, 0],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-bg)]/50 text-[var(--color-ink-faint)] transition-colors duration-300 group-hover:border-[var(--color-emerald-glow)]/30 group-hover:text-[var(--color-emerald-glow)]"
          >
            <ArrowUpRight size={15} />
          </motion.span>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-4">
            <motion.span
              className="font-serif text-5xl font-normal leading-none tracking-[-0.055em] text-[var(--color-ink)] md:text-6xl"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [0.88, 1, 0.88],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <AnimatedNumber
                value={stat.value}
                inView={inView}
              />
            </motion.span>

            <div className="pt-1">
              {stat.verified ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-emerald-glow)]/25 bg-[var(--color-emerald-glow)]/10 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-[var(--color-emerald-glow)]">
                  <ShieldCheck size={12} />
                  Verified
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/25 bg-amber-500/10 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-amber-300">
                  <Clock size={12} />
                  Provisional
                </span>
              )}
            </div>
          </div>

          <div className="mt-5 max-w-[230px]">
            <span className="text-sm font-medium leading-6 text-[var(--color-ink-dim)]">
              {stat.label}
            </span>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--color-ink-faint)]">
            <Sparkles
              size={12}
              className="text-[var(--color-emerald-glow)]"
            />
            <span>{open ? "Metric context" : "Explore metric"}</span>
          </div>

          <motion.span
            animate={{
              rotate: open ? 180 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-bg)]/40 text-[var(--color-ink-dim)] transition-colors duration-300 group-hover:border-[var(--color-emerald-glow)]/35 group-hover:text-[var(--color-emerald-glow)]"
          >
            <ChevronDown size={14} />
          </motion.span>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: open ? "auto" : 0,
            opacity: open ? 1 : 0,
            marginTop: open ? 16 : 0,
          }}
          transition={{
            duration: 0.38,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="overflow-hidden"
        >
          <div className="rounded-2xl border border-[var(--color-emerald-glow)]/15 bg-[var(--color-bg)]/75 p-4">
            <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-[var(--color-emerald-glow)]">
              <Sparkles size={12} />
              <span>Key metric context</span>
            </div>

            <p className="text-xs leading-6 text-[var(--color-ink-dim)]">
              {stat.detail}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.button>
  );
}