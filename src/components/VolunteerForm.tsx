import { useState } from "react";
import type { FormEvent } from "react";
import {
  AlertCircle,
  ArrowUpRight,
  Check,
  CheckCircle2,
  CircleDot,
  Heart,
  Loader2,
  Sparkles,
  Users,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Field, TextInput, TextArea, Select } from "./FormFields";
import { submitForm } from "../lib/forms";

interface Errors {
  name?: string;
  email?: string;
  interest?: string;
  consent?: string;
}

const ease = [0.16, 1, 0.3, 1] as const;

function FloatingObject({
  className = "",
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children?: React.ReactNode;
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
              rotate: [0, 4, 0],
            }
      }
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

function FormDecorations() {
  return (
    <>
      <FloatingObject className="left-5 top-8 hidden sm:block" delay={0.2}>
        <div className="h-2 w-2 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_18px_var(--color-emerald-glow)]" />
      </FloatingObject>

      <FloatingObject className="right-8 top-12 hidden sm:block" delay={1}>
        <div className="h-3 w-3 rounded-full border border-[var(--color-emerald-glow)]/60" />
      </FloatingObject>

      <FloatingObject className="right-10 bottom-24 hidden md:block" delay={1.8}>
        <div className="h-8 w-8 rotate-45 rounded-lg border border-[var(--color-line-strong)] bg-[var(--color-bg)]/50 backdrop-blur-sm" />
      </FloatingObject>

      <FloatingObject className="left-8 bottom-28 hidden md:block" delay={2.4}>
        <CircleDot
          size={18}
          strokeWidth={1.2}
          className="text-[var(--color-emerald-glow)]/50"
        />
      </FloatingObject>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-emerald-glow)]/8 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-emerald-400/5 blur-3xl"
        animate={{ scale: [1.05, 1, 1.05], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

export function VolunteerForm() {
  const reduceMotion = useReducedMotion();
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries()) as Record<string, string>;

    const nextErrors: Errors = {};

    if (!data.name?.trim()) {
      nextErrors.name = "Please tell us your name.";
    }

    if (
      !data.email?.trim() ||
      !/^\S+@\S+\.\S+$/.test(data.email)
    ) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!data.interest) {
      nextErrors.interest = "Please choose an area of interest.";
    }

    if (!data.consent) {
      nextErrors.consent =
        "Please confirm you're comfortable being contacted.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    const res = await submitForm("volunteer", data);

    setMessage(res.message);
    setStatus(res.ok ? "done" : "error");
  }

  if (status === "done") {
    return (
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease }}
        className="relative isolate overflow-hidden rounded-[2rem] border border-[var(--color-emerald-glow)]/30 bg-[var(--color-emerald-glow)]/8 px-6 py-16 text-center shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:px-10"
      >
        <FormDecorations />

        <div className="relative z-10 mx-auto flex max-w-lg flex-col items-center gap-5">
          <motion.div
            initial={reduceMotion ? undefined : { scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease }}
            className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-emerald-glow)]/30 bg-[var(--color-emerald-glow)]/12 text-[var(--color-emerald-glow)] shadow-[0_0_40px_rgba(95,165,132,0.16)]"
          >
            <CheckCircle2 size={34} strokeWidth={1.5} />
          </motion.div>

          <div className="space-y-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-emerald-glow)]">
              Interest received
            </p>

            <h3 className="font-serif text-2xl leading-tight text-[var(--color-ink)] sm:text-3xl">
              Thank you. We’ll be in touch.
            </h3>

            <p className="mx-auto max-w-md text-sm leading-7 text-[var(--color-ink-dim)]">
              {message}
            </p>
          </div>

          <div className="mt-2 flex items-center gap-2 text-xs text-[var(--color-ink-faint)]">
            <Heart size={13} className="text-[var(--color-emerald-glow)]" />
            <span>Small actions can create lasting change.</span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      noValidate
      initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease }}
      className="relative isolate overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)]/65 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.16)] backdrop-blur-2xl sm:p-7 md:p-9"
    >
      <FormDecorations />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage:
            "linear-gradient(to bottom right, black, transparent 75%)",
        }}
      />

      <div className="relative z-10 mb-8 flex flex-col gap-5 border-b border-[var(--color-line)] pb-7 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-md space-y-3">
          <div className="flex items-center gap-2 text-[var(--color-emerald-glow)]">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-emerald-glow)]/25 bg-[var(--color-emerald-glow)]/10">
              <Users size={15} />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">
              Join the movement
            </span>
          </div>

          <h3 className="font-serif text-2xl leading-tight text-[var(--color-ink)] sm:text-3xl">
            Bring your time, skills, or energy.
          </h3>

          <p className="text-sm leading-7 text-[var(--color-ink-dim)]">
            Tell us where you’d like to help. Whether you can support an event,
            share a skill, or contribute to a community initiative, there’s
            space for you.
          </p>
        </div>

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: [0, 5, -4, 0],
                  y: [0, -4, 0],
                }
          }
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg)]/60 text-[var(--color-emerald-glow)] shadow-inner sm:flex"
        >
          <Sparkles size={22} strokeWidth={1.4} />
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <Field
            label="Full name"
            htmlFor="v-name"
            required
            error={errors.name}
          >
            <TextInput
              id="v-name"
              name="name"
              autoComplete="name"
              placeholder="Your name"
            />
          </Field>

          <Field
            label="Email"
            htmlFor="v-email"
            required
            error={errors.email}
          >
            <TextInput
              id="v-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
            />
          </Field>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Phone" htmlFor="v-phone">
            <TextInput
              id="v-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+254..."
            />
          </Field>

          <Field
            label="Area of interest"
            htmlFor="v-interest"
            required
            error={errors.interest}
          >
            <Select id="v-interest" name="interest" defaultValue="">
              <option
                value=""
                disabled
                className="bg-[var(--color-surface)] text-[var(--color-ink)]"
              >
                Choose one
              </option>
              <option
                value="uniforms"
                className="bg-[var(--color-surface)] text-[var(--color-ink)]"
              >
                Uniform distribution & fittings
              </option>
              <option
                value="community"
                className="bg-[var(--color-surface)] text-[var(--color-ink)]"
              >
                Community initiatives
              </option>
              <option
                value="youth"
                className="bg-[var(--color-surface)] text-[var(--color-ink)]"
              >
                Youth development
              </option>
              <option
                value="events"
                className="bg-[var(--color-surface)] text-[var(--color-ink)]"
              >
                Events & logistics
              </option>
              <option
                value="skills"
                className="bg-[var(--color-surface)] text-[var(--color-ink)]"
              >
                Professional skills
              </option>
              <option
                value="other"
                className="bg-[var(--color-surface)] text-[var(--color-ink)]"
              >
                Something else
              </option>
            </Select>
          </Field>
        </div>

        <Field label="Skills you bring" htmlFor="v-skills">
          <TextInput
            id="v-skills"
            name="skills"
            placeholder="e.g. photography, logistics, design, teaching"
          />
        </Field>

        <Field label="Availability" htmlFor="v-availability">
          <Select id="v-availability" name="availability" defaultValue="">
            <option
              value=""
              disabled
              className="bg-[var(--color-surface)] text-[var(--color-ink)]"
            >
              Choose one
            </option>
            <option
              value="weekday"
              className="bg-[var(--color-surface)] text-[var(--color-ink)]"
            >
              Weekdays
            </option>
            <option
              value="weekend"
              className="bg-[var(--color-surface)] text-[var(--color-ink)]"
            >
              Weekends
            </option>
            <option
              value="flexible"
              className="bg-[var(--color-surface)] text-[var(--color-ink)]"
            >
              Flexible
            </option>
            <option
              value="occasional"
              className="bg-[var(--color-surface)] text-[var(--color-ink)]"
            >
              Occasional / one-off events
            </option>
          </Select>
        </Field>

        <Field label="Message" htmlFor="v-message">
          <TextArea
            id="v-message"
            name="message"
            rows={4}
            placeholder="Tell us a bit about why you'd like to volunteer."
          />
        </Field>

        <div className="space-y-3 rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg)]/35 p-4 sm:p-5">
          <label className="group flex cursor-pointer items-start gap-3 text-sm text-[var(--color-ink-dim)]">
            <input
              type="checkbox"
              name="consent"
              className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-[var(--color-line-strong)] bg-[var(--color-bg)] text-[var(--color-emerald-glow)] accent-[var(--color-emerald-glow)] focus:ring-[var(--color-emerald-glow)]"
            />

            <span className="leading-7 transition-colors duration-200 group-hover:text-[var(--color-ink)]">
              I agree to be contacted by Ficha Uchi about volunteering, and
              understand my information will only be used for that purpose.
            </span>
          </label>

          {errors.consent && (
            <motion.p
              initial={reduceMotion ? undefined : { opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              role="alert"
              className="flex items-center gap-1.5 text-xs text-rose-400"
            >
              <AlertCircle size={14} />
              {errors.consent}
            </motion.p>
          )}
        </div>

        <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-xs text-[var(--color-ink-faint)]">
            <Check
              size={14}
              className="text-[var(--color-emerald-glow)]"
            />
            <span>Your details stay private.</span>
          </div>

          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={status !== "loading" && !reduceMotion ? { y: -2 } : undefined}
            whileTap={status !== "loading" && !reduceMotion ? { scale: 0.98 } : undefined}
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[var(--color-emerald-glow)]/35 bg-[var(--color-emerald-glow)]/12 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-emerald-glow)] shadow-[0_12px_30px_rgba(95,165,132,0.08)] transition-all duration-300 hover:border-[var(--color-emerald-glow)]/70 hover:bg-[var(--color-emerald-glow)]/20 hover:shadow-[0_16px_40px_rgba(95,165,132,0.14)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "loading" ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Heart size={16} strokeWidth={1.8} />
            )}

            <span>
              {status === "loading" ? "Sending…" : "Submit interest"}
            </span>

            {status !== "loading" && (
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            )}
          </motion.button>
        </div>

        {status === "error" && (
          <motion.p
            initial={reduceMotion ? undefined : { opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            role="alert"
            className="flex items-center justify-center gap-2 rounded-xl border border-rose-400/15 bg-rose-400/5 px-4 py-3 text-sm text-rose-400"
          >
            <AlertCircle size={16} />
            {message}
          </motion.p>
        )}
      </div>
    </motion.form>
  );
}