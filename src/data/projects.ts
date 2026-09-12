import type { Project } from "../types";

// PLACEHOLDER DATA — descriptions are written in Ficha Uchi's plausible
// voice based on the product brief, but specific dates, figures and
// locations should be verified before publishing.

export const projects: Project[] = [
  {
    id: "uniforms",
    title: "Uniforms & Dignity",
    slug: "uniforms",
    category: "uniforms",
    summary: "Properly fitted school uniforms, sourced and tailored locally, and repaired uniforms restored to wearable condition.",
    description:
      "A torn or outgrown uniform can be reason enough for a child to stay home. We work with schools and families to identify need, source fabric, and route work to Mathare tailors who produce and repair uniforms to a proper fit.",
    location: "Mathare & surrounding communities, Nairobi",
    date: "Ongoing since 2013",
    status: "active",
    coverImage: "/images/uniforms/uniforms-1.jpg",
    images: [
      "/images/uniforms/uniforms-1.jpg",
      "/images/uniforms/uniforms-1.jpg",
      "/images/uniforms/uniforms-2.jpg",
      "/images/uniforms/uniforms-05.svg",
    ],
    impact: [
      { label: "Uniforms distributed or repaired", value: "10,000+" },
      { label: "Tailors engaged", value: "200+" },
    ],
    cta: { label: "See how it works", href: "/work/uniforms" },
  },
  {
    id: "community",
    title: "Community Initiatives",
    slug: "community",
    category: "community",
    summary: "Grassroots initiatives responding to immediate community needs — food, clothing, and coordinated outreach.",
    description:
      "Beyond uniforms, we respond to what a community is facing in a given season — a food shortage, a clothing gap, an urgent family need — by mobilizing volunteers, well-wishers and local networks quickly and directly.",
    location: "Mathare & surrounding communities, Nairobi",
    date: "Ongoing",
    status: "active",
    coverImage: "https://scontent.fmba5-2.fna.fbcdn.net/v/t1.6435-9/89560862_1655198631285960_5585701102700986368_n.jpg?stp=dst-jpg_tt6&cstp=mx1728x1152&ctp=s1728x1152&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kwX1qraf7MgQ7kNvwF27MXS&_nc_oc=AdqV4psPlOy3KeAxiyKvFkFXFn_jds2eASRjTWZao9lAneePvTZ9OAtYorqcDXpYd3s&_nc_zt=23&_nc_ht=scontent.fmba5-2.fna&_nc_gid=HCcftLpMC-ZQ5PV3nEowzw&_nc_ss=7b289&oh=00_AQKkw_g5KDCFGMhY1bAjYoqhpjYw6Nurvon6JYIT8JI2Jw&oe=6ACD1500",
    images: [
      "/images/community/community-02.svg",
      "/images/community/community-03.svg",
      "/images/community/community-04.svg",
    ],
    impact: [{ label: "Communities reached", value: "12" }],
    cta: { label: "Explore community work", href: "/work/community" },
  },
  {
    id: "youth",
    title: "Youth Development",
    slug: "youth",
    category: "youth",
    summary: "Mentorship, creative programs, community spaces, and opportunities for young people to grow and lead.",
    description:
      "Dignity extends past the classroom door. We support youth spaces, mentorship relationships, and creative programs — music, art, leadership — that give young people room to build confidence and direction.",
    location: "Mathare, Nairobi",
    date: "Ongoing",
    status: "active",
    coverImage: "https://scontent.fmba5-2.fna.fbcdn.net/v/t1.6435-9/89561938_1655196207952869_1403046136339496960_n.jpg?stp=dst-jpg_tt6&cstp=mx1000x667&ctp=s1000x667&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bM3nBhwSo6oQ7kNvwHDhOnz&_nc_oc=AdrmJL9Gvuy3QSQRwTfQbB7sMMO7MGOim0GzCWV_-_d2aeffIPZoBtXSDc-LGU1MyHI&_nc_zt=23&_nc_ht=scontent.fmba5-2.fna&_nc_gid=5128cuzhzUFwmLK60OGrow&_nc_ss=7b289&oh=00_AQI75R9KiLI_tiXIA8tMSUVWlcUNP8SWqR4v3gcrArJctQ&oe=6ACD0E77",
    images: [
      "/images/youth/youth-02.svg",
      "/images/youth/youth-03.svg",
      "/images/youth/youth-04.svg",
    ],
    impact: [{ label: "Young people in active programs", value: "300+" }],
    cta: { label: "See youth programs", href: "/work/youth" },
  },
  {
    id: "empowerment",
    title: "Local Empowerment",
    slug: "empowerment",
    category: "empowerment",
    summary: "Working with local tailors and community members to create real, ongoing economic opportunity.",
    description:
      "Every uniform we fund is also work for a Mathare tailor. We built the model this way deliberately: support should circulate inside the community, not just pass through it.",
    location: "Mathare, Nairobi",
    date: "Ongoing",
    status: "active",
    coverImage: "https://scontent.fmba5-2.fna.fbcdn.net/v/t1.6435-9/36002425_1132073550265140_5658045871137226752_n.jpg?stp=dst-jpg_tt6&cstp=mx720x480&ctp=s720x480&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=C0mDsXTnB2UQ7kNvwFyhrYf&_nc_oc=Adr2n_4Bn5ep20BgkS3pS2crerRno43H3Futgct_B4VXjp2AiJsGVKXvd12D0zDp2B0&_nc_zt=23&_nc_ht=scontent.fmba5-2.fna&_nc_gid=HMXUM88LyyVmDjIXABxSFw&_nc_ss=7b289&oh=00_AQK4p2RwQ-dV0TqASVt-iB653GCnLg7nq5F_Lnx9J-pMkw&oe=6ACC8974",
    images: ["/images/community/community-01.svg", "/images/uniforms/uniforms-02.svg"],
    impact: [{ label: "Tailors with recurring work", value: "200+" }],
    cta: { label: "Learn about the model", href: "/about" },
  },
];
