import { cn } from "@/utils/cn";

export default function Eyebrow({ children, className, align = "left", tone = "gold" }) {
  const colors = {
    gold: "text-gold",
    sand: "text-sand",
    dark: "text-night/70",
  };

  if (align === "center") {
    return (
      <div className={cn("flex items-center justify-center gap-4", className)}>
        <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
        <span className={cn("font-sans text-[10px] font-medium uppercase tracking-label sm:text-[11px]", colors[tone])}>
          {children}
        </span>
        <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className="h-px w-8 shrink-0 bg-gold/60" aria-hidden="true" />
      <span className={cn("font-sans text-[10px] font-medium uppercase tracking-label sm:text-[11px]", colors[tone])}>
        {children}
      </span>
    </div>
  );
}
