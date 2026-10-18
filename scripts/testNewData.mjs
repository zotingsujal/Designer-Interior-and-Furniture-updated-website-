import fs from 'fs';

const mappedProds = JSON.parse(fs.readFileSync('scripts/mappedProducts.json', 'utf-8'));

// Verify that every product has a valid category and subcategory
const categories = [
  {
    id: "cat-sofas",
    slug: "sofas",
    name: "Sofas",
    tagline: "Comfort, Crafted Around Your Space",
    description: "From expansive corner L-shapes and versatile sofa-cum-beds to hand-tufted Italian leather suites, each sofa is custom engineered in our Mumbai factory with high-resilience comfort foams, kiln-dried timber frames, and bespoke upholstery.",
    heroImage: "https://drive.google.com/file/d/1u0EQjACYj_7imNel2FYYGusqWzoSECKe/view?usp=drivesdk",
    subcategories: [
      { id: "sub-sofa-sets", slug: "sofa-sets", name: "Sofa Sets", categorySlug: "sofas", description: "Bespoke 2-seater, 3-seater, modular, and leather living room sofa suites.", image: "/images/bespoke/dsigner_factory_sofa_1791361355243.jpg" },
      { id: "sub-l-shape-sofas", slug: "l-shape-sofas", name: "L-Shape Sofas", categorySlug: "sofas", description: "Bespoke corner and chaise sectionals tailored to architectural room proportions.", image: "/images/bespoke/luxury_sofa_bed_1791460634066.jpg" },
      { id: "sub-sofa-cum-beds", slug: "sofa-cum-beds", name: "Sofa Cum Beds", categorySlug: "sofas", description: "Dual-purpose sofas with smooth hydraulic glide pullouts and concealed storage.", image: "/images/bespoke/sofa_cum_bed_craft_1790862556744.jpg" }
    ]
  },
  {
    id: "cat-chairs-seating",
    slug: "chairs-seating",
    name: "Chairs & Seating",
    tagline: "Ergonomic Elegance & Statement Seating",
    description: "Handcrafted dining chairs, occasional coffee chairs, relaxation rocking chairs, and plush pouffes and puffies tailored with solid timber frames and designer upholstery.",
    heroImage: "https://drive.google.com/file/d/1atgmcQNi-pb9PB47ArSGzVftz-GhdnaK/view?usp=drivesdk",
    subcategories: [
      { id: "sub-dining-chairs", slug: "dining-chairs", name: "Dining Chairs", categorySlug: "chairs-seating", description: "Ergonomic solid wood and upholstered dining seating designed for comfort and durability.", image: "/images/categories/chairs_seating_banner.png" },
      { id: "sub-coffee-chairs", slug: "coffee-chairs", name: "Coffee Chairs", categorySlug: "chairs-seating", description: "Sculptural accent and lounge chairs tailored for reading corners, coffee tables, and dens.", image: "/images/categories/chairs_seating_banner.png" },
      { id: "sub-rocking-chairs", slug: "rocking-chairs", name: "Rocking Chairs", categorySlug: "chairs-seating", description: "Artisan-crafted rocking chairs balancing smooth gentle motion with solid timber joinery.", image: "/images/categories/chairs_seating_banner.png" },
      { id: "sub-puffies", slug: "puffies", name: "Puffies", categorySlug: "chairs-seating", description: "Plush upholstered pouffes, ottomans, and puffies offering versatile extra seating and footrests.", image: "/images/categories/chairs_seating_banner.png" }
    ]
  },
  {
    id: "cat-tables",
    slug: "tables",
    name: "Tables",
    tagline: "Gather Around Something Beautiful",
    description: "Solid Burma teak, European walnut, natural Italian marble, and sculpted architectural pedestals designed to anchor dining areas, living rooms, and elegant entry foyers.",
    heroImage: "https://drive.google.com/file/d/1sq_LShCOxY0uId4qoyGfva_3-4eQ2RKN/view?usp=drivesdk",
    subcategories: [
      { id: "sub-dining-tables", slug: "dining-tables", name: "Dining Tables", categorySlug: "tables", description: "Bespoke 4, 6, 8, and 10-seater banquet and family dining tables in solid wood and marble.", image: "/images/bespoke/dining_bespoke_teak_1790862543973.jpg" },
      { id: "sub-centre-tables", slug: "centre-tables", name: "Centre Tables", categorySlug: "tables", description: "Central living room statement tables with book-matched veneers, fluting, and stone tops.", image: "/images/categories/tables_banner.png" },
      { id: "sub-coffee-tables", slug: "coffee-tables", name: "Coffee Tables", categorySlug: "tables", description: "Elegant low-profile coffee tables designed to complement modern lounge suites.", image: "/images/categories/tables_banner.png" },
      { id: "sub-console-tables", slug: "console-tables", name: "Console Tables", categorySlug: "tables", description: "Architectural foyer and hallway console tables with slim profiles and drawer storage.", image: "/images/categories/tables_banner.png" }
    ]
  },
  {
    id: "cat-living-room-storage",
    slug: "living-room-storage",
    name: "Living Room & Storage",
    tagline: "Thoughtful Storage, Beautifully Integrated",
    description: "Seamless living room entertainment walls, TV base units, acoustic wood panelling, crockery display credenzas, and bespoke entertaining bar units built to the millimetre.",
    heroImage: "/images/categories/living_room_storage_banner.jpg",
    subcategories: [
      { id: "sub-tv-base-unit", slug: "tv-base-unit", name: "TV Base Unit", categorySlug: "living-room-storage", description: "Low-profile floor-standing and bench TV media credenzas with wire management raceways.", image: "/images/bespoke/tv_unit_acoustic_wood_1790862520491.jpg" },
      { id: "sub-wall-unit", slug: "wall-unit", name: "Wall Unit", categorySlug: "living-room-storage", description: "Architectural wall-mounted media panels, acoustic slat cladding, and floating modular storage.", image: "/images/bespoke/tv_unit_acoustic_wood_1790862520491.jpg" },
      { id: "sub-crockery-units", slug: "crockery-units", name: "Crockery Units", categorySlug: "living-room-storage", description: "Dining and living storage cabinets, fluted credenzas, and vitrines for dinnerware and glassware.", image: "/images/categories/living_room_storage_banner.jpg" },
      { id: "sub-bar-units", slug: "bar-units", name: "Bar Units", categorySlug: "living-room-storage", description: "Integrated home bar cabinets, stemware racks, wine storage bays, and cocktail consoles.", image: "/images/categories/living_room_storage_banner.jpg" }
    ]
  },
  {
    id: "cat-bedroom-sets",
    slug: "bedroom-sets",
    name: "Bedroom Sets",
    tagline: "Designed for Rest. Crafted for Everyday Living.",
    description: "Master suite beds featuring padded architectural headboards, sound-damped hydraulic storage, floor-to-ceiling wardrobes, matching side tables, and vanity dressing tables.",
    heroImage: "https://drive.google.com/file/d/1E0-J399mSNfvs7R6wTYgK_v7UL4Qzllp/view?usp=drivesdk",
    subcategories: [
      { id: "sub-beds", slug: "beds", name: "Beds", categorySlug: "bedroom-sets", description: "King, queen, platform, and hydraulic storage beds with bespoke upholstered headboards.", image: "/images/categories/bedroom_sets_banner.png" },
      { id: "sub-wardrobes", slug: "wardrobes", name: "Wardrobes", categorySlug: "bedroom-sets", description: "Floor-to-ceiling sliding, hinged, and walk-in wardrobe storage systems with aluminum profiles.", image: "/images/bespoke/luxury_bedroom_wardrobe_1790862531824.jpg" },
      { id: "sub-side-tables", slug: "side-tables", name: "Side Tables", categorySlug: "bedroom-sets", description: "Floating and freestanding bedside nightstands with fluted accents and soft-close drawers.", image: "/images/categories/bedroom_sets_banner.png" },
      { id: "sub-dressing-tables", slug: "dressing-tables", name: "Dressing Tables", categorySlug: "bedroom-sets", description: "Bespoke bedroom vanity consoles, dressing tables with mirrors, and dedicated cosmetics drawers.", image: "/images/categories/bedroom_sets_banner.png" }
    ]
  },
  {
    id: "cat-kitchens",
    slug: "kitchens",
    name: "Kitchens",
    tagline: "Culinary Spaces Engineered with Precision",
    description: "High-performance modular kitchens and custom tailored cabinetry featuring Blum & Hafele hardware, quartz countertops, marine-grade ply carcases, and bespoke island designs.",
    heroImage: "https://drive.google.com/file/d/1yZRSCNb9qGhN4ruKgf8kEw8hd2iuJrcE/view?usp=drivesdk",
    subcategories: [
      { id: "sub-modular-kitchens", slug: "modular-kitchens", name: "Modular Kitchens", categorySlug: "kitchens", description: "Precision modular cabinetry layouts, tandem pullouts, pantry units, and seamless acrylic/PU shutters.", image: "/images/categories/kitchens_banner.png" },
      { id: "sub-custom-kitchens", slug: "custom-kitchens", name: "Custom Kitchens", categorySlug: "kitchens", description: "Architectural custom kitchens built to millimeter dimensions with luxury quartz and breakfast counters.", image: "/images/categories/kitchens_banner.png" }
    ]
  }
];

console.log('Categories count:', categories.length);
console.log('Subcategories count:', categories.reduce((a, c) => a + c.subcategories.length, 0));

// Check each product
mappedProds.forEach(p => {
  const cat = categories.find(c => c.slug === p.categorySlug);
  if (!cat) throw new Error(`Unknown category: ${p.categorySlug} for product ${p.id}`);
  const sub = cat.subcategories.find(s => s.slug === p.subcategorySlug);
  if (!sub) throw new Error(`Unknown subcategory: ${p.subcategorySlug} in category ${p.categorySlug} for product ${p.id}`);
});

console.log('All 98 products validated against the 6 major categories and 21 subcategories!');
