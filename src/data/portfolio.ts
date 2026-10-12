export interface PortfolioItem {
  id: string;
  category: 'Living Rooms' | 'Bedrooms' | 'Dining' | 'Custom Furniture';
  categoryLabel: string;
  image: string;
  alt: string;
  description?: string;
  features: string[];
}

export type PortfolioCategory =
  | 'All'
  | 'Living Rooms'
  | 'Bedrooms'
  | 'Dining'
  | 'Custom Furniture';

export const portfolioCategories: PortfolioCategory[] = [
  'All',
  'Living Rooms' as const,
  'Bedrooms' as const,
  'Dining' as const,
  'Custom Furniture' as const,
];

/**
 * Curated Design Inspirations & Work reflecting the business's actual bespoke projects.
 * Powered directly by genuine client project photographs from Google Drive.
 * Organized strictly into relevant categories without duplicate images.
 */
export const portfolioData: PortfolioItem[] = [
  // --- LIVING ROOMS ---
  {
    id: 'p-living-1',
    category: 'Living Rooms',
    categoryLabel: 'Acoustic Wood Slat TV Entertainment Wall',
    image: '/images/drive/drive_img_10_1GuU0K.jpg',
    alt: 'Custom architectural TV entertainment unit with display shelving and acoustic slatted accents',
    features: ['Wall-Mounted Architectural Unit', 'Integrated Display Shelving', 'Concealed Cable Management'],
  },
  {
    id: 'p-living-2',
    category: 'Living Rooms',
    categoryLabel: 'Modern Architectural Media Wall & Ambient Lighting',
    image: '/images/drive/drive_img_3_1KtJIM.jpg',
    alt: 'Living room concrete-finish media wall with floating console and warm LED cove lighting',
    features: ['Concrete-Finish Feature Wall', 'Integrated Warm LED Coves', 'Floating Console Joinery'],
  },
  {
    id: 'p-living-3',
    category: 'Living Rooms',
    categoryLabel: 'Geometric Walnut TV Wall & Display System',
    image: '/images/drive/drive_img_6_1U5guR.jpg',
    alt: 'Geometric walnut wood TV wall unit with integrated open display shelving',
    features: ['Geometric Asymmetrical Shelves', 'Rich Walnut Veneer', 'Architectural Spatial Fit'],
  },
  {
    id: 'p-living-4',
    category: 'Living Rooms',
    categoryLabel: 'Contemporary Wall-Mounted Entertainment Console',
    image: '/images/drive/drive_img_9_1XlOjJ.jpg',
    alt: 'Sleek contemporary low-profile media unit with integrated backlit accent panelling',
    features: ['Low-Profile Floating Design', 'Concealed Wire Raceways', 'Minimalist Soft-Close Drawers'],
  },
  {
    id: 'p-living-5',
    category: 'Living Rooms',
    categoryLabel: 'Modern Architectural Credenza & Storage Console',
    image: '/images/drive/drive_img_11_1BO_We.jpg',
    alt: 'Architectural credenza and living room media console with custom cabinetry',
    features: ['Precision Edge Banding', 'Concealed Soft-Close Hinges', 'Architectural Display Top'],
  },

  // --- BEDROOMS ---
  {
    id: 'p-bed-1',
    category: 'Bedrooms',
    categoryLabel: 'Custom Six-Drawer Vanity Dresser',
    image: '/images/drive/drive_img_4_1FEihx.jpg',
    alt: 'Custom six-drawer vanity dresser crafted for master bedroom storage by Designer Furniture & Interior',
    features: ['Bespoke Drawer Organizers', 'Smooth Gliding Action', 'Custom Bedroom Proportions'],
  },
  {
    id: 'p-bed-2',
    category: 'Bedrooms',
    categoryLabel: 'Master Bedroom Wardrobe & Integrated Vanity Suite',
    image: '/images/drive/drive_img_8_17IV2c.jpg',
    alt: 'Floor-to-ceiling bedroom wardrobe with integrated dressing vanity by Designer Furniture & Interior',
    features: ['Floor-to-Ceiling Joinery', 'Integrated Dressing Mirror Vanity', 'Concealed Storage Compartments'],
  },
  {
    id: 'p-bed-4',
    category: 'Bedrooms',
    categoryLabel: 'Bespoke Navy Wardrobe with Geometric Gold Accents',
    image: '/images/drive/drive_img_18_1YNYsJ.jpg',
    alt: 'Custom navy blue full-height wardrobe with geometric gold trim and designer handles',
    features: ['Geometric Gold Inlay Profiles', 'Matte Navy Shutter Finish', 'Full-Height Tall Unit'],
  },
  {
    id: 'p-bed-5',
    category: 'Bedrooms',
    categoryLabel: 'Floor-to-Ceiling Master Closet with Concealed Joinery',
    image: '/images/drive/drive_img_19_1iOMO7.jpg',
    alt: 'Floor-to-ceiling master closet wardrobe with overhead storage lofts and interior dividers',
    features: ['Overhead Storage Lofts', 'Internal Garment Dividers', 'Architectural Fit to Ceiling'],
  },
  {
    id: 'p-bed-6',
    category: 'Bedrooms',
    categoryLabel: 'Tailored Multi-Compartment Bedroom Wardrobe',
    image: '/images/drive/drive_img_20_14uLiI.jpg',
    alt: 'Multi-compartment bedroom storage wardrobe designed with custom shelving and drawers',
    features: ['Modular Section Partitioning', 'Internal Mirror & Tie Racks', 'Heavy-Duty Hardware'],
  },
  {
    id: 'p-bed-7',
    category: 'Bedrooms',
    categoryLabel: 'Luxury Lounge Seating & Integrated Media Center',
    image: '/images/drive/drive_img_22_1atNjG.jpg',
    alt: 'Master bedroom suite interior with custom luxury lounge seating and integrated media center in Mumbai',
    features: ['Coordinated Room Palette', 'Tailored Lounge Seating', 'Turnkey Finish'],
  },

  // --- DINING ---
  {
    id: 'p-dine-1',
    category: 'Dining',
    categoryLabel: 'Modern Elegant Dining Suite with Chandelier Lighting',
    image: '/images/drive/drive_img_2_1oeDlS.jpg',
    alt: 'Modern dining room interior featuring square high-gloss dining table and eight designer chairs under chandelier',
    features: ['Square High-Gloss Dining Table', 'Eight Upholstered Minimalist Chairs', 'Architectural Glass Reflection'],
  },
  {
    id: 'p-dine-2',
    category: 'Dining',
    categoryLabel: 'Handcrafted Solid Dining Table & Sculpted Chairs',
    image: '/images/drive/drive_img_21_13u-6f.jpg',
    alt: 'Handcrafted solid dining table with contemporary sculpted chairs in Mumbai home',
    features: ['Solid Timber Construction', 'Architectural Proportions', 'Tailored Comfort Seating'],
  },

  // --- CUSTOM FURNITURE ---
  {
    id: 'p-cust-1',
    category: 'Custom Furniture',
    categoryLabel: 'Bespoke Sculpted Credenza Console',
    image: '/images/drive/drive_img_16_1zcRXm.jpg',
    alt: 'Bespoke sculpted credenza console with artisanal detailing by Designer Furniture & Interior',
    features: ['Precision Edge Detailing', 'Custom Architectural Proportions', 'Artisanal Brass Inlay'],
  },
  {
    id: 'p-cust-2',
    category: 'Custom Furniture',
    categoryLabel: 'Handcrafted Chesterfield L-Sectional Leather Sofa',
    image: '/images/chesterfield_drive.jpg',
    alt: "Handcrafted cognac leather Chesterfield L-sectional sofa in D'Signer Furniture & Interior Factory workshop, Mumbai",
    features: [
      'Artisan Deep Diamond Button-Tufting',
      'Saddle Cognac Leather Upholstery',
      'Modular L-Sectional with Chaise Lounge',
      "Crafted at D'Signer Factory Workshop",
    ],
  },
  {
    id: 'p-cust-3',
    category: 'Custom Furniture',
    categoryLabel: 'Curved Architectural Timber Media Console',
    image: '/images/drive/drive_img_7_1tUTht.jpg',
    alt: 'Curved wooden media console with custom radius edges and timber joinery',
    features: ['Smooth Radius Edges', 'Curved Joinery Craftsmanship', 'Integrated Cable Pass-Throughs'],
  },
  {
    id: 'p-cust-4',
    category: 'Custom Furniture',
    categoryLabel: 'Custom Slatted Timber Feature Console Unit',
    image: '/images/drive/drive_img_15_1ABIZH.jpg',
    alt: 'Custom slatted timber feature console unit with open display shelving',
    features: ['Acoustic Vertical Slats', 'Floating Wall Attachment', 'Concealed Push-to-Open Storage'],
  },
  {
    id: 'p-cust-5',
    category: 'Custom Furniture',
    categoryLabel: 'Bespoke Master Bedroom Bed Suite & Upholstered Feature Wall',
    image: '/images/drive/drive_img_23_1vq-kc.jpg',
    alt: 'Custom master bedroom suite featuring upholstered platform bed, acoustic fluted feature headboard wall, and integrated bedside nightstands in Mumbai residence',
    description: 'An architectural master bedroom suite featuring a custom-built upholstered platform bed, floor-to-ceiling textured acoustic headboard wall panelling, tailored integrated bedside nightstands, and soft ambient cove lighting engineered for a restorative luxury retreat.',
    features: ['Custom Upholstered Platform Bed Frame', 'Acoustic Fluted Feature Wall Panelling', 'Integrated Bedside Floating Nightstands', 'Bespoke Master Suite Architectural Fit'],
  },
];
