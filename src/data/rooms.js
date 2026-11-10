import { images } from "./hotel";
import { unsplash } from "../utils/images";

const sharedAmenities = [
  "King-size bed",
  "Rain shower",
  "Luxury toiletries",
  "High-speed Wi-Fi",
  "Mini bar",
  "24-hour room service",
  "Smart TV",
  "Nespresso machine",
  "Bathrobe & slippers",
];

export const rooms = [
  {
    slug: "deluxe-room",
    name: "Deluxe Room",
    category: "rooms",
    collection: "The House Collection",
    price: 420,
    size: 42,
    guests: 2,
    bedType: "King Bed",
    view: "City View",
    tags: ["city-view"],
    image: unsplash("photo-1611892440504-42a792e24d32", 1400),
    gallery: [
      unsplash("photo-1611892440504-42a792e24d32", 1800),
      images.bathroom,
      images.corridor,
      images.lobbyAlt,
    ],
    shortDescription: "Warm interiors, elegant details and expansive city views.",
    description:
      "A serene retreat above Midtown, the Deluxe Room pairs soft ivory linens with walnut joinery and a wall of windows framing the city. Settle into a deep armchair, draw the curtains, and let New York blur into background light.",
    highlights: ["42 m² of calm", "Floor-to-ceiling windows", "Curated minibar"],
    amenities: sharedAmenities,
    included: [
      "Daily housekeeping and turndown",
      "Complimentary still water",
      "Access to the fitness studio",
      "Personal concierge service",
    ],
    policies: [
      "Check-in from 3:00 PM · Check-out by 12:00 PM",
      "Complimentary cancellation up to 48 hours before arrival",
      "Non-smoking accommodation",
      "One child under 12 stays complimentary with existing bedding",
    ],
  },
  {
    slug: "executive-suite",
    name: "Executive Suite",
    category: "suites",
    collection: "The Suite Collection",
    price: 620,
    size: 58,
    guests: 2,
    bedType: "King Bed",
    view: "City View",
    tags: ["city-view"],
    image: unsplash("photo-1743410973975-c676fa6bf885", 1400),
    gallery: [
      unsplash("photo-1743410973975-c676fa6bf885", 1800),
      images.bedroomViewAlt,
      images.bathroom,
      images.staircase,
    ],
    shortDescription: "A refined suite designed for longer stays and effortless comfort.",
    description:
      "Designed for the way you actually live, the Executive Suite offers a separate sitting room, a generous marble bath and corner windows that hold the afternoon light. It is a place to work a little, rest deeply and stay a while longer.",
    highlights: ["Separate living room", "Marble bathroom", "Corner city outlook"],
    amenities: sharedAmenities,
    included: [
      "Daily housekeeping and turndown",
      "Evening aperitif in the lounge",
      "Pressing of two garments daily",
      "Access to the fitness studio",
    ],
    policies: [
      "Check-in from 3:00 PM · Check-out by 12:00 PM",
      "Complimentary cancellation up to 48 hours before arrival",
      "Non-smoking accommodation",
      "Rollaway bed available on request",
    ],
  },
  {
    slug: "signature-suite",
    name: "Signature Suite",
    category: "suites",
    collection: "The Signature Collection",
    price: 850,
    size: 72,
    guests: 2,
    bedType: "King Bed",
    view: "Panoramic City View",
    tags: ["city-view", "signature"],
    featured: true,
    image: unsplash("photo-1731336478850-6bce7235e320", 1400),
    gallery: [
      unsplash("photo-1731336478850-6bce7235e320", 1900),
      images.bedroomView,
      images.bathroom,
      images.restaurant,
      images.corridor,
    ],
    shortDescription:
      "Our most distinctive accommodation, created for an exceptional stay.",
    description:
      "The Signature Suite is the fullest expression of the Luxe Haven idea: an expansive living room, a private bar, a dressing room and windows that run from wall to wall. From the bed, the skyline becomes a slow, luminous panorama.",
    highlights: ["72 m² suite", "Panoramic skyline", "Private bar & dressing room"],
    amenities: sharedAmenities,
    included: [
      "Dedicated suite butler",
      "Daily breakfast in The Haven Table",
      "Airport transfer on arrival",
      "Evening turndown with tea service",
      "Complimentary pressing service",
    ],
    policies: [
      "Check-in from 3:00 PM · Check-out by 12:00 PM",
      "Complimentary cancellation up to 72 hours before arrival",
      "Non-smoking accommodation",
      "Suite may be connected to an Executive Suite on request",
    ],
  },
  {
    slug: "haven-terrace-suite",
    name: "Haven Terrace Suite",
    category: "suites",
    collection: "The Signature Collection",
    price: 980,
    size: 84,
    guests: 3,
    bedType: "King Bed",
    view: "Terrace & Skyline",
    tags: ["signature"],
    image: unsplash("photo-1776763018972-588e27bf6511", 1400),
    gallery: [
      unsplash("photo-1776763018972-588e27bf6511", 1900),
      images.rooftop,
      images.bathroom,
      images.lobby,
    ],
    shortDescription:
      "A private terrace above the city, with room to gather or simply breathe.",
    description:
      "Step out onto fifty square metres of private terrace and the city is suddenly yours alone. Indoors, the Haven Terrace Suite is warm and quiet, with a deep soaking tub, a generous lounge and linen the colour of morning light.",
    highlights: ["50 m² private terrace", "Freestanding soaking tub", "Outdoor lounge seating"],
    amenities: [...sharedAmenities, "Private terrace", "Freestanding bathtub"],
    included: [
      "Dedicated suite butler",
      "Daily breakfast on the terrace",
      "Private in-suite dining experience",
      "Airport transfer on arrival",
    ],
    policies: [
      "Check-in from 3:00 PM · Check-out by 12:00 PM",
      "Complimentary cancellation up to 72 hours before arrival",
      "Non-smoking accommodation",
      "Terrace available until 10:00 PM",
    ],
  },
  {
    slug: "garden-courtyard-room",
    name: "Garden Courtyard Room",
    category: "rooms",
    collection: "The House Collection",
    price: 510,
    size: 46,
    guests: 2,
    bedType: "Queen Bed",
    view: "Courtyard View",
    tags: [],
    image: unsplash("photo-1631049552057-403cdb8f0658", 1400),
    gallery: [
      unsplash("photo-1631049552057-403cdb8f0658", 1800),
      images.bathroom,
      images.staircase,
      images.lobbyAlt,
    ],
    shortDescription:
      "A quiet room overlooking our interior garden, made for slow mornings.",
    description:
      "Tucked away from the avenue, the Garden Courtyard Room opens onto a planted courtyard where the noise of the city simply falls away. Natural textures, a low linen bed and a small writing desk make it an easy place to settle.",
    highlights: ["Overlooks the courtyard", "Queen bed", "Writing desk"],
    amenities: sharedAmenities,
    included: [
      "Daily housekeeping",
      "Complimentary still water",
      "Access to the fitness studio",
      "Personal concierge service",
    ],
    policies: [
      "Check-in from 3:00 PM · Check-out by 12:00 PM",
      "Complimentary cancellation up to 48 hours before arrival",
      "Non-smoking accommodation",
      "Courtyard-facing rooms are the quietest in the house",
    ],
  },
  {
    slug: "atelier-loft",
    name: "Atelier Loft",
    category: "suites",
    collection: "The Suite Collection",
    price: 720,
    size: 65,
    guests: 3,
    bedType: "King Bed",
    view: "Skyline View",
    tags: ["city-view"],
    image: unsplash("photo-1743410976099-6114097db9ba", 1400),
    gallery: [
      unsplash("photo-1743410976099-6114097db9ba", 1800),
      images.corridor,
      images.bedroomView,
      images.bathroom,
    ],
    shortDescription:
      "An open, light-filled loft with a considered workspace and skyline outlook.",
    description:
      "Part studio, part sanctuary, the Atelier Loft is designed for those who travel with ideas. An open plan pairs a generous bed with a proper desk, a reading nook and windows that run the length of the room.",
    highlights: ["Dedicated workspace", "Open-plan living", "Skyline outlook"],
    amenities: [...sharedAmenities, "Writing desk", "Bluetooth speaker"],
    included: [
      "Daily housekeeping and turndown",
      "Complimentary pressing of one garment daily",
      "Access to the fitness studio",
      "Personal concierge service",
    ],
    policies: [
      "Check-in from 3:00 PM · Check-out by 12:00 PM",
      "Complimentary cancellation up to 48 hours before arrival",
      "Non-smoking accommodation",
      "Ideal for stays of three nights or more",
    ],
  },
];

export function getRoomBySlug(slug) {
  return rooms.find((room) => room.slug === slug);
}

export function getFeaturedRooms() {
  return rooms.filter((room) => ["deluxe-room", "executive-suite", "signature-suite"].includes(room.slug));
}
