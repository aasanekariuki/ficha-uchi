import {
  HandCoins,
  Clock,
  Building2,
  Share2,
  ArrowUpRight,
  Sparkles,
  MoveUpRight,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

import { LinkButton } from "./Button";

const pathways = [
  {
    id: "support",
    title: "Support",
    description: "Help fund a specific initiative.",
    to: "/get-involved",
    icon: HandCoins,
    accent: "from-amber-400/20 via-transparent to-transparent",
  },
  {
    id: "volunteer",
    title: "Volunteer",
    description: "Give time, skills, or expertise.",
    to: "/volunteer",
    icon: Clock,
    accent: "from-sky-400/20 via-transparent to-transparent",
  },
  {
    id: "partner",
    title: "Partner",
    description: "Work with us as an organization, school, or company.",
    to: "/partners",
    icon: Building2,
    accent: "from-emerald-400/20 via-transparent to-transparent",
  },
  {
    id: "share",
    title: "Spread the word",
    description: "Share campaigns and stories with your network.",
    to: "/get-involved",
    icon: Share2,
    accent: "from-violet-400/20 via-transparent to-transparent",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function CTASection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-bg-alt)] py-20 md:py-28">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-[var(--color-emerald-glow)]/[0.07] blur-[120px]" />
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-emerald-500/[0.06] blur-[100px]" />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-blue-500/[0.04] blur-[120px]" />
      </div>

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 75%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 75%, transparent)",
        }}
      />

      {/* Decorative corner mark */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[7%] top-16 hidden text-[var(--color-emerald-glow)]/[0.16] md:block"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                rotate: [0, 8, 0],
                y: [0, -8, 0],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={92} strokeWidth={0.8} />
      </motion.div>

      <div className="container-edit relative z-10">
        <motion.div
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
          className="mx-auto max-w-6xl"
        >
          {/* Section heading */}
          <motion.div variants={itemVariants} className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--color-emerald-glow)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-emerald-glow)]">
                Get involved
              </span>
            </div>

            <h2 className="max-w-xl text-balance font-serif text-3xl font-normal leading-[1.12] text-[var(--color-ink)] sm:text-4xl md:text-5xl">
              There&apos;s more than one way to be part of this
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--color-ink-dim)] sm:text-base">
              Not everyone wants to donate — and that&apos;s fine. Whether you
              give your time, skills, resources, or reach, there&apos;s a
              meaningful way to contribute.
            </p>
          </motion.div>

          {/* Pathway cards */}
          <motion.div
            variants={containerVariants}
            className="mt-12 grid overflow-hidden rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-line)] shadow-2xl shadow-black/10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4"
          >
            {pathways.map(
              ({ id, title, description, to, icon: Icon, accent }, index) => (
                <motion.div
                  key={id}
                  variants={itemVariants}
                  className="relative"
                >
                  <LinkButton
                    as="link"
                    to={to}
                    variant="ghost"
                    className="group relative flex min-h-[290px] h-full !rounded-none border-0 bg-[var(--color-surface)] p-6 text-left transition-colors duration-500 hover:bg-[var(--color-surface-hover)] sm:p-7 lg:min-h-[310px]"
                  >
                    {/* Card gradient reveal */}
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                    />

                    {/* Animated top accent */}
                    <motion.div
                      className="absolute left-0 right-0 top-0 h-px origin-left bg-[var(--color-emerald-glow)]"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />

                    <div className="relative z-10 flex h-full w-full flex-col justify-between gap-12">
                      <div className="flex items-start justify-between">
                        <motion.div
                          className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-line-strong)] bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)]"
                          whileHover={
                            prefersReducedMotion
                              ? undefined
                              : {
                                  scale: 1.08,
                                  rotate: -5,
                                }
                          }
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 18,
                          }}
                        >
                          <Icon size={21} strokeWidth={1.7} />

                          <span className="absolute inset-0 rounded-xl border border-[var(--color-emerald-glow)] opacity-0 transition-opacity duration-300 group-hover:opacity-30" />
                        </motion.div>

                        <motion.div
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-line-strong)] text-[var(--color-ink-faint)] transition-colors duration-300 group-hover:border-[var(--color-emerald-glow)] group-hover:text-[var(--color-emerald-glow)]"
                          whileHover={
                            prefersReducedMotion
                              ? undefined
                              : {
                                  x: 3,
                                  y: -3,
                                }
                          }
                        >
                          <ArrowUpRight size={16} strokeWidth={1.8} />
                        </motion.div>
                      </div>

                      <div>
                        <div className="mb-4 flex items-center gap-2">
                          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
                            0{index + 1}
                          </span>
                          <span className="h-px w-5 bg-[var(--color-line-strong)] transition-all duration-300 group-hover:w-8 group-hover:bg-[var(--color-emerald-glow)]" />
                        </div>

                        <h3 className="font-serif text-2xl font-normal leading-tight text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-emerald-glow)]">
                          {title}
                        </h3>

                        <p className="mt-3 max-w-[15rem] text-sm leading-6 text-[var(--color-ink-dim)]">
                          {description}
                        </p>

                        <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-faint)] transition-colors duration-300 group-hover:text-[var(--color-emerald-glow)]">
                          Explore pathway
                          <MoveUpRight
                            size={13}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </div>
                      </div>
                    </div>
                  </LinkButton>
                </motion.div>
              ),
            )}
          </motion.div>

          {/* Closing micro-message */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center gap-3 text-xs text-[var(--color-ink-faint)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald-glow)]" />
            <span>Small actions can create lasting change.</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}