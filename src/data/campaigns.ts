import type { Campaign } from "../types";

// PLACEHOLDER DATA — campaign figures are illustrative only. No payment
// processing is wired up; see `handleSupportCampaign` in
// src/lib/payments.ts for the integration point.

export const campaigns: Campaign[] = [
  {
    id: "back-to-school-2026",
    title: "Back to School 2026",
    slug: "back-to-school-2026",
    description:
      "Fitting and delivering uniforms to learners returning for the new term across our partner schools.",
    objective: "Fund uniforms for learners starting the new school term.",
    target: 1200000,
    raised: 640000,
    beneficiaries: 480,
    beneficiariesTarget: 900,
    deadline: "2026-01-15",
    status: "active",
    coverImage: "https://scontent.fmba5-2.fna.fbcdn.net/v/t39.30808-6/687410103_1290726379829456_4490114049106695537_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1366&ctp=s2048x1366&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RKSuyZ_AQowQ7kNvwH5C8m_&_nc_oc=AdrBONVJJK99kbnQug2kNLOaxAJoQN_V9mBCQNskkMGyfK13SpHlsD5ULrVAX8wugPM&_nc_zt=23&_nc_ht=scontent.fmba5-2.fna&_nc_gid=9p-h1OCobVf4pru_HLfZBQ&_nc_ss=7b289&oh=00_AQLQ7bdBAMwWZ26Qa8qc0JVFKnjAtQK1RdXXM_EYiJ4abA&oe=6AAAFA24",
    supporters: 214,
    location: "Mathare, Nairobi",
  },
  {
    id: "cold-season-uniforms",
    title: "Cold Season Uniforms",
    slug: "cold-season-uniforms",
    description: "Sweaters and warm layers for learners during Nairobi's cold season.",
    objective: "Provide warm uniform layers to learners who need them most.",
    target: 500000,
    raised: 500000,
    beneficiaries: 300,
    beneficiariesTarget: 300,
    deadline: "2025-07-01",
    status: "completed",
    coverImage: "/images/campaigns/campaign-02.svg",
    supporters: 156,
    location: "Mathare, Nairobi",
  },
  {
    id: "tailor-equipment-fund",
    title: "Tailor Equipment Fund",
    slug: "tailor-equipment-fund",
    description:
      "Sewing machines and equipment for local tailors, expanding capacity to take on more work.",
    objective: "Equip 20 additional local tailors with working sewing machines.",
    target: 900000,
    raised: 210000,
    beneficiaries: 6,
    beneficiariesTarget: 20,
    deadline: "2026-04-30",
    status: "active",
    coverImage: "/images/campaigns/campaign-03.svg",
    supporters: 61,
    location: "Mathare, Nairobi",
  },
  {
    id: "youth-creative-space",
    title: "Youth Creative Space",
    slug: "youth-creative-space",
    description: "A dedicated room for music, art, and mentorship sessions for young people.",
    objective: "Fund the setup of a permanent youth creative space.",
    target: 2000000,
    beneficiariesTarget: 250,
    status: "upcoming",
    coverImage: "/images/campaigns/campaign-04.svg",
    location: "Mathare, Nairobi",
  },
];
