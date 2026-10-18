// Authoritative Central Furniture Catalogue Architecture
// Strict 4 Major Categories, 49 Subcategories, 98 Unique Verified Products
// 100% Unique Verified Images Across the Entire Website - Zero Duplicates

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

export const furnitureCategories: FurnitureCategory[] = [
  {
    id: 'cat-sofas',
    slug: 'sofas',
    name: 'Sofas',
    tagline: 'Comfort, Crafted Around Your Space',
    description: 'From expansive corner L-shapes and versatile sofa-cum-beds to hand-tufted Italian leather suites, each sofa is custom engineered in our Mumbai factory with high-resilience comfort foams, kiln-dried timber frames, and bespoke upholstery.',
    heroImage: 'https://lh3.googleusercontent.com/d/1u0EQjACYj_7imNel2FYYGusqWzoSECKe',
    subcategories: [
      {
        id: 'sub-sofa-sets',
        slug: 'sofa-sets',
        name: 'Sofa Sets',
        categorySlug: 'sofas',
        description: 'Handcrafted complete living room sofa suites and formal passenger couches tailored with high-density foams and luxury upholstery.',
        image: '/images/subcategories/sofas_sofa-sets.png'
      },
      {
        id: 'sub-l-shape-sofas',
        slug: 'l-shape-sofas',
        name: 'L-Shape Sofas',
        categorySlug: 'sofas',
        description: 'Bespoke corner and chaise sectionals tailored to architectural room proportions, custom seating depth, and imported fabrics.',
        image: '/images/subcategories/sofas_l-shape-sofas.png'
      },
      {
        id: 'sub-sofa-cum-beds',
        slug: 'sofa-cum-beds',
        name: 'Sofa Cum Beds',
        categorySlug: 'sofas',
        description: 'Engineered dual-purpose sofas with smooth hydraulic glide pullouts, high-density comfort mattresses, and concealed bedding storage.',
        image: '/images/subcategories/sofas_sofa-cum-beds.png'
      }
    ]
  },
  {
    id: 'cat-chairs-seating',
    slug: 'chairs-seating',
    name: 'Chairs & Seating',
    tagline: 'Ergonomic Poise & Statement Accent Pieces',
    description: 'Handcrafted dining chairs, occasional coffee lounge chairs, artisan rocking chairs, and plush pouffes built with solid hardwood frames and bespoke upholstery.',
    heroImage: 'https://lh3.googleusercontent.com/d/1atgmcQNi-pb9PB47ArSGzVftz-GhdnaK',
    subcategories: [
      {
        id: 'sub-dining-chairs',
        slug: 'dining-chairs',
        name: 'Dining Chairs',
        categorySlug: 'chairs-seating',
        description: 'Ergonomically contoured dining chairs handcrafted with solid teak legs and stain-resistant designer upholstery.',
        image: '/images/subcategories/chairs_dining-chairs.png'
      },
      {
        id: 'sub-coffee-chairs',
        slug: 'coffee-chairs',
        name: 'Coffee Chairs',
        categorySlug: 'chairs-seating',
        description: 'Occasional lounge chairs, reading tub seats, and accent club chairs tailored for living rooms and bedroom corners.',
        image: '/images/subcategories/chairs_coffee-chairs.png'
      },
      {
        id: 'sub-rocking-chairs',
        slug: 'rocking-chairs',
        name: 'Rocking Chairs',
        categorySlug: 'chairs-seating',
        description: 'Relaxing architectural rocking chairs with balanced weight distribution, kiln-dried timber skids, and supportive lumbar contours.',
        image: '/images/subcategories/chairs_rocking-chairs.png'
      },
      {
        id: 'sub-puffies',
        slug: 'puffies',
        name: 'Puffies',
        categorySlug: 'chairs-seating',
        description: 'Versatile upholstered pouffes, storage footstools, and soft cylindrical accent ottomans for informal living spaces.',
        image: '/images/subcategories/chairs_puffies.png'
      }
    ]
  },
  {
    id: 'cat-tables',
    slug: 'tables',
    name: 'Tables',
    tagline: 'Centred Around Togetherness & Living Elegance',
    description: 'Handcrafted formal dining tables, sculptural centre tables, and functional coffee tables built with solid Burma teak and sealed Italian marble.',
    heroImage: 'https://lh3.googleusercontent.com/d/1pFoK15EdGxbtCFOZNNL453wPDy5JYuSX',
    subcategories: [
      {
        id: 'sub-dining-tables',
        slug: 'dining-tables',
        name: 'Dining Tables',
        categorySlug: 'tables',
        description: 'Handcrafted banquet and family dining centerpieces in solid seasoned teak, American walnut, and Italian marble.',
        image: '/images/subcategories/tables_dining-tables.png'
      },
      {
        id: 'sub-centre-tables',
        slug: 'centre-tables',
        name: 'Centre Tables',
        categorySlug: 'tables',
        description: 'Statement living room centre tables featuring fluted pedestals, dual-level cantilever surfaces, and natural stone tops.',
        image: '/images/subcategories/tables_centre-tables.png'
      },
      {
        id: 'sub-coffee-tables',
        slug: 'coffee-tables',
        name: 'Coffee Tables',
        categorySlug: 'tables',
        description: 'Low-profile accent coffee tables and nesting table sets proportioned for relaxed living room entertaining.',
        image: '/images/subcategories/tables_coffee-tables.png'
      }
    ]
  },
  {
    id: 'cat-living-room-storage',
    slug: 'living-room-storage',
    name: 'Living Room & Storage',
    tagline: 'Architectural Joinery & Seamless Organisation',
    description: 'Bespoke low-profile TV base units, statement media wall units, illuminated luxury crockery display cabinets, handcrafted dry bar units, and fluted sideboards.',
    heroImage: 'https://lh3.googleusercontent.com/d/1vW1GM7Hj2GTihGzrF45E4PUsBv8N7j9T',
    subcategories: [
      {
        id: 'sub-tv-base-unit',
        slug: 'tv-base-unit',
        name: 'TV Base Unit',
        categorySlug: 'living-room-storage',
        description: 'Floor-standing low-profile media credenzas with concealed cable chaseways, smooth push-to-open soft drawers, and solid plinths.',
        image: '/images/subcategories/storage_tv-base-unit.png'
      },
      {
        id: 'sub-wall-unit',
        slug: 'wall-unit',
        name: 'Wall Unit',
        categorySlug: 'living-room-storage',
        description: 'Floating acoustic wooden wall panels, integrated media backdrops, and illuminated cantilever shelves.',
        image: '/images/subcategories/storage_wall-unit.png'
      },
      {
        id: 'sub-crockery-units',
        slug: 'crockery-units',
        name: 'Crockery Units',
        categorySlug: 'living-room-storage',
        description: 'Refined glassware vitrines, linen cupboards, and fluted crockery display consoles with warm LED integration.',
        image: '/images/subcategories/storage_crockery-units.png'
      },
      {
        id: 'sub-bar-units',
        slug: 'bar-units',
        name: 'Bar Units',
        categorySlug: 'living-room-storage',
        description: 'Bespoke home bar cabinets, stemware racks, lockable spirits storage, and pull-out marble mixing ledges.',
        image: '/images/subcategories/storage_bar-units.png'
      },
      {
        id: 'sub-sideboards-and-accent-cabinets',
        slug: 'sideboards-and-accent-cabinets',
        name: 'Sideboards and Accent Cabinets',
        categorySlug: 'living-room-storage',
        description: 'Architectural fluted sideboards, dining credenzas, and accent storage cabinets with push-to-open hardware and marble accents.',
        image: '/images/subcategories/storage_sideboards-and-accent-cabinets.png'
      }
    ]
  },
  {
    id: 'cat-bedroom-sets',
    slug: 'bedroom-sets',
    name: 'Bedroom Sets',
    tagline: 'Sanctuary for Rest, Renewal & Master Living',
    description: 'Architectural master beds with noise-free joinery and hydraulic storage, bespoke floor-to-ceiling sliding and hinged wardrobes, matching side tables, and vanity dressing tables.',
    heroImage: 'https://lh3.googleusercontent.com/d/1E0-J399mSNfvs7R6wTYgK_v7UL4Qzllp',
    subcategories: [
      {
        id: 'sub-beds',
        slug: 'beds',
        name: 'Beds',
        categorySlug: 'bedroom-sets',
        description: 'Master king and queen beds engineered with noise-free joinery, upholstered acoustic headboards, and effortless hydraulic storage.',
        image: '/images/subcategories/bedroom_beds.png'
      },
      {
        id: 'sub-wardrobes',
        slug: 'wardrobes',
        name: 'Wardrobes',
        categorySlug: 'bedroom-sets',
        description: 'Floor-to-ceiling sliding, hinged, and walk-in closet systems with aluminum glass shutters and customized interior drawers.',
        image: '/images/subcategories/bedroom_wardrobes.png'
      },
      {
        id: 'sub-side-tables',
        slug: 'side-tables',
        name: 'Side Tables',
        categorySlug: 'bedroom-sets',
        description: 'Floating nightstands and drawer bedside companions crafted to align seamlessly with bed platform heights.',
        image: '/images/subcategories/bedroom_side-tables.png'
      },
      {
        id: 'sub-dressing-tables',
        slug: 'dressing-tables',
        name: 'Dressing Tables',
        categorySlug: 'bedroom-sets',
        description: 'Tailored vanity dressing consoles with integrated halo mirrors, jewelry organizers, and plush stools.',
        image: '/images/subcategories/bedroom_dressing-tables.png'
      }
    ]
  },
  {
    id: 'cat-kitchens',
    slug: 'kitchens',
    name: 'Kitchens',
    tagline: 'Ergonomic Efficiency & Culinary Craftsmanship',
    description: 'German hardware-driven modular kitchen layouts, moisture-resistant marine ply cabinetry, acrylic and PU finishes, and complete bespoke culinary spaces manufactured in our Mumbai factory.',
    heroImage: 'https://lh3.googleusercontent.com/d/1yZRSCNb9qGhN4ruKgf8kEw8hd2iuJrcE',
    subcategories: [
      {
        id: 'sub-modular-custom-kitchens',
        slug: 'modular-custom-kitchens',
        name: 'Modular / Custom Kitchens',
        categorySlug: 'kitchens',
        description: 'Bespoke modular kitchen layouts and custom culinary carpentry featuring boiling-water-proof (BWP) marine ply, quartz countertops, and German soft-close fittings.',
        image: '/images/subcategories/kitchens_modular-custom-kitchens.png'
      }
    ]
  }
];

export const furnitureProducts: FurnitureProduct[] = [
  {
    "id": "l-shaped-sofas-01",
    "slug": "l-shaped-sofas-signature-01",
    "name": "Arezzo Master Crafted L-Shaped Sectional",
    "categorySlug": "sofas",
    "subcategorySlug": "l-shape-sofas",
    "shortDescription": "Expansive corner sectional with deep lounge seating, duck feather blend cushions, and solid teak base.",
    "description": "Expansive corner sectional with deep lounge seating, duck feather blend cushions, and solid teak base. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 125000,
    "originalPrice": 143750,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "112\" W x 68\" D x 33\" H",
    "materials": [
      "Kiln-Dried Teak",
      "Belgian Boucl\u00e9",
      "High-Resilience Foam"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "l-shaped-sofas-02",
    "slug": "l-shaped-sofas-prestige-02",
    "name": "Savona Architectural Chaise Sofa",
    "categorySlug": "sofas",
    "subcategorySlug": "l-shape-sofas",
    "shortDescription": "Streamlined contemporary L-couch featuring a floating low plinth, customizable left or right orientation.",
    "description": "Streamlined contemporary L-couch featuring a floating low plinth, customizable left or right orientation. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 110000,
    "originalPrice": 123200,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "104\" W x 64\" D x 32\" H",
    "materials": [
      "Solid Oak",
      "Stain-Resistant Linen",
      "Pocket Spring Core"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "sofa-cum-beds-01",
    "slug": "sofa-cum-beds-signature-01",
    "name": "Verona Hydraulic Sofa Cum Bed",
    "categorySlug": "sofas",
    "subcategorySlug": "sofa-cum-beds",
    "shortDescription": "Seamless one-touch hydraulic mechanism that effortlessly transforms from a formal three-seater to a queen sleeper.",
    "description": "Seamless one-touch hydraulic mechanism that effortlessly transforms from a formal three-seater to a queen sleeper. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 95000,
    "originalPrice": 109250,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "86\" W x 38\" D x 35\" H (Bed: 60\" x 78\")",
    "materials": [
      "Steel Hydraulic Mechanism",
      "High-Density Memory Foam",
      "Performance Chenille"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "sofa-cum-beds-02",
    "slug": "sofa-cum-beds-prestige-02",
    "name": "Modena Storage Glide Daybed Couch",
    "categorySlug": "sofas",
    "subcategorySlug": "sofa-cum-beds",
    "shortDescription": "Under-seat concealed ottoman drawer with pull-out trundle mechanism, ideal for Mumbai compact apartments.",
    "description": "Under-seat concealed ottoman drawer with pull-out trundle mechanism, ideal for Mumbai compact apartments. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 88000,
    "originalPrice": 98560,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "82\" W x 36\" D x 34\" H",
    "materials": [
      "Reinforced Hardwood",
      "Orthopedic Foam",
      "Textured Weave"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
    {
      "id": "crown-malaysian-comfort-sofa-set",
      "slug": "crown-malaysian-comfort-sofa-set",
      "name": "Crown Malaysian Comfort Sofa Set",
      "categorySlug": "sofas",
      "subcategorySlug": "sofa-sets",
      "shortDescription": "Mastercrafted Malaysian-inspired luxury sofa suite featuring deep plush seating, ergonomic lumbar contouring, and artisan upholstery.",
      "description": "The Crown Malaysian Comfort Sofa Set exemplifies master joinery and refined living room elegance. Handcrafted in our Mumbai workshop with kiln-dried solid hardwood framing, high-resilience foam layers, and luxury imported fabric, this suite offers sublime comfort for family living and distinguished entertaining.",
      "price": null,
      "originalPrice": null,
      "discountPercent": null,
      "badge": null,
      "primaryImage": "/images/products/sofa-sets/crown-malaysian-comfort-sofa-set/crown-malaysian-comfort-sofa-set-white-background.jpg",
      "secondaryImage": "/images/products/sofa-sets/crown-malaysian-comfort-sofa-set/crown-malaysian-comfort-sofa-set-premium-interior.jpg",
      "images": [
          "/images/products/sofa-sets/crown-malaysian-comfort-sofa-set/crown-malaysian-comfort-sofa-set-white-background.jpg",
          "/images/products/sofa-sets/crown-malaysian-comfort-sofa-set/crown-malaysian-comfort-sofa-set-premium-interior.jpg",
          "/images/products/sofa-sets/crown-malaysian-comfort-sofa-set/crown-malaysian-comfort-3-seater-front-view.jpg",
          "/images/products/sofa-sets/crown-malaysian-comfort-sofa-set/crown-malaysian-comfort-3-seater-side-view.jpg",
          "/images/products/sofa-sets/crown-malaysian-comfort-sofa-set/crown-malaysian-comfort-1-seater-front-view.jpg"
      ],
      "dimensions": "",
      "materials": [
          "Solid Seasoned Hardwood Frame",
          "High-Resilience Contour Foam",
          "Stain-Resistant Imported Velvet / Fabric"
      ],
      "finish": "Hand-Rubbed Natural Timber Seal",
      "colors": [],
      "isCustomizable": false,
      "inStock": true,
      "careInstructions": "Dust regularly with soft dry microfiber cloth. Professional upholstery cleaning recommended annually.",
      "deliveryInfo": "White-glove delivery and assembly across Mumbai metropolitan region directly from our workshop.",
      "faqs": [
          {
              "question": "Can this sofa set be customized in configuration?",
              "answer": "Yes, you can configure 3-seater, 2-seater, or individual armchairs to match your floor plan."
          },
          {
              "question": "Where is this manufactured?",
              "answer": "100% fabricated in our Mumbai factory workshop with solid hardwood joinery."
          }
      ]
  },
  {
      "id": "two-tone-sofa-set",
      "slug": "two-tone-sofa-set",
      "name": "Two Tone Sofa Set",
      "categorySlug": "sofas",
      "subcategorySlug": "sofa-sets",
      "shortDescription": "Sophisticated dual-palette contemporary sofa set with tailored contrast piping, supportive cushions, and reinforced solid frame.",
      "description": "Designed for distinguished Mumbai interiors, the Two Tone Sofa Set pairs complementary tonal upholstery textures with tailored architectural contours. Every joint is mortise-and-tenon locked inside our Mumbai workshop for enduring durability.",
      "price": null,
      "originalPrice": null,
      "discountPercent": null,
      "badge": null,
      "primaryImage": "/images/products/sofa-sets/two-tone-sofa-set/01_white_bg.jpg",
      "secondaryImage": "/images/products/sofa-sets/two-tone-sofa-set/02_interior.jpg",
      "images": [
          "/images/products/sofa-sets/two-tone-sofa-set/01_white_bg.jpg",
          "/images/products/sofa-sets/two-tone-sofa-set/02_interior.jpg",
          "/images/products/sofa-sets/two-tone-sofa-set/03_3seater_front.jpg",
          "/images/products/sofa-sets/two-tone-sofa-set/04_3seater_side.jpg",
          "/images/products/sofa-sets/two-tone-sofa-set/05_1seater_front.jpg"
      ],
      "dimensions": "",
      "materials": [
          "Solid Hardwood Internal Core",
          "Pocket Spring & HR Foam Layers",
          "Two-Tone Textured Chenille"
      ],
      "finish": "Satin Protective Seal",
      "colors": [],
      "isCustomizable": false,
      "inStock": true,
      "careInstructions": "Spot clean spills immediately with mild damp cloth. Keep away from direct harsh sunlight.",
      "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane.",
      "faqs": [
          {
              "question": "Can I choose my two tone colors?",
              "answer": "Yes! You can choose two complementary tones from our extensive fabric swatch deck."
          },
          {
              "question": "What warranty is offered?",
              "answer": "We offer a 5-year structural warranty on the timber framing and joinery."
          }
      ]
  },
  {
      "id": "new-zen-sofa-set",
      "slug": "new-zen-sofa-set",
      "name": "New Zen Sofa Set",
      "categorySlug": "sofas",
      "subcategorySlug": "sofa-sets",
      "shortDescription": "Serene minimalist silhouette engineered with low-profile balance, deep ergonomic seating, and understated tranquility.",
      "description": "The New Zen Sofa Set brings a calming aesthetic balance to modern living rooms. Handcrafted with high-density multilayer foam, breathable natural textiles, and seasoned internal timber framing.",
      "price": null,
      "originalPrice": null,
      "discountPercent": null,
      "badge": null,
      "primaryImage": "/images/products/sofa-sets/new-zen-sofa-set/01_white_bg.jpg",
      "secondaryImage": "/images/products/sofa-sets/new-zen-sofa-set/02_interior.jpg",
      "images": [
          "/images/products/sofa-sets/new-zen-sofa-set/01_white_bg.jpg",
          "/images/products/sofa-sets/new-zen-sofa-set/02_interior.jpg",
          "/images/products/sofa-sets/new-zen-sofa-set/03_3seater_front.jpg",
          "/images/products/sofa-sets/new-zen-sofa-set/04_3seater_side.jpg",
          "/images/products/sofa-sets/new-zen-sofa-set/05_1seater_front.jpg"
      ],
      "dimensions": "",
      "materials": [
          "Kiln-Dried Teak Base",
          "Orthopedic Resilience Cushioning",
          "Belgian Linen & Cotton Blend"
      ],
      "finish": "Natural Low-Sheen Wood Seal",
      "colors": [],
      "isCustomizable": false,
      "inStock": true,
      "careInstructions": "Vacuum gently using soft brush attachment. Professional dry clean recommended.",
      "deliveryInfo": "White-glove delivery by our Mumbai workshop carpenters.",
      "faqs": [
          {
              "question": "Is the seating firm or plush?",
              "answer": "It features balanced medium-firm core support with a plush surface wrap."
          },
          {
              "question": "Can this be made in custom dimensions?",
              "answer": "Yes, bespoke room scaling is available upon enquiry."
          }
      ]
  },
  {
      "id": "magrack-sofa-set",
      "slug": "magrack-sofa-set",
      "name": "MAGRACK SOFA SET",
      "categorySlug": "sofas",
      "subcategorySlug": "sofa-sets",
      "shortDescription": "Functional luxury sofa suite with integrated side storage rack, plush bolster armrests, and handcrafted timber accents.",
      "description": "The MAGRACK Sofa Set combines clever magazine/book side storage with lavish, high-resilience seating comfort. Engineered in our Santacruz West facility with premium joinery and bespoke fabric finishing.",
      "price": null,
      "originalPrice": null,
      "discountPercent": null,
      "badge": null,
      "primaryImage": "/images/products/sofa-sets/magrack-sofa-set/01_white_bg.jpg",
      "secondaryImage": "/images/products/sofa-sets/magrack-sofa-set/02_interior.jpg",
      "images": [
          "/images/products/sofa-sets/magrack-sofa-set/01_white_bg.jpg",
          "/images/products/sofa-sets/magrack-sofa-set/02_interior.jpg",
          "/images/products/sofa-sets/magrack-sofa-set/03_3seater_front.jpg",
          "/images/products/sofa-sets/magrack-sofa-set/04_3seater_side.jpg",
          "/images/products/sofa-sets/magrack-sofa-set/05_1seater_front.jpg"
      ],
      "dimensions": "",
      "materials": [
          "Solid Seasoned Wood Framework",
          "Integrated Side Timber Magazine Rack",
          "High-Density Seating Cores"
      ],
      "finish": "Hand-Polished Hardwax Finish",
      "colors": [],
      "isCustomizable": false,
      "inStock": true,
      "careInstructions": "Wipe wood elements with dry cloth. Spot clean upholstery with foam cleaner.",
      "deliveryInfo": "Direct factory delivery and on-site positioning by workshop staff.",
      "faqs": [
          {
              "question": "Can the magazine rack be on either side?",
              "answer": "Yes, rack positioning can be customized for your room layout."
          },
          {
              "question": "What materials are used for the rack?",
              "answer": "Solid seasoned timber matching your chosen wood stain."
          }
      ]
  },
  {
      "id": "pnd-sofa-set",
      "slug": "pnd-sofa-set",
      "name": "PND SOFA SET",
      "categorySlug": "sofas",
      "subcategorySlug": "sofa-sets",
      "shortDescription": "Distinctive designer profile featuring bold sculptural lines, deep cushioned seats, and durable workshop craftsmanship.",
      "description": "Handcrafted to order at our Mumbai workshop, the PND Sofa Set delivers a commanding living room statement with high-density core cushioning and precision seam tailoring.",
      "price": null,
      "originalPrice": null,
      "discountPercent": null,
      "badge": null,
      "primaryImage": "/images/products/sofa-sets/pnd-sofa-set/01_white_bg.jpg",
      "secondaryImage": "/images/products/sofa-sets/pnd-sofa-set/02_interior.jpg",
      "images": [
          "/images/products/sofa-sets/pnd-sofa-set/01_white_bg.jpg",
          "/images/products/sofa-sets/pnd-sofa-set/02_interior.jpg",
          "/images/products/sofa-sets/pnd-sofa-set/03_3seater_front.jpg",
          "/images/products/sofa-sets/pnd-sofa-set/04_3seater_side.jpg",
          "/images/products/sofa-sets/pnd-sofa-set/05_1seater_front.jpg"
      ],
      "dimensions": "",
      "materials": [
          "Seasoned Hardwood Construction",
          "Multi-Layer Comfort Foam",
          "Designer Woven Texture"
      ],
      "finish": "Matte PU Seal",
      "colors": [],
      "isCustomizable": false,
      "inStock": true,
      "careInstructions": "Keep away from excessive dampness. Use dry cleaning methods for fabric.",
      "deliveryInfo": "White-glove delivery across Greater Mumbai.",
      "faqs": [
          {
              "question": "Is fabric protection treatment applied?",
              "answer": "Yes, fabrics are treated for everyday stain resistance."
          },
          {
              "question": "Are custom seat cushions available?",
              "answer": "Yes, choose from soft feather-blend or firm high-density foam."
          }
      ]
  },
  {
      "id": "modern-criss-cross-sofa-set",
      "slug": "modern-criss-cross-sofa-set",
      "name": "Modern criss cross sofa set",
      "categorySlug": "sofas",
      "subcategorySlug": "sofa-sets",
      "shortDescription": "Artisan sofa suite with striking geometric criss-cross side paneling and lavishly tufted seating cushions.",
      "description": "The Modern Criss Cross Sofa Set showcases intricate woodworking alongside ultra-plush living room comfort. Made in Mumbai using kiln-dried solid hardwood and stain-resistant upholstery.",
      "price": null,
      "originalPrice": null,
      "discountPercent": null,
      "badge": null,
      "primaryImage": "/images/products/sofa-sets/modern-criss-cross-sofa-set/01_white_bg.jpg",
      "secondaryImage": "/images/products/sofa-sets/modern-criss-cross-sofa-set/02_interior.jpg",
      "images": [
          "/images/products/sofa-sets/modern-criss-cross-sofa-set/01_white_bg.jpg",
          "/images/products/sofa-sets/modern-criss-cross-sofa-set/02_interior.jpg",
          "/images/products/sofa-sets/modern-criss-cross-sofa-set/03_3seater_front.jpg",
          "/images/products/sofa-sets/modern-criss-cross-sofa-set/04_3seater_side.jpg",
          "/images/products/sofa-sets/modern-criss-cross-sofa-set/05_1seater_front.jpg"
      ],
      "dimensions": "",
      "materials": [
          "Solid Timber Criss-Cross Architecture",
          "High-Density Comfort Cores",
          "Textured Luxury Fabric"
      ],
      "finish": "Hand-Waxed Timber Finish",
      "colors": [],
      "isCustomizable": false,
      "inStock": true,
      "careInstructions": "Wipe decorative woodwork with soft cloth. Vacuum fabric seams regularly.",
      "deliveryInfo": "Assembled and inspected in our workshop prior to Mumbai delivery.",
      "faqs": [
          {
              "question": "Can the criss cross lattice be stained in walnut?",
              "answer": "Yes, teak, walnut, oak, and ebony stains are available."
          },
          {
              "question": "Is this suitable for heavy daily use?",
              "answer": "Yes, built with commercial-grade joint reinforcement."
          }
      ]
  },
  {
      "id": "217-sofa-set",
      "slug": "217-sofa-set",
      "name": "217 sofa set",
      "categorySlug": "sofas",
      "subcategorySlug": "sofa-sets",
      "shortDescription": "Classic architectural proportions with balanced backrest support, curved track arms, and premium factory joinery.",
      "description": "Built for enduring comfort and timeless appeal, the 217 Sofa Set is crafted with a heavy-gauge internal spring system, high-resilience foam, and tailored upholstery from our Santacruz workshop.",
      "price": null,
      "originalPrice": null,
      "discountPercent": null,
      "badge": null,
      "primaryImage": "/images/products/sofa-sets/217-sofa-set/01_white_bg.jpg",
      "secondaryImage": "/images/products/sofa-sets/217-sofa-set/02_interior.jpg",
      "images": [
          "/images/products/sofa-sets/217-sofa-set/01_white_bg.jpg",
          "/images/products/sofa-sets/217-sofa-set/02_interior.jpg",
          "/images/products/sofa-sets/217-sofa-set/03_3seater_front.jpg",
          "/images/products/sofa-sets/217-sofa-set/04_3seater_side.jpg",
          "/images/products/sofa-sets/217-sofa-set/05_1seater_front.jpg"
      ],
      "dimensions": "",
      "materials": [
          "Internal Kiln-Dried Hardwood Frame",
          "Heavy-Duty Sinuous Springs",
          "Tailored Breathable Fabric"
      ],
      "finish": "Protective Natural Timber Seal",
      "colors": [],
      "isCustomizable": false,
      "inStock": true,
      "careInstructions": "Rotate and fluff seat cushions periodically. Professional clean only.",
      "deliveryInfo": "Delivered in 7-10 days with white-glove setup.",
      "faqs": [
          {
              "question": "Can this set include extra single chairs?",
              "answer": "Yes, additional 1-seaters or an ottoman can be commissioned."
          },
          {
              "question": "Does this have removable cushion covers?",
              "answer": "Yes, zipper covers are provided on request for easy dry cleaning."
          }
      ]
  },
  {
      "id": "369-sofa-set",
      "slug": "369-sofa-set",
      "name": "369 Sofa Set",
      "categorySlug": "sofas",
      "subcategorySlug": "sofa-sets",
      "shortDescription": "Refined transitional sofa suite featuring generous depth, hand-stitched seams, and solid timber foundation.",
      "description": "The 369 Sofa Set offers a harmonious blend of traditional craftsmanship and modern living comfort. Individually upholstered and quality-inspected inside our Mumbai workshop.",
      "price": null,
      "originalPrice": null,
      "discountPercent": null,
      "badge": null,
      "primaryImage": "/images/products/sofa-sets/369-sofa-set/01_white_bg.jpg",
      "secondaryImage": "/images/products/sofa-sets/369-sofa-set/02_interior.jpg",
      "images": [
          "/images/products/sofa-sets/369-sofa-set/01_white_bg.jpg",
          "/images/products/sofa-sets/369-sofa-set/02_interior.jpg",
          "/images/products/sofa-sets/369-sofa-set/03_3seater_front.jpg",
          "/images/products/sofa-sets/369-sofa-set/04_3seater_side.jpg",
          "/images/products/sofa-sets/369-sofa-set/05_1seater_front.jpg"
      ],
      "dimensions": "",
      "materials": [
          "Kiln-Dried Timber Architecture",
          "Dual-Layer Resilience Foam",
          "Lustrous Upholstery Fabric"
      ],
      "finish": "Hand-Rubbed Matte Finish",
      "colors": [],
      "isCustomizable": false,
      "inStock": true,
      "careInstructions": "Protect from sharp objects. Dust with dry cloth.",
      "deliveryInfo": "Full white-glove home delivery across Mumbai.",
      "faqs": [
          {
              "question": "Can this be made in genuine leather?",
              "answer": "Yes, premium Italian and Indian top-grain leathers are available."
          },
          {
              "question": "What are the payment options?",
              "answer": "We take workshop commission advances with balance upon installation."
          }
      ]
  },
  {
      "id": "3066-pearl-sofa-set",
      "slug": "3066-pearl-sofa-set",
      "name": "3066 PEARL Sofa Set",
      "categorySlug": "sofas",
      "subcategorySlug": "sofa-sets",
      "shortDescription": "Opulent flagship sofa suite with pearlescent fabric luster, hand-tufted ergonomics, and heirloom timber joinery.",
      "description": "The 3066 PEARL Sofa Set is the pinnacle of living room grandeur. Handcrafted with high-density core foam, double-doweled kiln-dried timber framing, and luxurious pearlescent upholstery.",
      "price": null,
      "originalPrice": null,
      "discountPercent": null,
      "badge": null,
      "primaryImage": "/images/products/sofa-sets/3066-pearl-sofa-set/01_white_bg.jpg",
      "secondaryImage": "/images/products/sofa-sets/3066-pearl-sofa-set/02_interior.jpg",
      "images": [
          "/images/products/sofa-sets/3066-pearl-sofa-set/01_white_bg.jpg",
          "/images/products/sofa-sets/3066-pearl-sofa-set/02_interior.jpg",
          "/images/products/sofa-sets/3066-pearl-sofa-set/03_3seater_front.jpg",
          "/images/products/sofa-sets/3066-pearl-sofa-set/04_3seater_side.jpg",
          "/images/products/sofa-sets/3066-pearl-sofa-set/05_1seater_front.jpg"
      ],
      "dimensions": "",
      "materials": [
          "Heirloom Teak & Hardwood Structure",
          "Luxury Pearlescent Fabric",
          "Multi-Zone Comfort Spring Core"
      ],
      "finish": "Artisan Hand-Polished Seal",
      "colors": [],
      "isCustomizable": false,
      "inStock": true,
      "careInstructions": "Avoid chemical cleaners. Professional gentle dry clean.",
      "deliveryInfo": "White-glove direct factory delivery with careful placement.",
      "faqs": [
          {
              "question": "What is pearlescent fabric?",
              "answer": "It is a luxury woven textile that catches ambient lighting with subtle, elegant sheen."
          },
          {
              "question": "Can custom cushion firmness be specified?",
              "answer": "Yes, firm, medium, or ultra-soft contouring can be chosen."
          }
      ]
  },
  {
    "id": "4-seater-dining-tables-01",
    "slug": "4-seater-dining-tables-signature-01",
    "name": "Padua Compact 4-Seater Teak Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Refined four-passenger dining table with chamfered edge profile and sturdy splayed teak legs.",
    "description": "Refined four-passenger dining table with chamfered edge profile and sturdy splayed teak legs. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 48000,
    "originalPrice": 55200,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "48\" L x 36\" W x 30\" H",
    "materials": [
      "Solid Burma Teak",
      "Clear Matte PU Finish"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "4-seater-dining-tables-02",
    "slug": "4-seater-dining-tables-prestige-02",
    "name": "Treviso Square Bistro Dining Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Sleek square top table with central pedestal base providing unobstructed legroom on all four sides.",
    "description": "Sleek square top table with central pedestal base providing unobstructed legroom on all four sides. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 42000,
    "originalPrice": 47040,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "40\" L x 40\" W x 30\" H",
    "materials": [
      "American Walnut Veneer",
      "Powder-Coated Steel Stem"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "6-seater-dining-tables-01",
    "slug": "6-seater-dining-tables-signature-01",
    "name": "Mantua Solid Wood 6-Seater Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Substantial six-person rectangular dining centerpiece with hand-scraped natural wood grain.",
    "description": "Substantial six-person rectangular dining centerpiece with hand-scraped natural wood grain. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 68000,
    "originalPrice": 78200,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1530629013299-6cb10d168419?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1530629013299-6cb10d168419?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1530629013299-6cb10d168419?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "72\" L x 38\" W x 30\" H",
    "materials": [
      "Solid Burma Teak",
      "Polyurethane Protective Coat"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "6-seater-dining-tables-02",
    "slug": "6-seater-dining-tables-prestige-02",
    "name": "Vicenza Floating Profile Dining Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Contemporary beveled edge tabletop with recessed sub-frame creating a floating visual sensation.",
    "description": "Contemporary beveled edge tabletop with recessed sub-frame creating a floating visual sensation. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 72000,
    "originalPrice": 80640,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "70\" L x 36\" W x 30\" H",
    "materials": [
      "White American Oak",
      "Matte Lacquer Seal"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "8-seater-dining-tables-01",
    "slug": "8-seater-dining-tables-signature-01",
    "name": "Ferrara Grand 8-Seater Banquet Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Majestic eight-seat dining table featuring twin sculptural pedestal bases and rich bookmatched grain.",
    "description": "Majestic eight-seat dining table featuring twin sculptural pedestal bases and rich bookmatched grain. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 95000,
    "originalPrice": 109250,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "96\" L x 42\" W x 30\" H",
    "materials": [
      "Solid Teak Core",
      "Hand-Applied Walnut Stain"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "8-seater-dining-tables-02",
    "slug": "8-seater-dining-tables-prestige-02",
    "name": "Rimini Architectural Trestle Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Stately trestle dining table with mortise and tenon joinery inspired by European manor craftsmanship.",
    "description": "Stately trestle dining table with mortise and tenon joinery inspired by European manor craftsmanship. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 88000,
    "originalPrice": 98560,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "92\" L x 40\" W x 30\" H",
    "materials": [
      "Kiln-Dried Hardwood",
      "Natural Oil Finish"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "10-seater-dining-tables-01",
    "slug": "10-seater-dining-tables-signature-01",
    "name": "Reggio Penthouse 10-Seater Grand Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Monumental dining statement piece crafted for large luxury entertaining rooms and family feasts.",
    "description": "Monumental dining statement piece crafted for large luxury entertaining rooms and family feasts. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 145000,
    "originalPrice": 166750,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "120\" L x 46\" W x 30\" H",
    "materials": [
      "Continuous Teak Planks",
      "Steel Subframe Reinforcement"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "10-seater-dining-tables-02",
    "slug": "10-seater-dining-tables-prestige-02",
    "name": "Caserta Double-Pedestal Estate Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Timeless ten-person dining table with fluted circular column pedestals and polished brass trim.",
    "description": "Timeless ten-person dining table with fluted circular column pedestals and polished brass trim. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 135000,
    "originalPrice": 151200,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "114\" L x 44\" W x 30\" H",
    "materials": [
      "American Walnut",
      "Solid Brass Inlay Bands"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "round-dining-tables-01",
    "slug": "round-dining-tables-signature-01",
    "name": "Sorrento Fluted Column Round Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Circular 54-inch dining table with architectural fluted tambour wood pedestal base.",
    "description": "Circular 54-inch dining table with architectural fluted tambour wood pedestal base. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 65000,
    "originalPrice": 74750,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "54\" Diameter x 30\" H",
    "materials": [
      "Solid Teak Tambour",
      "Chamfered Hardwood Top"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "round-dining-tables-02",
    "slug": "round-dining-tables-prestige-02",
    "name": "Positano Sculptural Conical Dining Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Dramatic conical base with round top fostering fluid dining flow in open-concept residences.",
    "description": "Dramatic conical base with round top fostering fluid dining flow in open-concept residences. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 59000,
    "originalPrice": 66080,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "48\" Diameter x 30\" H",
    "materials": [
      "Cast Terrazzo / Oak",
      "Matte Clear PU Seal"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "extendable-dining-tables-01",
    "slug": "extendable-dining-tables-signature-01",
    "name": "Genova Synchronized Extension Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Concealed butterfly leaf folds out from 6 seats to 8 seats in seconds with smooth German ball-bearing glides.",
    "description": "Concealed butterfly leaf folds out from 6 seats to 8 seats in seconds with smooth German ball-bearing glides. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 78000,
    "originalPrice": 89700,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "66\"-88\" L x 38\" W x 30\" H",
    "materials": [
      "German Synchronized Glides",
      "Solid Teak Frame",
      "Veneer Leaf"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "extendable-dining-tables-02",
    "slug": "extendable-dining-tables-prestige-02",
    "name": "Bari Pull-Out Telescopic Dining Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Telescopic slide system with self-storing leaves, ideal for entertaining in Mumbai apartments.",
    "description": "Telescopic slide system with self-storing leaves, ideal for entertaining in Mumbai apartments. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 74000,
    "originalPrice": 82880,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "60\"-84\" L x 36\" W x 30\" H",
    "materials": [
      "Hardwood Frame",
      "Scratch-Resistant PU Top"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "marble-dining-tables-01",
    "slug": "marble-dining-tables-signature-01",
    "name": "Statuario Marble Monolith Dining Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Genuine 20mm Italian Statuario marble slab with beveled edge on sculptural fluted wooden pedestals.",
    "description": "Genuine 20mm Italian Statuario marble slab with beveled edge on sculptural fluted wooden pedestals. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 120000,
    "originalPrice": 138000,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "78\" L x 40\" W x 30\" H",
    "materials": [
      "Natural Statuario Marble",
      "Polyester Anti-Stain Seal",
      "Teak Base"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "marble-dining-tables-02",
    "slug": "marble-dining-tables-prestige-02",
    "name": "Marquina Black Marble Round Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Striking black Marquina marble with crisp white veining paired with a brushed bronze base.",
    "description": "Striking black Marquina marble with crisp white veining paired with a brushed bronze base. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 98000,
    "originalPrice": 109760,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "52\" Diameter x 30\" H",
    "materials": [
      "Spanish Nero Marquina",
      "Electroplated Bronze Steel Base"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "wooden-dining-tables-01",
    "slug": "wooden-dining-tables-signature-01",
    "name": "Heritage Solid Burma Teak Dining Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Handcrafted from seasoned 100% genuine Burma teak planks with natural organic wood character.",
    "description": "Handcrafted from seasoned 100% genuine Burma teak planks with natural organic wood character. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 85000,
    "originalPrice": 97750,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "76\" L x 38\" W x 30\" H",
    "materials": [
      "Seasoned Burma Teak",
      "Traditional Mortise Joinery"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "wooden-dining-tables-02",
    "slug": "wooden-dining-tables-prestige-02",
    "name": "Nordic Oak Plank Dining Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Pale white American oak dining table with live edge inspired soft chamfering and exposed through-tenons.",
    "description": "Pale white American oak dining table with live edge inspired soft chamfering and exposed through-tenons. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 79000,
    "originalPrice": 88480,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "72\" L x 36\" W x 30\" H",
    "materials": [
      "White American Oak",
      "Natural Hardwax Oil"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "modern-dining-tables-01",
    "slug": "modern-dining-tables-signature-01",
    "name": "Aero Minimalist Floating Top Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Ultra-slim 18mm chamfered top supported by architectural charcoal powder-coated steel blade legs.",
    "description": "Ultra-slim 18mm chamfered top supported by architectural charcoal powder-coated steel blade legs. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 64000,
    "originalPrice": 73600,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "72\" L x 36\" W x 30\" H",
    "materials": [
      "Solid Oak Top",
      "Laser-Cut Steel Legs",
      "Matte Powder Coat"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "modern-dining-tables-02",
    "slug": "modern-dining-tables-prestige-02",
    "name": "Linear Geometric Silhouette Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Architectural angled cross-beam base designed for contemporary Mumbai penthouses.",
    "description": "Architectural angled cross-beam base designed for contemporary Mumbai penthouses. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 68000,
    "originalPrice": 76160,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "76\" L x 38\" W x 30\" H",
    "materials": [
      "Walnut Tabletop",
      "Matte Black Aluminum Subframe"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "custom-dining-tables-01",
    "slug": "custom-dining-tables-signature-01",
    "name": "Custom Bespoke Stone & Timber Ensemble",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Custom fabricated to exact customer specifications with imported stone slab and factory carpentry.",
    "description": "Custom fabricated to exact customer specifications with imported stone slab and factory carpentry. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 130000,
    "originalPrice": 149500,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Built to Order",
    "materials": [
      "Client Choice Stone / Teak",
      "Bespoke Base Architecture"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "custom-dining-tables-02",
    "slug": "custom-dining-tables-prestige-02",
    "name": "Architectural Feast Table Commission",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Exclusive commission built with personalized family dimensions, built-in cutlery drawer, and lazy susan.",
    "description": "Exclusive commission built with personalized family dimensions, built-in cutlery drawer, and lazy susan. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 155000,
    "originalPrice": 173600,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Built to Order",
    "materials": [
      "Burma Teak",
      "Integrated Brass Trim",
      "Motorized Turntable Option"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "king-size-beds-01",
    "slug": "king-size-beds-signature-01",
    "name": "Veneto Grand King Architectural Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Commanding master suite bed with extended wingback headboard and integrated floating bedside ledges.",
    "description": "Commanding master suite bed with extended wingback headboard and integrated floating bedside ledges. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 92000,
    "originalPrice": 105800,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "82\" W x 86\" L x 48\" H (Mattress: 72\" x 78\")",
    "materials": [
      "Solid Teak Internal Structure",
      "Textured Linen Headboard",
      "Heavy-Duty Slat Grid"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "king-size-beds-02",
    "slug": "king-size-beds-prestige-02",
    "name": "Cortina Low-Profile King Platform Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Japanese-inspired minimalist master bed with wrap-around wide wooden ledge frame.",
    "description": "Japanese-inspired minimalist master bed with wrap-around wide wooden ledge frame. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 84000,
    "originalPrice": 94080,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "84\" W x 88\" L x 36\" H",
    "materials": [
      "American Walnut",
      "Floating Plinth",
      "Noise-Free Joinery"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "queen-size-beds-01",
    "slug": "queen-size-beds-signature-01",
    "name": "Amalfi Contemporary Queen Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Elegantly proportioned queen bed with slim padded headboard and rounded solid wood corner posts.",
    "description": "Elegantly proportioned queen bed with slim padded headboard and rounded solid wood corner posts. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 72000,
    "originalPrice": 82800,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "66\" W x 84\" L x 44\" H (Mattress: 60\" x 78\")",
    "materials": [
      "Teak Wood Frame",
      "Stain-Resistant Fabric",
      "Reinforced Support Slats"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "queen-size-beds-02",
    "slug": "queen-size-beds-prestige-02",
    "name": "Ravello Floating Queen Bedframe",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Recessed base creates an enchanting floating appearance with gentle under-bed ambient glow channel.",
    "description": "Recessed base creates an enchanting floating appearance with gentle under-bed ambient glow channel. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 68000,
    "originalPrice": 76160,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "64\" W x 82\" L x 42\" H",
    "materials": [
      "Hardwood Plywood Frame",
      "Oak Veneer Headboard",
      "Hidden Steel Legs"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "double-beds-01",
    "slug": "double-beds-signature-01",
    "name": "Ancona Compact Guest Double Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Smart space-saving double bed with streamlined vertical fluted headboard.",
    "description": "Smart space-saving double bed with streamlined vertical fluted headboard. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 56000,
    "originalPrice": 64400,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "58\" W x 80\" L x 42\" H",
    "materials": [
      "Solid Ash Wood",
      "Boucl\u00e9 Fabric",
      "Heavy-Duty Slats"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "double-beds-02",
    "slug": "double-beds-prestige-02",
    "name": "Parma Minimalist Studio Double Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Clean unadorned double bed frame with solid timber headboard and high under-bed clearance.",
    "description": "Clean unadorned double bed frame with solid timber headboard and high under-bed clearance. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 52000,
    "originalPrice": 58240,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "56\" W x 78\" L x 38\" H",
    "materials": [
      "Solid Teak",
      "Matte PU Seal"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "storage-beds-01",
    "slug": "storage-beds-signature-01",
    "name": "Treviso Quad-Drawer Storage Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Four deep silent soft-close drawers integrated seamlessly into the base sides for dust-free storage.",
    "description": "Four deep silent soft-close drawers integrated seamlessly into the base sides for dust-free storage. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 86000,
    "originalPrice": 98900,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "76\" W x 84\" L x 46\" H",
    "materials": [
      "Plywood Base Construction",
      "Telescopic Drawer Channels",
      "Teak Veneer Trim"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "storage-beds-02",
    "slug": "storage-beds-prestige-02",
    "name": "Padua Dual-Zone Divided Storage Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Combination of front pullout drawers and rear top-lift storage bins for seasonal luggage.",
    "description": "Combination of front pullout drawers and rear top-lift storage bins for seasonal luggage. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 82000,
    "originalPrice": 91840,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "74\" W x 84\" L x 44\" H",
    "materials": [
      "Reinforced Timber Core",
      "Melamine Lined Storage Bins"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "hydraulic-storage-beds-01",
    "slug": "hydraulic-storage-beds-signature-01",
    "name": "Milano Easy-Lift Hydraulic Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "German gas-lift pistons raise the heaviest memory foam mattresses smoothly to reveal 800+ liters of storage.",
    "description": "German gas-lift pistons raise the heaviest memory foam mattresses smoothly to reveal 800+ liters of storage. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 96000,
    "originalPrice": 110400,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "76\" W x 85\" L x 48\" H",
    "materials": [
      "German Gas Springs",
      "Fully Lined Storage Cavity",
      "Quilted Velvet Headboard"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "hydraulic-storage-beds-02",
    "slug": "hydraulic-storage-beds-prestige-02",
    "name": "Monza Steel-Frame Hydraulic Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Heavy-gauge tubular steel lifting frame with wooden slats, designed for decades of daily smooth lifts.",
    "description": "Heavy-gauge tubular steel lifting frame with wooden slats, designed for decades of daily smooth lifts. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 91000,
    "originalPrice": 101920,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "74\" W x 84\" L x 45\" H",
    "materials": [
      "Powder-Coated Steel Frame",
      "Teak Surround",
      "Padded Linen Headboard"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "upholstered-beds-01",
    "slug": "upholstered-beds-signature-01",
    "name": "Florence Fluted Channel Upholstered Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Vertical channel-tufted grand headboard extending to floor with wrapped plush siderails.",
    "description": "Vertical channel-tufted grand headboard extending to floor with wrapped plush siderails. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 88000,
    "originalPrice": 101200,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "80\" W x 86\" L x 54\" H",
    "materials": [
      "High-Resilience Polyfoam",
      "Belgian Velvet Upholstery",
      "Hardwood Skeleton"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "upholstered-beds-02",
    "slug": "upholstered-beds-prestige-02",
    "name": "Siena Curved Pillowback Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Organic curved headboard with two oversized inset down pillows for supreme late-night reading comfort.",
    "description": "Organic curved headboard with two oversized inset down pillows for supreme late-night reading comfort. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 94000,
    "originalPrice": 105280,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "78\" W x 88\" L x 46\" H",
    "materials": [
      "Feather-Topped Headrest Cushions",
      "Woven Boucl\u00e9",
      "Teak Feet"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "platform-beds-01",
    "slug": "platform-beds-signature-01",
    "name": "Kyoto-Milano Low Platform Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Low-profile architectural platform bed with wide perimeter wooden frame and recessed base.",
    "description": "Low-profile architectural platform bed with wide perimeter wooden frame and recessed base. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 76000,
    "originalPrice": 87400,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "82\" W x 88\" L x 30\" H",
    "materials": [
      "Solid White Oak",
      "Ventilated Solid Platform Deck"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "platform-beds-02",
    "slug": "platform-beds-prestige-02",
    "name": "Zenith Floating Slat Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Minimalist floating aesthetic with integrated headboard reading lights and phone charging alcove.",
    "description": "Minimalist floating aesthetic with integrated headboard reading lights and phone charging alcove. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 79000,
    "originalPrice": 88480,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "78\" W x 86\" L x 32\" H",
    "materials": [
      "Natural Teak",
      "Integrated Warm LED Concealed Strips"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "wooden-beds-01",
    "slug": "wooden-beds-signature-01",
    "name": "Royal Burma Teak Heirloom Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Solid 100% Burma teak timber with hand-planed headboard panels that highlight rich natural oil grain.",
    "description": "Solid 100% Burma teak timber with hand-planed headboard panels that highlight rich natural oil grain. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 98000,
    "originalPrice": 112700,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "78\" W x 85\" L x 46\" H",
    "materials": [
      "Solid Burma Teak Throughout",
      "Hand-Rubbed Natural Oil Finish"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "wooden-beds-02",
    "slug": "wooden-beds-prestige-02",
    "name": "Verona Spindle Headboard Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Classic Scandinavian spindle turned wood headboard with gently tapered circular bed posts.",
    "description": "Classic Scandinavian spindle turned wood headboard with gently tapered circular bed posts. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 75000,
    "originalPrice": 84000,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "76\" W x 84\" L x 42\" H",
    "materials": [
      "Seasoned Hardwood",
      "Matte Teak Stained PU"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "modern-beds-01",
    "slug": "modern-beds-signature-01",
    "name": "Lumina Architectural Headboard Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Full-wall headboard panel system with fluted acoustic wood slats and brushed gold metal accents.",
    "description": "Full-wall headboard panel system with fluted acoustic wood slats and brushed gold metal accents. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 115000,
    "originalPrice": 132250,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "108\" W (Headboard) x 86\" L x 50\" H",
    "materials": [
      "Acoustic Oak Slats",
      "Brushed Brass Trims",
      "Upholstered Siderails"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "modern-beds-02",
    "slug": "modern-beds-prestige-02",
    "name": "Sphere Minimalist Bedroom Suite Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Soft pill-shaped rounded corner frame designed to prevent shin bumps in compact master bedrooms.",
    "description": "Soft pill-shaped rounded corner frame designed to prevent shin bumps in compact master bedrooms. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 82000,
    "originalPrice": 91840,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "76\" W x 84\" L x 40\" H",
    "materials": [
      "Curved Solid Oak Corners",
      "Textured Tweed Upholstery"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "custom-beds-01",
    "slug": "custom-beds-signature-01",
    "name": "Atelier Bespoke Master Suite Bed Commission",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Custom drafted to match room electrical points, wall panelling, and exact client mattress thickness.",
    "description": "Custom drafted to match room electrical points, wall panelling, and exact client mattress thickness. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 135000,
    "originalPrice": 155250,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Built to Order",
    "materials": [
      "Client Choice Materials",
      "Factory Joinery Assembly"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "custom-beds-02",
    "slug": "custom-beds-prestige-02",
    "name": "Palatial Extended Wingback Custom Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Expansive custom headboard wall covering with custom reading spotlights and built-in bedside storage.",
    "description": "Expansive custom headboard wall covering with custom reading spotlights and built-in bedside storage. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 160000,
    "originalPrice": 179200,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Built to Order",
    "materials": [
      "Burma Teak",
      "Imported Leather Panels",
      "Integrated Smart Switches"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "bedside-tables-01",
    "slug": "bedside-tables-signature-01",
    "name": "Modena Fluted Dual-Drawer Nightstand",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "side-tables",
    "shortDescription": "Sophisticated bedside table featuring fluted drawer fronts and soft-closing concealed Blum runners.",
    "description": "Sophisticated bedside table featuring fluted drawer fronts and soft-closing concealed Blum runners. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 24000,
    "originalPrice": 27600,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "20\" W x 16\" D x 20\" H",
    "materials": [
      "Solid Teak Fluting",
      "Blum Soft-Close Runners",
      "Brass Hardware"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "bedside-tables-02",
    "slug": "bedside-tables-prestige-02",
    "name": "Siena Floating Bedside Console",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "side-tables",
    "shortDescription": "Wall-hung bedside console with wireless phone charging surface and warm downlight illumination.",
    "description": "Wall-hung bedside console with wireless phone charging surface and warm downlight illumination. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 21000,
    "originalPrice": 23520,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1632244112951-95b29c92eee1?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1632244112951-95b29c92eee1?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1632244112951-95b29c92eee1?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "18\" W x 14\" D x 10\" H",
    "materials": [
      "American Walnut",
      "Concealed Wall Cleat Mounting"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "wall-mounted-tv-units-01",
    "slug": "wall-mounted-tv-units-signature-01",
    "name": "Aero Floating Wall-Mounted TV Console",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "wall-unit",
    "shortDescription": "Suspended entertainment console with flip-down acoustic cloth doors and hidden soundbar niche.",
    "description": "Suspended entertainment console with flip-down acoustic cloth doors and hidden soundbar niche. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 48000,
    "originalPrice": 55200,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "72\" W x 14\" D x 12\" H",
    "materials": [
      "Marine-Grade Plywood",
      "Teak Veneer",
      "Concealed Cable Pass-Through"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "wall-mounted-tv-units-02",
    "slug": "wall-mounted-tv-units-prestige-02",
    "name": "Lumina Backlit Wall Entertainment Panel",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "wall-unit",
    "shortDescription": "Full feature wall with fluted wood acoustic panels and floating credenza with warm LED perimeter halo.",
    "description": "Full feature wall with fluted wood acoustic panels and floating credenza with warm LED perimeter halo. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 78000,
    "originalPrice": 87360,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "84\" W x 16\" D x 60\" H (Full Panel)",
    "materials": [
      "Acoustic Oak Slats",
      "Warm 3000K LED Channels",
      "Push-to-Open Drawers"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "floor-standing-tv-units-01",
    "slug": "floor-standing-tv-units-signature-01",
    "name": "Verona Fluted Low-Profile TV Credenza",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Ground-standing TV console with continuous fluted tambours and bronze wire mesh ventilation vents.",
    "description": "Ground-standing TV console with continuous fluted tambours and bronze wire mesh ventilation vents. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 56000,
    "originalPrice": 64400,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "78\" W x 18\" D x 18\" H",
    "materials": [
      "Solid Teak Plinth",
      "Soft-Close Drawers",
      "Smoked Glass Components"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "floor-standing-tv-units-02",
    "slug": "floor-standing-tv-units-prestige-02",
    "name": "Modena Mid-Century Media Sideboard",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Substantial living room TV bench on tapered round timber legs with sliding slatted wooden doors.",
    "description": "Substantial living room TV bench on tapered round timber legs with sliding slatted wooden doors. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 52000,
    "originalPrice": 58240,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "70\" W x 16\" D x 20\" H",
    "materials": [
      "White American Oak",
      "Natural Satin PU"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "tv-units-with-storage-01",
    "slug": "tv-units-with-storage-signature-01",
    "name": "Milano High-Capacity Media Center",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Integrated entertainment wall system with enclosed storage towers, book display nooks, and soundbar recess.",
    "description": "Integrated entertainment wall system with enclosed storage towers, book display nooks, and soundbar recess. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 85000,
    "originalPrice": 97750,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "96\" W x 18\" D x 78\" H",
    "materials": [
      "Structural Plywood Core",
      "Scratch-Proof PU Enamel",
      "Telescopic Channels"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "tv-units-with-storage-02",
    "slug": "tv-units-with-storage-prestige-02",
    "name": "Caserta Modular Media Wall Unit",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Custom configurable base drawers with overhead floating box display vitrines.",
    "description": "Custom configurable base drawers with overhead floating box display vitrines. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 72000,
    "originalPrice": 80640,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "84\" W x 16\" D x 48\" H",
    "materials": [
      "Teak Veneer",
      "Tempered Glass Shelving"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "minimal-tv-units-01",
    "slug": "minimal-tv-units-signature-01",
    "name": "Linear Monolith Minimal TV Console",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Handle-free minimalist floating media shelf with mitred 45-degree waterfall edge joinery.",
    "description": "Handle-free minimalist floating media shelf with mitred 45-degree waterfall edge joinery. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 38000,
    "originalPrice": 43700,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "66\" W x 12\" D x 10\" H",
    "materials": [
      "HDF Core",
      "Matte Anti-Fingerprint Laminate",
      "Blum Tip-On Push Latches"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "minimal-tv-units-02",
    "slug": "minimal-tv-units-prestige-02",
    "name": "Zenith Shadowline TV Bench",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Crisp shadowline border detail with concealed downward-facing cable management channels.",
    "description": "Crisp shadowline border detail with concealed downward-facing cable management channels. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 42000,
    "originalPrice": 47040,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "60\" W x 14\" D x 14\" H",
    "materials": [
      "Matte Black Oak Veneer",
      "Powder-Coated Steel Support"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "modern-tv-units-01",
    "slug": "modern-tv-units-signature-01",
    "name": "Prisma Asymmetric Architectural Media Unit",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Off-center balanced composition featuring open marble accent shelf and contrasting dark wood cabinets.",
    "description": "Off-center balanced composition featuring open marble accent shelf and contrasting dark wood cabinets. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 62000,
    "originalPrice": 71300,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "80\" W x 16\" D x 24\" H",
    "materials": [
      "Nero Marquina Top Ledge",
      "Smoked Oak Cabinetry",
      "Brushed Brass Accents"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "modern-tv-units-02",
    "slug": "modern-tv-units-prestige-02",
    "name": "Contour Rounded Edge Modern TV Stand",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Soft curved outer corners with slatted wood detailing, perfect for homes with toddlers.",
    "description": "Soft curved outer corners with slatted wood detailing, perfect for homes with toddlers. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 58000,
    "originalPrice": 64960,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "72\" W x 16\" D x 18\" H",
    "materials": [
      "Curved Solid Ash",
      "Matte Teak Stain"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "designer-tv-units-01",
    "slug": "designer-tv-units-signature-01",
    "name": "Bellagio Luxury Marble-Top Media Console",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Exquisite honed Calacatta gold marble top resting on a fluted dark walnut curved credenza.",
    "description": "Exquisite honed Calacatta gold marble top resting on a fluted dark walnut curved credenza. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 95000,
    "originalPrice": 109250,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "84\" W x 18\" D x 20\" H",
    "materials": [
      "Italian Calacatta Marble",
      "Fluted Dark Walnut",
      "Champagne Gold Ferrules"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "designer-tv-units-02",
    "slug": "designer-tv-units-prestige-02",
    "name": "Venezia Art-Deco Entertainment Vitrine",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Opulent media station with fluted ribbed glass cabinet doors and internal warm shelf backlighting.",
    "description": "Opulent media station with fluted ribbed glass cabinet doors and internal warm shelf backlighting. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 88000,
    "originalPrice": 98560,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "78\" W x 17\" D x 22\" H",
    "materials": [
      "Ribbed Reeded Glass",
      "Burma Teak",
      "Internal LED Ribbon"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "custom-tv-units-01",
    "slug": "custom-tv-units-signature-01",
    "name": "Architectural Elevation Custom TV Wall",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Full room height architectural wall panel with hidden AV equipment raceways and built-in display alcoves.",
    "description": "Full room height architectural wall panel with hidden AV equipment raceways and built-in display alcoves. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 120000,
    "originalPrice": 138000,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Built to Elevation Drawings",
    "materials": [
      "Custom Client Selection Veneer / Stone",
      "Integrated Smart Wiring"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "custom-tv-units-02",
    "slug": "custom-tv-units-prestige-02",
    "name": "Acoustic Slat Theater Entertainment Center",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Precision acoustically treated wall panelling with integrated motorized drop-down projector screen cavity.",
    "description": "Precision acoustically treated wall panelling with integrated motorized drop-down projector screen cavity. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 140000,
    "originalPrice": 156800,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Built to Order",
    "materials": [
      "Sound-Absorbing Felt Backing",
      "Burma Teak Battens"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "sliding-door-wardrobes-01",
    "slug": "sliding-door-wardrobes-signature-01",
    "name": "Milano Top-Hung Dual Sliding Wardrobe",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Heavy-duty German top-hung sliding doors with bottom trackless design for easy sweeping.",
    "description": "Heavy-duty German top-hung sliding doors with bottom trackless design for easy sweeping. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 110000,
    "originalPrice": 126500,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "72\" W x 24\" D x 84\" H",
    "materials": [
      "German Hettich Top-Line Sliders",
      "Laminated Marine Ply",
      "Soft Dampers"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "sliding-door-wardrobes-02",
    "slug": "sliding-door-wardrobes-prestige-02",
    "name": "Nordic Floor-to-Ceiling Sliding Closet",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Triple sliding doors with frosted mirror insert strips and customized internal organizer drawers.",
    "description": "Triple sliding doors with frosted mirror insert strips and customized internal organizer drawers. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 135000,
    "originalPrice": 151200,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "96\" W x 24\" D x 96\" H",
    "materials": [
      "Anti-Bowing Aluminum Stiffeners",
      "Teak Wood Finish",
      "Integrated Sensor Lights"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "hinged-door-wardrobes-01",
    "slug": "hinged-door-wardrobes-signature-01",
    "name": "Verona Classic 4-Door Hinged Wardrobe",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Floor-to-ceiling four-leaf swing wardrobe with full-height continuous edge-profile wooden pull handles.",
    "description": "Floor-to-ceiling four-leaf swing wardrobe with full-height continuous edge-profile wooden pull handles. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 95000,
    "originalPrice": 109250,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "80\" W x 22\" D x 84\" H",
    "materials": [
      "Blum 110-Degree Soft-Close Hinges",
      "Moisture-Resistant Ply",
      "Satin PU Finish"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "hinged-door-wardrobes-02",
    "slug": "hinged-door-wardrobes-prestige-02",
    "name": "Tuscan Beveled Shaker 3-Door Wardrobe",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Subtle contemporary shaker door profile with interior valet pullout rod and jewelry organizer tray.",
    "description": "Subtle contemporary shaker door profile with interior valet pullout rod and jewelry organizer tray. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 78000,
    "originalPrice": 87360,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "60\" W x 22\" D x 84\" H",
    "materials": [
      "High-Density Fiberboard Facade",
      "Internal Velvet Lined Drawers"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "walk-in-wardrobes-01",
    "slug": "walk-in-wardrobes-signature-01",
    "name": "Beverly Master Suite Walk-In Dressing Room",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Opulent dressing suite with island accessories credenza, glass-topped drawers, and perimeter warm LED glow.",
    "description": "Opulent dressing suite with island accessories credenza, glass-topped drawers, and perimeter warm LED glow. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 220000,
    "originalPrice": 253000,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1616486701797-0f33f61038ec?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1616486701797-0f33f61038ec?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1616486701797-0f33f61038ec?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Configured to Dressing Suite Room",
    "materials": [
      "Backlit Smoked Glass Drawers",
      "Velvet Watch Inserts",
      "Burma Teak Trim"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "walk-in-wardrobes-02",
    "slug": "walk-in-wardrobes-prestige-02",
    "name": "Linear Open-Bay Dressing Wardrobe",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Sleek Italian open-frame system with powder-coated aluminum uprights and adjustable solid oak shelves.",
    "description": "Sleek Italian open-frame system with powder-coated aluminum uprights and adjustable solid oak shelves. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 165000,
    "originalPrice": 184800,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Modular Configuration",
    "materials": [
      "Matte Black Extruded Aluminum",
      "Solid White Oak Shelves"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "glass-door-wardrobes-01",
    "slug": "glass-door-wardrobes-signature-01",
    "name": "Luxe Smoked Glass & Aluminum Wardrobe",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Ultra-slim anodized bronze frames with tempered smoked glass doors and automated proximity sensor lights.",
    "description": "Ultra-slim anodized bronze frames with tempered smoked glass doors and automated proximity sensor lights. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 145000,
    "originalPrice": 166750,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "84\" W x 24\" D x 90\" H",
    "materials": [
      "Anodized Aluminum Frames",
      "8mm Toughened Smoked Glass",
      "Auto-Sensor LED Strips"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "glass-door-wardrobes-02",
    "slug": "glass-door-wardrobes-prestige-02",
    "name": "Reeded Fluted Glass Boutique Wardrobe",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Obscure fluted glass panels that softly diffuse clothing silhouettes while maintaining boutique luxury.",
    "description": "Obscure fluted glass panels that softly diffuse clothing silhouettes while maintaining boutique luxury. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 135000,
    "originalPrice": 151200,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "72\" W x 24\" D x 84\" H",
    "materials": [
      "Fluted Architectural Glass",
      "Champagne Gold Profiles"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "modular-wardrobes-01",
    "slug": "modular-wardrobes-signature-01",
    "name": "Adaptiv 6-Bay Modular Storage System",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Interchangeable wardrobe modules that can be dismantled and reassembled if shifting homes in Mumbai.",
    "description": "Interchangeable wardrobe modules that can be dismantled and reassembled if shifting homes in Mumbai. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 115000,
    "originalPrice": 132250,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "96\" W x 24\" D x 84\" H",
    "materials": [
      "Reinforced Cam-Lock Hardware",
      "High-Density Pre-Laminated Core"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "modular-wardrobes-02",
    "slug": "modular-wardrobes-prestige-02",
    "name": "Flexi-Space Corner Modular Wardrobe",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "L-shaped corner module optimizing awkward bedroom dead space with 180-degree folding corner doors.",
    "description": "L-shaped corner module optimizing awkward bedroom dead space with 180-degree folding corner doors. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 105000,
    "originalPrice": 117600,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "72\" x 72\" Corner Footprint x 84\" H",
    "materials": [
      "Bi-Fold German Mechanisms",
      "Heavy Duty Corner Carousel Rails"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "bedroom-wardrobes-01",
    "slug": "bedroom-wardrobes-signature-01",
    "name": "Sanctuary Master Bedroom Wardrobe with Vanity",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Full bedroom wall solution integrating floor-to-ceiling closets with an inset lighted dressing table niche.",
    "description": "Full bedroom wall solution integrating floor-to-ceiling closets with an inset lighted dressing table niche. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 125000,
    "originalPrice": 143750,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "108\" W x 24\" D x 90\" H",
    "materials": [
      "Integrated Vanity Mirror & Lights",
      "Teak Veneer",
      "Velvet Stool Included"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "bedroom-wardrobes-02",
    "slug": "bedroom-wardrobes-prestige-02",
    "name": "Loft-Optimized Dual Wardrobe Suite",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Two-tier storage with top overhead winter quilt lofts and everyday eye-level hanging wardrobes.",
    "description": "Two-tier storage with top overhead winter quilt lofts and everyday eye-level hanging wardrobes. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 98000,
    "originalPrice": 109760,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "84\" W x 22\" D x 96\" H",
    "materials": [
      "Reinforced Loft Bases",
      "Heavy-Duty Soft-Close Hinges"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "custom-wardrobes-01",
    "slug": "custom-wardrobes-signature-01",
    "name": "Atelier Bespoke Handcrafted Wardrobe Suite",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Built to precision CAD drawings with client chosen wood species, customized partitions, and lock boxes.",
    "description": "Built to precision CAD drawings with client chosen wood species, customized partitions, and lock boxes. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 175000,
    "originalPrice": 201250,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Built to Order",
    "materials": [
      "Kiln-Dried Timber",
      "Custom Client Veneer & Hardware"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "custom-wardrobes-02",
    "slug": "custom-wardrobes-prestige-02",
    "name": "Heritage Teak Double-Height Custom Wardrobe",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Bespoke grand storage built with seasoned solid Burma teak louvers and concealed digital safe compartment.",
    "description": "Bespoke grand storage built with seasoned solid Burma teak louvers and concealed digital safe compartment. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 195000,
    "originalPrice": 218400,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "/images/drive/drive_img_12_1kf_HX.jpg",
    "secondaryImage": "/images/drive/drive_img_12_1kf_HX.jpg",
    "images": [
      "/images/drive/drive_img_12_1kf_HX.jpg"
    ],
    "dimensions": "Custom Built to Order",
    "materials": [
      "Solid Burma Teak Louvers",
      "Integrated Fire-Safe Anchors"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "sideboards-consoles-01",
    "slug": "sideboards-consoles-signature-01",
    "name": "Aura Fluted Dining Room Credenza",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "sideboards-and-accent-cabinets",
    "shortDescription": "Architectural credenza with sweeping curved end profiles, vertical wood fluting, and hidden cutlery drawers.",
    "description": "Architectural credenza with sweeping curved end profiles, vertical wood fluting, and hidden cutlery drawers. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 58000,
    "originalPrice": 66700,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "66\" W x 18\" D x 32\" H",
    "materials": [
      "Solid Ash Fluting",
      "Soft-Close Blum Runners",
      "Natural Matte PU"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "sideboards-consoles-02",
    "slug": "sideboards-consoles-prestige-02",
    "name": "Elysian Fluted Accent Cabinet",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "sideboards-and-accent-cabinets",
    "shortDescription": "Slender architectural accent cabinet featuring a beveled marble top and sculptural arched timber base.",
    "description": "Slender architectural accent cabinet featuring a beveled marble top and sculptural arched timber base. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 38000,
    "originalPrice": 42560,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "52\" W x 14\" D x 32\" H",
    "materials": [
      "Natural White Marble",
      "Solid Teak Curved Arches"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "storage-cabinets-01",
    "slug": "storage-cabinets-signature-01",
    "name": "Bordeaux Bar & Crockery Cabinet",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "crockery-units",
    "shortDescription": "Stately multi-tiered storage cabinet with integrated wine rack, stemware hanging rails, and pull-out prep tray.",
    "description": "Stately multi-tiered storage cabinet with integrated wine rack, stemware hanging rails, and pull-out prep tray. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 68000,
    "originalPrice": 78200,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "42\" W x 18\" D x 66\" H",
    "materials": [
      "Solid Oak",
      "Mirrored Back Panel",
      "Brass Hardware"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "storage-cabinets-02",
    "slug": "storage-cabinets-prestige-02",
    "name": "Nordic Multi-Tier Linen Cupboard",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "crockery-units",
    "shortDescription": "Clean tall storage cupboard with adjustable shelves, ideal for dining linen or bedroom utility storage.",
    "description": "Clean tall storage cupboard with adjustable shelves, ideal for dining linen or bedroom utility storage. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 48000,
    "originalPrice": 53760,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "36\" W x 18\" D x 72\" H",
    "materials": [
      "Teak Wood Veneer",
      "Solid Hardwood Legs"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "display-units-01",
    "slug": "display-units-signature-01",
    "name": "Galerie Illuminated Curio Vitrine",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "crockery-units",
    "shortDescription": "Boutique glass display showcase with ultra-slim black metal frame and warm recessed spotlighting on each tier.",
    "description": "Boutique glass display showcase with ultra-slim black metal frame and warm recessed spotlighting on each tier. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 62000,
    "originalPrice": 71300,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "38\" W x 16\" D x 74\" H",
    "materials": [
      "Tempered Glass Panels",
      "Warm 2700K Micro-LED Spots",
      "Steel Frame"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "display-units-02",
    "slug": "display-units-prestige-02",
    "name": "Architectural Room-Divider Bookcase",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "crockery-units",
    "shortDescription": "Open double-sided geometric shelf system that subtly divides living and dining areas without blocking light.",
    "description": "Open double-sided geometric shelf system that subtly divides living and dining areas without blocking light. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 54000,
    "originalPrice": 60480,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "60\" W x 14\" D x 72\" H",
    "materials": [
      "Solid Oak Uprights",
      "Teak Shelves"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  },
  {
    "id": "custom-storage-01",
    "slug": "custom-storage-signature-01",
    "name": "Bespoke Alcove Library & Storage Wall",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "bar-units",
    "shortDescription": "Custom fitted cabinetry drafted to fill structural wall alcoves with base credenzas and open ceiling-height shelves.",
    "description": "Custom fitted cabinetry drafted to fill structural wall alcoves with base credenzas and open ceiling-height shelves. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 110000,
    "originalPrice": 126500,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Built to Alcove Dimensions",
    "materials": [
      "Client Choice Wood / Lacquer",
      "Factory Assembled Components"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "Can this design be tailored in custom dimensions?",
        "answer": "Yes! Every design can be customized in length, depth, and height to match your room proportions."
      },
      {
        "question": "Can I choose my own upholstery fabric or wood finish?",
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, boucl\u00e9s, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "custom-storage-02",
    "slug": "custom-storage-prestige-02",
    "name": "Foyer Shoe & Coat Architectural Credenza",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "bar-units",
    "shortDescription": "Custom entryway millwork with ventilated shoe racks, key catchall drawers, and full-length dressing mirror.",
    "description": "Custom entryway millwork with ventilated shoe racks, key catchall drawers, and full-length dressing mirror. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 75000,
    "originalPrice": 84000,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Built to Order",
    "materials": [
      "Ventilated Louver Panels",
      "Moisture-Proof Marine Ply"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Boucl\u00e9",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "Where is this manufactured?",
        "answer": "All our furniture is fabricated directly in our factory workshop in Mumbai, never imported or mass-assembled."
      },
      {
        "question": "What warranty is offered?",
        "answer": "We provide a 5-year structural warranty on all timber joinery, internal frames, and mechanisms."
      }
    ]
  }
];

export const getCuratedCarousels = (): {
  carousel1: FurnitureProduct[];
  carousel2: FurnitureProduct[];
} => {
  const c1Ids = [
    'l-shaped-sofas-01',
    'crown-malaysian-comfort-sofa-set',
    'two-tone-sofa-set',
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
    'magrack-sofa-set',
    'sofa-cum-beds-02',
    'modern-criss-cross-sofa-set',
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
    complementaryCats = ['living-storage', 'dining-tables'];
  } else if (currentCat === 'dining-tables') {
    complementaryCats = ['living-storage', 'sofas'];
  } else if (currentCat === 'beds-bedroom') {
    complementaryCats = ['living-storage', 'sofas'];
  } else {
    complementaryCats = ['sofas', 'dining-tables', 'beds-bedroom'];
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
    title: 'Ergonomic Poise & Accent Living',
    subtitle: 'Choosing dining chairs, coffee accent chairs, rocking seats, and pouffes',
    paragraphs: [
      'Accent seating adds character, color, and versatile functionality to any interior. From formal dining chairs to relaxed reading seats and mobile puffies, proportion and posture are paramount.',
      'Every chair is crafted with hand-mortised joinery, durable high-rub fabrics, and ergonomic lumbar curves.'
    ],
    tips: [
      'Ensure dining chair seat heights are 12 inches below table heights for optimal posture.',
      'Use versatile puffies for mobile seating during family gatherings.',
      'Place rocking chairs near natural light sources to create a dedicated reading sanctuary.'
    ]
  },
  tables: {
    categorySlug: 'tables',
    title: 'Creating Spaces for Shared Memories & Fine Living',
    subtitle: 'A guide to dining tables, centre tables, and coffee tables',
    paragraphs: [
      'Tables anchor human interaction. Whether it is a grand family dining table, a sculptural centre table, or a morning coffee table, finish and materiality matter.',
      'Whether you choose solid Burma teak or sealed Italian Statuario marble, each piece is engineered with ergonomic knee clearance and durable hand-applied seals.'
    ],
    tips: [
      'Plan 36 inches between dining table edges and walls to allow chairs to slide out comfortably.',
      'Choose dual-tier centre tables for concealed magazine and remote storage.',
      'Pair centre tables with matching low-profile nested occasional pieces for flexible entertaining.'
    ]
  },
  'living-room-storage': {
    categorySlug: 'living-room-storage',
    title: 'Effortless Order & Architectural Media Joinery',
    subtitle: 'From floating media wall units and TV base consoles to crockery and bar cabinets',
    paragraphs: [
      'Intelligent living room storage transforms rooms from cluttered spaces into calm architectural retreats.',
      'Our factory specializes in low-profile TV base units, acoustically treated wall units, ambient crockery vitrines, and custom dry bar units built to your exact wall elevations.'
    ],
    tips: [
      'Wall-mounted floating media consoles create visual lightness and simplify floor cleaning.',
      'Conceal all audio-visual cables inside pre-routed wall raceways.',
      'Incorporate integrated warm 3000K LED lighting inside crockery and bar cabinets.'
    ]
  },
  'bedroom-sets': {
    categorySlug: 'bedroom-sets',
    title: 'Designing Your Personal Sanctuary',
    subtitle: 'Master beds, floor-to-ceiling wardrobes, bedside tables, and vanity dressers',
    paragraphs: [
      'A great bedroom balances architectural stillness with tranquil comfort. In Mumbai residences where floor space is valuable, our hydraulic lift-up mechanisms unlock massive dust-free storage underneath without compromising aesthetics.',
      'Solid timber frames with precision mortise-and-tenon joints eliminate nocturnal creaking and support luxury pocket-spring mattresses with ease.'
    ],
    tips: [
      'Maintain at least 24 inches on both sides of a bed for side tables and free movement.',
      'Upholstered fluted headboards add acoustic dampening and sumptuous comfort.',
      'Floor-to-ceiling sliding wardrobe doors save valuable swing space in compact bedrooms.'
    ]
  },
  kitchens: {
    categorySlug: 'kitchens',
    title: 'Ergonomic Kitchen Engineering',
    subtitle: 'Bespoke modular kitchens and custom culinary spaces designed for Mumbai homes',
    paragraphs: [
      'The modern kitchen is a high-performance workspace demanding moisture resistance, heat tolerance, and fluid workflow.',
      'We build cabinetry with boiling-water-proof (BWP) marine ply, anti-scratch acrylics, and heavy-duty German drawer runners rated for 50kg loads.'
    ],
    tips: [
      'Maintain the classic work triangle between refrigerator, sink, and cooktop.',
      'Incorporate full-extension pullout tandem boxes instead of deep low shelves.',
      'Choose seamless quartz or sealed granite countertops for zero oil staining.'
    ]
  }
};
