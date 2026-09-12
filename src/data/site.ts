// Central place for organization facts referenced across the site.
// Replace placeholder values (marked below) with verified information
// before launch — nothing here should be treated as final.

export const site = {
  name: "Ficha Uchi",
  tagline: "Restoring dignity. Creating possibility.",
  founded: "2013",
  location: "Mathare, Nairobi, Kenya",
  email: "hello@fichauchi.org", // PLACEHOLDER — replace with verified contact
  partnershipsEmail: "partners@fichauchi.org", // PLACEHOLDER
  volunteerEmail: "volunteer@fichauchi.org", // PLACEHOLDER
  phone: "+254 700 000 000", // PLACEHOLDER — replace with verified number
  socials: {
    instagram: "https://www.instagram.com/fichauchi", // PLACEHOLDER — verify handle
    x: "https://x.com/FichaUchi", // PLACEHOLDER — verify handle
    facebook: "https://www.facebook.com/fichauchi", // PLACEHOLDER — verify handle
  },
  closingStatement: "Dignity is not a luxury.",
};

export const primaryNav = [
  { label: "Home", to: "/" },
  { label: "Our Work", to: "/work" },
  { label: "Impact", to: "/impact" },
  { label: "Stories", to: "/stories" },
  { label: "About", to: "/about" },
];

export const workMegaMenu = [
  { label: "Overview", to: "/work", description: "Everything Ficha Uchi does" },
  { label: "Uniforms & Dignity", to: "/work/uniforms", description: "Sourcing, tailoring, fitting" },
  { label: "Community Initiatives", to: "/work/community", description: "Drives, outreach, grassroots response" },
  { label: "Youth Development", to: "/work/youth", description: "Mentorship, arts, leadership" },
];

export const footerNav = [
  { label: "Our Work", to: "/work" },
  { label: "Impact", to: "/impact" },
  { label: "Stories", to: "/stories" },
  { label: "Gallery", to: "/gallery" },
  { label: "Timeline", to: "/timeline" },
  { label: "Campaigns", to: "/campaigns" },
  { label: "Get Involved", to: "/get-involved" },
  { label: "Partners", to: "/partners" },
  { label: "Transparency", to: "/transparency" },
  { label: "Contact", to: "/contact" },
];
