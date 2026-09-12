import { Link } from "react-router-dom";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { site, footerNav } from "../data/site";

export function Footer() {
  const prefersReducedMotion = useReducedMotion();

  const reveal: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-bg-alt)]/90 text-[var(--color-ink)] backdrop-blur-xl md:mt-32">
      {/* Ambient background effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-[var(--color-emerald-glow)]/[0.07] blur-[110px]"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  x: [0, 35, -20, 0],
                  y: [0, -20, 25, 0],
                  scale: [1, 1.1, 0.96, 1],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          aria-hidden="true"
          className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[var(--color-emerald-glow)]/[0.045] blur-[130px]"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  x: [0, -30, 20, 0],
                  y: [0, 30, -15, 0],
                  scale: [1, 0.94, 1.08, 1],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 75%)",
          }}
        />

        <motion.div
          aria-hidden="true"
          className="absolute right-[12%] top-20 hidden text-[var(--color-emerald-glow)]/[0.08] lg:block"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  rotate: [0, 12, -12, 0],
                  y: [0, -12, 10, 0],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={130} strokeWidth={0.7} />
        </motion.div>
      </div>

      {/* Animated top border */}
      <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
        <motion.div
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-[var(--color-emerald-glow)] to-transparent"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  x: ["-120%", "320%"],
                }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2,
          }}
        />
      </div>

      <div className="container-edit relative py-16 sm:py-20 lg:py-24">
        {/* Main footer grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
          className="grid gap-14 lg:grid-cols-[1.25fr_1fr_1fr]"
        >
          {/* Brand column */}
          <div className="relative">
            <Link
              to="/"
              className="group inline-flex items-center gap-3 font-serif text-3xl font-normal tracking-[-0.04em] text-[var(--color-ink)] sm:text-4xl"
            >
              <motion.span
                className="relative flex h-3 w-3 items-center justify-center rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_18px_var(--color-emerald-glow)]"
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        scale: 1.5,
                      }
                }
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <span className="absolute h-6 w-6 rounded-full border border-[var(--color-emerald-glow)]/20 transition-transform duration-500 group-hover:scale-125" />
              </motion.span>

              {site.name}
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--color-ink-dim)]">
              A grassroots community initiative from {site.location}, restoring
              dignity and creating opportunity for children and young people.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              {[
                {
                  label: "Instagram",
                  href: site.socials.instagram,
                },
                {
                  label: "X",
                  href: site.socials.x,
                },
                {
                  label: "Facebook",
                  href: site.socials.facebook,
                },
              ]
                .filter((social) => social.href)
                .map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${site.name} on ${social.label}`}
                    className="group inline-flex items-center gap-1 text-sm text-[var(--color-ink-faint)] transition-colors duration-300 hover:text-[var(--color-emerald-glow)]"
                  >
                    {social.label}
                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ))}
            </div>

            <div className="mt-10 hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-faint)] sm:flex">
              <span className="h-px w-8 bg-[var(--color-emerald-glow)]/60" />
              <span>Community · Dignity · Opportunity</span>
            </div>
          </div>

          {/* Explore column */}
          <motion.div variants={reveal}>
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-emerald-glow)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_8px_var(--color-emerald-glow)]" />
              Explore
            </p>

            <ul className="mt-6 space-y-4">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-2 text-sm text-[var(--color-ink-dim)] transition-all duration-300 hover:translate-x-1 hover:text-[var(--color-ink)]"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.5}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact column */}
          <motion.div variants={reveal}>
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-emerald-glow)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_8px_var(--color-emerald-glow)]" />
              Reach us
            </p>

            <ul className="mt-6 space-y-5 text-sm text-[var(--color-ink-dim)]">
              <li className="group flex items-start gap-3">
                <Mail
                  size={16}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[var(--color-emerald-glow)] transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors duration-300 hover:text-[var(--color-ink)]"
                >
                  {site.email}
                </a>
              </li>

              <li className="group flex items-start gap-3">
                <Phone
                  size={16}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[var(--color-emerald-glow)] transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="transition-colors duration-300 hover:text-[var(--color-ink)]"
                >
                  {site.phone}
                </a>
              </li>

              <li className="group flex items-start gap-3">
                <MapPin
                  size={16}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[var(--color-emerald-glow)] transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                <span>{site.location}</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Statement panel */}
        <motion.div
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
          viewport={{ once: true, margin: "-70px" }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative mt-16 overflow-hidden border border-[var(--color-line)] bg-[var(--color-bg)]/30 px-6 py-8 sm:mt-20 sm:px-8 sm:py-10"
        >
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[var(--color-emerald-glow)]/[0.06] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

          <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 text-[var(--color-emerald-glow)]/[0.08] sm:block">
            <Sparkles size={100} strokeWidth={0.7} />
          </div>

          <div className="relative max-w-2xl">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-emerald-glow)]">
              Our guiding thought
            </p>

            <p className="font-serif text-2xl leading-tight text-[var(--color-ink)] sm:text-3xl">
              {site.closingStatement}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-[var(--color-line)] bg-[var(--color-bg)]/55">
        <div className="container-edit flex flex-col gap-4 py-6 text-xs text-[var(--color-ink-faint)] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              to="/transparency"
              className="transition-colors duration-300 hover:text-[var(--color-ink)]"
            >
              Privacy
            </Link>

            <Link
              to="/transparency"
              className="transition-colors duration-300 hover:text-[var(--color-ink)]"
            >
              Terms
            </Link>

            <span className="hidden h-3 w-px bg-[var(--color-line)] sm:block" />

            <span className="font-serif text-sm italic text-[var(--color-ink-dim)]">
              Built with care.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}