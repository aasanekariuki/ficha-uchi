import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";
type Size = "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-blue text-cream-soft hover:bg-blue-bright",
  secondary: "bg-charcoal text-cream-soft hover:bg-ink",
  ghost: "bg-transparent text-charcoal hover:bg-charcoal/5 border border-charcoal/20",
  "outline-light": "bg-transparent text-cream-soft border border-cream-soft/50 hover:bg-cream-soft/10",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex items-center gap-2 font-medium tracking-tight transition-colors duration-200 ease-editorial focus-visible:outline-2 whitespace-nowrap";

interface ButtonProps extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  as?: "button";
}
interface LinkProps extends BaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  as: "link";
  to: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", icon, iconPosition = "right", children, className = "", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={`${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
});

export function LinkButton({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  children,
  to,
  className = "",
  ...props
}: LinkProps) {
  return (
    <Link
      to={to}
      className={`${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </Link>
  );
}
