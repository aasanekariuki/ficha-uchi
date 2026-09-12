import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  HandCoins,
  Clock,
  Wrench,
  Building2,
  Share2,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  HeartHandshake,
  Users,
  Target,
  Zap,
  Quote,
  CircleDot,
} from "lucide-react";
import { Seo } from "../components/Seo";
import { SectionHeader } from "../components/SectionHeader";
import { campaigns } from "../data/campaigns";
import { CampaignCard } from "../components/CampaignCard";
import { site } from "../data/site";

type Pathway = "money" | "time" | "skills" | "organization" | "network";

const options: {
  id: Pathway;
  title: string;
  shortTitle: string;
  description: string;
  icon: typeof HandCoins;
  accent: string;
}[] = [
  {
    id: "money",
    title: "My Money",
    shortTitle: "Give",
    description: "Support an active campaign directly.",
    icon: HandCoins,
    accent: "from-emerald-400/20 to-transparent",
  },
  {
    id: "time",
    title: "My Time",
    shortTitle: "Volunteer",
    description: "Volunteer for events and distribution.",
    icon: Clock,
    accent: "from-sky-400/20 to-transparent",
  },
  {
    id: "skills",
    title: "My Skills",
    shortTitle: "Contribute",
    description: "Offer professional or technical skills.",
    icon: Wrench,
    accent: "from-amber-400/20 to-transparent",
  },
  {
    id: "organization",
    title: "My Organization",
    shortTitle: "Partner",
    description: "Partner with Ficha Uchi.",
    icon: Building2,
    accent: "from-violet-400/20 to-transparent",
  },
  {
    id: "network",
    title: "My Network",
    shortTitle: "Amplify",
    description: "Help campaigns reach more people.",
    icon: Share2,
    accent: "from-rose-400/20 to-transparent",
  },
];

const impactPoints = [
  {
    icon: HeartHandshake,
    title: "Dignity first",
    text: "Every contribution helps make access to essential care more human.",
  },
  {
    icon: Users,
    title: "Community led",
    text: "We work alongside the people and communities we serve.",
  },
  {
    icon: Target,
    title: "Purposeful action",
    text: "Your support connects to practical, visible initiatives.",
  },
];

export function GetInvolved() {
  const [choice, setChoice] = useState<Pathway>("money");
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-glow)] selection:text-[var(--color-bg)]">
      <Seo
        title="Get Involved"
        description="Choose how you'd like to contribute to Ficha Uchi — money, time, skills, your organization, or your network."
        path="/get-involved"
      />

      <section className="relative isolate overflow-hidden bg-[var(--color-bg-alt)] pt-28 sm:pt-32 md:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-[var(--color-emerald-glow)]/10 blur-3xl" />
          <div className="absolute -bottom-48 -left-32 h-[30rem] w-[30rem] rounded-full bg-emerald-950/40 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(var(--color-ink)_1px,transparent_1px),linear-gradient(90deg,var(--color-ink)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
        </div>

        <div className="container-edit relative z-10">
          <div className="grid items-end gap-14 pb-20 md:grid-cols-[1.1fr_0.9fr] md:pb-28">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)] backdrop-blur-xl"
              >
                <Sparkles size={14} />
                Take action
              </motion.div>

              <h1 className="max-w-4xl text-balance font-serif text-5xl font-normal leading-[0.98] tracking-[-0.045em] text-[var(--color-ink)] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
                There is more than one way to{" "}
                <span className="text-[var(--color-emerald-glow)]">
                  show up.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[var(--color-ink-dim)] sm:text-lg md:text-xl">
                Whether you give, volunteer, share a skill, or open a door,
                your contribution can strengthen dignity and possibility in
                Mathare.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#pathways"
                  className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-emerald-glow)] px-6 py-3.5 text-sm font-semibold text-[var(--color-bg)] shadow-xl shadow-[var(--color-emerald-glow)]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-2xl hover:shadow-[var(--color-emerald-glow)]/25"
                >
                  Find your pathway
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <div className="flex items-center gap-2 text-sm text-[var(--color-ink-faint)]">
                  <CircleDot size={14} className="text-[var(--color-emerald-glow)]" />
                  Every action counts
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative mx-auto w-full max-w-md md:ml-auto"
            >
              <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)]/50 p-5 shadow-2xl backdrop-blur-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(95,165,132,0.18),transparent_48%)]" />

                <motion.div
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          rotate: [0, 4, -3, 0],
                          y: [0, -8, 5, 0],
                        }
                  }
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-[15%] top-[14%] h-24 w-24 rounded-[2rem] border border-[var(--color-emerald-glow)]/30 bg-[var(--color-emerald-tint)]/70 backdrop-blur-md"
                />

                <motion.div
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          rotate: [0, -5, 4, 0],
                          y: [0, 7, -5, 0],
                        }
                  }
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute bottom-[17%] right-[13%] h-32 w-32 rounded-full border border-amber-300/20 bg-amber-200/[0.04] backdrop-blur-md"
                />

                <div className="absolute left-1/2 top-1/2 flex w-[78%] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-[1.75rem] border border-[var(--color-emerald-glow)]/30 bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)] shadow-2xl shadow-[var(--color-emerald-glow)]/10">
                    <HeartHandshake size={38} strokeWidth={1.4} />
                  </div>

                  <span className="font-serif text-3xl leading-tight text-[var(--color-ink)] sm:text-4xl">
                    Small actions.
                    <br />
                    Shared impact.
                  </span>

                  <p className="mt-4 max-w-[15rem] text-sm leading-6 text-[var(--color-ink-dim)]">
                    Choose what feels meaningful and make it yours.
                  </p>
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-[var(--color-line)] pt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
                  <span>Ficha Uchi</span>
                  <span>Community movement</span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)]">
                    <Zap size={17} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-ink)]">
                      Your capacity matters
                    </p>
                    <p className="mt-0.5 text-[10px] text-[var(--color-ink-faint)]">
                      Start where you are
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-[var(--color-line)] bg-[var(--color-bg)] py-10 md:py-14">
        <div className="container-edit">
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {impactPoints.map(({ icon: Icon, title, text }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="flex gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)] text-[var(--color-emerald-glow)]">
                  <Icon size={20} strokeWidth={1.7} />
                </div>
                <div>
                  <h2 className="font-serif text-xl text-[var(--color-ink)]">
                    {title}
                  </h2>
                  <p className="mt-1.5 max-w-xs text-sm leading-6 text-[var(--color-ink-dim)]">
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pathways" className="scroll-mt-20 bg-[var(--color-bg)] py-20 md:py-28">
        <div className="container-edit">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >
            <div className="max-w-2xl">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-emerald-glow)]">
                <span className="h-px w-7 bg-[var(--color-emerald-glow)]" />
                Choose your way
              </span>

              <h2 className="font-serif text-4xl font-normal tracking-tight text-[var(--color-ink)] sm:text-5xl">
                What can you bring?
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-ink-dim)]">
                There is no single definition of participation. Explore a
                pathway and see how you can get started.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-xs uppercase tracking-[0.16em] text-[var(--color-ink-faint)] md:flex">
              <span className="h-2 w-2 rounded-full bg-[var(--color-emerald-glow)]" />
              Select an option
            </div>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {options.map(
              ({ id, shortTitle, description, icon: Icon, accent }, index) => {
                const isSelected = choice === id;

                return (
                  <motion.button
                    key={id}
                    type="button"
                    onClick={() => setChoice(id)}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.06, duration: 0.45 }}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group relative min-h-[190px] overflow-hidden rounded-3xl border p-5 text-left transition-all duration-300 sm:p-6 ${
                      isSelected
                        ? "border-[var(--color-emerald-glow)]/70 bg-[var(--color-surface)] shadow-2xl shadow-[var(--color-emerald-glow)]/10 ring-1 ring-[var(--color-emerald-glow)]/30"
                        : "border-[var(--color-line-strong)] bg-[var(--color-surface)]/45 hover:border-[var(--color-emerald-glow)]/35 hover:bg-[var(--color-surface)]"
                    }`}
                  >
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition-opacity duration-500 ${
                        isSelected ? "opacity-100" : "group-hover:opacity-100"
                      }`}
                    />

                    <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                      <div className="flex items-start justify-between">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 ${
                            isSelected
                              ? "border-[var(--color-emerald-glow)] bg-[var(--color-emerald-glow)] text-[var(--color-bg)] shadow-lg shadow-[var(--color-emerald-glow)]/20"
                              : "border-[var(--color-line-strong)] bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)] group-hover:border-[var(--color-emerald-glow)]/40"
                          }`}
                        >
                          <Icon size={21} strokeWidth={1.8} />
                        </div>

                        <span
                          className={`text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                            isSelected
                              ? "text-[var(--color-emerald-glow)]"
                              : "text-[var(--color-ink-faint)]"
                          }`}
                        >
                          0{index + 1}
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-2xl font-medium text-[var(--color-ink)]">
                            {shortTitle}
                          </span>

                          {isSelected && (
                            <motion.span
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="text-[var(--color-emerald-glow)]"
                            >
                              <CheckCircle2 size={16} />
                            </motion.span>
                          )}
                        </div>

                        <p className="mt-2 text-xs leading-5 text-[var(--color-ink-dim)]">
                          {description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              },
            )}
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={choice}
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -14, filter: "blur(5px)" }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative mt-8 overflow-hidden rounded-[2rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)]/75 shadow-2xl backdrop-blur-xl md:mt-10"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(95,165,132,0.08),transparent_45%)]" />
              <div className="relative p-6 sm:p-8 md:p-12">
                <PathwayResult pathway={choice} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] bg-[var(--color-bg-alt)] py-20 md:py-24">
        <div className="container-edit">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-emerald-glow)]">
                <Quote size={15} />
                A shared commitment
              </span>

              <h2 className="font-serif text-4xl font-normal leading-tight tracking-tight text-[var(--color-ink)] sm:text-5xl">
                Come as you are.
                <br />
                Contribute what you can.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-l border-[var(--color-emerald-glow)]/40 pl-6 md:pl-10"
            >
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-ink-dim)]">
                Ficha Uchi grows through people who believe that dignity should
                be practical, shared, and accessible. You do not need to have
                everything figured out to take part.
              </p>

              <Link
                to="/contact"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-emerald-glow)] transition-colors hover:text-emerald-300"
              >
                Start a conversation
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PathwayResult({ pathway }: { pathway: Pathway }) {
  if (pathway === "money") {
    const activeCampaigns = campaigns.filter((campaign) => campaign.status === "active");

    return (
      <div>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeader
            title="Support an initiative"
            description="Every active campaign funds something specific — pick what resonates with you."
          />

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
            <span className="h-2 w-2 rounded-full bg-[var(--color-emerald-glow)]" />
            {activeCampaigns.length} active{" "}
            {activeCampaigns.length === 1 ? "campaign" : "campaigns"}
          </div>
        </div>

        {activeCampaigns.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {activeCampaigns.map((campaign, index) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -5 }}
                className="overflow-hidden rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)]/60 transition-colors duration-300 hover:border-[var(--color-emerald-glow)]/45"
              >
                <CampaignCard campaign={campaign} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-[var(--color-line-strong)] p-8 text-center">
            <p className="text-sm text-[var(--color-ink-dim)]">
              There are no active campaigns at the moment. Check back soon or
              reach out to explore other ways to support.
            </p>
          </div>
        )}
      </div>
    );
  }

  if (pathway === "time") {
    return (
      <Result
        eyebrow="Your time"
        icon={Clock}
        title="Volunteer with us"
        description="Fittings, distribution days, events, and ongoing programs all run on volunteer time. Tell us your availability and interests, and we’ll help you find a meaningful way to participate."
        cta={{ label: "Go to the volunteer form", to: "/volunteer" }}
        details={["Events and distribution", "Community support", "Ongoing programs"]}
      />
    );
  }

  if (pathway === "skills") {
    return (
      <Result
        eyebrow="Your skills"
        icon={Wrench}
        title="Offer your skills"
        description="Design, logistics, teaching, photography, data, legal, finance — professional and practical skills can go a long way. Let us know what you do best and where you would love to help."
        cta={{ label: "Go to the volunteer form", to: "/volunteer" }}
        details={["Creative and technical work", "Teaching and facilitation", "Operations and strategy"]}
      />
    );
  }

  if (pathway === "organization") {
    return (
      <Result
        eyebrow="Your organization"
        icon={Building2}
        title="Partner as an organization"
        description="Schools, companies, foundations, and institutions can support through funding, sponsorship, in-kind support, or campaign collaboration. Let’s explore what a useful partnership could look like."
        cta={{ label: "Go to the partners page", to: "/partners" }}
        details={["Funding and sponsorship", "In-kind support", "Program collaboration"]}
      />
    );
  }

  return (
    <Result
      eyebrow="Your network"
      icon={Share2}
      title="Spread the word"
      description="Share our stories and campaigns with people who might care. Follow along on social media, tag us, and help more people discover the work. Visibility creates momentum."
      cta={{ label: "See our social links", to: "/contact" }}
      details={["Share campaign stories", "Invite your community", "Follow and amplify"]}
      extra={
        <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--color-ink-dim)]">
          Find us on Instagram, X, and Facebook — links are located in the
          footer and on the{" "}
          <Link
            to="/contact"
            className="font-medium text-[var(--color-emerald-glow)] underline decoration-[var(--color-emerald-glow)]/40 underline-offset-4 transition-colors hover:text-emerald-300"
          >
            Contact page
          </Link>
          . ({site.name})
        </p>
      }
    />
  );
}

function Result({
  eyebrow,
  icon: Icon,
  title,
  description,
  cta,
  details,
  extra,
}: {
  eyebrow: string;
  icon: typeof Clock;
  title: string;
  description: string;
  cta: { label: string; to: string };
  details: string[];
  extra?: ReactNode;
}) {
  return (
    <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16">
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl border border-[var(--color-emerald-glow)]/30 bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)]"
        >
          <Icon size={28} strokeWidth={1.7} />
        </motion.div>

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-emerald-glow)]">
          {eyebrow}
        </p>

        <h3 className="max-w-lg font-serif text-4xl font-normal leading-tight tracking-tight text-[var(--color-ink)] sm:text-5xl">
          {title}
        </h3>
      </div>

      <div>
        <p className="max-w-2xl text-base leading-8 text-[var(--color-ink-dim)] md:text-lg">
          {description}
        </p>

        {extra}

        <div className="mt-7 flex flex-wrap gap-2">
          {details.map((detail) => (
            <div
              key={detail}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)]/60 px-3.5 py-2 text-xs text-[var(--color-ink-dim)]"
            >
              <CheckCircle2
                size={14}
                className="text-[var(--color-emerald-glow)]"
              />
              {detail}
            </div>
          ))}
        </div>

        <motion.div whileHover={{ x: 4 }} className="mt-8 inline-block">
          <Link
            to={cta.to}
            className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-emerald-glow)] px-6 py-3.5 text-sm font-semibold text-[var(--color-bg)] shadow-lg shadow-[var(--color-emerald-glow)]/15 transition-all duration-300 hover:bg-emerald-400 hover:shadow-xl hover:shadow-[var(--color-emerald-glow)]/25"
          >
            <span>{cta.label}</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}