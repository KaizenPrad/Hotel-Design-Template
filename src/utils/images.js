const UNSPLASH_BASE = "https://images.unsplash.com";
const PEXELS_BASE = "https://images.pexels.com/photos";

export function unsplash(id, width = 1600) {
  return `${UNSPLASH_BASE}/${id}?auto=format&fit=crop&w=${width}&q=80`;
}

export function pexels(id, width = 1600) {
  return `${PEXELS_BASE}/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

export const IMAGE_WIDTHS = [480, 768, 1080, 1440, 1920];

export function buildSrcSet(src) {
  if (!src || !/[?&]w=\d+/.test(src)) return undefined;
  return IMAGE_WIDTHS.map((w) => `${src.replace(/([?&])w=\d+/, `$1w=${w}`)} ${w}w`).join(", ");
}

export function isRemoteImage(src) {
  return typeof src === "string" && /^https?:\/\//.test(src);
}
