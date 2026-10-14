// Authoritative FAQs for Website & Subcategory Dedicated Pages
import { FurnitureFAQ } from './furniture';

export interface CategorizedFAQ {
  category: 'Custom Furniture' | 'Materials & Timber' | 'Showroom & Location' | 'Pricing & Delivery';
  question: string;
  answer: string;
}

export const websiteFaqs: CategorizedFAQ[] = [
  {
    category: 'Custom Furniture',
    question: 'How does the bespoke custom furniture commissioning process work?',
    answer:
      'We begin with an in-depth consultation (in our Santacruz showroom, via WhatsApp, or on-site in Mumbai) where we review your room dimensions, layout, aesthetic preferences, and reference images. Our design team creates detailed 2D/3D schematics with precise dimensions. Once approved and timber/fabric swatches are chosen, our master carpenters handcraft your piece with periodic progress updates until final delivery and installation.',
  },
  {
    category: 'Custom Furniture',
    question: 'Can I alter dimensions, finishes, and configurations for any piece on your website?',
    answer:
      'Yes, 100%. Every single piece featured in our catalogue is manufactured to order. You can customize total width, depth, height, seating firmness, timber species (Burma Teak, CP Teak, Steam Beech), veneer grain, PU polish shade (matte, satin, high gloss), and upholstery fabrics.',
  },
  {
    category: 'Materials & Timber',
    question: 'What types of wood, veneers, and hardware do you use?',
    answer:
      'We use sustainably sourced Grade-A solid Teak Wood, seasoned Hardwoods, calibrated BWR/Marine plywood cores, and hand-selected natural architectural veneers. All hardware is premium grade, including soft-close German drawer runners, heavy-duty hydraulic lifts for bed storage, and concealed hinges designed for heavy everyday use in Mumbai.',
  },
  {
    category: 'Materials & Timber',
    question: 'How is your furniture protected against Mumbai’s coastal humidity and climate?',
    answer:
      'Our solid timber and veneers undergo thorough seasoning and anti-termite treatment before assembly. We apply multi-layer polyurethane (PU) and protective Italian sealers that prevent moisture ingress, wood warping, or surface blooming, ensuring your furniture remains pristine through Mumbai monsoons.',
  },
  {
    category: 'Showroom & Location',
    question: 'Where is your showroom located and what can I experience there?',
    answer:
      'Our physical studio and showroom is located at F-004, 1st Floor, Swami Vivekanand Road, next to the BEST Bus Depot, Santacruz (West), Mumbai 400054. At our showroom, you can feel genuine wood finishes, compare live marble and Italian composite stone slabs, test seat-cushion foam densities, and review over 500+ fabric, leatherette, and veneer swatches.',
  },
  {
    category: 'Showroom & Location',
    question: 'Do I need an appointment before visiting the Santacruz showroom?',
    answer:
      'Walk-ins are always welcome from 10:30 AM to 8:30 PM (all 7 days). However, scheduling an advance appointment via our website enquiry button or WhatsApp ensures one of our senior furniture architects is exclusively reserved to review your floor plans and provide tailored material recommendations.',
  },
  {
    category: 'Pricing & Delivery',
    question: 'What is the turnaround timeline for custom-made furniture?',
    answer:
      'Standard custom pieces (such as bespoke dining tables, accent chairs, or consoles) typically take 15 to 25 working days. Large comprehensive projects (such as custom modular wardrobes, complete living room sets, or multi-room interiors) take 3 to 5 weeks from final drawing approval.',
  },
  {
    category: 'Pricing & Delivery',
    question: 'Do you offer white-glove delivery and professional on-site installation across Mumbai?',
    answer:
      'Yes. Our dedicated in-house logistics and carpentry teams handle blanket-wrapped transit, careful carry-up, assembly, and precise placement across Mumbai, Thane, Navi Mumbai, and surrounding regions. We remove all packaging materials and conduct a joint inspection before sign-off.',
  },
];

// Helper generating tailored FAQs for any subcategory
export const getSubcategoryFaqs = (
  subcategorySlug: string,
  subcategoryName: string,
  categorySlug?: string
): FurnitureFAQ[] => {
  // 1. Kitchens (Modular Kitchens, Custom Kitchens)
  if (
    subcategorySlug.includes('kitchen') ||
    categorySlug === 'kitchens'
  ) {
    return [
      {
        question: `What marine-grade materials and shutter finishes are used for ${subcategoryName}?`,
        answer: `We construct all kitchen carcasses with 100% Boiling Water Proof (BWP/BWR) calibrated marine ply with anti-termite treatment. Shutter options include anti-fingerprint acrylic, high-gloss PU lacquer, scratch-resistant laminates, and fluted glass with slim anodized aluminum profiles.`,
      },
      {
        question: `Which hardware brands and mechanisms are integrated into your kitchen designs?`,
        answer: `We engineer our kitchens exclusively with German hardware—including Blum tandem boxes, soft-close hinges, lift-up Aventos flap fittings, and Hettich organizers—engineered to withstand heavy daily cookware loads.`,
      },
      {
        question: `Can you customize the kitchen layout for unconventional floor plans and columns?`,
        answer: `Yes. Because our carpentry is factory-direct in Mumbai, we build bespoke tall pantry units, corner magic carousels, spice pull-outs, and chimney boxings tailored around unusual plumbing stacks or structural pillars.`,
      },
      {
        question: `How long does design, manufacturing, and on-site kitchen installation take?`,
        answer: `The design and 3D schematic phase takes 3 to 5 days. Precision factory modular fabrication takes approximately 3 to 4 weeks, followed by swift, clean on-site installation completed within 3 to 5 working days.`,
      },
    ];
  }

  // 2. Chairs & Seating (Dining Chairs, Coffee Chairs, Rocking Chairs, Puffies)
  if (
    subcategorySlug.includes('chair') ||
    subcategorySlug.includes('puffy') ||
    subcategorySlug.includes('puffies') ||
    categorySlug === 'chairs-seating'
  ) {
    return [
      {
        question: `Can the seat height, cushion firmness, and upholstery of ${subcategoryName} be tailored?`,
        answer: `Yes. We offer ergonomic calibration for seat height, backrest pitch, and high-resilience foam densities (from plush sink-in 32D to supportive 40D). You can choose from over 300+ performance fabrics, bouclés, linens, and genuine leathers.`,
      },
      {
        question: `Are your rocking chairs and occasional chairs balanced for structural stability?`,
        answer: `All our chairs and rocking chairs are engineered with mortise-and-tenon solid wood joinery and weighted timber skids that ensure smooth, noise-free movement and lifetime stability.`,
      },
      {
        question: `Can Puffies and ottomans be crafted with concealed storage?`,
        answer: `Yes, we frequently build custom Puffies and pouffes with removable or hinged cushioned lids to provide discreet storage for throws, cushions, and magazines.`,
      },
      {
        question: `Can I match the chair timber stain and fabric to an existing dining or living set?`,
        answer: `Absolutely. Provide a reference sample or photo, and our master polishers will color-match the PU timber stain and tone precisely to your existing interior furniture.`,
      },
    ];
  }

  // 3. Tables (Dining Tables, Centre Tables, Coffee Tables)
  if (
    subcategorySlug.includes('table') ||
    categorySlug === 'tables'
  ) {
    return [
      {
        question: `Can I customize the tabletop material, stone slab, or dimensions for ${subcategoryName}?`,
        answer: `Yes. We custom-build ${subcategoryName} to your exact room proportions. Choose between seasoned solid Burma teak, American walnut, Italian Statuario marble, sealed sintered stone, or fluted architectural bases.`,
      },
      {
        question: `How are stone and wood tabletop surfaces protected against spills and heat?`,
        answer: `Every marble and natural stone surface receives an Italian penetrating nano-sealer to prevent oil and turmeric stains. Timber surfaces receive heat-resistant polyurethane (PU) clear lacquers that resist hot crockery and water rings.`,
      },
      {
        question: `Can centre tables and coffee tables include hidden drawers or tiered nesting shelves?`,
        answer: `Yes. We specialize in multifunctional centre and coffee tables featuring concealed push-to-open drawers, cantilevered marble slabs, and nesting satellite tables.`,
      },
      {
        question: `What is the standard delivery and on-site assembly process for heavy tables?`,
        answer: `Our dedicated Mumbai logistics crew brings the tabletop and structural substructure blanket-wrapped directly to your floor, assembling and leveling the piece on-site with protective floor glides.`,
      },
    ];
  }

  // 4. Living Room & Storage (TV Base Unit, Wall Unit, Crockery Units, Bar Units)
  if (
    subcategorySlug.includes('tv') ||
    subcategorySlug.includes('wall-unit') ||
    subcategorySlug.includes('crockery') ||
    subcategorySlug.includes('bar-unit') ||
    categorySlug === 'living-room-storage'
  ) {
    return [
      {
        question: `How are cables, set-top boxes, and gaming consoles managed in ${subcategoryName}?`,
        answer: `Our TV Base Units and Wall Units incorporate concealed wire chaseways, acoustic slatted vents for AV heat dissipation, and internal power strip compartments that keep all wiring 100% invisible.`,
      },
      {
        question: `Can Wall Units and Crockery Units include integrated warm LED illumination?`,
        answer: `Yes. We integrate concealed warm 3000K LED strip channels with touchless sensors or dimmable remote switches to highlight glass shelves, liquor bottles, and curated china.`,
      },
      {
        question: `What custom features are available for Bar Units?`,
        answer: `Our Bar Units feature stemware racks, lockable spirits storage, wine bottle cubbies, anti-tarnish brass hardware, and pull-out marble mixing shelves.`,
      },
      {
        question: `Can the wall unit be mounted securely onto hollow block or gypsum partition walls?`,
        answer: `Our installation team inspects your wall masonry and uses heavy-duty chemical anchors and internal steel reinforcement brackets to ensure 100% safe, sturdy wall mounting.`,
      },
    ];
  }

  // 5. Bedroom Sets (Beds, Wardrobes, Side Tables, Dressing Tables)
  if (
    subcategorySlug.includes('bed') ||
    subcategorySlug.includes('wardrobe') ||
    subcategorySlug.includes('side-table') ||
    subcategorySlug.includes('dressing') ||
    categorySlug === 'bedroom-sets'
  ) {
    return [
      {
        question: `Can this bed frame be fabricated for custom mattress sizes and hydraulic lift storage?`,
        answer: `Yes. Whether you have Indian King (72"x78"), Queen (60"x78"), or custom imported mattress depths, our carpentry team crafts the frame with heavy-duty German gas-lift hydraulic pistons for effortless storage access.`,
      },
      {
        question: `How are wardrobe interiors and shutter styles tailored for ${subcategoryName}?`,
        answer: `Every hanging bay, jewelry drawer with velvet dividers, shoe vitrine, and loft compartment is designed around your personal wardrobe. Shutters range from fluted bronze glass to matte PU lacquer and natural bookmatched veneers.`,
      },
      {
        question: `Can Dressing Tables and Side Tables feature integrated mirrors and halo lighting?`,
        answer: `Yes. We craft dressing consoles with integrated LED halo vanity mirrors, concealed jewelry compartments, and side tables with wireless charging recesses and soft-close felt-lined drawers.`,
      },
      {
        question: `Are your bedroom sets treated against termites and monsoon humidity?`,
        answer: `All carcass joinery is fabricated using certified calibrated marine ply and seasoned solid timber with anti-termite treatment, finished with moisture-sealed backing to eliminate squeaks and warping.`,
      },
    ];
  }

  // 6. Sofas (Sofa Sets, L-Shape Sofas, Sofa Cum Beds)
  if (
    subcategorySlug.includes('sofa') ||
    categorySlug === 'sofas'
  ) {
    return [
      {
        question: `Can the chaise orientation, seat depth, and length be customized for ${subcategoryName}?`,
        answer: `Yes. We configure sectionals and sofa sets with left or right-hand chaise orientations and custom seat depths (from compact 34" to deep 42" lounge seating) tailored to your doorway clearances and room floor plans.`,
      },
      {
        question: `How does the folding mechanism work on Sofa Cum Beds?`,
        answer: `Our Sofa Cum Beds utilize smooth German hydraulic glide pullouts and counter-balanced steel mechanisms that effortlessly transition from a formal living room couch into a plush master bed in seconds.`,
      },
      {
        question: `What foam densities and upholstery options are available for sofa sets?`,
        answer: `We use multi-density 32D to 40D high-resilience (HR) foams with pocket spring cores or feather-down toppers. Upholstery choices include stain-resistant performance bouclé, Italian top-grain leather, and velvet.`,
      },
      {
        question: `Can large sofa sets be delivered into Mumbai apartments with narrow elevators?`,
        answer: `Yes. For high-rise buildings with tight lifts, we engineer modular interlocking split frames that assemble smoothly and invisibly on-site in your living room without visible seams.`,
      },
    ];
  }

  // 7. Generic/Universal Subcategory Fallback
  return [
    {
      question: `Can I customize the exact dimensions and layout for ${subcategoryName}?`,
      answer: `Yes. Every item in the ${subcategoryName} collection is custom crafted in our Mumbai workshop. We accommodate specific length, depth, and height specifications to fit your room niches perfectly.`,
    },
    {
      question: `What timber, veneer, and finish selections are available for this collection?`,
      answer: `We work with Grade-A seasoned Teak wood, imported White Oak, American Walnut, and premium natural veneers finished with Italian PU matte or gloss lacquers.`,
    },
    {
      question: `How do I request a tailored quotation or material sample for ${subcategoryName}?`,
      answer: `Click the "ENQUIRY" button or chat with our design team on WhatsApp (+91 98214 32122). You can share reference sketches or room dimensions for an immediate consultation.`,
    },
    {
      question: `What is the warranty and post-installation support on this piece?`,
      answer: `We provide comprehensive structural warranty coverage against craftsmanship defects and termite ingress, alongside lifetime service support for polishing and hardware tune-ups.`,
    },
  ];
};
