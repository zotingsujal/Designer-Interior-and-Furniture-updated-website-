import fs from 'fs';

const mappedProds = JSON.parse(fs.readFileSync('scripts/mappedProducts.json', 'utf-8'));

const furnitureCategories = [
  {
    "id": "cat-sofas",
    "slug": "sofas",
    "name": "Sofas",
    "tagline": "Comfort, Crafted Around Your Space",
    "description": "From expansive corner L-shapes and versatile sofa-cum-beds to hand-tufted Italian leather suites, each sofa is custom engineered in our Mumbai factory with high-resilience comfort foams, kiln-dried timber frames, and bespoke upholstery.",
    "heroImage": "https://drive.google.com/file/d/1u0EQjACYj_7imNel2FYYGusqWzoSECKe/view?usp=drivesdk",
    "subcategories": [
      {
        "id": "sub-sofa-sets",
        "slug": "sofa-sets",
        "name": "Sofa Sets",
        "categorySlug": "sofas",
        "description": "Bespoke 2-seater, 3-seater, modular, and leather living room sofa suites.",
        "image": "/images/bespoke/dsigner_factory_sofa_1791361355243.jpg"
      },
      {
        "id": "sub-l-shape-sofas",
        "slug": "l-shape-sofas",
        "name": "L-Shape Sofas",
        "categorySlug": "sofas",
        "description": "Bespoke corner and chaise sectionals tailored to architectural room proportions.",
        "image": "/images/bespoke/luxury_sofa_bed_1791460634066.jpg"
      },
      {
        "id": "sub-sofa-cum-beds",
        "slug": "sofa-cum-beds",
        "name": "Sofa Cum Beds",
        "categorySlug": "sofas",
        "description": "Dual-purpose sofas with smooth hydraulic glide pullouts and concealed storage.",
        "image": "/images/bespoke/sofa_cum_bed_craft_1790862556744.jpg"
      }
    ]
  },
  {
    "id": "cat-chairs-seating",
    "slug": "chairs-seating",
    "name": "Chairs & Seating",
    "tagline": "Ergonomic Elegance & Statement Seating",
    "description": "Handcrafted dining chairs, occasional coffee chairs, relaxation rocking chairs, and plush pouffes and puffies tailored with solid timber frames and designer upholstery.",
    "heroImage": "https://drive.google.com/file/d/1atgmcQNi-pb9PB47ArSGzVftz-GhdnaK/view?usp=drivesdk",
    "subcategories": [
      {
        "id": "sub-dining-chairs",
        "slug": "dining-chairs",
        "name": "Dining Chairs",
        "categorySlug": "chairs-seating",
        "description": "Ergonomic solid wood and upholstered dining seating designed for comfort and durability.",
        "image": "/images/categories/chairs_seating_banner.png"
      },
      {
        "id": "sub-coffee-chairs",
        "slug": "coffee-chairs",
        "name": "Coffee Chairs",
        "categorySlug": "chairs-seating",
        "description": "Sculptural accent and lounge chairs tailored for reading corners, coffee tables, and dens.",
        "image": "/images/categories/chairs_seating_banner.png"
      },
      {
        "id": "sub-rocking-chairs",
        "slug": "rocking-chairs",
        "name": "Rocking Chairs",
        "categorySlug": "chairs-seating",
        "description": "Artisan-crafted rocking chairs balancing smooth gentle motion with solid timber joinery.",
        "image": "/images/categories/chairs_seating_banner.png"
      },
      {
        "id": "sub-puffies",
        "slug": "puffies",
        "name": "Puffies",
        "categorySlug": "chairs-seating",
        "description": "Plush upholstered pouffes, ottomans, and puffies offering versatile extra seating and footrests.",
        "image": "/images/categories/chairs_seating_banner.png"
      }
    ]
  },
  {
    "id": "cat-tables",
    "slug": "tables",
    "name": "Tables",
    "tagline": "Gather Around Something Beautiful",
    "description": "Solid Burma teak, European walnut, natural Italian marble, and sculpted architectural pedestals designed to anchor dining areas, living rooms, and elegant entry foyers.",
    "heroImage": "https://drive.google.com/file/d/1sq_LShCOxY0uId4qoyGfva_3-4eQ2RKN/view?usp=drivesdk",
    "subcategories": [
      {
        "id": "sub-dining-tables",
        "slug": "dining-tables",
        "name": "Dining Tables",
        "categorySlug": "tables",
        "description": "Bespoke 4, 6, 8, and 10-seater banquet and family dining tables in solid wood and marble.",
        "image": "/images/bespoke/dining_bespoke_teak_1790862543973.jpg"
      },
      {
        "id": "sub-centre-tables",
        "slug": "centre-tables",
        "name": "Centre Tables",
        "categorySlug": "tables",
        "description": "Central living room statement tables with book-matched veneers, fluting, and stone tops.",
        "image": "/images/categories/tables_banner.png"
      },
      {
        "id": "sub-coffee-tables",
        "slug": "coffee-tables",
        "name": "Coffee Tables",
        "categorySlug": "tables",
        "description": "Elegant low-profile coffee tables designed to complement modern lounge suites.",
        "image": "/images/categories/tables_banner.png"
      },
      {
        "id": "sub-console-tables",
        "slug": "console-tables",
        "name": "Console Tables",
        "categorySlug": "tables",
        "description": "Architectural foyer and hallway console tables with slim profiles and drawer storage.",
        "image": "/images/categories/tables_banner.png"
      }
    ]
  },
  {
    "id": "cat-living-room-storage",
    "slug": "living-room-storage",
    "name": "Living Room & Storage",
    "tagline": "Thoughtful Storage, Beautifully Integrated",
    "description": "Seamless living room entertainment walls, TV base units, acoustic wood panelling, crockery display credenzas, and bespoke entertaining bar units built to the millimetre.",
    "heroImage": "/images/categories/living_room_storage_banner.jpg",
    "subcategories": [
      {
        "id": "sub-tv-base-unit",
        "slug": "tv-base-unit",
        "name": "TV Base Unit",
        "categorySlug": "living-room-storage",
        "description": "Low-profile floor-standing and bench TV media credenzas with wire management raceways.",
        "image": "/images/bespoke/tv_unit_acoustic_wood_1790862520491.jpg"
      },
      {
        "id": "sub-wall-unit",
        "slug": "wall-unit",
        "name": "Wall Unit",
        "categorySlug": "living-room-storage",
        "description": "Architectural wall-mounted media panels, acoustic slat cladding, and floating modular storage.",
        "image": "/images/bespoke/tv_unit_acoustic_wood_1790862520491.jpg"
      },
      {
        "id": "sub-crockery-units",
        "slug": "crockery-units",
        "name": "Crockery Units",
        "categorySlug": "living-room-storage",
        "description": "Dining and living storage cabinets, fluted credenzas, and vitrines for dinnerware and glassware.",
        "image": "/images/categories/living_room_storage_banner.jpg"
      },
      {
        "id": "sub-bar-units",
        "slug": "bar-units",
        "name": "Bar Units",
        "categorySlug": "living-room-storage",
        "description": "Integrated home bar cabinets, stemware racks, wine storage bays, and cocktail consoles.",
        "image": "/images/categories/living_room_storage_banner.jpg"
      }
    ]
  },
  {
    "id": "cat-bedroom-sets",
    "slug": "bedroom-sets",
    "name": "Bedroom Sets",
    "tagline": "Designed for Rest. Crafted for Everyday Living.",
    "description": "Master suite beds featuring padded architectural headboards, sound-damped hydraulic storage, floor-to-ceiling wardrobes, matching side tables, and vanity dressing tables.",
    "heroImage": "https://drive.google.com/file/d/1E0-J399mSNfvs7R6wTYgK_v7UL4Qzllp/view?usp=drivesdk",
    "subcategories": [
      {
        "id": "sub-beds",
        "slug": "beds",
        "name": "Beds",
        "categorySlug": "bedroom-sets",
        "description": "King, queen, platform, and hydraulic storage beds with bespoke upholstered headboards.",
        "image": "/images/categories/bedroom_sets_banner.png"
      },
      {
        "id": "sub-wardrobes",
        "slug": "wardrobes",
        "name": "Wardrobes",
        "categorySlug": "bedroom-sets",
        "description": "Floor-to-ceiling sliding, hinged, and walk-in wardrobe storage systems with aluminum profiles.",
        "image": "/images/bespoke/luxury_bedroom_wardrobe_1790862531824.jpg"
      },
      {
        "id": "sub-side-tables",
        "slug": "side-tables",
        "name": "Side Tables",
        "categorySlug": "bedroom-sets",
        "description": "Floating and freestanding bedside nightstands with fluted accents and soft-close drawers.",
        "image": "/images/categories/bedroom_sets_banner.png"
      },
      {
        "id": "sub-dressing-tables",
        "slug": "dressing-tables",
        "name": "Dressing Tables",
        "categorySlug": "bedroom-sets",
        "description": "Bespoke bedroom vanity consoles, dressing tables with mirrors, and dedicated cosmetics drawers.",
        "image": "/images/categories/bedroom_sets_banner.png"
      }
    ]
  },
  {
    "id": "cat-kitchens",
    "slug": "kitchens",
    "name": "Kitchens",
    "tagline": "Culinary Spaces Engineered with Precision",
    "description": "High-performance modular kitchens and custom tailored cabinetry featuring Blum & Hafele hardware, quartz countertops, marine-grade ply carcases, and bespoke island designs.",
    "heroImage": "https://drive.google.com/file/d/1yZRSCNb9qGhN4ruKgf8kEw8hd2iuJrcE/view?usp=drivesdk",
    "subcategories": [
      {
        "id": "sub-modular-kitchens",
        "slug": "modular-kitchens",
        "name": "Modular Kitchens",
        "categorySlug": "kitchens",
        "description": "Precision modular cabinetry layouts, tandem pullouts, pantry units, and seamless acrylic/PU shutters.",
        "image": "/images/categories/kitchens_banner.png"
      },
      {
        "id": "sub-custom-kitchens",
        "slug": "custom-kitchens",
        "name": "Custom Kitchens",
        "categorySlug": "kitchens",
        "description": "Architectural custom kitchens built to millimeter dimensions with luxury quartz and breakfast counters.",
        "image": "/images/categories/kitchens_banner.png"
      }
    ]
  }
];

const fileHeader = `// Authoritative Central Furniture Catalogue Architecture
// Strict 6 Major Categories, 21 Subcategories, 98 Unique Verified Products
// Centralized Category Configuration & Image Resolution Helpers

export interface FurnitureColorOption {
  name: string;
  hex: string;
}

export interface FurnitureFAQ {
  question: string;
  answer: string;
}

export interface FurnitureProduct {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  subcategorySlug: string;
  shortDescription: string;
  description: string;
  price: number | null; // null = "Price on Request"
  originalPrice?: number | null;
  discountPercent?: number | null;
  badge?: 'New' | 'Customizable' | 'Best Seller' | null;
  primaryImage: string;
  secondaryImage: string;
  images: string[];
  dimensions: string;
  seatingCapacity?: string;
  materials: string[];
  finish: string;
  colors: FurnitureColorOption[];
  isCustomizable: boolean;
  inStock: boolean;
  careInstructions: string;
  deliveryInfo: string;
  faqs: FurnitureFAQ[];
}

export interface FurnitureSubcategory {
  id: string;
  slug: string;
  name: string;
  categorySlug?: string;
  description: string;
  image: string;
}

export interface FurnitureCategory {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  subcategories: FurnitureSubcategory[];
}

export interface EditorialArticle {
  categorySlug: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  tips: string[];
}

/**
 * Google Drive link resolution mapping:
 * Provides direct CDN / public URL and safe local fallback for each category
 */
export const CATEGORY_BANNER_CONFIG = {
  sofas: {
    name: 'Sofas',
    driveLink: 'https://drive.google.com/file/d/1u0EQjACYj_7imNel2FYYGusqWzoSECKe/view?usp=drivesdk',
    directUrl: 'https://lh3.googleusercontent.com/d/1u0EQjACYj_7imNel2FYYGusqWzoSECKe',
    localFallback: '/images/categories/sofas_banner.png',
  },
  'chairs-seating': {
    name: 'Chairs & Seating',
    driveLink: 'https://drive.google.com/file/d/1atgmcQNi-pb9PB47ArSGzVftz-GhdnaK/view?usp=drivesdk',
    directUrl: 'https://lh3.googleusercontent.com/d/1atgmcQNi-pb9PB47ArSGzVftz-GhdnaK',
    localFallback: '/images/categories/chairs_seating_banner.png',
  },
  tables: {
    name: 'Tables',
    driveLink: 'https://drive.google.com/file/d/1sq_LShCOxY0uId4qoyGfva_3-4eQ2RKN/view?usp=drivesdk',
    directUrl: 'https://lh3.googleusercontent.com/d/1sq_LShCOxY0uId4qoyGfva_3-4eQ2RKN',
    localFallback: '/images/categories/tables_banner.png',
  },
  'living-room-storage': {
    name: 'Living Room & Storage',
    driveLink: '', // client instructed: keep current banner image
    directUrl: '/images/categories/living_room_storage_banner.jpg',
    localFallback: '/images/categories/living_room_storage_banner.jpg',
  },
  'bedroom-sets': {
    name: 'Bedroom Sets',
    driveLink: 'https://drive.google.com/file/d/1E0-J399mSNfvs7R6wTYgK_v7UL4Qzllp/view?usp=drivesdk',
    directUrl: 'https://lh3.googleusercontent.com/d/1E0-J399mSNfvs7R6wTYgK_v7UL4Qzllp',
    localFallback: '/images/categories/bedroom_sets_banner.png',
  },
  kitchens: {
    name: 'Kitchens',
    driveLink: 'https://drive.google.com/file/d/1yZRSCNb9qGhN4ruKgf8kEw8hd2iuJrcE/view?usp=drivesdk',
    directUrl: 'https://lh3.googleusercontent.com/d/1yZRSCNb9qGhN4ruKgf8kEw8hd2iuJrcE',
    localFallback: '/images/categories/kitchens_banner.png',
  },
} as const;

export const resolveCategoryBanner = (categorySlug: string): string => {
  const conf = CATEGORY_BANNER_CONFIG[categorySlug as keyof typeof CATEGORY_BANNER_CONFIG];
  if (!conf) return '/images/categories/sofas_banner.png';
  return conf.directUrl || conf.localFallback;
};

export const furnitureCategories: FurnitureCategory[] = ${JSON.stringify(furnitureCategories, null, 2)};

export const furnitureProducts: FurnitureProduct[] = ${JSON.stringify(mappedProds, null, 2)};

export const getCuratedCarousels = (): {
  carousel1: FurnitureProduct[];
  carousel2: FurnitureProduct[];
} => {
  const c1Ids = [
    'l-shaped-sofas-01',
    '3-seater-sofas-01',
    'fabric-sofas-01',
    '6-seater-dining-tables-01',
    'round-dining-tables-01',
    'marble-dining-tables-01',
    'king-size-beds-01',
    'hydraulic-storage-beds-01',
    'bedside-tables-01',
    'wall-mounted-tv-units-01',
    'sliding-door-wardrobes-01',
    'sideboards-consoles-01'
  ];

  const c2Ids = [
    'sectional-sofas-02',
    'sofa-cum-beds-02',
    'modular-sofas-02',
    '8-seater-dining-tables-02',
    'extendable-dining-tables-02',
    'wooden-dining-tables-02',
    'queen-size-beds-02',
    'storage-beds-02',
    'upholstered-beds-02',
    'minimal-tv-units-02',
    'walk-in-wardrobes-02',
    'display-units-02'
  ];

  const carousel1 = c1Ids
    .map((id) => furnitureProducts.find((p) => p.id === id))
    .filter((p): p is FurnitureProduct => Boolean(p));

  const carousel2 = c2Ids
    .map((id) => furnitureProducts.find((p) => p.id === id))
    .filter((p): p is FurnitureProduct => Boolean(p));

  return { carousel1, carousel2 };
};

export const getProductsByCategory = (categorySlug: string): FurnitureProduct[] => {
  return furnitureProducts.filter((p) => p.categorySlug === categorySlug);
};

export const getProductsBySubcategory = (
  categorySlug: string,
  subcategorySlug: string
): FurnitureProduct[] => {
  return furnitureProducts.filter(
    (p) =>
      (!categorySlug || p.categorySlug === categorySlug) &&
      p.subcategorySlug === subcategorySlug
  );
};

export const getCategoryBySlug = (slug: string): FurnitureCategory | undefined => {
  return furnitureCategories.find((c) => c.slug === slug);
};

export const getSubcategoryBySlug = (
  categorySlug: string,
  subcategorySlug: string
): FurnitureSubcategory | undefined => {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories.find((s) => s.slug === subcategorySlug);
};

export const getProductBySlug = (slug: string): FurnitureProduct | undefined => {
  return furnitureProducts.find((p) => p.slug === slug || p.id === slug);
};

export const getRelatedProductsForSubcategory = (
  categorySlug: string,
  subcategorySlug: string,
  limit: number = 4
): FurnitureProduct[] => {
  const othersInCat = furnitureProducts.filter(
    (p) => p.categorySlug === categorySlug && p.subcategorySlug !== subcategorySlug
  );
  if (othersInCat.length >= limit) return othersInCat.slice(0, limit);
  const othersOverall = furnitureProducts.filter(
    (p) => p.subcategorySlug !== subcategorySlug
  );
  return othersOverall.slice(0, limit);
};

export const getRelatedProducts = (
  currentProduct: FurnitureProduct,
  limit: number = 4
): FurnitureProduct[] => {
  const sameSub = furnitureProducts.filter(
    (p) => p.id !== currentProduct.id && p.subcategorySlug === currentProduct.subcategorySlug
  );
  const sameCat = furnitureProducts.filter(
    (p) =>
      p.id !== currentProduct.id &&
      p.subcategorySlug !== currentProduct.subcategorySlug &&
      p.categorySlug === currentProduct.categorySlug
  );
  const otherCats = furnitureProducts.filter(
    (p) => p.id !== currentProduct.id && p.categorySlug !== currentProduct.categorySlug
  );
  const combined = [...sameSub, ...sameCat, ...otherCats];
  return combined.slice(0, limit);
};

export const getCompleteTheLookProducts = (
  currentProduct: FurnitureProduct,
  limit: number = 4
): FurnitureProduct[] => {
  const currentCat = currentProduct.categorySlug;
  let complementaryCats: string[] = [];
  if (currentCat === 'sofas') {
    complementaryCats = ['living-room-storage', 'tables', 'chairs-seating'];
  } else if (currentCat === 'tables') {
    complementaryCats = ['chairs-seating', 'living-room-storage', 'sofas'];
  } else if (currentCat === 'bedroom-sets') {
    complementaryCats = ['living-room-storage', 'chairs-seating'];
  } else if (currentCat === 'kitchens') {
    complementaryCats = ['tables', 'living-room-storage'];
  } else {
    complementaryCats = ['sofas', 'tables', 'bedroom-sets'];
  }

  const matches = furnitureProducts.filter(
    (p) => p.id !== currentProduct.id && complementaryCats.includes(p.categorySlug)
  );
  return matches.slice(0, limit);
};

export const editorialGuides: Record<string, EditorialArticle> = {
  sofas: {
    categorySlug: 'sofas',
    title: 'The Architecture of Comfortable Living',
    subtitle: 'How to select the right sofa proportions and upholstery for Mumbai homes',
    paragraphs: [
      'Choosing a sofa for a Mumbai home is an exercise in balancing spatial proportions with daily living realities. Humidity, room dimensions, natural light, and entertaining frequency all influence the ideal choice.',
      'Our factory workshops engineer kiln-dried timber structures with 5-year guarantees, preventing seasonal warpage while multi-density high-resilience foams ensure support that lasts decades.'
    ],
    tips: [
      'Allow at least 30 inches of walking clearance around coffee tables and passages.',
      'Select performance stain-resistant fabrics for homes with children or pets.',
      'Consider L-shapes to anchor open-plan living rooms without requiring partition walls.'
    ]
  },
  'chairs-seating': {
    categorySlug: 'chairs-seating',
    title: 'Ergonomic Art & Sculpted Comfort',
    subtitle: 'Accent chairs, dining seating, and versatile puffies tailored for modern interiors',
    paragraphs: [
      'Seating serves as both functional rest and visual statement. Each chair in our collection is precision-balanced for ergonomic back support and long conversations.',
      'From solid teak dining frames to plush pouffes and puffies, our Santacruz artisans craft pieces that integrate seamlessly into bespoke living suites.'
    ],
    tips: [
      'Match dining chair seat heights (18 inches) to dining table heights (30 inches) for optimal comfort.',
      'Use occasional coffee chairs to create intimate reading nooks near balconies or bay windows.',
      'Puffies and ottomans offer effortless mobile seating when entertaining guests in Mumbai apartments.'
    ]
  },
  tables: {
    categorySlug: 'tables',
    title: 'Creating Spaces for Shared Memories',
    subtitle: 'A guide to selecting dining table shapes, coffee tables, and console silhouettes',
    paragraphs: [
      'A dining or centre table is the architectural anchor of social spaces. Whether carved from seasoned Burma teak or cut from Italian Statuario marble, each tabletop is sealed against stains and heat.',
      'Console tables and coffee tables carry coordinated design motifs, tying living and entryway zones together into a unified aesthetic narrative.'
    ],
    tips: [
      'Plan 36 inches between the table edge and walls to allow chairs to slide out comfortably.',
      'Round dining tables facilitate effortless conversation and fluid room movement.',
      'For compact dining nooks, explore central pedestal bases that provide legroom on all sides.'
    ]
  },
  'living-room-storage': {
    categorySlug: 'living-room-storage',
    title: 'Effortless Order & Architectural Joinery',
    subtitle: 'From floating TV base units to curated crockery and bar vitrines',
    paragraphs: [
      'Intelligent storage transforms living rooms into calm architectural retreats. Concealed wire management, fluted wood paneling, and warm LED cove backlighting elevate entertainment areas.',
      'Our dedicated bar units and crockery vitrines feature tempered glass, soft-close Blum hardware, and velvet-lined cutlery drawers.'
    ],
    tips: [
      'TV base units should ideally measure 6 to 12 inches wider than the television screen for visual balance.',
      'Incorporate integrated warm LED lighting inside crockery vitrines for luxurious evening ambiance.',
      'Acoustic slat wall cladding dampens echo while providing seamless concealed raceways for AV cabling.'
    ]
  },
  'bedroom-sets': {
    categorySlug: 'bedroom-sets',
    title: 'Designing Your Personal Sanctuary',
    subtitle: 'Master suite beds, floor-to-ceiling wardrobes, and dressing consoles',
    paragraphs: [
      'A great bedroom suite balances peaceful aesthetics with generous, dust-free storage. Our hydraulic lift-up mechanisms unlock massive floor-level storage without requiring swing space.',
      'Matching nightstands and bespoke dressing tables with backlit mirrors complete the suite with tailored sophistication.'
    ],
    tips: [
      'Maintain at least 24 inches on both sides of a bed for side tables and unhindered movement.',
      'Floor-to-ceiling sliding wardrobe doors save valuable bedroom swing space.',
      'Opt for gas-lift hydraulic storage to access underbed bedding with effortless fingertip action.'
    ]
  },
  kitchens: {
    categorySlug: 'kitchens',
    title: 'Precision Joinery for Culinary Living',
    subtitle: 'Modular cabinetry, ergonomic work triangles, and premium hardware systems',
    paragraphs: [
      'The modern kitchen demands commercial-grade durability paired with sleek aesthetic minimalism. We engineer marine-grade BWP plywood carcases that withstand Mumbai monsoon humidity.',
      'Paired with German soft-close runners, seamless quartz surfaces, and anti-scratch PU/acrylic shutters, every kitchen is manufactured to the millimetre.'
    ],
    tips: [
      'Adhere to the classic work triangle between refrigerator, sink, and cooktop for efficient movement.',
      'Utilize tandem deep drawers instead of base shelves for 100% accessible pot and pan storage.',
      'Choose seamless backsplashes with under-cabinet 3000K warm LED strips for optimal task illumination.'
    ]
  }
};
`;

fs.writeFileSync('src/data/furniture.ts', fileHeader);
console.log('Successfully written updated src/data/furniture.ts with 6 major categories and 21 subcategories!');
