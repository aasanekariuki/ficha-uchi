import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Check,
  Filter,
  Grid2X2,
  Sparkles,
  Users,
} from "lucide-react";

import { Seo } from "../components/Seo";
import { SectionHeader } from "../components/SectionHeader";
import { StoryCard } from "../components/StoryCard";
import { EmptyState } from "../components/States";
import { stories } from "../data/stories";
import type { StoryCategory } from "../types";

const categories: { id: StoryCategory | "all"; label: string }[] = [
  { id: "all", label: "All Stories" },
  { id: "learners", label: "Learners" },
  { id: "families", label: "Families" },
  { id: "volunteers", label: "Volunteers" },
  { id: "tailors", label: "Tailors" },
  { id: "youth", label: "Youth" },
  { id: "partners", label: "Partners" },
  { id: "team", label: "Team" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

export function Stories() {
  const [filter, setFilter] = useState<StoryCategory | "all">("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const filtered = useMemo(
    () =>
      filter === "all"
        ? stories
        : stories.filter((story) => story.category === filter),
    [filter],
  );

  const activeCategory =
    categories.find((category) => category.id === filter)?.label ??
    "All Stories";

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.15 },
      };

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-glow)] selection:text-[var(--color-bg)]">
      <Seo
        title="Stories"
        description="Stories from learners, families, volunteers, tailors, and partners across Ficha Uchi's work in Mathare."
        path="/stories"
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[var(--color-bg-alt)] pt-32 pb-20 sm:pt-36 md:pt-44 md:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-[var(--color-emerald-glow)]/10 blur-3xl" />
          <div className="absolute -right-40 top-20 h-[24rem] w-[24rem] rounded-full bg-emerald-300/5 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
              maskImage:
                "linear-gradient(to bottom, black, transparent 85%)",
            }}
          />

          <motion.div
            aria-hidden="true"
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    rotate: 360,
                  }
            }
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -right-36 -top-36 hidden h-[34rem] w-[34rem] rounded-full border border-[var(--color-line)] md:block"
          >
            <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_24px_var(--color-emerald-glow)]" />
          </motion.div>
        </div>

        <div className="container-edit relative z-10">
          <motion.div
            {...motionProps}
            variants={reveal}
            className="max-w-4xl"
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-emerald-glow)]/30 bg-[var(--color-emerald-glow)]/10 text-[var(--color-emerald-glow)]">
                <BookOpen size={17} strokeWidth={1.8} />
              </span>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-emerald-glow)]">
                  Community voices
                </p>
                <p className="mt-1 text-xs text-[var(--color-ink-faint)]">
                  First-hand perspectives from Mathare
                </p>
              </div>
            </div>

            <h1 className="max-w-4xl text-balance font-serif text-5xl font-normal leading-[0.98] tracking-[-0.045em] text-[var(--color-ink)] sm:text-6xl md:text-8xl">
              The people
              <span className="block text-[var(--color-ink-dim)]">
                behind the numbers.
              </span>
            </h1>

            <div className="mt-8 flex max-w-2xl flex-col gap-6 sm:flex-row sm:items-start">
              <div className="h-px w-12 shrink-0 bg-[var(--color-emerald-glow)] sm:mt-3" />

              <p className="max-w-xl text-base leading-8 text-[var(--color-ink-dim)] sm:text-lg">
                Real accounts from students, artisans, guardians, and
                volunteers whose lives intersect with Ficha Uchi.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-[var(--color-ink-faint)]">
              <span className="inline-flex items-center gap-2">
                <Users size={14} />
                Community-led stories
              </span>
              <span className="h-1 w-1 rounded-full bg-[var(--color-ink-faint)]" />
              <span className="inline-flex items-center gap-2">
                <Sparkles size={14} />
                Real experiences
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stories */}
      <section className="relative bg-[var(--color-bg)] py-20 sm:py-24 md:py-28">
        <div className="container-edit">
          <motion.div {...motionProps} variants={reveal}>
            <SectionHeader
              title="Browse by perspective"
              description="Explore the experiences, lessons, and moments that make this community what it is."
              tone="dark"
            />
          </motion.div>

          {/* Filter toolbar */}
          <motion.div
            {...motionProps}
            variants={reveal}
            className="mt-10 flex flex-col gap-5 border-y border-[var(--color-line)] py-5 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-ink-dim)]">
                <Grid2X2 size={15} />
              </span>

              <div>
                <p className="text-sm font-medium text-[var(--color-ink)]">
                  Stories library
                </p>
                <p className="mt-0.5 text-xs text-[var(--color-ink-faint)]">
                  {filtered.length}{" "}
                  {filtered.length === 1 ? "story" : "stories"} available
                </p>
              </div>
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsFilterOpen((current) => !current)}
                aria-expanded={isFilterOpen}
                aria-haspopup="listbox"
                className="inline-flex min-w-[190px] items-center justify-between gap-6 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-line-strong)] hover:bg-[var(--color-surface-hover)] lg:hidden"
              >
                <span className="inline-flex items-center gap-2">
                  <Filter size={14} className="text-[var(--color-emerald-glow)]" />
                  {activeCategory}
                </span>
                <motion.span
                  animate={{ rotate: isFilterOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[var(--color-ink-faint)]"
                >
                  ↓
                </motion.span>
              </button>

              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-14 z-30 min-w-[210px] rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-2 shadow-2xl lg:hidden"
                    role="listbox"
                  >
                    {categories.map((category) => {
                      const isActive = filter === category.id;

                      return (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => {
                            setFilter(category.id);
                            setIsFilterOpen(false);
                          }}
                          className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm text-[var(--color-ink-dim)] transition-colors hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-ink)]"
                        >
                          {category.label}
                          {isActive && (
                            <Check
                              size={15}
                              className="text-[var(--color-emerald-glow)]"
                            />
                          )}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="hidden flex-wrap items-center gap-2 lg:flex">
              {categories.map((category) => {
                const isActive = filter === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setFilter(category.id)}
                    className={`group relative rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ${
                      isActive
                        ? "border-[var(--color-emerald-glow)] bg-[var(--color-emerald-glow)] text-[var(--color-bg)] shadow-[0_0_24px_rgba(45,106,79,0.2)]"
                        : "border-[var(--color-line)] bg-transparent text-[var(--color-ink-dim)] hover:border-[var(--color-line-strong)] hover:bg-[var(--color-surface)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    {category.label}

                    {!isActive && (
                      <span className="absolute inset-x-4 bottom-0 h-px origin-left scale-x-0 bg-[var(--color-emerald-glow)] transition-transform duration-300 group-hover:scale-x-100" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Active filter summary */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mt-8 flex items-center justify-between gap-4"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
                  Showing
                </p>
                <p className="mt-1 text-lg font-medium text-[var(--color-ink)]">
                  {activeCategory}
                </p>
              </div>

              <div className="hidden h-px flex-1 bg-[var(--color-line)] sm:block" />

              <span className="rounded-full border border-[var(--color-line)] px-3 py-1.5 text-xs text-[var(--color-ink-faint)]">
                {filtered.length.toString().padStart(2, "0")} entries
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Grid */}
          <div className="mt-10">
            <AnimatePresence mode="wait">
              {filtered.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <EmptyState
                    title="No stories in this category yet"
                    description="Check back soon, or browse another category to discover more community voices."
                  />
                </motion.div>
              ) : (
                <motion.div
                  key={filter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {filtered.map((story, index) => (
                    <motion.div
                      key={story.id}
                      layout
                      initial={
                        prefersReducedMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 22,
                            }
                      }
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={
                        prefersReducedMotion
                          ? undefined
                          : {
                              opacity: 0,
                              y: -12,
                            }
                      }
                      transition={{
                        duration: 0.5,
                        delay: prefersReducedMotion ? 0 : index * 0.055,
                        ease,
                        layout: {
                          duration: 0.35,
                        },
                      }}
                      whileHover={
                        prefersReducedMotion
                          ? undefined
                          : {
                              y: -5,
                              transition: {
                                duration: 0.25,
                                ease,
                              },
                            }
                      }
                      className="group relative"
                    >
                      <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-[var(--color-emerald-glow)]/0 blur-2xl transition-colors duration-500 group-hover:bg-[var(--color-emerald-glow)]/[0.06]" />
                      <StoryCard story={story} fixedWidth={false} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom note */}
          <motion.div
            {...motionProps}
            variants={reveal}
            className="mt-20 flex flex-col gap-5 border-t border-[var(--color-line)] pt-7 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 h-2 w-2 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_12px_var(--color-emerald-glow)]" />
              <p className="max-w-lg text-sm leading-6 text-[var(--color-ink-faint)]">
                Every story is a reminder that meaningful change is built
                through people, relationships, and consistent action.
              </p>
            </div>

            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
              Listen closely
              <ArrowRight size={14} />
            </span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}