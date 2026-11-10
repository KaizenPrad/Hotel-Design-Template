import { ArrowRight, BedDouble, Maximize2, Users } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import { money } from "@/utils/pricing";
import { cn } from "@/utils/cn";

export default function AvailabilityCard({
  room,
  nights,
  rooms,
  left,
  selected = false,
  onSelect,
}) {
  const subtotal = room.price * nights * rooms;

  return (
    <article
      className={cn(
        "group relative grid gap-0 overflow-hidden border bg-surface/25 transition-colors duration-400 sm:grid-cols-[220px_1fr] lg:grid-cols-[248px_1fr]",
        selected ? "border-gold/60 bg-surface/50" : "border-line hover:border-white/25",
      )}
    >
      <SmartImage
        src={room.image}
        alt={`${room.name} — ${room.shortDescription}`}
        sizes="(min-width: 640px) 248px, 100vw"
        className="aspect-[16/10] sm:aspect-auto sm:h-full"
        imgClassName="transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.05]"
      />

      <div className="flex flex-col gap-5 p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[8px] uppercase tracking-label text-gold/80">{room.collection}</p>
            <h3 className="mt-2 font-display text-2xl leading-tight text-cream">{room.name}</h3>
            <p className="mt-2 max-w-md text-[12px] leading-relaxed text-sand/80">
              {room.shortDescription}
            </p>
          </div>
          <span className="shrink-0 border border-line bg-ink/50 px-2.5 py-1.5 text-[8px] uppercase tracking-wide2 text-champagne/90">
            {left} {left === 1 ? "room" : "rooms"} left
          </span>
        </div>

        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] uppercase tracking-wide2 text-sand/65">
          <li className="inline-flex items-center gap-1.5">
            <Maximize2 aria-hidden="true" className="h-3 w-3 text-gold/60" strokeWidth={1.4} />
            {room.size} m²
          </li>
          <li className="inline-flex items-center gap-1.5">
            <Users aria-hidden="true" className="h-3 w-3 text-gold/60" strokeWidth={1.4} />
            Up to {room.guests}
          </li>
          <li className="inline-flex items-center gap-1.5">
            <BedDouble aria-hidden="true" className="h-3 w-3 text-gold/60" strokeWidth={1.4} />
            {room.bedType}
          </li>
          <li className="inline-flex items-center gap-1.5">
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold/50" />
            {room.view}
          </li>
        </ul>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-line/70 pt-4">
          <div>
            <p className="flex items-baseline gap-1.5">
              <span className="font-display text-2xl text-cream">{money(room.price)}</span>
              <span className="text-[10px] uppercase tracking-wide2 text-sand/50">/ night</span>
            </p>
            <p className="mt-1 text-[10px] tracking-wide text-sand/55">
              {money(subtotal)} for {nights} {nights === 1 ? "night" : "nights"} · before tax
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelect(room)}
            className={cn(
              "group/btn inline-flex items-center gap-2 border px-5 py-3 text-[9px] font-medium uppercase tracking-wide2 transition-colors duration-300",
              selected
                ? "border-gold bg-gold text-night hover:bg-champagne"
                : "border-gold/60 text-champagne hover:bg-gold hover:text-night",
            )}
            aria-pressed={selected}
          >
            {selected ? "Selected" : "Select Room"}
            <ArrowRight
              aria-hidden="true"
              className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5"
              strokeWidth={1.6}
            />
          </button>
        </div>
      </div>
    </article>
  );
}
