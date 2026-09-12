import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Handshake,
  Banknote,
  Package,
  Wrench,
  Laptop2,
  School,
  Users,
  Megaphone,
  CheckCircle2,
  Sparkles,
  Building2,
  ArrowUpRight,
  Globe2,
  HeartHandshake,
  Network,
} from "lucide-react";
import { Seo } from "../components/Seo";
import { SectionHeader } from "../components/SectionHeader";
import { PartnerForm } from "../components/PartnerForm";

const reasons = [
  "A model that puts money directly to work in the community it's raised for",
  "A clear, local, verifiable point of contact in Mathare",
  "A track record of consistent activity, not a one-off campaign",
  "A structure ready to report transparently as data collection matures",
];

const partnershipTypes = [
  { title: "Funding", icon: Banknote },
  { title: "Sponsorship", icon: Handshake },
  { title: "In-kind support", icon: Package },
  { title: "Skills", icon: Wrench },
  { title: "Technology", icon: Laptop2 },
  { title: "School partnerships", icon: School },
  { title: "Community programs", icon: Users },
  { title: "Campaign collaboration", icon: Megaphone },
];

const collaborationSteps = [
  {
    number: "01",
    title: "Start a conversation",
    text: "Share your interests, resources, or the kind of community outcome you want to support.",
  },
  {
    number: "02",
    title: "Shape the partnership",
    text: "Together, we identify a practical and responsible way to contribute.",
  },
  {
    number: "03",
    title: "Deliver and report",
    text: "We coordinate implementation and build toward clear, accountable reporting.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Partners() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-glow)] selection:text-[var(--color-bg)]">
      <Seo
        title="Partners"
        description="Partner with Ficha Uchi as a company, foundation, school, or institution — funding, sponsorship, in-kind support, and more."
        path="/partners"
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[var(--color-bg-alt)] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[var(--color-emerald-glow)]/10 blur-3xl" />
          <div className="absolute -bottom-48 -left-32 h-[30rem] w-[30rem] rounded-full bg-[var(--color-gold)]/5 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(95,165,132,0.14),transparent_34%),radial-gradient(circle_at_8%_90%,rgba(201,161,90,0.07),transparent_30%)]" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(var(--color-ink)_1px,transparent_1px),linear-gradient(90deg,var(--color-ink)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <div className="container-edit relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.7fr] lg:gap-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="max-w-3xl"
            >
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)] backdrop-blur-xl">
                <Sparkles size={14} />
                Collaborative impact
              </div>

              <h1 className="max-w-4xl text-balance font-serif text-5xl font-normal leading-[1.02] tracking-[-0.045em] text-[var(--color-ink)] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
                Build something useful together.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--color-ink-dim)] md:text-xl">
                Partner with Ficha Uchi to support practical community work
                through funding, skills, resources, technology, and long-term
                collaboration.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#partner-form"
                  className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-emerald-glow)] px-6 py-3.5 text-sm font-semibold text-[var(--color-bg)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--color-emerald-glow)]/20"
                >
                  Start a conversation
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <span className="inline-flex items-center gap-2 text-sm text-[var(--color-ink-faint)]">
                  <Globe2 size={16} />
                  Local work, shared responsibility
                </span>
              </div>
            </motion.div>

            {/* Abstract partnership visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="relative aspect-square">
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { rotate: 360 }
                  }
                  transition={{
                    duration: 32,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-7 rounded-full border border-dashed border-[var(--color-emerald-glow)]/30"
                />

                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { rotate: -360 }
                  }
                  transition={{
                    duration: 42,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-16 rounded-full border border-dashed border-[var(--color-gold)]/25"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-[var(--color-emerald-glow)]/30 bg-[var(--color-surface)]/80 shadow-2xl shadow-[var(--color-emerald-glow)]/10 backdrop-blur-xl">
                    <div className="absolute inset-3 rounded-full border border-[var(--color-line)]" />
                    <HeartHandshake
                      size={48}
                      strokeWidth={1.2}
                      className="text-[var(--color-emerald-glow)]"
                    />
                  </div>
                </div>

                {[
                  {
                    label: "People",
                    icon: Users,
                    position: "left-0 top-[18%]",
                  },
                  {
                    label: "Resources",
                    icon: Package,
                    position: "right-0 top-[18%]",
                  },
                  {
                    label: "Skills",
                    icon: Wrench,
                    position: "bottom-[12%] left-[8%]",
                  },
                  {
                    label: "Ideas",
                    icon: Sparkles,
                    position: "bottom-[12%] right-[8%]",
                  },
                ].map(({ label, icon: Icon, position }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.6 + index * 0.12,
                      duration: 0.5,
                    }}
                    className={`absolute ${position} flex items-center gap-2 rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)]/80 px-3 py-2.5 text-xs font-medium text-[var(--color-ink-dim)] shadow-lg backdrop-blur-xl`}
                  >
                    <Icon
                      size={15}
                      className="text-[var(--color-emerald-glow)]"
                    />
                    {label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="relative bg-[var(--color-bg)] py-20 md:py-28">
        <div className="container-edit">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)]">
                <span className="h-px w-8 bg-[var(--color-emerald-glow)]" />
                Why collaborate
              </div>

              <h2 className="max-w-md font-serif text-4xl font-normal leading-tight tracking-tight text-[var(--color-ink)] md:text-5xl">
                Partnership should create real movement.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-[var(--color-ink-dim)]">
                We focus on relationships that contribute something practical
                to the community and can grow with clarity, trust, and shared
                responsibility.
              </p>

              <div className="mt-9 flex items-center gap-3 text-sm text-[var(--color-ink-faint)]">
                <div className="flex -space-x-2">
                  {[0, 1, 2].map((item) => (
                    <div
                      key={item}
                      className="h-9 w-9 rounded-full border-2 border-[var(--color-bg)] bg-[var(--color-surface)]"
                    />
                  ))}
                </div>
                <span>Built through people and shared effort</span>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="space-y-4"
            >
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={
                    shouldReduceMotion ? undefined : { x: 5 }
                  }
                  className="group flex items-start gap-5 rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)]/55 p-5 transition-all duration-300 hover:border-[var(--color-emerald-glow)]/45 hover:bg-[var(--color-surface)] md:p-6"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--color-emerald-glow)]/25 bg-[var(--color-emerald-tint)] text-xs font-semibold text-[var(--color-emerald-glow)]">
                    0{index + 1}
                  </div>

                  <p className="pt-1 text-sm leading-7 text-[var(--color-ink-dim)] transition-colors group-hover:text-[var(--color-ink)] md:text-base">
                    {reason}
                  </p>

                  <CheckCircle2
                    size={18}
                    className="ml-auto mt-1 shrink-0 text-[var(--color-emerald-glow)] opacity-60 transition-opacity group-hover:opacity-100"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership types */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-bg-alt)] py-20 md:py-28">
        <div className="container-edit">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)]">
                <span className="h-px w-8 bg-[var(--color-emerald-glow)]" />
                Ways to contribute
              </div>

              <h2 className="font-serif text-4xl font-normal leading-tight tracking-tight text-[var(--color-ink)] md:text-5xl">
                Bring what you can.
              </h2>

              <p className="mt-6 max-w-sm text-base leading-7 text-[var(--color-ink-dim)]">
                Not every partnership looks the same. Some bring financial
                support, others bring expertise, tools, access, or time.
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {partnershipTypes.map(({ title, icon: Icon }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -5 }
                  }
                  className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)]/70 p-5 transition-all duration-300 hover:border-[var(--color-emerald-glow)]/50 hover:shadow-xl hover:shadow-[var(--color-emerald-glow)]/[0.04]"
                >
                  <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-[var(--color-emerald-glow)]/5 blur-2xl transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--color-emerald-glow)]/25 bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)] transition-all duration-300 group-hover:border-[var(--color-emerald-glow)] group-hover:bg-[var(--color-emerald-glow)] group-hover:text-[var(--color-bg)]">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <div className="relative flex-1">
                    <span className="text-sm font-semibold text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-emerald-glow)]">
                      {title}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="relative text-[var(--color-ink-faint)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-emerald-glow)]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration process */}
      <section className="bg-[var(--color-bg)] py-20 md:py-28">
        <div className="container-edit">
          <SectionHeader
            title="How collaboration begins"
            description="A simple process for turning shared interest into practical action."
          />

          <div className="relative mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
            <div className="pointer-events-none absolute left-[16%] right-[16%] top-12 hidden h-px bg-gradient-to-r from-transparent via-[var(--color-line-strong)] to-transparent md:block" />

            {collaborationSteps.map(({ number, title, text }, index) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative rounded-[1.75rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-7 shadow-lg shadow-black/[0.03] md:p-8"
              >
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-emerald-glow)]/40 bg-[var(--color-bg)] font-mono text-xs text-[var(--color-emerald-glow)]">
                  {number}
                </div>

                <h3 className="mt-9 font-serif text-2xl font-normal tracking-tight text-[var(--color-ink)]">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--color-ink-dim)]">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner logos */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-bg-alt)] py-20 md:py-24">
        <div className="container-edit">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20">
            <SectionHeader
              tone="dark"
              title="Partner network"
              description="Partner logos will be shown here only with each partner's explicit permission."
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex min-h-[12rem] items-center justify-center overflow-hidden rounded-[1.75rem] border border-dashed border-[var(--color-line-strong)] bg-[var(--color-surface)]/45 p-8 backdrop-blur-md"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(95,165,132,0.06),transparent_65%)]" />

              <div className="relative flex flex-col items-center gap-4 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-emerald-glow)]/20 bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)]">
                  <Building2 size={24} strokeWidth={1.7} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[var(--color-ink)]">
                    No partner logos published yet
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-ink-dim)]">
                    Added here as agreements are confirmed.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section
        id="partner-form"
        className="relative overflow-hidden bg-[var(--color-bg)] py-20 md:py-28"
      >
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[var(--color-emerald-glow)]/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[var(--color-gold)]/5 blur-3xl" />

        <div className="container-edit relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)]">
                <span className="h-px w-8 bg-[var(--color-emerald-glow)]" />
                Let's work together
              </div>

              <h2 className="font-serif text-4xl font-normal leading-tight tracking-tight text-[var(--color-ink)] md:text-5xl">
                Have an idea worth exploring?
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-[var(--color-ink-dim)]">
                Tell us what you have in mind. Whether you represent a
                company, school, foundation, institution, or yourself, we are
                open to thoughtful conversations.
              </p>

              <div className="mt-9 flex items-center gap-3 text-sm text-[var(--color-ink-faint)]">
                <Network
                  size={18}
                  className="text-[var(--color-emerald-glow)]"
                />
                <span>Every meaningful partnership starts somewhere.</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-[2rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-6 shadow-2xl shadow-black/[0.06] backdrop-blur-xl sm:p-8 md:p-10"
            >
              <PartnerForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}