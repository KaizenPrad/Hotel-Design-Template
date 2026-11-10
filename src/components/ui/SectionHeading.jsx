import { cn } from "@/utils/cn";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  actions,
  className,
  titleClassName,
  descriptionClassName,
}) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-8",
        centered && "items-center text-center",
        !centered && actions && "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto")}>
        {eyebrow && (
          <Reveal className={cn("mb-6", centered && "flex justify-center")}>
            <Eyebrow align={centered ? "center" : "left"}>{eyebrow}</Eyebrow>
          </Reveal>
        )}
        <Reveal delay={0.06}>
          <h2
            className={cn(
              "display-lg text-cream",
              centered ? "text-balance" : "text-balance",
              titleClassName,
            )}
          >
            {title}
          </h2>
        </Reveal>
        {description && (
          <Reveal delay={0.12}>
            <p className={cn("body-copy mt-6 max-w-xl", centered && "mx-auto", descriptionClassName)}>
              {description}
            </p>
          </Reveal>
        )}
      </div>
      {actions && (
        <Reveal delay={0.16} className={cn("shrink-0", centered && "mt-4")}>
          {actions}
        </Reveal>
      )}
    </div>
  );
}
