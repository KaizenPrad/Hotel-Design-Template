import { Mail, MapPin, Phone } from "lucide-react";
import MapPanel from "@/components/common/MapPanel";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { hotel } from "@/data/hotel";

const details = [
  {
    icon: MapPin,
    label: "Address",
    value: `${hotel.address}, ${hotel.city}`,
    href: hotel.directionsUrl,
    external: true,
  },
  {
    icon: Phone,
    label: "Telephone",
    value: hotel.phone,
    href: hotel.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: hotel.email,
    href: `mailto:${hotel.email}`,
  },
];

export default function LocationSection() {
  return (
    <section className="py-24 sm:py-28 lg:py-36">
      <div className="container-luxe">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Our Location</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-lg mt-7 text-cream">
                At the Heart
                <br />
                <span className="italic text-champagne">of New York</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="body-copy mt-6 max-w-md">
                On East 50th Street, between the avenues — close enough to walk to the city&apos;s
                best rooms, far enough to sleep soundly. Grand Central is twelve minutes on foot.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-8 divide-y divide-line border-y border-line">
                {details.map((detail) => {
                  const Icon = detail.icon;
                  const content = (
                    <>
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-line text-gold/80">
                        <Icon aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.4} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[8px] uppercase tracking-label text-sand/45">
                          {detail.label}
                        </span>
                        <span className="mt-1 block break-words text-[13px] text-cream transition-colors group-hover:text-champagne">
                          {detail.value}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <div key={detail.label} className="py-4">
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.external ? "_blank" : undefined}
                          rel={detail.external ? "noreferrer" : undefined}
                          className="group flex items-center gap-4"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">{content}</div>
                      )}
                    </div>
                  );
                })}
              </dl>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Button href={hotel.directionsUrl} target="_blank" rel="noreferrer" size="lg" arrow>
                  Get Directions
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Contact the Hotel
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7">
            <MapPanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
