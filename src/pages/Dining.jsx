import { useState } from "react";
import { ArrowUpRight, Clock3, MapPin, Wine } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/common/CtaBand";
import InquiryModal from "@/components/common/InquiryModal";
import { images } from "@/data/hotel";
import { diningInfo, menus, signatureDishes, wineList } from "@/data/dining";
import { usePageMeta } from "@/hooks/usePageMeta";
import { cn } from "@/utils/cn";

const menuOrder = ["breakfast", "lunch", "dinner", "private"];

export default function Dining() {
  const [activeMenu, setActiveMenu] = useState("dinner");
  const [inquiryOpen, setInquiryOpen] = useState(false);

  usePageMeta(
    "Luxe Haven | The Haven Table",
    "Dine at The Haven Table at Luxe Haven Hotel — seasonal New York cooking, an intimate room, a deep wine list and private dining beneath a glass roof.",
  );

  const menu = menus[activeMenu];

  return (
    <>
      <PageHero
        eyebrow="Dining"
        title={"The Haven\nTable"}
        subtitle="Seasonal cooking, low light and a room that hums quietly. Our restaurant is the heart of the house — and it is open to the city."
        image={images.diningRoom}
        alt="The Haven Table restaurant at Luxe Haven, with warm lighting, linen-covered tables and dark wood"
        meta={[
          { label: "Cuisine", value: diningInfo.cuisine },
          { label: "Dinner", value: "5:30 – 11:00 PM" },
          { label: "Dress", value: diningInfo.dressCode },
        ]}
      >
        <Reveal delay={0.34}>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Button onClick={() => setInquiryOpen(true)} size="lg" arrow>
              Reserve a Table
            </Button>
            <a
              href="#menus"
              className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-wide2 text-cream/70 transition-colors hover:text-champagne"
            >
              View the Menus
              <ArrowUpRight
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </Reveal>
      </PageHero>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-luxe">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <Eyebrow>A restaurant, quietly</Eyebrow>
              <h2 className="display-md mt-6 text-cream">
                Cooking with
                <br />
                <span className="italic text-champagne">the season</span>
              </h2>
              <p className="mt-6 font-display text-xl italic leading-relaxed text-sand/85">
                Forty-two seats, one kitchen, and a menu that changes with what the market gives us.
              </p>
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.08}>
                <p className="body-copy">
                  The Haven Table is a neighbourhood restaurant inside a hotel — which is to say it
                  belongs to the city as much as to our guests. Lunch is bright and unfussy. Dinner
                  slows down: candles on the tables, a little more butter, a wine list that rewards
                  curiosity.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="body-copy mt-5">
                  Our kitchen works closely with growers in the Hudson Valley and fishermen on the
                  coast. Nothing travels further than it needs to. Everything is cooked to be eaten,
                  not photographed — though we won&apos;t stop you.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                  <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
                  <div>
                    <p className="font-display text-lg text-cream">Adrien Vale</p>
                    <p className="mt-0.5 text-[9px] uppercase tracking-label text-sand/50">
                      Executive Chef
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="menus" className="scroll-mt-24 border-y border-line bg-ink-soft py-20 sm:py-24 lg:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Menus"
            title="What's on the Table"
            description="Menus change through the year. These are representative of the current season — tell us about allergies or preferences and the kitchen will take care of the rest."
            align="center"
          />

          <Reveal delay={0.08}>
            <div
              className="no-scrollbar mt-10 flex justify-start gap-2 overflow-x-auto border-b border-line pb-5 sm:justify-center"
              role="tablist"
              aria-label="Dining menus"
            >
              {menuOrder.map((key) => {
                const entry = menus[key];
                const active = activeMenu === key;
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    id={`menu-tab-${key}`}
                    aria-selected={active}
                    aria-controls={`menu-panel-${key}`}
                    onClick={() => setActiveMenu(key)}
                    className={cn(
                      "shrink-0 border px-5 py-3 text-[9px] font-medium uppercase tracking-wide2 transition-colors duration-300",
                      active
                        ? "border-gold bg-gold text-night"
                        : "border-line text-sand hover:border-gold/50 hover:text-champagne",
                    )}
                  >
                    {entry.label}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div
            key={activeMenu}
            id={`menu-panel-${activeMenu}`}
            role="tabpanel"
            aria-labelledby={`menu-tab-${activeMenu}`}
            className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14"
          >
            <Reveal className="lg:col-span-4">
              <div className="border border-line bg-ink/40 p-6 sm:p-8 lg:sticky lg:top-28">
                <p className="text-[9px] uppercase tracking-label text-gold">{menu.label}</p>
                <p className="mt-4 inline-flex items-center gap-2.5 text-[11px] uppercase tracking-wide2 text-cream/80">
                  <Clock3 aria-hidden="true" className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.4} />
                  {menu.hours}
                </p>
                <p className="mt-5 text-[13px] leading-[1.9] text-sand/70">{menu.note}</p>
                <div className="mt-6 border-t border-line pt-5">
                  <p className="text-[10px] leading-relaxed text-sand/45">
                    Prices are in USD and exclude tax and gratuity. A discretionary 20% service charge
                    applies to parties of six or more.
                  </p>
                </div>
                <Button onClick={() => setInquiryOpen(true)} variant="outline" className="mt-6 w-full">
                  Reserve a Table
                </Button>
              </div>
            </Reveal>

            <div className="lg:col-span-8">
              <ul className="divide-y divide-line/70 border-y border-line/70">
                {menu.items.map((item, index) => (
                  <Reveal as="li" key={item.name} delay={Math.min(index * 0.04, 0.24)}>
                    <div className="group flex items-baseline justify-between gap-5 py-5 sm:py-6">
                      <div className="min-w-0">
                        <h3 className="font-display text-xl leading-snug text-cream transition-colors group-hover:text-champagne sm:text-2xl">
                          {item.name}
                        </h3>
                        <p className="mt-1.5 text-[12px] leading-relaxed text-sand/65">
                          {item.description}
                        </p>
                      </div>
                      <span className="shrink-0 font-display text-lg text-champagne/90">
                        ${item.price}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </ul>
              <p className="mt-5 text-[10px] uppercase tracking-wide2 text-sand/40">
                {menu.items.length} dishes · {menu.hours}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="From the pass"
            title="Signature Dishes"
            description="Two plates that have earned their place on the menu, season after season."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {signatureDishes.map((dish, index) => (
              <Reveal key={dish.name} delay={index * 0.08}>
                <article className="group relative aspect-[4/3] overflow-hidden border border-line">
                  <SmartImage
                    src={dish.image}
                    alt={dish.name}
                    sizes="(min-width: 768px) 46vw, 92vw"
                    className="h-full w-full"
                    imgClassName="transition-transform duration-[1600ms] ease-luxe group-hover:scale-[1.05]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <span className="font-display text-sm italic text-champagne/70">
                      0{index + 1}
                    </span>
                    <h3 className="mt-2 font-display text-2xl text-cream sm:text-3xl">{dish.name}</h3>
                    <p className="mt-2 max-w-md text-[12px] leading-relaxed text-cream/65">
                      {dish.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface/25 py-20 sm:py-24">
        <div className="container-luxe">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="relative lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden">
                <SmartImage
                  src={images.cocktail}
                  alt="A considered cocktail at the bar of The Haven Table"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-full w-full"
                />
              </div>
              <div className="absolute -bottom-8 -right-3 hidden w-40 overflow-hidden border-[6px] border-ink sm:block">
                <SmartImage
                  src={images.champagne}
                  alt="Champagne being poured at Luxe Haven"
                  sizes="160px"
                  className="aspect-[3/4]"
                />
              </div>
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                <Eyebrow>Cellar &amp; Bar</Eyebrow>
                <h2 className="display-md mt-6 text-cream">
                  A List Worth
                  <br />
                  <span className="italic text-champagne">Staying For</span>
                </h2>
                <p className="body-copy mt-5 max-w-md">
                  Old-world bottles, small growers and a bar that takes its cocktails seriously
                  without taking itself too seriously. Ask the sommelier — that is what they are here
                  for.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="mt-8 divide-y divide-line border-y border-line">
                  {wineList.map((wine) => (
                    <li
                      key={wine.name}
                      className="group flex items-baseline justify-between gap-4 py-4"
                    >
                      <div className="min-w-0">
                        <p className="font-display text-lg text-cream transition-colors group-hover:text-champagne">
                          {wine.name}
                        </p>
                        <p className="mt-1 text-[10px] uppercase tracking-wide2 text-sand/50">
                          {wine.detail}
                          {wine.glass && (
                            <span className="ml-3 inline-flex items-center gap-1.5 text-gold/60">
                              <Wine aria-hidden="true" className="h-3 w-3" strokeWidth={1.4} />
                              Glass
                            </span>
                          )}
                        </p>
                      </div>
                      <span className="shrink-0 font-display text-lg text-champagne/90">
                        ${wine.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-luxe">
          <div className="grid gap-10 border border-line bg-ink-soft p-6 sm:p-10 lg:grid-cols-12 lg:items-center lg:p-12">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Hours &amp; Visits</Eyebrow>
                <h2 className="mt-5 font-display text-3xl text-cream sm:text-4xl">
                  Come for lunch. Stay for the evening.
                </h2>
                <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-sand/65">
                  Walk-ins are welcome at the bar. For the dining room and private table, we recommend
                  reserving a little ahead — particularly at the weekend.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <dl className="divide-y divide-line border-y border-line">
                  {diningInfo.hours.map((entry) => (
                    <div key={entry.label} className="flex items-baseline justify-between gap-4 py-3.5">
                      <dt className="text-[9px] uppercase tracking-label text-sand/55">{entry.label}</dt>
                      <dd className="text-[12px] text-cream">{entry.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="mt-5 flex items-start gap-3 text-[11px] leading-relaxed text-sand/55">
                  <MapPin aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/60" strokeWidth={1.4} />
                  {diningInfo.location}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Reservations"
        title="A Table Awaits"
        description="Tell us when you would like to join us and our restaurant team will confirm your table personally."
        image={images.diningCandle}
        imageAlt="Candlelight on the tables at The Haven Table"
        primary={
          <Button onClick={() => setInquiryOpen(true)} size="lg" arrow>
            Reserve a Table
          </Button>
        }
        secondary={
          <Button to="/events" variant="outline" size="lg">
            Private Dining &amp; Events
          </Button>
        }
      />

      <InquiryModal
        open={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        eyebrow="The Haven Table"
        title="Reserve a Table"
        description="Tell us when you would like to join us. Our restaurant team will confirm your table personally."
        subject="Table reservation"
        cta="Request Table"
      />
    </>
  );
}
