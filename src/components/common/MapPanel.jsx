import { ArrowUpRight } from "lucide-react";
import { hotel } from "@/data/hotel";
import { cn } from "@/utils/cn";

export default function MapPanel({ className, compact = false }) {
  return (
    <div className={cn("relative overflow-hidden border border-line bg-ink-soft", className)}>
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4">
        <span className="text-[9px] uppercase tracking-label text-gold">Midtown Manhattan</span>
        <span className="hidden text-[9px] uppercase tracking-wide2 text-sand/60 sm:block">
          40.7573° N · 73.9702° W
        </span>
      </div>

      <div className={cn("relative w-full", compact ? "h-[380px]" : "h-[470px] sm:h-[540px]")}>
        <svg
          viewBox="0 0 640 640"
          className="h-full w-full"
          role="img"
          aria-label="Stylised map showing Luxe Haven Hotel at 200 East 50th Street, between Fifth Avenue and the East River"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="mapVignette" cx="50%" cy="45%" r="75%">
              <stop offset="0%" stopColor="#11100F" stopOpacity="0" />
              <stop offset="100%" stopColor="#11100F" stopOpacity="0.85" />
            </radialGradient>
            <radialGradient id="markerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C6A267" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#C6A267" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="riverFade" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1a2024" stopOpacity="0" />
              <stop offset="35%" stopColor="#1a2024" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#161c20" />
            </linearGradient>
          </defs>

          <rect width="640" height="640" fill="#131210" />

          <g transform="translate(320 320) rotate(-21)">
            <rect x="-460" y="-460" width="920" height="920" fill="#151412" />

            <g stroke="#282420" strokeWidth="3.5">
              {Array.from({ length: 17 }, (_, i) => -460 + i * 58).map((x) => (
                <line key={`v-${x}`} x1={x} y1="-460" x2={x} y2="460" />
              ))}
              {Array.from({ length: 21 }, (_, i) => -460 + i * 46).map((y) => (
                <line key={`h-${y}`} x1="-460" y1={y} x2="460" y2={y} />
              ))}
            </g>

            <g stroke="#3a332c" strokeWidth="8" opacity="0.9">
              <line x1="-318" y1="-460" x2="-318" y2="460" />
              <line x1="-202" y1="-460" x2="-202" y2="460" />
              <line x1="-86" y1="-460" x2="-86" y2="460" />
              <line x1="30" y1="-460" x2="30" y2="460" />
              <line x1="146" y1="-460" x2="146" y2="460" />
            </g>

            <rect x="-318" y="-392" width="230" height="286" fill="#1c241e" stroke="#33422f" strokeWidth="1" />
            <text x="-286" y="-250" fill="#6e8271" fontSize="13" letterSpacing="4" transform="rotate(21 -286 -250)">
              CENTRAL PARK
            </text>
            <path d="M-250 -150c30 20 44 46 58 72s42 34 62 52" stroke="#465646" strokeWidth="1.5" fill="none" opacity="0.7" />
            <ellipse cx="-170" cy="-196" rx="26" ry="15" fill="#243027" stroke="#40513f" strokeWidth="1" />

            <path d="M214 -460 L460 -460 L460 460 L300 460 Z" fill="url(#riverFade)" />
            <path d="M230 -460 C250 -220 250 40 300 460" stroke="#2c3b42" strokeWidth="1.2" fill="none" opacity="0.8" />
            <text x="360" y="-160" fill="#5c7784" fontSize="11" letterSpacing="4" transform="rotate(90 360 -160)">
              EAST RIVER
            </text>

            <line x1="-460" y1="-20" x2="300" y2="-20" stroke="#C6A267" strokeOpacity="0.28" strokeWidth="2" />
            <line x1="-460" y1="26" x2="300" y2="26" stroke="#C6A267" strokeOpacity="0.12" strokeWidth="1" />
            <text x="60" y="-30" fill="#8d7b5f" fontSize="9" letterSpacing="3" transform="rotate(21 60 -30)">
              EAST 50TH STREET
            </text>
          </g>

          <g opacity="0.9">
            <circle cx="188" cy="238" r="3" fill="#8d8577" />
            <text x="200" y="242" fill="#8d8577" fontSize="10" letterSpacing="1.5">
              Rockefeller Center
            </text>
            <circle cx="150" cy="352" r="3" fill="#8d8577" />
            <text x="162" y="356" fill="#8d8577" fontSize="10" letterSpacing="1.5">
              St. Patrick&apos;s
            </text>
            <circle cx="478" cy="470" r="3" fill="#8d8577" />
            <text x="396" y="492" fill="#8d8577" fontSize="10" letterSpacing="1.5">
              Grand Central
            </text>
            <text x="112" y="530" fill="#6f6759" fontSize="9" letterSpacing="3">
              FIFTH AVENUE
            </text>
            <text x="452" y="206" fill="#6f6759" fontSize="9" letterSpacing="3">
              MADISON AVE
            </text>
          </g>

          <g>
            <circle cx="320" cy="320" r="74" fill="url(#markerGlow)" />
            <circle cx="320" cy="320" r="7" fill="#D8BE8B" />
            <circle cx="320" cy="320" r="13" fill="none" stroke="#C6A267" strokeWidth="1" strokeOpacity="0.7" />
            <circle cx="320" cy="320" r="20" fill="none" stroke="#C6A267" strokeWidth="1" strokeOpacity="0.3">
              <animate attributeName="r" values="16;46" dur="3.8s" repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" values="0.45;0" dur="3.8s" repeatCount="indefinite" />
            </circle>
          </g>

          <g>
            <path d="M342 306 L366 282" stroke="#C6A267" strokeWidth="0.8" strokeOpacity="0.6" />
            <rect x="366" y="248" width="196" height="58" fill="#11100F" fillOpacity="0.94" stroke="#C6A267" strokeOpacity="0.45" />
            <text x="382" y="270" fill="#C6A267" fontSize="9" letterSpacing="3.4">
              LUXE HAVEN
            </text>
            <text x="382" y="288" fill="#F5F0E8" fontSize="11" letterSpacing="0.6">
              200 East 50th Street
            </text>
          </g>

          <g transform="translate(566 92)" fill="none" stroke="#B8AEA0" strokeOpacity="0.65">
            <circle r="19" strokeWidth="0.8" />
            <path d="M0 -12 L5 5 L0 2 L-5 5 Z" fill="#C6A267" stroke="none" />
            <text x="0" y="-26" textAnchor="middle" fill="#B8AEA0" fontSize="9" letterSpacing="2" stroke="none">
              N
            </text>
          </g>

          <g transform="translate(42 590)">
            <line x1="0" y1="0" x2="86" y2="0" stroke="#8d8577" strokeWidth="1" />
            <line x1="0" y1="-4" x2="0" y2="4" stroke="#8d8577" strokeWidth="1" />
            <line x1="86" y1="-4" x2="86" y2="4" stroke="#8d8577" strokeWidth="1" />
            <text x="0" y="18" fill="#6f6759" fontSize="9" letterSpacing="2">
              0 — 200 M
            </text>
          </g>

          <rect width="640" height="640" fill="url(#mapVignette)" pointerEvents="none" />
        </svg>
      </div>

      <div className="flex flex-col gap-4 border-t border-line px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[9px] uppercase tracking-label text-sand/60">The Hotel</p>
          <p className="mt-1.5 font-display text-base text-cream">
            {hotel.address}, {hotel.city}
          </p>
        </div>
        <a
          href={hotel.directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-wide2 text-champagne transition-colors hover:text-gold"
        >
          Get Directions
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.6} />
        </a>
      </div>
    </div>
  );
}
