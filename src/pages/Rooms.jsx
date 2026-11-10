import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import RoomCard from "@/components/rooms/RoomCard";
import CtaBand from "@/components/common/CtaBand";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/data/hotel";
import { rooms } from "@/data/rooms";
import { usePageMeta } from "@/hooks/usePageMeta";
import { cn } from "@/utils/cn";

const filters = [
  { id: "all", label: "All" },
  { id: "rooms", label: "Rooms" },
  { id: "suites", label: "Suites" },
  { id: "city-view", label: "City View" },
  { id: "signature", label: "Signature" },
];

export default function Rooms() {
  const [filter, setFilter] = useState("all");

  usePageMeta(
    "Luxe Haven | Rooms & Suites",
    "Explore the rooms and suites at Luxe Haven Hotel — from warm Deluxe Rooms to the panoramic Signature Suite in Midtown Manhattan.",
  );

  const filteredRooms = useMemo(() => {
    if (filter === "all") return rooms;
    if (filter === "rooms" || filter === "suites") {
      return rooms.filter((room) => room.category === filter);
    }
    return rooms.filter((room) => room.tags.includes(filter));
  }, [filter]);

  return (
    <>
      <PageHero
        eyebrow="Accommodation"
        title="Rooms & Suites"
        subtitle="Spaces designed for deep rest, effortless comfort and quiet luxury."
        image={images.roomCity}
        alt="A luxurious guest room at Luxe Haven with city views and warm evening light"
        meta={[
          { label: "Accommodations", value: "96 rooms & suites" },
          { label: "Starting from", value: "$420 / night" },
          { label: "Location", value: "East 50th Street" },
        ]}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-luxe">
          <div className="flex flex-col gap-5 border-b border-line pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2.5">
              <SlidersHorizontal aria-hidden="true" className="h-3.5 w-3.5 text-gold/70" strokeWidth={1.4} />
              <span className="text-[9px] uppercase tracking-label text-sand/55">Filter</span>
            </div>

            <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0" role="group" aria-label="Filter accommodations">
              {filters.map((item) => {
                const active = filter === item.id;
                const count =
                  item.id === "all"
                    ? rooms.length
                    : ["rooms", "suites"].includes(item.id)
                      ? rooms.filter((room) => room.category === item.id).length
                      : rooms.filter((room) => room.tags.includes(item.id)).length;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFilter(item.id)}
                    aria-pressed={active}
                    className={cn(
                      "shrink-0 border px-4 py-2.5 text-[9px] font-medium uppercase tracking-wide2 transition-colors duration-300",
                      active
                        ? "border-gold bg-gold text-night"
                        : "border-line text-sand hover:border-gold/50 hover:text-champagne",
                    )}
                  >
                    {item.label}
                    <span className={cn("ml-2 text-[8px]", active ? "text-night/50" : "text-sand/35")}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-[10px] uppercase tracking-wide2 text-sand/45">
              Showing {filteredRooms.length} of {rooms.length} accommodations
            </p>
            <p className="hidden text-[10px] uppercase tracking-wide2 text-sand/45 sm:block">
              Rates include breakfast
            </p>
          </div>

          <div key={filter} className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredRooms.map((room, index) => (
              <RoomCard key={room.slug} room={room} index={index} />
            ))}
          </div>

          {filteredRooms.length === 0 && (
            <div className="mt-12 border border-line bg-surface/20 px-6 py-16 text-center">
              <p className="font-display text-2xl text-cream">Nothing matches that filter</p>
              <p className="body-copy mx-auto mt-3 max-w-sm text-sm">
                Try another collection, or speak with our reservations team for something tailored.
              </p>
              <Button onClick={() => setFilter("all")} variant="outline" className="mt-6">
                Show all accommodations
              </Button>
            </div>
          )}

          <Reveal className="mt-16 grid gap-6 border border-line bg-ink-soft p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
            <div>
              <p className="text-[9px] uppercase tracking-label text-gold">A personal recommendation</p>
              <h2 className="mt-3 font-display text-2xl text-cream sm:text-3xl">
                Not sure which room is right for you?
              </h2>
              <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-sand/70">
                Tell us how you like to travel and our reservations team will suggest the room — or
                the combination of rooms — that fits.
              </p>
            </div>
            <Button to="/contact" variant="outline" arrow>
              Ask the Concierge
            </Button>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Your stay"
        title="The city is waiting"
        description="Reserve directly with us for the best available rate, flexible cancellation and a warmer welcome."
        image={images.lobbyAlt}
        imageAlt="The elegant lobby of Luxe Haven Hotel"
        primary={
          <Button to="/booking" size="lg" arrow>
            Check Availability
          </Button>
        }
        secondary={
          <Button to="/experiences" variant="outline" size="lg">
            Explore Experiences
          </Button>
        }
      />
    </>
  );
}
