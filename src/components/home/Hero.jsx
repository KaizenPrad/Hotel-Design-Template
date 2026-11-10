import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import Button from "@/components/ui/Button";
import BookingBar from "@/components/booking/BookingBar";
import { images } from "@/data/hotel";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease } },
  };

  return (
    <section aria-labelledby="hero-heading" className="relative">
      <div className="relative flex min-h-[100svh] items-end overflow-hidden lg:min-h-[92vh]">
        <SmartImage
          src={images.hero}
          alt="A warm, light-filled suite at Luxe Haven Hotel with a king bed and city views"
          priority
          position="center"
          sizes="100vw"
          className="absolute inset-0 h-full w-full"
          imgClassName="scale-[1.03]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/65 to-ink/10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,transparent_0%,rgba(17,16,15,0.35)_100%)]"
        />

        <div className="container-luxe relative z-10 w-full pb-40 pt-32 sm:pb-44 lg:pb-48">
          <motion.div
            variants={container}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={item} className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold/70" aria-hidden="true" />
              <span className="text-[9px] font-medium uppercase tracking-label text-champagne sm:text-[10px]">
                Welcome to Luxe Haven
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={item}
              className="display-xl mt-7 text-cream"
            >
              Experience
              <span className="mt-1 block sm:mt-2">
                <span className="italic text-champagne">Luxury</span> &amp; Comfort
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-md text-[14px] leading-[1.9] text-sand sm:text-[15px]"
            >
              Discover timeless elegance, exceptional hospitality, and unforgettable stays in the
              heart of New York City.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button to="/rooms" size="lg" arrow>
                Explore Rooms
              </Button>
              <Button to="/about" variant="outline" size="lg">
                Discover Luxe Haven
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-5 text-[8px] uppercase tracking-label text-sand/55 sm:text-[9px]"
            >
              <span>Michelin Key 2026</span>
              <span aria-hidden="true" className="h-2.5 w-px bg-white/15" />
              <span>Forbes Five-Star</span>
              <span aria-hidden="true" className="h-2.5 w-px bg-white/15" />
              <span>Condé Nast Gold List</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="absolute bottom-44 right-8 z-10 hidden flex-col items-center gap-6 xl:flex"
          aria-hidden="true"
        >
          <span className="vertical-rl text-[8px] uppercase tracking-[0.5em] text-sand/45">
            Midtown · New York
          </span>
          <span className="h-16 w-px bg-gradient-to-b from-sand/30 to-transparent" />
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sand/60">
            <ArrowDown className="h-4 w-4" strokeWidth={1.2} />
          </span>
        </motion.div>
      </div>

      <div className="container-luxe relative z-30 -mt-24 sm:-mt-28">
        <BookingBar />
      </div>
    </section>
  );
}
