export function money(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

export const TAX_RATE = 0.12;

export function bookingTotals(pricePerNight, nights, rooms = 1) {
  const subtotal = pricePerNight * nights * rooms;
  const taxes = subtotal * TAX_RATE;
  return {
    subtotal,
    taxes,
    total: subtotal + taxes,
  };
}
