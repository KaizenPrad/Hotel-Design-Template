import { Link } from "react-router-dom";
import { ArrowUpRight, Clock3 } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import { cn } from "@/utils/cn";

export default function ExperienceCard({
  experience,
  className,
  aspectClass = "aspect-[4/5]",
  onExplore,
  detailed = false,
}) {
  if (detailed) {
    return (
      <article
        className={cn(
          "group flex h-full flex-col border border-line bg-surface/25 transition-colors duration-500 hover:border-gold/40",
          className,
        )}
      >
        <button
          type="button"
          onClick={() => onExplore?.(experience)}
          className={cn("relative w-full overflow-hidden text-left", aspectClass)}
          aria-label={`Explore ${experience.title}`}
        >
          <SmartImage
            src={experience.image}
            alt={experience.title}
            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 48vw, 92vw"
            className="h-full w-full"
            imgClassName="transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.05]"
          />
          <span className="absolute left-4 top-4 border border-white/20 bg-ink/60 px-2.5 py-1 text-[8px] uppercase tracking-label text-cream/80 backdrop-blur">
            {experience.category}
          </span>
        </button>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl leading-tight text-cream transition-colors group-hover:text-champagne">
              {experience.title}
            </h3>
            <span className="mt-1 shrink-0 text-[10px] uppercase tracking-wide2 text-champagne/80">
              {experience.price}
            </span>
          </div>
          <p className="mt-3 text-[12px] leading-relaxed text-sand/75">{experience.description}</p>
          <div className="mt-auto flex items-center justify-between gap-4 border-t border-line/70 pt-4">
            <span className="inline-flex items-center gap-2 text-[9px] uppercase tracking-wide2 text-sand/55">
              <Clock3 aria-hidden="true" className="h-3 w-3 text-gold/60" strokeWidth={1.4} />
              {experience.duration}
            </span>
            <button
              type="button"
              onClick={() => onExplore?.(experience)}
              className="group/btn inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-wide2 text-champagne transition-colors hover:text-gold"
            >
              Explore Experience
              <ArrowUpRight
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group relative flex min-h-[380px] flex-col justify-end overflow-hidden border border-line/60 sm:min-h-[440px]",
        className,
      )}
    >
      <SmartImage
        src={experience.image}
        alt={experience.title}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
        className="absolute inset-0 h-full w-full"
        imgClassName="transition-transform duration-[1600ms] ease-luxe group-hover:scale-[1.06]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/5 transition-opacity duration-500 group-hover:via-ink/55"
      />
      <div className="relative z-10 p-5 sm:p-6">
        <p className="text-[8px] uppercase tracking-label text-champagne/85">
          {experience.category} · {experience.duration}
        </p>
        <h3 className="mt-2.5 font-display text-2xl leading-tight text-cream sm:text-[1.75rem]">
          {experience.title}
        </h3>
        <p className="mt-2.5 max-w-[32ch] text-[12px] leading-relaxed text-cream/65">
          {experience.description}
        </p>
        <Link
          to={`/experiences?experience=${experience.slug}`}
          className="group/link mt-5 inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-wide2 text-cream transition-colors hover:text-champagne"
        >
          Explore
          <ArrowUpRight
            aria-hidden="true"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            strokeWidth={1.5}
          />
        </Link>
      </div>
      <Link
        to={`/experiences?experience=${experience.slug}`}
        className="absolute inset-0 z-20"
        aria-label={`Explore ${experience.title}`}
      />
    </article>
  );
}
