import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import InquiryModal from "@/components/common/InquiryModal";
import { diningInfo } from "@/data/dining";
import { images } from "@/data/hotel";

export default function DiningFeature() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <section className="py-24 sm:py-28 lg:py-36">
      <div className="container-luxe">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-14">
          <Reveal className="relative lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden">
              <SmartImage
                src={images.diningRoom}
                alt="The Haven Table restaurant at Luxe Haven Hotel, with warm lighting and intimate tables"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full"
                imgClassName="transition-transform duration-[1600ms] ease-luxe hover:scale-[1.04]"
              />
            </div>
            <div className="absolute -bottom-10 -right-3 hidden w-44 overflow-hidden border-[6px] border-ink sm:block lg:w-52">
              <SmartImage
                src={images.plating}
                alt="A beautifully plated seasonal dish at The Haven Table"
                sizes="208px"
                className="aspect-[3/4]"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 -z-10 hidden h-32 w-32 border-b border-l border-gold/30 sm:block"
            />
          </Reveal>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal>
              <Eyebrow>The Haven Table</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-lg mt-7 text-cream">
                Exceptional
                <br />
                <span className="italic text-champagne">Dining</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 font-display text-xl italic leading-relaxed text-sand/85">
                An intimate culinary experience inspired by New York.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="body-copy mt-5 max-w-md">
                Our kitchen works with the season and the Greenmarket, cooking the kind of food we
                want to eat at the end of a long day: precise, generous and quietly confident. The
                room seats forty-two. The wine list runs deep.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <dl className="mt-8 space-y-3.5 border-y border-line py-6 text-[12px]">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-[9px] uppercase tracking-label text-sand/60">Cuisine</dt>
                  <dd className="text-cream">{diningInfo.cuisine}</dd>
                </div>
                {diningInfo.hours.slice(0, 2).map((entry) => (
                  <div key={entry.label} className="flex items-baseline justify-between gap-4">
                    <dt className="text-[9px] uppercase tracking-label text-sand/60">{entry.label}</dt>
                    <dd className="text-cream">{entry.value}</dd>
                  </div>
                ))}
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-[9px] uppercase tracking-label text-sand/60">Dress</dt>
                  <dd className="text-cream">{diningInfo.dressCode}</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Button onClick={() => setInquiryOpen(true)} size="lg">
                  Reserve a Table
                </Button>
                <Link
                  to="/dining"
                  className="group inline-flex items-center gap-2 text-[9px] uppercase tracking-wide2 text-sand transition-colors hover:text-champagne"
                >
                  Explore the Restaurant
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <InquiryModal
        open={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        eyebrow="The Haven Table"
        title="Reserve a Table"
        description="Tell us when you would like to join us and our restaurant team will confirm your table personally."
        subject="Table reservation"
        cta="Request Table"
      />
    </section>
  );
}
