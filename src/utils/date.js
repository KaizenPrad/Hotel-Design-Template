const DAY = 86400000;

export function toISODate(date) {
  const d = new Date(date);
  const month = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
}

export function todayISO() {
  return toISODate(new Date());
}

export function addDays(dateOrISO, days) {
  const base = typeof dateOrISO === "string" ? parseISO(dateOrISO) : new Date(dateOrISO);
  base.setDate(base.getDate() + days);
  return base;
}

export function parseISO(iso) {
  if (!iso) return null;
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function nightsBetween(checkIn, checkOut) {
  const start = parseISO(checkIn);
  const end = parseISO(checkOut);
  if (!start || !end) return 0;
  const diff = Math.round((end.getTime() - start.getTime()) / DAY);
  return diff > 0 ? diff : 0;
}

export function formatDate(iso, options = {}) {
  const date = parseISO(iso);
  if (!date) return "";
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    ...options,
  }).format(date);
}

export function formatDateShort(iso) {
  return formatDate(iso, { weekday: undefined, year: undefined });
}

export function isValidStay(checkIn, checkOut) {
  if (!checkIn || !checkOut) return false;
  if (checkIn < todayISO()) return false;
  return nightsBetween(checkIn, checkOut) > 0;
}
