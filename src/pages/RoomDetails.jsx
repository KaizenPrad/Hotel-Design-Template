import { Link, useParams } from "react-router-dom";
import { BedDouble, ChevronRight, Eye, Maximize2, Users } from "lucide-react";
import RoomGallery from "@/components/rooms/RoomGallery";
import RoomReserveCard from "@/components/rooms/RoomReserveCard";
import RoomCard from "@/components/rooms/RoomCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { getRoomBySlug, rooms } from "@/data/rooms";
import { usePageMeta } from "@/hooks/usePageMeta";
import { money } from "@/utils/pricing";
import NotFound from "./NotFound";

export default function RoomDetails() {
  const { slug } = useParams();
  const room = getRoomBySlug(slug);

  usePageMeta(
    room ? `Luxe Haven | ${room.name}` : "Luxe Haven | Room Not Found",
    room?.description ?? "Explore the rooms and suites at Luxe Haven Hotel in New York City.",
  );

  if (!room) return <NotFound />;

  const related = rooms
    .filter((item) => item.slug !== room.slug)
    .sort((a, b) => {
      const aMatch = a.category === room.category ? 0 : 1;
      const bMatch = b.category === room.category ? 0 : 1;
      return aMatch - bMatch;
    })
    .slice(0, 3);

  const facts = [
    { icon: Maximize2, label: `${room.size} m²` },
    { icon: Users, label: `${room.guests} Guests` },
    { icon: BedDouble, label: room.bedType },
    { icon: Eye, label: room.view },
  ];

  return (
    <>
      <section className="pt-24 sm:pt-28 lg:pt-32">
        <div className="container-luxe">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[9px] uppercase tracking-wide2 text-sand/45">
              <li>
                <Link to="/" className="transition-colors hover:text-champagne">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3 w-3" strokeWidth={1.2} />
              </li>
              <li>
                <Link to="/rooms" className="transition-colors hover:text-champagne">
                  Rooms &amp; Suites
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3 w-3" strokeWidth={1.2} />
              </li>
              <li aria-current="page" className="text-champagne/80">
                {room.name}
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid items-end gap-8 border-b border-line pb-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              <p className="text-[9px] uppercase tracking-label text-gold">{room.collection}</p>
              <h1 className="display-lg mt-4 text-cream">{room.name}</h1>
              <p className="body-copy mt-4 max-w-xl">{room.shortDescription}</p>
              <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                {facts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <li
                      key={fact.label}
                      className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wide2 text-sand/70"
                    >
                      <Icon aria-hidden="true" className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.4} />
                      {fact.label}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <p className="text-[9px] uppercase tracking-label text-sand/50">Rates from</p>
              <p className="mt-2 flex items-baseline gap-2 lg:justify-end">
                <span className="font-display text-4xl text-cream">{money(room.price)}</span>
                <span className="text-[10px] uppercase tracking-wide2 text-sand/55">/ night</span>
              </p>
              <a
                href="#reserve"
                className="group mt-4 inline-flex items-center gap-3 border border-gold bg-gold px-7 py-3.5 text-[10px] font-medium uppercase tracking-wide2 text-night transition-colors hover:bg-champagne"
              >
                {room.category === "suites" ? "Reserve This Suite" : "Reserve This Room"}
                <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.6} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-luxe pt-8">
        <RoomGallery room={room} />
      </section>

      <section className="container-luxe py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7 xl:col-span-8">
            <Reveal>
              <h2 className="font-display text-3xl text-cream sm:text-4xl">Room Overview</h2>
              <p className="body-copy mt-5 max-w-2xl">{room.description}</p>
              <div className="mt-8 grid gap-5 border-y border-line py-6 sm:grid-cols-3">
                {room.highlights.map((highlight, index) => (
                  <div key={highlight}>
                    <span className="text-[9px] tracking-widest text-gold/60">0{index + 1}</span>
                    <p className="mt-2 font-display text-lg leading-snug text-cream">{highlight}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">Amenities</h2>
              <ul className="mt-6 grid gap-x-8 gap-y-0 sm:grid-cols-2">
                {room.amenities.map((amenity) => (
                  <li
                    key={amenity}
                    className="flex items-center gap-3 border-b border-line/60 py-3 text-[13px] text-sand/85"
                  >
                    <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-gold/70" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              <Reveal>
                <h2 className="font-display text-2xl text-cream sm:text-3xl">What&apos;s Included</h2>
                <ul className="mt-5 space-y-3">
                  {room.included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[13px] leading-relaxed text-sand/80">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="font-display text-2xl text-cream sm:text-3xl">Policies</h2>
                <ul className="mt-5 space-y-3">
                  {room.policies.map((policy) => (
                    <li key={policy} className="flex items-start gap-3 text-[13px] leading-relaxed text-sand/70">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sand/40" />
                      {policy}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal className="mt-12 border border-line bg-surface/20 p-6 sm:p-8">
              <h2 className="font-display text-2xl text-cream">A note from the house</h2>
              <p className="mt-3 max-w-2xl text-[13px] leading-[1.9] text-sand/70">
                Should you need anything at all — a particular pillow, a table held late, a car at an
                unusual hour — a quiet word to the concierge is all it takes. We are at the desk
                around the clock.
              </p>
              <Button to="/contact" variant="bare" arrow className="mt-5">
                Contact the Concierge
              </Button>
            </Reveal>
          </div>

          <div id="reserve" className="scroll-mt-28 lg:col-span-5 xl:col-span-4">
            <p className="mb-4 text-[9px] uppercase tracking-label text-gold">Availability &amp; Rates</p>
            <RoomReserveCard room={room} />
            <div className="mt-5 border border-line/70 px-5 py-4 text-[11px] leading-relaxed text-sand/50">
              Rates shown are per room, per night, before 12% taxes and fees. This is a portfolio
              demonstration — no payment is taken and no real reservation is created.
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="You may also like"
            title="Related Accommodations"
            actions={
              <Button to="/rooms" variant="outline" arrow>
                View All Rooms
              </Button>
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <RoomCard key={item.slug} room={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
