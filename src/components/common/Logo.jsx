import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";
import Emblem from "./Emblem";

export default function Logo({ className, compact = false, onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Luxe Haven Hotel — home"
      className={cn("group inline-flex flex-col items-center text-center", className)}
    >
      <Emblem className={cn("text-gold transition-colors duration-500 group-hover:text-champagne", compact ? "h-6 w-6" : "h-7 w-7 sm:h-8 sm:w-8")} />
      <span
        className={cn(
          "mt-1 font-display font-normal uppercase leading-none tracking-[0.28em] text-cream",
          compact ? "text-[13px]" : "text-[15px] sm:text-[18px]",
        )}
      >
        Luxe Haven
      </span>
      {!compact && (
        <span className="mt-1.5 text-[8px] font-medium uppercase tracking-[0.6em] text-sand/80">
          Hotel
        </span>
      )}
    </Link>
  );
}
