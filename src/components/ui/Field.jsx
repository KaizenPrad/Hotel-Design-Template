import { cn } from "@/utils/cn";

export default function Field({ label, htmlFor, error, hint, optional, children, className }) {
  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label htmlFor={htmlFor} className="field-label">
          {label}
          {optional && <span className="ml-2 normal-case tracking-normal text-sand/50">(optional)</span>}
        </label>
      )}
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="mt-2 text-[11px] text-[#e6a08a]">
          {error}
        </p>
      ) : (
        hint && (
          <p id={`${htmlFor}-hint`} className="mt-2 text-[11px] text-sand/50">
            {hint}
          </p>
        )
      )}
    </div>
  );
}
