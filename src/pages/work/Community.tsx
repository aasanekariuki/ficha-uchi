import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  CircleDollarSign,
  HeartHandshake,
  Lightbulb,
  MapPin,
  School,
  Shirt,
  Sparkles,
  Utensils,
  Users,
} from "lucide-react";

import { Seo } from "../../components/Seo";
import { SectionHeader } from "../../components/SectionHeader";
import { Gallery } from "../../components/Gallery";
import { CTASection } from "../../components/CTASection";
import { CampaignCard } from "../../components/CampaignCard";
import { galleryImages } from "../../data/gallery";
import { campaigns } from "../../data/campaigns";
import { projects } from "../../data/projects";

const initiatives = [
  {
    title: "Food initiatives",
    description:
      "Short, direct responses to acute food need identified through community contacts.",
    icon: Utensils,
    number: "01",
    accent: "Immediate care",
  },
  {
    title: "Clothing drives",
    description:
      "Collection and distribution of clothing beyond school uniforms.",
    icon: Shirt,
    number: "02",
    accent: "Shared resources",
  },
  {
    title: "Fundraising",
    description:
      "Campaigns that fund materials, logistics, and program continuity.",
    icon: CircleDollarSign,
    number: "03",
    accent: "Collective action",
  },
  {
    title: "Community outreach",
    description:
      "Presence at community events, meetings, and gatherings.",
    icon: Users,
    number: "04",
    accent: "Local presence",
  },
  {
    title: "School support",
    description:
      "Coordination with schools on more than just uniforms.",
    icon: School,
    number: "05",
    accent: "Long-term support",
  },
  {
    title: "Grassroots initiatives",
    description:
      "Locally-driven ideas that respond to what's needed in the moment.",
    icon: Lightbulb,
    number: "06",
    accent: "Community-led",
  },
];

const project = projects.find((p) => p.id === "community")!;
const communityImages = galleryImages.filter(
  (image) => image.category === "community",
);

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
  children: React.ReactNode;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      animate={{
        y: [0, -12, 0],
        rotate: [0, 4, 0],
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

function CommunityOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <motion.div
        className="absolute inset-[9%] rounded-full border border-[var(--color-line-strong)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-[20%] rounded-full border border-dashed border-[var(--color-emerald-glow)]/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-[30%] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(95,165,132,0.3),transparent_65%)] blur-2xl" />

      <motion.div
        className="absolute left-1/2 top-1/2 flex aspect-square w-[43%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[var(--color-emerald-glow)]/30 bg-[var(--color-surface)]/90 text-center shadow-[0_0_80px_rgba(95,165,132,0.12)] backdrop-blur-xl"
        animate={{ scale: [1, 1.025, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-emerald-glow)]/30 bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)]">
          <HeartHandshake size={21} />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-ink-faint)]">
          One mission
        </span>
        <span className="mt-2 max-w-[130px] font-serif text-xl leading-tight text-[var(--color-ink)] sm:text-2xl">
          Care becomes action.
        </span>
      </motion.div>

      <motion.div
        className="absolute left-[4%] top-[27%] flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] text-[var(--color-emerald-glow)] shadow-xl"
        animate={{ y: [0, -8, 0], rotate: [-6, 0, -6] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Utensils size={22} />
      </motion.div>

      <motion.div
        className="absolute right-[3%] top-[17%] flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] text-[var(--color-emerald-glow)] shadow-xl"
        animate={{ y: [0, 10, 0], rotate: [5, -2, 5] }}
        transition={{
          duration: 6.5,
          delay: 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Shirt size={22} />
      </motion.div>

      <motion.div
        className="absolute bottom-[13%] left-[12%] flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] text-[var(--color-emerald-glow)] shadow-xl"
        animate={{ y: [0, 8, 0], rotate: [4, -4, 4] }}
        transition={{
          duration: 7,
          delay: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Users size={22} />
      </motion.div>

      <motion.div
        className="absolute bottom-[7%] right-[13%] flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] text-[var(--color-emerald-glow)] shadow-xl"
        animate={{ y: [0, -9, 0], rotate: [-4, 4, -4] }}
        transition={{
          duration: 6,
          delay: 0.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <School size={22} />
      </motion.div>

      <div className="absolute left-1/2 top-[2%] h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_18px_var(--color-emerald-glow)]" />
      <div className="absolute bottom-[1%] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_18px_var(--color-emerald-glow)]" />
    </div>
  );
}

export function CommunityWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-glow)] selection:text-[var(--color-bg)]">
      <Seo
        title="Community Initiatives"
        description="Grassroots initiatives Ficha Uchi runs beyond uniforms — food, clothing, and coordinated community outreach in Mathare."
        path="/work/community"
      />

      <section className="relative isolate overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-bg-alt)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(237,237,231,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(237,237,231,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-50" />
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[var(--color-emerald-glow)]/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-[var(--color-emerald-glow)]/10 blur-[140px]" />

        <FloatingObject className="left-[7%] top-[23%] hidden lg:block" delay={0.2}>
          <div className="h-3 w-3 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_25px_var(--color-emerald-glow)]" />
        </FloatingObject>

        <FloatingObject className="right-[12%] top-[19%] hidden lg:block" delay={1}>
          <div className="h-16 w-16 rotate-12 rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)]/40 backdrop-blur-md" />
        </FloatingObject>

        <FloatingObject className="bottom-[15%] left-[44%] hidden lg:block" delay={0.5}>
          <Sparkles
            size={20}
            strokeWidth={1.5}
            className="text-[var(--color-emerald-glow)]/50"
          />
        </FloatingObject>

        <div className="container-edit relative z-10 grid min-h-[720px] items-center gap-14 pb-20 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="max-w-2xl"
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-emerald-glow)]/25 bg-[var(--color-emerald-tint)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)]">
                <HeartHandshake size={14} />
                Core program
              </span>

              <span className="hidden h-px w-12 bg-[var(--color-line-strong)] sm:block" />

              <span className="hidden text-xs uppercase tracking-[0.18em] text-[var(--color-ink-faint)] sm:block">
                Built with community
              </span>
            </div>

            <h1 className="max-w-3xl font-serif text-5xl font-normal leading-[0.98] tracking-[-0.045em] text-[var(--color-ink)] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              Community care,
              <span className="block text-[var(--color-emerald-glow)]">
                made tangible.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[var(--color-ink-dim)] sm:text-lg">
              {project.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#initiatives"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-emerald-glow)] px-5 py-3 text-sm font-semibold text-[var(--color-bg)] transition-transform duration-300 hover:-translate-y-1"
              >
                Explore the work
                <ArrowDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>

              <div className="flex items-center gap-2 text-sm text-[var(--color-ink-faint)]">
                <MapPin size={15} className="text-[var(--color-emerald-glow)]" />
                Mathare and surrounding communities
              </div>
            </div>

            <div className="mt-14 grid max-w-lg grid-cols-3 gap-5 border-t border-[var(--color-line-strong)] pt-6">
              <div>
                <p className="font-serif text-2xl text-[var(--color-ink)]">06</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
                  Focus areas
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[var(--color-ink)]">01</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
                  Shared mission
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[var(--color-ink)]">∞</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
                  Possibilities
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
                    Community ecosystem
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-ink-dim)]">
                    Small actions. Shared momentum.
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line-strong)] text-[var(--color-emerald-glow)]">
                  <Sparkles size={15} />
                </div>
              </div>

              <CommunityOrbit />

              <div className="grid grid-cols-2 gap-3 px-1 pb-1 sm:grid-cols-3">
                {[
                  ["Food", "Immediate response"],
                  ["Clothing", "Practical support"],
                  ["Outreach", "Local connection"],
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
        id="initiatives"
        className="relative bg-[var(--color-bg)] py-24 md:py-32"
      >
        <div className="absolute right-[-160px] top-20 h-[360px] w-[360px] rounded-full bg-[var(--color-emerald-glow)]/[0.04] blur-[100px]" />

        <div className="container-edit relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <SectionHeader
              title="What this looks like in practice"
              description="Direct, responsive community support built around trust, local presence, and the needs people identify themselves."
            />
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {initiatives.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18 }}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.65,
                        delay: index * 0.06,
                        ease,
                      },
                    },
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -8,
                          transition: { duration: 0.3, ease },
                        }
                  }
                  className="group relative min-h-[285px] overflow-hidden rounded-[1.75rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-7 shadow-[0_18px_60px_rgba(0,0,0,0.08)] transition-colors duration-300 hover:border-[var(--color-emerald-glow)]/45"
                >
                  <div className="absolute -right-8 -top-10 font-serif text-[9rem] leading-none text-[var(--color-ink)]/[0.025] transition-transform duration-500 group-hover:scale-110">
                    {item.number}
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--color-emerald-glow)] transition-all duration-500 group-hover:w-full" />

                  <div className="relative flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-8 flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg)] text-[var(--color-emerald-glow)] transition-all duration-300 group-hover:border-[var(--color-emerald-glow)]/40 group-hover:bg-[var(--color-emerald-tint)]">
                          <Icon size={21} strokeWidth={1.7} />
                        </div>

                        <span className="rounded-full border border-[var(--color-line)] px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[var(--color-ink-faint)]">
                          {item.number}
                        </span>
                      </div>

                      <h3 className="max-w-[230px] font-serif text-2xl font-normal leading-tight text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-emerald-glow)]">
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-[280px] text-sm leading-7 text-[var(--color-ink-dim)]">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
                        {item.accent}
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

      <section className="relative overflow-hidden border-y border-[var(--color-line-strong)] bg-[var(--color-bg-alt)]/60 py-24 md:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(237,237,231,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(237,237,231,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="container-edit relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <SectionHeader
              title="Active community campaigns"
              description="Every initiative becomes a reusable project. Explore the campaigns currently moving resources, people, and ideas forward."
            />
          </motion.div>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {campaigns.slice(0, 3).map((campaign, index) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease,
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -7, transition: { duration: 0.3, ease } }
                }
              >
                <CampaignCard campaign={campaign} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[var(--color-bg)] py-24 md:py-32">
        <FloatingObject className="right-[9%] top-24 hidden lg:block" delay={0.4}>
          <div className="h-20 w-20 rounded-full border border-[var(--color-emerald-glow)]/15" />
        </FloatingObject>

        <FloatingObject className="left-[5%] bottom-20 hidden lg:block" delay={1.2}>
          <div className="h-3 w-3 rounded-full bg-[var(--color-emerald-glow)]/50" />
        </FloatingObject>

        <div className="container-edit">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <SectionHeader
              title="From the ground"
              description="Real moments from our community outreach, conversations, and distribution drives."
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
                communityImages.length
                  ? communityImages
                  : galleryImages.slice(6, 12)
              }
            />
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}