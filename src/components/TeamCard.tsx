import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import type { TeamMember } from "../types";
import { Img } from "./Image";

export function TeamCard({
  member,
  onOpen,
}: {
  member: TeamMember;
  onOpen: (m: TeamMember) => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(member)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -7,
              transition: {
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              },
            }
      }
      className="group relative flex h-full w-full flex-col items-start overflow-hidden rounded-[2rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-4 text-left shadow-[0_18px_55px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-colors duration-500 hover:border-[var(--color-emerald-glow)]/50 sm:p-5"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[var(--color-emerald-glow)]/10 blur-3xl transition-all duration-700 group-hover:bg-[var(--color-emerald-glow)]/20" />
        <div className="absolute -bottom-20 -left-12 h-36 w-36 rounded-full bg-[var(--color-emerald-glow)]/5 blur-3xl" />

        <motion.div
          className="absolute right-6 top-6 h-2 w-2 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_16px_var(--color-emerald-glow)]"
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -7, 0],
                  opacity: [0.5, 1, 0.5],
                }
          }
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-28 left-5 h-5 w-5 rounded-full border border-[var(--color-emerald-glow)]/25"
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, 8, 0],
                  rotate: [0, 12, 0],
                }
          }
          transition={{
            duration: 5,
            delay: 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute bottom-5 right-5 h-8 w-8 rounded-full border border-[var(--color-line-strong)] opacity-60" />
      </div>

      <div className="relative z-10 w-full overflow-hidden rounded-[1.5rem] border border-[var(--color-line-strong)]/70 bg-[var(--color-bg-alt)]">
        <Img
          src={member.photo}
          alt={`${member.name}, ${member.role} at Ficha Uchi`}
          aspect="aspect-[4/5]"
          className="w-full transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70" />

        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
          <Sparkles
            size={11}
            className="text-[var(--color-emerald-glow)]"
          />
          Ficha Uchi
        </div>

        <motion.div
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white/90 backdrop-blur-md"
          whileHover={
            reduceMotion
              ? undefined
              : {
                  rotate: 45,
                  scale: 1.08,
                }
          }
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight size={17} />
        </motion.div>

        <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white/75 backdrop-blur-md">
          Meet the team
        </div>
      </div>

      <div className="relative z-10 flex w-full flex-1 flex-col px-1 pt-5 pb-2">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="font-serif text-2xl font-normal leading-tight text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-emerald-glow)]">
              {member.name}
            </h3>

            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-emerald-glow)]">
              {member.role}
            </p>
          </div>

          <span className="mt-1 shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-ink-faint)] transition-colors group-hover:text-[var(--color-ink-dim)]">
            View
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[var(--color-line-strong)]/70 pt-4">
          <span className="text-[10px] uppercase tracking-[0.17em] text-[var(--color-ink-faint)]">
            Community contributor
          </span>

          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald-glow)]"
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.35, 1],
                    opacity: [0.55, 1, 0.55],
                  }
            }
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[var(--color-emerald-glow)] transition-all duration-700 group-hover:w-full" />
    </motion.button>
  );
}