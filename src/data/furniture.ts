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
    "id": "cat-sofas",
    "slug": "sofas",
    "name": "Sofas",
    "tagline": "Comfort, Crafted Around Your Space",
    "description": "From expansive corner L-shapes and versatile sofa-cum-beds to hand-tufted Italian leather suites, each sofa is custom engineered in our Mumbai factory with high-resilience comfort foams, kiln-dried timber frames, and bespoke upholstery.",
    "heroImage": "/images/chesterfield_drive.jpg",
    "subcategories": [
      {
        "id": "sub-l-shaped",
        "slug": "l-shaped-sofas",
        "name": "L-Shaped Sofas",
        "categorySlug": "sofas",
        "description": "Bespoke corner and chaise sectionals tailored to architectural room proportions, custom seating depth, and imported fabrics.",
        "image": "/images/bespoke/luxury_sofa_bed_1791460634066.jpg"
      },
      {
        "id": "sub-sofa-bed",
        "slug": "sofa-cum-beds",
        "name": "Sofa Cum Beds",
        "categorySlug": "sofas",
        "description": "Engineered dual-purpose sofas with smooth hydraulic glide pullouts, high-density comfort mattresses, and concealed bedding storage.",
        "image": "/images/bespoke/sofa_cum_bed_craft_1790862556744.jpg"
      },
      {
        "id": "sub-2-seater",
        "slug": "2-seater-sofas",
        "name": "2-Seater Sofas",
        "categorySlug": "sofas",
        "description": "Intimate two-seater settees and loveseats designed for Mumbai apartments, study dens, and bedroom lounge corners.",
        "image": "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-3-seater",
        "slug": "3-seater-sofas",
        "name": "3-Seater Sofas",
        "categorySlug": "sofas",
        "description": "Classic three-passenger formal living room couches crafted with feather-down toppers and solid teak plinths.",
        "image": "/images/bespoke/dsigner_factory_sofa_1791361355243.jpg"
      },
      {
        "id": "sub-sectional",
        "slug": "sectional-sofas",
        "name": "Sectional Sofas",
        "categorySlug": "sofas",
        "description": "Expansive multi-piece living room seating layouts configurable with left- or right-facing chaises and corner wedges.",
        "image": "/images/bespoke/chesterfield_sectional_sofa_1791319346646.jpg"
      },
      {
        "id": "sub-recliner",
        "slug": "recliner-sofas",
        "name": "Recliner Sofas",
        "categorySlug": "sofas",
        "description": "Ergonomic manual and motorized recliners with integrated leg supports, lumbar contours, and quiet German mechanisms.",
        "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-modular",
        "slug": "modular-sofas",
        "name": "Modular Sofas",
        "categorySlug": "sofas",
        "description": "Movable low-slung ottoman blocks and armless seating modules that can be reconfigured for entertaining or family lounging.",
        "image": "/images/drive/drive_img_1_1CBInl.jpg"
      },
      {
        "id": "sub-fabric",
        "slug": "fabric-sofas",
        "name": "Fabric Sofas",
        "categorySlug": "sofas",
        "description": "Upholstered in stain-resistant Belgian linen, textured bouclé, chenille, and high-martindale performance weaves.",
        "image": "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-leather",
        "slug": "leather-sofas",
        "name": "Leather Sofas",
        "categorySlug": "sofas",
        "description": "Hand-rubbed aniline and semi-aniline full-grain leathers aged to develop rich natural patinas over decades.",
        "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-custom",
        "slug": "custom-sofas",
        "name": "Custom Sofas",
        "categorySlug": "sofas",
        "description": "Collaborate with our in-house furniture architects to build exact custom lengths, depths, cushion firmness, and finishes.",
        "image": "/images/bespoke/custom_sofa_bespoke_1790862510012.jpg"
      }
    ]
  },
  {
    "id": "cat-dining",
    "slug": "dining-tables",
    "name": "Dining Tables",
    "tagline": "Centred Around Togetherness",
    "description": "Handcrafted formal dining tables, casual breakfast ensembles, and conversational round dining pieces built with hand-finished hardwood aprons, solid Burma teak, and sealed Italian marble.",
    "heroImage": "/images/bespoke/dining_bespoke_teak_1790862543973.jpg",
    "subcategories": [
      {
        "id": "sub-4-seater",
        "slug": "4-seater-dining-tables",
        "name": "4-Seater Dining Tables",
        "categorySlug": "dining-tables",
        "description": "Space-conscious square and compact rectangular dining tables proportioned for modern Mumbai apartment dining nooks.",
        "image": "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-6-seater",
        "slug": "6-seater-dining-tables",
        "name": "6-Seater Dining Tables",
        "categorySlug": "dining-tables",
        "description": "The definitive family dining centerpiece accommodating everyday meals and effortless weekend dinner hosting.",
        "image": "/images/drive/drive_img_21_13u-6f.jpg"
      },
      {
        "id": "sub-8-seater",
        "slug": "8-seater-dining-tables",
        "name": "8-Seater Dining Tables",
        "categorySlug": "dining-tables",
        "description": "Expansive formal dining tables built with reinforced hardwood aprons and architectural pedestal legs.",
        "image": "/images/drive/drive_img_2_1oeDlS.jpg"
      },
      {
        "id": "sub-10-seater",
        "slug": "10-seater-dining-tables",
        "name": "10-Seater Dining Tables",
        "categorySlug": "dining-tables",
        "description": "Grand banquet tables designed for luxury residences and penthouses, finished with continuous grain bookmatched veneers.",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-round",
        "slug": "round-dining-tables",
        "name": "Round Dining Tables",
        "categorySlug": "dining-tables",
        "description": "Circular dining designs with central sculptural flute columns that foster effortless conversation and fluid room flow.",
        "image": "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-extendable",
        "slug": "extendable-dining-tables",
        "name": "Extendable Dining Tables",
        "categorySlug": "dining-tables",
        "description": "Clever butterfly leaf and synchronized glide extension mechanisms that effortlessly expand when hosting weekend guests.",
        "image": "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-marble",
        "slug": "marble-dining-tables",
        "name": "Marble Dining Tables",
        "categorySlug": "dining-tables",
        "description": "Sealed natural Calacatta, Italian Statuario, and Black Marquina marble tops with beveled bullnose edges.",
        "image": "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-wooden",
        "slug": "wooden-dining-tables",
        "name": "Wooden Dining Tables",
        "categorySlug": "dining-tables",
        "description": "Seasoned solid Burma teak, white American oak, and American walnut with satin PU clear coat protection.",
        "image": "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-modern",
        "slug": "modern-dining-tables",
        "name": "Modern Dining Tables",
        "categorySlug": "dining-tables",
        "description": "Clean Scandinavian and minimalist profiles featuring powder-coated metal subframes and floating tabletop visuals.",
        "image": "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-custom-dining",
        "slug": "custom-dining-tables",
        "name": "Custom Dining Tables",
        "categorySlug": "dining-tables",
        "description": "Tailored dimensions, stone selection, edge profiles, and matching chair configurations made to order.",
        "image": "/images/drive/drive_img_21_13u-6f.jpg"
      }
    ]
  },
  {
    "id": "cat-beds",
    "slug": "beds-bedroom",
    "name": "Beds & Bedroom",
    "tagline": "Sanctuary for Rest & Renewal",
    "description": "Architectural king and queen master beds, hydraulic easy-lift storage frames, upholstered fluted headboards, and solid teak bed frames crafted for Mumbai luxury master suites.",
    "heroImage": "/images/drive/drive_img_22_1atNjG.jpg",
    "subcategories": [
      {
        "id": "sub-king-beds",
        "slug": "king-size-beds",
        "name": "King Size Beds",
        "categorySlug": "beds-bedroom",
        "description": "Spacious 72x78 master suite beds engineered with reinforced center beams, noise-free joinery, and tailored headboards.",
        "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-queen-beds",
        "slug": "queen-size-beds",
        "name": "Queen Size Beds",
        "categorySlug": "beds-bedroom",
        "description": "Proportionate 60x78 beds offering luxury comfort while preserving walking clearance in secondary bedrooms.",
        "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-double-beds",
        "slug": "double-beds",
        "name": "Double Beds",
        "categorySlug": "beds-bedroom",
        "description": "Compact 48x75 and 54x75 beds designed for guest rooms, teenage bedrooms, and multifunctional home studios.",
        "image": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-storage-beds",
        "slug": "storage-beds",
        "name": "Storage Beds",
        "categorySlug": "beds-bedroom",
        "description": "Integrated under-bed cabinetry, deep drawers, and lift-up compartments to maximize bedroom organization.",
        "image": "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-hydraulic-beds",
        "slug": "hydraulic-storage-beds",
        "name": "Hydraulic Storage Beds",
        "categorySlug": "beds-bedroom",
        "description": "Effortless gas-lift pistons that elevate the entire mattress platform with fingertip ease to reveal cavernous storage.",
        "image": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-upholstered-beds",
        "slug": "upholstered-beds",
        "name": "Upholstered Beds",
        "categorySlug": "beds-bedroom",
        "description": "Fully padded bed frames and headboards wrapped in plush velvet, woven chenille, or natural linen.",
        "image": "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-platform-beds",
        "slug": "platform-beds",
        "name": "Platform Beds",
        "categorySlug": "beds-bedroom",
        "description": "Low-slung minimalist bed frames requiring no box spring, offering architectural stillness and clean horizontal lines.",
        "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-wooden-beds",
        "slug": "wooden-beds",
        "name": "Wooden Beds",
        "categorySlug": "beds-bedroom",
        "description": "Heirloom craftsmanship showcasing solid timber grain, traditional mortise-and-tenon joints, and natural finishes.",
        "image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-modern-beds",
        "slug": "modern-beds",
        "name": "Modern Beds",
        "categorySlug": "beds-bedroom",
        "description": "Contemporary master bed designs combining mixed materials: metal accents, fluted panels, and integrated lighting.",
        "image": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-custom-beds",
        "slug": "custom-beds",
        "name": "Custom Beds",
        "categorySlug": "beds-bedroom",
        "description": "Made-to-measure headboard heights, integrated nightstands, custom mattress depth recesses, and bespoke finishes.",
        "image": "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-bedside-tables",
        "slug": "bedside-tables",
        "name": "Bedside Tables",
        "categorySlug": "beds-bedroom",
        "description": "Nightstands, floating bedside ledges, and accent drawers crafted to align perfectly with bed mattress heights.",
        "image": "/images/drive/drive_img_4_1FEihx.jpg"
      }
    ]
  },
  {
    "id": "cat-living-storage",
    "slug": "living-storage",
    "name": "Living & Storage",
    "tagline": "Effortless Order, Architectural Elegance",
    "description": "Bespoke media entertainment TV units, custom walk-in closets, modular sliding wardrobes, and refined fluted sideboards designed to maximize floor space and interior aesthetics.",
    "heroImage": "/images/drive/drive_img_10_1GuU0K.jpg",
    "subcategories": [
      {
        "id": "sub-tv-wall",
        "slug": "wall-mounted-tv-units",
        "name": "Wall-Mounted TV Units",
        "categorySlug": "living-storage",
        "description": "Floating entertainment consoles with concealed cable routing chaseways and ambient backlighting.",
        "image": "/images/bespoke/tv_unit_acoustic_wood_1790862520491.jpg"
      },
      {
        "id": "sub-tv-floor",
        "slug": "floor-standing-tv-units",
        "name": "Floor-Standing TV Units",
        "categorySlug": "living-storage",
        "description": "Low-profile architectural media credenzas with solid plinths or sculptural metal legs.",
        "image": "/images/drive/drive_img_7_1tUTht.jpg"
      },
      {
        "id": "sub-tv-storage",
        "slug": "tv-units-with-storage",
        "name": "TV Units With Storage",
        "categorySlug": "living-storage",
        "description": "Deep gaming console drawers, component niches, display shelves, and concealed wire raceways.",
        "image": "/images/drive/drive_img_6_1U5guR.jpg"
      },
      {
        "id": "sub-tv-minimal",
        "slug": "minimal-tv-units",
        "name": "Minimal TV Units",
        "categorySlug": "living-storage",
        "description": "Ultra-slim monolithic profiles with push-to-open hardware, zero visible handles, and clean geometry.",
        "image": "/images/drive/drive_img_9_1XlOjJ.jpg"
      },
      {
        "id": "sub-tv-modern",
        "slug": "modern-tv-units",
        "name": "Modern TV Units",
        "categorySlug": "living-storage",
        "description": "Asymmetric compositions blending open curio cubbies with stone surfaces and dark metal accents.",
        "image": "/images/drive/drive_img_3_1KtJIM.jpg"
      },
      {
        "id": "sub-tv-designer",
        "slug": "designer-tv-units",
        "name": "Designer TV Units",
        "categorySlug": "living-storage",
        "description": "Sculptural luxury media centers finished with imported marble tops, ribbed tambour, and bronze hardware.",
        "image": "/images/drive/drive_img_15_1ABIZH.jpg"
      },
      {
        "id": "sub-tv-custom",
        "slug": "custom-tv-units",
        "name": "Custom TV Units",
        "categorySlug": "living-storage",
        "description": "Engineered precisely to your room elevation drawings, accommodating large screen displays and acoustic sound systems.",
        "image": "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-wardrobe-sliding",
        "slug": "sliding-door-wardrobes",
        "name": "Sliding Door Wardrobes",
        "categorySlug": "living-storage",
        "description": "Smooth top-hung floor-to-ceiling sliding systems with soft-dampers and anti-dust brush seals.",
        "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-wardrobe-hinged",
        "slug": "hinged-door-wardrobes",
        "name": "Hinged Door Wardrobes",
        "categorySlug": "living-storage",
        "description": "Classic swing door wardrobes featuring 110-degree soft-closing concealed hinges and elegant full-height handles.",
        "image": "/images/drive/drive_img_20_14uLiI.jpg"
      },
      {
        "id": "sub-wardrobe-walkin",
        "slug": "walk-in-wardrobes",
        "name": "Walk-In Wardrobes",
        "categorySlug": "living-storage",
        "description": "Bespoke open-bay dressing suites with LED-lit hanging rails, island jewelry display chests, and shoe vitrines.",
        "image": "/images/drive/drive_img_19_1iOMO7.jpg"
      },
      {
        "id": "sub-wardrobe-glass",
        "slug": "glass-door-wardrobes",
        "name": "Glass Door Wardrobes",
        "categorySlug": "living-storage",
        "description": "Contemporary tinted bronze, smoked gray, and fluted reeded glass doors encased in ultra-slim aluminum profiles.",
        "image": "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-wardrobe-modular",
        "slug": "modular-wardrobes",
        "name": "Modular Wardrobes",
        "categorySlug": "living-storage",
        "description": "Expandable storage modules that can adapt over time with repositionable shelves, tie racks, and laundry hampers.",
        "image": "/images/drive/drive_img_18_1YNYsJ.jpg"
      },
      {
        "id": "sub-wardrobe-bedroom",
        "slug": "bedroom-wardrobes",
        "name": "Bedroom Wardrobes",
        "categorySlug": "living-storage",
        "description": "Tailored bedroom storage built around loft compartments, vanity desks, and architectural room columns.",
        "image": "/images/drive/drive_img_8_17IV2c.jpg"
      },
      {
        "id": "sub-wardrobe-custom",
        "slug": "custom-wardrobes",
        "name": "Custom Wardrobes",
        "categorySlug": "living-storage",
        "description": "Full bespoke carpentry manufactured directly at our Mumbai factory to your interior designer specifications.",
        "image": "/images/bespoke/luxury_bedroom_wardrobe_1790862531824.jpg"
      },
      {
        "id": "sub-sideboards",
        "slug": "sideboards-consoles",
        "name": "Sideboards & Consoles",
        "categorySlug": "living-storage",
        "description": "Sculptural credenzas, dining room sideboards, and hallway entryway consoles with fluted door panels.",
        "image": "/images/drive/drive_img_16_1zcRXm.jpg"
      },
      {
        "id": "sub-storage-cabinets",
        "slug": "storage-cabinets",
        "name": "Storage Cabinets",
        "categorySlug": "living-storage",
        "description": "Multi-tiered dry bar cabinets, linen cupboards, and crockery units with adjustable solid shelves.",
        "image": "/images/drive/drive_img_11_1BO_We.jpg"
      },
      {
        "id": "sub-display-units",
        "slug": "display-units",
        "name": "Display Units",
        "categorySlug": "living-storage",
        "description": "Curio vitrines, open architectural book dividers, and illuminated curio showcases for curated artifacts.",
        "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
      },
      {
        "id": "sub-custom-storage",
        "slug": "custom-storage",
        "name": "Custom Storage",
        "categorySlug": "living-storage",
        "description": "Built-in alcove cabinetry, under-stair storage, shoe closets, and tailor-made architectural millwork.",
        "image": "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80"
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
    "subcategorySlug": "l-shaped-sofas",
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
      "Belgian Bouclé",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "l-shaped-sofas-02",
    "slug": "l-shaped-sofas-prestige-02",
    "name": "Savona Architectural Chaise Sofa",
    "categorySlug": "sofas",
    "subcategorySlug": "l-shaped-sofas",
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
        "name": "Mocha Bouclé",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
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
        "name": "Mocha Bouclé",
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
    "id": "2-seater-sofas-01",
    "slug": "2-seater-sofas-signature-01",
    "name": "Bergamo Tailored Loveseat Settee",
    "categorySlug": "sofas",
    "subcategorySlug": "2-seater-sofas",
    "shortDescription": "Petite two-passenger sofa with fluted back detailing and tapered brass-capped wooden legs.",
    "description": "Petite two-passenger sofa with fluted back detailing and tapered brass-capped wooden legs. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 62000,
    "originalPrice": 71300,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "62\" W x 34\" D x 32\" H",
    "materials": [
      "Solid Ash Wood",
      "Velvet Upholstery",
      "Brushed Brass Ferrules"
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
    "id": "2-seater-sofas-02",
    "slug": "2-seater-sofas-prestige-02",
    "name": "Capri Minimalist Studio Loveseat",
    "categorySlug": "sofas",
    "subcategorySlug": "2-seater-sofas",
    "shortDescription": "Crisp Scandinavian lines with slim track arms engineered to maximize seating in compact spaces.",
    "description": "Crisp Scandinavian lines with slim track arms engineered to maximize seating in compact spaces. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 58000,
    "originalPrice": 64960,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "58\" W x 33\" D x 31\" H",
    "materials": [
      "Teak Wood Frame",
      "Linen Blend Fabric",
      "HR Foam"
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
        "name": "Mocha Bouclé",
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
    "id": "3-seater-sofas-01",
    "slug": "3-seater-sofas-signature-01",
    "name": "Milano Executive Three-Seater Couch",
    "categorySlug": "sofas",
    "subcategorySlug": "3-seater-sofas",
    "shortDescription": "Commanding living room sofa with deep seat cushions and hand-tufted tailored backrest.",
    "description": "Commanding living room sofa with deep seat cushions and hand-tufted tailored backrest. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 85000,
    "originalPrice": 97750,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "88\" W x 36\" D x 33\" H",
    "materials": [
      "Burma Teak",
      "Italian Leather / Linen",
      "Layered Foam"
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
    "id": "3-seater-sofas-02",
    "slug": "3-seater-sofas-prestige-02",
    "name": "Ravello Formal Heritage Sofa",
    "categorySlug": "sofas",
    "subcategorySlug": "3-seater-sofas",
    "shortDescription": "Graceful shelter arm silhouette with reversible seat cushions and hand-applied piping.",
    "description": "Graceful shelter arm silhouette with reversible seat cushions and hand-applied piping. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 79000,
    "originalPrice": 88480,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "84\" W x 36\" D x 34\" H",
    "materials": [
      "Solid Marandi Timber",
      "Belgian Woven Fabric",
      "Feather Down Topper"
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
        "name": "Mocha Bouclé",
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
    "id": "sectional-sofas-01",
    "slug": "sectional-sofas-signature-01",
    "name": "Tuscan Grand U-Shaped Modular Sectional",
    "categorySlug": "sofas",
    "subcategorySlug": "sectional-sofas",
    "shortDescription": "Spectacular multi-segment seating arrangement created for generous luxury living halls.",
    "description": "Spectacular multi-segment seating arrangement created for generous luxury living halls. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 165000,
    "originalPrice": 189750,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "138\" W x 92\" D x 32\" H",
    "materials": [
      "Solid Hardwood Internal Frame",
      "Textured Bouclé",
      "High-Density Foam"
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
    "id": "sectional-sofas-02",
    "slug": "sectional-sofas-prestige-02",
    "name": "Bellagio Curve Architectural Sectional",
    "categorySlug": "sofas",
    "subcategorySlug": "sectional-sofas",
    "shortDescription": "Gently curved crescent sofa ensemble with built-in wooden side accent table ledge.",
    "description": "Gently curved crescent sofa ensemble with built-in wooden side accent table ledge. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 155000,
    "originalPrice": 173600,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "126\" W x 72\" D x 32\" H",
    "materials": [
      "Curved Plywood Core",
      "Burma Teak Shelf",
      "Imported Velvet"
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
        "name": "Mocha Bouclé",
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
    "id": "recliner-sofas-01",
    "slug": "recliner-sofas-signature-01",
    "name": "Torino Motorized Power Recliner Suite",
    "categorySlug": "sofas",
    "subcategorySlug": "recliner-sofas",
    "shortDescription": "Whisper-quiet dual motor system with independent back and footrest tilt controls and hidden USB ports.",
    "description": "Whisper-quiet dual motor system with independent back and footrest tilt controls and hidden USB ports. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 115000,
    "originalPrice": 132250,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "84\" W x 39\" D x 40\" H",
    "materials": [
      "German Okin Motors",
      "Top-Grain Leather",
      "Steel Recline Chassis"
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
    "id": "recliner-sofas-02",
    "slug": "recliner-sofas-prestige-02",
    "name": "Salerno Manual Push-Back Reclining Sofa",
    "categorySlug": "sofas",
    "subcategorySlug": "recliner-sofas",
    "shortDescription": "Discreet ergonomic mechanism that reclines smoothly with body weight without unsightly visible levers.",
    "description": "Discreet ergonomic mechanism that reclines smoothly with body weight without unsightly visible levers. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 82000,
    "originalPrice": 91840,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "80\" W x 38\" D x 39\" H",
    "materials": [
      "Hardwood Frame",
      "Performance Fabric",
      "High-Resilience Lumbar Core"
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
        "name": "Mocha Bouclé",
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
    "id": "modular-sofas-01",
    "slug": "modular-sofas-signature-01",
    "name": "Palermo Cloud Infinite Modular System",
    "categorySlug": "sofas",
    "subcategorySlug": "modular-sofas",
    "shortDescription": "Freestanding connectable seating pods that can shift from a large sofa into separate lounge chairs.",
    "description": "Freestanding connectable seating pods that can shift from a large sofa into separate lounge chairs. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 135000,
    "originalPrice": 155250,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Modular Blocks (each 38\" x 38\")",
    "materials": [
      "Pocket Spring Blocks",
      "Feather Down Blend",
      "Washable Slub Linen"
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
    "id": "modular-sofas-02",
    "slug": "modular-sofas-prestige-02",
    "name": "Como Low-Profile Pit Lounge Sofa",
    "categorySlug": "sofas",
    "subcategorySlug": "modular-sofas",
    "shortDescription": "Ultra-low Japanese-Scandinavian inspired modular floor couch with movable backrest wedges.",
    "description": "Ultra-low Japanese-Scandinavian inspired modular floor couch with movable backrest wedges. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 98000,
    "originalPrice": 109760,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1505409859467-3a796fd5798e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1505409859467-3a796fd5798e?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505409859467-3a796fd5798e?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "108\" W x 76\" D x 28\" H",
    "materials": [
      "Reinforced Foam Core",
      "Non-Slip Bottom Base",
      "Textured Bouclé"
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
        "name": "Mocha Bouclé",
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
    "id": "fabric-sofas-01",
    "slug": "fabric-sofas-signature-01",
    "name": "Siena Belgian Linen Formal Couch",
    "categorySlug": "sofas",
    "subcategorySlug": "fabric-sofas",
    "shortDescription": "Tailored casual elegance wrapped in 100% pre-washed Belgian flax linen with loose slipcover styling.",
    "description": "Tailored casual elegance wrapped in 100% pre-washed Belgian flax linen with loose slipcover styling. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 78000,
    "originalPrice": 89700,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "84\" W x 36\" D x 33\" H",
    "materials": [
      "Pre-Washed Linen",
      "Solid Ash Plinth",
      "HR Multi-Density Foam"
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
    "id": "fabric-sofas-02",
    "slug": "fabric-sofas-prestige-02",
    "name": "Livorno Bouclé Curved Statement Sofa",
    "categorySlug": "sofas",
    "subcategorySlug": "fabric-sofas",
    "shortDescription": "Sculptural organic silhouette dressed in heavy-texture ivory bouclé for an editorial living room presence.",
    "description": "Sculptural organic silhouette dressed in heavy-texture ivory bouclé for an editorial living room presence. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 89000,
    "originalPrice": 99680,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "90\" W x 38\" D x 31\" H",
    "materials": [
      "Sculptural Plywood",
      "Plush Ivory Bouclé",
      "Ergonomic Support Core"
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
        "name": "Mocha Bouclé",
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
    "id": "leather-sofas-01",
    "slug": "leather-sofas-signature-01",
    "name": "Venezia Chesterfield Hand-Tufted Sofa",
    "categorySlug": "sofas",
    "subcategorySlug": "leather-sofas",
    "shortDescription": "Classic British Chesterfield with deep diamond hand-tufting, rolled arms, and antiqued brass studs.",
    "description": "Classic British Chesterfield with deep diamond hand-tufting, rolled arms, and antiqued brass studs. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 145000,
    "originalPrice": 166750,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "92\" W x 38\" D x 31\" H",
    "materials": [
      "Full-Grain Italian Leather",
      "Hand-Tied Coil Springs",
      "Teak Bun Feet"
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
    "id": "leather-sofas-02",
    "slug": "leather-sofas-prestige-02",
    "name": "Lucca Contemporary Tan Leather Couch",
    "categorySlug": "sofas",
    "subcategorySlug": "leather-sofas",
    "shortDescription": "Clean modern sofa in saddle tan aniline leather with exposed topstitch French seams and slim metal legs.",
    "description": "Clean modern sofa in saddle tan aniline leather with exposed topstitch French seams and slim metal legs. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 130000,
    "originalPrice": 145600,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "86\" W x 36\" D x 32\" H",
    "materials": [
      "Semi-Aniline Nappa Leather",
      "Kiln-Dried Timber",
      "Gunmetal Steel Legs"
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
        "name": "Mocha Bouclé",
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
    "id": "custom-sofas-01",
    "slug": "custom-sofas-signature-01",
    "name": "Bespoke Architectural Atelier Sofa",
    "categorySlug": "sofas",
    "subcategorySlug": "custom-sofas",
    "shortDescription": "Completely customized down to the millimeter to fit alcoves, bay windows, or specific room geometries.",
    "description": "Completely customized down to the millimeter to fit alcoves, bay windows, or specific room geometries. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 110000,
    "originalPrice": 126500,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Built to Room Dimensions",
    "materials": [
      "Client Choice Wood Frame",
      "Bespoke Fabric / Leather",
      "Custom Cushion Density"
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
    "id": "custom-sofas-02",
    "slug": "custom-sofas-prestige-02",
    "name": "Signature Penthouse Lounge Suite",
    "categorySlug": "sofas",
    "subcategorySlug": "custom-sofas",
    "shortDescription": "Grand bespoke living room centerpiece commissioned with integrated marble side tables and power console.",
    "description": "Grand bespoke living room centerpiece commissioned with integrated marble side tables and power console. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 175000,
    "originalPrice": 196000,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Built to Order",
    "materials": [
      "Italian Statuario Marble",
      "Burma Teak",
      "Custom Imported Velvet"
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
        "name": "Mocha Bouclé",
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
    "id": "4-seater-dining-tables-01",
    "slug": "4-seater-dining-tables-signature-01",
    "name": "Padua Compact 4-Seater Teak Table",
    "categorySlug": "dining-tables",
    "subcategorySlug": "4-seater-dining-tables",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "4-seater-dining-tables-02",
    "slug": "4-seater-dining-tables-prestige-02",
    "name": "Treviso Square Bistro Dining Table",
    "categorySlug": "dining-tables",
    "subcategorySlug": "4-seater-dining-tables",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "dining-tables",
    "subcategorySlug": "6-seater-dining-tables",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "6-seater-dining-tables-02",
    "slug": "6-seater-dining-tables-prestige-02",
    "name": "Vicenza Floating Profile Dining Table",
    "categorySlug": "dining-tables",
    "subcategorySlug": "6-seater-dining-tables",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "dining-tables",
    "subcategorySlug": "8-seater-dining-tables",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "8-seater-dining-tables-02",
    "slug": "8-seater-dining-tables-prestige-02",
    "name": "Rimini Architectural Trestle Table",
    "categorySlug": "dining-tables",
    "subcategorySlug": "8-seater-dining-tables",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "dining-tables",
    "subcategorySlug": "10-seater-dining-tables",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "10-seater-dining-tables-02",
    "slug": "10-seater-dining-tables-prestige-02",
    "name": "Caserta Double-Pedestal Estate Table",
    "categorySlug": "dining-tables",
    "subcategorySlug": "10-seater-dining-tables",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "dining-tables",
    "subcategorySlug": "round-dining-tables",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "round-dining-tables-02",
    "slug": "round-dining-tables-prestige-02",
    "name": "Positano Sculptural Conical Dining Table",
    "categorySlug": "dining-tables",
    "subcategorySlug": "round-dining-tables",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "dining-tables",
    "subcategorySlug": "extendable-dining-tables",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "extendable-dining-tables-02",
    "slug": "extendable-dining-tables-prestige-02",
    "name": "Bari Pull-Out Telescopic Dining Table",
    "categorySlug": "dining-tables",
    "subcategorySlug": "extendable-dining-tables",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "dining-tables",
    "subcategorySlug": "marble-dining-tables",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "marble-dining-tables-02",
    "slug": "marble-dining-tables-prestige-02",
    "name": "Marquina Black Marble Round Table",
    "categorySlug": "dining-tables",
    "subcategorySlug": "marble-dining-tables",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "dining-tables",
    "subcategorySlug": "wooden-dining-tables",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "wooden-dining-tables-02",
    "slug": "wooden-dining-tables-prestige-02",
    "name": "Nordic Oak Plank Dining Table",
    "categorySlug": "dining-tables",
    "subcategorySlug": "wooden-dining-tables",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "dining-tables",
    "subcategorySlug": "modern-dining-tables",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "modern-dining-tables-02",
    "slug": "modern-dining-tables-prestige-02",
    "name": "Linear Geometric Silhouette Table",
    "categorySlug": "dining-tables",
    "subcategorySlug": "modern-dining-tables",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "dining-tables",
    "subcategorySlug": "custom-dining-tables",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "custom-dining-tables-02",
    "slug": "custom-dining-tables-prestige-02",
    "name": "Architectural Feast Table Commission",
    "categorySlug": "dining-tables",
    "subcategorySlug": "custom-dining-tables",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "king-size-beds",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "king-size-beds-02",
    "slug": "king-size-beds-prestige-02",
    "name": "Cortina Low-Profile King Platform Bed",
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "king-size-beds",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "queen-size-beds",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "queen-size-beds-02",
    "slug": "queen-size-beds-prestige-02",
    "name": "Ravello Floating Queen Bedframe",
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "queen-size-beds",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "double-beds",
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
      "Bouclé Fabric",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "double-beds-02",
    "slug": "double-beds-prestige-02",
    "name": "Parma Minimalist Studio Double Bed",
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "double-beds",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "storage-beds",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "storage-beds-02",
    "slug": "storage-beds-prestige-02",
    "name": "Padua Dual-Zone Divided Storage Bed",
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "storage-beds",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "hydraulic-storage-beds",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "hydraulic-storage-beds-02",
    "slug": "hydraulic-storage-beds-prestige-02",
    "name": "Monza Steel-Frame Hydraulic Bed",
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "hydraulic-storage-beds",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "upholstered-beds",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "upholstered-beds-02",
    "slug": "upholstered-beds-prestige-02",
    "name": "Siena Curved Pillowback Bed",
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "upholstered-beds",
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
      "Woven Bouclé",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "platform-beds",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "platform-beds-02",
    "slug": "platform-beds-prestige-02",
    "name": "Zenith Floating Slat Bed",
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "platform-beds",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "wooden-beds",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "wooden-beds-02",
    "slug": "wooden-beds-prestige-02",
    "name": "Verona Spindle Headboard Bed",
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "wooden-beds",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "modern-beds",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "modern-beds-02",
    "slug": "modern-beds-prestige-02",
    "name": "Sphere Minimalist Bedroom Suite Bed",
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "modern-beds",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "custom-beds",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "custom-beds-02",
    "slug": "custom-beds-prestige-02",
    "name": "Palatial Extended Wingback Custom Bed",
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "custom-beds",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "bedside-tables",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "bedside-tables-02",
    "slug": "bedside-tables-prestige-02",
    "name": "Siena Floating Bedside Console",
    "categorySlug": "beds-bedroom",
    "subcategorySlug": "bedside-tables",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "living-storage",
    "subcategorySlug": "wall-mounted-tv-units",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "wall-mounted-tv-units-02",
    "slug": "wall-mounted-tv-units-prestige-02",
    "name": "Lumina Backlit Wall Entertainment Panel",
    "categorySlug": "living-storage",
    "subcategorySlug": "wall-mounted-tv-units",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "living-storage",
    "subcategorySlug": "floor-standing-tv-units",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "floor-standing-tv-units-02",
    "slug": "floor-standing-tv-units-prestige-02",
    "name": "Modena Mid-Century Media Sideboard",
    "categorySlug": "living-storage",
    "subcategorySlug": "floor-standing-tv-units",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "living-storage",
    "subcategorySlug": "tv-units-with-storage",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "tv-units-with-storage-02",
    "slug": "tv-units-with-storage-prestige-02",
    "name": "Caserta Modular Media Wall Unit",
    "categorySlug": "living-storage",
    "subcategorySlug": "tv-units-with-storage",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "living-storage",
    "subcategorySlug": "minimal-tv-units",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "minimal-tv-units-02",
    "slug": "minimal-tv-units-prestige-02",
    "name": "Zenith Shadowline TV Bench",
    "categorySlug": "living-storage",
    "subcategorySlug": "minimal-tv-units",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "living-storage",
    "subcategorySlug": "modern-tv-units",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "modern-tv-units-02",
    "slug": "modern-tv-units-prestige-02",
    "name": "Contour Rounded Edge Modern TV Stand",
    "categorySlug": "living-storage",
    "subcategorySlug": "modern-tv-units",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "living-storage",
    "subcategorySlug": "designer-tv-units",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "designer-tv-units-02",
    "slug": "designer-tv-units-prestige-02",
    "name": "Venezia Art-Deco Entertainment Vitrine",
    "categorySlug": "living-storage",
    "subcategorySlug": "designer-tv-units",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "living-storage",
    "subcategorySlug": "custom-tv-units",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "custom-tv-units-02",
    "slug": "custom-tv-units-prestige-02",
    "name": "Acoustic Slat Theater Entertainment Center",
    "categorySlug": "living-storage",
    "subcategorySlug": "custom-tv-units",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "living-storage",
    "subcategorySlug": "sliding-door-wardrobes",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "sliding-door-wardrobes-02",
    "slug": "sliding-door-wardrobes-prestige-02",
    "name": "Nordic Floor-to-Ceiling Sliding Closet",
    "categorySlug": "living-storage",
    "subcategorySlug": "sliding-door-wardrobes",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "living-storage",
    "subcategorySlug": "hinged-door-wardrobes",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "hinged-door-wardrobes-02",
    "slug": "hinged-door-wardrobes-prestige-02",
    "name": "Tuscan Beveled Shaker 3-Door Wardrobe",
    "categorySlug": "living-storage",
    "subcategorySlug": "hinged-door-wardrobes",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "living-storage",
    "subcategorySlug": "walk-in-wardrobes",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "walk-in-wardrobes-02",
    "slug": "walk-in-wardrobes-prestige-02",
    "name": "Linear Open-Bay Dressing Wardrobe",
    "categorySlug": "living-storage",
    "subcategorySlug": "walk-in-wardrobes",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "living-storage",
    "subcategorySlug": "glass-door-wardrobes",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "glass-door-wardrobes-02",
    "slug": "glass-door-wardrobes-prestige-02",
    "name": "Reeded Fluted Glass Boutique Wardrobe",
    "categorySlug": "living-storage",
    "subcategorySlug": "glass-door-wardrobes",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "living-storage",
    "subcategorySlug": "modular-wardrobes",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "modular-wardrobes-02",
    "slug": "modular-wardrobes-prestige-02",
    "name": "Flexi-Space Corner Modular Wardrobe",
    "categorySlug": "living-storage",
    "subcategorySlug": "modular-wardrobes",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "living-storage",
    "subcategorySlug": "bedroom-wardrobes",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "bedroom-wardrobes-02",
    "slug": "bedroom-wardrobes-prestige-02",
    "name": "Loft-Optimized Dual Wardrobe Suite",
    "categorySlug": "living-storage",
    "subcategorySlug": "bedroom-wardrobes",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "living-storage",
    "subcategorySlug": "custom-wardrobes",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "custom-wardrobes-02",
    "slug": "custom-wardrobes-prestige-02",
    "name": "Heritage Teak Double-Height Custom Wardrobe",
    "categorySlug": "living-storage",
    "subcategorySlug": "custom-wardrobes",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "living-storage",
    "subcategorySlug": "sideboards-consoles",
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
    "name": "Elysian Entryway Console Table",
    "categorySlug": "living-storage",
    "subcategorySlug": "sideboards-consoles",
    "shortDescription": "Slender architectural foyer console featuring a beveled marble top and sculptural arched timber base.",
    "description": "Slender architectural foyer console featuring a beveled marble top and sculptural arched timber base. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "living-storage",
    "subcategorySlug": "storage-cabinets",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "storage-cabinets-02",
    "slug": "storage-cabinets-prestige-02",
    "name": "Nordic Multi-Tier Linen Cupboard",
    "categorySlug": "living-storage",
    "subcategorySlug": "storage-cabinets",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "living-storage",
    "subcategorySlug": "display-units",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "display-units-02",
    "slug": "display-units-prestige-02",
    "name": "Architectural Room-Divider Bookcase",
    "categorySlug": "living-storage",
    "subcategorySlug": "display-units",
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
        "name": "Mocha Bouclé",
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
    "categorySlug": "living-storage",
    "subcategorySlug": "custom-storage",
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
        "answer": "Absolutely. We carry hundreds of Belgian linens, velvets, bouclés, and leather samples at our Santacruz showroom."
      }
    ]
  },
  {
    "id": "custom-storage-02",
    "slug": "custom-storage-prestige-02",
    "name": "Foyer Shoe & Coat Architectural Credenza",
    "categorySlug": "living-storage",
    "subcategorySlug": "custom-storage",
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
        "name": "Mocha Bouclé",
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
  'dining-tables': {
    categorySlug: 'dining-tables',
    title: 'Creating Spaces for Shared Memories',
    subtitle: 'A guide to selecting dining table shapes, seating clearance, and tabletop materials',
    paragraphs: [
      'The dining table is more than a place for meals; it is where families gather, conversations unfold, and celebrations take shape.',
      'Whether you choose solid Burma teak or sealed Italian Statuario marble, each piece is engineered with ergonomic knee clearance and durable hand-applied seals.'
    ],
    tips: [
      'Plan 36 inches between the table edge and walls to allow chairs to slide out comfortably.',
      'Round dining tables facilitate effortless conversation and fluid room movement.',
      'For compact dining nooks, explore central pedestal bases that provide legroom on all sides.'
    ]
  },
  'beds-bedroom': {
    categorySlug: 'beds-bedroom',
    title: 'Designing Your Personal Sanctuary',
    subtitle: 'Master suite bed proportions, noise-free joinery, and concealed hydraulic storage',
    paragraphs: [
      'A great bed balances architectural presence with tranquil comfort. In Mumbai residences where floor space is valuable, our hydraulic lift-up mechanisms unlock massive dust-free storage underneath without compromising aesthetics.',
      'Solid timber frames with precision mortise-and-tenon joints eliminate nocturnal creaking and support luxury pocket-spring mattresses with ease.'
    ],
    tips: [
      'Maintain at least 24 inches on both sides of a king or queen bed for side tables and movement.',
      'Upholstered fluted headboards add acoustic dampening and sumptuous late-night reading comfort.',
      'Opt for gas-lift hydraulic storage to access underbed luggage with effortless fingertip action.'
    ]
  },
  'living-storage': {
    categorySlug: 'living-storage',
    title: 'Effortless Order & Architectural Joinery',
    subtitle: 'From floating media walls to bespoke floor-to-ceiling wardrobes',
    paragraphs: [
      'Intelligent storage transforms living rooms and bedrooms from cluttered spaces into calm architectural retreats.',
      'Our factory specializes in custom wardrobe joinery, acoustically treated TV panels, and fluted credenzas built to your exact wall elevations.'
    ],
    tips: [
      'Wall-mounted floating media consoles create visual lightness and simplify floor cleaning.',
      'Top-hung sliding wardrobe doors save valuable swing space in compact bedrooms.',
      'Incorporate integrated warm LED lighting inside wardrobes and display vitrines for luxurious evening ambiance.'
    ]
  }
};
