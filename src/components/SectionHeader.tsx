import type { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  action?: ReactNode;
}

export function SectionHeader({
  title,
  description,
  align = "left",
  tone = "light",
  action,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const textColor = tone === "dark" ? "text-cream-soft" : "text-charcoal";
  const descColor = tone === "dark" ? "text-cream-soft/70" : "text-charcoal/65";

  return (
    <div
      className={`flex flex-col gap-4 ${isCenter ? "items-center text-center" : "items-start"} ${
        action ? "md:flex-row md:items-end md:justify-between" : ""
      }`}
    >
      <div className={isCenter ? "max-w-2xl" : "max-w-2xl"}>
        <h2 className={`text-balance text-3xl font-medium leading-[1.1] md:text-4xl ${textColor}`}>
          {title}
        </h2>
        {description && (
          <p className={`mt-3 max-w-prose text-base leading-relaxed ${descColor}`}>{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
