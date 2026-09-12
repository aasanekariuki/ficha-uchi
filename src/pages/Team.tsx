import { useState } from "react";
import {
  ArrowUpRight,
  Circle,
  Sparkles,
  Users,
  Waves,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Seo } from "../components/Seo";
import { SectionHeader } from "../components/SectionHeader";
import { TeamCard } from "../components/TeamCard";
import { Modal } from "../components/Modal";
import { Img } from "../components/Image";
import { team } from "../data/team";

import type { TeamMember } from "../types";

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
              y: [0, -12, 0],
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

function TeamOrbit() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[440px] items-center justify-center">
      <motion.div
        className="absolute inset-[9%] rounded-full border border-[var(--color-line-strong)]"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-[21%] rounded-full border border-dashed border-[var(--color-emerald-glow)]/30"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
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
        <Users
          size={28}
          strokeWidth={1.5}
          className="mb-3 text-[var(--color-emerald-glow)]"
        />
        <span className="font-serif text-2xl text-[var(--color-ink)]">
          One team
        </span>
        <span className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
          Many strengths
        </span>
      </motion.div>

      <motion.div
        className="absolute left-[5%] top-[20%] flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] text-[var(--color-emerald-glow)] shadow-lg"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -10, 0],
                rotate: [0, -8, 0],
              }
        }
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={20} />
      </motion.div>

      <motion.div
        className="absolute right-[1%] top-[31%] flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] text-[var(--color-emerald-glow)] shadow-lg"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, 9, 0],
                rotate: [0, 10, 0],
              }
        }
        transition={{
          duration: 5.5,
          delay: 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Waves size={19} />
      </motion.div>

      <motion.div
        className="absolute bottom-[15%] left-[18%] flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-emerald-glow)]/30 bg-[var(--color-emerald-glow)]/10 text-[var(--color-emerald-glow)]"
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
          delay: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Circle size={12} fill="currentColor" />
      </motion.div>

      <div className="absolute bottom-[8%] right-[14%] rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/80 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-faint)] backdrop-blur-md">
        Community-led
      </div>
    </div>
  );
}

export function Team() {
  const [active, setActive] = useState<TeamMember | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-glow)] selection:text-[var(--color-bg)]">
      <Seo
        title="Team"
        description="Meet the people behind Ficha Uchi's work in Mathare — programs, operations, community liaison, and tailor coordination."
        path="/team"
      />

      <section className="relative overflow-hidden border-b border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(45,106,79,0.24),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(45,106,79,0.12),transparent_30%)]" />

        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

        <FloatingObject
          delay={0.2}
          className="left-[7%] top-[23%] h-4 w-4 rounded-full border border-[var(--color-emerald-glow)]/50"
        />

        <FloatingObject
          delay={0.8}
          className="right-[12%] top-[18%] h-2 w-2 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_20px_var(--color-emerald-glow)]"
        />

        <FloatingObject
          delay={1.2}
          duration={6}
          className="bottom-[17%] left-[42%] h-8 w-8 rotate-45 border border-[var(--color-line-strong)]"
        />

        <div className="container-edit relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/75 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-emerald-glow)] backdrop-blur-md">
                <Users size={14} />
                Our people
              </span>

              <h1 className="mt-6 max-w-3xl font-serif text-5xl font-normal leading-[1.02] tracking-tight text-[var(--color-ink)] sm:text-6xl md:text-7xl">
                The people behind the work.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[var(--color-ink-dim)] sm:text-lg">
                Ficha Uchi is powered by people who bring care, creativity,
                coordination, and lived community knowledge into every part of
                the work.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <div className="rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/70 px-4 py-2 text-xs uppercase tracking-[0.15em] text-[var(--color-ink-dim)] backdrop-blur-md">
                  Programs
                </div>

                <div className="rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/70 px-4 py-2 text-xs uppercase tracking-[0.15em] text-[var(--color-ink-dim)] backdrop-blur-md">
                  Operations
                </div>

                <div className="rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/70 px-4 py-2 text-xs uppercase tracking-[0.15em] text-[var(--color-ink-dim)] backdrop-blur-md">
                  Community
                </div>
              </div>

              <div className="mt-10 border-l border-[var(--color-emerald-glow)]/50 pl-5">
                <p className="max-w-md text-sm leading-7 text-[var(--color-ink-faint)]">
                  Names, roles, and photography can be updated in{" "}
                  <code className="rounded-md border border-[var(--color-line-strong)] bg-[var(--color-surface)] px-2 py-1 font-mono text-xs text-[var(--color-emerald-glow)]">
                    src/data/team.ts
                  </code>
                  .
                </p>
              </div>
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
              <TeamOrbit />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative bg-[var(--color-bg)] py-20 md:py-28">
        <div className="container-edit">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <SectionHeader
              title="Meet the team"
              description="Tap anyone to learn more about their role and focus."
            />
          </motion.div>

          <div className="relative mt-12">
            <FloatingObject
              delay={0.5}
              duration={5.8}
              className="-right-3 -top-8 hidden h-10 w-10 rounded-full border border-[var(--color-line-strong)] lg:block"
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: Math.min(index * 0.08, 0.35),
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                >
                  <TeamCard member={member} onOpen={setActive} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] py-16 md:py-20">
        <div className="container-edit">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-emerald-glow)]">
                Built together
              </p>

              <h2 className="mt-3 max-w-2xl font-serif text-3xl font-normal leading-tight text-[var(--color-ink)] sm:text-4xl">
                Stronger work starts with people who care.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--color-emerald-glow)]/30 bg-[var(--color-emerald-glow)]/10 text-[var(--color-emerald-glow)]"
            >
              <ArrowUpRight size={25} />
            </motion.div>
          </div>
        </div>
      </section>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        label={active?.name ?? "Team member"}
      >
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-7 pt-6"
          >
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)]">
              <Img
                src={active.photo}
                alt={active.name}
                aspect="aspect-[4/5]"
                className="w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
                Ficha Uchi team
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-normal leading-tight text-[var(--color-ink)]">
                {active.name}
              </h2>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.17em] text-[var(--color-emerald-glow)]">
                {active.role}
              </p>
            </div>

            <p className="text-base leading-8 text-[var(--color-ink-dim)]">
              {active.bio}
            </p>

            <div className="rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
                Focus area
              </p>

              <div className="mt-3 flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_12px_var(--color-emerald-glow)]" />
                <p className="text-sm font-medium leading-6 text-[var(--color-ink)]">
                  {active.focus}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </Modal>
    </div>
  );
}