import { useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";
import { Field, TextInput, TextArea, Select } from "./FormFields";
import { submitForm } from "../lib/forms";

interface Errors {
  name?: string;
  email?: string;
  reason?: string;
  message?: string;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [feedback, setFeedback] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries()) as Record<string, string>;

    const nextErrors: Errors = {};
    if (!data.name?.trim()) nextErrors.name = "Please tell us your name.";
    if (!data.email?.trim() || !/^\S+@\S+\.\S+$/.test(data.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!data.reason) nextErrors.reason = "Please choose a reason for reaching out.";
    if (!data.message?.trim()) nextErrors.message = "Please add a short message.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setStatus("loading");
    const res = await submitForm("contact", data);
    setFeedback(res.message);
    setStatus(res.ok ? "done" : "error");
  }

  if (status === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-4 rounded-3xl border border-[var(--color-emerald-glow)]/40 bg-[var(--color-emerald-tint)]/60 p-8 text-center backdrop-blur-xl md:p-12"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-emerald-glow)]/50 bg-[var(--color-emerald-glow)]/10 text-[var(--color-emerald-glow)]">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="font-serif text-2xl font-normal text-[var(--color-ink)] md:text-3xl">
          Message received
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-[var(--color-ink-dim)]">
          {feedback}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="c-name" required error={errors.name}>
          <TextInput id="c-name" name="name" placeholder="Jane Doe" />
        </Field>
        <Field label="Email" htmlFor="c-email" required error={errors.email}>
          <TextInput id="c-email" name="email" type="email" placeholder="jane@example.com" />
        </Field>
      </div>

      <Field label="Reason for reaching out" htmlFor="c-reason" required error={errors.reason}>
        <Select id="c-reason" name="reason" defaultValue="">
          <option value="" disabled className="text-[var(--color-ink-dim)]">
            Choose one
          </option>
          <option value="general">General inquiry</option>
          <option value="partnership">Partnership</option>
          <option value="volunteering">Volunteering</option>
          <option value="community">Community support</option>
          <option value="press">Press / media</option>
        </Select>
      </Field>

      <Field label="Message" htmlFor="c-message" required error={errors.message}>
        <TextArea id="c-message" name="message" rows={5} placeholder="How can we assist you?" />
      </Field>

      <div className="mt-2 flex flex-col gap-3">
        <motion.button
          type="submit"
          disabled={status === "loading"}
          whileHover={{ scale: status === "loading" ? 1 : 1.01 }}
          whileTap={{ scale: status === "loading" ? 1 : 0.99 }}
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--color-emerald-glow)] px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-bg)] shadow-lg shadow-[var(--color-emerald-glow)]/20 transition-all duration-300 hover:bg-emerald-400 hover:shadow-xl hover:shadow-[var(--color-emerald-glow)]/30 disabled:opacity-60"
        >
          {status === "loading" ? (
            <Loader2 size={16} className="animate-spin text-[var(--color-bg)]" />
          ) : (
            <Send size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          )}
          <span>{status === "loading" ? "Sending…" : "Send message"}</span>
        </motion.button>

        <AnimatePresence>
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex items-center gap-2 text-xs font-medium text-rose-400"
            >
              <AlertCircle size={14} className="shrink-0" />
              <span>{feedback}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}