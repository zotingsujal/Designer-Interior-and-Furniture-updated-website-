import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Sparkles, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

interface CustomFurnitureProps {
  onOpenConsultation: () => void;
}

export const CustomFurniture: React.FC<CustomFurnitureProps> = ({ onOpenConsultation }) => {
  const steps = [
    { num: '01', title: 'Share Your Requirement', desc: 'Photos, room dimensions, reference sketches, or functional needs.' },
    { num: '02', title: 'Discuss Design', desc: 'Refine layout, select materials, choose wood and upholstery fabrics.' },
    { num: '03', title: 'Finalize Details', desc: 'Approve exact measurements, finishing stains, and hardware fittings.' },
    { num: '04', title: 'Craft & Finish', desc: 'Master artisans execute joinery, polishing, and bespoke upholstery.' },
    { num: '05', title: 'Delivery & Installation', desc: 'White-glove placement and flawless fit within your Mumbai home.' },
  ];

  const furnitureCategories = [
    {
      title: 'Custom Sofas & Sectionals',
      description: 'L-shapes, curved sectionals, and formal couches tailored to your exact living room elevation, cushion firmness preference, and fabric texture.',
    },
    {
      title: 'Sofa-cum-Beds & Storage',
      description: 'Concealed hydraulic lift mechanisms, sturdy steel frames, and effortless transitions from elegant daytime seating into guest bedding.',
    },
    {
      title: 'Beds & Hydraulic Headboards',
      description: 'Plush upholstered backrests, acoustic fluted timber panels, integrated nightstand consoles, and effortless hydraulic underbed storage.',
    },
    {
      title: 'Dining Tables & Solid Teak',
      description: 'Hand-selected solid wood planks, beveled architectural edges, matching upholstered dining chairs, and custom seating capacities.',
    },
    {
      title: 'Architectural TV Units & Consoles',
      description: 'Vertical acoustic wood slats, concealed cable raceways, floating matte lacquer consoles, and warm integrated cove LED lighting.',
    },
    {
      title: 'Wardrobes & Modular Storage',
      description: 'Floor-to-ceiling closets, aluminum profile glass shutters, specialized accessories drawers, and bespoke dressing room configurations.',
    },
  ];

  return (
    <section id="custom" className="py-20 sm:py-28 bg-[#FAF9F5] border-b border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Bespoke Specialization"
          title="Furniture Made For Your Space"
          subtitle="From a single custom sofa designed around your room dimensions to a complete furniture suite, we create pieces that balance aesthetics, comfort, and precision joinery."
        />

        {/* Custom Furniture Categories Grid (Pure architectural typography without duplicate images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {furnitureCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#F4EFEA] border border-[#E6DFD5] hover:border-[#18181B] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-xs text-[#87786B] tracking-widest uppercase">
                    Spec 0{idx + 1}
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#18181B] font-normal mb-3">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EAE3D9] flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#87786B] font-medium">
                  Custom Built
                </span>
                <CheckCircle2 className="w-4 h-4 text-[#87786B]" />
              </div>
            </div>
          ))}
        </div>

        {/* 5-Step Craft Process Strip */}
        <div className="bg-[#F4EFEA] border border-[#E0D7CC] p-8 sm:p-12 mb-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#87786B] bg-[#EAE3D9] rounded-xs">
              <Compass className="w-3.5 h-3.5 text-[#18181B]" />
              <span>Step-by-Step Experience</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal">
              How Your Custom Piece Comes to Life
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((st) => (
              <div key={st.num} className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl text-[#9B8D82] font-light mb-2">
                  {st.num}
                </span>
                <h4 className="text-sm font-semibold text-[#18181B] mb-1.5">
                  {st.title}
                </h4>
                <p className="text-xs text-[#5C554E] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action in light / white button */}
        <div className="text-center">
          <Button variant="primary" size="lg" onClick={onOpenConsultation}>
            <span>Discuss Your Custom Piece</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
