import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  CircleDollarSign,
  HeartHandshake,
  Package,
  Ruler,
  Scissors,
  Search,
  Shirt,
  Sparkles,
  Truck,
} from "lucide-react";

import { Seo } from "../../components/Seo";
import { SectionHeader } from "../../components/SectionHeader";
import { InteractiveProcess } from "../../components/InteractiveProcess";
import { Gallery } from "../../components/Gallery";
import { CTASection } from "../../components/CTASection";
import { galleryImages } from "../../data/gallery";
import { projects } from "../../data/projects";

interface ProcessStep {
  id: string;
  title: string;
  icon: ReactNode;
  description: string;
}

const steps: ProcessStep[] = [
  {
    id: "identify",
    title: "Identify",
    icon: <Search size={22} />,
    description:
      "Schools and community partners help identify children who need support — often before a family has to ask.",
  },
  {
    id: "source",
    title: "Source",
    icon: <Package size={22} />,
    description:
      "Fabric and materials are mobilized through donations, funding, and existing supplier relationships.",
  },
  {
    id: "tailor",
    title: "Tailor",
    icon: <Scissors size={22} />,
    description:
      "Local Mathare tailors produce new uniforms or repair damaged ones — paid, local work.",
  },
  {
    id: "fit",
    title: "Fit",
    icon: <Ruler size={22} />,
    description:
      "Uniforms are properly fitted to the child, not handed over as a rough approximation.",
  },
  {
    id: "distribute",
    title: "Distribute",
    icon: <Truck size={22} />,
    description:
      "Uniforms reach learners directly, usually coordinated with the partner school.",
  },
  {
    id: "impact",
    title: "Impact",
    icon: <Sparkles size={22} />,
    description:
      "Children return to school with dignity and confidence — and the cycle repeats for the next learner.",
  },
];

const uniformImages = galleryImages.filter(
  (image) => image.category === "uniforms",
);

const project = projects.find((item) => item.id === "uniforms")!;

const ease = [0.16, 1, 0.3, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease,
    },
  },
};

function FloatingObject({
  className = "",
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: ReactNode;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      animate={{
        y: [0, -12, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

function UniformOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <motion.div
        className="absolute inset-[8%] rounded-full border border-[var(--color-line-strong)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-[19%] rounded-full border border-dashed border-[var(--color-emerald-glow)]/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-[27%] rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(95,165,132,0.3),transparent_65%)] blur-3xl" />

      <motion.div
        className="absolute left-1/2 top-1/2 flex aspect-square w-[45%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[var(--color-emerald-glow)]/30 bg-[var(--color-surface)]/90 text-center shadow-[0_0_90px_rgba(95,165,132,0.12)] backdrop-blur-xl"
        animate={{ scale: [1, 1.025, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-emerald-glow)]/30 bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)]">
          <Shirt size={21} strokeWidth={1.7} />
        </div>

        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
          The journey
        </span>

        <span className="mt-2 max-w-[150px] font-serif text-xl leading-tight text-[var(--color-ink)] sm:text-2xl">
          From need to dignity.
        </span>
      </motion.div>

      <motion.div
        className="absolute left-[2%] top-[23%] flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] text-[var(--color-emerald-glow)] shadow-xl"
        animate={{ y: [0, -9, 0], rotate: [-5, 1, -5] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Search size={21} />
      </motion.div>

      <motion.div
        className="absolute right-[2%] top-[13%] flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] text-[var(--color-emerald-glow)] shadow-xl"
        animate={{ y: [0, 10, 0], rotate: [4, -3, 4] }}
        transition={{
          duration: 6.5,
          delay: 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Package size={21} />
      </motion.div>

      <motion.div
        className="absolute bottom-[12%] left-[8%] flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] text-[var(--color-emerald-glow)] shadow-xl"
        animate={{ y: [0, 8, 0], rotate: [4, -4, 4] }}
        transition={{
          duration: 7,
          delay: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Scissors size={21} />
      </motion.div>

      <motion.div
        className="absolute bottom-[5%] right-[10%] flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] text-[var(--color-emerald-glow)] shadow-xl"
        animate={{ y: [0, -9, 0], rotate: [-4, 4, -4] }}
        transition={{
          duration: 6,
          delay: 0.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <HeartHandshake size={21} />
      </motion.div>

      <div className="absolute left-1/2 top-[1%] h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_20px_var(--color-emerald-glow)]" />
      <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_20px_var(--color-emerald-glow)]" />
    </div>
  );
}

function ProcessPreview() {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)]/65 p-5 shadow-2xl backdrop-blur-xl sm:p-7">
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--color-emerald-glow)]/10 blur-3xl" />

      <div className="relative flex items-center justify-between border-b border-[var(--color-line)] pb-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
            A six-step process
          </p>
          <p className="mt-2 font-serif text-2xl text-[var(--color-ink)]">
            Made with intention.
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line-strong)] text-[var(--color-emerald-glow)]">
          <Sparkles size={16} />
        </div>
      </div>

      <div className="relative mt-7 space-y-5">
        {steps.map((step, index) => (
          <div key={step.id} className="relative flex gap-4">
            {index !== steps.length - 1 && (
              <div className="absolute left-[17px] top-9 h-[calc(100%+1.25rem)] w-px bg-[var(--color-line-strong)]" />
            )}

            <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] text-[var(--color-emerald-glow)]">
              {step.icon}
            </div>

            <div className="flex min-w-0 flex-1 items-center justify-between gap-4 border-b border-[var(--color-line)] pb-5">
              <div>
                <p className="text-sm font-semibold text-[var(--color-ink)]">
                  {step.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--color-ink-faint)]">
                  {step.description.split("—")[0].trim()}
                </p>
              </div>

              <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
                0{index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function UniformsWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-glow)] selection:text-[var(--color-bg)]">
      <Seo
        title="Uniforms & Dignity"
        description="How Ficha Uchi identifies need, sources materials, and works with local Mathare tailors to fit and distribute school uniforms."
        path="/work/uniforms"
      />

      <section className="relative isolate overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-bg-alt)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(237,237,231,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(237,237,231,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-50" />

        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[var(--color-emerald-glow)]/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-[var(--color-emerald-glow)]/10 blur-[140px]" />

        <FloatingObject className="left-[7%] top-[24%] hidden lg:block" delay={0.2}>
          <div className="h-3 w-3 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_25px_var(--color-emerald-glow)]" />
        </FloatingObject>

        <FloatingObject className="right-[10%] top-[18%] hidden lg:block" delay={1}>
          <div className="h-16 w-16 rotate-12 rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)]/40 backdrop-blur-md" />
        </FloatingObject>

        <FloatingObject className="bottom-[13%] left-[43%] hidden lg:block" delay={0.5}>
          <Sparkles
            size={20}
            strokeWidth={1.5}
            className="text-[var(--color-emerald-glow)]/50"
          />
        </FloatingObject>

        <div className="container-edit relative z-10 grid min-h-[760px] items-center gap-14 pb-20 pt-36 lg:grid-cols-[1fr_0.95fr] lg:gap-10 lg:pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="max-w-2xl"
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-emerald-glow)]/25 bg-[var(--color-emerald-tint)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)]">
                <Shirt size={14} />
                Core program
              </span>

              <span className="hidden h-px w-12 bg-[var(--color-line-strong)] sm:block" />

              <span className="hidden text-xs uppercase tracking-[0.18em] text-[var(--color-ink-faint)] sm:block">
                Uniforms with dignity
              </span>
            </div>

            <h1 className="max-w-3xl font-serif text-5xl font-normal leading-[0.98] tracking-[-0.045em] text-[var(--color-ink)] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              More than a
              <span className="block text-[var(--color-emerald-glow)]">
                school uniform.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[var(--color-ink-dim)] sm:text-lg">
              {project.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#process"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-emerald-glow)] px-5 py-3 text-sm font-semibold text-[var(--color-bg)] transition-transform duration-300 hover:-translate-y-1"
              >
                Follow the journey
                <ArrowDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>

              <div className="flex items-center gap-2 text-sm text-[var(--color-ink-faint)]">
                <HeartHandshake
                  size={15}
                  className="text-[var(--color-emerald-glow)]"
                />
                Local work, lasting dignity
              </div>
            </div>

            <div className="mt-14 grid max-w-lg grid-cols-3 gap-5 border-t border-[var(--color-line-strong)] pt-6">
              <div>
                <p className="font-serif text-2xl text-[var(--color-ink)]">
                  06
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
                  Process stages
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl text-[var(--color-ink)]">
                  01
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
                  Shared purpose
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl text-[var(--color-ink)]">
                  ∞
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
                  Learner potential
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="relative mx-auto w-full max-w-[580px]"
          >
            <div className="absolute inset-8 rounded-full bg-[var(--color-emerald-glow)]/10 blur-3xl" />

            <div className="relative rounded-[2rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)]/45 p-4 shadow-2xl backdrop-blur-sm sm:p-7">
              <div className="mb-3 flex items-center justify-between px-2">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
                    The uniform journey
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-ink-dim)]">
                    Thoughtful at every stage.
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line-strong)] text-[var(--color-emerald-glow)]">
                  <Sparkles size={15} />
                </div>
              </div>

              <UniformOrbit />

              <div className="grid grid-cols-2 gap-3 px-1 pb-1 sm:grid-cols-3">
                {[
                  ["Identify", "Understand need"],
                  ["Tailor", "Support local work"],
                  ["Fit", "Respect every learner"],
                ].map(([label, detail]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg)]/60 px-3 py-3"
                  >
                    <p className="text-xs font-semibold text-[var(--color-ink)]">
                      {label}
                    </p>
                    <p className="mt-1 text-[10px] leading-relaxed text-[var(--color-ink-faint)]">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="process"
        className="relative bg-[var(--color-bg)] py-24 md:py-32"
      >
        <div className="absolute -right-40 top-24 h-[420px] w-[420px] rounded-full bg-[var(--color-emerald-glow)]/[0.04] blur-[120px]" />

        <div className="container-edit relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <SectionHeader
              title="How a uniform actually reaches a child"
              description="Six steps, repeated for every learner. Explore the process and see how practical support becomes something personal."
            />
          </motion.div>

          <div className="mt-14 grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease }}
              className="lg:sticky lg:top-28"
            >
              <ProcessPreview />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="min-w-0"
            >
              <InteractiveProcess steps={steps} />
            </motion.div>
          </div>
        </div>
      </section>

      {project.impact && project.impact.length > 0 && (
        <section className="relative overflow-hidden border-y border-[var(--color-line-strong)] bg-[var(--color-bg-alt)]/60 py-24 md:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(237,237,231,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(237,237,231,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <FloatingObject className="right-[9%] top-12 hidden lg:block" delay={0.7}>
            <div className="h-16 w-16 rounded-full border border-[var(--color-emerald-glow)]/20" />
          </FloatingObject>

          <div className="container-edit relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="mb-12 max-w-xl"
            >
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-emerald-glow)]">
                <CircleDollarSign size={14} />
                The measurable side
              </span>

              <h2 className="mt-4 font-serif text-4xl font-normal leading-tight text-[var(--color-ink)] sm:text-5xl">
                Every contribution has a human outcome.
              </h2>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {project.impact.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -7, transition: { duration: 0.3, ease } }
                  }
                  className="group relative overflow-hidden rounded-[1.75rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-7 shadow-[0_18px_60px_rgba(0,0,0,0.08)] transition-colors duration-300 hover:border-[var(--color-emerald-glow)]/45 sm:p-8"
                >
                  <div className="absolute -right-5 -top-8 font-serif text-[8rem] leading-none text-[var(--color-ink)]/[0.025]">
                    0{index + 1}
                  </div>

                  <div className="relative">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg)] text-[var(--color-emerald-glow)]">
                        <Check size={18} />
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="text-[var(--color-ink-faint)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--color-emerald-glow)]"
                      />
                    </div>

                    <p className="font-serif text-4xl font-normal text-[var(--color-emerald-glow)] md:text-5xl">
                      {stat.value}
                    </p>

                    <p className="mt-4 max-w-[250px] text-sm leading-7 text-[var(--color-ink-dim)]">
                      {stat.label}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--color-emerald-glow)] transition-all duration-500 group-hover:w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative bg-[var(--color-bg)] py-24 md:py-32">
        <FloatingObject className="left-[6%] top-24 hidden lg:block" delay={0.5}>
          <div className="h-3 w-3 rounded-full bg-[var(--color-emerald-glow)]/50 shadow-[0_0_20px_var(--color-emerald-glow)]" />
        </FloatingObject>

        <FloatingObject className="right-[8%] bottom-20 hidden lg:block" delay={1}>
          <div className="h-20 w-20 rotate-12 rounded-3xl border border-[var(--color-line-strong)]" />
        </FloatingObject>

        <div className="container-edit">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <SectionHeader
              title="From the fitting room"
              description="A look at the process in practice — from materials and tailoring to fitting and distribution."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-14"
          >
            <Gallery
              images={
                uniformImages.length
                  ? uniformImages
                  : galleryImages.slice(0, 6)
              }
            />
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}