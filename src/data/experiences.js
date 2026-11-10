import { images } from "./hotel";

export const experiences = [
  {
    slug: "private-manhattan-tour",
    title: "Private Manhattan Tour",
    category: "The City",
    duration: "4 hours",
    price: "From $420",
    numericPrice: 420,
    image: images.taxi,
    description:
      "A private car and a guide who knows the city's quieter corners — from the Village to the Cloisters, at your own pace.",
    longDescription:
      "Your guide will shape the afternoon around what interests you: architecture, jazz history, a particular bakery, or simply the best light in the city. A private car waits at each stop, and the itinerary stays entirely yours.",
    includes: ["Private chauffeur and guide", "Flexible four-hour itinerary", "Coffee stop at a neighbourhood favourite"],
    size: "large",
  },
  {
    slug: "rooftop-dining",
    title: "Rooftop Dining",
    category: "Dining",
    duration: "3 hours",
    price: "From $180",
    numericPrice: 180,
    image: images.rooftop,
    description:
      "A table above the skyline, a seasonal tasting menu and the particular pleasure of watching a city switch on its lights.",
    longDescription:
      "Begin with a glass of champagne at golden hour and stay through the transition to evening. The menu is written by our chef for the night, paired with wines chosen by our sommelier.",
    includes: ["Reserved rooftop table", "Four-course tasting menu", "Sommelier wine pairing"],
    size: "tall",
  },
  {
    slug: "broadway-evening",
    title: "Broadway Evening",
    category: "Culture",
    duration: "3 hours",
    price: "From $260",
    numericPrice: 260,
    image: images.broadway,
    description:
      "Orchestra seats to a current production, a pre-theatre supper and a car to bring you back at the interval's end.",
    longDescription:
      "We hold a small allocation of excellent seats for the productions we believe in. Your evening includes a pre-theatre supper at The Haven Table and a car both ways, so the only thing you need to think about is the curtain.",
    includes: ["Orchestra seating", "Pre-theatre supper", "Return car service"],
    size: "small",
  },
  {
    slug: "central-park-morning",
    title: "Central Park Morning",
    category: "The City",
    duration: "2 hours",
    price: "From $95",
    numericPrice: 95,
    image: images.centralPark,
    description:
      "A guided walk through the park before the city wakes, with coffee and pastries from our kitchen.",
    longDescription:
      "Meet your guide at the door at seven and walk the quiet paths towards the Lake and the Ramble. We'll bring coffee, warm pastries and a blanket, and leave you at the Boathouse when you're ready for the day.",
    includes: ["Private guide", "Coffee and pastries", "A slower start to the day"],
    size: "small",
  },
  {
    slug: "art-and-culture",
    title: "Art & Culture",
    category: "Culture",
    duration: "3 hours",
    price: "From $140",
    numericPrice: 140,
    image: images.museum,
    description:
      "A curator-led visit to the Met or MoMA, arranged around the collections you actually want to see.",
    longDescription:
      "Skip the queues and the overwhelm. A curator will meet you at a private entrance and guide a focused, conversational visit — two or three rooms, properly seen, rather than a building rushed through.",
    includes: ["Private curator", "Priority entrance", "Focused collection visit"],
    size: "wide",
  },
  {
    slug: "luxury-shopping",
    title: "Luxury Shopping",
    category: "Style",
    duration: "3 hours",
    price: "Upon request",
    numericPrice: 0,
    image: images.boutique,
    description:
      "A personal stylist, private appointments on Madison Avenue and a car to carry everything home.",
    longDescription:
      "Our concierge will arrange private appointments with the houses you'd like to visit, and a stylist will join if you'd like a second eye. Purchases are delivered to your suite before you return.",
    includes: ["Personal stylist on request", "Private boutique appointments", "Delivery to your suite"],
    size: "small",
  },
];

export function getExperienceBySlug(slug) {
  return experiences.find((item) => item.slug === slug);
}
