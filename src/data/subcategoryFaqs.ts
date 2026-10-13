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
  // 1. Dining Tables
  if (subcategorySlug.includes('dining') || subcategorySlug.includes('table')) {
    return [
      {
        question: `Can I customize the tabletop size, stone slab, or seating capacity for ${subcategoryName}?`,
        answer: `Absolutely. We custom-build ${subcategoryName} to accommodate anywhere from 4 to 14 diners. You can select solid teak wood tops, imported Italian marble, sintered stone, or fluted timber bases matched to your exact room dimensions.`,
      },
      {
        question: `How do you protect marble and timber surfaces from dining spills and stains?`,
        answer: `Every marble and stone top receives a penetrating anti-etch nano-sealer, while our timber finishes use heat and liquid-resistant polyurethane (PU) coating that resists wine, turmeric, oil, and water marks during daily family dining.`,
      },
      {
        question: `Can you create matching dining chairs or benches for this collection?`,
        answer: `Yes. We design and craft coordinated dining chairs, carver armchairs, or cushioned banquette benches matching the exact wood stain, metal accents, and upholstery palette of your ${subcategoryName}.`,
      },
      {
        question: `How is delivery and assembly managed for heavy stone or solid wood dining tables?`,
        answer: `Our specialized logistics crew brings the tabletop and substructure blanket-wrapped to your residence in Mumbai, assembling the piece on-site and ensuring perfect leveling and floor protectors.`,
      },
    ];
  }

  // 2. Sofas, Sectionals, Couches
  if (
    subcategorySlug.includes('sofa') ||
    subcategorySlug.includes('sectional') ||
    subcategorySlug.includes('couch') ||
    subcategorySlug.includes('lounger')
  ) {
    return [
      {
        question: `Can the L-sectional chaise orientation and length be customized for ${subcategoryName}?`,
        answer: `Yes. We configure the sectional as left-hand chaise, right-hand chaise, or symmetrical U-shape according to your living room doorway clearance and window placements.`,
      },
      {
        question: `What seat cushion densities and backrest fills do you recommend?`,
        answer: `We offer custom comfort tiers using 32D to 40D high-resilience (HR) foams, topped with pocket spring cores or hypoallergenic microfiber down-wrap for a plush, sink-in feel that retains its shape over years of use.`,
      },
      {
        question: `Which upholstery fabrics work best in Mumbai homes with pets or children?`,
        answer: `We provide liquid-repellent bouclé, stain-resistant micro-velvets, breathable Belgian linen weaves, and genuine Italian top-grain leathers treated for anti-fungal and moisture resistance.`,
      },
      {
        question: `Can you customize the sofa frame so it fits through narrow apartment elevators?`,
        answer: `Yes. For high-rise Mumbai buildings with compact elevators or stairwells, we construct modular split frames with invisible precision joinery that assemble seamlessly inside your living room.`,
      },
    ];
  }

  // 3. Beds, Headboards, Nightstands
  if (
    subcategorySlug.includes('bed') ||
    subcategorySlug.includes('headboard') ||
    subcategorySlug.includes('nightstand')
  ) {
    return [
      {
        question: `Can this bed frame be fabricated for custom mattress thicknesses and sizes?`,
        answer: `Yes. Whether you have an Indian King (72"x78"), Standard Queen (60"x78"), or an imported bespoke mattress depth (8" to 14"), our carpentry team crafts the frame and headboard reveal to exact tolerances.`,
      },
      {
        question: `What under-bed storage options can be integrated?`,
        answer: `We offer heavy-duty German hydraulic lift mechanisms for effortless access to the full bed cavity, as well as smooth soft-close drawer pull-outs for spaces where side clearance permits.`,
      },
      {
        question: `Can the headboard include integrated warm LED cove lighting or charging sockets?`,
        answer: `Yes. We frequently integrate concealed warm LED halo illumination, integrated acoustic wall panels, and flush-mount brass electrical sockets or USB-C charging ports into the headboard back panel.`,
      },
      {
        question: `What solid wood foundation is used for squeak-free longevity?`,
        answer: `We build structural internal ribs from seasoned solid timber and moisture-proof marine ply, reinforced with interlocking corner brackets to guarantee zero creaking over decades.`,
      },
    ];
  }

  // 4. Wardrobes, Closets, Cabinets
  if (
    subcategorySlug.includes('wardrobe') ||
    subcategorySlug.includes('closet') ||
    subcategorySlug.includes('cabinet') ||
    subcategorySlug.includes('storage') ||
    subcategorySlug.includes('sideboard') ||
    subcategorySlug.includes('credenza')
  ) {
    return [
      {
        question: `How are the internal compartments of ${subcategoryName} customized?`,
        answer: `Every shelf, hanger rod height, jewelry drawer with velvet organizers, watch winder cavity, and shoe pull-out is tailored to your personal wardrobe collection and ceiling height.`,
      },
      {
        question: `What shutter styles and finishes are available?`,
        answer: `You can choose fluted tinted glass with slim black aluminum profiles, hand-matched natural veneers, matte PU lacquered shutters, or mirror-paneled doors with soft-damped closing mechanisms.`,
      },
      {
        question: `Do you include internal automatic sensor lighting?`,
        answer: `Yes. We install flush-mounted LED channel lighting with magnetic proximity sensors that illuminate each wardrobe section automatically when doors open.`,
      },
      {
        question: `Are your storage cabinets and wardrobes termite and moisture resistant?`,
        answer: `Yes. All carcass joinery is fabricated using certified BWR/BWP calibrated marine ply with anti-termite treatment, finished with durable moisture-sealed laminate or veneer backing.`,
      },
    ];
  }

  // 5. Chairs, Benches, Stools
  if (
    subcategorySlug.includes('chair') ||
    subcategorySlug.includes('bench') ||
    subcategorySlug.includes('stool') ||
    subcategorySlug.includes('ottoman')
  ) {
    return [
      {
        question: `Can the seat height and backrest angle of ${subcategoryName} be adjusted?`,
        answer: `Yes. We calibrate ergonomic seat height, lumbar curvature, and armrest heights to ensure maximum seating comfort for your body proportions and desk/table heights.`,
      },
      {
        question: `Can I select a custom wood finish to match existing furniture?`,
        answer: `Yes. Simply bring a wood sample or high-resolution photo to our Santacruz studio, and our polish masters will custom-blend the stain (walnut, dark teak, ebony, natural ash) to match seamlessly.`,
      },
      {
        question: `Are high-traffic commercial-grade fabrics available?`,
        answer: `Yes. We offer commercial Martindale-rated fabrics (exceeding 40,000 rubs) with stain-guard coatings suitable for both bustling residential living rooms and executive office spaces.`,
      },
    ];
  }

  // 6. Generic/Universal Subcategory Fallback
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
