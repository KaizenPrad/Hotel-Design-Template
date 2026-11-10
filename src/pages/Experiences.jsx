import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowUpRight, Check, Clock3 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SmartImage from "@/components/ui/SmartImage";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/common/CtaBand";
import InquiryModal from "@/components/common/InquiryModal";
import ExperienceCard from "@/components/home/ExperienceCard";
import { images } from "@/data/hotel";
import { experiences, getExperienceBySlug } from "@/data/experiences";
import { usePageMeta } from "@/hooks/usePageMeta";
import { cn } from "@/utils/cn";

const aspects = ["aspect-[4/5]", "aspect-[4/3]", "aspect-[4/5]", "aspect-[4/5]", "aspect-[4/3]", "aspect-[4/5]"];

export default function Experiences() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState("All");
  const [requested, setRequested] = useState(null);

  usePageMeta(
    "Luxe Haven | Curated Experiences",
    "Discover New York through the concierge at Luxe Haven — private city tours, rooftop dining, Broadway evenings, art visits and bespoke shopping.",
  );

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(experiences.map((item) => item.category)))],
    [],
  );

  const filtered = useMemo(
    () => (category === "All" ? experiences : experiences.filter((item) => item.category === category)),
    [category],
  );

  const active = getExperienceBySlug(searchParams.get("experience"));

  const openExperience = (experience) => {
    setSearchParams({ experience: experience.slug });
  };

  const closeExperience = () => {
    setSearchParams({}, { replace: true });
  };

  const requestExperience = () => {
    if (!active) return;
    const experience = active;
    closeExperience();
    setRequested(experience);
  };

  return (
    <>
      <PageHero
        eyebrow="Curated by our concierge"
        title={"The City,\nIn Your Hands"}
        subtitle="A private car, a table above the skyline, the quiet hour before the city wakes. We arrange the days you will remember."
        image={images.rooftopEvening}
        alt="The New York skyline at dusk, seen from a rooftop terrace"
        meta={[
          { label: "Experiences", value: "Six signatures" },
          { label: "Arranged by", value: "The concierge desk" },
          { label: "For", value: "Guests & visitors" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-luxe">
          <div className="grid gap-8 border-b border-line pb-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>The Concierge Desk</Eyebrow>
                <h2 className="display-md mt-5 text-cream">
                  Nothing is standard.
                  <br />
                  <span className="italic text-champagne">Everything is arranged.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
              <p className="body-copy text-[14px]">
                The experiences below are starting points. Tell us how you like to spend a day and we
                will build something around it — a table, a guide, a car, a quiet hour that belongs to
                no one else.
              </p>
            </Reveal>
          </div>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div
              className="no-scrollbar -mx-5 flex gap-6 overflow-x-auto px-5 sm:mx-0 sm:px-0"
              role="group"
              aria-label="Filter experiences"
            >
              {categories.map((item) => {
                const activeCategory = category === item;
                const count =
                  item === "All"
                    ? experiences.length
                    : experiences.filter((experience) => experience.category === item).length;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    aria-pressed={activeCategory}
                    className={cn(
                      "group relative shrink-0 pb-2 text-[9px] font-medium uppercase tracking-wide2 transition-colors duration-300",
                      activeCategory ? "text-champagne" : "text-sand/55 hover:text-cream",
                    )}
                  >
                    {item}
                    <span className={cn("ml-2 text-[8px]", activeCategory ? "text-gold/70" : "text-sand/30")}>
                      {count}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-0 -bottom-[1px] h-px bg-gold transition-opacity duration-300",
                        activeCategory ? "opacity-100" : "opacity-0 group-hover:opacity-40",
                      )}
                    />
                  </button>
                );
              })}
            </div>

            <p className="text-[10px] uppercase tracking-wide2 text-sand/40">
              Showing {filtered.length} of {experiences.length}
            </p>
          </div>

          <div
            key={category}
            className="mt-10 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((experience, index) => (
              <Reveal
                key={experience.slug}
                delay={Math.min(index * 0.06, 0.3)}
                className={index % 3 === 1 ? "md:mt-0 lg:mt-10" : ""}
              >
                <ExperienceCard
                  detailed
                  experience={experience}
                  aspectClass={aspects[index % aspects.length]}
                  onExplore={openExperience}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink-soft py-20 sm:py-24">
        <div className="container-luxe">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Something else entirely</Eyebrow>
              <h2 className="display-md mt-6 text-cream">
                Tell us what
                <br />
                <span className="italic text-champagne">you had in mind</span>
              </h2>
              <p className="body-copy mt-5 max-w-md">
                A proposal on a rooftop. A table for a birthday that has to be perfect. A guide who
                knows the jazz history of a single block. If it can be arranged in this city, our
                concierge will find a way.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Button to="/contact" size="lg" arrow>
                  Speak with the Concierge
                </Button>
                <a
                  href="tel:+12125551234"
                  className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-wide2 text-sand transition-colors hover:text-champagne"
                >
                  +1 (212) 555-1234
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.5}
                  />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] overflow-hidden border border-line">
                  <SmartImage
                    src={images.taxi}
                    alt="A yellow cab on a New York street at dusk"
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="h-full w-full"
                  />
                </div>
                <div className="mt-8 aspect-[3/4] overflow-hidden border border-line">
                  <SmartImage
                    src={images.museumAlt}
                    alt="A gallery interior in New York"
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="h-full w-full"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Make it yours"
        title="A City, Arranged"
        description="Add an experience to your stay, or ask us to build an itinerary around the way you like to travel."
        image={images.skyline}
        imageAlt="The New York skyline at blue hour"
        primary={
          <Button to="/contact" size="lg" arrow>
            Plan With the Concierge
          </Button>
        }
        secondary={
          <Button to="/booking" variant="outline" size="lg">
            Reserve Your Stay
          </Button>
        }
      />

      <Modal
        open={Boolean(active)}
        onClose={closeExperience}
        eyebrow={active?.category}
        title={active?.title ?? "Experience"}
        size="lg"
      >
        {active && (
          <div>
            <div className="relative aspect-[16/9] overflow-hidden border border-line">
              <SmartImage
                src={active.image}
                alt={active.title}
                sizes="(min-width: 640px) 720px, 100vw"
                className="h-full w-full"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-line pb-5">
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wide2 text-sand/60">
                <Clock3 aria-hidden="true" className="h-3.5 w-3.5 text-gold/70" strokeWidth={1.4} />
                {active.duration}
              </span>
              <span className="text-[10px] uppercase tracking-wide2 text-champagne/85">
                {active.price}
              </span>
              <span className="text-[10px] uppercase tracking-wide2 text-sand/45">
                Arranged by the concierge
              </span>
            </div>

            <p className="body-copy mt-5">{active.longDescription}</p>

            <h3 className="mt-7 text-[9px] uppercase tracking-label text-gold">What&apos;s included</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {active.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[12px] leading-relaxed text-sand/70"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/60"
                    strokeWidth={1.6}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-[10px] leading-relaxed text-sand/40">
                Experiences are subject to availability. This is a portfolio demonstration — no real
                booking is made.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={closeExperience} variant="outline">
                  Close
                </Button>
                <Button onClick={requestExperience} arrow>
                  Request This Experience
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>

      <InquiryModal
        open={Boolean(requested)}
        onClose={() => setRequested(null)}
        eyebrow="Concierge"
        title={requested ? requested.title : "Request an Experience"}
        description={
          requested
            ? `${requested.price} · ${requested.duration}. Tell us when you would like to go and our concierge will confirm the details.`
            : "Tell us which experience you would like and our concierge will confirm the details."
        }
        subject={requested ? `${requested.title} experience` : "Experience request"}
        cta="Request Experience"
        successTitle="Your experience is requested"
      />
    </>
  );
}
