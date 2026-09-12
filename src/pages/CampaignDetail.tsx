import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Loader2,
  Heart,
  CheckCircle2,
  MapPin,
  Users,
  Calendar,
  Target,
  Sparkles,
  ShieldCheck,
  HandHeart,
  ArrowRight,
} from "lucide-react";
import { Seo } from "../components/Seo";
import { Img } from "../components/Image";
import { Badge } from "../components/Badge";
import { campaigns } from "../data/campaigns";
import {
  handleSupportCampaign,
  enabledPaymentMethods,
} from "../lib/payments";
import { NotFound } from "./NotFound";

const statusTone = {
  active: "blue",
  completed: "gold",
  upcoming: "charcoal",
} as const;

const statusLabel = {
  active: "Active campaign",
  completed: "Completed campaign",
  upcoming: "Upcoming campaign",
} as const;

export function CampaignDetail() {
  const { slug } = useParams();
  const campaign = campaigns.find((c) => c.slug === slug);

  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const [feedback, setFeedback] = useState("");

  if (!campaign) return <NotFound />;

  const campaignId = campaign.id;

  const pct =
    campaign.target && campaign.raised !== undefined
      ? Math.min(100, Math.round((campaign.raised / campaign.target) * 100))
      : null;

  const formattedDeadline = campaign.deadline
    ? new Date(campaign.deadline).toLocaleDateString("en-KE", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  async function onSupport() {
    setState("loading");

    try {
      const res = await handleSupportCampaign({
        campaignId,
      });

      setFeedback(res.message);
      setState("done");
    } catch {
      setFeedback(
        "Something went wrong while starting your support request. Please try again or contact our team.",
      );
      setState("done");
    }
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-glow)] selection:text-[var(--color-bg)]">
      <Seo
        title={campaign.title}
        description={campaign.description}
        path={`/campaigns/${campaign.slug}`}
      />

      <section className="relative isolate min-h-[570px] overflow-hidden bg-[var(--color-bg-alt)] pt-28 sm:min-h-[630px] md:min-h-[700px] md:pt-32">
        <Img
          src={campaign.coverImage}
          alt={campaign.title}
          aspect="aspect-auto h-full"
          eager
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/75 to-[var(--color-bg)]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)]/80 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(95,165,132,0.24),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(var(--color-ink)_1px,transparent_1px),linear-gradient(90deg,var(--color-ink)_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="container-edit relative z-10 flex min-h-[570px] flex-col justify-end pb-14 sm:min-h-[630px] md:min-h-[700px] md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-4xl"
          >
            <Link
              to="/campaigns"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-semibold text-white/75 backdrop-blur-xl transition-all duration-300 hover:border-[var(--color-emerald-glow)]/50 hover:bg-black/30 hover:text-white"
            >
              <ArrowLeft
                size={14}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to all campaigns
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Badge tone={statusTone[campaign.status]}>
                {statusLabel[campaign.status]}
              </Badge>

              {campaign.location && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-xs text-white/75 backdrop-blur-md">
                  <MapPin size={12} />
                  {campaign.location}
                </span>
              )}
            </div>

            <h1 className="mt-5 max-w-4xl text-balance font-serif text-5xl font-normal leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              {campaign.title}
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium uppercase tracking-[0.16em] text-white/60">
              <span className="inline-flex items-center gap-2">
                <Sparkles
                  size={13}
                  className="text-[var(--color-emerald-glow)]"
                />
                Community initiative
              </span>

              {campaign.beneficiariesTarget && (
                <span className="inline-flex items-center gap-2">
                  <Users size={13} />
                  {campaign.beneficiariesTarget} learners targeted
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-[var(--color-bg)] py-16 md:py-24">
        <div className="container-edit">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(340px,0.75fr)] lg:gap-16">
            <motion.main
              initial={{ opacity: 0, x: -22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="min-w-0"
            >
              <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-emerald-glow)]">
                <span className="h-px w-8 bg-[var(--color-emerald-glow)]" />
                The initiative
              </div>

              <h2 className="max-w-3xl font-serif text-4xl font-normal leading-tight tracking-tight text-[var(--color-ink)] sm:text-5xl">
                {campaign.objective}
              </h2>

              <div className="mt-8 max-w-2xl border-l border-[var(--color-emerald-glow)]/40 pl-5 sm:pl-7">
                <p className="text-base leading-8 text-[var(--color-ink-dim)] md:text-lg">
                  {campaign.description}
                </p>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                <InfoCard
                  icon={HandHeart}
                  label="Why it matters"
                  text="Practical support can create lasting confidence, access, and dignity."
                />

                <InfoCard
                  icon={ShieldCheck}
                  label="Purposeful giving"
                  text="Your contribution is connected to a specific community-led objective."
                />
              </div>

              <div className="mt-12 overflow-hidden rounded-[2rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)]/60 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)]">
                    <Heart size={19} />
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl text-[var(--color-ink)]">
                      Every contribution has a place
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--color-ink-dim)]">
                      Whether you support financially, share this campaign, or
                      connect us to someone who can help, you become part of
                      the work.
                    </p>
                  </div>
                </div>
              </div>
            </motion.main>

            <motion.aside
              initial={{ opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:sticky lg:top-8"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-6 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-8">
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--color-emerald-glow)]/10 blur-3xl" />

                <div className="relative">
                  <div className="mb-7 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
                        Campaign snapshot
                      </p>
                      <p className="mt-2 text-sm text-[var(--color-ink-dim)]">
                        Your support moves this forward.
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)] text-[var(--color-emerald-glow)]">
                      <Target size={18} />
                    </div>
                  </div>

                  {pct !== null && (
                    <div className="border-b border-[var(--color-line)] pb-7">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="text-xs text-[var(--color-ink-faint)]">
                            Raised so far
                          </p>
                          <p className="mt-2 font-serif text-4xl font-normal tracking-tight text-[var(--color-ink)]">
                            KES {campaign.raised!.toLocaleString()}
                          </p>
                        </div>

                        <span className="pb-1 text-sm font-semibold text-[var(--color-emerald-glow)]">
                          {pct}%
                        </span>
                      </div>

                      <div className="relative mt-5 h-3 overflow-hidden rounded-full bg-[var(--color-line-strong)]">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{
                            duration: 1.4,
                            delay: 0.35,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="relative h-full rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_16px_rgba(95,165,132,0.4)]"
                        >
                          <motion.span
                            animate={{ x: ["-30%", "130%"] }}
                            transition={{
                              duration: 2.2,
                              repeat: Infinity,
                              ease: "linear",
                              repeatDelay: 1.5,
                            }}
                            className="absolute inset-y-0 w-1/3 -skew-x-12 bg-white/25 blur-[2px]"
                          />
                        </motion.div>
                      </div>

                      <div className="mt-3 flex items-center justify-between text-xs text-[var(--color-ink-dim)]">
                        <span>Progress toward target</span>
                        <span>
                          KES {campaign.target!.toLocaleString()} goal
                        </span>
                      </div>
                    </div>
                  )}

                  <dl className="grid grid-cols-2 gap-x-5 gap-y-7 py-7">
                    {campaign.beneficiariesTarget && (
                      <StatItem
                        icon={Target}
                        label="Beneficiaries"
                        value={`${campaign.beneficiariesTarget} learners`}
                      />
                    )}

                    {campaign.supporters !== undefined && (
                      <StatItem
                        icon={Users}
                        label="Supporters"
                        value={`${campaign.supporters} supporters`}
                      />
                    )}

                    {formattedDeadline && (
                      <StatItem
                        icon={Calendar}
                        label="Deadline"
                        value={formattedDeadline}
                      />
                    )}

                    {campaign.location && (
                      <StatItem
                        icon={MapPin}
                        label="Location"
                        value={campaign.location}
                      />
                    )}
                  </dl>

                  {campaign.status !== "completed" ? (
                    <div className="border-t border-[var(--color-line)] pt-7">
                      <AnimatePresence mode="wait" initial={false}>
                        {state === "done" ? (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.45 }}
                            className="rounded-2xl border border-[var(--color-emerald-glow)]/35 bg-[var(--color-emerald-tint)]/60 p-5 backdrop-blur-md"
                          >
                            <div className="flex items-start gap-3">
                              <CheckCircle2
                                size={21}
                                className="mt-0.5 shrink-0 text-[var(--color-emerald-glow)]"
                              />
                              <div>
                                <p className="text-sm font-semibold text-[var(--color-ink)]">
                                  Thank you for showing up.
                                </p>
                                <p className="mt-2 text-sm leading-6 text-[var(--color-ink-dim)]">
                                  {feedback}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-4"
                          >
                            <motion.button
                              type="button"
                              onClick={onSupport}
                              disabled={state === "loading"}
                              whileHover={{
                                y: state === "loading" ? 0 : -2,
                              }}
                              whileTap={{
                                scale: state === "loading" ? 1 : 0.98,
                              }}
                              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[var(--color-emerald-glow)] px-6 py-4 text-sm font-semibold text-[var(--color-bg)] shadow-lg shadow-[var(--color-emerald-glow)]/20 transition-all duration-300 hover:bg-emerald-400 hover:shadow-xl hover:shadow-[var(--color-emerald-glow)]/25 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                              <span className="relative flex items-center gap-3">
                                {state === "loading" ? (
                                  <Loader2
                                    size={18}
                                    className="animate-spin"
                                  />
                                ) : (
                                  <Heart
                                    size={17}
                                    className="fill-current transition-transform duration-300 group-hover:scale-110"
                                  />
                                )}

                                <span>
                                  {state === "loading"
                                    ? "Processing request..."
                                    : "Support this campaign"}
                                </span>

                                {state !== "loading" && (
                                  <ArrowUpRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                  />
                                )}
                              </span>
                            </motion.button>

                            <div className="flex items-start gap-2 text-[11px] leading-5 text-[var(--color-ink-faint)]">
                              <ShieldCheck size={14} className="mt-0.5 shrink-0" />
                              <span>
                                Your interest will be routed to the Ficha Uchi
                                team for the next steps.
                              </span>
                            </div>

                            {enabledPaymentMethods.length === 0 && (
                              <p className="rounded-xl border border-[var(--color-line)] bg-[var(--color-bg-alt)]/60 px-3 py-2.5 text-center text-xs leading-5 text-[var(--color-ink-dim)]">
                                Online payments aren’t connected yet. Your
                                request will be sent directly to our team.
                              </p>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <div className="border-t border-[var(--color-line)] pt-7">
                      <div className="flex items-start gap-3 rounded-2xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                        <CheckCircle2
                          size={19}
                          className="mt-0.5 shrink-0 text-amber-300"
                        />
                        <div>
                          <p className="text-sm font-semibold text-[var(--color-ink)]">
                            Campaign completed
                          </p>
                          <p className="mt-1 text-xs leading-5 text-[var(--color-ink-dim)]">
                            This initiative has reached its current stage.
                            Explore another way to support the community.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] bg-[var(--color-bg-alt)] py-16 md:py-20">
        <div className="container-edit">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-emerald-glow)]">
                <span className="h-px w-7 bg-[var(--color-emerald-glow)]" />
                Keep connected
              </span>

              <h2 className="max-w-xl font-serif text-4xl font-normal leading-tight tracking-tight text-[var(--color-ink)] sm:text-5xl">
                One campaign is one part of the bigger picture.
              </h2>
            </div>

            <Link
              to="/campaigns"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-emerald-glow)] transition-colors hover:text-emerald-300"
            >
              Explore other campaigns
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function StatItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Target;
  label: string;
  value: string;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <dt className="flex items-center gap-1.5 text-xs text-[var(--color-ink-dim)]">
        <Icon size={14} className="shrink-0 text-[var(--color-emerald-glow)]" />
        {label}
      </dt>
      <dd className="break-words text-sm font-semibold leading-5 text-[var(--color-ink)]">
        {value}
      </dd>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  text,
}: {
  icon: typeof HandHeart;
  label: string;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)]/55 p-5 transition-colors duration-300 hover:border-[var(--color-emerald-glow)]/30"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)]">
        <Icon size={18} strokeWidth={1.8} />
      </div>

      <h3 className="mt-5 font-serif text-xl text-[var(--color-ink)]">
        {label}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[var(--color-ink-dim)]">
        {text}
      </p>
    </motion.div>
  );
}