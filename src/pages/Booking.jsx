import { useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Home as HomeIcon,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import BookingBar from "@/components/booking/BookingBar";
import BookingSummary from "@/components/booking/BookingSummary";
import AvailabilityCard from "@/components/booking/AvailabilityCard";
import GuestDetailsForm from "@/components/booking/GuestDetailsForm";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { useBooking } from "@/context/BookingContext";
import { images } from "@/data/hotel";
import { rooms } from "@/data/rooms";
import { roomsForSearch, unitsLeft } from "@/utils/availability";
import { formatDate, isValidStay } from "@/utils/date";
import { money } from "@/utils/pricing";
import { usePageMeta } from "@/hooks/usePageMeta";

const trust = [
  { icon: ShieldCheck, text: "Best rate guaranteed when you book direct" },
  { icon: Clock3, text: "Complimentary cancellation up to 48 hours" },
  { icon: Sparkles, text: "A room upgrade when available" },
];

export default function Booking() {
  const {
    search,
    updateSearch,
    selectedRoom,
    selectRoom,
    nights,
    totals,
    confirmation,
    clearConfirmation,
  } = useBooking();
  const [params] = useSearchParams();
  const resultsRef = useRef(null);
  const formRef = useRef(null);

  usePageMeta(
    "Luxe Haven | Reservations",
    "Check availability and reserve your stay at Luxe Haven Hotel. Choose your dates, select a room and review your reservation.",
  );

  useEffect(() => {
    const roomParam = params.get("room");
    if (!roomParam && !params.get("checkIn")) return;

    if (confirmation) clearConfirmation();

    const patch = {};
    const checkIn = params.get("checkIn");
    const checkOut = params.get("checkOut");
    if (checkIn && checkOut && isValidStay(checkIn, checkOut)) {
      patch.checkIn = checkIn;
      patch.checkOut = checkOut;
    }
    const guests = Number(params.get("guests"));
    if (guests >= 1 && guests <= 6) patch.guests = guests;
    const roomCount = Number(params.get("rooms"));
    if (roomCount >= 1 && roomCount <= 3) patch.rooms = roomCount;
    if (Object.keys(patch).length > 0) updateSearch(patch);

    if (roomParam && rooms.some((room) => room.slug === roomParam)) {
      selectRoom(roomParam);
    }
    // Query parameters are applied once on entry.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const available = useMemo(() => roomsForSearch(search), [search]);

  const handleSelect = (room) => {
    selectRoom(room.slug);
    window.setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 140);
  };

  if (confirmation) {
    return (
      <>
        <PageHero
          eyebrow="Reservations"
          title={"Your stay is\nconfirmed."}
          subtitle="A confirmation is on its way to your inbox. We are already looking forward to your arrival."
          image={images.lobby}
          alt="The elegant lobby of Luxe Haven Hotel"
          compact
          align="center"
        />

        <section className="py-16 sm:py-20">
          <div className="container-luxe">
            <Reveal className="mx-auto max-w-3xl">
              <div className="border border-gold/35 bg-surface/30">
                <div className="border-b border-line px-6 py-8 text-center sm:px-10">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/[0.08]">
                    <CheckCircle2 aria-hidden="true" className="h-7 w-7 text-gold" strokeWidth={1.3} />
                  </span>
                  <p className="mt-6 text-[9px] uppercase tracking-label text-gold">
                    Reservation confirmed
                  </p>
                  <h2 className="mt-3 font-display text-3xl text-cream sm:text-4xl">
                    Thank you, {confirmation.guest.firstName}.
                  </h2>
                  <p className="mx-auto mt-3 max-w-md text-[13px] leading-relaxed text-sand/70">
                    Your reservation is held under the name{" "}
                    <span className="text-cream">
                      {confirmation.guest.firstName} {confirmation.guest.lastName}
                    </span>
                    . A confirmation email has been sent to {confirmation.guest.email}.
                  </p>
                  <p className="mt-5 inline-flex items-center gap-3 border border-line bg-ink/50 px-4 py-2.5">
                    <span className="text-[8px] uppercase tracking-label text-sand/45">Reference</span>
                    <span className="font-mono text-sm tracking-[0.18em] text-champagne">
                      {confirmation.code}
                    </span>
                  </p>
                </div>

                <div className="grid gap-6 px-6 py-8 sm:grid-cols-2 sm:px-10">
                  <div>
                    <p className="text-[8px] uppercase tracking-label text-sand/45">Accommodation</p>
                    <p className="mt-2 font-display text-xl text-cream">{confirmation.roomName}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-wide2 text-sand/50">
                      {confirmation.nights} {confirmation.nights === 1 ? "night" : "nights"} ·{" "}
                      {confirmation.search.guests} guests · {confirmation.search.rooms}{" "}
                      {confirmation.search.rooms === 1 ? "room" : "rooms"}
                    </p>
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-label text-sand/45">Dates</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-cream">
                      {formatDate(confirmation.search.checkIn)}
                      <br />
                      to {formatDate(confirmation.search.checkOut)}
                    </p>
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-label text-sand/45">Arrival</p>
                    <p className="mt-2 text-[13px] text-cream">Check-in from 3:00 PM</p>
                    <p className="mt-1 text-[11px] text-sand/50">200 East 50th Street, New York</p>
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-label text-sand/45">Total</p>
                    <p className="mt-2 font-display text-3xl text-champagne">
                      {money(confirmation.total)}
                    </p>
                    <p className="mt-1 text-[10px] text-sand/45">
                      {money(confirmation.subtotal)} room + {money(confirmation.taxes)} taxes
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 border-t border-line px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
                  <p className="text-[10px] leading-relaxed text-sand/40">
                    This is a portfolio demonstration. No payment has been taken and no real
                    reservation exists.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button onClick={clearConfirmation} variant="outline">
                      New Reservation
                    </Button>
                    <Button to="/" variant="primary" arrow>
                      Return Home
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] uppercase tracking-wide2 text-sand/45">
                <span className="inline-flex items-center gap-2">
                  <HomeIcon className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.4} />
                  Early check-in on request
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.4} />
                  Concierge available 24 hours
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.4} />
                  Complimentary cancellation
                </span>
              </div>
            </Reveal>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title={"Your Stay,\nConsidered"}
        subtitle="Choose your dates, find your room, and let us take care of the rest. Booking directly with us always brings the best available rate."
        image={images.booking}
        alt="A warmly lit suite at Luxe Haven Hotel prepared for arrival"
        compact
        meta={[
          { label: "Check-in", value: "From 3:00 PM" },
          { label: "Check-out", value: "By 12:00 PM" },
          { label: "Reservations", value: "24 hours a day" },
        ]}
      />

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-luxe">
          <BookingBar
            withRoomType
            inline
            onSubmit={() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7 xl:col-span-8">
              <div ref={resultsRef} className="scroll-mt-28">
                <div className="flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-label text-gold">Step 01</p>
                    <h2 className="mt-2 font-display text-3xl text-cream sm:text-4xl">
                      Available Accommodations
                    </h2>
                    <p className="mt-2 text-[11px] uppercase tracking-wide2 text-sand/50">
                      {formatDate(search.checkIn)} → {formatDate(search.checkOut)} · {nights}{" "}
                      {nights === 1 ? "night" : "nights"}
                    </p>
                  </div>
                  <p className="text-[10px] uppercase tracking-wide2 text-sand/45">
                    {available.length} {available.length === 1 ? "room" : "rooms"} available
                  </p>
                </div>

                {nights > 0 && available.length > 0 ? (
                  <div className="mt-6 space-y-4">
                    {available.map((room, index) => (
                      <Reveal key={room.slug} delay={Math.min(index * 0.05, 0.2)}>
                        <AvailabilityCard
                          room={room}
                          nights={nights}
                          rooms={Number(search.rooms)}
                          left={unitsLeft(room, search)}
                          selected={selectedRoom?.slug === room.slug}
                          onSelect={handleSelect}
                        />
                      </Reveal>
                    ))}
                  </div>
                ) : (
                  <div className="mt-6 border border-line bg-surface/20 px-6 py-12 text-center">
                    <p className="font-display text-2xl text-cream">No rooms match this search</p>
                    <p className="body-copy mx-auto mt-3 max-w-md text-sm">
                      Our largest rooms sleep three guests each. Try adding a room, reducing the party
                      size, or widening your dates.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                      <Button onClick={() => updateSearch({ roomType: "all", guests: 2 })}>
                        Reset search
                      </Button>
                      <Button to="/rooms" variant="outline">
                        Browse all rooms
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {selectedRoom && (
                <div ref={formRef} className="mt-12 scroll-mt-28">
                  <GuestDetailsForm key={selectedRoom.slug} />
                </div>
              )}
            </div>

            <div className="lg:col-span-5 xl:col-span-4">
              <div className="space-y-5 lg:sticky lg:top-28">
                <BookingSummary />
                <ul className="space-y-3 border border-line/70 px-5 py-5">
                  {trust.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.text} className="flex items-start gap-3 text-[11px] leading-relaxed text-sand/60">
                        <Icon aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/70" strokeWidth={1.4} />
                        {item.text}
                      </li>
                    );
                  })}
                </ul>
                <div className="flex items-center justify-between gap-3 border border-line/70 px-5 py-4">
                  <p className="text-[10px] leading-relaxed text-sand/45">
                    Prefer to speak with us?
                  </p>
                  <a
                    href="tel:+12125551234"
                    className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-wide2 text-champagne hover:text-gold"
                  >
                    Call
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-12 border-t border-line pt-6 text-[10px] leading-relaxed text-sand/35">
            This booking experience is a front-end portfolio demonstration using realistic mock data.
            No payment processing is implemented and no financial information is collected. Taxes are
            calculated at 12% of the room subtotal.
          </p>
        </div>
      </section>
    </>
  );
}
