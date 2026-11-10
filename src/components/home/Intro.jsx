import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

const stats = [
  { value: "96", label: "Rooms & suites" },
  { value: "1926", label: "The year we opened" },
  { value: "24h", label: "Concierge, always" },
];

export default function Intro() {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <div className="container-luxe">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>The Luxe Haven Experience</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-lg mt-7 text-balance text-cream">
                An Elevated Stay,
                <br />
                <span className="italic text-champagne">Designed Around You</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <span className="mt-9 block h-px w-24 bg-gradient-to-r from-gold to-transparent" aria-hidden="true" />
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 hidden max-w-[22ch] font-display text-lg italic leading-relaxed text-sand/60 lg:block">
                A house of ninety-six rooms, and one very particular idea of hospitality.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <p className="font-display text-[1.4rem] leading-[1.6] text-cream/95 sm:text-[1.6rem]">
                At Luxe Haven, every detail is thoughtfully considered. From quiet mornings
                overlooking the city to evenings shaped by exceptional dining and service, your
                stay is designed around comfort, character, and effortless luxury.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="body-copy mt-6 max-w-lg">
                We are a small house by New York standards — intimate enough that the doorman knows
                your name, considered enough that nothing is left to chance. The result is a stay
                that feels less like a hotel and more like a home you happen to share with very good
                company.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-line py-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-display text-3xl text-champagne sm:text-4xl">
                        {stat.value}
                      </span>
                      <span className="mt-1.5 block text-[8px] uppercase tracking-label text-sand/55 sm:text-[9px]">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.3}>
              <Button to="/about" variant="bare" arrow className="mt-8">
                Discover Our Story
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
