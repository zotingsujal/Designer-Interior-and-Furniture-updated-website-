export interface ServiceItem {
  id: string;
  categoryNumber: string;
  title: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  items: string[];
  ctaText: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'custom-furniture',
    categoryNumber: '01',
    title: 'Custom Furniture',
    shortDescription:
      'Precision-engineered, handcrafted furniture made to fit your architectural layout and design aesthetic seamlessly.',
    image: '/images/drive/drive_img_16_1zcRXm.jpg',
    imageAlt: 'Custom luxury architectural furniture console by Designer Furniture & Interior',
    items: [
      'Custom Sofas & Sectionals',
      'Sofa-cum-Beds with Storage',
      'Ottomans & Benches',
      'Beds & Hydraulic Storage Frames',
      'Dining Tables & Sculpted Chairs',
      'Dressing Tables & Mirrors',
      'Wardrobes & Walk-in Closets',
      'Architectural TV Units & Consoles',
      'Storage Solutions & Cabinets',
      'Bespoke Furniture Joinery',
    ],
    ctaText: 'Discuss Custom Furniture',
  },
  {
    id: 'premium-interiors',
    categoryNumber: '02',
    title: 'Premium Interiors',
    shortDescription:
      'Harmonious interior environments designed with spatial elegance, tailored joinery, and cohesive material curation.',
    image: '/images/drive/drive_img_13_1xSqof.jpg',
    imageAlt: 'Full home luxury living room interior with entertainment center and cove lighting in Mumbai',
    items: [
      'Complete Home Interiors',
      'Living Room Interiors & False Ceilings',
      'Bedroom Suites & Master Closets',
      'Dining Areas & Feature Partitions',
      'Modular / Custom Storage Solutions',
      'Space Planning & Circulation',
      'Décor & Lighting Integration',
      'Furniture & Interior Coordination',
    ],
    ctaText: 'Discuss Interior Project',
  },
  {
    id: 'bespoke-furniture',
    categoryNumber: '03',
    title: 'Bespoke Furniture',
    shortDescription:
      'Turn your sketches, references, and exact room dimensions into refined physical furniture pieces made specifically for your lifestyle.',
    image: '/images/drive/drive_img_14_1nturL.jpg',
    imageAlt: 'Bespoke floor-to-ceiling modular wardrobe joinery with overhead lofts and integrated doors',
    items: [
      'Reference Images & Sketches Replicated',
      'Adaptation of Existing Architectural Designs',
      'Custom Measurements & Non-Standard Proportions',
      'Client Concept Development & Wood Selection',
      'Specific Functional & Storage Needs',
    ],
    ctaText: 'Share Your References',
  },
  {
    id: 'fully-furnished',
    categoryNumber: '04',
    title: 'Fully Furnished Solutions',
    shortDescription:
      'Comprehensive furnishing solutions for entire residences or dedicated rooms, uniting every piece in one seamless aesthetic.',
    image: '/images/drive/drive_img_5_1mH28h.jpg',
    imageAlt: 'Turnkey fully furnished apartment interior and modern modular kitchen solutions in Mumbai',
    items: [
      'Entire Home Furniture Packages',
      'Modular Kitchens & Breakfast Counters',
      'Curated Material & Finish Schemes',
      'Complete Room Transformations',
      'Consistent Aesthetic Language Across Spaces',
      'Turnkey Coordination & White-Glove Installation',
    ],
    ctaText: 'Explore Turnkey Solutions',
  },
];
