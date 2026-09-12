import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Shirt,
  Users,
  Sparkles,
  HandHeart,
  ArrowUpRight,
  ShieldCheck,
  Compass,
  Heart,
  MapPin,
  Plus,
  CheckCircle2,
} from "lucide-react";
import { Seo } from "../components/Seo";
import { Img } from "../components/Image";
import { SectionHeader } from "../components/SectionHeader";
import { ImpactCounter } from "../components/ImpactCounter";
import { StoryCard } from "../components/StoryCard";
import { CTASection } from "../components/CTASection";
import { LinkButton } from "../components/Button";
import { impactStats } from "../data/impact";
import { projects } from "../data/projects";
import { stories } from "../data/stories";
import { ecosystemNodes } from "../data/ecosystem";
import { galleryImages } from "../data/gallery";
import { Gallery } from "../components/Gallery";

const workIcons = {
  uniforms: Shirt,
  community: Users,
  youth: Sparkles,
  empowerment: HandHeart,
};

const revealUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Home() {
  return (
    <div className="overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-glow)] selection:text-[var(--color-bg)]">
      <Seo
        title="Ficha Uchi"
        description="Ficha Uchi is a grassroots initiative from Mathare, Nairobi, restoring dignity and creating opportunity for children and young people through uniforms, community support, and youth development."
        path="/"
      />

      <Hero />
      <TheWhy />
      <ImpactSection />
      <WhatWeDo />
      <ImageStory />
      <StoriesSection />
      <CommunityModel />
      <CTASection />
    </div>
  );
}

function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-end overflow-hidden bg-[var(--color-bg-alt)] px-0 pb-20 pt-32 md:min-h-screen md:pb-28">
      {/* Image layer */}
      <motion.div
        initial={prefersReducedMotion ? undefined : { scale: 1.12, opacity: 0 }}
        animate={prefersReducedMotion ? undefined : { scale: 1, opacity: 0.42 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Img
          src="https://scontent.fmba5-2.fna.fbcdn.net/v/t39.30808-6/715512026_1313931190842308_83121816328556098_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1366&ctp=s2048x1366&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NzJI6RQFXHQQ7kNvwF8eU1d&_nc_oc=AdpsfPP3QqyYEBpteKoj4rWUtkI-aq-5Hok07zWM2WAclAYoy9F2Ckaozl_38uJPE7Q&_nc_zt=23&_nc_ht=scontent.fmba5-2.fna&_nc_gid=Jzy-UrwzU8UrukYsQ2m8jw&_nc_ss=7b289&oh=00_AQIIHZA2tdgPSmsjLTzq3hRadS44TCij3VvN6OaCCt3VYA&oe=6AAAE10F"
          alt="Community members and volunteers gathered during a Ficha Uchi uniform distribution day in Mathare"
          aspect="aspect-auto h-full w-full"
          eager
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/75 to-[var(--color-bg)]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)]/70 via-transparent to-transparent" />
      </motion.div>

      {/* Ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_15%,rgba(95,165,132,0.2),transparent_42%)]" />

      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 75%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 75%, transparent)",
        }}
      />

      {/* Floating decorative shape */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-32 hidden h-36 w-36 rounded-full border border-[var(--color-emerald-glow)]/20 md:block"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                y: [0, -14, 0],
                rotate: [0, 8, 0],
              }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-5 rounded-full border border-dashed border-[var(--color-emerald-glow)]/30" />
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-emerald-glow)]" />
      </motion.div>

      <div className="container-edit relative z-10 w-full">
        <motion.div
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate={prefersReducedMotion ? undefined : "visible"}
          variants={staggerContainer}
          className="max-w-5xl"
        >
          <motion.div
            variants={revealUp}
            className="inline-flex items-center gap-3 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)] shadow-lg shadow-black/10 backdrop-blur-xl sm:text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-emerald-glow)] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-emerald-glow)]" />
            </span>
            Mathare, Nairobi
            <span className="h-3 w-px bg-[var(--color-line-strong)]" />
            Since 2013
          </motion.div>

          <motion.h1
            variants={revealUp}
            className="mt-7 max-w-5xl text-balance font-serif text-[clamp(3.4rem,8vw,8.5rem)] font-normal leading-[0.94] tracking-[-0.055em] text-[var(--color-ink)]"
          >
            Restoring dignity.
            <br />
            <span className="italic text-[var(--color-emerald-glow)]">
              Creating possibility.
            </span>
          </motion.h1>

          <motion.p
            variants={revealUp}
            className="mt-7 max-w-xl text-base leading-7 text-[var(--color-ink-dim)] sm:text-lg"
          >
            We work with children, families, schools, and communities in
            Mathare to turn something as practical as a school uniform into a
            real chance to stay in school with confidence.
          </motion.p>

          <motion.div
            variants={revealUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <LinkButton
              as="link"
              to="/work"
              size="lg"
              className="group flex items-center gap-2 rounded-full bg-[var(--color-emerald-glow)] px-7 py-4 font-medium text-[var(--color-bg)] shadow-[0_0_35px_rgba(45,106,79,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-emerald-glow)]/90 hover:shadow-[0_0_45px_rgba(45,106,79,0.45)]"
            >
              Explore Our Work
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </LinkButton>

            <LinkButton
              as="link"
              to="/get-involved"
              size="lg"
              variant="outline-light"
              className="rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)]/60 px-7 py-4 text-[var(--color-ink)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-emerald-glow)] hover:bg-[var(--color-surface)] hover:text-[var(--color-emerald-glow)]"
            >
              Get Involved
            </LinkButton>
          </motion.div>

          <motion.div
            variants={revealUp}
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[var(--color-line-strong)] pt-5 text-xs text-[var(--color-ink-faint)]"
          >
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-[var(--color-emerald-glow)]" />
              Community-led action
            </span>
            <span className="flex items-center gap-2">
              <Heart size={14} className="text-[var(--color-emerald-glow)]" />
              Dignity-first approach
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 text-[var(--color-ink-faint)] md:block"
        aria-hidden="true"
      >
        <ChevronDown size={23} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}

function TheWhy() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] py-24 md:py-36">
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-[var(--color-emerald-glow)]/[0.04] blur-[100px]" />

      <div className="container-edit relative z-10 grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, x: -30 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between"
        >
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)]">
            <span className="h-px w-8 bg-[var(--color-emerald-glow)]" />
            Our beginning
          </div>

          <div className="mt-12 md:mt-0">
            <span className="block font-serif text-[clamp(6rem,15vw,11rem)] font-normal leading-[0.75] tracking-[-0.08em] text-[var(--color-emerald-glow)]/[0.13]">
              2013
            </span>

            <p className="mt-8 max-w-md text-balance font-serif text-3xl leading-[1.15] text-[var(--color-ink)] md:text-4xl">
              It started with something small enough to fix — and big enough
              to matter.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, x: 30 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col justify-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-emerald-glow)]">
            <Compass size={14} />
            The why
          </span>

          <div className="mt-7 space-y-6">
            <p className="max-w-prose text-lg leading-8 text-[var(--color-ink-dim)]">
              In Mathare, a torn or outgrown uniform can be the quiet reason a
              child stops going to school. Not because the family doesn&apos;t
              value education — because dignity and shame are powerful, and
              children feel both early.
            </p>

            <p className="max-w-prose text-lg leading-8 text-[var(--color-ink-dim)]">
              Ficha Uchi began in 2013 as a direct, local response: get
              children properly fitted uniforms, keep them in the classroom,
              and build that work around the community itself — its tailors,
              its volunteers, and its schools.
            </p>
          </div>

          <Link
            to="/about"
            className="group mt-9 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--color-emerald-glow)] transition-colors hover:text-[var(--color-ink)]"
          >
            Read our full origin story
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ImpactSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-[var(--color-line)] bg-[var(--color-bg-alt)] py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[var(--color-emerald-glow)]/[0.04] blur-[120px]" />

      <div className="container-edit relative z-10">
        <SectionHeader
          tone="dark"
          title="What's happened so far"
          description="Verified, updateable figures — tap any statistic to see what it means in practice."
        />

        <motion.div
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              variants={revealUp}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-emerald-glow)]/50 hover:shadow-xl hover:shadow-black/10 sm:p-7"
            >
              <span className="absolute right-5 top-5 text-[10px] font-semibold tracking-[0.18em] text-[var(--color-ink-faint)]">
                0{index + 1}
              </span>

              <div className="absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-[var(--color-emerald-glow)]/[0.05] blur-2xl transition-transform duration-700 group-hover:scale-150" />

              <div className="relative z-10">
                <ImpactCounter stat={stat} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex justify-start sm:justify-end"
        >
          <Link
            to="/impact"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)] px-5 py-3 text-sm font-medium text-[var(--color-ink)] transition-all duration-300 hover:border-[var(--color-emerald-glow)] hover:text-[var(--color-emerald-glow)]"
          >
            See the full impact dashboard
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  const [active, setActive] = useState(projects[0]!.id);
  const activeProject = projects.find((p) => p.id === active)!;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative bg-[var(--color-bg)] py-24 md:py-36">
      <div className="container-edit">
        <SectionHeader
          title="What we do"
          description="Four interconnected areas of work, all pointed at the same outcome: dignity, in practice."
        />

        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: -25 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-3"
          >
            {projects.map((project, index) => {
              const Icon = workIcons[project.category];
              const isActive = project.id === active;

              return (
                <motion.button
                  key={project.id}
                  onMouseEnter={() => setActive(project.id)}
                  onFocus={() => setActive(project.id)}
                  onClick={() => setActive(project.id)}
                  whileHover={prefersReducedMotion ? undefined : { x: 4 }}
                  className={`group relative flex items-start gap-5 overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 sm:p-6 ${
                    isActive
                      ? "border-[var(--color-emerald-glow)] bg-[var(--color-surface)] shadow-lg shadow-[var(--color-emerald-glow)]/[0.06]"
                      : "border-[var(--color-line)] bg-[var(--color-bg-alt)]/40 hover:border-[var(--color-line-strong)] hover:bg-[var(--color-surface)]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-work-indicator"
                      className="absolute bottom-0 left-0 top-0 w-1 bg-[var(--color-emerald-glow)]"
                    />
                  )}

                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                      isActive
                        ? "border-[var(--color-emerald-glow)] bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)]"
                        : "border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-ink-faint)] group-hover:text-[var(--color-ink)]"
                    }`}
                  >
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-[10px] font-semibold tracking-[0.18em] text-[var(--color-ink-faint)]">
                        0{index + 1}
                      </span>
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald-glow)]" />
                      )}
                    </div>

                    <h3
                      className={`font-serif text-2xl font-normal transition-colors ${
                        isActive
                          ? "text-[var(--color-ink)]"
                          : "text-[var(--color-ink-dim)] group-hover:text-[var(--color-ink)]"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-[var(--color-ink-dim)]">
                      {project.summary}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className={`mt-1 shrink-0 transition-all duration-300 ${
                      isActive
                        ? "text-[var(--color-emerald-glow)]"
                        : "text-[var(--color-ink-faint)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    }`}
                  />
                </motion.button>
              );
            })}
          </motion.div>

          <div className="relative min-h-[460px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: 0, scale: 0.97, y: 14 }
                }
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: 1, scale: 1, y: 0 }
                }
                exit={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: 0, scale: 0.97, y: -12 }
                }
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-3xl border border-[var(--color-line-strong)] bg-[var(--color-surface)] shadow-2xl shadow-black/20"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Img
                    src={activeProject.coverImage}
                    alt={activeProject.title}
                    aspect="aspect-auto h-full w-full"
                    className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/10 to-transparent" />

                  <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
                    Our work
                  </div>
                </div>

                <div className="flex flex-col gap-5 p-6 sm:p-8">
                  <p className="text-base leading-7 text-[var(--color-ink-dim)]">
                    {activeProject.description}
                  </p>

                  <Link
                    to={activeProject.cta?.href ?? "/work"}
                    className="group inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-emerald-glow)] px-6 py-3 text-sm font-semibold text-[var(--color-bg)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-emerald-glow)]/90"
                  >
                    {activeProject.cta?.label ?? "Learn more"}
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageStory() {
  const featured = galleryImages.slice(0, 8);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="border-t border-[var(--color-line)] bg-[var(--color-bg-alt)] py-24 md:py-36">
      <div className="container-edit">
        <SectionHeader
          title="What it looks like on the ground"
          description="A running visual record of the work — fittings, drives, tailoring, and everyday moments in Mathare."
          action={
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-emerald-glow)] transition-colors hover:text-[var(--color-ink)]"
            >
              View full gallery
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          }
        />

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 25 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="mt-12"
        >
          <Gallery images={featured} />
        </motion.div>
      </div>
    </section>
  );
}

function StoriesSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative bg-[var(--color-bg)] py-24 md:py-36">
      <div className="container-edit">
        <SectionHeader
          title="Stories from the work"
          description="Learners, tailors, volunteers, and partners — the people behind the numbers."
          action={
            <Link
              to="/stories"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-emerald-glow)] transition-colors hover:text-[var(--color-ink)]"
            >
              All stories
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          }
        />
      </div>

      <motion.div
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 25 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="container-edit mt-12 flex snap-x gap-5 overflow-x-auto pb-6 md:gap-6"
      >
        {stories.map((story, index) => (
          <motion.div
            key={story.id}
            whileHover={prefersReducedMotion ? undefined : { y: -6 }}
            transition={{ duration: 0.3 }}
            className="w-[min(84vw,22rem)] shrink-0 snap-start md:w-96"
          >
            <div className="relative">
              <span className="pointer-events-none absolute -left-1 -top-5 z-10 font-serif text-6xl leading-none text-[var(--color-emerald-glow)]/[0.12]">
                0{index + 1}
              </span>
              <StoryCard story={story} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function CommunityModel() {
  const [active, setActive] = useState(ecosystemNodes[2]!.id);
  const activeNode = ecosystemNodes.find((n) => n.id === active);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-bg-alt)] py-24 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[42rem] -translate-x-1/2 rounded-full bg-[var(--color-emerald-glow)]/[0.05] blur-[130px]" />

      <div className="container-edit relative z-10">
        <SectionHeader
          tone="dark"
          title="Not donor → organization → child"
          description="Ficha Uchi is embedded inside the community it works with, not operating above it. Select a part of the model to see what it contributes."
        />

        {/* Connection line */}
        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[var(--color-emerald-glow)]/30 to-transparent md:block" />

          <motion.div
            initial={prefersReducedMotion ? undefined : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="relative flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {ecosystemNodes.map((node, index) => {
              const isSelected = active === node.id;

              return (
                <motion.button
                  key={node.id}
                  variants={revealUp}
                  onClick={() => setActive(node.id)}
                  whileHover={
                    prefersReducedMotion ? undefined : { y: -4, scale: 1.02 }
                  }
                  whileTap={
                    prefersReducedMotion ? undefined : { scale: 0.98 }
                  }
                  className={`group relative flex items-center gap-2.5 rounded-2xl border px-5 py-4 text-sm font-medium transition-all duration-300 md:px-6 ${
                    isSelected
                      ? "border-[var(--color-emerald-glow)] bg-[var(--color-surface)] text-[var(--color-emerald-glow)] shadow-lg shadow-[var(--color-emerald-glow)]/10"
                      : "border-[var(--color-line)] bg-[var(--color-surface)]/60 text-[var(--color-ink-dim)] hover:border-[var(--color-line-strong)] hover:text-[var(--color-ink)]"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] transition-colors ${
                      isSelected
                        ? "bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)]"
                        : "bg-[var(--color-bg-alt)] text-[var(--color-ink-faint)]"
                    }`}
                  >
                    {index + 1}
                  </span>

                  <ShieldCheck
                    size={16}
                    className={`transition-colors ${
                      isSelected
                        ? "text-[var(--color-emerald-glow)]"
                        : "text-[var(--color-ink-faint)]"
                    }`}
                  />

                  {node.name}

                  {isSelected && (
                    <motion.span
                      layoutId="active-node-dot"
                      className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-[var(--color-bg-alt)] bg-[var(--color-emerald-glow)]"
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={
              prefersReducedMotion
                ? undefined
                : { opacity: 0, y: 20, scale: 0.98 }
            }
            animate={
              prefersReducedMotion
                ? undefined
                : { opacity: 1, y: 0, scale: 1 }
            }
            exit={
              prefersReducedMotion
                ? undefined
                : { opacity: 0, y: -15, scale: 0.98 }
            }
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-7 shadow-2xl shadow-black/10 sm:p-10"
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[var(--color-emerald-glow)]/[0.06] blur-3xl" />

            <div className="relative z-10 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-emerald-glow)]/30 bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)]">
                <CheckCircle2 size={21} strokeWidth={1.7} />
              </div>

              <span className="mt-5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-emerald-glow)]">
                {activeNode?.name} contribution
              </span>

              <p className="mx-auto mt-5 max-w-2xl font-serif text-xl leading-relaxed text-[var(--color-ink)] md:text-2xl">
                &quot;{activeNode?.contribution}&quot;
              </p>

              <div className="mx-auto mt-7 h-px w-12 bg-[var(--color-emerald-glow)]/50" />
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex items-center justify-center gap-2 text-center text-xs text-[var(--color-ink-faint)]"
        >
          <Plus size={13} className="text-[var(--color-emerald-glow)]" />
          <span>Every part strengthens the whole.</span>
        </motion.div>
      </div>
    </section>
  );
}