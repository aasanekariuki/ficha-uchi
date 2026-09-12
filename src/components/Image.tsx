import { useState } from "react";
import { ImageOff } from "lucide-react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  aspect?: string; // e.g. "aspect-[4/3]"
  eager?: boolean;
}

export function Img({ src, alt, className = "", caption, aspect = "aspect-[4/3]", eager = false }: ImageProps) {
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className={`relative overflow-hidden bg-cream-deep ${aspect} ${className}`}>
      {!errored ? (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-charcoal/40">
          <ImageOff size={28} strokeWidth={1.5} aria-hidden="true" />
          <span className="text-xs">Image unavailable</span>
        </div>
      )}
      {!loaded && !errored && (
        <div className="absolute inset-0 animate-pulse bg-cream-deep" aria-hidden="true" />
      )}
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-4 py-3 text-xs text-cream-soft">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
