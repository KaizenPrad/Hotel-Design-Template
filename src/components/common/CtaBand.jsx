import SmartImage from "@/components/ui/SmartImage";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

export default function CtaBand({
  eyebrow = "Reservations",
  title,
  description,
  primary,
  secondary,
  image,
  imageAlt = "",
}) {
  return (
    <section className="relative overflow-hidden border-y border-line py-20 sm:py-24">
      {image && (
        <>
          <SmartImage
            src={image}
            alt={imageAlt}
            sizes="100vw"
            className="absolute inset-0 h-full w-full"
            imgClassName="opacity-30"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/60" />
        </>
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />
      <div className="container-luxe relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow align="center">{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-lg mt-6 text-balance text-cream">{title}</h2>
          </Reveal>
          {description && (
            <Reveal delay={0.14}>
              <p className="body-copy mx-auto mt-5 max-w-lg">{description}</p>
            </Reveal>
          )}
          {(primary || secondary) && (
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                {primary}
                {secondary}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
