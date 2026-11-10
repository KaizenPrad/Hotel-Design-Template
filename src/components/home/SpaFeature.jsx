import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SmartImage from "@/components/ui/SmartImage";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/data/hotel";
import { treatments } from "@/data/spa";

export default function SpaFeature() {
  return (
    <section className="border-y border-line bg-ink-soft py-24 sm:py-28 lg:py-36">
      <div className="container-luxe">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Spa &amp; Wellness</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-lg mt-7 text-cream">
                Restore.
                <br />
                <span className="italic text-champagne">Reconnect. Renew.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="body-copy mt-6 max-w-md">
                Step away from the pace of the city and enter a sanctuary dedicated to balance,
                relaxation and wellbeing.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-8 divide-y divide-line border-y border-line">
                {treatments.map((treatment, index) => (
                  <li key={treatment.slug}>
                    <Link
                      to="/spa"
                      className="group flex items-center justify-between gap-4 py-3.5 transition-colors hover:text-champagne"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="text-[8px] tracking-widest text-gold/60">
                          0{index + 1}
                        </span>
                        <span className="text-[13px] text-cream transition-colors group-hover:text-champagne">
                          {treatment.name}
                        </span>
                      </span>
                      <span className="flex items-center gap-3">
                        <span className="text-[10px] uppercase tracking-wide2 text-sand/50">
                          {treatment.duration}
                        </span>
                        <ArrowUpRight className="h-3 w-3 text-sand/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" strokeWidth={1.5} />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.26}>
              <Button to="/spa" variant="outline" className="mt-8" arrow>
                Explore Spa
              </Button>
            </Reveal>
          </div>

          <Reveal className="relative lg:col-span-6 lg:col-start-7">
            <div className="relative ml-auto aspect-[4/5] w-[86%] overflow-hidden">
              <SmartImage
                src={images.massageAlt}
                alt="A calming massage treatment at the Luxe Haven Spa"
                sizes="(min-width: 1024px) 46vw, 80vw"
                className="h-full w-full"
                imgClassName="transition-transform duration-[1600ms] ease-luxe hover:scale-[1.04]"
              />
            </div>
            <div className="absolute -bottom-8 left-0 w-40 overflow-hidden border-[6px] border-ink-soft sm:w-52">
              <SmartImage
                src={images.spaPool}
                alt="Warm thermal pool and candlelight in the Luxe Haven spa"
                sizes="208px"
                className="aspect-[4/3]"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -right-3 -top-3 hidden h-28 w-28 border-r border-t border-gold/30 sm:block"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
