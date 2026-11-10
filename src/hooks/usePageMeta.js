import { useEffect } from "react";

function upsertMeta(selector, attrs) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
    document.head.appendChild(element);
    return;
  }
  Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
}

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    if (description) {
      upsertMeta('meta[name="description"]', { name: "description", content: description });
      upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    }
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
  }, [title, description]);
}
