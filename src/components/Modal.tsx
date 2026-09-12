import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CircleDot, Sparkles, X } from "lucide-react";
import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  label: string;
  variant?: "modal" | "drawer";
}

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
              y: [0, -9, 0],
              rotate: [0, 7, 0],
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

export function Modal({
  open,
  onClose,
  children,
  label,
  variant = "modal",
}: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    ref.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !ref.current) return;

      const focusable = ref.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleTab);

    return () => {
      document.removeEventListener("keydown", handleTab);
    };
  }, [open]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 md:items-center md:p-5"
          role="presentation"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: {},
            visible: {},
          }}
        >
          <motion.div
            className="fixed inset-0 bg-[var(--color-bg)]/85 backdrop-blur-xl"
            onClick={onClose}
            aria-hidden="true"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />

          <motion.div
            ref={ref}
            role="dialog"
            aria-modal="true"
            aria-label={label}
            tabIndex={-1}
            variants={{
              hidden: {
                opacity: 0,
                y: variant === "drawer" ? 20 : 35,
                scale: variant === "modal" ? 0.97 : 1,
                x: variant === "drawer" ? 24 : 0,
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                x: 0,
              },
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`relative z-10 max-h-[92vh] w-full overflow-y-auto border border-[var(--color-line-strong)] bg-[var(--color-surface)] text-[var(--color-ink)] shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl focus:outline-none scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[var(--color-line-strong)] ${
              variant === "drawer"
                ? "rounded-t-[2rem] md:fixed md:right-0 md:top-0 md:h-full md:max-h-full md:w-[460px] md:rounded-l-[2rem] md:rounded-r-none"
                : "max-w-xl rounded-t-[2rem] md:rounded-[2rem]"
            }`}
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--color-emerald-glow)]/10 blur-3xl" />
              <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[var(--color-emerald-glow)]/5 blur-3xl" />

              <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_65%)]" />

              <FloatingObject
                delay={0.2}
                className="right-20 top-24 h-2 w-2 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_18px_var(--color-emerald-glow)]"
              />

              <FloatingObject
                delay={0.7}
                duration={6}
                className="bottom-28 left-7 h-5 w-5 rounded-full border border-[var(--color-emerald-glow)]/25"
              />

              <FloatingObject
                delay={1}
                duration={5.5}
                className="bottom-16 right-8 h-8 w-8 rotate-45 border border-[var(--color-line-strong)]"
              />
            </div>

            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--color-line-strong)]/60 bg-[var(--color-surface)]/85 px-5 py-4 backdrop-blur-xl sm:px-7">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
                <CircleDot
                  size={12}
                  className="text-[var(--color-emerald-glow)]"
                />
                <span>Ficha Uchi</span>
              </div>

              <motion.button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: 90,
                        scale: 1.06,
                      }
                }
                whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                transition={{ duration: 0.25 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-bg)] text-[var(--color-ink)] transition-colors duration-300 hover:border-[var(--color-emerald-glow)]/50 hover:text-[var(--color-emerald-glow)]"
              >
                <X size={18} />
              </motion.button>
            </div>

            <div className="relative z-10 px-5 pb-10 pt-7 sm:px-7 md:px-8">
              <div className="mb-7 flex items-center gap-3">
                <div className="h-px flex-1 bg-[var(--color-line-strong)]" />
                <Sparkles
                  size={14}
                  className="text-[var(--color-emerald-glow)]"
                />
                <div className="h-px flex-1 bg-[var(--color-line-strong)]" />
              </div>

              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}