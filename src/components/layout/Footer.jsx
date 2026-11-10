import { Link } from "react-router-dom";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import Emblem from "@/components/common/Emblem";
import SocialLinks from "@/components/common/SocialLinks";
import { hotel } from "@/data/hotel";

const exploreLinks = [
  { label: "Rooms & Suites", to: "/rooms" },
  { label: "Dining", to: "/dining" },
  { label: "Spa & Wellness", to: "/spa" },
  { label: "Experiences", to: "/experiences" },
  { label: "About", to: "/about" },
];

const serviceLinks = [
  { label: "Concierge", to: "/contact" },
  { label: "Events", to: "/events" },
  { label: "Private Dining", to: "/dining" },
  { label: "Airport Transfer", to: "/contact" },
  { label: "Contact", to: "/contact" },
];

const informationLinks = [
  { label: "Privacy Policy", to: "/information/privacy" },
  { label: "Terms & Conditions", to: "/information/terms" },
  { label: "Accessibility", to: "/information/accessibility" },
  { label: "FAQ", to: "/information/faq" },
];

function LinkColumn({ title, links }) {
  return (
    <div>
      <h2 className="text-[10px] font-medium uppercase tracking-label text-gold/90">{title}</h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="group inline-flex items-center gap-2 text-[13px] text-sand transition-colors duration-300 hover:text-cream"
            >
              {link.label}
              <ArrowUpRight
                className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-60"
                strokeWidth={1.4}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink">
      <div className="container-luxe pt-16 sm:pt-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.55fr_1fr_1fr_1fr_1.35fr] lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Emblem className="h-8 w-8 text-gold" />
              <div>
                <p className="font-display text-xl uppercase leading-none tracking-[0.24em] text-cream">
                  Luxe Haven
                </p>
                <p className="mt-1.5 text-[8px] uppercase tracking-[0.6em] text-sand/70">Hotel</p>
              </div>
            </div>
            <p className="mt-6 max-w-[30ch] text-sm leading-relaxed text-sand/80">
              Timeless hospitality in the heart of New York City.
            </p>
            <SocialLinks className="mt-7" />
          </div>

          <LinkColumn title="Explore" links={exploreLinks} />
          <LinkColumn title="Services" links={serviceLinks} />
          <LinkColumn title="Information" links={informationLinks} />

          <div>
            <h2 className="text-[10px] font-medium uppercase tracking-label text-gold/90">Contact</h2>
            <address className="mt-5 space-y-3 text-[13px] not-italic leading-relaxed text-sand">
              <p>
                {hotel.address}
                <br />
                {hotel.city}
              </p>
              <p>
                <a href={hotel.phoneHref} className="transition-colors hover:text-cream">
                  {hotel.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${hotel.email}`} className="transition-colors hover:text-cream">
                  {hotel.email}
                </a>
              </p>
            </address>
            <p className="mt-5 text-[10px] uppercase tracking-wide2 text-sand/45">
              Concierge · 24 hours
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-line py-7 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] tracking-wide text-sand/55">© 2026 Luxe Haven Hotel</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {informationLinks.slice(0, 3).map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-[10px] uppercase tracking-wide2 text-sand/55 transition-colors hover:text-champagne"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 self-start text-[10px] uppercase tracking-wide2 text-sand/60 transition-colors hover:text-champagne sm:self-auto"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={1.4} />
          </button>
        </div>
      </div>

      <div className="border-t border-line/60 py-4">
        <p className="container-luxe text-center text-[9px] uppercase tracking-label text-sand/30">
          A portfolio demonstration · Not a real booking service
        </p>
      </div>
    </footer>
  );
}
