import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  Camera,
  Circle,
  Images,
  Layers3,
  Sparkles,
  Star,
} from "lucide-react";
import { Seo } from "../components/Seo";
import { Gallery } from "../components/Gallery";
import { galleryImages } from "../data/gallery";
import type { GalleryCategory } from "../types";

const filters: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All moments" },
  { id: "uniforms", label: "Uniforms" },
  { id: "schools", label: "Schools" },
  { id: "community", label: "Community" },
  { id: "youth", label: "Youth" },
  { id: "events", label: "Events" },
  { id: "volunteers", label: "Volunteers" },
];

const ease = [0.16, 1, 0.3, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

function FloatingShape({
  className,
  delay = 0,
  duration = 7,
  children,
}: {
  className?: string;
  delay?: number;
  duration?: number;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className ?? ""}`}
      animate={{
        y: [0, -14, 0],
        x: [0, 8, 0],
        rotate: [0, 6, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

function ArchiveOrb() {
  return (
    <div className="relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px]">
      <motion.div
        className="absolute inset-5 rounded-full border border-[var(--color-emerald-glow)]/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-12 rounded-full border border-dashed border-[var(--color-emerald-glow)]/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-[25%] rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.18),transparent_25%),linear-gradient(145deg,rgba(95,165,132,0.9),rgba(25,71,54,0.85))] shadow-[0_0_90px_rgba(95,165,132,0.2)]" />

      <motion.div
        className="absolute left-[16%] top-[18%] flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] text-[var(--color-emerald-glow)] backdrop-blur-md"
        animate={{ rotate: [0, 8, 0], y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Camera size={22} />
      </motion.div>

      <motion.div
        className="absolute bottom-[18%] right-[10%] flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-[var(--color-surface)]/80 text-[var(--color-emerald-glow)] shadow-xl backdrop-blur-md"
        animate={{ rotate: [0, -10, 0], y: [0, 9, 0] }}
        transition={{ duration: 6, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Images size={24} />
      </motion.div>

      <motion.div
        className="absolute right-[17%] top-[8%] text-[var(--color-emerald-glow)]/70"
        animate={{ rotate: 360, scale: [1, 1.12, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={24} />
      </motion.div>

      <motion.div
        className="absolute bottom-[10%] left-[13%] text-[var(--color-ink-dim)]/50"
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        <Star size={18} />
      </motion.div>
    </div>
  );
}

export function GalleryPage() {
  const [active, setActive] = useState<GalleryCategory | "all">("all");
  const shouldReduceMotion = useReducedMotion();

  const filtered = useMemo(
    () =>
      active === "all"
        ? galleryImages
        : galleryImages.filter((image) => image.category === active),
    [active]
  );

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-glow)] selection:text-[var(--color-bg)]">
      <Seo
        title="Gallery"
        description="A visual archive of Ficha Uchi's work across uniforms, schools, community, youth, events, and volunteers."
        path="/gallery"
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-bg-alt)] pt-28 sm:pt-32 lg:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(95,165,132,0.16),transparent_30%),radial-gradient(circle_at_85%_35%,rgba(95,165,132,0.12),transparent_32%)]" />
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[var(--color-emerald-glow)]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[var(--color-emerald-glow)]/10 blur-3xl" />

        <FloatingShape
          className="left-[8%] top-28 hidden text-[var(--color-emerald-glow)]/25 md:block"
          delay={0.4}
          duration={8}
        >
          <Circle size={18} strokeWidth={1} />
        </FloatingShape>

        <FloatingShape
          className="right-[12%] top-24 hidden h-10 w-10 rotate-45 rounded-xl border border-[var(--color-emerald-glow)]/20 bg-[var(--color-emerald-glow)]/[0.04] md:block"
          delay={1}
          duration={9}
        />

        <FloatingShape
          className="bottom-16 left-[43%] hidden text-[var(--color-ink-dim)]/20 lg:block"
          delay={1.5}
          duration={10}
        >
          <Star size={22} strokeWidth={1} />
        </FloatingShape>

        <div className="container-edit relative z-10">
          <div className="grid items-center gap-12 pb-16 md:pb-20 lg:grid-cols-[1fr_0.8fr] lg:gap-8 lg:pb-24">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease }}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-emerald-glow)] shadow-lg shadow-black/5 backdrop-blur-md"
              >
                <Sparkles size={14} />
                Visual archive
              </motion.div>

              <h1 className="mt-7 max-w-3xl text-balance font-serif text-5xl font-normal leading-[0.98] tracking-[-0.045em] text-[var(--color-ink)] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
                Stories worth
                <span className="block text-[var(--color-emerald-glow)]">
                  remembering.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[var(--color-ink-dim)] sm:text-lg">
                A living collection of moments from our school visits, tailoring
                workshops, volunteer programs, and community initiatives.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#gallery"
                  className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-emerald-glow)] px-5 py-3 text-sm font-semibold text-[var(--color-bg)] transition-transform duration-300 hover:-translate-y-1"
                >
                  Explore the archive
                  <ArrowDown
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  />
                </a>

                <div className="inline-flex items-center gap-2 text-sm text-[var(--color-ink-faint)]">
                  <Images size={16} />
                  <span>{galleryImages.length} captured moments</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease }}
              className="relative flex min-h-[300px] items-center justify-center lg:min-h-[390px]"
            >
              <ArchiveOrb />

              <FloatingShape
                className="left-[5%] top-[20%] rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)]/70 p-3 text-[var(--color-emerald-glow)] shadow-xl backdrop-blur-md"
                delay={0.7}
                duration={7}
              >
                <Layers3 size={20} />
              </FloatingShape>

              <FloatingShape
                className="bottom-[12%] right-[3%] rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-dim)] shadow-xl backdrop-blur-md"
                delay={1.2}
                duration={8}
              >
                Field notes · 01
              </FloatingShape>
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-emerald-glow)]/30 to-transparent" />
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className="relative bg-[var(--color-bg)] py-16 sm:py-20 lg:py-24"
      >
        <div className="pointer-events-none absolute left-[-12rem] top-40 h-96 w-96 rounded-full bg-[var(--color-emerald-glow)]/[0.035] blur-3xl" />
        <div className="pointer-events-none absolute right-[-14rem] top-[45%] h-[30rem] w-[30rem] rounded-full bg-[var(--color-emerald-glow)]/[0.035] blur-3xl" />

        <div className="container-edit relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="mb-9 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-emerald-glow)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_12px_var(--color-emerald-glow)]" />
                Browse moments
              </div>

              <h2 className="font-serif text-3xl font-normal tracking-tight text-[var(--color-ink)] sm:text-4xl">
                Every frame carries a story.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[var(--color-ink-faint)] md:text-right">
              Explore the work by theme and discover the people, places, and
              progress behind each moment.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="relative mb-10 overflow-x-auto pb-2"
          >
            <div className="flex min-w-max items-center gap-2 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]/35 p-2 backdrop-blur-sm">
              {filters.map((filter) => {
                const isActive = active === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActive(filter.id)}
                    className={`relative whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-semibold tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "text-[var(--color-bg)]"
                        : "text-[var(--color-ink-dim)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeGalleryTab"
                        className="absolute inset-0 rounded-xl bg-[var(--color-emerald-glow)] shadow-lg shadow-[var(--color-emerald-glow)]/10"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 32,
                        }}
                      />
                    )}

                    <span className="relative z-10">{filter.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Gallery Results Header */}
          <div className="mb-6 flex items-center justify-between gap-4 border-b border-[var(--color-line)] pb-5">
            <div className="flex items-center gap-3 text-sm text-[var(--color-ink-dim)]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)] text-[var(--color-emerald-glow)]">
                <Images size={15} />
              </span>
              <span>
                Showing{" "}
                <strong className="font-semibold text-[var(--color-ink)]">
                  {filtered.length}
                </strong>{" "}
                {filtered.length === 1 ? "moment" : "moments"}
              </span>
            </div>

            <div className="hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-faint)] sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald-glow)]" />
              Ficha Uchi archive
            </div>
          </div>

          {/* Animated Gallery */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 18, filter: "blur(5px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -12, filter: "blur(4px)" }
              }
              transition={{ duration: 0.45, ease }}
            >
              {filtered.length > 0 ? (
                <Gallery images={filtered} />
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[260px] flex-col items-center justify-center rounded-3xl border border-dashed border-[var(--color-line-strong)] bg-[var(--color-surface)]/30 px-6 text-center"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-line-strong)] text-[var(--color-emerald-glow)]">
                    <Images size={22} />
                  </div>
                  <h3 className="font-serif text-2xl text-[var(--color-ink)]">
                    No moments yet
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--color-ink-faint)]">
                    We are still adding stories to this part of the archive.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom Accent */}
      <section className="relative overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-bg-alt)] py-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(95,165,132,0.08),transparent_60%)]" />

        <div className="container-edit relative z-10 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-medium text-[var(--color-ink)]">
              More than photographs.
            </p>
            <p className="mt-1 text-sm text-[var(--color-ink-faint)]">
              A record of people, progress, and shared possibility.
            </p>
          </div>

          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="text-[var(--color-emerald-glow)]/60"
          >
            <Sparkles size={22} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}