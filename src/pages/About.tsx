import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Compass,
  ShieldCheck,
  HeartHandshake,
  MapPin,
  Users2,
  Sparkles,
  ArrowUpRight,
  CircleDot,
} from "lucide-react";
import { Seo } from "../components/Seo";
import { Img } from "../components/Image";
import { SectionHeader } from "../components/SectionHeader";
import { LinkButton } from "../components/Button";

const sectionIcons = [
  Compass,
  ShieldCheck,
  HeartHandshake,
  MapPin,
  Users2,
  Sparkles,
];

const sections = [
  {
    id: "problem",
    eyebrow: "The problem",
    title:
      "Clothing, confidence, and the classroom are more connected than they look",
    body: [
      "Poverty rarely shows up in a classroom as a single dramatic event. More often it shows up as a torn sleeve, a uniform two sizes too small, or none at all — and a child who would rather stay home than be seen.",
      "That absence compounds. Missed days become missed terms. Confidence erodes. The relationship between clothing and dignity isn't cosmetic — it shapes whether a child shows up at all.",
    ],
  },
  {
    id: "philosophy",
    eyebrow: "The philosophy",
    title: "Practical dignity, not charity theatre",
    body: [
      "We try to solve the specific, immediate problem in front of us — a uniform, a repair, a gap — rather than a symbolic version of it. The work is deliberately unglamorous: fittings, fabric, tailoring, logistics.",
      "We also try not to create dependency. Where we can route money and work through the local economy instead of around it, we do — which is why Mathare tailors are central to the model, not incidental to it.",
    ],
  },
  {
    id: "how",
    eyebrow: "How we work",
    title:
      "Schools identify need. Tailors do the work. The community stays central.",
    body: [
      "Partner schools and community contacts help identify learners who need support. Materials are sourced, and the work itself — tailoring and repair — goes to local tailors in Mathare.",
      "Volunteers support fittings and distribution days. Partners and well-wishers fund the materials and logistics that make the cycle repeatable.",
    ],
  },
  {
    id: "where",
    eyebrow: "Where we work",
    title: "Mathare, and the communities around it",
    body: [
      "Ficha Uchi's work is rooted in Mathare, Nairobi, and has extended into surrounding communities as school partnerships and referrals have grown.",
    ],
  },
  {
    id: "who",
    eyebrow: "Who we work with",
    title: "Schools, families, tailors, volunteers, and partners",
    body: [
      "No part of this model works alone. Schools identify need. Families and learners participate directly. Local tailors do the physical work. Volunteers give time. Partners and well-wishers provide funding and materials.",
    ],
  },
  {
    id: "future",
    eyebrow: "The future",
    title: "Where we want to go",
    body: [
      "We want to deepen youth development programs, expand the tailor network so more local income is created, and build the kind of transparent reporting that makes it easy for partners and donors to trust exactly where support goes.",
    ],
  },
];

const revealUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-glow)] selection:text-[var(--color-bg)]">
      <Seo
        title="About"
        description="The story of Ficha Uchi — why it started in Mathare in 2013, how it works, and where it's headed."
        path="/about"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-bg-alt)] pb-20 pt-32 md:pb-32 md:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,106,79,0.2),transparent_68%)]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 75%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 75%, transparent)",
          }}
        />

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full border border-[var(--color-emerald-glow)]/10 md:right-[8%] md:h-96 md:w-96"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  rotate: [0, 12, 0],
                  scale: [1, 1.04, 1],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-8 rounded-full border border-dashed border-[var(--color-emerald-glow)]/20" />
          <div className="absolute inset-20 rounded-full bg-[var(--color-emerald-glow)]/[0.035] blur-2xl" />
        </motion.div>

        <div className="container-edit relative z-10">
          <motion.div
            initial={prefersReducedMotion ? undefined : "hidden"}
            animate={prefersReducedMotion ? undefined : "visible"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="max-w-5xl"
          >
            <motion.div
              variants={revealUp}
              className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-emerald-glow)]"
            >
              <span className="h-px w-10 bg-[var(--color-emerald-glow)]" />
              About Ficha Uchi
            </motion.div>

            <motion.h1
              variants={revealUp}
              className="mt-6 max-w-4xl text-balance font-serif text-[clamp(3.5rem,8vw,7.5rem)] font-normal leading-[0.95] tracking-[-0.055em] text-[var(--color-ink)]"
            >
              Why{" "}
              <span className="italic text-[var(--color-emerald-glow)]">
                &quot;Ficha Uchi&quot;
              </span>
              ?
            </motion.h1>

            <motion.div
              variants={revealUp}
              className="mt-8 grid gap-8 border-t border-[var(--color-line-strong)] pt-7 md:grid-cols-[0.7fr_1.3fr] md:gap-16"
            >
              <div className="flex items-start gap-3 text-xs uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
                <CircleDot
                  size={14}
                  className="mt-0.5 text-[var(--color-emerald-glow)]"
                />
                <span>Covering the body.</span>
              </div>

              <p className="max-w-2xl text-lg leading-8 text-[var(--color-ink-dim)] md:text-xl md:leading-9">
                &quot;Ficha Uchi&quot; speaks to a straightforward idea:
                covering the body, restoring dignity. The name is a promise
                about what the work is actually for, not visibility for the
                organization, but a child who can walk into school without
                feeling exposed by what they don&apos;t have.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Narrative Sections */}
      {sections.map((section, i) => {
        const Icon = sectionIcons[i % sectionIcons.length]!;
        const isAlternate = i % 2 === 1;

        return (
          <NarrativeSection
            key={section.id}
            section={section}
            Icon={Icon}
            index={i}
            isAlternate={isAlternate}
          />
        );
      })}

      {/* Historical Origin */}
      <section className="relative overflow-hidden bg-[var(--color-bg)] py-24 md:py-36">
        <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-[var(--color-emerald-glow)]/[0.04] blur-[110px]" />

        <div className="container-edit relative z-10">
          <SectionHeader
            title="The beginning, in one image"
            tone="dark"
          />

          <div className="mt-12 grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
            <motion.div
              initial={
                prefersReducedMotionGlobal()
                  ? undefined
                  : { opacity: 0, x: -25 }
              }
              whileInView={
                prefersReducedMotionGlobal()
                  ? undefined
                  : { opacity: 1, x: 0 }
              }
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="absolute -inset-3 rounded-[2rem] border border-[var(--color-emerald-glow)]/10 transition-transform duration-700 group-hover:rotate-1" />

              <div className="relative overflow-hidden rounded-3xl border border-[var(--color-line-strong)] bg-[var(--color-surface)] shadow-2xl shadow-black/20">
                <Img
                  src="https://scontent.fmba5-2.fna.fbcdn.net/v/t39.30808-6/661236162_1262725942629500_8646707292275153059_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1356&ctp=s2048x1356&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rEI90PvPscwQ7kNvwHEy-tM&_nc_oc=AdqRC0aDSR-9TVvP7bPZXQ4eFwvu9dSv0fnH3rZXgPEfaUveZvCZ-wFYKjWTnGdH1TY&_nc_zt=23&_nc_ht=scontent.fmba5-2.fna&_nc_gid=DKKTnbIditqph7K6J9CPIA&_nc_ss=7b289&oh=00_AQJiIxzkH8j2s8w7UAeQpZMEXRN9wLrnPLBPf3OV0DvmsA&oe=6AAB091A"
                  alt="Where Ficha Uchi began in Mathare, 2013"
                  aspect="aspect-[4/3]"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
                  <MapPin size={12} />
                  Mathare · 2013
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={
                prefersReducedMotionGlobal()
                  ? undefined
                  : { opacity: 0, x: 25 }
              }
              whileInView={
                prefersReducedMotionGlobal()
                  ? undefined
                  : { opacity: 1, x: 0 }
              }
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col justify-center"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--color-emerald-glow)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)]">
                  Where it began
                </span>
              </div>

              <p className="max-w-prose text-lg leading-8 text-[var(--color-ink-dim)]">
                Every figure and program on this site traces back to a
                specific place and a specific year. If you want to see how
                that grew step by step, the full timeline is next.
              </p>

              <div className="mt-9">
                <LinkButton
                  as="link"
                  to="/timeline"
                  size="lg"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-emerald-glow)] px-7 py-4 font-medium text-[var(--color-bg)] shadow-[0_0_25px_rgba(45,106,79,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-emerald-glow)]/90 hover:shadow-[0_0_35px_rgba(45,106,79,0.4)]"
                >
                  View the timeline
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </LinkButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-bg-alt)] py-24 text-center md:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,106,79,0.16),transparent_68%)]" />

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-[8%] top-20 hidden text-[var(--color-emerald-glow)]/[0.12] md:block"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  y: [0, -10, 0],
                  rotate: [0, 8, 0],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={72} strokeWidth={0.8} />
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-12 right-[10%] hidden text-[var(--color-emerald-glow)]/[0.1] md:block"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  y: [0, 10, 0],
                  rotate: [0, -8, 0],
                }
          }
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <HeartHandshake size={80} strokeWidth={0.7} />
        </motion.div>

        <div className="container-edit relative z-10 max-w-3xl">
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-emerald-glow)]/30 bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)]">
              <HeartHandshake size={22} strokeWidth={1.6} />
            </div>

            <h2 className="text-balance font-serif text-3xl font-normal leading-tight text-[var(--color-ink)] sm:text-4xl md:text-5xl">
              Want to be part of the next chapter?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[var(--color-ink-dim)] md:text-lg">
              Whether as a partner, volunteer, or donor, every contribution
              fuels dignity in Mathare.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <LinkButton
                as="link"
                to="/get-involved"
                size="lg"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-emerald-glow)] px-7 py-4 font-medium text-[var(--color-bg)] shadow-[0_0_25px_rgba(45,106,79,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-emerald-glow)]/90"
              >
                Get Involved
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </LinkButton>

              <LinkButton
                as="link"
                to="/team"
                size="lg"
                variant="outline-light"
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)] px-7 py-4 text-[var(--color-ink)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-emerald-glow)] hover:text-[var(--color-emerald-glow)]"
              >
                Meet the team
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </LinkButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function NarrativeSection({
  section,
  Icon,
  index,
  isAlternate,
}: {
  section: {
    id: string;
    eyebrow: string;
    title: string;
    body: string[];
  };
  Icon: React.ElementType;
  index: number;
  isAlternate: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className={`relative overflow-hidden py-24 md:py-32 ${
        isAlternate
          ? "border-y border-[var(--color-line)] bg-[var(--color-bg-alt)]"
          : "bg-[var(--color-bg)]"
      }`}
    >
      <div className="pointer-events-none absolute right-[-8rem] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[var(--color-emerald-glow)]/[0.025] blur-[100px]" />

      <div className="container-edit relative z-10">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <motion.div
            initial={
              prefersReducedMotion ? undefined : { opacity: 0, x: -24 }
            }
            whileInView={
              prefersReducedMotion ? undefined : { opacity: 1, x: 0 }
            }
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <span className="pointer-events-none absolute -left-2 -top-12 font-serif text-8xl leading-none text-[var(--color-emerald-glow)]/[0.07] md:-left-5 md:-top-16 md:text-[10rem]">
              0{index + 1}
            </span>

            <div className="relative">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--color-emerald-glow)]/25 bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)]">
                  <Icon size={16} strokeWidth={1.7} />
                </div>

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)]">
                  {section.eyebrow}
                </span>
              </div>

              <h2 className="max-w-xl text-balance font-serif text-3xl font-normal leading-[1.14] text-[var(--color-ink)] md:text-4xl">
                {section.title}
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={
              prefersReducedMotion ? undefined : { opacity: 0, x: 24 }
            }
            whileInView={
              prefersReducedMotion ? undefined : { opacity: 1, x: 0 }
            }
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex flex-col gap-6 md:pt-2"
          >
            {section.body.map((paragraph, paragraphIndex) => (
              <div key={paragraphIndex} className="relative pl-6">
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-[var(--color-emerald-glow)]/70" />

                <p className="max-w-prose text-base leading-8 text-[var(--color-ink-dim)] md:text-lg">
                  {paragraph}
                </p>
              </div>
            ))}

            <div className="mt-2 h-px w-16 bg-[var(--color-emerald-glow)]/50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function prefersReducedMotionGlobal() {
  return false;
}