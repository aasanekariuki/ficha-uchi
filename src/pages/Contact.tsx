import {
  Mail,
  Phone,
  MapPin,
  Users,
  Handshake,
  Clock,
  HelpCircle,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

import { Seo } from "../components/Seo";
import { SectionHeader } from "../components/SectionHeader";
import { ContactForm } from "../components/ContactForm";
import { site } from "../data/site";

const pathways = [
  {
    title: "General inquiries",
    email: site.email,
    icon: HelpCircle,
    description: "Anything that does not fit into the categories below.",
    label: "Ask a question",
  },
  {
    title: "Partnerships",
    email: site.partnershipsEmail,
    icon: Handshake,
    description: "For organizations, schools, companies, and collaborators.",
    label: "Explore partnership",
  },
  {
    title: "Volunteering",
    email: site.volunteerEmail,
    icon: Clock,
    description: "Join the people helping turn ideas into community action.",
    label: "Get involved",
  },
  {
    title: "Community support",
    email: site.email,
    icon: Users,
    description: "For people seeking information about initiatives and support.",
    label: "Find support",
  },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Contact() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-glow)] selection:text-[var(--color-bg)]">
      <Seo
        title="Contact"
        description="Contact Ficha Uchi — general inquiries, partnerships, volunteering, and community support."
        path="/contact"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-bg-alt)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[var(--color-emerald-glow)]/[0.09] blur-3xl" />
          <div className="absolute -bottom-48 -left-32 h-[28rem] w-[28rem] rounded-full bg-emerald-950/30 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(var(--color-ink)_1px,transparent_1px),linear-gradient(90deg,var(--color-ink)_1px,transparent_1px)] [background-size:52px_52px]" />
        </div>

        <div className="container-edit relative z-10 py-24 sm:py-28 md:py-32">
          <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="max-w-4xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-emerald-glow)] backdrop-blur-md">
                <Sparkles size={14} />
                Get in touch
              </div>

              <h1 className="max-w-4xl text-balance font-serif text-5xl font-normal leading-[0.98] tracking-[-0.045em] text-[var(--color-ink)] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
                Let&apos;s talk.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--color-ink-dim)] sm:text-lg sm:leading-8">
                Whether you want to partner, volunteer, or simply ask a
                question, we are here to support, listen, and connect.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[var(--color-ink-dim)]">
                <span className="inline-flex items-center gap-2">
                  <MessageCircle
                    size={15}
                    className="text-[var(--color-emerald-glow)]"
                  />
                  Conversations that matter
                </span>

                <span className="h-1 w-1 rounded-full bg-[var(--color-ink-faint)]" />

                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={15} />
                  Community-first support
                </span>
              </div>
            </motion.div>

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
                      Start a conversation
                    </p>
                    <p className="mt-2 text-sm font-medium text-[var(--color-ink)]">
                      We would love to hear from you
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)]">
                    <Mail size={17} />
                  </div>
                </div>

                <div className="space-y-4">
                  <MiniContactRow
                    icon={Mail}
                    label="Email"
                    value={site.email}
                  />
                  <MiniContactRow
                    icon={Phone}
                    label="Phone"
                    value={site.phone}
                  />
                  <MiniContactRow
                    icon={MapPin}
                    label="Location"
                    value={site.location}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Pathways */}
      <section className="bg-[var(--color-bg)] py-16 sm:py-20 md:py-24">
        <div className="container-edit">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
          >
            <SectionHeader
              title="Choose your pathway"
              description="Reach the right team or start with whichever option feels closest to what you need."
            />
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {pathways.map(
              (
                { title, email, icon: Icon, description, label },
                index
              ) => (
                <motion.a
                  key={title}
                  href={`mailto:${email}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease,
                  }}
                  whileHover={{ y: -7 }}
                  className="group relative flex min-h-[285px] flex-col justify-between overflow-hidden rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-6 shadow-lg shadow-black/[0.03] transition-all duration-300 hover:border-[var(--color-emerald-glow)]/45 hover:shadow-2xl hover:shadow-[var(--color-emerald-glow)]/[0.08] sm:p-7"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--color-emerald-glow)]/[0.06] blur-2xl transition-all duration-500 group-hover:bg-[var(--color-emerald-glow)]/[0.12]" />

                  <div className="relative">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-line-strong)] bg-[var(--color-bg)] text-[var(--color-emerald-glow)] transition-all duration-300 group-hover:border-[var(--color-emerald-glow)]/45 group-hover:bg-[var(--color-emerald-tint)]">
                        <Icon size={20} />
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="text-[var(--color-ink-faint)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--color-emerald-glow)]"
                      />
                    </div>

                    <h3 className="font-serif text-2xl font-normal tracking-[-0.025em] text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-emerald-glow)]">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--color-ink-dim)]">
                      {description}
                    </p>
                  </div>

                  <div className="relative mt-8 border-t border-[var(--color-line)] pt-5">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
                      {label}
                    </p>

                    <span className="block truncate text-xs font-medium text-[var(--color-emerald-glow)]">
                      {email}
                    </span>
                  </div>
                </motion.a>
              )
            )}
          </div>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-bg-alt)] py-20 sm:py-24 md:py-28">
        <div className="container-edit grid items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
            className="min-w-0"
          >
            <SectionHeader
              title="Reach us directly"
              description="Find our official contact details below or send us a message using the form."
            />

            <div className="mt-8 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              <DirectContact
                icon={Mail}
                label="Email"
                value={site.email}
                href={`mailto:${site.email}`}
              />

              <DirectContact
                icon={Phone}
                label="Phone"
                value={site.phone}
                href={`tel:${site.phone.replace(/\s/g, "")}`}
              />

              <DirectContact
                icon={MapPin}
                label="Location"
                value={site.location}
              />
            </div>

            {/* Map / Location Card */}
            <div className="relative mt-8 overflow-hidden rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)] shadow-xl shadow-black/[0.04]">
              <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(var(--color-ink)_1px,transparent_1px),linear-gradient(90deg,var(--color-ink)_1px,transparent_1px)] [background-size:30px_30px]" />

              <div className="relative flex min-h-[230px] flex-col items-center justify-center px-6 py-10 text-center">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-emerald-glow)]/25 bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)]"
                >
                  <MapPin size={24} />
                </motion.div>

                <p className="text-sm font-medium text-[var(--color-ink)]">
                  Find us in the community
                </p>

                <p className="mt-2 max-w-xs text-xs leading-5 text-[var(--color-ink-dim)]">
                  {site.location}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-[var(--color-ink-faint)]">
                  Location details coming soon
                </span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
            className="relative overflow-hidden rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-6 shadow-2xl shadow-black/[0.05] sm:p-8 md:p-10"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--color-emerald-glow)]/[0.06] blur-3xl" />

            <div className="relative">
              <div className="mb-8 flex items-start justify-between gap-6">
                <SectionHeader
                  title="Send a message"
                  description="Tell us what is on your mind and our team will get back to you."
                />

                <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-line-strong)] bg-[var(--color-bg)] text-[var(--color-emerald-glow)] sm:flex">
                  <Mail size={18} />
                </div>
              </div>

              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container-edit py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
          className="relative overflow-hidden rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)] px-6 py-8 sm:px-10 sm:py-10"
        >
          <div className="pointer-events-none absolute -bottom-28 -right-20 h-64 w-64 rounded-full bg-[var(--color-emerald-glow)]/[0.07] blur-3xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)]">
                One message can begin something
              </p>

              <h2 className="mt-3 font-serif text-2xl font-normal tracking-[-0.03em] text-[var(--color-ink)] sm:text-3xl">
                Have an idea, question, or opportunity?
              </h2>

              <p className="mt-3 text-sm leading-6 text-[var(--color-ink-dim)]">
                We are always open to thoughtful conversations and new ways
                to serve the community.
              </p>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-bg)] text-[var(--color-emerald-glow)]">
              <ArrowUpRight size={19} />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function MiniContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon size={15} className="mt-0.5 shrink-0 text-[var(--color-emerald-glow)]" />

      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
          {label}
        </p>
        <p className="mt-1 truncate text-xs text-[var(--color-ink-dim)]">
          {value}
        </p>
      </div>
    </div>
  );
}

function DirectContact({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-line-strong)] bg-[var(--color-surface)] text-[var(--color-emerald-glow)] transition-colors duration-300 group-hover:border-[var(--color-emerald-glow)]/40 group-hover:bg-[var(--color-emerald-tint)]">
        <Icon size={17} />
      </div>

      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
          {label}
        </p>
        <p className="mt-1 break-words text-sm font-medium text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-emerald-glow)]">
          {value}
        </p>
      </div>

      {href && (
        <ArrowUpRight
          size={16}
          className="ml-auto shrink-0 text-[var(--color-ink-faint)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--color-emerald-glow)]"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="group flex items-center gap-4 py-5 transition-colors duration-300"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="group flex items-center gap-4 py-5">
      {content}
    </div>
  );
}