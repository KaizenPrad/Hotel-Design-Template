import { useState } from "react";
import { ArrowUpRight, Check, Clock3, Droplets, Leaf, Sparkles } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/common/CtaBand";
import InquiryModal from "@/components/common/InquiryModal";
import { images } from "@/data/hotel";
import { facilities, spaInfo, treatments } from "@/data/spa";
import { usePageMeta } from "@/hooks/usePageMeta";

const ritual = [
  { icon: Leaf, label: "Botanical", text: "Cold-pressed oils and house-blended botanicals." },
  { icon: Droplets, label: "Thermal", text: "Sauna, steam and a quiet pool beneath the city." },
  { icon: Sparkles, label: "Restorative", text: "Therapists who work slowly, and mean it." },
];

export default function Spa() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openInquiry = (treatment = null) => {
    setSelected(treatment);
    setInquiryOpen(true);
  };

  const closeInquiry = () => {
    setInquiryOpen(false);
    setSelected(null);
  };

  usePageMeta(
    "Luxe Haven | Spa & Wellness",
    "Retreat to the Luxe Haven Spa — signature massage, facials, body rituals and a private couples suite in the heart of Midtown Manhattan.",
  );

  return (
    <>
      <PageHero
        eyebrow="Spa & Wellness"
        title={"A Quieter\nNew York"}
        subtitle="Below the noise of the avenue, a sanctuary of warm stone, candlelight and slow, deliberate care."
        image={images.spaInterior}
        alt="The warmly lit interior of the Luxe Haven Spa, with stone walls and soft candlelight"
        meta={[
          { label: "Open daily", value: "7:00 AM – 9:00 PM" },
          { label: "Treatment rooms", value: "Six private suites" },
          { label: "Location", value: "Lower ground floor" },
        ]}
      >
        <Reveal delay={0.34}>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Button onClick={() => openInquiry()} size="lg" arrow>
              Reserve a Treatment
            </Button>
            <a
              href="#treatments"
              className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-wide2 text-cream/70 transition-colors hover:text-champagne"
            >
              Explore the Menu
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
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <Reveal className="relative lg:col-span-6">
              <div className="relative aspect-[5/4] overflow-hidden">
                <SmartImage
                  src={images.spaPool}
                  alt="The thermal pool at Luxe Haven Spa, lit by candles and warm stone"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full"
                  imgClassName="transition-transform duration-[1600ms] ease-luxe hover:scale-[1.03]"
                />
              </div>
              <div className="absolute -bottom-9 -right-2 hidden w-44 overflow-hidden border-[6px] border-ink sm:block">
                <SmartImage
                  src={images.bodyRitual}
                  alt="A warm body ritual at the Luxe Haven Spa"
                  sizes="176px"
                  className="aspect-[3/4]"
                />
              </div>
              <span
                aria-hidden="true"
                className="absolute -left-3 -top-3 hidden h-24 w-24 border-l border-t border-gold/35 sm:block"
              />
            </Reveal>

            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal>
                <Eyebrow>The Spa at Luxe Haven</Eyebrow>
                <h2 className="display-md mt-6 text-cream">
                  An hour that
                  <br />
                  <span className="italic text-champagne">belongs to you</span>
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="body-copy mt-6">
                  We built the spa around a simple idea: that rest is not a luxury but a practice. Six
                  private rooms, a cedar sauna, a eucalyptus steam room and a pool that stays quiet.
                  Therapists who ask what you need, then let you stop talking.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="body-copy mt-4">
                  Come thirty minutes early. Leave your phone in the locker. We will take it from
                  there.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <ul className="mt-8 divide-y divide-line border-y border-line">
                  {ritual.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.label} className="flex items-start gap-4 py-4">
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-line text-gold/80">
                          <Icon aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.4} />
                        </span>
                        <div>
                          <p className="text-[10px] uppercase tracking-label text-cream">{item.label}</p>
                          <p className="mt-1 text-[12px] leading-relaxed text-sand/60">{item.text}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section
        id="treatments"
        className="scroll-mt-24 border-y border-line bg-ink-soft py-20 sm:py-24 lg:py-28"
      >
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Treatments"
            title="The Treatment Menu"
            description="Every treatment begins with a conversation and ends with tea. Choose a ritual below, or ask us to compose something for you."
            actions={
              <Button onClick={() => openInquiry()} variant="outline" arrow>
                Book a Treatment
              </Button>
            }
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {treatments.map((treatment, index) => (
              <Reveal key={treatment.slug} delay={Math.min(index * 0.06, 0.3)}>
                <article className="group flex h-full flex-col border border-line bg-ink/30 transition-colors duration-500 hover:border-gold/40">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <SmartImage
                      src={treatment.image}
                      alt={treatment.name}
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 46vw, 92vw"
                      className="h-full w-full"
                      imgClassName="transition-transform duration-[1500ms] ease-luxe group-hover:scale-[1.05]"
                    />
                    <span className="absolute right-4 top-4 border border-white/20 bg-ink/60 px-2.5 py-1 text-[9px] uppercase tracking-wide2 text-champagne/90 backdrop-blur">
                      ${treatment.price}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-2xl leading-tight text-cream transition-colors group-hover:text-champagne">
                        {treatment.name}
                      </h3>
                      <span className="mt-1 inline-flex shrink-0 items-center gap-1.5 text-[9px] uppercase tracking-wide2 text-sand/50">
                        <Clock3 aria-hidden="true" className="h-3 w-3 text-gold/60" strokeWidth={1.4} />
                        {treatment.duration}
                      </span>
                    </div>

                    <p className="mt-3 text-[12px] leading-relaxed text-sand/70">
                      {treatment.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {treatment.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-[11px] leading-relaxed text-sand/55"
                        >
                          <Check
                            aria-hidden="true"
                            className="mt-0.5 h-3 w-3 shrink-0 text-gold/60"
                            strokeWidth={1.6}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => openInquiry(treatment)}
                      className="mt-auto inline-flex items-center gap-2 self-start border-t border-line pt-4 text-[9px] font-medium uppercase tracking-wide2 text-champagne transition-colors hover:text-gold"
                    >
                      Reserve This Treatment
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={1.5}
                      />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <article className="flex h-full flex-col justify-between border border-gold/30 bg-gold/[0.06] p-6 sm:p-8">
                <div>
                  <p className="text-[9px] uppercase tracking-label text-gold">The Half-Day Ritual</p>
                  <h3 className="mt-4 font-display text-3xl leading-tight text-cream">
                    Four hours,
                    <br />
                    entirely yours
                  </h3>
                  <p className="mt-4 text-[12px] leading-relaxed text-sand/65">
                    A massage, a facial, lunch in the relaxation lounge and the thermal suite without
                    watching the clock. Composed with you on the day.
                  </p>
                </div>
                <div>
                  <p className="mt-6 flex items-baseline gap-2">
                    <span className="font-display text-3xl text-champagne">$520</span>
                    <span className="text-[9px] uppercase tracking-wide2 text-sand/50">per guest</span>
                  </p>
                  <Button
                    onClick={() =>
                      openInquiry({
                        name: "The Half-Day Ritual",
                        duration: "4 hours",
                      })
                    }
                    variant="soft"
                    className="mt-5 w-full"
                  >
                    Enquire
                  </Button>
                </div>
              </article>
            </Reveal>
          </div>

          <p className="mt-8 text-[10px] leading-relaxed text-sand/40">
            Treatments are available to hotel guests and day visitors. Please arrive thirty minutes
            before your appointment. Cancellations within 24 hours are charged in full.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-luxe">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Facilities</Eyebrow>
                <h2 className="display-md mt-6 text-cream">
                  The Space
                  <br />
                  <span className="italic text-champagne">Between</span>
                </h2>
                <p className="body-copy mt-5 max-w-md">
                  The thermal suite is open to all guests throughout the day. Robes, slippers and
                  lockers are provided; bring nothing but yourself.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <dl className="mt-8 divide-y divide-line border-y border-line">
                  {spaInfo.hours.map((entry) => (
                    <div key={entry.label} className="flex items-baseline justify-between gap-4 py-4">
                      <dt className="text-[9px] uppercase tracking-label text-sand/55">{entry.label}</dt>
                      <dd className="text-[12px] text-cream">{entry.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 text-[11px] leading-relaxed text-sand/50">{spaInfo.note}</p>
              </Reveal>

              <Reveal delay={0.16}>
                <Button onClick={() => openInquiry()} className="mt-8" arrow>
                  Reserve a Treatment
                </Button>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                <div className="relative aspect-[16/10] overflow-hidden border border-line">
                  <SmartImage
                    src={images.facial}
                    alt="A quiet facial treatment room at Luxe Haven Spa"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="h-full w-full"
                  />
                </div>
              </Reveal>

              <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {facilities.map((facility, index) => (
                  <Reveal key={facility.name} delay={0.06 * index}>
                    <div className="border-t border-line pt-4">
                      <p className="text-[9px] tracking-widest text-gold/60">0{index + 1}</p>
                      <h3 className="mt-2 font-display text-xl text-cream">{facility.name}</h3>
                      <p className="mt-1.5 text-[12px] leading-relaxed text-sand/60">
                        {facility.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Wellbeing"
        title="Rest Is Part of the Stay"
        description="Hotel guests receive priority appointments and access to the thermal suite throughout their stay."
        image={images.massage}
        imageAlt="A signature massage at the Luxe Haven Spa"
        primary={
          <Button onClick={() => openInquiry()} size="lg" arrow>
            Reserve a Treatment
          </Button>
        }
        secondary={
          <Button to="/rooms" variant="outline" size="lg">
            Explore Rooms &amp; Suites
          </Button>
        }
      />

      <InquiryModal
        open={inquiryOpen}
        onClose={closeInquiry}
        eyebrow="Spa & Wellness"
        title={selected ? selected.name : "Book a Treatment"}
        description={
          selected
            ? `${selected.duration} · Reserve a treatment at the Luxe Haven Spa and our wellness team will confirm your appointment.`
            : "Tell us which treatment you would like and our wellness team will confirm your appointment."
        }
        subject={selected ? `${selected.name} treatment` : "Spa treatment"}
        cta="Request Appointment"
        successTitle="Your appointment is requested"
      />
    </>
  );
}
