import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

const variants = {
  primary:
    "border border-gold bg-gold text-night hover:border-champagne hover:bg-champagne",
  outline:
    "border border-white/25 bg-transparent text-cream hover:border-gold hover:text-champagne",
  soft: "border border-gold/40 bg-gold/5 text-champagne hover:border-gold hover:bg-gold/10",
  dark: "border border-line bg-night/60 text-cream hover:border-gold hover:text-champagne",
  bare: "border border-transparent px-0 text-cream hover:text-champagne",
};

const sizes = {
  sm: "px-4 py-2.5 text-[10px]",
  md: "px-6 py-3.5 text-[10px] sm:text-[11px]",
  lg: "px-8 py-[18px] text-[11px]",
};

export default function Button({
  children,
  to,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  ...props
}) {
  const classes = cn(
    "group/btn inline-flex items-center justify-center gap-3 font-sans font-medium uppercase tracking-wide2 transition-all duration-400 ease-luxe disabled:pointer-events-none disabled:opacity-40",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="h-3.5 w-3.5 transition-transform duration-400 ease-luxe group-hover/btn:translate-x-1"
          strokeWidth={1.5}
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}
