import fs from 'fs';

const categories = [
  {
    id: 'cat-sofas',
    slug: 'sofas',
    name: 'Sofas',
    tagline: 'Comfort, Crafted Around Your Space',
    description:
      'From expansive corner L-shapes and versatile sofa-cum-beds to hand-tufted Italian leather suites, each sofa is custom engineered in our Mumbai factory with high-resilience comfort foams, kiln-dried timber frames, and bespoke upholstery.',
    heroImage: '/images/chesterfield_drive.jpg',
    subcategories: [
      { id: 'sub-l-shaped', slug: 'l-shaped-sofas', name: 'L-Shaped Sofas', imagePool: 'sofaL' },
      { id: 'sub-sofa-bed', slug: 'sofa-cum-beds', name: 'Sofa Cum Beds', imagePool: 'sofaBed' },
      { id: 'sub-2-seater', slug: '2-seater-sofas', name: '2-Seater Sofas', imagePool: 'twoSeater' },
      { id: 'sub-3-seater', slug: '3-seater-sofas', name: '3-Seater Sofas', imagePool: 'threeSeater' },
      { id: 'sub-sectional', slug: 'sectional-sofas', name: 'Sectional Sofas', imagePool: 'sofaL' },
      { id: 'sub-recliner', slug: 'recliner-sofas', name: 'Recliner Sofas', imagePool: 'sofaStandard' },
      { id: 'sub-modular', slug: 'modular-sofas', name: 'Modular Sofas', imagePool: 'sofaL' },
      { id: 'sub-fabric', slug: 'fabric-sofas', name: 'Fabric Sofas', imagePool: 'sofaStandard' },
      { id: 'sub-leather', slug: 'leather-sofas', name: 'Leather Sofas', imagePool: 'leather' },
      { id: 'sub-custom-sofa', slug: 'custom-sofas', name: 'Custom Sofas', imagePool: 'leather' },
    ],
  },
  {
    id: 'cat-dining',
    slug: 'dining-tables',
    name: 'Dining Tables',
    tagline: 'Gather Around Something Beautiful',
    description:
      'Handcrafted solid Burma teak, European walnut, natural Statuario Italian marble, and sculpted architectural pedestals designed to anchor family meals and dinner gatherings.',
    heroImage: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    subcategories: [
      { id: 'sub-4-seater', slug: '4-seater-dining-tables', name: '4-Seater Dining Tables', imagePool: 'dining' },
      { id: 'sub-6-seater', slug: '6-seater-dining-tables', name: '6-Seater Dining Tables', imagePool: 'dining' },
      { id: 'sub-8-seater', slug: '8-seater-dining-tables', name: '8-Seater Dining Tables', imagePool: 'dining' },
      { id: 'sub-10-seater', slug: '10-seater-dining-tables', name: '10-Seater Dining Tables', imagePool: 'dining' },
      { id: 'sub-round', slug: 'round-dining-tables', name: 'Round Dining Tables', imagePool: 'dining' },
      { id: 'sub-extendable', slug: 'extendable-dining-tables', name: 'Extendable Dining Tables', imagePool: 'dining' },
      { id: 'sub-marble', slug: 'marble-dining-tables', name: 'Marble Dining Tables', imagePool: 'dining' },
      { id: 'sub-wooden', slug: 'wooden-dining-tables', name: 'Wooden Dining Tables', imagePool: 'dining' },
      { id: 'sub-modern-dining', slug: 'modern-dining-tables', name: 'Modern Dining Tables', imagePool: 'dining' },
      { id: 'sub-custom-dining', slug: 'custom-dining-tables', name: 'Custom Dining Tables', imagePool: 'dining' },
    ],
  },
  {
    id: 'cat-beds',
    slug: 'beds-bedroom',
    name: 'Beds & Bedroom',
    tagline: 'Designed for Rest. Crafted for Everyday Living.',
    description:
      'Master suite beds featuring padded architectural headboards, sound-damped hydraulic storage, fluted timber acoustic panels, and matching floating bedside nightstands.',
    heroImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    subcategories: [
      { id: 'sub-king', slug: 'king-size-beds', name: 'King Size Beds', imagePool: 'bed' },
      { id: 'sub-queen', slug: 'queen-size-beds', name: 'Queen Size Beds', imagePool: 'bed' },
      { id: 'sub-double', slug: 'double-beds', name: 'Double Beds', imagePool: 'bed' },
      { id: 'sub-storage-bed', slug: 'storage-beds', name: 'Storage Beds', imagePool: 'bed' },
      { id: 'sub-hydraulic', slug: 'hydraulic-storage-beds', name: 'Hydraulic Storage Beds', imagePool: 'bed' },
      { id: 'sub-upholstered', slug: 'upholstered-beds', name: 'Upholstered Beds', imagePool: 'bed' },
      { id: 'sub-platform', slug: 'platform-beds', name: 'Platform Beds', imagePool: 'bed' },
      { id: 'sub-wooden-bed', slug: 'wooden-beds', name: 'Wooden Beds', imagePool: 'bed' },
      { id: 'sub-modern-bed', slug: 'modern-beds', name: 'Modern Beds', imagePool: 'bed' },
      { id: 'sub-custom-bed', slug: 'custom-beds', name: 'Custom Beds', imagePool: 'bed' },
      { id: 'sub-bedside-tables', slug: 'bedside-tables', name: 'Bedside Tables', imagePool: 'bed' },
    ],
  },
  {
    id: 'cat-living-storage',
    slug: 'living-storage',
    name: 'Living & Storage',
    tagline: 'Thoughtful Storage, Beautifully Integrated.',
    description:
      'Seamless living room entertainment walls, acoustic wood slating, floor-to-ceiling glass and hinged wardrobes, luxury credenzas, and tailored display units built to the millimeter.',
    heroImage: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80',
    subcategories: [
      // TV UNITS
      { id: 'sub-tv-wall', slug: 'wall-mounted-tv-units', name: 'Wall-Mounted TV Units', imagePool: 'tv' },
      { id: 'sub-tv-floor', slug: 'floor-standing-tv-units', name: 'Floor-Standing TV Units', imagePool: 'tv' },
      { id: 'sub-tv-storage', slug: 'tv-units-with-storage', name: 'TV Units With Storage', imagePool: 'tv' },
      { id: 'sub-tv-minimal', slug: 'minimal-tv-units', name: 'Minimal TV Units', imagePool: 'tv' },
      { id: 'sub-tv-modern', slug: 'modern-tv-units', name: 'Modern TV Units', imagePool: 'tv' },
      { id: 'sub-tv-designer', slug: 'designer-tv-units', name: 'Designer TV Units', imagePool: 'tv' },
      { id: 'sub-tv-custom', slug: 'custom-tv-units', name: 'Custom TV Units', imagePool: 'tv' },
      // WARDROBES
      { id: 'sub-ward-sliding', slug: 'sliding-door-wardrobes', name: 'Sliding Door Wardrobes', imagePool: 'wardrobe' },
      { id: 'sub-ward-hinged', slug: 'hinged-door-wardrobes', name: 'Hinged Door Wardrobes', imagePool: 'wardrobe' },
      { id: 'sub-ward-walkin', slug: 'walk-in-wardrobes', name: 'Walk-In Wardrobes', imagePool: 'wardrobe' },
      { id: 'sub-ward-glass', slug: 'glass-door-wardrobes', name: 'Glass Door Wardrobes', imagePool: 'wardrobe' },
      { id: 'sub-ward-modular', slug: 'modular-wardrobes', name: 'Modular Wardrobes', imagePool: 'wardrobe' },
      { id: 'sub-ward-bedroom', slug: 'bedroom-wardrobes', name: 'Bedroom Wardrobes', imagePool: 'wardrobe' },
      { id: 'sub-ward-custom', slug: 'custom-wardrobes', name: 'Custom Wardrobes', imagePool: 'wardrobe' },
      // ADDITIONAL STORAGE
      { id: 'sub-storage-sideboards', slug: 'sideboards-consoles', name: 'Sideboards & Consoles', imagePool: 'storage' },
      { id: 'sub-storage-cabinets', slug: 'storage-cabinets', name: 'Storage Cabinets', imagePool: 'storage' },
      { id: 'sub-storage-display', slug: 'display-units', name: 'Display Units', imagePool: 'storage' },
      { id: 'sub-storage-custom', slug: 'custom-storage', name: 'Custom Storage', imagePool: 'storage' },
    ],
  },
];

console.log("Categories configuration prepared:", categories.length);
fs.writeFileSync('scripts/catConfig.json', JSON.stringify(categories, null, 2));
