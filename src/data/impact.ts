import type { ImpactStat } from "../types";

// PLACEHOLDER DATA — every value below must be replaced with a verified
// figure before publishing. `verified: false` renders a visible
// "figure pending verification" note in the UI so nothing is presented
// as confirmed fact by accident.

export const impactStats: ImpactStat[] = [
  {
    id: "learners",
    value: "10,000+",
    label: "Learners reached",
    detail:
      "Children and young people supported with uniforms, clothing, and related essentials since 2013.",
    verified: false,
  },
  {
    id: "tailors",
    value: "200+",
    label: "Local tailors engaged",
    detail:
      "Mathare-based tailors given consistent, paid work producing and repairing uniforms.",
    verified: false,
  },
  {
    id: "years",
    value: "10+",
    label: "Years of community work",
    detail: "Continuous grassroots activity in and around Mathare since founding.",
    verified: false,
  },
  {
    id: "schools",
    value: "30+",
    label: "Partner schools",
    detail: "Primary and secondary schools that help identify learners in need and coordinate distribution.",
    verified: false,
  },
  {
    id: "volunteers",
    value: "150+",
    label: "Active volunteers",
    detail: "Community members and supporters who give time across programs each year.",
    verified: false,
  },
  {
    id: "communities",
    value: "12",
    label: "Communities reached",
    detail: "Villages and neighbourhoods across and beyond Mathare currently served.",
    verified: false,
  },
];

export const impactByYear = [
  { year: "2019", learners: 900, uniforms: 760, tailors: 40 },
  { year: "2020", learners: 1200, uniforms: 1050, tailors: 55 },
  { year: "2021", learners: 1500, uniforms: 1400, tailors: 70 },
  { year: "2022", learners: 2100, uniforms: 1950, tailors: 95 },
  { year: "2023", learners: 2600, uniforms: 2450, tailors: 120 },
  { year: "2024", learners: 3100, uniforms: 2900, tailors: 150 },
  { year: "2025", learners: 3400, uniforms: 3200, tailors: 200 },
]; // PLACEHOLDER — illustrative shape only, replace with verified annual data
