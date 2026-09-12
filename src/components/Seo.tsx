import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

const SITE_TITLE = "Ficha Uchi";
const BASE_URL = "https://www.fichauchi.org"; // PLACEHOLDER — replace with real domain

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function Seo({ title, description, path = "" }: SeoProps) {
  useEffect(() => {
    const fullTitle = title === SITE_TITLE ? title : `${title} — ${SITE_TITLE}`;
    document.title = fullTitle;

    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", `${BASE_URL}${path}`, "property");
    setMeta("og:image", `${BASE_URL}/images/hero/og-cover.svg`, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${BASE_URL}${path}`);
  }, [title, description, path]);

  return null;
}
