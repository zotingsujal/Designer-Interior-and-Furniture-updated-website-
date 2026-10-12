import fs from 'fs';
import path from 'path';

// 1. Load active verified images
const activeImages = JSON.parse(fs.readFileSync('scripts/activeImages.json', 'utf8'));
const activeSet = new Set(activeImages.map(a => a.url));

// 2. Define the exact 4 major categories
const majorCategories = [
  {
    id: 'cat-sofas',
    slug: 'sofas',
    name: 'Sofas',
    tagline: 'Comfort, Crafted Around Your Space',
    description: "From expansive corner L-shapes and versatile sofa-cum-beds to hand-tufted Italian leather suites, each sofa is custom engineered in our Mumbai factory with high-resilience comfort foams, kiln-dried timber frames, and bespoke upholstery.",
    heroImage: '/images/chesterfield_drive.jpg',
  },
  {
    id: 'cat-dining',
    slug: 'dining-tables',
    name: 'Dining Tables',
    tagline: 'Gather Around Something Beautiful',
    description: 'Sculpted solid teak planks, Italian marble slab tops, and precision timber bases hand-finished in our Santacruz workshop. Designed for joyful family feasts and everyday Mumbai gatherings.',
    heroImage: '/images/bespoke/dining_bespoke_teak_1790862543973.jpg',
  },
  {
    id: 'cat-beds',
    slug: 'beds-bedroom',
    name: 'Beds & Bedroom',
    tagline: 'Designed for Rest. Crafted for Everyday Living.',
    description: 'Sanctuary bedroom suites featuring pneumatic hydraulic lift storage, plush acoustic headboards, and tailored nightstands manufactured for restorative quiet and organization.',
    heroImage: '/images/drive/drive_img_22_1atNjG.jpg',
  },
  {
    id: 'cat-living-storage',
    slug: 'living-storage',
    name: 'Living & Storage',
    tagline: 'Thoughtful Storage, Beautifully Integrated.',
    description: 'Floor-to-ceiling wardrobes, acoustic wooden slatted TV walls, floating credenzas, and bespoke joinery that turn everyday storage into architectural statements.',
    heroImage: '/images/drive/drive_img_10_1GuU0K.jpg',
  }
];

console.log('Major categories defined:', majorCategories.length);
