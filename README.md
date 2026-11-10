# Luxe Haven Hotel

A portfolio-grade marketing and reservation site for a fictional luxury hotel on East 50th Street, New York. Dark, editorial, typographically driven — closer to a printed city guide than a SaaS template.

> **Portfolio demonstration.** All imagery is sourced from Unsplash/Pexels, all copy is fictional, and no payment is ever taken. Booking, enquiry and newsletter submissions are stored locally in the browser only.

---

## Highlights

- **Eleven routes, one design language** — Home, Rooms, Room detail, Dining, Spa, Experiences, About, Contact, Booking, Events & Private Dining, Information (Privacy / Terms / Accessibility / FAQ) and a 404.
- **A working reservation flow** — date, guest and room-type search → filtered live availability → room selection with per-night, multi-room and 12% tax maths → guest details with inline validation → confirmation with a generated reference code. Search, selected room and reservation persist in `localStorage`.
- **Editorial typography** — Cormorant Garamond for display, Inter for body, tight uppercase tracking for labels, generous whitespace, restrained gold.
- **Real behaviour** — mobile navigation with scroll lock and Escape handling, focus-trapped modals, category filters, tabbed menus, deep-linkable experience modals, smooth scrolling, lazy images with a branded fallback, per-route `<title>`/meta descriptions.
- **Responsive** from 375 px to 1440 px with no horizontal overflow, and a hand-built stylised map panel instead of a third-party embed.

## Stack

| Purpose | Choice |
| --- | --- |
| Build tool | Vite 6 |
| UI | React 18 + React Router 6 |
| Styling | Tailwind CSS 3 with a custom token set |
| Motion | Framer Motion |
| Icons | Lucide React |
| Class merging | `clsx` + `tailwind-merge` |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the production bundle
```

## Structure

```
src/
  components/
    booking/    BookingBar, AvailabilityCard, BookingSummary, GuestDetailsForm
    common/     CtaBand, InquiryModal, MapPanel, Newsletter, Emblem, Logo…
    home/       Home page sections
    layout/     Navbar, Footer, Layout
    rooms/      RoomCard, RoomGallery, RoomReserveCard
    ui/         Button, Modal, Field, SmartImage, PageHero, Reveal, Eyebrow…
  context/      BookingContext (search / selection / reservation state)
  data/         hotel, rooms, dining, spa, experiences, venues, testimonials
  hooks/        usePageMeta, useLockBodyScroll, useScrolled
  pages/        one file per route
  utils/        cn, date, pricing, images, validation, availability
```

## Design tokens

Defined in `tailwind.config.js` and `src/index.css`.

| Token | Value | Use |
| --- | --- | --- |
| `ink` / `ink-soft` / `surface` / `espresso` | `#11100F` → `#30271F` | Layered dark backgrounds |
| `cream` / `sand` | `#F5F0E8` / `#B8AEA0` | Primary and secondary text |
| `gold` / `champagne` | `#C6A267` / `#D8BE8B` | Accents, prices, calls to action |
| `line` | `rgba(255,255,255,0.12)` | Hairline rules and borders |

## Notes

- `src/utils/cn.js` merges Tailwind classes with `tailwind-merge`, so a later utility in the same group always wins (`relative` + `absolute` → `absolute`).
- `SmartImage` fades photos in on load, falls back to a branded monogram on error, and reconciles cached images that finish before React attaches its load handler.
- All routes are listed in `src/App.jsx`; page-level metadata is applied by the `usePageMeta` hook.
