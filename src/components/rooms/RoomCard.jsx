import { Link } from "react-router-dom";
import { ArrowUpRight, BedDouble, Maximize2, Users } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import { money } from "@/utils/pricing";
import { cn } from "@/utils/cn";

export default function RoomCard({ room, index = 0, className, imageClassName }) {
  return (
    <Reveal delay={Math.min(index * 0.08, 0.24)} className={className}>
      <article className="group relative flex h-full flex-col border border-line/80 bg-surface/30 transition-all duration-500 ease-luxe hover:-translate-y-1 hover:border-gold/40 hover:bg-surface/60 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
        <Link
          to={`/rooms/${room.slug}`}
          className="absolute inset-0 z-20"
          aria-label={`View ${room.name}`}
        >
          <span className="sr-only">View {room.name}</span>
        </Link>

        <div className={cn("relative overflow-hidden", imageClassName ?? "aspect-[4/5]")}>
          <SmartImage
            src={room.image}
            alt={`${room.name} — ${room.shortDescription}`}
            sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 92vw"
            className="h-full w-full"
            imgClassName="transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.06]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95"
          />

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
            <span className="text-[9px] uppercase tracking-label text-cream/70">
              {room.collection}
            </span>
            {room.tags?.includes("signature") && (
              <span className="border border-gold/50 bg-ink/60 px-2.5 py-1 text-[8px] uppercase tracking-label text-champagne backdrop-blur">
                Signature
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-[1.65rem] leading-tight text-cream transition-colors duration-300 group-hover:text-champagne">
              {room.name}
            </h3>
            <ArrowUpRight
              aria-hidden="true"
              className="mt-1 h-4 w-4 shrink-0 text-sand/40 transition-all duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
              strokeWidth={1.3}
            />
          </div>

          <p className="mt-3 text-[13px] leading-relaxed text-sand/85">{room.shortDescription}</p>

          <ul className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-line/70 py-3 text-[10px] uppercase tracking-wide2 text-sand/70">
            <li className="inline-flex items-center gap-1.5">
              <Maximize2 aria-hidden="true" className="h-3 w-3 text-gold/60" strokeWidth={1.4} />
              {room.size} m²
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Users aria-hidden="true" className="h-3 w-3 text-gold/60" strokeWidth={1.4} />
              {room.guests} Guests
            </li>
            <li className="inline-flex items-center gap-1.5">
              <BedDouble aria-hidden="true" className="h-3 w-3 text-gold/60" strokeWidth={1.4} />
              {room.bedType}
            </li>
          </ul>

          <div className="mt-auto flex items-end justify-between gap-4 pt-5">
            <p>
              <span className="block text-[8px] uppercase tracking-label text-sand/50">From</span>
              <span className="mt-1 flex items-baseline gap-1.5">
                <span className="font-display text-2xl text-cream">{money(room.price)}</span>
                <span className="text-[10px] uppercase tracking-wide2 text-sand/50">/ night</span>
              </span>
            </p>
            <span className="inline-flex items-center gap-2 border-b border-transparent pb-0.5 text-[9px] font-medium uppercase tracking-wide2 text-champagne transition-colors duration-300 group-hover:border-gold/50">
              View Room
            </span>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
