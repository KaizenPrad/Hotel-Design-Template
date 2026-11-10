import { ArrowUpRight } from "lucide-react";
import { hotel } from "@/data/hotel";
import { cn } from "@/utils/cn";

export default function SocialLinks({ className, showArrow = true }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-x-4 gap-y-3", className)}>
      {hotel.social.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 whitespace-nowrap text-[9px] uppercase tracking-wide2 text-sand transition-colors hover:text-champagne"
          >
            {item.label}
            {showArrow && (
              <ArrowUpRight
                className="h-3 w-3 opacity-60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.4}
              />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
