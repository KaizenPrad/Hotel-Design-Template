import { images } from "./hotel";

export const treatments = [
  {
    slug: "signature-massage",
    name: "Signature Massage",
    duration: "60 minutes",
    price: 220,
    description:
      "A full-body ritual using warm botanical oils and slow, deliberate pressure to release the city from your shoulders.",
    image: images.massage,
    includes: ["Warm botanical oil", "Scalp and foot ritual", "Herbal tea aftercare"],
  },
  {
    slug: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    duration: "75 minutes",
    price: 260,
    description:
      "Focused, restorative work for deep tension. Our therapists tailor pressure to you, with warm compresses and guided breath.",
    image: images.massageAlt,
    includes: ["Warm compress", "Targeted tension work", "Recovery guidance"],
  },
  {
    slug: "luxury-facial",
    name: "Luxury Facial",
    duration: "60 minutes",
    price: 240,
    description:
      "A quiet, brightening facial with cold-pressed botanicals, lymphatic massage and a hand-finished mineral veil.",
    image: images.facial,
    includes: ["Botanical cleanse", "Lymphatic massage", "Mineral finishing veil"],
  },
  {
    slug: "body-ritual",
    name: "Body Ritual",
    duration: "90 minutes",
    price: 320,
    description:
      "A slow, warming ritual of salt polish, mineral wrap and full-body massage. The deepest kind of rest.",
    image: images.bodyRitual,
    includes: ["Mineral salt polish", "Warm wrap", "Full-body massage"],
  },
  {
    slug: "couples-treatment",
    name: "Couples Treatment",
    duration: "90 minutes",
    price: 480,
    description:
      "A private suite for two, with side-by-side massage, a soaking bath and a quiet hour afterwards that belongs to no one else.",
    image: images.couples,
    includes: ["Private treatment suite", "Side-by-side massage", "Bath and quiet hour"],
  },
];

export const facilities = [
  {
    name: "The Sauna",
    description: "Cedar-lined and quietly warm, with a view onto the courtyard garden.",
  },
  {
    name: "Steam Room",
    description: "Eucalyptus steam and cool stone, the oldest reset there is.",
  },
  {
    name: "Relaxation Lounge",
    description: "Deep linen loungers, herbal infusions and no screens at all.",
  },
  {
    name: "Treatment Rooms",
    description: "Six private rooms, including a couples suite with its own bath.",
  },
];

export const spaInfo = {
  hours: [
    { label: "Monday – Friday", value: "7:00 AM – 9:00 PM" },
    { label: "Saturday – Sunday", value: "8:00 AM – 9:00 PM" },
    { label: "Treatments", value: "9:00 AM – 8:00 PM" },
  ],
  note: "Arrive thirty minutes early to use the thermal suite. Robes, slippers and lockers are provided.",
};
