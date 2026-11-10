import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="border-y border-line bg-ink-soft py-24 sm:py-28 lg:py-32">
      <div className="container-luxe">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>At your service</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-lg mt-7 text-cream">
                Everything
                <br />
                <span className="italic text-champagne">You Need</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="body-copy mt-6 max-w-sm">
                The best service is the kind you never have to ask for twice. Our team is here at
                every hour, quietly attending to the details.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Button to="/contact" variant="outline" className="mt-8" arrow>
                Speak to the Concierge
              </Button>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Reveal
                    key={service.title}
                    delay={Math.min(index * 0.05, 0.25)}
                    className="border-t border-line py-6 first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-gold/30 bg-gold/[0.04] text-gold">
                        <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.4} />
                      </span>
                      <div>
                        <h3 className="text-[13px] font-medium tracking-wide text-cream">
                          {service.title}
                        </h3>
                        <p className="mt-1.5 text-[12px] leading-relaxed text-sand/70">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
