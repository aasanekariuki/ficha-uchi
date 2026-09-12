import type { ReactNode } from "react";
import { Inbox, Loader2 } from "lucide-react";

export function LoadingState({ label = "Loading" }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20 text-charcoal/50" role="status">
      <Loader2 className="animate-spin" size={24} aria-hidden="true" />
      <span className="text-sm">{label}…</span>
    </div>
  );
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-sm border border-dashed border-charcoal/20 px-6 py-16 text-center">
      <Inbox size={26} strokeWidth={1.5} className="text-charcoal/35" aria-hidden="true" />
      <h3 className="font-display text-xl text-charcoal">{title}</h3>
      {description && <p className="max-w-sm text-sm text-charcoal/60">{description}</p>}
      {action}
    </div>
  );
}
