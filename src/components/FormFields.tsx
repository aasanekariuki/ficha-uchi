import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ReactNode } from "react";
import { AlertCircle } from "lucide-react";

const fieldClass =
  "w-full rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg)]/80 px-4 py-3 text-sm text-[var(--color-ink)] placeholder-[var(--color-ink-dim)]/50 transition-colors duration-200 focus:border-[var(--color-emerald-glow)] focus:bg-[var(--color-surface)] focus:outline-none focus:ring-1 focus:ring-[var(--color-emerald-glow)] disabled:opacity-50";

export function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-xs font-semibold tracking-wide text-[var(--color-ink)]">
        {label} {required && <span className="text-[var(--color-emerald-glow)]">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="flex items-center gap-1.5 text-xs text-rose-400">
          <AlertCircle size={13} className="shrink-0" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${fieldClass} ${props.className ?? ""}`} />;
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${fieldClass} ${props.className ?? ""}`} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`cursor-pointer [&>option]:bg-[var(--color-bg-alt)] [&>option]:text-[var(--color-ink)] ${fieldClass} ${
        props.className ?? ""
      }`}
    />
  );
}