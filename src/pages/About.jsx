import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/common/CtaBand";
import { images } from "@/data/hotel";
import { usePageMeta } from "@/hooks/usePageMeta";

const stats = [
  { value: "1928", label: "The house opens" },
  { value: "96", label: "Rooms & suites" },
  { value: "42", label: "Seats at the table" },
  { value: "24h", label: "Concierge, every day" },
];

const principles = [
  {
    title: "Rest, properly considered",
    description:
      "A room is not a product. It is where the day ends. We think about the weight of the linen, the temperature of the light and the silence between the walls.",
  },
  {
    title: "Service without theatre",
    description:
      "The best service is the kind you barely notice. A preference remembered. A car already waiting. A table held without being asked twice.",
  },
  {
    title: "A house, not a brand",
    description:
      "We are one hotel, on one street, run by people who live in this city. There is no second Luxe Haven. That is the point.",
  },
];

const spaces = [
  {
    name: "The Lobby",
    description: "A living room for the street, with a fire in winter and flowers from the market.",
    image: images.lobbyAlt,
    alt: "The lobby lounge at Luxe Haven with deep armchairs and warm lamps",
    to: "/contact",
    cta: "Find us",
    aspect: "h-[360px] sm:h-[420px] lg:h-[460px]",
  },
  {
    name: "The Haven Table",
    description: "Forty-two seats, seasonal cooking and a wine list that rewards curiosity.",
    image: images.diningRoom,
    alt: "The Haven Table restaurant with warm lighting and intimate tables",
    to: "/dining",
    cta: "Explore dining",
    aspect: "h-[360px] sm:h-[420px] lg:h-[460px]",
  },
  {
    name: "The Spa",
    description: "Warm stone, candlelight and an hour that belongs to no one else.",
    image: images.spaInterior,
    alt: "The candlelit interior of the Luxe Haven Spa",
    to: "/spa",
    cta: "Explore the spa",
    aspect: "h-[360px] sm:h-[420px] lg:h-[460px]",
  },
  {
    name: "The Terrace",
    description: "Open sky, low furniture and the skyline in every direction.",
    image: images.rooftop,
    alt: "The rooftop terrace at Luxe Haven overlooking the city",
    to: "/experiences",
    cta: "Explore experiences",
    aspect: "h-[360px] sm:h-[420px] lg:h-[460px]",
  },
];

const people = [
  {
    name: "Marguerite Voss",
    role: "General Manager",
    note: "Twenty-two years in the house, and still walks the corridors every morning before the first guest wakes.",
  },
  {
    name: "Adrien Vale",
    role: "Executive Chef",
    note: "Cooks the way he talks: directly, with a long memory for what the season gave him last year.",
  },
  {
    name: "Elias Moreau",
    role: "Head Concierge",
    note: "Keeps a paper address book. Has never once said a thing cannot be arranged.",
  },
];

const commitments = [
  {
    title: "Sourcing",
    description:
      "We buy from growers and makers within a day's drive wherever we can, and name them on the menu.",
  },
  {
    title: "Energy",
    description:
      "The house runs on renewable electricity, with heat recovered from the kitchens and a linen programme that does not waste water.",
  },
  {
    title: "Community",
    description:
      "A portion of every stay supports the neighbourhood kitchens and the city's public gardens.",
  },
];

export default function About() {
  usePageMeta(
    "Luxe Haven | Our Story",
    "The story of Luxe Haven Hotel — a 1928 townhouse on East 50th Street, reimagined as an intimate luxury hotel with 96 rooms and a quietly exceptional team.",
  );

  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={"A House on\nEast 50th"}
        subtitle="A 1928 townhouse, a long restoration, and a simple ambition: to be the quietest, warmest hotel in the loudest city in the world."
        image={images.lobbyChandelier}
        alt="The grand lobby of Luxe Haven Hotel, with a brass chandelier and hand-plastered ceiling"
        meta={[
          { label: "Established", value: "1928" },
          { label: "Accommodations", value: "96 rooms & suites" },
          { label: "Neighbourhood", value: "Midtown Manhattan" },
        ]}
      />

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-luxe">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="relative lg:col-span-6">
              <div className="relative aspect-[4/5] overflow-hidden">
                <SmartImage
                  src={images.staircase}
                  alt="The original 1928 staircase at Luxe Haven Hotel"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full"
                  imgClassName="transition-transform duration-[1600ms] ease-luxe hover:scale-[1.03]"
                />
              </div>
              <div className="absolute -bottom-8 -right-2 hidden w-44 overflow-hidden border-[6px] border-ink sm:block">
                <SmartImage
                  src={images.reception}
                  alt="The reception desk at Luxe Haven Hotel"
                  sizes="176px"
                  className="aspect-[3/4]"
                />
              </div>
              <p className="mt-10 text-[9px] uppercase tracking-label text-sand/40">
                The original staircase · restored 2019
              </p>
            </Reveal>

            <div className="lg:col-span-5 lg:col-start-8 lg:pt-6">
              <Reveal>
                <Eyebrow>Since 1928</Eyebrow>
                <h2 className="display-md mt-6 text-cream">
                  The house that
                  <br />
                  <span className="italic text-champagne">took its time</span>
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="body-copy mt-6">
                  Luxe Haven began as a private townhouse for a family who liked to entertain. For
                  most of the last century it changed hands quietly, gathering rooms and stories the
                  way old houses do. In 2019 we closed the doors for two years and took the whole
                  thing apart — carefully, by hand.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="body-copy mt-4">
                  What came back is not a reconstruction. It is the same house, with better bones:
                  ninety-six rooms and suites, a restaurant that belongs to the neighbourhood, a spa
                  below the noise, and a terrace that makes the skyline feel close enough to touch.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <blockquote className="mt-8 border-l border-gold/40 pl-5">
                  <p className="font-display text-xl italic leading-relaxed text-cream/90">
                    &ldquo;We did not set out to build a hotel. We set out to make a house that people
                    would not want to leave.&rdquo;
                  </p>
                  <footer className="mt-3 text-[9px] uppercase tracking-label text-sand/50">
                    Marguerite Voss · General Manager
                  </footer>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink-soft">
        <div className="container-luxe">
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 0.06}
                className={
                  index === 0
                    ? "py-8 pr-6 sm:py-10 lg:pr-10"
                    : index === 1
                      ? "border-l border-line py-8 pl-6 sm:py-10 lg:pl-10"
                      : index === 2
                        ? "border-t border-line py-8 sm:py-10 lg:border-l lg:border-t-0 lg:pl-10"
                        : "border-l border-t border-line py-8 pl-6 sm:py-10 lg:border-t-0 lg:pl-10"
                }
              >
                <dt className="text-[9px] uppercase tracking-label text-sand/50">{stat.label}</dt>
                <dd className="mt-2 font-display text-4xl text-cream sm:text-5xl">{stat.value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="What we believe"
            title="Three quiet principles"
            description="They are not slogans. They are the things we check ourselves against when a decision is difficult."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.08}>
                <article className="flex h-full flex-col border-t border-line pt-6">
                  <span className="text-[9px] tracking-widest text-gold/60">0{index + 1}</span>
                  <h3 className="mt-4 font-display text-2xl leading-tight text-cream sm:text-[1.75rem]">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.9] text-sand/65">{principle.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface/20 py-20 sm:py-24 lg:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="The House"
            title="Rooms within rooms"
            description="A hotel is a collection of atmospheres. These are the four we return to."
            actions={
              <Button to="/rooms" variant="outline" arrow>
                View Accommodations
              </Button>
            }
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
            {spaces.map((space, index) => (
              <Reveal
                key={space.name}
                delay={Math.min(index * 0.06, 0.24)}
                className={
                  index === 0
                    ? "lg:col-span-7"
                    : index === 1
                      ? "lg:col-span-5"
                      : index === 2
                        ? "lg:col-span-5"
                        : "lg:col-span-7"
                }
              >
                <Link to={space.to} className="group block">
                  <div className={`relative overflow-hidden border border-line ${space.aspect}`}>
                    <SmartImage
                      src={space.image}
                      alt={space.alt}
                      sizes="(min-width: 1024px) 50vw, (min-width: 640px) 48vw, 92vw"
                      className="h-full w-full"
                      imgClassName="transition-transform duration-[1500ms] ease-luxe group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-80"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                      <div>
                        <h3 className="font-display text-2xl text-cream transition-colors group-hover:text-champagne">
                          {space.name}
                        </h3>
                        <p className="mt-1 max-w-sm text-[11px] leading-relaxed text-cream/60">
                          {space.description}
                        </p>
                      </div>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-champagne/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={1.4}
                      />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="The People"
            title="Service, in person"
            description="One hotel, one team, and a shared instinct for when to step forward and when to disappear."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {people.map((person, index) => (
              <Reveal key={person.name} delay={index * 0.08}>
                <article className="border-t border-line pt-5">
                  <p className="text-[9px] tracking-widest text-gold/60">0{index + 1}</p>
                  <h3 className="mt-3 font-display text-2xl text-cream">{person.name}</h3>
                  <p className="mt-1 text-[9px] uppercase tracking-label text-champagne/70">
                    {person.role}
                  </p>
                  <p className="mt-3 text-[12px] leading-relaxed text-sand/60">{person.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink-soft py-20 sm:py-24">
        <div className="container-luxe">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <div className="relative aspect-[5/4] overflow-hidden border border-line">
                <SmartImage
                  src={images.exterior}
                  alt="The exterior of Luxe Haven Hotel on East 50th Street"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full"
                />
              </div>
            </Reveal>

            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal>
                <Eyebrow>Our Commitment</Eyebrow>
                <h2 className="display-md mt-6 text-cream">
                  A lighter
                  <br />
                  <span className="italic text-champagne">footprint</span>
                </h2>
                <p className="body-copy mt-5">
                  Luxury that costs the city more than it gives back is not luxury at all. We keep our
                  promises specific — and we publish them.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="mt-8 divide-y divide-line border-y border-line">
                  {commitments.map((commitment) => (
                    <li key={commitment.title} className="py-4">
                      <p className="text-[10px] uppercase tracking-label text-cream">
                        {commitment.title}
                      </p>
                      <p className="mt-1.5 text-[12px] leading-relaxed text-sand/60">
                        {commitment.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.16}>
                <Button to="/information/accessibility" variant="bare" arrow className="mt-6">
                  Read our accessibility commitment
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Come and see"
        title="The Door Is Open"
        description="Reserve a room, book a table, or simply write to us. We would like to know you."
        image={images.lobby}
        imageAlt="The warmly lit lobby of Luxe Haven Hotel"
        primary={
          <Button to="/booking" size="lg" arrow>
            Reserve Your Stay
          </Button>
        }
        secondary={
          <Button to="/contact" variant="outline" size="lg">
            Contact the Hotel
          </Button>
        }
      />
    </>
  );
}
