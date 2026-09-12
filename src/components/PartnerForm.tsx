import { useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  Send,
  AlertCircle,
  ArrowUpRight,
  Building2,
  Sparkles,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { Field, TextInput, TextArea, Select } from "./FormFields";
import { submitForm } from "../lib/forms";

interface Errors {
  org?: string;
  contact?: string;
  email?: string;
  type?: string;
}

const formEase = [0.16, 1, 0.3, 1] as const;

export function PartnerForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "done" | "error"
  >("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries()) as Record<string, string>;

    const nextErrors: Errors = {};

    if (!data.org?.trim()) {
      nextErrors.org = "Please tell us your organization's name.";
    }

    if (!data.contact?.trim()) {
      nextErrors.contact = "Please tell us who we should reach.";
    }

    if (
      !data.email?.trim() ||
      !/^\S+@\S+\.\S+$/.test(data.email.trim())
    ) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!data.type) {
      nextErrors.type = "Please choose a partnership type.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const res = await submitForm("partner", data);
      setMessage(res.message);
      setStatus(res.ok ? "done" : "error");
    } catch {
      setMessage(
        "Something went wrong while sending your message. Please try again.",
      );
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65, ease: formEase }}
        className="relative flex min-h-[26rem] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-[var(--color-emerald-glow)]/35 bg-[var(--color-emerald-tint)]/50 p-8 text-center backdrop-blur-xl md:p-12"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(95,165,132,0.14),transparent_65%)]" />

        <motion.div
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            delay: 0.15,
            type: "spring",
            stiffness: 180,
            damping: 14,
          }}
          className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[var(--color-emerald-glow)]/30 bg-[var(--color-emerald-glow)] text-[var(--color-bg)] shadow-xl shadow-[var(--color-emerald-glow)]/20"
        >
          <CheckCircle2 size={40} strokeWidth={1.8} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative mt-7"
        >
          <div className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)]">
            <Sparkles size={13} />
            Message received
          </div>

          <h3 className="font-serif text-3xl font-normal tracking-tight text-[var(--color-ink)] md:text-4xl">
            Thank you for reaching out.
          </h3>

          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[var(--color-ink-dim)]">
            {message}
          </p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: formEase }}
      onSubmit={onSubmit}
      noValidate
      className="relative flex flex-col gap-7"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--color-emerald-glow)]/5 blur-3xl" />

      <div className="relative flex items-start gap-4 border-b border-[var(--color-line)] pb-6">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--color-emerald-glow)]/25 bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)]">
          <Building2 size={20} strokeWidth={1.8} />
        </div>

        <div>
          <h3 className="font-serif text-2xl font-normal tracking-tight text-[var(--color-ink)]">
            Tell us about your idea
          </h3>
          <p className="mt-1.5 text-sm leading-6 text-[var(--color-ink-dim)]">
            A few details will help us understand how we can work together.
          </p>
        </div>
      </div>

      <div className="relative grid gap-6 sm:grid-cols-2">
        <Field
          label="Organization name"
          htmlFor="p-org"
          required
          error={errors.org}
        >
          <TextInput
            id="p-org"
            name="org"
            placeholder="Acme Foundation"
            autoComplete="organization"
          />
        </Field>

        <Field
          label="Contact person"
          htmlFor="p-contact"
          required
          error={errors.contact}
        >
          <TextInput
            id="p-contact"
            name="contact"
            placeholder="Jane Doe"
            autoComplete="name"
          />
        </Field>
      </div>

      <div className="relative grid gap-6 sm:grid-cols-2">
        <Field
          label="Email"
          htmlFor="p-email"
          required
          error={errors.email}
        >
          <TextInput
            id="p-email"
            name="email"
            type="email"
            placeholder="jane@example.org"
            autoComplete="email"
          />
        </Field>

        <Field label="Phone" htmlFor="p-phone">
          <TextInput
            id="p-phone"
            name="phone"
            type="tel"
            placeholder="+254 700 000 000"
            autoComplete="tel"
          />
        </Field>
      </div>

      <div className="relative">
        <Field
          label="Partnership type"
          htmlFor="p-type"
          required
          error={errors.type}
        >
          <Select id="p-type" name="type" defaultValue="">
            <option
              value=""
              disabled
              className="bg-[var(--color-bg-alt)] text-[var(--color-ink-faint)]"
            >
              Choose an option
            </option>
            <option
              value="funding"
              className="bg-[var(--color-bg-alt)] text-[var(--color-ink)]"
            >
              Funding
            </option>
            <option
              value="sponsorship"
              className="bg-[var(--color-bg-alt)] text-[var(--color-ink)]"
            >
              Sponsorship
            </option>
            <option
              value="in-kind"
              className="bg-[var(--color-bg-alt)] text-[var(--color-ink)]"
            >
              In-kind support — materials, fabric, equipment
            </option>
            <option
              value="skills"
              className="bg-[var(--color-bg-alt)] text-[var(--color-ink)]"
            >
              Skills / pro-bono support
            </option>
            <option
              value="technology"
              className="bg-[var(--color-bg-alt)] text-[var(--color-ink)]"
            >
              Technology
            </option>
            <option
              value="school"
              className="bg-[var(--color-bg-alt)] text-[var(--color-ink)]"
            >
              School partnership
            </option>
            <option
              value="community"
              className="bg-[var(--color-bg-alt)] text-[var(--color-ink)]"
            >
              Community program collaboration
            </option>
            <option
              value="campaign"
              className="bg-[var(--color-bg-alt)] text-[var(--color-ink)]"
            >
              Campaign collaboration
            </option>
          </Select>
        </Field>
      </div>

      <div className="relative">
        <Field
          label="Tell us about your organization and what you have in mind"
          htmlFor="p-message"
        >
          <TextArea
            id="p-message"
            name="message"
            rows={5}
            placeholder="Share your ideas, timelines, resources, or questions..."
          />
        </Field>
      </div>

      <div className="relative flex flex-col gap-5 border-t border-[var(--color-line)] pt-6">
        <div className="flex items-start gap-3 text-xs leading-5 text-[var(--color-ink-faint)]">
          <ShieldCheck
            size={16}
            className="mt-0.5 shrink-0 text-[var(--color-emerald-glow)]"
          />
          <span>
            Your information is used only to understand your partnership
            enquiry and coordinate a response.
          </span>
        </div>

        <motion.button
          type="submit"
          disabled={status === "loading"}
          whileHover={
            status === "loading"
              ? undefined
              : {
                  scale: 1.01,
                  y: -2,
                }
          }
          whileTap={
            status === "loading"
              ? undefined
              : {
                  scale: 0.985,
                }
          }
          className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[var(--color-emerald-glow)] px-8 py-4 text-sm font-semibold text-[var(--color-bg)] shadow-lg shadow-[var(--color-emerald-glow)]/15 transition-all duration-300 hover:bg-emerald-400 hover:shadow-xl hover:shadow-[var(--color-emerald-glow)]/25 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-700 group-hover:translate-x-full" />

          {status === "loading" ? (
            <Loader2
              size={18}
              className="relative animate-spin text-[var(--color-bg)]"
            />
          ) : (
            <Send
              size={16}
              className="relative transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          )}

          <span className="relative">
            {status === "loading"
              ? "Sending submission..."
              : "Become a partner"}
          </span>

          {status !== "loading" && (
            <ArrowUpRight
              size={16}
              className="relative opacity-60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          )}
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.35, ease: formEase }}
            className="flex items-start gap-3 overflow-hidden rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm leading-6 text-rose-300 backdrop-blur-md"
          >
            <AlertCircle
              size={18}
              className="mt-0.5 shrink-0 text-rose-400"
            />

            <div>
              <p className="font-semibold text-rose-200">
                We couldn't send your enquiry.
              </p>
              <p className="mt-1">{message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-center gap-2 text-center text-xs text-[var(--color-ink-faint)]">
        <MessageCircle size={14} />
        We welcome thoughtful partnership conversations.
      </div>
    </motion.form>
  );
}