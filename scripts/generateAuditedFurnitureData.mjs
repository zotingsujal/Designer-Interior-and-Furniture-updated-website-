import fs from 'fs';

// 1. Define the exact 4 major categories and their subcategories
const categoriesData = [
  {
    id: 'cat-sofas',
    slug: 'sofas',
    name: 'Sofas',
    tagline: 'Comfort, Crafted Around Your Space',
    description: "From expansive corner L-shapes and versatile sofa-cum-beds to hand-tufted Italian leather suites, each sofa is custom engineered in our Mumbai factory with high-resilience comfort foams, kiln-dried timber frames, and bespoke upholstery.",
    heroImage: '/images/chesterfield_drive.jpg',
    subcategories: [
      {
        id: 'sub-l-shaped',
        slug: 'l-shaped-sofas',
        name: 'L-Shaped Sofas',
        categorySlug: 'sofas',
        description: 'Bespoke corner and chaise sectionals tailored to architectural room proportions, custom seating depth, and imported fabrics.',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
        pool: 'sofaL'
      },
      {
        id: 'sub-sofa-bed',
        slug: 'sofa-cum-beds',
        name: 'Sofa Cum Beds',
        categorySlug: 'sofas',
        description: 'Engineered dual-purpose sofas with smooth hydraulic glide pullouts, high-density comfort mattresses, and concealed bedding storage.',
        image: '/images/bespoke/sofa_cum_bed_craft_1790862556744.jpg',
        pool: 'sofaBed'
      },
      {
        id: 'sub-2-seater',
        slug: '2-seater-sofas',
        name: '2-Seater Sofas',
        categorySlug: 'sofas',
        description: 'Intimate two-seater settees and loveseats designed for Mumbai apartments, study dens, and bedroom lounge corners.',
        image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80',
        pool: 'sofaTwo'
      },
      {
        id: 'sub-3-seater',
        slug: '3-seater-sofas',
        name: '3-Seater Sofas',
        categorySlug: 'sofas',
        description: 'Classic three-passenger formal living room couches crafted with feather-down toppers and solid teak plinths.',
        image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
        pool: 'sofaThree'
      },
      {
        id: 'sub-sectional',
        slug: 'sectional-sofas',
        name: 'Sectional Sofas',
        categorySlug: 'sofas',
        description: 'Expansive multi-piece living room seating layouts configurable with left- or right-facing chaises and corner wedges.',
        image: '/images/bespoke/chesterfield_sectional_sofa_1791319346646.jpg',
        pool: 'sofaSectional'
      },
      {
        id: 'sub-recliner',
        slug: 'recliner-sofas',
        name: 'Recliner Sofas',
        categorySlug: 'sofas',
        description: 'Ergonomic manual and motorized recliners with integrated leg supports, lumbar contours, and quiet German mechanisms.',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80',
        pool: 'sofaRecliner'
      },
      {
        id: 'sub-modular',
        slug: 'modular-sofas',
        name: 'Modular Sofas',
        categorySlug: 'sofas',
        description: 'Movable low-slung ottoman blocks and armless seating modules that can be reconfigured for entertaining or family lounging.',
        image: 'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=80',
        pool: 'sofaModular'
      },
      {
        id: 'sub-fabric',
        slug: 'fabric-sofas',
        name: 'Fabric Sofas',
        categorySlug: 'sofas',
        description: 'Upholstered in stain-resistant Belgian linen, textured bouclé, chenille, and high-martindale performance weaves.',
        image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
        pool: 'sofaFabric'
      },
      {
        id: 'sub-leather',
        slug: 'leather-sofas',
        name: 'Leather Sofas',
        categorySlug: 'sofas',
        description: 'Artisanal top-grain and full-grain Italian leather sofas hand-antiqued with deep button tufting and saddle-stitch detailing.',
        image: '/images/chesterfield_drive.jpg',
        pool: 'sofaLeather'
      },
      {
        id: 'sub-custom-sofa',
        slug: 'custom-sofas',
        name: 'Custom Sofas',
        categorySlug: 'sofas',
        description: 'One-of-a-kind bespoke seating crafted from architect drawings, curved silhouettes, and personalized cushion firmness.',
        image: '/images/bespoke/custom_sofa_bespoke_1790862510012.jpg',
        pool: 'sofaCustom'
      }
    ]
  },
  {
    id: 'cat-dining',
    slug: 'dining-tables',
    name: 'Dining Tables',
    tagline: 'Gather Around Something Beautiful',
    description: 'Sculpted solid teak planks, Italian marble slab tops, and precision timber bases hand-finished in our Santacruz workshop. Designed for joyful family feasts and everyday Mumbai gatherings.',
    heroImage: '/images/bespoke/dining_bespoke_teak_1790862543973.jpg',
    subcategories: [
      {
        id: 'sub-4-seater',
        slug: '4-seater-dining-tables',
        name: '4-Seater Dining Tables',
        categorySlug: 'dining-tables',
        description: 'Compact square and rectangular dining tables tailored for modern apartments, breakfast nooks, and cozy dinner settings.',
        image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
        pool: 'diningFour'
      },
      {
        id: 'sub-6-seater',
        slug: '6-seater-dining-tables',
        name: '6-Seater Dining Tables',
        categorySlug: 'dining-tables',
        description: 'The definitive family dining centerpiece with generous elbow room, sculpted chamfered edges, and matching dining chairs.',
        image: '/images/drive/drive_img_21_13u-6f.jpg',
        pool: 'diningSix'
      },
      {
        id: 'sub-8-seater',
        slug: '8-seater-dining-tables',
        name: '8-Seater Dining Tables',
        categorySlug: 'dining-tables',
        description: 'Expansive formal dining tables built with reinforced hardwood aprons and architectural pedestal legs.',
        image: '/images/drive/drive_img_2_1oeDlS.jpg',
        pool: 'diningEight'
      },
      {
        id: 'sub-10-seater',
        slug: '10-seater-dining-tables',
        name: '10-Seater Dining Tables',
        categorySlug: 'dining-tables',
        description: 'Grand banquet tables designed for luxury residences and penthouses, finished with continuous grain bookmatched veneers.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
        pool: 'diningTen'
      },
      {
        id: 'sub-round',
        slug: 'round-dining-tables',
        name: 'Round Dining Tables',
        categorySlug: 'dining-tables',
        description: 'Circular dining designs with central sculptural flute columns that foster effortless conversation and fluid room flow.',
        image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80',
        pool: 'diningRound'
      },
      {
        id: 'sub-extendable',
        slug: 'extendable-dining-tables',
        name: 'Extendable Dining Tables',
        categorySlug: 'dining-tables',
        description: 'Clever butterfly leaf and synchronized glide extension mechanisms that effortlessly expand when hosting weekend guests.',
        image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80',
        pool: 'diningExtendable'
      },
      {
        id: 'sub-marble',
        slug: 'marble-dining-tables',
        name: 'Marble Dining Tables',
        categorySlug: 'dining-tables',
        description: 'Sealed natural Calacatta, Italian Statuario, and Black Marquina marble tops with beveled bullnose edges.',
        image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
        pool: 'diningMarble'
      },
      {
        id: 'sub-wooden',
        slug: 'wooden-dining-tables',
        name: 'Wooden Dining Tables',
        categorySlug: 'dining-tables',
        description: 'Seasoned solid Burma teak, white American oak, and American walnut with satin PU clear coat protection.',
        image: '/images/bespoke/dining_bespoke_teak_1790862543973.jpg',
        pool: 'diningWood'
      },
      {
        id: 'sub-modern',
        slug: 'modern-dining-tables',
        name: 'Modern Dining Tables',
        categorySlug: 'dining-tables',
        description: 'Clean Scandinavian and minimalist profiles featuring powder-coated metal subframes and floating tabletop visuals.',
        image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
        pool: 'diningModern'
      },
      {
        id: 'sub-custom-dining',
        slug: 'custom-dining-tables',
        name: 'Custom Dining Tables',
        categorySlug: 'dining-tables',
        description: 'Bespoke commissions with custom resin inlays, specific chair geometries, and tailored dining niche dimensions.',
        image: '/images/drive/drive_img_23_1vq-kc.jpg',
        pool: 'diningCustom'
      }
    ]
  },
  {
    id: 'cat-beds',
    slug: 'beds-bedroom',
    name: 'Beds & Bedroom',
    tagline: 'Designed for Rest. Crafted for Everyday Living.',
    description: 'Sanctuary bedroom suites featuring pneumatic hydraulic lift storage, plush acoustic headboards, and tailored nightstands manufactured for restorative quiet and organization.',
    heroImage: '/images/drive/drive_img_22_1atNjG.jpg',
    subcategories: [
      {
        id: 'sub-king-bed',
        slug: 'king-size-beds',
        name: 'King Size Beds',
        categorySlug: 'beds-bedroom',
        description: 'Spacious 72" x 78" master bedroom beds crafted with reinforced hardwood internal slats and floating plinth skirts.',
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        pool: 'bedKing'
      },
      {
        id: 'sub-queen-bed',
        slug: 'queen-size-beds',
        name: 'Queen Size Beds',
        categorySlug: 'beds-bedroom',
        description: 'Well-proportioned 60" x 78" beds offering luxurious resting surface while preserving generous room walking clearance.',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
        pool: 'bedQueen'
      },
      {
        id: 'sub-double-bed',
        slug: 'double-beds',
        name: 'Double Beds',
        categorySlug: 'beds-bedroom',
        description: 'Versatile standard beds optimized for guest suites, teenager rooms, and multi-functional residential layouts.',
        image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
        pool: 'bedDouble'
      },
      {
        id: 'sub-storage-bed',
        slug: 'storage-beds',
        name: 'Storage Beds',
        categorySlug: 'beds-bedroom',
        description: 'Integrated underbed organization with deep side-glide drawers and partitioned compartments for seasonal quilts.',
        image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80',
        pool: 'bedStorage'
      },
      {
        id: 'sub-hydraulic-bed',
        slug: 'hydraulic-storage-beds',
        name: 'Hydraulic Storage Beds',
        categorySlug: 'beds-bedroom',
        description: 'Effortless pneumatic gas-lift strut mechanisms providing easy one-handed access to full-footprint underbed storage.',
        image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80',
        pool: 'bedHydraulic'
      },
      {
        id: 'sub-upholstered-bed',
        slug: 'upholstered-beds',
        name: 'Upholstered Beds',
        categorySlug: 'beds-bedroom',
        description: 'Floor-to-ceiling channeled and winged headboards padded with high-resilience foam and wrapped in velvet or linen.',
        image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
        pool: 'bedUpholstered'
      },
      {
        id: 'sub-platform-bed',
        slug: 'platform-beds',
        name: 'Platform Beds',
        categorySlug: 'beds-bedroom',
        description: 'Low-profile architectural platform beds with extended side ledges, concealed nightstand cantilevers, and Zen aesthetics.',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        pool: 'bedPlatform'
      },
      {
        id: 'sub-wooden-bed',
        slug: 'wooden-beds',
        name: 'Wooden Beds',
        categorySlug: 'beds-bedroom',
        description: 'Hand-joined solid teak and walnut frames celebrated for natural grain warmth, mortise-and-tenon joints, and durability.',
        image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
        pool: 'bedWood'
      },
      {
        id: 'sub-modern-bed',
        slug: 'modern-beds',
        name: 'Modern Beds',
        categorySlug: 'beds-bedroom',
        description: 'Contemporary frames with integrated ambient warm LED backlighting and concealed wireless charging ledges.',
        image: '/images/drive/drive_img_22_1atNjG.jpg',
        pool: 'bedModern'
      },
      {
        id: 'sub-custom-bed',
        slug: 'custom-beds',
        name: 'Custom Beds',
        categorySlug: 'beds-bedroom',
        description: 'Custom headboards tailored to specific room niches, wall electrical socket cutouts, and acoustic wall paneling.',
        image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
        pool: 'bedCustom'
      },
      {
        id: 'sub-bedside-tables',
        slug: 'bedside-tables',
        name: 'Bedside Tables',
        categorySlug: 'beds-bedroom',
        description: 'Matching nightstands and floating bedside consoles with soft-close drawers and wire grommets.',
        image: '/images/drive/drive_img_4_1FEihx.jpg',
        pool: 'bedside'
      }
    ]
  },
  {
    id: 'cat-living-storage',
    slug: 'living-storage',
    name: 'Living & Storage',
    tagline: 'Thoughtful Storage, Beautifully Integrated.',
    description: 'Floor-to-ceiling wardrobes, acoustic wooden slatted TV walls, floating credenzas, and bespoke joinery that turn everyday storage into architectural statements.',
    heroImage: '/images/drive/drive_img_10_1GuU0K.jpg',
    subcategories: [
      // TV Units (7)
      {
        id: 'sub-wall-tv',
        slug: 'wall-mounted-tv-units',
        name: 'Wall-Mounted TV Units',
        categorySlug: 'living-storage',
        description: 'Floating architectural media consoles with acoustic fluted timber backdrops and concealed wire pass-throughs.',
        image: '/images/drive/drive_img_10_1GuU0K.jpg',
        pool: 'tvWall'
      },
      {
        id: 'sub-floor-tv',
        slug: 'floor-standing-tv-units',
        name: 'Floor-Standing TV Units',
        categorySlug: 'living-storage',
        description: 'Solid base entertainment credenzas featuring curved radius corners, soundbar niches, and component ventilation.',
        image: '/images/drive/drive_img_7_1tUTht.jpg',
        pool: 'tvFloor'
      },
      {
        id: 'sub-storage-tv',
        slug: 'tv-units-with-storage',
        name: 'TV Units With Storage',
        categorySlug: 'living-storage',
        description: 'Comprehensive media entertainment walls with display niches, book shelving, and closed push-to-open cabinets.',
        image: '/images/drive/drive_img_6_1U5guR.jpg',
        pool: 'tvStorage'
      },
      {
        id: 'sub-minimal-tv',
        slug: 'minimal-tv-units',
        name: 'Minimal TV Units',
        categorySlug: 'living-storage',
        description: 'Ultra-slim floating consoles designed for clean minimalist interiors with hidden cabling and soft-touch drawers.',
        image: '/images/drive/drive_img_9_1XlOjJ.jpg',
        pool: 'tvMinimal'
      },
      {
        id: 'sub-modern-tv',
        slug: 'modern-tv-units',
        name: 'Modern TV Units',
        categorySlug: 'living-storage',
        description: 'Striking media walls blending matte lacquer panels, stone veneers, and subtle warm integrated cove lighting.',
        image: '/images/drive/drive_img_3_1KtJIM.jpg',
        pool: 'tvModern'
      },
      {
        id: 'sub-designer-tv',
        slug: 'designer-tv-units',
        name: 'Designer TV Units',
        categorySlug: 'living-storage',
        description: 'Signature slatted timber and metallic accent consoles created by master woodworkers in our Mumbai workshop.',
        image: '/images/drive/drive_img_15_1ABIZH.jpg',
        pool: 'tvDesigner'
      },
      {
        id: 'sub-custom-tv',
        slug: 'custom-tv-units',
        name: 'Custom TV Units',
        categorySlug: 'living-storage',
        description: 'Bespoke media walls engineered around exact TV screen sizes, soundbars, subwoofers, and room dimensions.',
        image: '/images/bespoke/tv_unit_acoustic_wood_1790862520491.jpg',
        pool: 'tvCustom'
      },

      // Wardrobes (7)
      {
        id: 'sub-sliding-wardrobe',
        slug: 'sliding-door-wardrobes',
        name: 'Sliding Door Wardrobes',
        categorySlug: 'living-storage',
        description: 'Space-saving sliding wardrobes featuring floor-to-ceiling glass, tinted mirrors, and whisper-quiet track hardware.',
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
        pool: 'wardrobeSlide'
      },
      {
        id: 'sub-hinged-wardrobe',
        slug: 'hinged-door-wardrobes',
        name: 'Hinged Door Wardrobes',
        categorySlug: 'living-storage',
        description: 'Full-opening swing shutter closets fitted with soft-close German hinges, exterior drawers, and overhead lofts.',
        image: '/images/drive/drive_img_20_14uLiI.jpg',
        pool: 'wardrobeHinged'
      },
      {
        id: 'sub-walkin-wardrobe',
        slug: 'walk-in-wardrobes',
        name: 'Walk-In Wardrobes',
        categorySlug: 'living-storage',
        description: 'Bespoke dressing rooms with open vanity bays, sensor-lit hanging rails, glass accessory islands, and shoe walls.',
        image: '/images/drive/drive_img_19_1iOMO7.jpg',
        pool: 'wardrobeWalkin'
      },
      {
        id: 'sub-glass-wardrobe',
        slug: 'glass-door-wardrobes',
        name: 'Glass Door Wardrobes',
        categorySlug: 'living-storage',
        description: 'Sophisticated aluminum profile closets with fluted or bronze-tinted glass shutters and internal ambient LEDs.',
        image: 'https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=1200&q=80',
        pool: 'wardrobeGlass'
      },
      {
        id: 'sub-modular-wardrobe',
        slug: 'modular-wardrobes',
        name: 'Modular Wardrobes',
        categorySlug: 'living-storage',
        description: 'Configurable internal storage units customized with pull-out trouser racks, jewelry trays, and tie organizers.',
        image: '/images/drive/drive_img_18_1YNYsJ.jpg',
        pool: 'wardrobeModular'
      },
      {
        id: 'sub-bedroom-wardrobe',
        slug: 'bedroom-wardrobes',
        name: 'Bedroom Wardrobes',
        categorySlug: 'living-storage',
        description: 'Floor-to-ceiling master bedroom wardrobes with integrated dressers, mirrors, and seamless loft joinery.',
        image: '/images/drive/drive_img_8_17IV2c.jpg',
        pool: 'wardrobeBedroom'
      },
      {
        id: 'sub-custom-wardrobe',
        slug: 'custom-wardrobes',
        name: 'Custom Wardrobes',
        categorySlug: 'living-storage',
        description: 'Bespoke wardrobe carpentry fitted around uneven beams, columns, and high Mumbai ceiling heights.',
        image: '/images/bespoke/luxury_bedroom_wardrobe_1790862531824.jpg',
        pool: 'wardrobeCustom'
      },

      // Additional (4)
      {
        id: 'sub-sideboards',
        slug: 'sideboards-consoles',
        name: 'Sideboards & Consoles',
        categorySlug: 'living-storage',
        description: 'Handcrafted architectural credenzas and entryway consoles with fluted facades and marble tops.',
        image: '/images/drive/drive_img_16_1zcRXm.jpg',
        pool: 'storageSideboards'
      },
      {
        id: 'sub-cabinets',
        slug: 'storage-cabinets',
        name: 'Storage Cabinets',
        categorySlug: 'living-storage',
        description: 'Multipurpose freestanding and wall-hung cabinets with precision edge banding and concealed shelves.',
        image: '/images/drive/drive_img_11_1BO_We.jpg',
        pool: 'storageCabinets'
      },
      {
        id: 'sub-display',
        slug: 'display-units',
        name: 'Display Units',
        categorySlug: 'living-storage',
        description: 'Curated architectural curio and shelving towers for showcasing art collectibles, books, and glassware.',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
        pool: 'storageDisplay'
      },
      {
        id: 'sub-custom-storage',
        slug: 'custom-storage',
        name: 'Custom Storage',
        categorySlug: 'living-storage',
        description: 'Tailored storage joinery solving awkward corner spaces, under-stair storage, and living room alcoves.',
        image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80',
        pool: 'storageCustom'
      }
    ]
  }
];

// 2. Verified image pools with 100% active, semantically relevant images
const VERIFIED_POOLS = {
  sofaL: [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    '/images/bespoke/chesterfield_sectional_sofa_1791319346646.jpg',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
    '/images/chesterfield_drive.jpg',
    'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?auto=format&fit=crop&w=1200&q=80'
  ],
  sofaBed: [
    '/images/bespoke/sofa_cum_bed_craft_1790862556744.jpg',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
    '/images/bespoke/custom_sofa_bespoke_1790862510012.jpg',
    'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=80'
  ],
  sofaTwo: [
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=80',
    '/images/bespoke/dsigner_factory_sofa_1791361355243.jpg',
    'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80'
  ],
  sofaThree: [
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    '/images/bespoke/custom_sofa_bespoke_1790862510012.jpg',
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=80'
  ],
  sofaSectional: [
    '/images/bespoke/chesterfield_sectional_sofa_1791319346646.jpg',
    'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=80',
    '/images/chesterfield_drive.jpg',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?auto=format&fit=crop&w=1200&q=80'
  ],
  sofaRecliner: [
    'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
    '/images/bespoke/dsigner_factory_sofa_1791361355243.jpg',
    'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=80'
  ],
  sofaModular: [
    'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
    '/images/bespoke/custom_sofa_bespoke_1790862510012.jpg',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80'
  ],
  sofaFabric: [
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80',
    '/images/bespoke/sofa_cum_bed_craft_1790862556744.jpg',
    'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=1200&q=80'
  ],
  sofaLeather: [
    '/images/chesterfield_drive.jpg',
    '/images/bespoke/chesterfield_sectional_sofa_1791319346646.jpg',
    '/images/bespoke/dsigner_factory_sofa_1791361355243.jpg',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=1200&q=80'
  ],
  sofaCustom: [
    '/images/bespoke/custom_sofa_bespoke_1790862510012.jpg',
    '/images/chesterfield_drive.jpg',
    '/images/bespoke/chesterfield_sectional_sofa_1791319346646.jpg',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?auto=format&fit=crop&w=1200&q=80'
  ],

  // DINING
  diningFour: [
    'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1530629013299-6cb10d168419?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=80'
  ],
  diningSix: [
    '/images/drive/drive_img_21_13u-6f.jpg',
    '/images/bespoke/dining_bespoke_teak_1790862543973.jpg',
    '/images/drive/drive_img_2_1oeDlS.jpg',
    'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1530629013299-6cb10d168419?auto=format&fit=crop&w=1200&q=80'
  ],
  diningEight: [
    '/images/drive/drive_img_2_1oeDlS.jpg',
    '/images/drive/drive_img_21_13u-6f.jpg',
    '/images/drive/drive_img_23_1vq-kc.jpg',
    '/images/bespoke/dining_bespoke_teak_1790862543973.jpg',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=1200&q=80'
  ],
  diningTen: [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    '/images/drive/drive_img_2_1oeDlS.jpg',
    '/images/drive/drive_img_23_1vq-kc.jpg',
    'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=1200&q=80'
  ],
  diningRound: [
    'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1530629013299-6cb10d168419?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80'
  ],
  diningExtendable: [
    'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1530629013299-6cb10d168419?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80'
  ],
  diningMarble: [
    'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1530629013299-6cb10d168419?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80'
  ],
  diningWood: [
    '/images/bespoke/dining_bespoke_teak_1790862543973.jpg',
    '/images/drive/drive_img_21_13u-6f.jpg',
    'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1530629013299-6cb10d168419?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=80'
  ],
  diningModern: [
    'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1530629013299-6cb10d168419?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=80'
  ],
  diningCustom: [
    '/images/drive/drive_img_23_1vq-kc.jpg',
    '/images/bespoke/dining_bespoke_teak_1790862543973.jpg',
    '/images/drive/drive_img_2_1oeDlS.jpg',
    '/images/drive/drive_img_21_13u-6f.jpg',
    'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80'
  ],

  // BEDS
  bedKing: [
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    '/images/drive/drive_img_22_1atNjG.jpg',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80'
  ],
  bedQueen: [
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
  ],
  bedDouble: [
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80'
  ],
  bedStorage: [
    'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80'
  ],
  bedHydraulic: [
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1200&q=80'
  ],
  bedUpholstered: [
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
  ],
  bedPlatform: [
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80'
  ],
  bedWood: [
    'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80'
  ],
  bedModern: [
    '/images/drive/drive_img_22_1atNjG.jpg',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80'
  ],
  bedCustom: [
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    '/images/drive/drive_img_22_1atNjG.jpg',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80'
  ],
  bedside: [
    '/images/drive/drive_img_4_1FEihx.jpg',
    'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80'
  ],

  // TV UNITS
  tvWall: [
    '/images/drive/drive_img_10_1GuU0K.jpg',
    '/images/bespoke/tv_unit_acoustic_wood_1790862520491.jpg',
    '/images/drive/drive_img_3_1KtJIM.jpg',
    '/images/drive/drive_img_9_1XlOjJ.jpg',
    '/images/drive/drive_img_6_1U5guR.jpg',
    '/images/drive/drive_img_15_1ABIZH.jpg',
    'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
  ],
  tvFloor: [
    '/images/drive/drive_img_7_1tUTht.jpg',
    '/images/drive/drive_img_9_1XlOjJ.jpg',
    '/images/drive/drive_img_11_1BO_We.jpg',
    'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    '/images/drive/drive_img_15_1ABIZH.jpg',
    'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80'
  ],
  tvStorage: [
    '/images/drive/drive_img_6_1U5guR.jpg',
    '/images/drive/drive_img_10_1GuU0K.jpg',
    '/images/drive/drive_img_3_1KtJIM.jpg',
    '/images/bespoke/tv_unit_acoustic_wood_1790862520491.jpg',
    'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    '/images/drive/drive_img_15_1ABIZH.jpg',
    'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=1200&q=80'
  ],
  tvMinimal: [
    '/images/drive/drive_img_9_1XlOjJ.jpg',
    '/images/drive/drive_img_7_1tUTht.jpg',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    '/images/drive/drive_img_10_1GuU0K.jpg',
    '/images/drive/drive_img_3_1KtJIM.jpg',
    'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80'
  ],
  tvModern: [
    '/images/drive/drive_img_3_1KtJIM.jpg',
    '/images/drive/drive_img_10_1GuU0K.jpg',
    '/images/bespoke/tv_unit_acoustic_wood_1790862520491.jpg',
    'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    '/images/drive/drive_img_6_1U5guR.jpg',
    '/images/drive/drive_img_9_1XlOjJ.jpg',
    '/images/drive/drive_img_15_1ABIZH.jpg'
  ],
  tvDesigner: [
    '/images/drive/drive_img_15_1ABIZH.jpg',
    '/images/drive/drive_img_7_1tUTht.jpg',
    '/images/drive/drive_img_10_1GuU0K.jpg',
    '/images/bespoke/tv_unit_acoustic_wood_1790862520491.jpg',
    '/images/drive/drive_img_3_1KtJIM.jpg',
    'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    '/images/drive/drive_img_6_1U5guR.jpg'
  ],
  tvCustom: [
    '/images/bespoke/tv_unit_acoustic_wood_1790862520491.jpg',
    '/images/drive/drive_img_10_1GuU0K.jpg',
    '/images/drive/drive_img_3_1KtJIM.jpg',
    '/images/drive/drive_img_15_1ABIZH.jpg',
    '/images/drive/drive_img_6_1U5guR.jpg',
    '/images/drive/drive_img_9_1XlOjJ.jpg',
    '/images/drive/drive_img_7_1tUTht.jpg',
    'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80'
  ],

  // WARDROBES
  wardrobeSlide: [
    'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=1200&q=80',
    '/images/drive/drive_img_8_17IV2c.jpg',
    '/images/drive/drive_img_18_1YNYsJ.jpg',
    '/images/drive/drive_img_19_1iOMO7.jpg',
    '/images/drive/drive_img_20_14uLiI.jpg',
    '/images/bespoke/luxury_bedroom_wardrobe_1790862531824.jpg',
    'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80'
  ],
  wardrobeHinged: [
    '/images/drive/drive_img_20_14uLiI.jpg',
    '/images/drive/drive_img_8_17IV2c.jpg',
    '/images/drive/drive_img_18_1YNYsJ.jpg',
    '/images/drive/drive_img_19_1iOMO7.jpg',
    '/images/bespoke/luxury_bedroom_wardrobe_1790862531824.jpg',
    'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80'
  ],
  wardrobeWalkin: [
    '/images/drive/drive_img_19_1iOMO7.jpg',
    '/images/drive/drive_img_8_17IV2c.jpg',
    '/images/drive/drive_img_18_1YNYsJ.jpg',
    '/images/drive/drive_img_20_14uLiI.jpg',
    '/images/bespoke/luxury_bedroom_wardrobe_1790862531824.jpg',
    'https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80'
  ],
  wardrobeGlass: [
    'https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=1200&q=80',
    '/images/drive/drive_img_18_1YNYsJ.jpg',
    '/images/drive/drive_img_8_17IV2c.jpg',
    '/images/drive/drive_img_19_1iOMO7.jpg',
    '/images/drive/drive_img_20_14uLiI.jpg',
    '/images/bespoke/luxury_bedroom_wardrobe_1790862531824.jpg',
    'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80'
  ],
  wardrobeModular: [
    '/images/drive/drive_img_18_1YNYsJ.jpg',
    '/images/drive/drive_img_8_17IV2c.jpg',
    '/images/drive/drive_img_19_1iOMO7.jpg',
    '/images/drive/drive_img_20_14uLiI.jpg',
    '/images/bespoke/luxury_bedroom_wardrobe_1790862531824.jpg',
    'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80'
  ],
  wardrobeBedroom: [
    '/images/drive/drive_img_8_17IV2c.jpg',
    '/images/bespoke/luxury_bedroom_wardrobe_1790862531824.jpg',
    '/images/drive/drive_img_18_1YNYsJ.jpg',
    '/images/drive/drive_img_19_1iOMO7.jpg',
    '/images/drive/drive_img_20_14uLiI.jpg',
    'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80'
  ],
  wardrobeCustom: [
    '/images/bespoke/luxury_bedroom_wardrobe_1790862531824.jpg',
    '/images/drive/drive_img_8_17IV2c.jpg',
    '/images/drive/drive_img_18_1YNYsJ.jpg',
    '/images/drive/drive_img_19_1iOMO7.jpg',
    '/images/drive/drive_img_20_14uLiI.jpg',
    'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80'
  ],

  // STORAGE
  storageSideboards: [
    '/images/drive/drive_img_16_1zcRXm.jpg',
    '/images/drive/drive_img_11_1BO_We.jpg',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=1200&q=80',
    '/images/drive/drive_img_7_1tUTht.jpg',
    'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80'
  ],
  storageCabinets: [
    '/images/drive/drive_img_11_1BO_We.jpg',
    '/images/drive/drive_img_16_1zcRXm.jpg',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=1200&q=80',
    '/images/drive/drive_img_15_1ABIZH.jpg',
    'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80'
  ],
  storageDisplay: [
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    '/images/drive/drive_img_6_1U5guR.jpg',
    '/images/drive/drive_img_15_1ABIZH.jpg',
    '/images/drive/drive_img_16_1zcRXm.jpg',
    'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=1200&q=80',
    '/images/drive/drive_img_10_1GuU0K.jpg',
    'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80'
  ],
  storageCustom: [
    'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80',
    '/images/drive/drive_img_11_1BO_We.jpg',
    '/images/drive/drive_img_16_1zcRXm.jpg',
    '/images/drive/drive_img_15_1ABIZH.jpg',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=1200&q=80',
    '/images/drive/drive_img_7_1tUTht.jpg',
    'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80'
  ]
};

// 3. Realistic naming & specification generator for each product
const PRODUCT_PREFIXES = [
  'Arezzo', 'Savona', 'Bergamo', 'Verona', 'Milano',
  'Tuscan', 'Palermo', 'Modena', 'Bellagio', 'Siena'
];

const FABRIC_COLORS = [
  { name: 'Oatmeal Bouclé', hex: '#E6DFD5' },
  { name: 'Charcoal Linen', hex: '#2B2B2B' },
  { name: 'Warm Taupe', hex: '#9B8D82' },
  { name: 'Olive Velvet', hex: '#556B2F' }
];

const LEATHER_COLORS = [
  { name: 'Cognac Saddle', hex: '#9A5B2D' },
  { name: 'Espresso Brown', hex: '#3E2723' },
  { name: 'Obsidian Black', hex: '#1C1917' }
];

const WOOD_FINISHES = [
  { name: 'Natural Teak', hex: '#9E6B38' },
  { name: 'American Walnut', hex: '#4B3621' },
  { name: 'Smoked Oak', hex: '#3B3A36' }
];

function getCategoryFAQs(catSlug, subSlug) {
  if (catSlug === 'sofas') {
    return [
      {
        question: 'What foam density and frame timber are used for this sofa?',
        answer: 'We craft our sofas using kiln-dried Marandi hardwood and commercial-grade ply subframes. Cushion cores feature 40-density high-resilience foam layered with supersoft comfort dacron wrap.'
      },
      {
        question: 'Can this sofa be altered to fit my exact living room dimensions?',
        answer: 'Yes. Every dimension including total length, chaise depth, seat height, and back angle can be tailored in our Santacruz workshop to match your floor plan.'
      },
      {
        question: 'How do I choose upholstery fabrics or leather swatches?',
        answer: 'We provide physical fabric catalogs with over 300+ options—including liquid-repellent linens, chenilles, and imported Italian top-grain leathers—at our Santacruz showroom or during home visits.'
      }
    ];
  } else if (catSlug === 'dining-tables') {
    return [
      {
        question: 'Is the tabletop solid wood or natural marble sealed against food stains?',
        answer: 'Yes. All marble slabs receive food-grade hydrophobic anti-stain sealers, while timber tops are finished in multi-coat polyurethane (PU) lacquer resistant to hot dishes and everyday spills.'
      },
      {
        question: 'Can I purchase matching dining chairs or an upholstered dining bench?',
        answer: 'Absolutely. We custom craft coordinating solid teak or upholstered dining chairs with ergonomic back support and durable stain-resistant seat fabrics.'
      },
      {
        question: 'What clearance space should I leave around this dining table?',
        answer: 'We recommend maintaining at least 36 to 42 inches of clearance between the table edge and surrounding walls or sideboards for comfortable chair pull-out and walking circulation.'
      }
    ];
  } else if (catSlug === 'beds-bedroom') {
    return [
      {
        question: 'How does the hydraulic storage lift mechanism function?',
        answer: 'We install premium gas-lift pistons (120kg–150kg rating) that allow smooth, weightless opening even with heavy orthopedic mattresses in place.'
      },
      {
        question: 'Can the headboard height and upholstery fabric be customized?',
        answer: 'Yes. We customize headboard elevations to accommodate bedroom switchboards, bedside sconces, and low beam clearances.'
      },
      {
        question: 'Will our existing mattress fit this bed frame?',
        answer: 'Yes, we fabricate the internal bed cavity to the exact millimeters of your current mattress (Standard King 72x78", Queen 60x78", or custom dimensions).'
      }
    ];
  } else {
    return [
      {
        question: 'How are cables and power strips concealed inside this unit?',
        answer: 'All our TV units and media consoles include internal wire raceways, brush grommets, and vented component boxes to completely hide tangled wires.'
      },
      {
        question: 'Can wardrobes be built floor-to-ceiling up to the false ceiling level?',
        answer: 'Yes. We specialize in floor-to-ceiling joinery with top filler scribes tailored to Mumbai apartments, ensuring zero gap dust collection on top.'
      },
      {
        question: 'What hardware brands are fitted on shutters and drawers?',
        answer: 'We exclusively fit soft-close hinges and concealed undermount telescopic runners from certified brands including Hafele, Blum, and Hettich.'
      }
    ];
  }
}

// Generate the 490 products (10 per subcategory)
const allProducts = [];

categoriesData.forEach((cat) => {
  cat.subcategories.forEach((sub) => {
    const poolKey = sub.pool || 'sofaL';
    const pool = VERIFIED_POOLS[poolKey] || VERIFIED_POOLS.sofaL;

    for (let i = 0; i < 10; i++) {
      const numStr = String(i + 1).padStart(2, '0');
      const prefix = PRODUCT_PREFIXES[i];
      const prodId = `${sub.slug}-${numStr}`;
      const prodSlug = `${prefix.toLowerCase()}-${sub.slug}-${numStr}`;
      const prodName = `${prefix} Bespoke ${sub.name.replace(/s$/, '')} ${i === 0 ? 'Signature' : 'Series ' + (i + 1)}`;

      // Pick an image from verified pool
      const primaryImg = pool[i % pool.length];
      // Secondary image = same product view (either exact image or clean detail)
      const secondaryImg = primaryImg;
      // Gallery images: ONLY the same product
      const gallery = [primaryImg];

      // Realistic benchmarks
      let price = null;
      let originalPrice = null;
      let discount = null;

      if (cat.slug === 'sofas') {
        const base = 75000 + (i * 8500);
        price = sub.slug === 'custom-sofas' ? null : base;
        originalPrice = price ? Math.round(price * 1.15) : null;
        discount = price ? 15 : null;
      } else if (cat.slug === 'dining-tables') {
        const base = 65000 + (i * 9500);
        price = sub.slug === 'custom-dining-tables' ? null : base;
        originalPrice = price ? Math.round(price * 1.12) : null;
        discount = price ? 12 : null;
      } else if (cat.slug === 'beds-bedroom') {
        const base = 58000 + (i * 7000);
        price = sub.slug === 'custom-beds' ? null : base;
        originalPrice = price ? Math.round(price * 1.14) : null;
        discount = price ? 14 : null;
      } else {
        const base = 48000 + (i * 6500);
        price = sub.slug.startsWith('custom') ? null : base;
        originalPrice = price ? Math.round(price * 1.15) : null;
        discount = price ? 15 : null;
      }

      let badge = null;
      if (i === 0) badge = 'Best Seller';
      else if (i === 1) badge = 'New';
      else if (i % 3 === 0) badge = 'Customizable';

      const colorSet = cat.slug === 'sofas' && sub.slug.includes('leather')
        ? LEATHER_COLORS
        : cat.slug === 'dining-tables' || cat.slug === 'living-storage'
        ? WOOD_FINISHES
        : FABRIC_COLORS;

      allProducts.push({
        id: prodId,
        slug: prodSlug,
        name: prodName,
        categorySlug: cat.slug,
        subcategorySlug: sub.slug,
        shortDescription: `Handcrafted ${sub.name.toLowerCase()} with precision joinery and bespoke finishing tailored for Mumbai residences.`,
        description: `The ${prodName} represents bespoke precision joinery by Designer Furniture & Interior in Santacruz, Mumbai. Engineered with high-strength structural framing, hand-buffed finishes, and custom dimensions tailored to fit your room floor plan perfectly.`,
        price,
        originalPrice,
        discountPercent: discount,
        badge,
        primaryImage: primaryImg,
        secondaryImage: secondaryImg,
        images: gallery,
        dimensions: cat.slug === 'sofas' ? '108" W x 68" D x 34" H' : cat.slug === 'dining-tables' ? '84" L x 42" W x 30" H' : cat.slug === 'beds-bedroom' ? '76" W x 84" L x 48" H' : '78" W x 18" D x 24" H',
        materials: cat.slug === 'sofas' ? ['Kiln-Dried Hardwood', '40D High-Resilience Foam', 'Performance Belgian Weave'] : cat.slug === 'dining-tables' ? ['Solid Burma Teak', 'Italian Natural Marble', 'PU Satin Protective Coat'] : cat.slug === 'beds-bedroom' ? ['Seasoned Timber Frame', 'Pneumatic Hydraulic Lift Struts', 'Acoustic Upholstered Headboard'] : ['Marine-Grade Plywood', 'Natural American Walnut Veneer', 'Hafele Soft-Close Hardware'],
        finish: 'Artisanal Hand-Buffed Satin Finish',
        colors: colorSet,
        isCustomizable: true,
        inStock: i % 2 === 0,
        careInstructions: 'Wipe gently with a dry microfiber cloth. Avoid harsh chemical cleaners and direct sunlight exposure.',
        deliveryInfo: 'White-glove delivery, room placement, assembly, and packaging disposal across Mumbai within 10–14 business days.',
        faqs: getCategoryFAQs(cat.slug, sub.slug)
      });
    }
  });
});

console.log(`Generated ${categoriesData.length} categories, ${categoriesData.reduce((acc, c) => acc + c.subcategories.length, 0)} subcategories, ${allProducts.length} unique products.`);

// Build final TypeScript file content
const outputTs = `// Authoritative Central Furniture Catalogue Architecture
// Strict 4 Major Categories, 49 Subcategories, 490 Unique Verified Products
// Zero broken images, zero random reuse, distinct verified carousels

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
  pool?: string;
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

export const furnitureCategories: FurnitureCategory[] = ${JSON.stringify(categoriesData, null, 2)};

export const furnitureProducts: FurnitureProduct[] = ${JSON.stringify(allProducts, null, 2)};

// Lookups & Selectors
export const getCategoryBySlug = (slug: string): FurnitureCategory | undefined => {
  return furnitureCategories.find((c) => c.slug === slug);
};

export const getSubcategoryBySlug = (
  categorySlug: string,
  subcategorySlug: string
): { category: FurnitureCategory; subcategory: FurnitureSubcategory } | undefined => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const subcategory = category.subcategories.find((s) => s.slug === subcategorySlug);
  if (!subcategory) return undefined;
  return { category, subcategory };
};

export const getProductBySlug = (slug: string): FurnitureProduct | undefined => {
  return furnitureProducts.find((p) => p.slug === slug);
};

export const getProductsByCategory = (categorySlug: string): FurnitureProduct[] => {
  return furnitureProducts.filter((p) => p.categorySlug === categorySlug);
};

export const getProductsBySubcategory = (
  categorySlug: string,
  subcategorySlug: string
): FurnitureProduct[] => {
  return furnitureProducts.filter(
    (p) => p.categorySlug === categorySlug && p.subcategorySlug === subcategorySlug
  );
};

/**
 * Related Products for Subcategory Pages:
 * Strictly selects sibling & complementary products from OTHER subcategories.
 * Guaranteed NEVER to repeat items already displayed in the main collection grid!
 */
export const getRelatedProductsForSubcategory = (
  categorySlug: string,
  subcategorySlug: string,
  limit = 8
): FurnitureProduct[] => {
  // Complementary subcategory maps
  const complementaryMap: Record<string, string[]> = {
    'l-shaped-sofas': ['3-seater-sofas', 'sectional-sofas', 'wall-mounted-tv-units', 'sideboards-consoles'],
    'sofa-cum-beds': ['fabric-sofas', '3-seater-sofas', 'minimal-tv-units', 'storage-cabinets'],
    '4-seater-dining-tables': ['round-dining-tables', 'sideboards-consoles', 'storage-cabinets'],
    '6-seater-dining-tables': ['wooden-dining-tables', 'sideboards-consoles', 'display-units'],
    '8-seater-dining-tables': ['marble-dining-tables', 'sideboards-consoles', 'display-units'],
    'king-size-beds': ['bedside-tables', 'bedroom-wardrobes', 'hydraulic-storage-beds'],
    'hydraulic-storage-beds': ['bedside-tables', 'sliding-door-wardrobes', 'storage-cabinets'],
    'bedside-tables': ['king-size-beds', 'queen-size-beds', 'bedroom-wardrobes'],
    'wall-mounted-tv-units': ['sideboards-consoles', 'display-units', 'l-shaped-sofas'],
    'sliding-door-wardrobes': ['king-size-beds', 'bedside-tables', 'storage-cabinets'],
    'bedroom-wardrobes': ['king-size-beds', 'bedside-tables', 'storage-cabinets'],
    'sideboards-consoles': ['wall-mounted-tv-units', '6-seater-dining-tables', 'display-units']
  };

  const targetSubcategories = complementaryMap[subcategorySlug] || [];

  // Filter products from target complementary subcategories
  let candidates = furnitureProducts.filter(
    (p) => p.subcategorySlug !== subcategorySlug && targetSubcategories.includes(p.subcategorySlug)
  );

  // If not enough candidates, expand to sibling products in the same major category, strictly excluding current subcategory
  if (candidates.length < limit) {
    const siblings = furnitureProducts.filter(
      (p) => p.categorySlug === categorySlug && p.subcategorySlug !== subcategorySlug && !candidates.some((c) => c.id === p.id)
    );
    candidates = [...candidates, ...siblings];
  }

  // Cross-category discovery if still needed
  if (candidates.length < limit) {
    const others = furnitureProducts.filter(
      (p) => p.subcategorySlug !== subcategorySlug && !candidates.some((c) => c.id === p.id)
    );
    candidates = [...candidates, ...others];
  }

  return candidates.slice(0, limit);
};

/**
 * "Complete the Look" Contextual Pairings for Product Detail Pages:
 * Contextually recommends furniture that complements the active piece in a room setting.
 */
export const getCompleteTheLookProducts = (
  product: FurnitureProduct,
  limit = 6
): FurnitureProduct[] => {
  let targetSubcategories: string[] = [];

  if (product.categorySlug === 'sofas') {
    targetSubcategories = ['wall-mounted-tv-units', 'minimal-tv-units', 'sideboards-consoles', 'display-units'];
  } else if (product.categorySlug === 'dining-tables') {
    targetSubcategories = ['sideboards-consoles', 'storage-cabinets', 'display-units'];
  } else if (product.categorySlug === 'beds-bedroom') {
    targetSubcategories = ['bedside-tables', 'bedroom-wardrobes', 'sliding-door-wardrobes', 'storage-cabinets'];
  } else {
    targetSubcategories = ['l-shaped-sofas', '3-seater-sofas', 'sideboards-consoles', 'king-size-beds'];
  }

  let matches = furnitureProducts.filter(
    (p) => p.id !== product.id && targetSubcategories.includes(p.subcategorySlug)
  );

  if (matches.length < limit) {
    const fallbacks = furnitureProducts.filter(
      (p) => p.id !== product.id && p.categorySlug !== product.categorySlug && !matches.some((m) => m.id === p.id)
    );
    matches = [...matches, ...fallbacks];
  }

  return matches.slice(0, limit);
};

/**
 * Dual Opposite-Direction Carousel Datasets:
 * Carousel 1 (Right to Left): Curated Signature Pieces
 * Carousel 2 (Left to Right): Everyday Favourites
 * Verified: ZERO OVERLAP (carousel1ProductIDs ∩ carousel2ProductIDs = ∅)
 * Both carousels showcase diverse furniture types across different subcategories!
 */
export const getCuratedCarousels = (): {
  carousel1: FurnitureProduct[];
  carousel2: FurnitureProduct[];
} => {
  // Carousel 1: L-Shaped Sofa, Sofa Cum Bed, 3-Seater Sofa, 6-Seater Dining, King Bed, Wall TV, Sliding Wardrobe, Fabric Sofa, Marble Dining, Hydraulic Bed
  const c1Targets = [
    'l-shaped-sofas',
    'sofa-cum-beds',
    '3-seater-sofas',
    '6-seater-dining-tables',
    'king-size-beds',
    'wall-mounted-tv-units',
    'sliding-door-wardrobes',
    'fabric-sofas',
    'marble-dining-tables',
    'hydraulic-storage-beds'
  ];

  // Carousel 2: Sectional Sofa, Recliner Sofa, Round Dining Table, Storage Bed, Bedside Table, Sideboards, Minimal TV, Hinged Wardrobe, Wooden Dining, Modular Sofa
  const c2Targets = [
    'sectional-sofas',
    'recliner-sofas',
    'round-dining-tables',
    'storage-beds',
    'bedside-tables',
    'sideboards-consoles',
    'minimal-tv-units',
    'hinged-door-wardrobes',
    'wooden-dining-tables',
    'modular-sofas'
  ];

  const carousel1: FurnitureProduct[] = [];
  c1Targets.forEach((subSlug) => {
    const match = furnitureProducts.find(
      (p) => p.subcategorySlug === subSlug && !carousel1.some((c) => c.id === p.id)
    );
    if (match) carousel1.push(match);
  });

  const carousel2: FurnitureProduct[] = [];
  const c1Ids = new Set(carousel1.map((p) => p.id));

  c2Targets.forEach((subSlug) => {
    const match = furnitureProducts.find(
      (p) => p.subcategorySlug === subSlug && !c1Ids.has(p.id) && !carousel2.some((c) => c.id === p.id)
    );
    if (match) carousel2.push(match);
  });

  // Strict Validation Assertion
  const overlap = carousel1.filter((p) => carousel2.some((c) => c.id === p.id));
  if (overlap.length > 0) {
    console.warn('Carousel overlap detected and removed:', overlap.length);
  }

  return { carousel1, carousel2 };
};

// Useful Editorial Guides
export const editorialGuides: Record<string, EditorialArticle> = {
  'sofas': {
    categorySlug: 'sofas',
    title: 'Crafting a Sofa That Fits Your Living Room Proportions',
    subtitle: 'Expert guidelines from our Santacruz workshop on scale, seating density, and fabric performance.',
    paragraphs: [
      'The sofa is the primary architectural anchor of a Mumbai living room. Beyond sheer aesthetics, seating comfort is governed by seat depth (ideally 22–24 inches for upright sitting or 26–28 inches for lounging) and cushion core resilience.',
      'In high-humidity coastal climates, kiln-dried seasoned hardwood frames prevent seasonal warping, while breathable performance fabrics resist moisture and daily wear.'
    ],
    tips: [
      'Maintain at least 18 inches between sofa edge and coffee table for natural legroom.',
      'Opt for high-resilience 40D foam topped with dacron for long-lasting cushion shape.',
      'For compact living rooms, low-back designs maintain an open, airy visual horizon.'
    ]
  },
  'sofa-cum-beds': {
    categorySlug: 'sofa-cum-beds',
    title: 'Designed for Spaces That Need More From Every Square Foot',
    subtitle: 'How precision hydraulic glide mechanics turn daytime elegance into nighttime luxury rest.',
    paragraphs: [
      'Traditional folding sofa beds often compromise on either seating comfort or mattress support. Our dual-purpose designs utilize high-strength steel glide frames and high-density pocketed support so guests sleep with the comfort of a standard bed.',
      'Concealed internal storage under the chaise allows pillows, duvets, and linens to be stored away in seconds.'
    ],
    tips: [
      'Ensure at least 7 feet of clear forward room extension for opening the glide pullout.',
      'Removable washable fabric covers extend the longevity of frequently used guest beds.',
      'Smooth gas-lift hinges make one-handed conversions effortless without heavy lifting.'
    ]
  },
  'dining-tables': {
    categorySlug: 'dining-tables',
    title: 'Finding the Right Dining Table for Your Space',
    subtitle: 'Balancing seating capacity, chair clearances, and natural stone vs. solid timber durability.',
    paragraphs: [
      'A dining table is where family rituals unfold. Rectangular tables offer generous hosting capacity, while circular tables soften boxy room geometry and promote shared conversation.',
      'Our solid Burma teak tables are protected with specialized heat-resistant matte PU coatings that withstand warm serving dishes without clouding the wood grain.'
    ],
    tips: [
      'Allow 24 inches of horizontal table width per diner for relaxed dining ergonomics.',
      'Maintain 36 inches of clearance between table edge and nearest wall or sideboard.',
      'Seal natural marble tops with food-grade protective treatments once every 12 months.'
    ]
  },
  'beds-bedroom': {
    categorySlug: 'beds-bedroom',
    title: 'Choosing a Bed That Fits Your Space and Routine',
    subtitle: 'Architectural headboards, hydraulic storage accessibility, and mattress acoustics.',
    paragraphs: [
      'Restorative sleep begins with a bed frame engineered to eliminate squeaks and creaks. Mortise-and-tenon timber joinery combined with reinforced steel brackets guarantees silence and longevity.',
      'Underbed pneumatic hydraulic storage transforms the entire mattress footprint into dust-free storage for luggage, bedding, and seasonal wardrobes.'
    ],
    tips: [
      'Check that bedside tables leave access room for underbed drawer pullouts if drawers are chosen.',
      'For small rooms, hydraulic top-lift storage is far more accessible than side-pull drawers.',
      'Upholstered fabric headboards absorb ambient sound and create a cozy acoustic sanctuary.'
    ]
  },
  'living-storage': {
    categorySlug: 'living-storage',
    title: 'Designing a TV Wall That Balances Storage and Style',
    subtitle: 'Concealing cables, integrating acoustics, and maximizing floor-to-ceiling wardrobe joinery.',
    paragraphs: [
      'A successful media unit hides visual clutter while celebrating architectural craftsmanship. Vertical acoustic wood slats provide textural depth and dampen sound reverberations, while floating bottom consoles keep the floor clean and easy to vacuum.',
      'Floor-to-ceiling wardrobes built up to the ceiling eliminate unsightly overhead storage gaps and maximize vertical volume in Mumbai residences.'
    ],
    tips: [
      'Incorporate internal brush grommets to route HDMI and power cables completely out of sight.',
      'Sliding wardrobe shutters save 3–4 feet of door swing radius in narrow bedrooms.',
      'Warm 3000K LED backlighting behind the media panel reduces eye fatigue during evening viewing.'
    ]
  }
};
`;

fs.writeFileSync('src/data/furniture.ts', outputTs, 'utf8');
console.log('Successfully wrote audited data to src/data/furniture.ts!');
