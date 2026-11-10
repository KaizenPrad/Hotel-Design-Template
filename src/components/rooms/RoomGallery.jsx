import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import Modal from "@/components/ui/Modal";
import { cn } from "@/utils/cn";

export default function RoomGallery({ room }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const gallery = room.gallery;
  const current = gallery[index] ?? gallery[0];

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((value) => (value + 1) % gallery.length);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((value) => (value - 1 + gallery.length) % gallery.length);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, gallery.length]);

  const openAt = (value) => {
    setIndex(value);
    setOpen(true);
  };

  return (
    <>
      <div className="grid gap-3 lg:grid-cols-12">
        <button
          type="button"
          onClick={() => openAt(0)}
          className="group relative aspect-[16/11] overflow-hidden lg:col-span-8 lg:aspect-auto lg:h-[560px]"
          aria-label="Open photo gallery"
        >
          <SmartImage
            src={gallery[0]}
            alt={`${room.name} — main view`}
            priority
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="h-full w-full"
            imgClassName="transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.03]"
          />
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 border border-white/20 bg-ink/60 px-3 py-2 text-[8px] uppercase tracking-label text-cream backdrop-blur">
            <Expand aria-hidden="true" className="h-3 w-3" strokeWidth={1.5} />
            View gallery · {gallery.length} photos
          </span>
        </button>

        <div className="grid grid-cols-3 gap-3 lg:col-span-4 lg:h-[560px] lg:grid-cols-1 lg:grid-rows-3">
          {gallery.slice(1, 4).map((image, position) => (
            <button
              key={image}
              type="button"
              onClick={() => openAt(position + 1)}
              className="group relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-0"
              aria-label={`Open photo ${position + 2} of ${gallery.length}`}
            >
              <SmartImage
                src={image}
                alt={`${room.name} — detail ${position + 2}`}
                sizes="(min-width: 1024px) 32vw, 30vw"
                className="h-full w-full"
                imgClassName="transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.05]"
              />
              {position === 2 && gallery.length > 4 && (
                <span className="absolute inset-0 flex items-center justify-center bg-ink/60 text-[10px] uppercase tracking-label text-cream">
                  +{gallery.length - 4} more
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={`${room.name} · Gallery`} eyebrow="Photography" size="lg">
        <div className="relative">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-espresso">
            <SmartImage
              key={current}
              src={current}
              alt={`${room.name} — photo ${index + 1}`}
              sizes="(min-width: 768px) 900px, 100vw"
              className="h-full w-full"
            />
          </div>

          <div className="mt-3 flex items-center justify-between gap-4">
            <p className="text-[10px] uppercase tracking-label text-sand/60">
              {String(index + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIndex((value) => (value - 1 + gallery.length) % gallery.length)}
                aria-label="Previous photo"
                className="inline-flex h-10 w-10 items-center justify-center border border-line text-sand transition-colors hover:border-gold hover:text-champagne"
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={1.4} />
              </button>
              <button
                type="button"
                onClick={() => setIndex((value) => (value + 1) % gallery.length)}
                aria-label="Next photo"
                className="inline-flex h-10 w-10 items-center justify-center border border-line text-sand transition-colors hover:border-gold hover:text-champagne"
              >
                <ChevronRight className="h-4 w-4" strokeWidth={1.4} />
              </button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-5 gap-2">
            {gallery.map((image, position) => (
              <button
                key={image}
                type="button"
                onClick={() => setIndex(position)}
                aria-label={`View photo ${position + 1}`}
                aria-current={position === index}
                className={cn(
                  "relative aspect-[4/3] overflow-hidden border transition-opacity",
                  position === index ? "border-gold" : "border-transparent opacity-55 hover:opacity-90",
                )}
              >
                <SmartImage src={image} alt="" sizes="160px" className="h-full w-full" />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute -top-1 right-0 hidden items-center gap-2 text-[9px] uppercase tracking-wide2 text-sand hover:text-champagne sm:flex"
          >
            Close <X className="h-3.5 w-3.5" strokeWidth={1.4} />
          </button>
        </div>
      </Modal>
    </>
  );
}
