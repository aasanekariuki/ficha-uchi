import { Compass } from "lucide-react";
import { Seo } from "../components/Seo";
import { LinkButton } from "../components/Button";

export function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="This page doesn't exist on the Ficha Uchi site." path="/404" />
      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-ink px-6 text-center">
        <Compass size={32} className="text-gold-soft" strokeWidth={1.5} />
        <h1 className="mt-6 max-w-md text-balance font-display text-3xl font-medium text-cream-soft md:text-4xl">
          Looks like you've taken a wrong turn.
        </h1>
        <p className="mt-3 max-w-sm text-base leading-relaxed text-cream-soft/65">
          This page doesn't exist — but there's plenty of real work to see.
        </p>
        <LinkButton as="link" to="/" size="lg" className="mt-8">
          Back to Ficha Uchi
        </LinkButton>
      </section>
    </>
  );
}
