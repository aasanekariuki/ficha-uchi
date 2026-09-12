import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Circle,
  Layers,
  MoveUpRight,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Seo } from "../components/Seo";
import { SectionHeader } from "../components/SectionHeader";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";
import { CTASection } from "../components/CTASection";

const secondaryAreas = [
  {
    number: "01",
    title: "Arts & Creativity",
    description:
      "Music, art and creative expression as part of youth programs.",
  },
  {
    number: "02",
    title: "Mentorship",
    description:
      "One-on-one relationships that support young people beyond the classroom.",
  },
  {
    number: "03",
    title: "Fundraising",
    description:
      "Campaigns and partnerships that keep every program funded.",
  },
  {
    number: "04",
    title: "Local Economic Empowerment",
    description:
      "Routing paid work to Mathare tailors and community members.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

function FloatingShape({
  className,
  delay = 0,
  duration = 8,
  children,
}: {
  className?: string;
  delay?: number;
  duration?: number;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className ?? ""}`}
      animate={{
        y: [0, -14, 0],
        x: [0, 7, 0],
        rotate: [0, 8, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

function ProgramOrbit() {
  return (
    <div className="relative mx-auto h-[310px] w-full max-w-[390px] sm:h-[370px]">
      <motion.div
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-emerald-glow)]/20 sm:h-72 sm:w-72"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[var(--color-emerald-glow)]/25 sm:h-56 sm:w-56"
        animate={{ rotate: -360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2rem] border border-[var(--color-emerald-glow)]/30 bg-[linear-gradient(145deg,rgba(95,165,132,0.2),rgba(95,165,132,0.04))] text-center shadow-[0_0_70px_rgba(95,165,132,0.12)] backdrop-blur-xl sm:h-40 sm:w-40">
        <Sparkles
          size={22}
          className="mb-3 text-[var(--color-emerald-glow)]"
        />
        <span className="font-serif text-xl text-[var(--color-ink)] sm:text-2xl">
          One mission
        </span>
        <span className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
          Four pathways
        </span>
      </div>

      <motion.div
        className="absolute left-[5%] top-[13%] flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)]/80 text-[var(--color-emerald-glow)] shadow-xl backdrop-blur-md"
        animate={{ y: [0, -10, 0], rotate: [0, 7, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Users size={21} />
      </motion.div>

      <motion.div
        className="absolute right-[3%] top-[20%] flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/80 text-[var(--color-emerald-glow)] shadow-xl backdrop-blur-md"
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 7, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Layers size={20} />
      </motion.div>

      <motion.div
        className="absolute bottom-[10%] left-[14%] flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/80 text-[var(--color-emerald-glow)] shadow-xl backdrop-blur-md"
        animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
        transition={{ duration: 8, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Check size={19} />
      </motion.div>

      <motion.div
        className="absolute bottom-[6%] right-[13%] flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-line-strong)] bg-[var(--color-surface)]/80 text-[var(--color-emerald-glow)] shadow-xl backdrop-blur-md"
        animate={{ y: [0, -9, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Star size={17} />
      </motion.div>

      <FloatingShape
        className="left-[29%] top-[4%] text-[var(--color-emerald-glow)]/50"
        delay={0.2}
        duration={9}
      >
        <Sparkles size={18} />
      </FloatingShape>

      <FloatingShape
        className="right-[26%] bottom-[19%] text-[var(--color-ink-dim)]/30"
        delay={1}
        duration={10}
      >
        <Circle size={14} strokeWidth={1} />
      </FloatingShape>
    </div>
  );
}

export function Work() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-glow)] selection:text-[var(--color-bg)]">
      <Seo
        title="Our Work"
        description="Everything Ficha Uchi does — uniforms and dignity, community initiatives, youth development, and local economic empowerment."
        path="/work"
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-bg-alt)] pt-28 sm:pt-32 lg:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(95,165,132,0.15),transparent_30%),radial-gradient(circle_at_85%_45%,rgba(95,165,132,0.12),transparent_32%)]" />
        <div className="pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-[var(--color-emerald-glow)]/[0.08] blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[var(--color-emerald-glow)]/[0.07] blur-3xl" />

        <FloatingShape
          className="left-[7%] top-36 hidden text-[var(--color-emerald-glow)]/25 lg:block"
          delay={0.4}
          duration={8}
        >
          <Circle size={18} strokeWidth={1} />
        </FloatingShape>

        <FloatingShape
          className="right-[11%] top-28 hidden h-10 w-10 rotate-45 rounded-xl border border-[var(--color-emerald-glow)]/20 bg-[var(--color-emerald-glow)]/[0.04] lg:block"
          delay={1}
          duration={9}
        />

        <div className="container-edit relative z-10">
          <div className="grid items-center gap-12 pb-16 md:pb-20 lg:grid-cols-[1fr_0.85fr] lg:gap-8 lg:pb-24">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="max-w-3xl"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
                }}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-emerald-glow)] shadow-lg backdrop-blur-md"
              >
                <Sparkles size={14} />
                Our work
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
                }}
                className="mt-7 max-w-3xl text-balance font-serif text-5xl font-normal leading-[0.98] tracking-[-0.045em] text-[var(--color-ink)] sm:text-6xl md:text-7xl lg:text-[5.8rem]"
              >
                Practical dignity,
                <span className="block text-[var(--color-emerald-glow)]">
                  four ways.
                </span>
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
                }}
                className="mt-7 max-w-xl text-base leading-8 text-[var(--color-ink-dim)] sm:text-lg"
              >
                Every program traces back to the same idea — a child who can go
                to school, and a community whose own tailors, volunteers and
                families make that possible.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
                }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#core-programs"
                  className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-emerald-glow)] px-5 py-3 text-sm font-semibold text-[var(--color-bg)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--color-emerald-glow)]/15"
                >
                  Explore our programs
                  <ArrowDown
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  />
                </a>

                <div className="flex items-center gap-2 text-sm text-[var(--color-ink-faint)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_10px_var(--color-emerald-glow)]" />
                  Community-led impact
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease }}
              className="relative flex items-center justify-center"
            >
              <ProgramOrbit />
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-emerald-glow)]/30 to-transparent" />
      </section>

      {/* Core Programs */}
      <section
        id="core-programs"
        className="relative bg-[var(--color-bg)] py-16 sm:py-20 lg:py-24"
      >
        <div className="pointer-events-none absolute left-[-14rem] top-40 h-[30rem] w-[30rem] rounded-full bg-[var(--color-emerald-glow)]/[0.035] blur-3xl" />
        <div className="pointer-events-none absolute right-[-16rem] bottom-0 h-[32rem] w-[32rem] rounded-full bg-[var(--color-emerald-glow)]/[0.035] blur-3xl" />

        <div className="container-edit relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
          >
            <SectionHeader
              title="Core programs"
              description="Each has its own page with process, evidence, and stories."
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="mt-10 grid gap-7 md:mt-12 md:grid-cols-2"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.75, ease },
                  },
                }}
                className="relative"
              >
                <div className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-[var(--color-emerald-glow)]/[0.025] opacity-0 blur-xl transition-opacity duration-500 hover:opacity-100" />

                <div className="relative">
                  <div className="pointer-events-none absolute right-5 top-5 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/10 text-white/60 backdrop-blur-md">
                    <span className="text-[10px] font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <ProjectCard project={project} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Supporting Areas */}
      <section className="relative overflow-hidden border-t border-[var(--color-line-strong)] bg-[var(--color-bg-alt)]/55 py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(95,165,132,0.08),transparent_28%)]" />

        <FloatingShape
          className="right-[8%] top-20 hidden text-[var(--color-emerald-glow)]/20 lg:block"
          delay={0.6}
          duration={9}
        >
          <Sparkles size={24} strokeWidth={1} />
        </FloatingShape>

        <FloatingShape
          className="bottom-20 left-[7%] hidden text-[var(--color-ink-dim)]/20 lg:block"
          delay={1.4}
          duration={10}
        >
          <Circle size={20} strokeWidth={1} />
        </FloatingShape>

        <div className="container-edit relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
          >
            <SectionHeader
              title="Also part of the work"
              description="Supporting areas that run alongside the four core programs."
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.09 },
              },
            }}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4"
          >
            {secondaryAreas.map((area) => (
              <motion.div
                key={area.title}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.65, ease },
                  },
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -7, transition: { duration: 0.25, ease } }
                }
                className="group relative flex min-h-[245px] flex-col justify-between overflow-hidden rounded-[1.65rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)]/65 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-[var(--color-emerald-glow)]/40 hover:shadow-2xl hover:shadow-[var(--color-emerald-glow)]/[0.08] sm:p-7"
              >
                <div className="pointer-events-none absolute -right-7 -top-10 font-serif text-[8rem] leading-none text-[var(--color-emerald-glow)]/[0.035] transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2">
                  {area.number}
                </div>

                <div className="relative z-10">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-line-strong)] bg-[var(--color-bg)] text-[var(--color-emerald-glow)] transition-colors duration-300 group-hover:border-[var(--color-emerald-glow)]/40">
                      <Layers size={18} />
                    </div>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
                      {area.number}
                    </span>
                  </div>

                  <h3 className="max-w-[12rem] font-serif text-xl font-normal leading-tight text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-emerald-glow)]">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--color-ink-dim)]">
                    {area.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
                    Supporting layer
                  </span>

                  <MoveUpRight
                    size={16}
                    className="text-[var(--color-ink-faint)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--color-emerald-glow)]"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mt-10 sm:mt-12"
          >
            <Link
              to="/impact"
              className="group inline-flex items-center gap-3 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)] px-5 py-3 text-sm font-semibold text-[var(--color-emerald-glow)] shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-emerald-glow)]/50 hover:bg-[var(--color-emerald-glow)]/10 hover:shadow-xl hover:shadow-[var(--color-emerald-glow)]/10"
            >
              <span>See what these programs have achieved</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}