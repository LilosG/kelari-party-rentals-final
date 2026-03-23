// ── Types ────────────────────────────────────────────────────────────────────

export interface CategoryItem {
  name: string;
  description: string;
  sizes?: string[];
}

export interface Category {
  slug: string;
  name: string;
  meta: {
    title: string;
    description: string;
  };
  headline: string;
  subheadline: string;
  intro: string;
  icon: string;
  items: CategoryItem[];
}

// ── Data ─────────────────────────────────────────────────────────────────────

export const categories: Category[] = [
  {
    slug: "tables",
    name: "Tables",
    meta: {
      title: "Table Rentals | Kelari Party Rentals",
      description:
        "Rectangular, round & cocktail table rentals for parties and events. Free delivery and setup in North County San Diego.",
    },
    headline: "Table Rentals",
    subheadline: "Rectangular, round & cocktail tables for every event size.",
    intro:
      "From intimate dinner parties to large celebrations, we have the right tables for your event. All tables are delivered clean, set up at your venue, and picked up after.",
    icon: "🪑",
    items: [
      {
        name: "6-Foot Rectangular Table",
        description: "Seats 6–8 guests. Great for dining and buffet setups.",
        sizes: ["6 ft"],
      },
      {
        name: "8-Foot Rectangular Table",
        description: "Seats 8–10 guests. Ideal for larger dining setups and banquets.",
        sizes: ["8 ft"],
      },
      {
        name: '60" Round Table',
        description: "Seats 8–10 guests. Perfect for formal dining and centerpieces.",
        sizes: ['60"'],
      },
      {
        name: "Cocktail Table",
        description: "High-top bar-height table for standing receptions and mixers.",
      },
      {
        name: "Kids' Table",
        description: "Low-height table sized for children ages 2–8.",
      },
    ],
  },
  {
    slug: "chairs",
    name: "Chairs",
    meta: {
      title: "Chair Rentals | Kelari Party Rentals",
      description:
        "Folding chairs, Chiavari chairs & kids' chairs for parties and events. Free delivery and setup in North County San Diego.",
    },
    headline: "Chair Rentals",
    subheadline: "Folding, Chiavari & kids' chairs for every style and budget.",
    intro:
      "Comfortable seating for every guest. Choose from classic folding chairs, elegant Chiavari chairs, or kid-sized seating — all delivered and set up at your venue.",
    icon: "💺",
    items: [
      {
        name: "White Folding Chair",
        description: "Classic white resin folding chair. Clean, sturdy, and versatile.",
      },
      {
        name: "Black Folding Chair",
        description: "Sleek black resin folding chair for modern event setups.",
      },
      {
        name: "Gold Chiavari Chair",
        description: "Elegant gold Chiavari chair with cushion. Perfect for formal events.",
      },
      {
        name: "Silver Chiavari Chair",
        description: "Sophisticated silver Chiavari chair with cushion.",
      },
      {
        name: "Kids' Chair",
        description: "Small folding chair sized for children ages 2–8.",
      },
    ],
  },
  {
    slug: "tents-canopies",
    name: "Tents & Canopies",
    meta: {
      title: "Tent & Canopy Rentals | Kelari Party Rentals",
      description:
        "Pop-up canopies and frame tents in multiple sizes. Sun and weather protection for outdoor events. Free setup in North County San Diego.",
    },
    headline: "Tent & Canopy Rentals",
    subheadline: "Pop-up canopies and frame tents for shade and shelter at any outdoor event.",
    intro:
      "Keep your guests comfortable rain or shine. Our tents and canopies provide shade and weather protection for backyard parties, park events, and outdoor celebrations of every size.",
    icon: "⛺",
    items: [
      {
        name: "10×10 Pop-Up Canopy",
        description: "Compact canopy for small gatherings and food stations.",
        sizes: ["10×10"],
      },
      {
        name: "10×20 Pop-Up Canopy",
        description: "Extended canopy for buffet lines and mid-size groups.",
        sizes: ["10×20"],
      },
      {
        name: "20×20 Frame Tent",
        description: "Professional frame tent for parties up to 40 guests.",
        sizes: ["20×20"],
      },
      {
        name: "20×40 Frame Tent",
        description: "Large frame tent for events up to 80 guests.",
        sizes: ["20×40"],
      },
    ],
  },
  {
    slug: "linens",
    name: "Linens",
    meta: {
      title: "Linen Rentals | Kelari Party Rentals",
      description:
        "Tablecloths, runners, napkins & chair sashes in a variety of colors. Free delivery in North County San Diego.",
    },
    headline: "Linen Rentals",
    subheadline: "Tablecloths, runners, napkins & sashes in dozens of colors.",
    intro:
      "Linens set the tone for your event. Choose from a wide range of colors and fabrics for tablecloths, runners, napkins, and chair sashes — all freshly laundered and pressed.",
    icon: "🎀",
    items: [
      {
        name: "Rectangular Tablecloth",
        description: "Floor-length polyester tablecloth for 6-ft and 8-ft tables.",
        sizes: ["90×132", "90×156"],
      },
      {
        name: "Round Tablecloth",
        description: 'Floor-length polyester tablecloth for 60" round tables.',
        sizes: ['120"'],
      },
      {
        name: "Table Runner",
        description: "Satin or burlap runner to accent any table.",
      },
      {
        name: "Cloth Napkin",
        description: "Polyester napkins available in coordinating colors.",
      },
      {
        name: "Chair Sash",
        description: "Organza or satin sash to dress up any chair.",
      },
    ],
  },
  {
    slug: "tableware",
    name: "Tableware",
    meta: {
      title: "Tableware Rentals | Kelari Party Rentals",
      description:
        "Plates, flatware, glassware & chargers for elegant event dining. Free delivery in North County San Diego.",
    },
    headline: "Tableware Rentals",
    subheadline: "Plates, flatware, glassware & chargers for a polished table setting.",
    intro:
      "Elevate your table setting with our curated tableware collection. From charger plates to glassware, we provide everything you need for a polished dining experience.",
    icon: "🍽️",
    items: [
      {
        name: "Dinner Plate",
        description: "Classic white porcelain dinner plate.",
      },
      {
        name: "Salad Plate",
        description: "White porcelain salad/dessert plate.",
      },
      {
        name: "Charger Plate",
        description: "Gold or silver charger plate for formal place settings.",
      },
      {
        name: "Flatware Set",
        description: "Fork, knife, and spoon — stainless steel.",
      },
      {
        name: "Glassware",
        description: "Water goblets, wine glasses, and champagne flutes.",
      },
    ],
  },
  {
    slug: "decorations",
    name: "Decorations",
    meta: {
      title: "Decoration Rentals | Kelari Party Rentals",
      description:
        "Centerpieces, arches, backdrops & décor accents for parties and celebrations. Free delivery in North County San Diego.",
    },
    headline: "Decoration Rentals",
    subheadline: "Centerpieces, arches, backdrops & accents to style your celebration.",
    intro:
      "The details make the event. Our decoration rentals include centerpieces, arches, backdrops, and accent pieces that transform any space into a celebration-ready venue.",
    icon: "✨",
    items: [
      {
        name: "Centerpiece",
        description: "Floral or lantern centerpieces for table focal points.",
      },
      {
        name: "Balloon Arch",
        description: "Custom color balloon arch for photo backdrops and entrances.",
      },
      {
        name: "Backdrop Frame",
        description: "Adjustable frame for fabric, balloon, or floral backdrops.",
      },
      {
        name: "Vase Collection",
        description: "Glass cylinder and mercury vases in assorted sizes.",
      },
    ],
  },
  {
    slug: "lighting",
    name: "Lighting",
    meta: {
      title: "Lighting Rentals | Kelari Party Rentals",
      description:
        "String lights, uplighting & lanterns for atmospheric event lighting. Free delivery and setup in North County San Diego.",
    },
    headline: "Lighting Rentals",
    subheadline: "String lights, uplighting & lanterns for the perfect ambiance.",
    intro:
      "Set the mood with the right lighting. Our string lights, uplighting, and lanterns create warm, inviting atmospheres for evening events, tented celebrations, and backyard gatherings.",
    icon: "💡",
    items: [
      {
        name: "Bistro String Lights",
        description: "Warm-white Edison bulb string lights. Available in 25-ft and 50-ft strands.",
        sizes: ["25 ft", "50 ft"],
      },
      {
        name: "LED Uplighting",
        description: "Color-changing LED uplights to accent tents, walls, and trees.",
      },
      {
        name: "Paper Lantern",
        description: "White or colored paper lanterns for overhead décor.",
      },
      {
        name: "LED Candle",
        description: "Flameless LED candles for safe, atmospheric table lighting.",
      },
    ],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}
