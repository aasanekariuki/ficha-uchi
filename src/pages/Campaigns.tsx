import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Easing } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  CircleDot,
  Clock3,
  FolderHeart,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { Seo } from "../components/Seo";
import { SectionHeader } from "../components/SectionHeader";
import { CampaignCard } from "../components/CampaignCard";
import { EmptyState } from "../components/States";
import { campaigns } from "../data/campaigns";
import type { CampaignStatus } from "../types";

const tabs: { id: CampaignStatus | "all"; label: string }[] = [
  { id: "all", label: "All campaigns" },
  { id: "active", label: "Active" },
  { id: "upcoming", label: "Upcoming" },
  { id: "completed", label: "Completed" },
];

const ease: Easing = [0.16, 1, 0.3, 1];

export function Campaigns() {
  const [tab, setTab] = useState<CampaignStatus | "all">("all");

  const filtered =
    tab === "all" ? campaigns : campaigns.filter((c) => c.status === tab);

  const activeCount = campaigns.filter((c) => c.status === "active").length;
  const upcomingCount = campaigns.filter(
    (c) => c.status === "upcoming"
  ).length;
  const completedCount = campaigns.filter(
    (c) => c.status === "completed"
  ).length;

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-glow)] selection:text-[var(--color-bg)]">
      <Seo
        title="Campaigns"
        description="Active, upcoming, and completed Ficha Uchi campaigns — see progress, targets, and how to support."
        path="/campaigns"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-bg-alt)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-40 h-[32rem] w-[32rem] rounded-full bg-[var(--color-emerald-glow)]/[0.08] blur-3xl" />
          <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-emerald-950/30 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(var(--color-ink)_1px,transparent_1px),linear-gradient(90deg,var(--color-ink)_1px,transparent_1px)] [background-size:52px_52px]" />
        </div>

        <div className="container-edit relative z-10 py-24 sm:py-28 md:py-32">
          <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="max-w-4xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-emerald-glow)] backdrop-blur-md">
                <Sparkles size={14} />
                Transparent fundraising
              </div>

              <h1 className="max-w-4xl text-balance font-serif text-5xl font-normal leading-[0.98] tracking-[-0.045em] text-[var(--color-ink)] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
                What's being funded right now.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--color-ink-dim)] sm:text-lg sm:leading-8">
                Explore community-led initiatives, follow their progress, and
                find meaningful ways to contribute to change.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[var(--color-ink-dim)]">
                <span className="inline-flex items-center gap-2">
                  <CircleDot
                    size={15}
                    className="text-[var(--color-emerald-glow)]"
                  />
                  Community-powered
                </span>

                <span className="h-1 w-1 rounded-full bg-[var(--color-ink-faint)]" />

                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={15} />
                  Progress you can follow
                </span>
              </div>
            </motion.div>

            {/* Campaign Summary Panel */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="relative"
            >
              <div className="rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)]/75 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
                      Campaign overview
                    </p>
                    <p className="mt-2 text-sm font-medium text-[var(--color-ink)]">
                      The bigger picture
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)]">
                    <TrendingUp size={17} />
                  </div>
                </div>

                <div className="space-y-4">
                  <SummaryRow
                    icon={CircleDot}
                    label="Active now"
                    value={activeCount}
                    accent
                  />
                  <SummaryRow
                    icon={Clock3}
                    label="Upcoming"
                    value={upcomingCount}
                  />
                  <SummaryRow
                    icon={CheckCircle2}
                    label="Completed"
                    value={completedCount}
                  />
                </div>

                <div className="mt-6 border-t border-[var(--color-line)] pt-5">
                  <p className="text-xs leading-5 text-[var(--color-ink-faint)]">
                    Every campaign represents a practical step toward a
                    stronger, more connected community.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campaigns */}
      <section className="bg-[var(--color-bg)] py-16 sm:py-20 md:py-24">
        <div className="container-edit">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
          >
            <SectionHeader
              title="Browse campaigns"
              description="Filter through active initiatives, upcoming drives, and completed community projects."
            />
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="mt-8 flex flex-col gap-5 border-b border-[var(--color-line)] pb-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex flex-wrap gap-2">
              {tabs.map((t) => {
                const isActive = tab === t.id;

                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTab(t.id)}
                    className={`relative overflow-hidden rounded-full px-4 py-2.5 text-xs font-semibold tracking-wide transition-colors duration-300 sm:px-5 ${
                      isActive
                        ? "text-[var(--color-bg)]"
                        : "border border-[var(--color-line-strong)] bg-[var(--color-surface)]/50 text-[var(--color-ink-dim)] hover:border-[var(--color-emerald-glow)]/40 hover:text-[var(--color-ink)]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeCampaignTab"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                        className="absolute inset-0 rounded-full bg-[var(--color-emerald-glow)] shadow-lg shadow-[var(--color-emerald-glow)]/10"
                      />
                    )}

                    <span className="relative z-10">{t.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 text-xs text-[var(--color-ink-faint)]">
              <FolderHeart size={15} />
              <span>
                Showing{" "}
                <span className="font-medium text-[var(--color-ink-dim)]">
                  {filtered.length}
                </span>{" "}
                {filtered.length === 1 ? "campaign" : "campaigns"}
              </span>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="mt-10 sm:mt-12">
            <AnimatePresence mode="wait">
              {filtered.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease }}
                  className="rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)]/60 px-6 py-16 text-center backdrop-blur-xl sm:px-12"
                >
                  <EmptyState
                    title="No campaigns in this category"
                    description="Check another tab, or check back soon as new community initiatives are launched."
                  />
                </motion.div>
              ) : (
                <motion.div
                  key={tab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
                >
                  {filtered.map((campaign, index) => (
                    <motion.div
                      key={campaign.id}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.08,
                        ease,
                      }}
                      whileHover={{ y: -6 }}
                      className="h-full"
                    >
                      <CampaignCard campaign={campaign} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Closing Banner */}
      <section className="container-edit pb-20 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
          className="relative overflow-hidden rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] px-6 py-8 sm:px-10 sm:py-10"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--color-emerald-glow)]/[0.08] blur-3xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)]">
                Be part of the story
              </p>

              <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[var(--color-ink)] sm:text-3xl">
                Small actions can create lasting impact.
              </h2>

              <p className="mt-3 text-sm leading-6 text-[var(--color-ink-dim)]">
                Follow a campaign, share an initiative, or reach out to the
                team to learn how you can help.
              </p>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)] text-[var(--color-emerald-glow)]">
              <ArrowUpRight size={19} />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function SummaryRow({
  icon: Icon,
  label,
  value,
  accent = false,
}: {
  icon: typeof CircleDot;
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <Icon
          size={16}
          className={
            accent
              ? "text-[var(--color-emerald-glow)]"
              : "text-[var(--color-ink-faint)]"
          }
        />
        <span className="text-sm text-[var(--color-ink-dim)]">{label}</span>
      </div>

      <span className="text-lg font-medium tracking-[-0.03em] text-[var(--color-ink)]">
        {value.toString().padStart(2, "0")}
      </span>
    </div>
  );
}