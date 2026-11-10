import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/data/hotel";

const worlds = [
  {
    eyebrow: "The Haven Table",
    title: "Exceptional Dining",
    description: "Seasonal cuisine, curated wines and unforgettable evenings.",
    cta: "Discover Dining",
    to: "/dining",
    image: images.restaurantPortrait,
    alt: "Candlelit dining room at The Haven Table, Luxe Haven Hotel",
  },
  {
    eyebrow: "The Spa at Luxe Haven",
    title: "Luxury Spa",
    description:
      "Restore, reconnect and slow down in a sanctuary designed for complete relaxation.",
    cta: "Explore the Spa",
    to: "/spa",
    image: images.spaInterior,
    alt: "Warm, softly lit spa interior with natural stone and candlelight",
  },
  {
    eyebrow: "Curated by Our Concierge",
    title: "Curated Experiences",
    description:
      "Discover New York through private experiences created exclusively for our guests.",
    cta: "Explore Experiences",
    to: "/experiences",
    image: images.rooftopEvening,
    alt: "New York City skyline at dusk seen from a rooftop terrace",
  },
];

export default function WorldCards() {
  return (
    <section className="border-t border-line py-24 sm:py-28 lg:py-32">
      <div className="container-luxe">
        <div className="grid gap-4 md:grid-cols-3">
          {worlds.map((world, index) => (
            <Reveal key={world.title} delay={index * 0.1}>
              <article className="group relative flex min-h-[440px] flex-col justify-end overflow-hidden border border-line/60 sm:min-h-[520px]">
                <SmartImage
                  src={world.image}
                  alt={world.alt}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="absolute inset-0 h-full w-full"
                  imgClassName="transition-transform duration-[1600ms] ease-luxe group-hover:scale-[1.06]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10 transition-opacity duration-500 group-hover:from-ink group-hover:via-ink/55"
                />
                <div className="relative z-10 p-6 sm:p-7">
                  <p className="text-[8px] uppercase tracking-label text-champagne/85">
                    {world.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-cream sm:text-[2.1rem]">
                    {world.title}
                  </h3>
                  <p className="mt-3 max-w-[30ch] text-[12px] leading-relaxed text-cream/70">
                    {world.description}
                  </p>
                  <span className="mt-5 block h-px w-full bg-white/15" aria-hidden="true" />
                  <Link
                    to={world.to}
                    className="group/link mt-5 inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-wide2 text-cream transition-colors hover:text-champagne"
                  >
                    {world.cta}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      strokeWidth={1.5}
                    />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
