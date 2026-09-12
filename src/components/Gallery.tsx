import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Circle,
  Expand,
  Images,
  MapPin,
  Maximize2,
  Sparkles,
  X,
} from "lucide-react";
import type { ImageAsset } from "../types";
import { Img } from "./Image";
import { EmptyState } from "./States";

const ease = [0.16, 1, 0.3, 1] as const;

function FloatingShape({
  className,
  delay = 0,
  duration = 7,
  children,
}: {
  className?: string;
  delay?: number;
  duration?: number;
  children?: ReactNode;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className ?? ""}`}
      animate={{
        y: [0, -12, 0],
        x: [0, 7, 0],
        rotate: [0, 7, 0],
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

export function Gallery({ images }: { images: ImageAsset[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  if (images.length === 0) {
    return (
      <EmptyState
        title="No images yet"
        description="Check back soon — this gallery is updated regularly."
      />
    );
  }

  return (
    <>
      <div className="relative">
        <FloatingShape
          className="left-[-1.5rem] top-24 hidden text-[var(--color-emerald-glow)]/20 lg:block"
          delay={0.4}
          duration={8}
        >
          <Circle size={18} strokeWidth={1} />
        </FloatingShape>

        <FloatingShape
          className="right-[-1rem] top-[42%] hidden text-[var(--color-emerald-glow)]/20 lg:block"
          delay={1.2}
          duration={9}
        >
          <Sparkles size={20} strokeWidth={1.2} />
        </FloatingShape>

        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_10px_var(--color-emerald-glow)]" />
            Curated field archive
          </div>

          <div className="hidden items-center gap-2 text-xs text-[var(--color-ink-faint)] sm:flex">
            <Images size={14} />
            <span>{images.length} visual records</span>
          </div>
        </div>

        <motion.div
          layout
          className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-5"
        >
          {images.map((img, index) => (
            <motion.button
              key={img.id}
              type="button"
              layout
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 24, scale: 0.97 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.65,
                delay: Math.min(index * 0.045, 0.35),
                ease,
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -7, transition: { duration: 0.25, ease } }
              }
              whileTap={{ scale: 0.985 }}
              onClick={() => setActiveIndex(index)}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-[1.65rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)] shadow-[0_12px_35px_rgba(0,0,0,0.12)] transition-colors duration-300 hover:border-[var(--color-emerald-glow)]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[var(--color-emerald-glow)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emerald-glow)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
            >
              <div className="relative overflow-hidden">
                <Img
                  src={img.src}
                  alt={img.alt}
                  aspect={index % 5 === 0 ? "aspect-[3/4]" : "aspect-square"}
                  className="transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/90 via-[var(--color-bg)]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute left-4 top-4 flex h-8 w-8 translate-y-[-6px] items-center justify-center rounded-full border border-white/15 bg-black/20 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <Maximize2 size={14} />
                </div>

                <div className="absolute bottom-4 left-4 right-4 translate-y-3 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      {img.title && (
                        <p className="truncate font-serif text-lg text-white">
                          {img.title}
                        </p>
                      )}

                      {(img.location || img.year) && (
                        <div className="mt-1.5 flex flex-wrap items-center gap-3 text-[10px] font-medium uppercase tracking-[0.12em] text-white/65">
                          {img.location && (
                            <span className="inline-flex items-center gap-1">
                              <MapPin size={11} />
                              {img.location}
                            </span>
                          )}

                          {img.year && (
                            <span className="inline-flex items-center gap-1">
                              <Calendar size={11} />
                              {img.year}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md">
                      <Expand size={13} />
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 px-4 py-3.5 text-left">
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-[var(--color-ink)]">
                    {img.title ?? img.alt}
                  </p>

                  {img.category && (
                    <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
                      {img.category}
                    </p>
                  )}
                </div>

                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-line-strong)] text-[var(--color-ink-faint)] transition-colors duration-300 group-hover:border-[var(--color-emerald-glow)]/40 group-hover:text-[var(--color-emerald-glow)]">
                  <ArrowIcon />
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <GalleryLightbox
            images={images}
            index={activeIndex}
            onClose={() => setActiveIndex(null)}
            onNavigate={setActiveIndex}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        d="M4 12L12 4M6 4H12V10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GalleryLightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: ImageAsset[];
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const image = images[index]!;
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();

      if (event.key === "ArrowRight") {
        onNavigate((index + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        onNavigate((index - 1 + images.length) % images.length);
      }
    };

    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [index, images.length, onClose, onNavigate]);

  const previousIndex = (index - 1 + images.length) % images.length;
  const nextIndex = (index + 1) % images.length;

  return createPortal(
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo: ${image.title ?? image.alt}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease }}
      className="fixed inset-0 z-[100] flex flex-col overflow-hidden bg-[var(--color-bg)]/95 text-[var(--color-ink)] backdrop-blur-2xl"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="pointer-events-none absolute left-[-10rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[var(--color-emerald-glow)]/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-12rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[var(--color-emerald-glow)]/[0.06] blur-3xl" />

      <FloatingShape
        className="left-[8%] top-[24%] hidden text-[var(--color-emerald-glow)]/20 lg:block"
        delay={0.4}
        duration={8}
      >
        <Circle size={18} strokeWidth={1} />
      </FloatingShape>

      <FloatingShape
        className="right-[10%] top-[18%] hidden text-[var(--color-emerald-glow)]/20 lg:block"
        delay={1}
        duration={9}
      >
        <Sparkles size={22} strokeWidth={1.2} />
      </FloatingShape>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease }}
        className="relative z-10 flex items-center justify-between border-b border-[var(--color-line-strong)] px-4 py-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--color-line-strong)] bg-[var(--color-surface)] text-[var(--color-emerald-glow)]">
            <Images size={16} />
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-emerald-glow)]">
              Visual archive
            </p>
            <p className="mt-0.5 text-xs text-[var(--color-ink-faint)]">
              Ficha Uchi field record
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden text-xs font-medium text-[var(--color-ink-faint)] sm:inline">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)] text-[var(--color-ink)] transition-all duration-300 hover:border-[var(--color-emerald-glow)]/50 hover:bg-[var(--color-emerald-glow)]/10 hover:text-[var(--color-emerald-glow)]"
          >
            <X size={18} />
          </button>
        </div>
      </motion.header>

      {/* Main viewport */}
      <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center px-4 py-5 sm:px-8 sm:py-8 lg:px-20">
        <button
          type="button"
          onClick={() => onNavigate(previousIndex)}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/90 text-[var(--color-ink)] shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:border-[var(--color-emerald-glow)]/50 hover:bg-[var(--color-emerald-glow)]/10 hover:text-[var(--color-emerald-glow)] sm:flex lg:left-8"
        >
          <ChevronLeft size={22} />
        </button>

        <motion.figure
          key={image.id}
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, scale: 0.96, y: 12 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="relative flex max-h-full max-w-5xl flex-col items-center gap-5"
        >
          <div className="relative max-h-[58vh] overflow-hidden rounded-[1.5rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-1.5 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:max-h-[62vh] lg:max-h-[66vh]">
            <div className="pointer-events-none absolute inset-0 z-10 rounded-[1.25rem] ring-1 ring-inset ring-white/[0.06]" />

            <img
              src={image.src}
              alt={image.alt}
              className="block max-h-[56vh] w-auto max-w-[calc(100vw-2rem)] rounded-[1.1rem] object-contain sm:max-h-[60vh] sm:max-w-[calc(100vw-8rem)] lg:max-h-[64vh] lg:max-w-[min(72vw,72rem)]"
            />
          </div>

          {(image.title ||
            image.description ||
            image.location ||
            image.year) && (
            <figcaption className="w-full max-w-2xl rounded-[1.35rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)]/85 px-5 py-4 text-center shadow-xl backdrop-blur-xl sm:px-7 sm:py-5">
              {image.title && (
                <p className="font-serif text-xl font-normal tracking-tight text-[var(--color-ink)] sm:text-2xl">
                  {image.title}
                </p>
              )}

              {image.description && (
                <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[var(--color-ink-dim)]">
                  {image.description}
                </p>
              )}

              {(image.location || image.year) && (
                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-emerald-glow)]">
                  {image.location && (
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={12} />
                      {image.location}
                    </span>
                  )}

                  {image.year && (
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={12} />
                      {image.year}
                    </span>
                  )}
                </div>
              )}
            </figcaption>
          )}
        </motion.figure>

        <button
          type="button"
          onClick={() => onNavigate(nextIndex)}
          aria-label="Next image"
          className="absolute right-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/90 text-[var(--color-ink)] shadow-xl backdrop-blur-md transition-all duration-300 hover:translate-x-1 hover:border-[var(--color-emerald-glow)]/50 hover:bg-[var(--color-emerald-glow)]/10 hover:text-[var(--color-emerald-glow)] sm:flex lg:right-8"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Mobile controls */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1, ease }}
        className="relative z-10 flex items-center justify-center gap-3 border-t border-[var(--color-line-strong)] px-4 py-4 sm:hidden"
      >
        <button
          type="button"
          onClick={() => onNavigate(previousIndex)}
          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)] px-5 py-2.5 text-xs font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-emerald-glow)]/50 hover:text-[var(--color-emerald-glow)]"
        >
          <ChevronLeft size={16} />
          Prev
        </button>

        <span className="px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
          {index + 1} / {images.length}
        </span>

        <button
          type="button"
          onClick={() => onNavigate(nextIndex)}
          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)] px-5 py-2.5 text-xs font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-emerald-glow)]/50 hover:text-[var(--color-emerald-glow)]"
        >
          Next
          <ChevronRight size={16} />
        </button>
      </motion.div>
    </motion.div>,
    document.body
  );
}