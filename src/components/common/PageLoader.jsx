import Emblem from "./Emblem";

export default function PageLoader() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5">
      <Emblem className="h-10 w-10 animate-pulse text-gold/70" />
      <span className="text-[9px] uppercase tracking-label text-sand/50">Luxe Haven</span>
      <span className="sr-only" role="status">Loading page</span>
    </div>
  );
}
