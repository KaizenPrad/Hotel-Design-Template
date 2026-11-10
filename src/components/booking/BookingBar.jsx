import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, ChevronDown, DoorOpen, Users } from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { addDays, isValidStay, toISODate, todayISO } from "@/utils/date";
import { cn } from "@/utils/cn";

function Cell({ label, icon: Icon, children, className, last = false }) {
  return (
    <div
      className={cn(
        "relative flex min-w-0 items-center gap-3 px-4 py-3.5 sm:px-5",
        !last && "border-b border-line lg:border-b-0 lg:border-r",
        className,
      )}
    >
      <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-gold/80" strokeWidth={1.4} />
      <div className="min-w-0 flex-1">
        <span className="block text-[8px] font-medium uppercase tracking-label text-sand/70">
          {label}
        </span>
        {children}
      </div>
    </div>
  );
}

function SelectChevron() {
  return (
    <ChevronDown
      aria-hidden="true"
      className="pointer-events-none absolute right-4 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gold/60"
      strokeWidth={1.5}
    />
  );
}

export default function BookingBar({ withRoomType = false, inline = false, onSubmit, className }) {
  const { search, updateSearch } = useBooking();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const today = todayISO();

  const handleCheckIn = (value) => {
    const nextCheckOut =
      value && value >= search.checkOut ? toISODate(addDays(value, 1)) : search.checkOut;
    updateSearch({ checkIn: value, checkOut: nextCheckOut });
    if (error) setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidStay(search.checkIn, search.checkOut)) {
      if (!search.checkIn || search.checkIn < today) {
        setError("Please choose a check-in date from today onwards.");
      } else {
        setError("Check-out must be after check-in.");
      }
      return;
    }
    setError("");
    if (onSubmit) {
      onSubmit();
      return;
    }
    navigate("/booking");
  };

  return (
    <div className={cn("relative", className)}>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="relative border border-white/15 bg-ink/95 shadow-[0_28px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        aria-label="Check room availability"
      >
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        />
        <div
          className={cn(
            "grid grid-cols-2",
            withRoomType ? "lg:grid-cols-[1.15fr_1.15fr_0.7fr_0.7fr_0.8fr_auto]" : "lg:grid-cols-[1.2fr_1.2fr_0.75fr_0.75fr_auto]",
          )}
        >
          <Cell label="Check-in" icon={CalendarDays}>
            <input
              type="date"
              value={search.checkIn}
              min={today}
              onChange={(event) => handleCheckIn(event.target.value)}
              aria-label="Check-in date"
              className="w-full min-w-0 bg-transparent p-0 text-[12px] font-medium text-cream focus:outline-none"
            />
          </Cell>

          <Cell label="Check-out" icon={CalendarDays} className="border-r-0 lg:border-r">
            <input
              type="date"
              value={search.checkOut}
              min={search.checkIn ? toISODate(addDays(search.checkIn, 1)) : today}
              onChange={(event) => {
                updateSearch({ checkOut: event.target.value });
                if (error) setError("");
              }}
              aria-label="Check-out date"
              className="w-full min-w-0 bg-transparent p-0 text-[12px] font-medium text-cream focus:outline-none"
            />
          </Cell>

          <Cell label="Guests" icon={Users}>
            <div className="relative">
              <select
                value={search.guests}
                onChange={(event) => updateSearch({ guests: Number(event.target.value) })}
                aria-label="Number of guests"
                className="w-full appearance-none bg-transparent pr-6 text-[13px] font-medium text-cream focus:outline-none"
              >
                {[1, 2, 3, 4, 5, 6].map((value) => (
                  <option key={value} value={value} className="bg-ink-soft text-cream">
                    {value} {value === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
              <SelectChevron />
            </div>
          </Cell>

          <Cell label="Rooms" icon={DoorOpen} className="border-r-0 lg:border-r">
            <div className="relative">
              <select
                value={search.rooms}
                onChange={(event) => updateSearch({ rooms: Number(event.target.value) })}
                aria-label="Number of rooms"
                className="w-full appearance-none bg-transparent pr-6 text-[13px] font-medium text-cream focus:outline-none"
              >
                {[1, 2, 3].map((value) => (
                  <option key={value} value={value} className="bg-ink-soft text-cream">
                    {value} {value === 1 ? "Room" : "Rooms"}
                  </option>
                ))}
              </select>
              <SelectChevron />
            </div>
          </Cell>

          {withRoomType && (
            <Cell label="Room type" icon={DoorOpen} last className="col-span-2 lg:col-span-1">
              <div className="relative">
                <select
                  value={search.roomType}
                  onChange={(event) => updateSearch({ roomType: event.target.value })}
                  aria-label="Room type"
                  className="w-full appearance-none bg-transparent pr-6 text-[13px] font-medium text-cream focus:outline-none"
                >
                  <option value="all" className="bg-ink-soft text-cream">
                    All
                  </option>
                  <option value="rooms" className="bg-ink-soft text-cream">
                    Rooms
                  </option>
                  <option value="suites" className="bg-ink-soft text-cream">
                    Suites
                  </option>
                </select>
                <SelectChevron />
              </div>
            </Cell>
          )}

          <div className="col-span-2 border-t border-line p-3 lg:col-span-1 lg:border-t-0 lg:border-l lg:p-2.5">
            <button
              type="submit"
              className="group inline-flex h-full min-h-[50px] w-full items-center justify-center gap-2.5 bg-gold px-6 text-[10px] font-medium uppercase tracking-wide2 text-night transition-colors duration-300 hover:bg-champagne lg:px-7"
            >
              {inline ? "Update Search" : "Check Availability"}
              <ChevronDown
                aria-hidden="true"
                className="hidden h-3.5 w-3.5 -rotate-90 transition-transform duration-300 group-hover:translate-x-0.5 lg:block"
                strokeWidth={1.7}
              />
            </button>
          </div>
        </div>
      </form>

      <div aria-live="polite" className="min-h-0">
        {error ? (
          <p className="mt-3 flex items-center gap-2 text-[11px] text-[#e6a08a]">
            <span className="inline-block h-1 w-1 rounded-full bg-[#e6a08a]" />
            {error}
          </p>
        ) : (
          <p className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-[10px] uppercase tracking-wide2 text-sand/45">
            <span>Best rate guaranteed</span>
            <span aria-hidden="true" className="hidden h-2.5 w-px bg-line sm:block" />
            <span>No booking fees</span>
            <span aria-hidden="true" className="hidden h-2.5 w-px bg-line sm:block" />
            <span>Flexible cancellation</span>
          </p>
        )}
      </div>
    </div>
  );
}
