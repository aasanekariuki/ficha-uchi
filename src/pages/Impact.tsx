import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  GraduationCap,
  Heart,
  Leaf,
  Scissors,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

import { Seo } from "../components/Seo";
import { SectionHeader } from "../components/SectionHeader";
import { ImpactCounter } from "../components/ImpactCounter";
import { impactStats, impactByYear } from "../data/impact";
import { CTASection } from "../components/CTASection";

const years = impactByYear.map((d) => d.year);
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const sectorCards = [
  {
    title: "Schools",
    icon: GraduationCap,
    description:
      "A growing network of schools creates access to opportunity, confidence, and practical support for learners.",
    status: "Expansion pending",
    number: "01",
  },
  {
    title: "Tailors",
    icon: Scissors,
    description:
      "Local tailors are part of the impact story, helping transform community support into meaningful economic activity.",
    status: "Network growth",
    number: "02",
  },
  {
    title: "Volunteers",
    icon: Users,
    description:
      "Volunteers contribute time, energy, and skills that keep initiatives moving and communities connected.",
    status: "Program formalization",
    number: "03",
  },
];

export function Impact() {
  const [year, setYear] = useState<string>("all");

  const filtered = useMemo(
    () =>
      year === "all"
        ? impactByYear
        : impactByYear.filter((d) => d.year === year),
    [year]
  );

  const maxLearners = Math.max(...impactByYear.map((d) => d.learners));
  const latestYear = impactByYear[impactByYear.length - 1];
  const firstYear = impactByYear[0];

  const growthPercentage =
    firstYear?.learners && latestYear?.learners
      ? Math.round(
          ((latestYear.learners - firstYear.learners) / firstYear.learners) *
            100
        )
      : 0;

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-glow)] selection:text-[var(--color-bg)]">
      <Seo
        title="Impact"
        description="Ficha Uchi's impact dashboard — learners reached, tailors engaged, uniforms distributed, and how those figures have grown year over year."
        path="/impact"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-bg-alt)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-48 h-[38rem] w-[38rem] rounded-full bg-[var(--color-emerald-glow)]/[0.08] blur-3xl" />
          <div className="absolute -bottom-48 -left-40 h-[30rem] w-[30rem] rounded-full bg-emerald-950/30 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(var(--color-ink)_1px,transparent_1px),linear-gradient(90deg,var(--color-ink)_1px,transparent_1px)] [background-size:52px_52px]" />
        </div>

        {/* Floating decorative objects */}
        <FloatingObject
          className="left-[7%] top-[22%] hidden md:block"
          delay={0}
          duration={5}
        >
          <Leaf size={20} />
        </FloatingObject>

        <FloatingObject
          className="right-[10%] top-[24%] hidden lg:block"
          delay={0.8}
          duration={6}
        >
          <Heart size={18} />
        </FloatingObject>

        <FloatingObject
          className="bottom-[15%] right-[28%] hidden md:block"
          delay={1.4}
          duration={5.5}
        >
          <Sparkles size={16} />
        </FloatingObject>

        <div className="container-edit relative z-10 py-24 sm:py-28 md:py-32">
          <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_330px] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="max-w-4xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-emerald-glow)] backdrop-blur-md">
                <Sparkles size={14} />
                Impact dashboard
              </div>

              <h1 className="max-w-4xl text-balance font-serif text-5xl font-normal leading-[0.98] tracking-[-0.045em] text-[var(--color-ink)] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
                The numbers, and what&apos;s behind them.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--color-ink-dim)] sm:text-lg sm:leading-8">
                Every statistic represents people reached, opportunities
                created, and communities moving forward together.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[var(--color-ink-dim)]">
                <span className="inline-flex items-center gap-2">
                  <TrendingUp
                    size={15}
                    className="text-[var(--color-emerald-glow)]"
                  />
                  Measurable progress
                </span>

                <span className="h-1 w-1 rounded-full bg-[var(--color-ink-faint)]" />

                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={15} />
                  Transparent reporting
                </span>
              </div>
            </motion.div>

            {/* Hero data card */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="relative"
            >
              <div className="rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)]/75 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
                      At a glance
                    </p>
                    <p className="mt-2 text-sm font-medium text-[var(--color-ink)]">
                      Our growing footprint
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)]">
                    <TrendingUp size={17} />
                  </div>
                </div>

                <div className="relative mb-6 h-24 overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-bg)] p-4">
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--color-emerald-glow)]/[0.08] to-transparent" />

                  <svg
                    viewBox="0 0 300 80"
                    preserveAspectRatio="none"
                    className="absolute inset-x-3 bottom-2 h-16 w-[calc(100%-1.5rem)]"
                    aria-hidden="true"
                  >
                    <motion.path
                      d="M0 68 C30 64, 40 52, 68 56 S108 40, 135 45 S170 27, 198 31 S240 14, 300 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="text-[var(--color-emerald-glow)]"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.6, delay: 0.5, ease }}
                    />
                    <motion.path
                      d="M0 68 C30 64, 40 52, 68 56 S108 40, 135 45 S170 27, 198 31 S240 14, 300 5 L300 80 L0 80 Z"
                      fill="currentColor"
                      className="text-[var(--color-emerald-glow)]/[0.08]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                  </svg>

                  <div className="relative z-10 flex items-start justify-between">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
                      Growth trajectory
                    </span>
                    <ArrowUpRight
                      size={15}
                      className="text-[var(--color-emerald-glow)]"
                    />
                  </div>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                      {growthPercentage > 0 ? `+${growthPercentage}%` : "—"}
                    </p>
                    <p className="mt-1 text-xs text-[var(--color-ink-faint)]">
                      Growth across reported years
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-[var(--color-ink-faint)]">
                      Latest year
                    </p>
                    <p className="mt-1 text-sm font-medium text-[var(--color-ink)]">
                      {latestYear?.year || "Pending"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="relative border-b border-[var(--color-line)] bg-[var(--color-bg-alt)] py-16 sm:py-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--color-emerald-glow)]/30 to-transparent" />

        <div className="container-edit">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)]">
                The current picture
              </p>
              <h2 className="mt-3 font-serif text-3xl font-normal tracking-[-0.03em] text-[var(--color-ink)] sm:text-4xl">
                Impact in numbers
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[var(--color-ink-dim)]">
              A snapshot of the people, partners, and resources connected to
              the work.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease,
                }}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[var(--color-emerald-glow)]/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
                <div className="relative h-full">
                  <ImpactCounter stat={stat} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Chart */}
      <section className="relative bg-[var(--color-bg)] py-20 sm:py-24 md:py-28">
        <FloatingObject
          className="right-[8%] top-[16%] hidden xl:block"
          delay={0.3}
          duration={6}
        >
          <TrendingUp size={19} />
        </FloatingObject>

        <div className="container-edit">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease }}
            >
              <SectionHeader
                title="Growth over time"
                description="Learners reached per year. Filter by year to explore the underlying figures."
              />

              <div className="mt-8 rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg-alt)] p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)]">
                    <TrendingUp size={18} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
                      Tracking progress
                    </p>
                    <p className="mt-1 text-sm font-medium text-[var(--color-ink)]">
                      Annual learner reach
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-[var(--color-ink-dim)]">
                  Figures marked as pending should be replaced with verified
                  reporting data before publication.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="min-w-0"
            >
              {/* Year filters */}
              <div className="flex flex-wrap gap-2">
                <YearButton
                  label="All years"
                  active={year === "all"}
                  onClick={() => setYear("all")}
                />

                {years.map((item) => (
                  <YearButton
                    key={item}
                    label={item}
                    active={year === item}
                    onClick={() => setYear(item)}
                  />
                ))}
              </div>

              {/* Chart */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)]/50 p-5 shadow-xl shadow-black/[0.03] backdrop-blur-xl sm:p-7 md:p-8">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
                      Learners reached
                    </p>
                    <p className="mt-2 text-2xl font-medium tracking-[-0.04em] text-[var(--color-ink)]">
                      {filtered
                        .reduce((sum, item) => sum + item.learners, 0)
                        .toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[var(--color-ink-faint)]">
                    <span className="h-2 w-2 rounded-full bg-[var(--color-emerald-glow)]" />
                    Reported reach
                  </div>
                </div>

                <div className="relative h-72">
                  {/* Chart grid lines */}
                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-between pb-9">
                    {[0, 1, 2, 3].map((line) => (
                      <div
                        key={line}
                        className="border-t border-dashed border-[var(--color-line)]"
                      />
                    ))}
                  </div>

                  <div className="relative flex h-full items-end gap-3 border-b border-[var(--color-line-strong)] pb-9 sm:gap-5 md:gap-7">
                    <AnimatePresence mode="wait">
                      {filtered.map((data, index) => {
                        const height = Math.max(
                          (data.learners / maxLearners) * 205,
                          12
                        );

                        return (
                          <motion.div
                            key={data.year}
                            layout
                            initial={{ opacity: 0, scaleY: 0, y: 20 }}
                            animate={{ opacity: 1, scaleY: 1, y: 0 }}
                            exit={{ opacity: 0, scaleY: 0, y: 20 }}
                            transition={{
                              duration: 0.65,
                              delay: index * 0.08,
                              ease,
                            }}
                            className="group flex min-w-0 flex-1 flex-col items-center justify-end gap-3"
                            style={{ transformOrigin: "bottom" }}
                          >
                            <div className="relative flex w-full justify-center">
                              <motion.div
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: 0.35 + index * 0.08,
                                }}
                                className="absolute -top-7 whitespace-nowrap text-[10px] font-mono text-[var(--color-emerald-glow)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-xs"
                              >
                                {data.learners.toLocaleString()}
                              </motion.div>

                              <div
                                className="relative w-full max-w-[58px] overflow-hidden rounded-t-xl bg-[var(--color-emerald-glow)]/[0.12]"
                                style={{ height: `${height}px` }}
                              >
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: "100%" }}
                                  transition={{
                                    duration: 0.9,
                                    delay: 0.15 + index * 0.08,
                                    ease,
                                  }}
                                  className="absolute inset-x-0 bottom-0 rounded-t-xl bg-gradient-to-t from-[var(--color-emerald-glow)]/50 to-[var(--color-emerald-glow)]"
                                />

                                <motion.div
                                  animate={{ y: ["-120%", "220%"] }}
                                  transition={{
                                    duration: 2.8,
                                    repeat: Infinity,
                                    repeatDelay: 1.5,
                                    ease: "linear",
                                  }}
                                  className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent"
                                />
                              </div>
                            </div>

                            <span className="text-xs font-medium text-[var(--color-ink-dim)] sm:text-sm">
                              {data.year}
                            </span>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-2 text-xs leading-5 text-[var(--color-ink-faint)]">
                  <Sparkles size={13} className="mt-0.5 shrink-0" />
                  <p>
                    Illustrative chart shape — replace{" "}
                    <code className="font-mono text-[var(--color-emerald-glow)]">
                      src/data/impact.ts
                    </code>{" "}
                    with verified annual figures before publishing.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sector Deep Dive */}
      <section className="relative overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-bg-alt)] py-20 sm:py-24 md:py-28">
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[var(--color-emerald-glow)]/[0.05] blur-3xl" />

        <FloatingObject
          className="right-[6%] top-[12%] hidden lg:block"
          delay={0.6}
          duration={5.5}
        >
          <Sparkles size={17} />
        </FloatingObject>

        <div className="container-edit relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-2xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)]">
              <Sparkles size={14} />
              Beyond the totals
            </div>

            <h2 className="font-serif text-3xl font-normal tracking-[-0.035em] text-[var(--color-ink)] sm:text-4xl md:text-5xl">
              The people behind the progress.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--color-ink-dim)] sm:text-base">
              Impact is not only measured by totals. It is also reflected in
              the schools, makers, volunteers, and communities connected to
              every initiative.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {sectorCards.map(
              ({ title, icon: Icon, description, status, number }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                    ease,
                  }}
                  whileHover={{ y: -7 }}
                  className="group relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-6 shadow-xl shadow-black/[0.04] transition-all duration-300 hover:border-[var(--color-emerald-glow)]/45 hover:shadow-2xl hover:shadow-[var(--color-emerald-glow)]/[0.07] sm:p-7"
                >
                  <span className="pointer-events-none absolute -right-4 -top-8 font-serif text-[9rem] leading-none text-[var(--color-ink)]/[0.025] transition-colors duration-500 group-hover:text-[var(--color-emerald-glow)]/[0.07]">
                    {number}
                  </span>

                  <div className="relative">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-line-strong)] bg-[var(--color-bg)] text-[var(--color-emerald-glow)] transition-all duration-300 group-hover:border-[var(--color-emerald-glow)]/40 group-hover:bg-[var(--color-emerald-tint)]">
                        <Icon size={20} />
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="text-[var(--color-ink-faint)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--color-emerald-glow)]"
                      />
                    </div>

                    <h3 className="font-serif text-2xl font-normal tracking-[-0.025em] text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-emerald-glow)]">
                      {title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[var(--color-ink-dim)]">
                      {description}
                    </p>
                  </div>

                  <div className="relative mt-8 flex items-center justify-between border-t border-[var(--color-line)] pt-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
                      {status}
                    </span>

                    <ArrowDownRight
                      size={16}
                      className="text-[var(--color-emerald-glow)] transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}

function YearButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative overflow-hidden rounded-full px-4 py-2.5 text-xs font-semibold tracking-wide transition-colors duration-300 sm:px-5 ${
        active
          ? "text-[var(--color-bg)]"
          : "border border-[var(--color-line-strong)] bg-[var(--color-surface)]/60 text-[var(--color-ink-dim)] hover:border-[var(--color-emerald-glow)]/40 hover:text-[var(--color-ink)]"
      }`}
    >
      {active && (
        <motion.span
          layoutId="activeYearTab"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
          className="absolute inset-0 rounded-full bg-[var(--color-emerald-glow)] shadow-lg shadow-[var(--color-emerald-glow)]/15"
        />
      )}

      <span className="relative z-10">{label}</span>
    </button>
  );
}

function FloatingObject({
  children,
  className,
  delay = 0,
  duration = 5,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: [0.25, 0.55, 0.25],
        y: [0, -12, 0],
        rotate: [0, 8, -4, 0],
      }}
      transition={{
        opacity: {
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
        y: {
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
        rotate: {
          duration: duration + 1,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
        scale: {
          duration: 0.7,
          delay,
          ease,
        },
      }}
      className={`pointer-events-none absolute z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-emerald-glow)]/20 bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)] backdrop-blur-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}