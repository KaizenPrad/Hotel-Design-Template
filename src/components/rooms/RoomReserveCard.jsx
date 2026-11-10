import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CalendarDays, DoorOpen, Users } from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { addDays, formatDateShort, isValidStay, nightsBetween, toISODate, todayISO } from "@/utils/date";
import { money } from "@/utils/pricing";

export default function RoomReserveCard({ room }) {
  const { search, updateSearch, selectRoom } = useBooking();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const nights = nightsBetween(search.checkIn, search.checkOut);
  const rooms = Number(search.rooms) || 1;
  const subtotal = room.price * nights * rooms;
  const taxes = subtotal * 0.12;

  const handleReserve = (event) => {
    event.preventDefault();
    if (!isValidStay(search.checkIn, search.checkOut)) {
      setError("Please choose valid dates — check-out must be after check-in.");
      return;
    }
    if (room.guests * rooms < Number(search.guests)) {
      setError(`This room sleeps ${room.guests} guests. Please reduce guests or add a room.`);
      return;
    }
    setError("");
    selectRoom(room.slug);
    navigate(`/booking?room=${room.slug}`);
  };

  const today = todayISO();

  return (
    <aside className="border border-line bg-surface/40 lg:sticky lg:top-28">
      <div className="border-b border-line px-6 py-5">
        <p className="text-[9px] uppercase tracking-label text-gold">Reserve your stay</p>
        <p className="mt-3 flex items-baseline gap-2">
          <span className="font-display text-4xl text-cream">{money(room.price)}</span>
          <span className="text-[10px] uppercase tracking-wide2 text-sand/55">/ night</span>
        </p>
      </div>

      <form onSubmit={handleReserve} noValidate className="px-6 py-5">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="room-check-in" className="field-label">
              Check-in
            </label>
            <div className="relative">
              <CalendarDays aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gold/60" strokeWidth={1.4} />
              <input
                id="room-check-in"
                type="date"
                min={today}
                value={search.checkIn}
                onChange={(event) => {
                  const value = event.target.value;
                  const nextCheckOut =
                    value && value >= search.checkOut ? toISODate(addDays(value, 1)) : search.checkOut;
                  updateSearch({ checkIn: value, checkOut: nextCheckOut });
                  if (error) setError("");
                }}
                className="field-input pl-9 text-[12px]"
              />
            </div>
          </div>
          <div>
            <label htmlFor="room-check-out" className="field-label">
              Check-out
            </label>
            <div className="relative">
              <CalendarDays aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gold/60" strokeWidth={1.4} />
              <input
                id="room-check-out"
                type="date"
                min={search.checkIn ? toISODate(addDays(search.checkIn, 1)) : today}
                value={search.checkOut}
                onChange={(event) => {
                  updateSearch({ checkOut: event.target.value });
                  if (error) setError("");
                }}
                className="field-input pl-9 text-[12px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="room-guests" className="field-label">
              Guests
            </label>
            <div className="relative">
              <Users aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gold/60" strokeWidth={1.4} />
              <select
                id="room-guests"
                value={search.guests}
                onChange={(event) => updateSearch({ guests: Number(event.target.value) })}
                className="select-dark pl-9 text-[12px]"
              >
                {[1, 2, 3, 4, 5, 6].map((value) => (
                  <option key={value} value={value} className="bg-ink-soft">
                    {value} {value === 1 ? "guest" : "guests"}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="room-count" className="field-label">
              Rooms
            </label>
            <div className="relative">
              <DoorOpen aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gold/60" strokeWidth={1.4} />
              <select
                id="room-count"
                value={search.rooms}
                onChange={(event) => updateSearch({ rooms: Number(event.target.value) })}
                className="select-dark pl-9 text-[12px]"
              >
                {[1, 2, 3].map((value) => (
                  <option key={value} value={value} className="bg-ink-soft">
                    {value} {value === 1 ? "room" : "rooms"}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-5 space-y-2 border-t border-line/70 pt-4 text-[11px]">
          <div className="flex items-baseline justify-between gap-3 text-sand/65">
            <span>
              {money(room.price)} × {nights} {nights === 1 ? "night" : "nights"}
              {rooms > 1 ? ` × ${rooms}` : ""}
            </span>
            <span className="text-cream">{money(subtotal)}</span>
          </div>
          <div className="flex items-baseline justify-between gap-3 text-sand/65">
            <span>Taxes (12%)</span>
            <span className="text-cream">{money(taxes)}</span>
          </div>
          <div className="flex items-baseline justify-between gap-3 border-t border-line/70 pt-2.5">
            <span className="text-[9px] uppercase tracking-label text-sand/70">Total</span>
            <span className="font-display text-2xl text-champagne">{money(subtotal + taxes)}</span>
          </div>
        </div>

        {nights > 0 && (
          <p className="mt-3 text-[10px] tracking-wide text-sand/45">
            {formatDateShort(search.checkIn)} → {formatDateShort(search.checkOut)} · {nights}{" "}
            {nights === 1 ? "night" : "nights"}
          </p>
        )}

        {error && (
          <p role="alert" className="mt-3 text-[11px] leading-relaxed text-[#e6a08a]">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="group mt-5 flex w-full items-center justify-center gap-3 border border-gold bg-gold px-6 py-4 text-[10px] font-medium uppercase tracking-wide2 text-night transition-colors duration-300 hover:bg-champagne"
        >
          {room.category === "suites" ? "Reserve This Suite" : "Reserve This Room"}
          <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.6} />
        </button>

        <p className="mt-4 text-center text-[10px] leading-relaxed text-sand/45">
          Best rate guaranteed · Complimentary cancellation up to 48 hours before arrival.
        </p>
      </form>
    </aside>
  );
}
