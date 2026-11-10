import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import Eyebrow from "@/components/ui/Eyebrow";
import { images } from "@/data/hotel";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/utils/cn";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const testimonial = testimonials[index];

  const go = (nextIndex) => {
    setDirection(nextIndex > index ? 1 : -1);
    setIndex((nextIndex + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative overflow-hidden border-y border-line py-24 sm:py-32">
      <SmartImage
        src={images.skyline}
        alt=""
        sizes="100vw"
        className="absolute inset-0 h-full w-full"
        imgClassName="opacity-25"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/88" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.045] blur-[140px]"
      />

      <div className="container-luxe relative">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow align="center">In the words of our guests</Eyebrow>

          <div className="relative mt-10">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 select-none font-display text-[10rem] leading-[0.6] text-gold/10 sm:text-[15rem]"
            >
              &ldquo;
            </span>

            <div aria-live="polite" className="relative min-h-[290px] sm:min-h-[300px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.blockquote
                  key={testimonial.name}
                  custom={direction}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <p className="font-display text-[1.6rem] italic leading-[1.5] text-cream sm:text-[2.15rem] lg:text-[2.45rem]">
                    {testimonial.quote}
                  </p>
                  <footer className="mt-9">
                    <p className="text-[10px] font-medium uppercase tracking-label text-champagne">
                      {testimonial.name}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-wide2 text-sand/55">
                      {testimonial.location}
                    </p>
                    <p className="mt-1 text-[9px] uppercase tracking-wide2 text-sand/35">
                      {testimonial.stay}
                    </p>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="inline-flex h-10 w-10 items-center justify-center border border-line text-sand transition-colors hover:border-gold hover:text-champagne"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.4} />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Guest testimonials">
              {testimonials.map((item, position) => (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={position === index}
                  aria-label={`Show testimonial ${position + 1}: ${item.name}`}
                  onClick={() => go(position)}
                  className={cn(
                    "h-[2px] transition-all duration-500",
                    position === index ? "w-10 bg-gold" : "w-5 bg-white/20 hover:bg-white/40",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="inline-flex h-10 w-10 items-center justify-center border border-line text-sand transition-colors hover:border-gold hover:text-champagne"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.4} />
            </button>
          </div>

          <p className="mt-5 text-[9px] uppercase tracking-label text-sand/30">
            {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
}
