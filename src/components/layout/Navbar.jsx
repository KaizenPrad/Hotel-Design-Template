import { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "@/components/common/Logo";
import SocialLinks from "@/components/common/SocialLinks";
import { hotel, images, navigation } from "@/data/hotel";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/utils/cn";

const secondaryLinks = [
  { label: "About the Hotel", to: "/about" },
  { label: "Events & Private Dining", to: "/events" },
  { label: "Contact", to: "/contact" },
  { label: "Reservations", to: "/booking" },
];

export default function Navbar() {
  const scrolled = useScrolled(30);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const closeRef = useRef(null);
  const triggerRef = useRef(null);

  useLockBodyScroll(open);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const close = useCallback(() => {
    setOpen(false);
    window.setTimeout(() => triggerRef.current?.focus?.(), 50);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    closeRef.current?.focus?.();
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe",
          scrolled
            ? "border-b border-line bg-ink/92 backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-ink/60 via-ink/20 to-transparent",
        )}
      >
        <div className="container-luxe">
          <div
            className={cn(
              "grid grid-cols-[1fr_auto_1fr] items-center gap-4 transition-all duration-500 ease-luxe",
              scrolled ? "h-[72px] lg:h-20" : "h-[84px] lg:h-24",
            )}
          >
            <nav aria-label="Primary" className="hidden lg:flex items-center gap-6 xl:gap-9">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "group relative py-2 text-[10px] font-medium uppercase tracking-wide2 transition-colors duration-300",
                      isActive ? "text-champagne" : "text-cream/75 hover:text-cream",
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold transition-all duration-300",
                          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50",
                        )}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen(true)}
              className="-ml-2 inline-flex h-11 w-11 items-center justify-center text-cream transition-colors hover:text-champagne lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.4} />
            </button>

            <Logo className="justify-self-center" />

            <div className="flex items-center justify-end gap-3 sm:gap-5">
              <a
                href={hotel.phoneHref}
                className="hidden text-[10px] uppercase tracking-wide2 text-sand transition-colors hover:text-champagne xl:block"
              >
                {hotel.phone}
              </a>
              <Link
                to="/booking"
                className="group inline-flex items-center gap-2 border border-gold/70 bg-gold px-4 py-3 text-[9px] font-medium uppercase tracking-wide2 text-night transition-all duration-300 hover:border-champagne hover:bg-champagne sm:px-6 sm:text-[10px]"
              >
                <span className="hidden sm:inline">Book Now</span>
                <span className="sm:hidden">Book</span>
                <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.7} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex flex-col bg-ink lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <Logo compact onClick={close} />
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center text-cream transition-colors hover:text-champagne"
              >
                <X className="h-5 w-5" strokeWidth={1.4} />
              </button>
            </div>

            <motion.nav
              aria-label="Mobile primary"
              className="flex-1 overflow-y-auto px-5 py-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
              }}
            >
              <ul className="space-y-1">
                {navigation.map((item, index) => (
                  <motion.li
                    key={item.to}
                    variants={{
                      hidden: { opacity: 0, y: 14 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                    }}
                  >
                    <NavLink
                      to={item.to}
                      onClick={close}
                      className={({ isActive }) =>
                        cn(
                          "group flex items-baseline gap-4 border-b border-line/70 py-4",
                          isActive ? "text-champagne" : "text-cream",
                        )
                      }
                    >
                      <span className="w-6 text-[9px] tracking-widest text-gold/70">
                        0{index + 1}
                      </span>
                      <span className="font-display text-[2rem] leading-none">{item.label}</span>
                      <ArrowRight className="ml-auto h-4 w-4 self-center text-sand/40 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.4} />
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.25 } },
                }}
                className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3"
              >
                {secondaryLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={close}
                    className="text-[10px] uppercase tracking-wide2 text-sand transition-colors hover:text-champagne"
                  >
                    {item.label}
                  </Link>
                ))}
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.32 } },
                }}
                className="mt-8"
              >
                <Link
                  to="/booking"
                  onClick={close}
                  className="flex w-full items-center justify-center gap-3 border border-gold bg-gold px-6 py-4 text-[10px] font-medium uppercase tracking-wide2 text-night"
                >
                  Book Your Stay
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.6} />
                </Link>
              </motion.div>
            </motion.nav>

            <div className="border-t border-line px-5 py-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <a href={hotel.phoneHref} className="text-xs tracking-wide text-cream hover:text-champagne">
                  {hotel.phone}
                </a>
                <a href={`mailto:${hotel.email}`} className="text-xs tracking-wide text-sand hover:text-champagne">
                  {hotel.email}
                </a>
              </div>
              <SocialLinks className="mt-4" />
            </div>

            <div aria-hidden="true" className="relative h-24 shrink-0 overflow-hidden sm:h-28">
              <img
                src={images.staircase}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
