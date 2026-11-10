import { images } from "./hotel";

export const venues = [
  {
    slug: "grand-ballroom",
    name: "The Grand Ballroom",
    capacity: "320 seated · 500 standing",
    size: "6,200 sq ft",
    image: images.ballroom,
    description:
      "Our largest room, with a hand-plastered ceiling, brass chandeliers and windows dressed in heavy ivory silk. Grand without ever feeling impersonal.",
    features: ["Dance floor and stage", "Private pre-function salon", "Dedicated events team"],
  },
  {
    slug: "private-dining-room",
    name: "The Private Dining Room",
    capacity: "24 seated",
    size: "620 sq ft",
    image: images.privateDining,
    description:
      "A glass-roofed room at the heart of the hotel, with a long oak table, candlelight and a menu written with you by our chef.",
    features: ["Glass roof and garden outlook", "Chef's tasting menus", "Dedicated sommelier"],
  },
  {
    slug: "rooftop-terrace",
    name: "The Rooftop Terrace",
    capacity: "120 standing · 70 seated",
    size: "2,400 sq ft",
    image: images.terraceEvent,
    description:
      "Open sky, low furniture and the skyline in every direction. The terrace is made for receptions that drift late into the evening.",
    features: ["Panoramic skyline views", "Outdoor bar and kitchen", "Retractable canopy"],
  },
];

export const eventTypes = [
  {
    name: "Weddings",
    description:
      "One wedding a day, so the hotel belongs to you. Ceremony, dinner and dancing across the ballroom and terrace.",
  },
  {
    name: "Corporate Events",
    description:
      "Board meetings, product launches and dinners, with discreet AV, private entrances and a team that anticipates.",
  },
  {
    name: "Private Dinners",
    description:
      "Up to twenty-four guests beneath the glass roof, with a menu written in conversation with our chef.",
  },
  {
    name: "Celebrations",
    description:
      "Birthdays, anniversaries and the milestones worth marking properly — with the city as a backdrop.",
  },
  {
    name: "Conferences",
    description:
      "Flexible rooms, fast connectivity and a dedicated host, all a short walk from Grand Central.",
  },
];
