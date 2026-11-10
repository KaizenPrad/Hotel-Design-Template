import { cn } from "@/utils/cn";

export default function Emblem({ className }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
    >
      <path
        d="M20 2.75 33.25 10v20L20 37.25 6.75 30V10L20 2.75Z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path
        d="M20 7.5 29.25 12.75v14.3L20 32.5l-9.25-5.45v-14.3L20 7.5Z"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="0.9"
      />
      <path
        d="M13.75 25.5V18L20 14.25 26.25 18v7.5"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path d="M20 20.5v3.5M18.25 22.25h3.5" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="20" cy="34" r="0.9" fill="currentColor" />
    </svg>
  );
}
