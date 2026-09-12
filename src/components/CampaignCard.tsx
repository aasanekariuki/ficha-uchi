import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  GraduationCap,
  Heart,
  Sparkles,
  Users,
} from "lucide-react";
import type { Campaign } from "../types";
import { Img } from "./Image";
import { Badge } from "./Badge";

function formatKES(n?: number) {
  if (n === undefined) return null;
  return `KES ${n.toLocaleString()}`;
}

const statusTone: Record<
  Campaign["status"],
  "blue" | "gold" | "charcoal"
> = {
  active: "blue",
  completed: "gold",
  upcoming: "charcoal",
};

const statusLabel: Record<Campaign["status"], string> = {
  active: "Active",
  completed: "Completed",
  upcoming: "Upcoming",
};

export function CampaignCard({ campaign }: { campaign: Campaign }) {
  const pct =
    campaign.target && campaign.raised !== undefined
      ? Math.min(100, Math.round((campaign.raised / campaign.target) * 100))
      : null;

  const isCompleted = campaign.status === "completed";
  const isUpcoming = campaign.status === "upcoming";

  const beneficiaryLabel =
    campaign.beneficiaries !== undefined
      ? `${campaign.beneficiaries}${
          campaign.beneficiariesTarget
            ? ` / ${campaign.beneficiariesTarget}`
            : ""
        } learners`
      : campaign.beneficiariesTarget
        ? `Target: ${campaign.beneficiariesTarget} learners`
        : null;

  const deadlineLabel = campaign.deadline
    ? new Date(campaign.deadline).toLocaleDateString("en-KE", {
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -7 }}
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="h-full"
    >
      <Link
        to={`/campaigns/${campaign.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)] shadow-lg shadow-black/5 transition-all duration-500 hover:border-[var(--color-emerald-glow)]/50 hover:shadow-2xl hover:shadow-[var(--color-emerald-glow)]/10"
      >
        <div className="relative overflow-hidden">
          <Img
            src={campaign.coverImage}
            alt={campaign.title}
            aspect="aspect-[16/10]"
            className="w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/20 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

          <div className="absolute left-4 top-4 z-10">
            <Badge tone={statusTone[campaign.status]}>
              {statusLabel[campaign.status]}
            </Badge>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white/90 backdrop-blur-md"
          >
            {isCompleted ? (
              <CheckCircle2 size={18} />
            ) : isUpcoming ? (
              <CalendarDays size={18} />
            ) : (
              <Heart size={18} />
            )}
          </motion.div>

          {pct !== null && (
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-medium text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_10px_var(--color-emerald-glow)]" />
              {pct}% funded
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-6 p-5 sm:p-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)]">
              <Sparkles size={12} />
              Community initiative
            </div>

            <h3 className="font-serif text-2xl font-normal leading-[1.12] tracking-tight text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-emerald-glow)] sm:text-[1.7rem]">
              {campaign.title}
            </h3>

            <p className="line-clamp-3 text-sm leading-6 text-[var(--color-ink-dim)]">
              {campaign.description}
            </p>
          </div>

          {pct !== null && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
                <span>Campaign progress</span>
                <span className="text-[var(--color-emerald-glow)]">
                  {pct}%
                </span>
              </div>

              <div className="relative h-2 overflow-hidden rounded-full bg-[var(--color-line-strong)]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative h-full rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_12px_rgba(95,165,132,0.45)]"
                >
                  <motion.span
                    animate={{ x: ["-20%", "120%"] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1.5,
                    }}
                    className="absolute inset-y-0 w-1/3 -skew-x-12 bg-white/25 blur-[2px]"
                  />
                </motion.div>
              </div>

              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">
                    Raised so far
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-ink)]">
                    {formatKES(campaign.raised)}
                  </p>
                </div>

                {campaign.target !== undefined && (
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">
                      Target
                    </p>
                    <p className="mt-1 text-sm font-medium text-[var(--color-ink-dim)]">
                      {formatKES(campaign.target)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="mt-auto space-y-4 border-t border-[var(--color-line)] pt-4">
            {(beneficiaryLabel || deadlineLabel) && (
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--color-ink-dim)]">
                {beneficiaryLabel && (
                  <span className="inline-flex items-center gap-2">
                    <GraduationCap
                      size={14}
                      className="text-[var(--color-emerald-glow)]"
                    />
                    {beneficiaryLabel}
                  </span>
                )}

                {deadlineLabel && (
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays
                      size={13}
                      className="text-[var(--color-ink-faint)]"
                    />
                    By {deadlineLabel}
                  </span>
                )}
              </div>
            )}

            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-faint)] transition-colors duration-300 group-hover:text-[var(--color-ink-dim)]">
                {isCompleted ? (
                  <>
                    <CheckCircle2
                      size={14}
                      className="text-[var(--color-emerald-glow)]"
                    />
                    Impact delivered
                  </>
                ) : isUpcoming ? (
                  <>
                    <Users
                      size={14}
                      className="text-[var(--color-emerald-glow)]"
                    />
                    Coming soon
                  </>
                ) : (
                  <>
                    <CircleDollarSign
                      size={14}
                      className="text-[var(--color-emerald-glow)]"
                    />
                    Make an impact
                  </>
                )}
              </span>

              <motion.span
                whileHover={{ x: 3 }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-emerald-glow)] text-[var(--color-bg)] shadow-md shadow-[var(--color-emerald-glow)]/10 transition-all duration-300 group-hover:bg-emerald-400 group-hover:shadow-lg group-hover:shadow-[var(--color-emerald-glow)]/20"
              >
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </motion.span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}