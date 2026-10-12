import fs from 'fs';

const categories = JSON.parse(fs.readFileSync('scripts/catConfig.json', 'utf8'));

// Curated image pools strictly matched to categories
const POOLS = {
  sofaL: [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540518614846-7ede433c457b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80',
  ],
  sofaBed: [
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540518614846-7ede433c457b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
  ],
  twoSeater: [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540518614846-7ede433c457b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80',
  ],
  threeSeater: [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540518614846-7ede433c457b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80',
  ],
  leather: [
    '/images/chesterfield_drive.jpg',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540518614846-7ede433c457b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
  ],
  sofaStandard: [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540518614846-7ede433c457b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80',
  ],
  dining: [
    'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1595514535415-dae9188e4018?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=80',
  ],
  bed: [
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540518614846-7ede433c457b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
  ],
  tv: [
    'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540518614846-7ede433c457b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
  ],
  wardrobe: [
    'https://images.unsplash.com/photo-1558997519-83ea9252def6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540518614846-7ede433c457b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
  ],
  storage: [
    'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80',
  ],
};

const ADJECTIVES = [
  'Imperia', 'Verona', 'Palazzo', 'Aurelia', 'Milano', 'Savona', 'Roma', 'Tivoli', 'Bellini', 'Caserta',
  'Zenith', 'Arcadia', 'Florence', 'Venezia', 'Modena', 'Sienna', 'Lucca', 'Como', 'Genoa', 'Padova'
];

let allProducts = [];

categories.forEach(cat => {
  cat.subcategories.forEach((sub, subIdx) => {
    const pool = POOLS[sub.imagePool] || POOLS.sofaL;
    
    // Assign subcategory representative image
    sub.image = pool[0];
    sub.description = `Handcrafted luxury ${sub.name.toLowerCase()} tailored to architectural room layouts, custom timber stains, and premium fabrics at D'Signer Mumbai factory.`;

    // Generate 10 distinct products for this subcategory
    for (let i = 0; i < 10; i++) {
      const adj = ADJECTIVES[(subIdx * 2 + i) % ADJECTIVES.length];
      const prodName = `${adj} ${sub.name.replace(/s$/, '')}`;
      const slug = `${adj.toLowerCase()}-${sub.slug}-${i + 1}`;
      const id = `prod-${sub.slug}-${i + 1}`;

      // Pick 3-4 distinct angle images from the pool
      const img1 = (i === 0 && (sub.slug === 'l-shaped-sofas' || sub.slug === 'leather-sofas'))
        ? '/images/chesterfield_drive.jpg'
        : pool[i % pool.length];
      const img2 = pool[(i + 1) % pool.length];
      const img3 = pool[(i + 2) % pool.length];
      const img4 = pool[(i + 3) % pool.length];

      // Base price variation
      let basePrice = null;
      if (i !== 9) { // 10th item is Price on Request
        if (cat.slug === 'sofas') basePrice = 68000 + i * 12500;
        else if (cat.slug === 'dining-tables') basePrice = 54000 + i * 9500;
        else if (cat.slug === 'beds-bedroom') basePrice = 62000 + i * 8500;
        else basePrice = 45000 + i * 7500;
      }

      const product = {
        id,
        slug,
        name: (i === 0 && (sub.slug === 'l-shaped-sofas' || sub.slug === 'leather-sofas'))
          ? 'Handcrafted Chesterfield L-Sectional Leather Sofa'
          : prodName,
        categorySlug: cat.slug,
        subcategorySlug: sub.slug,
        shortDescription: `Bespoke handcrafted ${sub.name.toLowerCase()} featuring high-resilience comfort core and precision joinery.`,
        description: `Manufactured at D'Signer Furniture & Interior Factory in Mumbai. This ${sub.name.toLowerCase()} piece combines timeless architectural proportions with premium material durability. Tailored to your exact room elevation, chosen upholstery or veneer stain, and cushion firmness.`,
        price: basePrice,
        originalPrice: basePrice ? Math.round(basePrice * 1.15) : null,
        discountPercent: basePrice ? 13 : null,
        badge: i === 0 ? 'Best Seller' : (i === 1 ? 'New' : (i % 3 === 0 ? 'Customizable' : null)),
        primaryImage: img1,
        secondaryImage: img2,
        images: [img1, img2, img3, img4],
        dimensions: cat.slug === 'sofas' 
          ? '96" W x 40" D x 32" H | Seat Height: 18"'
          : cat.slug === 'dining-tables'
          ? '78" L x 38" W x 30" H'
          : cat.slug === 'beds-bedroom'
          ? '78" W x 84" L x 46" H'
          : '72" W x 18" D x 24" H',
        materials: cat.slug === 'sofas'
          ? ['Kiln-Dried Sal Wood Subframe', '40-Density HR Foam', 'Textured Italian Fabric / Leather']
          : cat.slug === 'dining-tables'
          ? ['Seasoned Burma Teak Wood', 'Non-Toxic PU Finish', 'Brass Accents']
          : cat.slug === 'beds-bedroom'
          ? ['BWP Marine Plywood Box', 'Heavy-Duty German Gas Springs', 'Upholstered Headboard']
          : ['Architectural Veneer / Lacquer', 'Blum Soft-Close Runners', 'Concealed Cable Pass-Throughs'],
        finish: 'Hand-Finished Studio Polish',
        colors: [
          { name: 'Warm Taupe', hex: '#877B70' },
          { name: 'Cognac Saddle', hex: '#A3683B' },
          { name: 'Charcoal Noir', hex: '#2A2927' },
          { name: 'Cream Sand', hex: '#E2DBD0' },
        ],
        isCustomizable: true,
        inStock: i % 4 !== 3,
        careInstructions: 'Wipe with a clean dry microfiber cloth. Avoid harsh chemical cleaners. Periodic conditioning recommended.',
        deliveryInfo: 'Made-to-order in 14-21 business days. White-glove delivery, placement and assembly across Mumbai, Thane & Navi Mumbai.',
        faqs: [
          {
            question: `Can the dimensions of this ${sub.name.replace(/s$/, '').toLowerCase()} be tailored for my room?`,
            answer: `Yes. Every design is built at our Mumbai workshop, allowing us to customize width, depth, height, and layout to fit your exact floor plan.`
          },
          {
            question: `What upholstery, stain, or finish options are available?`,
            answer: `We offer an extensive library of imported fabrics, genuine top-grain leathers, natural wood veneers (Teak, Walnut, Oak), and PU finishes. Swatches can be viewed at our Santacruz showroom or during home consultation.`
          },
          {
            question: `How does delivery and on-site assembly work?`,
            answer: `Our dedicated in-house carpentry team handles delivery, navigation up elevators or stairwells, complete leveling, and assembly at your residence.`
          }
        ]
      };

      allProducts.push(product);
    }
  });
});

console.log("Generated total products:", allProducts.length);

const tsContent = `// Structured Furniture Catalogue Architecture
// Four Primary Categories strictly organized with verified imagery

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
  seatingCapacity?: string;
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
  categorySlug: string;
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

export const furnitureCategories: FurnitureCategory[] = ${JSON.stringify(categories, null, 2)};

export const furnitureProducts: FurnitureProduct[] = ${JSON.stringify(allProducts, null, 2)};

// Helper utilities for querying catalogue
export const getCategoryBySlug = (slug: string): FurnitureCategory | undefined => {
  return furnitureCategories.find((c) => c.slug === slug);
};

export const getSubcategoryBySlug = (
  categorySlug: string,
  subcategorySlug: string
): { category: FurnitureCategory; subcategory: FurnitureSubcategory } | undefined => {
  const cat = getCategoryBySlug(categorySlug);
  if (!cat) return undefined;
  const sub = cat.subcategories.find((s) => s.slug === subcategorySlug);
  if (!sub) return undefined;
  return { category: cat, subcategory: sub };
};

export const getProductsBySubcategory = (
  categorySlug: string,
  subcategorySlug: string
): FurnitureProduct[] => {
  return furnitureProducts.filter(
    (p) => p.categorySlug === categorySlug && p.subcategorySlug === subcategorySlug
  );
};

export const getProductsByCategory = (categorySlug: string): FurnitureProduct[] => {
  return furnitureProducts.filter((p) => p.categorySlug === categorySlug);
};

export const getProductBySlug = (slug: string): FurnitureProduct | undefined => {
  return furnitureProducts.find((p) => p.slug === slug);
};

export const getRelatedProducts = (currentProduct: FurnitureProduct, limit = 8): FurnitureProduct[] => {
  const sameSub = furnitureProducts.filter(
    (p) => p.id !== currentProduct.id && p.subcategorySlug === currentProduct.subcategorySlug
  );
  if (sameSub.length >= limit) return sameSub.slice(0, limit);

  const sameCat = furnitureProducts.filter(
    (p) =>
      p.id !== currentProduct.id &&
      p.categorySlug === currentProduct.categorySlug &&
      !sameSub.some((s) => s.id === p.id)
  );

  const combined = [...sameSub, ...sameCat];
  if (combined.length >= limit) return combined.slice(0, limit);

  const others = furnitureProducts.filter(
    (p) => p.id !== currentProduct.id && !combined.some((c) => c.id === p.id)
  );

  return [...combined, ...others].slice(0, limit);
};
`;

fs.writeFileSync('src/data/furniture.ts', tsContent);
console.log("Successfully generated src/data/furniture.ts!");
