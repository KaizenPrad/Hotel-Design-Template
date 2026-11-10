import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SmartImage from "@/components/ui/SmartImage";
import { money } from "@/utils/pricing";
import { useBooking } from "@/context/BookingContext";

export default function BookingSummary({ formId = "guest-form", showConfirm = true }) {
  const { selectedRoom, search, nights, totals } = useBooking();

  return (
    <aside className="border border-line bg-surface/30" aria-label="Booking summary">
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <h2 className="text-[10px] font-medium uppercase tracking-label text-gold">Booking Summary</h2>
        <span className="text-[10px] uppercase tracking-wide2 text-sand/50">
          {nights} {nights === 1 ? "night" : "nights"}
        </span>
      </div>

      <div className="px-5 py-5">
        {selectedRoom ? (
          <>
            <div className="flex gap-4">
              <SmartImage
                src={selectedRoom.image}
                alt={selectedRoom.name}
                className="h-[74px] w-[92px] shrink-0"
                sizes="92px"
              />
              <div className="min-w-0">
                <p className="text-[8px] uppercase tracking-label text-gold/80">
                  {selectedRoom.collection}
                </p>
                <h3 className="mt-1.5 font-display text-xl leading-tight text-cream">
                  {selectedRoom.name}
                </h3>
                <p className="mt-1 text-[10px] uppercase tracking-wide2 text-sand/50">
                  {selectedRoom.bedType} · {selectedRoom.size} m²
                </p>
              </div>
            </div>

            <dl className="mt-6 space-y-3 border-t border-line/70 pt-5 text-[12px]">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-sand/65">Check-in</dt>
                <dd className="text-right text-cream">{formatSummaryDate(search.checkIn)}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-sand/65">Check-out</dt>
                <dd className="text-right text-cream">{formatSummaryDate(search.checkOut)}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-sand/65">Guests</dt>
                <dd className="text-cream">
                  {search.guests} · {search.rooms} {search.rooms === 1 ? "room" : "rooms"}
                </dd>
              </div>
            </dl>

            <dl className="mt-5 space-y-2.5 border-t border-line/70 pt-5 text-[12px]">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-sand/65">
                  {money(selectedRoom.price)} × {nights} {nights === 1 ? "night" : "nights"}
                  {search.rooms > 1 ? ` × ${search.rooms}` : ""}
                </dt>
                <dd className="text-cream">{money(totals.subtotal)}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-sand/65">Taxes &amp; fees (12%)</dt>
                <dd className="text-cream">{money(totals.taxes)}</dd>
              </div>
            </dl>

            <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-line pt-5">
              <span className="text-[10px] uppercase tracking-label text-sand/70">Total</span>
              <span className="font-display text-3xl text-champagne">{money(totals.total)}</span>
            </div>

            {showConfirm && (
              <button
                type="submit"
                form={formId}
                className="group mt-5 flex w-full items-center justify-center gap-3 border border-gold bg-gold px-6 py-4 text-[10px] font-medium uppercase tracking-wide2 text-night transition-colors duration-300 hover:bg-champagne"
              >
                Confirm Reservation
                <ArrowRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  strokeWidth={1.6}
                />
              </button>
            )}

            <p className="mt-4 text-[10px] leading-relaxed text-sand/45">
              No payment is required today. This is a portfolio demonstration — no real
              reservation will be created.
            </p>
          </>
        ) : (
          <div className="py-6 text-center">
            <p className="font-display text-xl text-cream">Your stay begins here</p>
            <p className="body-copy mx-auto mt-3 max-w-[24ch] text-[12px]">
              Choose your dates and select a room to see your full reservation summary.
            </p>
            <Link
              to="/rooms"
              className="mt-5 inline-flex items-center gap-2 text-[9px] uppercase tracking-wide2 text-champagne hover:text-gold"
            >
              Browse accommodations
              <ArrowRight className="h-3 w-3" strokeWidth={1.5} />
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}

function formatSummaryDate(iso) {
  if (!iso) return "—";
  const [year, month, day] = iso.split("-");
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(date);
}
