// Generates abstract, brand-toned placeholder imagery.
// These are intentionally NOT fake "stock photos" of people — per the
// ethical storytelling requirement, no invented depictions of children or
// community members are created. Each placeholder is a labeled, textured
// panel in the Ficha Uchi palette, meant to be swapped for real, consented
// photography before launch. See /public/images/README.md.

import { mkdirSync, writeFileSync } from "fs";
import { dirname } from "path";

const palette = {
  cream: "#F4F0E6",
  creamDeep: "#E9E2D0",
  charcoal: "#211D19",
  ink: "#0C0B09",
  blue: "#1C4E80",
  blueBright: "#2E6DA4",
  sky: "#7FB9D9",
  gold: "#B98A3D",
  goldSoft: "#D9B679",
  clay: "#8C7A63",
};

function panel({ w = 1200, h = 900, bg, fg, accent, label, sub, pattern }) {
  const stripes = Array.from({ length: 7 })
    .map((_, i) => {
      const x = (w / 7) * i;
      return `<rect x="${x}" y="0" width="${w / 14}" height="${h}" fill="${fg}" opacity="0.05" />`;
    })
    .join("");

  const circles =
    pattern === "dots"
      ? Array.from({ length: 24 })
          .map(() => {
            const cx = Math.random() * w;
            const cy = Math.random() * h;
            const r = 2 + Math.random() * 3;
            return `<circle cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" r="${r.toFixed(1)}" fill="${accent}" opacity="0.35" />`;
          })
          .join("")
      : "";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${bg}" />
  ${stripes}
  ${circles}
  <rect x="0" y="${h - 6}" width="${w}" height="6" fill="${accent}" />
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="60" y="${h - 100}" font-size="${Math.round(w / 18)}" fill="${fg}" opacity="0.92">${label}</text>
    <text x="60" y="${h - 60}" font-size="${Math.round(w / 42)}" fill="${fg}" opacity="0.55" font-family="Arial, sans-serif" letter-spacing="1">${sub}</text>
  </g>
</svg>`;
}

const jobs = [
  // hero
  { path: "public/images/hero/hero-01.svg", bg: palette.charcoal, fg: palette.cream, accent: palette.gold, label: "Mathare", sub: "PLACEHOLDER — replace with hero photography" },
  { path: "public/images/hero/hero-02.svg", bg: palette.blue, fg: palette.cream, accent: palette.sky, label: "Community", sub: "PLACEHOLDER — replace with hero photography" },
  { path: "public/images/hero/hero-03.svg", bg: palette.ink, fg: palette.creamDeep, accent: palette.goldSoft, label: "Dignity", sub: "PLACEHOLDER — replace with hero photography" },

  // uniforms
  { path: "public/images/uniforms/uniforms-01.svg", bg: palette.creamDeep, fg: palette.charcoal, accent: palette.blue, label: "Fitting Day", sub: "PLACEHOLDER — uniform distribution" },
  { path: "public/images/uniforms/uniforms-02.svg", bg: palette.blue, fg: palette.cream, accent: palette.sky, label: "Tailor Bench", sub: "PLACEHOLDER — local tailor at work" },
  { path: "public/images/uniforms/uniforms-03.svg", bg: palette.charcoal, fg: palette.cream, accent: palette.gold, label: "Fabric Store", sub: "PLACEHOLDER — sourced materials" },
  { path: "public/images/uniforms/uniforms-04.svg", bg: palette.creamDeep, fg: palette.charcoal, accent: palette.clay, label: "Measuring", sub: "PLACEHOLDER — fitting process", pattern: "dots" },
  { path: "public/images/uniforms/uniforms-05.svg", bg: palette.gold, fg: palette.ink, accent: palette.cream, label: "Ready", sub: "PLACEHOLDER — uniforms ready for school" },

  // community
  { path: "public/images/community/community-01.svg", bg: palette.clay, fg: palette.cream, accent: palette.gold, label: "Food Drive", sub: "PLACEHOLDER — community outreach" },
  { path: "public/images/community/community-02.svg", bg: palette.blueBright, fg: palette.cream, accent: palette.sky, label: "Clothing Drive", sub: "PLACEHOLDER — clothing collection" },
  { path: "public/images/community/community-03.svg", bg: palette.charcoal, fg: palette.creamDeep, accent: palette.gold, label: "Neighbourhood", sub: "PLACEHOLDER — Mathare streets" },
  { path: "public/images/community/community-04.svg", bg: palette.creamDeep, fg: palette.charcoal, accent: palette.blue, label: "Gathering", sub: "PLACEHOLDER — community meeting", pattern: "dots" },

  // youth
  { path: "public/images/youth/youth-01.svg", bg: palette.sky, fg: palette.ink, accent: palette.blue, label: "Youth Space", sub: "PLACEHOLDER — creative programs" },
  { path: "public/images/youth/youth-02.svg", bg: palette.ink, fg: palette.cream, accent: palette.goldSoft, label: "Mentorship", sub: "PLACEHOLDER — one-on-one mentoring" },
  { path: "public/images/youth/youth-03.svg", bg: palette.gold, fg: palette.ink, accent: palette.charcoal, label: "Arts & Music", sub: "PLACEHOLDER — creative expression" },
  { path: "public/images/youth/youth-04.svg", bg: palette.blue, fg: palette.cream, accent: palette.sky, label: "Leadership", sub: "PLACEHOLDER — youth-led programs", pattern: "dots" },

  // team
  { path: "public/images/team/team-01.svg", bg: palette.creamDeep, fg: palette.charcoal, accent: palette.blue, label: "Founder", sub: "PLACEHOLDER — team headshot" },
  { path: "public/images/team/team-02.svg", bg: palette.charcoal, fg: palette.cream, accent: palette.gold, label: "Programs", sub: "PLACEHOLDER — team headshot" },
  { path: "public/images/team/team-03.svg", bg: palette.blue, fg: palette.cream, accent: palette.sky, label: "Operations", sub: "PLACEHOLDER — team headshot" },
  { path: "public/images/team/team-04.svg", bg: palette.gold, fg: palette.ink, accent: palette.cream, label: "Community", sub: "PLACEHOLDER — team headshot" },
  { path: "public/images/team/team-05.svg", bg: palette.clay, fg: palette.cream, accent: palette.goldSoft, label: "Tailoring Lead", sub: "PLACEHOLDER — team headshot" },
  { path: "public/images/team/team-06.svg", bg: palette.ink, fg: palette.creamDeep, accent: palette.sky, label: "Volunteers", sub: "PLACEHOLDER — team headshot" },

  // campaigns
  { path: "public/images/campaigns/campaign-01.svg", bg: palette.blue, fg: palette.cream, accent: palette.gold, label: "Back to School", sub: "PLACEHOLDER — campaign cover" },
  { path: "public/images/campaigns/campaign-02.svg", bg: palette.charcoal, fg: palette.cream, accent: palette.sky, label: "Winter Uniforms", sub: "PLACEHOLDER — campaign cover" },
  { path: "public/images/campaigns/campaign-03.svg", bg: palette.gold, fg: palette.ink, accent: palette.charcoal, label: "Tailor Fund", sub: "PLACEHOLDER — campaign cover" },
  { path: "public/images/campaigns/campaign-04.svg", bg: palette.clay, fg: palette.cream, accent: palette.goldSoft, label: "Youth Space", sub: "PLACEHOLDER — campaign cover" },

  // stories
  { path: "public/images/stories/story-01.svg", bg: palette.creamDeep, fg: palette.charcoal, accent: palette.blue, label: "A Learner's Story", sub: "PLACEHOLDER — story cover" },
  { path: "public/images/stories/story-02.svg", bg: palette.blue, fg: palette.cream, accent: palette.sky, label: "A Tailor's Story", sub: "PLACEHOLDER — story cover" },
  { path: "public/images/stories/story-03.svg", bg: palette.charcoal, fg: palette.cream, accent: palette.gold, label: "A Volunteer's Story", sub: "PLACEHOLDER — story cover" },
  { path: "public/images/stories/story-04.svg", bg: palette.gold, fg: palette.ink, accent: palette.cream, label: "A Family's Story", sub: "PLACEHOLDER — story cover" },
  { path: "public/images/stories/story-05.svg", bg: palette.sky, fg: palette.ink, accent: palette.blue, label: "A Youth Story", sub: "PLACEHOLDER — story cover" },
  { path: "public/images/stories/story-06.svg", bg: palette.clay, fg: palette.cream, accent: palette.goldSoft, label: "A Partner's Story", sub: "PLACEHOLDER — story cover" },

  // gallery (varied)
  ...Array.from({ length: 18 }).map((_, i) => {
    const bgs = [palette.blue, palette.charcoal, palette.gold, palette.creamDeep, palette.clay, palette.blueBright];
    const fgs = [palette.cream, palette.cream, palette.ink, palette.charcoal, palette.cream, palette.cream];
    const labels = ["Uniforms", "Schools", "Community", "Youth", "Events", "Volunteers"];
    const idx = i % bgs.length;
    return {
      path: `public/images/gallery/gallery-${String(i + 1).padStart(2, "0")}.svg`,
      bg: bgs[idx],
      fg: fgs[idx],
      accent: palette.gold,
      label: labels[idx],
      sub: "PLACEHOLDER — gallery photograph",
      pattern: i % 3 === 0 ? "dots" : undefined,
    };
  }),

  // about / origin
  { path: "public/images/community/origin-2013.svg", bg: palette.ink, fg: palette.creamDeep, accent: palette.gold, label: "2013", sub: "PLACEHOLDER — where it began" },

  // og image
  { path: "public/images/hero/og-cover.svg", bg: palette.charcoal, fg: palette.cream, accent: palette.gold, label: "Ficha Uchi", sub: "Restoring dignity. Creating possibility." },
];

for (const job of jobs) {
  const svg = panel(job);
  mkdirSync(dirname(job.path), { recursive: true });
  writeFileSync(job.path, svg, "utf-8");
}

console.log(`Generated ${jobs.length} placeholder images.`);
