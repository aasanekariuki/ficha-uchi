import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FileText,
  PieChart,
  ShieldCheck,
  Handshake,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Eye,
  BarChart3,
  CircleDollarSign,
  Waves,
} from "lucide-react";
import { Seo } from "../components/Seo";
import { SectionHeader } from "../components/SectionHeader";
import { impactStats } from "../data/impact";

const sections = [
  {
    number: "01",
    title: "What we do",
    icon: ShieldCheck,
    body: "Ficha Uchi sources, tailors, fits, and distributes school uniforms in and around Mathare, alongside community initiatives and youth development programs.",
    accent: "emerald",
  },
  {
    number: "02",
    title: "Where support goes",
    icon: PieChart,
    body: "Support contributes to fabric, materials, local tailoring, logistics, distribution, and program coordination. Verified expenditure details will be published as reporting is formalized.",
    accent: "gold",
  },
  {
    number: "03",
    title: "Partnerships",
    icon: Handshake,
    body: "Organizations and institutions we work with will be listed as agreements are confirmed and permission to publish is granted.",
    accent: "blue",
  },
];

const principles = [
  {
    icon: Eye,
    title: "Clear by default",
    text: "We explain how our work is structured before making claims about results.",
  },
  {
    icon: BarChart3,
    title: "Evidence-led",
    text: "Metrics are presented only when they can be supported by actual records.",
  },
  {
    icon: CircleDollarSign,
    title: "Responsible use",
    text: "Resources are directed toward practical delivery, coordination, and community impact.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Transparency() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-glow)] selection:text-[var(--color-bg)]">
      <Seo
        title="Transparency"
        description="How Ficha Uchi works, where support goes, and how the organization plans to report on impact and finances."
        path="/transparency"
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[var(--color-bg-alt)] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-40 h-[32rem] w-[32rem] rounded-full bg-[var(--color-emerald-glow)]/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-[var(--color-gold)]/5 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(95,165,132,0.12),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(201,161,90,0.07),transparent_30%)]" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(var(--color-ink)_1px,transparent_1px),linear-gradient(90deg,var(--color-ink)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <div className="container-edit relative z-10">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.65fr] lg:gap-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="max-w-3xl"
            >
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)] backdrop-blur-xl">
                <Sparkles size={14} />
                Accountability & Trust
              </div>

              <h1 className="max-w-4xl text-balance font-serif text-5xl font-normal leading-[1.02] tracking-[-0.04em] text-[var(--color-ink)] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
                Trust, built on specifics.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--color-ink-dim)] md:text-xl">
                We would rather show you the structure we intend to report
                through than publish numbers before they are verified.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative hidden lg:block"
            >
              <div className="relative ml-auto max-w-sm rounded-[2rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)]/60 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl">
                <div className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] text-[var(--color-emerald-glow)]">
                  <CheckCircle2 size={16} />
                </div>

                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
                    Reporting framework
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_14px_var(--color-emerald-glow)]" />
                </div>

                <div className="space-y-5">
                  {["Activities", "Resources", "Partnerships", "Outcomes"].map(
                    (item, index) => (
                      <div key={item} className="flex items-center gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[var(--color-line)] bg-[var(--color-bg)] font-mono text-[10px] text-[var(--color-ink-faint)]">
                          0{index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-[var(--color-ink)]">
                              {item}
                            </span>
                            <span className="text-[10px] uppercase tracking-wider text-[var(--color-ink-faint)]">
                              Tracked
                            </span>
                          </div>
                          <div className="mt-2 h-1 overflow-hidden rounded-full bg-[var(--color-line)]">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${70 + index * 7}%` }}
                              transition={{
                                delay: 0.8 + index * 0.12,
                                duration: 0.8,
                                ease: "easeOut",
                              }}
                              className="h-full rounded-full bg-[var(--color-emerald-glow)]/70"
                            />
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core structure */}
      <section className="relative bg-[var(--color-bg)] py-20 md:py-28">
        <div className="container-edit">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mb-12 max-w-2xl"
          >
            <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)]">
              <span className="h-px w-8 bg-[var(--color-emerald-glow)]" />
              Our framework
            </div>

            <h2 className="font-serif text-4xl font-normal leading-tight tracking-tight text-[var(--color-ink)] md:text-5xl">
              Know what happens behind the work.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-ink-dim)]">
              Transparency starts with making the operating model visible:
              what we do, how resources move, and who we work with.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {sections.map(
              ({ title, icon: Icon, body, number }, index) => (
                <motion.article
                  key={title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -8 }
                  }
                  className="group relative flex min-h-[ twentyrem ] flex-col overflow-hidden rounded-[1.75rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-7 shadow-lg shadow-black/[0.03] transition-colors duration-300 hover:border-[var(--color-emerald-glow)]/50 md:p-8"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--color-emerald-glow)]/5 blur-2xl transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-emerald-glow)]/25 bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)] transition-all duration-300 group-hover:border-[var(--color-emerald-glow)] group-hover:bg-[var(--color-emerald-glow)] group-hover:text-[var(--color-bg)]">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <span className="font-mono text-xs text-[var(--color-ink-faint)]">
                      {number}
                    </span>
                  </div>

                  <div className="relative mt-12">
                    <h3 className="font-serif text-2xl font-normal tracking-tight text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-emerald-glow)]">
                      {title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[var(--color-ink-dim)]">
                      {body}
                    </p>
                  </div>

                  <div className="relative mt-auto pt-10">
                    <div className="h-px w-full bg-[var(--color-line)]" />
                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-faint)] transition-colors group-hover:text-[var(--color-emerald-glow)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      Framework detail
                    </div>
                  </div>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-bg-alt)] py-20 md:py-24">
        <div className="container-edit">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
            >
              <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)]">
                <span className="h-px w-8 bg-[var(--color-emerald-glow)]" />
                Our principles
              </div>

              <h2 className="font-serif text-4xl font-normal leading-tight tracking-tight text-[var(--color-ink)] md:text-5xl">
                What we commit to.
              </h2>

              <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--color-ink-dim)]">
                Good reporting is not only about publishing results. It is
                about being honest about what is known, what is developing,
                and what still needs to be documented.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {principles.map(({ icon: Icon, title, text }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={
                    shouldReduceMotion ? undefined : { x: 6 }
                  }
                  className="group flex gap-5 rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)]/60 p-5 transition-colors duration-300 hover:border-[var(--color-emerald-glow)]/40 md:p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--color-line)] bg-[var(--color-bg)] text-[var(--color-emerald-glow)]">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-[var(--color-ink)]">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-ink-dim)]">
                      {text}
                    </p>
                  </div>

                  <ArrowRight
                    size={17}
                    className="ml-auto mt-1 hidden shrink-0 text-[var(--color-ink-faint)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--color-emerald-glow)] sm:block"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="relative overflow-hidden bg-[var(--color-bg)] py-20 md:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[var(--color-emerald-glow)]/5 blur-3xl" />

        <div className="container-edit relative z-10">
          <SectionHeader
            tone="dark"
            title="Impact, as currently reported"
            description="Verified metrics and live records of work delivered across Mathare."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={
                  shouldReduceMotion ? undefined : { y: -6 }
                }
                className="group relative overflow-hidden rounded-[1.75rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-7 shadow-lg shadow-black/[0.03] transition-all duration-300 hover:border-[var(--color-emerald-glow)]/50 hover:shadow-xl hover:shadow-[var(--color-emerald-glow)]/[0.04] md:p-8"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[var(--color-emerald-glow)]/5 blur-2xl transition-transform duration-500 group-hover:scale-150" />

                <div className="relative flex items-start justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
                    Metric 0{index + 1}
                  </span>

                  <CheckCircle2
                    size={17}
                    className="text-[var(--color-emerald-glow)]"
                  />
                </div>

                <p className="relative mt-9 font-serif text-5xl font-normal tracking-[-0.04em] text-[var(--color-emerald-glow)] sm:text-6xl">
                  {stat.value}
                </p>

                <p className="relative mt-3 max-w-[16rem] text-base font-medium leading-6 text-[var(--color-ink)]">
                  {stat.label}
                </p>

                <div className="relative mt-7 flex items-center gap-2 border-t border-[var(--color-line)] pt-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--color-ink-faint)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald-glow)]" />
                  Verified metric
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-bg-alt)] py-20 md:py-28">
        <div className="container-edit">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20">
            <SectionHeader
              tone="dark"
              title="Reports"
              description="Downloadable reports will be published here as they become available."
            />

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[1.75rem] border border-dashed border-[var(--color-line-strong)] bg-[var(--color-surface)]/50 p-7 backdrop-blur-md md:p-9"
            >
              <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[var(--color-emerald-glow)]/5 blur-3xl" />

              <div className="relative flex flex-col gap-7 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg)] text-[var(--color-ink-faint)]">
                  <FileText size={23} strokeWidth={1.7} />
                </div>

                <div>
                  <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-ink-faint)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-ink-faint)]" />
                    Awaiting publication
                  </div>

                  <p className="max-w-xl text-base leading-7 text-[var(--color-ink-dim)]">
                    No public reports have been published yet. Annual audit
                    and campaign-level reports will appear here as reporting
                    cycles are finalized.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campaign updates */}
      <section className="relative overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-bg)] py-20 md:py-28">
        <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[var(--color-emerald-glow)]/5 blur-3xl" />

        <div className="container-edit relative z-10">
          <SectionHeader
            title="Campaign updates"
            description="Progress notes from completed and ongoing initiatives."
          />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-7 shadow-lg shadow-black/[0.03] transition-colors duration-300 hover:border-[var(--color-emerald-glow)]/50 md:p-9">
              <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-[var(--color-emerald-glow)]/5 blur-3xl transition-transform duration-700 group-hover:scale-125" />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-emerald-glow)]/20 bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)]">
                    <Waves size={22} strokeWidth={1.8} />
                  </div>

                  <div>
                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-emerald-glow)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      In progress
                    </div>

                    <p className="max-w-2xl text-base leading-7 text-[var(--color-ink-dim)]">
                      Campaign updates will appear here as work progresses
                      across local initiatives and community drives.
                    </p>
                  </div>
                </div>

                <Link
                  to="/campaigns"
                  className="group/link inline-flex shrink-0 items-center justify-center gap-3 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-bg)] px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition-all duration-300 hover:border-[var(--color-emerald-glow)] hover:text-[var(--color-emerald-glow)]"
                >
                  View Active Campaigns
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}