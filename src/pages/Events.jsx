import { useState } from "react";
import { ArrowUpRight, Check, Maximize2, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/common/CtaBand";
import InquiryModal from "@/components/common/InquiryModal";
import { hotel, images } from "@/data/hotel";
import { eventTypes, venues } from "@/data/venues";
import { usePageMeta } from "@/hooks/usePageMeta";

const process = [
  {
    title: "Tell us the occasion",
    description:
      "The guest list, the mood, the thing that matters most. We will ask a few good questions and listen to the answers.",
  },
  {
    title: "We propose",
    description:
      "A room, a menu, a run of the evening — written down, costed clearly, and adjusted until it feels right.",
  },
  {
    title: "You arrive",
    description:
      "Everything is already handled. Your only job is to be present for the people you have gathered.",
  },
];

export default function Events() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState(null);

  usePageMeta(
    "Luxe Haven | Events & Private Dining",
    "Host weddings, private dinners, celebrations and corporate events at Luxe Haven Hotel — a grand ballroom, a glass-roofed private dining room and a rooftop terrace.",
  );

  const enquire = (venue = null) => {
    setSelectedVenue(venue);
    setInquiryOpen(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Events & Private Dining"
        title={"Gatherings,\nConsidered"}
        subtitle="One event a day, so the house belongs to you. A ballroom, a glass-roofed table and a terrace above the city — each with a team that anticipates."
        image={images.ballroom}
        alt="The Grand Ballroom at Luxe Haven Hotel, with brass chandeliers and ivory silk drapes"
        meta={[
          { label: "Largest room", value: "500 standing" },
          { label: "Private dining", value: "24 seated" },
          { label: "Terrace", value: "120 standing" },
        ]}
      >
        <Reveal delay={0.34}>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Button onClick={() => enquire()} size="lg" arrow>
              Start Planning
            </Button>
            <a
              href="#venues"
              className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-wide2 text-cream/70 transition-colors hover:text-champagne"
            >
              Explore the Venues
              <ArrowUpRight
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </Reveal>
      </PageHero>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-luxe">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <Eyebrow>The Occasion</Eyebrow>
              <h2 className="display-md mt-6 text-cream">
                The house,
                <br />
                <span className="italic text-champagne">for a night</span>
              </h2>
              <p className="mt-6 font-display text-xl italic leading-relaxed text-sand/85">
                Some occasions deserve more than a room. They deserve a whole floor, and a team who
                knows when to disappear.
              </p>
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.08}>
                <p className="body-copy">
                  We host one wedding a day and a limited number of private events, which means the
                  hotel never feels like a venue. It feels like a house that has been opened for you —
                  flowers in the hall, the kitchen cooking only for your guests, the terrace lit for
                  the hour you asked for.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="body-copy mt-5">
                  From a board dinner for twelve to a reception for five hundred, our events team
                  builds the evening around the way you want it to feel. Menus are written in
                  conversation. Timings are generous. Nothing is standard.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6 text-[10px] uppercase tracking-wide2 text-sand/50">
                  <span className="inline-flex items-center gap-2">
                    <Users aria-hidden="true" className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.4} />
                    Dedicated events team
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Maximize2 aria-hidden="true" className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.4} />
                    Private entrance
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink-soft py-20 sm:py-24">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="What we host"
            title="Occasions, Large & Small"
            description="Weddings, dinners, launches and the milestones worth marking properly. If it matters to you, it matters to us."
          />

          <div className="mt-10 grid gap-x-12 md:grid-cols-2">
            {eventTypes.map((type, index) => (
              <Reveal key={type.name} delay={Math.min(index * 0.05, 0.2)}>
                <article className="group flex items-start gap-5 border-t border-line py-6">
                  <span className="mt-1 text-[9px] tracking-widest text-gold/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-cream transition-colors group-hover:text-champagne">
                      {type.name}
                    </h3>
                    <p className="mt-2 max-w-md text-[12px] leading-relaxed text-sand/65">
                      {type.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="venues" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="The Venues"
            title="Three Rooms, Three Moods"
            description="Each space has its own character and its own team. Visit before you decide — we would be glad to walk you through."
          />

          <div className="mt-14 space-y-16 lg:space-y-24">
            {venues.map((venue, index) => {
              const reversed = index % 2 === 1;
              return (
                <div key={venue.slug} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                  <Reveal
                    className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}
                    delay={0.04}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden border border-line">
                      <SmartImage
                        src={venue.image}
                        alt={venue.name}
                        sizes="(min-width: 1024px) 58vw, 100vw"
                        className="h-full w-full"
                        imgClassName="transition-transform duration-[1600ms] ease-luxe hover:scale-[1.03]"
                      />
                    </div>
                  </Reveal>

                  <Reveal
                    className={`lg:col-span-5 ${reversed ? "lg:order-1" : "lg:col-start-8"}`}
                    delay={0.1}
                  >
                    <p className="text-[9px] uppercase tracking-label text-gold">
                      Venue 0{index + 1}
                    </p>
                    <h3 className="mt-3 font-display text-3xl text-cream sm:text-4xl">{venue.name}</h3>
                    <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-y border-line py-4">
                      <div>
                        <dt className="text-[8px] uppercase tracking-label text-sand/45">Capacity</dt>
                        <dd className="mt-1 text-[12px] text-cream">{venue.capacity}</dd>
                      </div>
                      <div>
                        <dt className="text-[8px] uppercase tracking-label text-sand/45">Floor area</dt>
                        <dd className="mt-1 text-[12px] text-cream">{venue.size}</dd>
                      </div>
                    </dl>
                    <p className="mt-5 text-[13px] leading-[1.9] text-sand/70">{venue.description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {venue.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-[12px] leading-relaxed text-sand/60"
                        >
                          <Check
                            aria-hidden="true"
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/60"
                            strokeWidth={1.6}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button onClick={() => enquire(venue)} variant="outline" className="mt-7" arrow>
                      Enquire About This Venue
                    </Button>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface/20 py-20 sm:py-24">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="How it works"
            title="Three Steps, Then the Evening"
            description="We keep the process simple. You keep the occasion."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {process.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <article className="flex h-full flex-col border border-line bg-ink/30 p-6 sm:p-7">
                  <span className="text-[9px] tracking-widest text-gold/60">0{index + 1}</span>
                  <h3 className="mt-4 font-display text-2xl leading-tight text-cream">{step.title}</h3>
                  <p className="mt-3 text-[12px] leading-[1.9] text-sand/65">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex flex-col gap-5 border border-line bg-ink/40 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-[9px] uppercase tracking-label text-gold">The events team</p>
              <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-sand/70">
                Write to us with a date, a rough guest count and a sentence about the occasion. We will
                take it from there.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={`mailto:${hotel.email}`}
                className="text-[11px] text-cream transition-colors hover:text-champagne"
              >
                {hotel.email}
              </a>
              <a
                href={hotel.phoneHref}
                className="text-[11px] text-sand transition-colors hover:text-champagne"
              >
                {hotel.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Begin here"
        title="Tell Us the Occasion"
        description="A date, a guest count, a feeling you are after. Our events team will write back with a proposal."
        image={images.ballroomAlt}
        imageAlt="A candlelit event setting at Luxe Haven Hotel"
        primary={
          <Button onClick={() => enquire()} size="lg" arrow>
            Start Planning
          </Button>
        }
        secondary={
          <Button to="/contact" variant="outline" size="lg">
            Contact the Hotel
          </Button>
        }
      />

      <InquiryModal
        open={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        eyebrow="Events & Private Dining"
        title={selectedVenue ? selectedVenue.name : "Plan an Event"}
        description={
          selectedVenue
            ? `${selectedVenue.capacity}. Tell us about the occasion and our events team will be in touch with a proposal.`
            : "Tell us about the occasion — a date, a rough guest count and a sentence about what you have in mind."
        }
        subject={selectedVenue ? `${selectedVenue.name} event enquiry` : "Private event enquiry"}
        cta="Send Enquiry"
        successTitle="Your enquiry is with us"
      />
    </>
  );
}
