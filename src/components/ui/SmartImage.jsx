import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { buildSrcSet } from "@/utils/images";
import Emblem from "@/components/common/Emblem";

export default function SmartImage({
  src,
  alt,
  className,
  imgClassName,
  sizes = "100vw",
  priority = false,
  position = "center",
  children,
}) {
  const [status, setStatus] = useState("loading");
  const imgRef = useRef(null);

  useEffect(() => {
    setStatus("loading");
  }, [src]);

  // Images restored from cache can finish before React attaches its load
  // handler, so the rendered state is reconciled here.
  useEffect(() => {
    const node = imgRef.current;
    if (!node) return;
    if (node.complete) {
      setStatus(node.naturalWidth > 0 ? "loaded" : "error");
      return;
    }
    const onLoad = () => setStatus("loaded");
    const onError = () => setStatus("error");
    node.addEventListener("load", onLoad);
    node.addEventListener("error", onError);
    return () => {
      node.removeEventListener("load", onLoad);
      node.removeEventListener("error", onError);
    };
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden bg-espresso", className)}>
      {status !== "error" ? (
        <>
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 bg-gradient-to-br from-espresso via-surface to-ink transition-opacity duration-700",
              status === "loaded" ? "opacity-0" : "opacity-100",
            )}
          />
          <img
            ref={imgRef}
            src={src}
            srcSet={buildSrcSet(src)}
            sizes={sizes}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            fetchpriority={priority ? "high" : "auto"}
            decoding="async"
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("error")}
            style={{ objectPosition: position }}
            className={cn(
              "h-full w-full object-cover transition-opacity duration-1000 ease-luxe",
              status === "loaded" ? "opacity-100" : "opacity-0",
              imgClassName,
            )}
          />
        </>
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-surface via-espresso to-ink px-6 text-center"
        >
          <Emblem className="h-9 w-9 text-gold/70" />
          <span className="font-display text-sm uppercase tracking-label text-sand/70">
            Luxe Haven
          </span>
          <span className="max-w-[22ch] text-[10px] leading-relaxed text-sand/40">{alt}</span>
        </div>
      )}
      {children}
    </div>
  );
}
