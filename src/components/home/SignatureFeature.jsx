import { ArrowUpRight, Maximize2, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SmartImage from "@/components/ui/SmartImage";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/data/hotel";

export default function SignatureFeature() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      <div className="container-luxe">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="relative lg:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/11] lg:aspect-[5/6]">
              <SmartImage
                src={images.bedroomView}
                alt="The Signature Suite at Luxe Haven, with panoramic windows overlooking the New York skyline"
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="h-full w-full"
                imgClassName="transition-transform duration-[1600ms] ease-luxe hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
              />
              <div className="absolute inset-x-5 bottom-5 flex flex-wrap items-end justify-between gap-4 border-t border-white/15 pt-4 sm:inset-x-7 sm:bottom-7">
                <div>
                  <p className="text-[8px] uppercase tracking-label text-champagne/80">The Signature Suite</p>
                  <p className="mt-1.5 font-display text-xl text-cream sm:text-2xl">A Room With a View</p>
                </div>
                <div className="flex items-center gap-4 text-[9px] uppercase tracking-wide2 text-cream/70">
                  <span className="inline-flex items-center gap-1.5">
                    <Maximize2 className="h-3 w-3" strokeWidth={1.4} /> 72 m²
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-3 w-3" strokeWidth={1.4} /> 2 guests
                  </span>
                </div>
              </div>
            </div>
            <span
              aria-hidden="true"
              className="absolute -left-3 -top-3 hidden h-24 w-24 border-l border-t border-gold/40 sm:block"
            />
          </Reveal>

          <div className="lg:col-span-5 lg:pl-4">
            <Reveal>
              <Eyebrow>The Signature Experience</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-lg mt-7 text-cream">
                A Room With
                <br />
                <span className="italic text-champagne">a View</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="body-copy mt-6 max-w-md">
                Wake to the rhythm of New York while surrounded by carefully selected materials,
                natural textures and quiet luxury.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-8 space-y-3 border-y border-line py-5 text-[11px] uppercase tracking-wide2 text-sand/65">
                <li className="flex items-center justify-between gap-4">
                  <span>Panoramic skyline</span>
                  <span className="text-champagne/70">12th floor</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <span>Private bar &amp; dressing room</span>
                  <span className="text-champagne/70">Included</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <span>Dedicated suite butler</span>
                  <span className="text-champagne/70">24 hours</span>
                </li>
              </ul>
            </Reveal>
            <Reveal delay={0.26}>
              <Button to="/rooms/signature-suite" size="lg" arrow className="mt-8">
                Discover the Signature Suite
              </Button>
            </Reveal>
            <Reveal delay={0.32}>
              <Link
                to="/rooms"
                className="mt-6 inline-flex items-center gap-2 text-[9px] uppercase tracking-wide2 text-sand/50 transition-colors hover:text-champagne"
              >
                Explore all suites
                <ArrowUpRight className="h-3 w-3" strokeWidth={1.5} />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
