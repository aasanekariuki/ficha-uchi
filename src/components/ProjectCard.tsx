import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CircleDot,
  MoveUpRight,
  Sparkles,
  Star,
} from "lucide-react";

import type { Project } from "../types";
import { Img } from "./Image";

function FloatingShape({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute z-10 ${className}`}
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -8, 0],
              rotate: [0, 4, 0],
            }
      }
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduceMotion ? undefined : { y: -8 }}
      className="h-full"
    >
      <Link
        to={project.cta?.href ?? `/work/${project.slug}`}
        className="group relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-[2rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)] shadow-[0_18px_60px_rgba(0,0,0,0.12)] transition-colors duration-500 hover:border-[var(--color-emerald-glow)]/50"
      >
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--color-emerald-glow)]/10 blur-3xl transition-all duration-700 group-hover:bg-[var(--color-emerald-glow)]/20" />
          <div className="absolute -bottom-24 -left-16 h-44 w-44 rounded-full bg-[var(--color-emerald-glow)]/5 blur-3xl" />

          <FloatingShape
            delay={0.2}
            className="right-6 top-5 h-2 w-2 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_18px_var(--color-emerald-glow)]"
          />

          <FloatingShape
            delay={1}
            className="left-5 top-24 h-5 w-5 rounded-full border border-[var(--color-emerald-glow)]/30"
          />

          <FloatingShape
            delay={0.5}
            className="bottom-24 right-6 h-7 w-7 rounded-full border border-[var(--color-line-strong)]"
          />
        </div>

        <div className="relative z-[1] overflow-hidden">
          <Img
            src={project.coverImage}
            alt={`${project.title} — Ficha Uchi`}
            aspect="aspect-[5/4]"
            className="transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/5 to-transparent opacity-80" />

          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
            <CircleDot size={11} className="text-[var(--color-emerald-glow)]" />
            Featured work
          </div>

          <motion.div
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md"
            whileHover={reduceMotion ? undefined : { rotate: 45, scale: 1.08 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight size={19} />
          </motion.div>

          <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
            <Sparkles size={11} className="text-[var(--color-emerald-glow)]" />
            Community impact
          </div>
        </div>

        <div className="relative z-[1] flex flex-1 flex-col justify-between px-6 pb-6 pt-5 sm:px-7 sm:pb-7">
          <div>
            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
                / {project.slug}
              </span>

              <div className="flex items-center gap-1 text-[var(--color-ink-faint)]">
                <Star size={11} fill="currentColor" />
                <Star size={11} fill="currentColor" />
                <Star size={11} fill="currentColor" />
              </div>
            </div>

            <h3 className="max-w-[90%] font-serif text-2xl font-normal leading-tight text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-emerald-glow)] sm:text-[1.7rem]">
              {project.title}
            </h3>

            <p className="mt-3 max-w-[34rem] text-sm leading-7 text-[var(--color-ink-dim)]">
              {project.summary}
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-[var(--color-line-strong)]/70 pt-4">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-emerald-glow)]">
              {project.cta?.label ?? "Learn more"}
              <MoveUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-faint)] transition-colors group-hover:text-[var(--color-ink-dim)]">
              Explore
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[var(--color-emerald-glow)] transition-all duration-700 group-hover:w-full" />
      </Link>
    </motion.div>
  );
}