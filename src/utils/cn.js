import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names and resolves conflicting Tailwind utilities so the
 * last utility in a group wins (e.g. `relative` + `absolute` -> `absolute`).
 */
export function cn(...classes) {
  return twMerge(clsx(classes));
}
