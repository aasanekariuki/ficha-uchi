// ---------------------------------------------------------------------------
// Ficha Uchi — shared data model
//
// These types describe the shape of content across the site. They are
// intentionally decoupled from any specific data source so that `src/data/*`
// files (currently static placeholder arrays) can later be swapped for
// requests to Supabase, Firebase, a custom API, or a CMS without touching
// any component or page.
// ---------------------------------------------------------------------------

export type WorkCategory =
  | "uniforms"
  | "community"
  | "youth"
  | "empowerment";

export type StoryCategory =
  | "learners"
  | "families"
  | "volunteers"
  | "tailors"
  | "youth"
  | "partners"
  | "team";

export type GalleryCategory =
  | "uniforms"
  | "schools"
  | "community"
  | "youth"
  | "events"
  | "volunteers";

export type CampaignStatus = "active" | "completed" | "upcoming";

export interface ImageAsset {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  location?: string;
  year?: string;
  category?: GalleryCategory;
}

export interface ImpactStat {
  id: string;
  value: string;
  label: string;
  detail: string;
  /** Set to false for numbers that are placeholders awaiting verification. */
  verified: boolean;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: WorkCategory;
  summary: string;
  description: string;
  location: string;
  date: string;
  status: CampaignStatus;
  coverImage: string;
  images: string[];
  impact?: { label: string; value: string }[];
  supporters?: number;
  cta?: { label: string; href: string };
}

export interface Story {
  id: string;
  title: string;
  slug: string;
  category: StoryCategory;
  excerpt: string;
  content: string[];
  coverImage: string;
  images?: string[];
  date: string;
  author?: string;
  /** Marks content that is a structural placeholder, not a real published story. */
  placeholder?: boolean;
}

export interface Campaign {
  id: string;
  title: string;
  slug: string;
  description: string;
  objective: string;
  target?: number;
  raised?: number;
  beneficiaries?: number;
  beneficiariesTarget?: number;
  deadline?: string;
  status: CampaignStatus;
  coverImage: string;
  supporters?: number;
  location?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  focus: string;
  photo: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  image?: string;
  verified: boolean;
}

export interface EcosystemNode {
  id: string;
  name: string;
  contribution: string;
}
