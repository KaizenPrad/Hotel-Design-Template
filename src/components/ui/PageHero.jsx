import { cn } from "@/utils/cn";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  alt,
  meta = [],
  children,
  align = "left",
  compact = false,
}) {
  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden",
        compact ? "min-h-[440px] pt-32 pb-14 sm:min-h-[480px]" : "min-h-[540px] pt-32 pb-16 sm:min-h-[620px] sm:pb-20",
      )}
    >
      <SmartImage
        src={image}
        alt={alt}
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full"
        imgClassName="scale-[1.02]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/25 to-transparent"
      />
      <div className="container-luxe relative z-10">
        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
          {eyebrow && (
            <Reveal delay={0.05}>
              <Eyebrow align={align === "center" ? "center" : "left"}>{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <Reveal delay={0.12}>
            <h1 className="display-xl mt-6 whitespace-pre-line text-cream">{title}</h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.2}>
              <p className={cn("body-copy mt-6 max-w-xl text-[15px] sm:text-base", align === "center" && "mx-auto")}>
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>
        {meta.length > 0 && (
          <Reveal delay={0.28}>
            <dl className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-line pt-6">
              {meta.map((item) => (
                <div key={item.label}>
                  <dt className="text-[9px] uppercase tracking-label text-sand/70">{item.label}</dt>
                  <dd className="mt-1.5 font-display text-lg text-cream">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
