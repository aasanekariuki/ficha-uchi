import { HeartHandshake, ArrowDown, Check, Sparkles, Users, CalendarDays } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Seo } from "../components/Seo";
import { SectionHeader } from "../components/SectionHeader";
import { VolunteerForm } from "../components/VolunteerForm";

function FloatingObject({
  className = "",
  delay = 0,
  duration = 5,
}: {
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -10, 0],
              rotate: [0, 6, 0],
            }
      }
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function VolunteerOrbit() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[430px] items-center justify-center">
      <motion.div
        className="absolute inset-[8%] rounded-full border border-[var(--color-line-strong)]"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-[21%] rounded-full border border-dashed border-[var(--color-emerald-glow)]/30"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-[34%] rounded-full bg-[var(--color-emerald-glow)]/10 blur-3xl" />

      <motion.div
        className="relative z-10 flex h-36 w-36 flex-col items-center justify-center rounded-[2rem] border border-[var(--color-emerald-glow)]/30 bg-[var(--color-surface)]/90 text-center shadow-2xl shadow-[var(--color-emerald-glow)]/10 backdrop-blur-xl sm:h-44 sm:w-44"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -8, 0],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <HeartHandshake
          size={30}
          strokeWidth={1.5}
          className="mb-3 text-[var(--color-emerald-glow)]"
        />
        <span className="font-serif text-2xl text-[var(--color-ink)]">
          Show up
        </span>
        <span className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
          Make an impact
        </span>
      </motion.div>

      <motion.div
        className="absolute left-[4%] top-[19%] flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] text-[var(--color-emerald-glow)] shadow-lg"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -9, 0],
                rotate: [0, -8, 0],
              }
        }
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Users size={21} />
      </motion.div>

      <motion.div
        className="absolute right-[1%] top-[31%] flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] text-[var(--color-emerald-glow)] shadow-lg"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, 10, 0],
                rotate: [0, 10, 0],
              }
        }
        transition={{
          duration: 5.5,
          delay: 0.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <CalendarDays size={18} />
      </motion.div>

      <motion.div
        className="absolute bottom-[14%] left-[16%] flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-emerald-glow)]/30 bg-[var(--color-emerald-glow)]/10 text-[var(--color-emerald-glow)]"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, 8, 0],
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 4,
          delay: 0.7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={17} />
      </motion.div>

      <div className="absolute bottom-[8%] right-[12%] rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/80 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-faint)] backdrop-blur-md">
        Time matters
      </div>
    </div>
  );
}

export function Volunteer() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-glow)] selection:text-[var(--color-bg)]">
      <Seo
        title="Volunteer"
        description="Share your interest in volunteering with Ficha Uchi — fittings, distribution days, events, and ongoing community programs."
        path="/volunteer"
      />

      <section className="relative overflow-hidden border-b border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(45,106,79,0.25),transparent_34%),radial-gradient(circle_at_15%_90%,rgba(45,106,79,0.12),transparent_30%)]" />

        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

        <FloatingObject
          delay={0.2}
          className="left-[8%] top-[25%] h-4 w-4 rounded-full border border-[var(--color-emerald-glow)]/50"
        />

        <FloatingObject
          delay={0.8}
          className="right-[12%] top-[17%] h-2 w-2 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_20px_var(--color-emerald-glow)]"
        />

        <FloatingObject
          delay={1}
          duration={6}
          className="bottom-[15%] left-[44%] h-8 w-8 rotate-45 border border-[var(--color-line-strong)]"
        />

        <div className="container-edit relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-emerald-glow)] backdrop-blur-md">
                <HeartHandshake size={14} />
                Get involved
              </span>

              <h1 className="mt-6 max-w-3xl font-serif text-5xl font-normal leading-[1.02] tracking-tight text-[var(--color-ink)] sm:text-6xl md:text-7xl">
                Give your time.
                <span className="block text-[var(--color-emerald-glow)]">
                  Share your energy.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[var(--color-ink-dim)] sm:text-lg">
                Every helping hand adds momentum. Whether you support fittings,
                distribution days, events, or ongoing community programs, your
                time can become part of something meaningful.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/70 px-4 py-2 text-xs uppercase tracking-[0.14em] text-[var(--color-ink-dim)] backdrop-blur-md">
                  <Check size={13} className="text-[var(--color-emerald-glow)]" />
                  Flexible involvement
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/70 px-4 py-2 text-xs uppercase tracking-[0.14em] text-[var(--color-ink-dim)] backdrop-blur-md">
                  <Check size={13} className="text-[var(--color-emerald-glow)]" />
                  Community-first
                </div>
              </div>

              <motion.a
                href="#volunteer-form"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--color-emerald-glow)] px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-bg)] transition-shadow duration-300 hover:shadow-xl hover:shadow-[var(--color-emerald-glow)]/20"
              >
                Start here
                <ArrowDown size={15} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              <VolunteerOrbit />
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="volunteer-form"
        className="relative bg-[var(--color-bg)] py-20 md:py-28"
      >
        <div className="container-edit">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
            >
              <SectionHeader
                title="Volunteer interest form"
                description="Tell us a little about yourself and how you would like to support the work."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative mt-12 overflow-hidden rounded-[2rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:p-8 md:p-10"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--color-emerald-glow)]/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-[var(--color-emerald-glow)]/5 blur-3xl" />

              <FloatingObject
                delay={0.4}
                duration={5.5}
                className="right-8 top-8 h-2 w-2 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_15px_var(--color-emerald-glow)]"
              />

              <div className="relative z-10 mb-8 flex items-center justify-between gap-4 border-b border-[var(--color-line-strong)]/70 pb-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-emerald-glow)]">
                    Your contribution
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-ink-faint)]">
                    A few details help us understand where you fit best.
                  </p>
                </div>

                <HeartHandshake
                  size={24}
                  strokeWidth={1.5}
                  className="shrink-0 text-[var(--color-emerald-glow)]"
                />
              </div>

              <div className="relative z-10">
                <VolunteerForm />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mx-auto mt-6 max-w-2xl text-center text-xs leading-6 text-[var(--color-ink-dim)]/70"
            >
              By submitting this form you consent to Ficha Uchi storing your
              details for the purpose of volunteer coordination. We won't share
              your information with third parties.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
}