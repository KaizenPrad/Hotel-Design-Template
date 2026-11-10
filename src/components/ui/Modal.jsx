import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/utils/cn";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

const sizes = {
  sm: "max-w-md",
  md: "max-w-xl",
  lg: "max-w-3xl",
};

export default function Modal({
  open,
  onClose,
  title,
  eyebrow,
  children,
  size = "md",
  footer,
}) {
  const panelRef = useRef(null);
  const closeRef = useRef(onClose);
  const previousFocus = useRef(null);

  closeRef.current = onClose;
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return undefined;

    previousFocus.current = document.activeElement;
    const timer = window.setTimeout(() => {
      const target = panelRef.current?.querySelector("[data-autofocus]") ?? panelRef.current;
      target?.focus?.();
    }, 60);

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeRef.current?.();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKeyDown);
      previousFocus.current?.focus?.();
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => closeRef.current?.()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden="true"
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            tabIndex={-1}
            initial={{ opacity: 0, y: 28, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.99 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "relative max-h-[92vh] w-full overflow-y-auto border border-line bg-ink-soft shadow-2xl shadow-black/40",
              sizes[size],
            )}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-6 border-b border-line bg-ink-soft/95 px-6 py-5 backdrop-blur sm:px-8">
              <div>
                {eyebrow && (
                  <p className="text-[9px] uppercase tracking-label text-gold">{eyebrow}</p>
                )}
                <h2 id="modal-title" className="mt-2 font-display text-2xl text-cream sm:text-3xl">
                  {title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => closeRef.current?.()}
                data-autofocus
                aria-label="Close dialog"
                className="-mr-2 -mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center text-sand transition-colors hover:text-champagne"
              >
                <X className="h-5 w-5" strokeWidth={1.4} />
              </button>
            </div>
            <div className="px-6 py-7 sm:px-8">{children}</div>
            {footer && <div className="border-t border-line px-6 py-5 sm:px-8">{footer}</div>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
