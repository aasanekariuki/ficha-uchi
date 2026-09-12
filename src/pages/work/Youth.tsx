import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Compass,
  Heart,
  Music,
  Palette,
  Sparkles,
  Star,
  Users2,
} from "lucide-react";

import { Seo } from "../../components/Seo";
import { SectionHeader } from "../../components/SectionHeader";
import { Img } from "../../components/Image";
import { Gallery } from "../../components/Gallery";
import { CTASection } from "../../components/CTASection";
import { galleryImages } from "../../data/gallery";
import { projects } from "../../data/projects";
import { stories } from "../../data/stories";
import { StoryCard } from "../../components/StoryCard";

const pillars = [
  {
    title: "Youth spaces",
    description:
      "Physical space for young people to gather, create, and be mentored.",
    icon: Users2,
    number: "01",
    label: "Belonging",
  },
  {
    title: "Arts & music",
    description:
      "Creative programs that give young people a form of expression and skill.",
    icon: Music,
    number: "02",
    label: "Expression",
  },
  {
    title: "Creative development",
    description:
      "Structured opportunities to build and show creative work.",
    icon: Palette,
    number: "03",
    label: "Discovery",
  },
  {
    title: "Leadership",
    description:
      "Space for young people to lead initiatives, not just take part in them.",
    icon: Compass,
    number: "04",
    label: "Agency",
  },
];

const project = projects.find((p) => p.id === "youth")!;
const youthImages = galleryImages.filter((i) => i.category === "youth");
const youthStories = stories.filter((s) => s.category === "youth");

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

function YouthOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <motion.div
        className="absolute inset-[8%] rounded-full border border-[var(--color-line-strong)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-[20%] rounded-full border border-dashed border-[var(--color-emerald-glow)]/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-[31%] rounded-full border border-[var(--color-emerald-glow)]/10"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-[25%] rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(95,165,132,0.3),transparent_65%)] blur-3xl" />

      <motion.div
        className="absolute left-1/2 top-1/2 flex aspect-square w-[44%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[var(--color-emerald-glow)]/30 bg-[var(--color-surface)]/90 text-center shadow-[0_0_90px_rgba(95,165,132,0.13)] backdrop-blur-xl"
        animate={{ scale: [1, 1.025, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-emerald-glow)]/30 bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)]">
          <Sparkles size={21} strokeWidth={1.7} />
        </div>

        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
          The youth space
        </span>

        <span className="mt-2 max-w-[145px] font-serif text-xl leading-tight text-[var(--color-ink)] sm:text-2xl">
          Room to become.
        </span>
      </motion.div>

      <motion.div
        className="absolute left-[2%] top-[21%] flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] text-[var(--color-emerald-glow)] shadow-xl"
        animate={{ y: [0, -9, 0], rotate: [-5, 1, -5] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Music size={21} />
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
        <Palette size={21} />
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
        <Users2 size={21} />
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
        <Compass size={21} />
      </motion.div>

      <div className="absolute left-1/2 top-[1%] h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_20px_var(--color-emerald-glow)]" />
      <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_20px_var(--color-emerald-glow)]" />
    </div>
  );
}

function YouthSignalCard() {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)]/65 p-5 shadow-2xl backdrop-blur-xl sm:p-7">
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--color-emerald-glow)]/10 blur-3xl" />

      <div className="relative flex items-center justify-between border-b border-[var(--color-line)] pb-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
            A space for possibility
          </p>
          <p className="mt-2 font-serif text-2xl text-[var(--color-ink)]">
            Create. Connect. Lead.
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line-strong)] text-[var(--color-emerald-glow)]">
          <Heart size={16} />
        </div>
      </div>

      <div className="relative mt-7 space-y-5">
        {[
          {
            title: "Belonging",
            description: "A safe place to show up and be seen.",
            icon: Users2,
          },
          {
            title: "Expression",
            description: "Creative tools for finding a voice.",
            icon: Music,
          },
          {
            title: "Leadership",
            description: "Opportunities to shape what comes next.",
            icon: Compass,
          },
        ].map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="relative flex gap-4">
              {index !== 2 && (
                <div className="absolute left-[17px] top-9 h-[calc(100%+1.25rem)] w-px bg-[var(--color-line-strong)]" />
              )}

              <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] text-[var(--color-emerald-glow)]">
                <Icon size={17} />
              </div>

              <div className="flex-1 border-b border-[var(--color-line)] pb-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-[var(--color-ink)]">
                    {item.title}
                  </p>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--color-ink-faint)]">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-1 text-xs leading-relaxed text-[var(--color-ink-faint)]">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function YouthWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-glow)] selection:text-[var(--color-bg)]">
      <Seo
        title="Youth Development"
        description="Mentorship, creative programs, community spaces, and leadership opportunities for young people through Ficha Uchi."
        path="/work/youth"
      />

      <section className="relative isolate overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-bg-alt)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(237,237,231,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(237,237,231,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-50" />

        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[var(--color-emerald-glow)]/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-[var(--color-emerald-glow)]/10 blur-[140px]" />

        <FloatingObject className="left-[7%] top-[25%] hidden lg:block" delay={0.2}>
          <div className="h-3 w-3 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_25px_var(--color-emerald-glow)]" />
        </FloatingObject>

        <FloatingObject className="right-[11%] top-[17%] hidden lg:block" delay={1}>
          <div className="h-16 w-16 rotate-12 rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)]/40 backdrop-blur-md" />
        </FloatingObject>

        <FloatingObject className="bottom-[13%] left-[43%] hidden lg:block" delay={0.5}>
          <Star
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
                <Sparkles size={14} />
                Core program
              </span>

              <span className="hidden h-px w-12 bg-[var(--color-line-strong)] sm:block" />

              <span className="hidden text-xs uppercase tracking-[0.18em] text-[var(--color-ink-faint)] sm:block">
                Youth-led possibility
              </span>
            </div>

            <h1 className="max-w-3xl font-serif text-5xl font-normal leading-[0.98] tracking-[-0.045em] text-[var(--color-ink)] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              Room to grow,
              <span className="block text-[var(--color-emerald-glow)]">
                space to lead.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[var(--color-ink-dim)] sm:text-lg">
              {project.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#pillars"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-emerald-glow)] px-5 py-3 text-sm font-semibold text-[var(--color-bg)] transition-transform duration-300 hover:-translate-y-1"
              >
                Explore the pillars
                <ArrowDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>

              <div className="flex items-center gap-2 text-sm text-[var(--color-ink-faint)]">
                <Heart
                  size={15}
                  className="text-[var(--color-emerald-glow)]"
                />
                Creativity, connection, agency
              </div>
            </div>

            <div className="mt-14 grid max-w-lg grid-cols-3 gap-5 border-t border-[var(--color-line-strong)] pt-6">
              <div>
                <p className="font-serif text-2xl text-[var(--color-ink)]">
                  04
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
                  Core pillars
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl text-[var(--color-ink)]">
                  01
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
                  Shared space
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl text-[var(--color-ink)]">
                  ∞
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
                  Possible futures
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
                    Youth development ecosystem
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-ink-dim)]">
                    A place to discover your voice.
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line-strong)] text-[var(--color-emerald-glow)]">
                  <Sparkles size={15} />
                </div>
              </div>

              <YouthOrbit />

              <div className="grid grid-cols-2 gap-3 px-1 pb-1 sm:grid-cols-3">
                {[
                  ["Gather", "Find belonging"],
                  ["Create", "Build expression"],
                  ["Lead", "Shape change"],
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
        id="pillars"
        className="relative bg-[var(--color-bg)] py-24 md:py-32"
      >
        <div className="absolute -right-40 top-20 h-[380px] w-[380px] rounded-full bg-[var(--color-emerald-glow)]/[0.04] blur-[120px]" />

        <div className="container-edit relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <SectionHeader
              title="Four pillars"
              description="Dignity extends past the classroom door. Young people need room to gather, express themselves, develop skills, and take ownership."
            />
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -8,
                          transition: { duration: 0.3, ease },
                        }
                  }
                  className="group relative min-h-[310px] overflow-hidden rounded-[1.75rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-7 shadow-[0_18px_60px_rgba(0,0,0,0.08)] transition-colors duration-300 hover:border-[var(--color-emerald-glow)]/45"
                >
                  <div className="absolute -right-5 -top-8 font-serif text-[8rem] leading-none text-[var(--color-ink)]/[0.025] transition-transform duration-500 group-hover:scale-110">
                    {pillar.number}
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--color-emerald-glow)] transition-all duration-500 group-hover:w-full" />

                  <div className="relative flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-9 flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg)] text-[var(--color-emerald-glow)] transition-all duration-300 group-hover:border-[var(--color-emerald-glow)]/40 group-hover:bg-[var(--color-emerald-tint)]">
                          <Icon size={21} strokeWidth={1.7} />
                        </div>

                        <span className="rounded-full border border-[var(--color-line)] px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[var(--color-ink-faint)]">
                          {pillar.number}
                        </span>
                      </div>

                      <h3 className="max-w-[220px] font-serif text-2xl font-normal leading-tight text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-emerald-glow)]">
                        {pillar.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[var(--color-ink-dim)]">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
                        {pillar.label}
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="text-[var(--color-ink-faint)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--color-emerald-glow)]"
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {youthStories.length > 0 && (
        <section className="relative overflow-hidden border-y border-[var(--color-line-strong)] bg-[var(--color-bg-alt)]/60 py-24 md:py-32">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(237,237,231,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(237,237,231,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <FloatingObject className="right-[8%] top-16 hidden lg:block" delay={0.5}>
            <div className="h-20 w-20 rounded-full border border-[var(--color-emerald-glow)]/15" />
          </FloatingObject>

          <div className="container-edit relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <SectionHeader
                title="Youth stories"
                description="Personal journeys from young people engaging across our programs."
              />
            </motion.div>

            <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease }}
                className="lg:sticky lg:top-28"
              >
                <YouthSignalCard />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.1, ease }}
                className="flex min-w-0 snap-x gap-6 overflow-x-auto pb-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[var(--color-line-strong)]"
              >
                {youthStories.map((story, index) => (
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.08,
                      ease,
                    }}
                    className="w-[300px] shrink-0 snap-start sm:w-[360px]"
                  >
                    <StoryCard story={story} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      <section className="relative bg-[var(--color-bg)] py-24 md:py-32">
        <FloatingObject className="left-[6%] top-24 hidden lg:block" delay={0.4}>
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
              title="From the youth space"
              description="Moments of creativity, mentorship, collaboration, and connection."
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
                youthImages.length ? youthImages : galleryImages.slice(3, 9)
              }
            />
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}