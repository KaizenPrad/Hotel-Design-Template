export const menus = {
  breakfast: {
    label: "Breakfast",
    hours: "7:00 AM – 11:00 AM",
    note: "Served daily in the garden room, with the morning papers and a very good cup of coffee.",
    items: [
      {
        name: "Buttermilk Pancakes",
        description: "Whipped crème fraîche, wild blueberry, warm maple",
        price: 26,
      },
      {
        name: "Smoked Salmon Tartine",
        description: "Dark rye, dill cream, capers, soft egg",
        price: 24,
      },
      {
        name: "Truffle Scramble",
        description: "Soft eggs, chives, shaved black truffle, sourdough",
        price: 28,
      },
      {
        name: "Greenmarket Bowl",
        description: "Heirloom grains, avocado, soft egg, green tahini",
        price: 22,
      },
      {
        name: "Haven Croissant",
        description: "Cultured butter, house preserves, espresso",
        price: 12,
      },
    ],
  },
  lunch: {
    label: "Lunch",
    hours: "12:00 PM – 3:00 PM",
    note: "A lighter, brighter menu shaped by the Greenmarket and the season.",
    items: [
      {
        name: "Lobster Roll",
        description: "Brioche, celery, lemon butter, sea salt",
        price: 34,
      },
      {
        name: "Burrata & Heirloom Tomato",
        description: "Basil oil, aged balsamic, grilled sourdough",
        price: 24,
      },
      {
        name: "Roast Chicken Salad",
        description: "Little gem, parmesan, herb dressing, crisp shallot",
        price: 28,
      },
      {
        name: "Haven Burger",
        description: "Dry-aged beef, gruyère, house pickles, truffle fries",
        price: 32,
      },
      {
        name: "Market Fish",
        description: "Fennel, citrus, green olive, brown butter",
        price: 36,
      },
    ],
  },
  dinner: {
    label: "Dinner",
    hours: "5:30 PM – 11:00 PM",
    note: "Our main event. Seasonal cooking, low light, and a room that hums quietly.",
    items: [
      {
        name: "Handmade Tagliatelle",
        description: "Black truffle, aged parmesan, brown butter",
        price: 42,
      },
      {
        name: "Seared Diver Scallops",
        description: "Cauliflower, brown butter, oscietra caviar",
        price: 48,
      },
      {
        name: "Wild Black Bass",
        description: "Spring peas, mint, lemon, olive oil",
        price: 52,
      },
      {
        name: "Rack of Lamb",
        description: "Rosemary, smoked aubergine, natural jus",
        price: 62,
      },
      {
        name: "Dry-Aged Ribeye",
        description: "Bone marrow, shallot, pommes purée",
        price: 68,
      },
      {
        name: "Chocolate Fondant",
        description: "Salted caramel, vanilla bean ice cream",
        price: 18,
      },
    ],
  },
  private: {
    label: "Private Dining",
    hours: "By arrangement",
    note: "The Private Dining Room seats twenty-four beneath a glass roof. Menus are written with you.",
    items: [
      {
        name: "Chef's Tasting Menu",
        description: "Seven courses, seasonal, wine pairing available",
        price: 195,
      },
      {
        name: "Caviar Service",
        description: "Oscietra, warm blinis, crème fraîche, chives",
        price: 120,
      },
      {
        name: "Chateaubriand for Two",
        description: "Bordelaise, seasonal vegetables, pommes soufflées",
        price: 180,
      },
      {
        name: "Vintage Champagne",
        description: "Selected cuvées from our cellar, per bottle",
        price: 240,
      },
    ],
  },
};

export const signatureDishes = [
  {
    name: "Handmade Tagliatelle",
    description: "Black truffle, aged parmesan and brown butter — the dish our guests return for.",
    image: "https://images.unsplash.com/photo-1750943082231-0d84cfabc4dd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Dry-Aged Ribeye",
    description: "Forty-five days aged, served with bone marrow and pommes purée.",
    image: "https://images.unsplash.com/photo-1750943082452-c714763f73b2?auto=format&fit=crop&w=1200&q=80",
  },
];

export const wineList = [
  {
    name: "Champagne, Blanc de Blancs",
    detail: "Côte des Blancs · Reims, France",
    price: 32,
    glass: true,
  },
  {
    name: "Barolo, Nebbiolo",
    detail: "Piedmont, Italy · 2018",
    price: 28,
    glass: true,
  },
  {
    name: "The Haven Old Fashioned",
    detail: "Rye, smoked maple, orange oil",
    price: 24,
    glass: true,
  },
  {
    name: "Verbena & Pear",
    detail: "Gin, lemon verbena, pear, soda",
    price: 22,
    glass: true,
  },
];

export const diningInfo = {
  name: "The Haven Table",
  cuisine: "Contemporary New York Cuisine",
  hours: [
    { label: "Breakfast", value: "7:00 AM – 11:00 AM" },
    { label: "Lunch", value: "12:00 PM – 3:00 PM" },
    { label: "Dinner", value: "5:30 PM – 11:00 PM" },
    { label: "Bar", value: "12:00 PM – 1:00 AM" },
  ],
  location: "Ground floor, Luxe Haven Hotel",
  dressCode: "Smart casual",
};
