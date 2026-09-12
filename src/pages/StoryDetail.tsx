import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Info,
  Maximize2,
  User,
  X,
  ZoomIn,
} from "lucide-react";

import { Seo } from "../components/Seo";
import { Img } from "../components/Image";
import { Badge } from "../components/Badge";
import { StoryCard } from "../components/StoryCard";
import { stories } from "../data/stories";
import { NotFound } from "./NotFound";

const ease = [0.16, 1, 0.3, 1] as const;

const categoryLabel: Record<string, string> = {
  learners: "Learner story",
  families: "Family story",
  volunteers: "Volunteer story",
  tailors: "Tailor story",
  youth: "Youth story",
  partners: "Partner story",
  team: "Team story",
};

const categoryGradient: Record<string, string> = {
  learners: "from-emerald-400/25 via-transparent to-transparent",
  families: "from-amber-300/25 via-transparent to-transparent",
  volunteers: "from-sky-300/25 via-transparent to-transparent",
  tailors: "from-rose-300/25 via-transparent to-transparent",
  youth: "from-violet-300/25 via-transparent to-transparent",
  partners: "from-cyan-300/25 via-transparent to-transparent",
  team: "from-lime-300/25 via-transparent to-transparent",
};

export function StoryDetail() {
  const { slug } = useParams();
  const story = stories.find((item) => item.slug === slug);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isImageModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsImageModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isImageModalOpen]);

  if (!story) return <NotFound />;

  const related = stories
    .filter(
      (item) => item.id !== story.id && item.category === story.category,
    )
    .slice(0, 3);

  const fallback = stories
    .filter((item) => item.id !== story.id)
    .slice(0, 3);

  const relatedStories = related.length ? related : fallback;

  const label = categoryLabel[story.category] ?? story.category;

  const gradient =
    categoryGradient[story.category] ??
    "from-[var(--color-emerald-glow)]/25 via-transparent to-transparent";

  const revealProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
      };

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-glow)] selection:text-[var(--color-bg)]">
      <Seo
        title={story.title}
        description={story.excerpt}
        path={`/stories/${story.slug}`}
      />

      <article>
        {/* Hero */}
        <section className="relative isolate flex min-h-[680px] items-end overflow-hidden bg-[var(--color-bg-alt)] pt-32 pb-14 sm:min-h-[720px] sm:pb-20 md:min-h-[780px] md:pb-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,106,79,0.3),transparent_48%)]" />

            <div
              className="absolute inset-0 opacity-[0.045]"
              style={{
                backgroundImage:
                  "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
                backgroundSize: "80px 80px",
                maskImage:
                  "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
              }}
            />
          </div>

          <motion.div
            initial={
              prefersReducedMotion
                ? false
                : {
                    scale: 1.1,
                    opacity: 0,
                  }
            }
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    scale: 1,
                    opacity: 1,
                  }
            }
            transition={{
              duration: 1.5,
              ease,
            }}
            className="absolute inset-0 z-0"
          >
            <Img
              src={story.coverImage}
              alt={story.title}
              aspect="aspect-auto h-full w-full"
              eager
              className="h-full w-full object-cover brightness-[0.8] contrast-[1.08] saturate-[1.08]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/65 to-[var(--color-bg)]/15" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)]/75 via-transparent to-[var(--color-bg)]/20" />
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
          </motion.div>

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
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute -right-48 -top-48 hidden h-[40rem] w-[40rem] rounded-full border border-white/10 md:block"
          >
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_20px_var(--color-emerald-glow)]" />
          </motion.div>

          <div className="container-edit relative z-10 w-full">
            <motion.div
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 28,
                    }
              }
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease,
              }}
              className="max-w-5xl"
            >
              <Link
                to="/stories"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2.5 text-xs font-semibold text-white/85 backdrop-blur-xl transition-all duration-300 hover:border-[var(--color-emerald-glow)]/70 hover:bg-black/35 hover:text-[var(--color-emerald-glow)]"
              >
                <ArrowLeft
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Back to all stories
              </Link>

              <div className="mt-8 flex flex-wrap items-center gap-2.5">
                <Badge
                  tone="gold"
                >
                  {label}
                </Badge>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/75 backdrop-blur-md">
                  <Calendar
                    size={13}
                    className="text-[var(--color-emerald-glow)]"
                  />
                  {story.date}
                </span>

                {story.author && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/75 backdrop-blur-md">
                    <User
                      size={13}
                      className="text-[var(--color-emerald-glow)]"
                    />
                    {story.author}
                  </span>
                )}
              </div>

              <div className="mt-7 flex items-start gap-4">
                <div className="mt-2 hidden h-20 w-px shrink-0 bg-gradient-to-b from-[var(--color-emerald-glow)] to-transparent sm:block" />

                <h1 className="max-w-4xl text-balance font-serif text-4xl font-normal leading-[1.03] tracking-[-0.04em] text-white sm:text-5xl md:text-7xl lg:text-8xl">
                  {story.title}
                </h1>
              </div>

              <div className="mt-8 max-w-2xl border-l border-white/20 pl-5 sm:pl-6">
                <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                  {story.excerpt}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article body */}
        <section className="relative bg-[var(--color-bg)] py-16 sm:py-20 md:py-28">
          <div className="container-edit">
            <div className="mx-auto max-w-4xl">
              {/* Featured image */}
              <motion.div
                {...revealProps}
                transition={{
                  duration: 0.8,
                  ease,
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-2 shadow-[0_25px_80px_rgba(0,0,0,0.18)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                  <Img
                    src={story.coverImage}
                    alt={story.title}
                    aspect="aspect-auto h-full w-full"
                    className="h-full w-full object-cover brightness-[0.98] contrast-[1.04] transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70" />

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_10px_var(--color-emerald-glow)]" />
                    Featured story
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsImageModalOpen(true)}
                    className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3.5 py-2.5 text-xs font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-[var(--color-emerald-glow)] hover:bg-[var(--color-emerald-glow)] hover:text-[var(--color-bg)]"
                    aria-label="View full image"
                  >
                    <Maximize2 size={14} />
                    <span>View full photo</span>
                  </button>
                </div>
              </motion.div>

              {/* Content layout */}
              <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-16">
                <div>
                  {story.placeholder && (
                    <motion.div
                      {...revealProps}
                      transition={{
                        duration: 0.6,
                        ease,
                      }}
                      className="mb-10 flex items-start gap-3.5 rounded-2xl border border-[var(--color-emerald-glow)]/30 bg-[var(--color-emerald-tint)]/40 p-5 text-sm leading-7 text-[var(--color-emerald-glow)]"
                    >
                      <Info
                        size={19}
                        className="mt-1 shrink-0"
                      />

                      <div>
                        This is placeholder content pending a real, consented
                        story. See{" "}
                        <code className="rounded-md bg-[var(--color-surface)] px-1.5 py-0.5 font-mono text-xs text-[var(--color-ink)]">
                          src/data/stories.ts
                        </code>{" "}
                        to update it.
                      </div>
                    </motion.div>
                  )}

                  <motion.div
                    initial={prefersReducedMotion ? false : "hidden"}
                    whileInView={prefersReducedMotion ? undefined : "visible"}
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                    className="flex flex-col gap-7"
                  >
                    {story.content.map((paragraph, index) => (
                      <motion.p
                        key={index}
                        variants={{
                          hidden: {
                            opacity: 0,
                            y: 18,
                          },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.65,
                              ease,
                            },
                          },
                        }}
                        className={`text-[1.075rem] leading-[1.9] text-[var(--color-ink-dim)] sm:text-lg ${
                          index === 0
                            ? "font-serif text-2xl leading-[1.45] text-[var(--color-ink)] sm:text-3xl sm:leading-[1.5]"
                            : ""
                        }`}
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </motion.div>
                </div>

                {/* Article side note */}
                <motion.aside
                  {...revealProps}
                  transition={{
                    duration: 0.7,
                    delay: 0.15,
                    ease,
                  }}
                  className="hidden self-start lg:block"
                >
                  <div className="sticky top-28 border-l border-[var(--color-line)] pl-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-ink-faint)]">
                      About this story
                    </p>

                    <div className="mt-5 space-y-5">
                      <div>
                        <p className="text-xs text-[var(--color-ink-faint)]">
                          Perspective
                        </p>
                        <p className="mt-1 text-sm text-[var(--color-ink-dim)]">
                          {label}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-[var(--color-ink-faint)]">
                          Published
                        </p>
                        <p className="mt-1 text-sm text-[var(--color-ink-dim)]">
                          {story.date}
                        </p>
                      </div>

                      <div className="pt-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-emerald-glow)]/10 text-[var(--color-emerald-glow)]">
                          <ZoomIn size={15} />
                        </div>
                        <p className="mt-3 text-xs leading-5 text-[var(--color-ink-faint)]">
                          Tap the featured image to view it in full.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.aside>
              </div>
            </div>
          </div>
        </section>

        {/* Related stories */}
        {relatedStories.length > 0 && (
          <section className="relative border-t border-[var(--color-line)] bg-[var(--color-bg-alt)] py-20 sm:py-24 md:py-28">
            <div className="container-edit">
              <motion.div
                {...revealProps}
                transition={{
                  duration: 0.7,
                  ease,
                }}
                className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
              >
                <div>
                  <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-emerald-glow)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald-glow)]" />
                    More voices
                  </span>

                  <h2 className="mt-4 max-w-xl font-serif text-4xl font-normal leading-tight tracking-[-0.03em] text-[var(--color-ink)] sm:text-5xl">
                    Continue exploring the community.
                  </h2>
                </div>

                <Link
                  to="/stories"
                  className="group inline-flex items-center gap-2 self-start rounded-full border border-[var(--color-line)] px-4 py-2.5 text-xs font-semibold text-[var(--color-ink-dim)] transition-all duration-300 hover:border-[var(--color-emerald-glow)]/50 hover:text-[var(--color-emerald-glow)] md:self-end"
                >
                  View all stories
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedStories.map((relatedStory, index) => (
                  <motion.div
                    key={relatedStory.id}
                    initial={
                      prefersReducedMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 24,
                          }
                    }
                    whileInView={
                      prefersReducedMotion
                        ? undefined
                        : {
                            opacity: 1,
                            y: 0,
                          }
                    }
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{
                      duration: 0.65,
                      delay: prefersReducedMotion ? 0 : index * 0.08,
                      ease,
                    }}
                  >
                    <StoryCard story={relatedStory} fixedWidth={false} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      {/* Fullscreen image modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsImageModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Full story image"
          >
            <motion.div
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.94,
                      y: 18,
                    }
              }
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }
              }
              exit={
                prefersReducedMotion
                  ? undefined
                  : {
                      opacity: 0,
                      scale: 0.94,
                      y: 18,
                    }
              }
              transition={{
                duration: 0.4,
                ease,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[92vh] max-w-6xl overflow-hidden rounded-[1.5rem] border border-white/15 bg-[var(--color-surface)] shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setIsImageModalOpen(false)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition-all duration-300 hover:bg-black"
                aria-label="Close image viewer"
              >
                <X size={19} />
              </button>

              <div className="max-h-[82vh] overflow-auto">
                <Img
                  src={story.coverImage}
                  alt={story.title}
                  aspect="aspect-auto"
                  className="max-h-[82vh] w-auto max-w-full object-contain brightness-[1.03] contrast-[1.05]"
                />
              </div>

              <div className="flex items-center justify-between gap-5 border-t border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-4 sm:px-6">
                <div>
                  <p className="font-serif text-lg text-[var(--color-ink)]">
                    {story.title}
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-ink-faint)]">
                    {label}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsImageModalOpen(false)}
                  className="hidden rounded-full border border-[var(--color-line)] px-3 py-2 text-xs font-medium text-[var(--color-ink-dim)] transition-colors hover:border-[var(--color-line-strong)] hover:text-[var(--color-ink)] sm:block"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}