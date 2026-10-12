import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { Award, Compass, ShieldCheck } from 'lucide-react';

interface AboutProps {
  onOpenConsultation: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  const highlights = [
    {
      icon: Compass,
      title: 'Bespoke Design Architecture',
      desc: "Every furniture piece is conceptualized and built around your room's exact architectural dimensions, ceiling height, and layout.",
    },
    {
      icon: Award,
      title: 'Artisanal Joinery & Premium Materials',
      desc: 'Meticulous attention to solid teak woodwork, imported hardware fittings, natural veneers, and high-density tailored upholstery.',
    },
    {
      icon: ShieldCheck,
      title: 'Comprehensive Interior Execution',
      desc: 'Seamless continuity from single bespoke furniture commissions to complete residential turnkey interior transformations across Mumbai.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF9F5] border-b border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Philosophy &amp; Craft"
          title="Designed With Experience. Crafted With Precision."
          subtitle="At Designer Furniture & Interior in Santacruz, Mumbai, we believe luxury lives in the harmony between tailored proportions, refined materials, and purposeful living."
        />

        <div className="max-w-4xl mx-auto flex flex-col justify-center space-y-10 text-center items-center">
          <div className="space-y-5 text-base sm:text-lg text-[#3E3832] leading-relaxed max-w-3xl">
            <p>
              <strong className="text-[#18181B] font-semibold">Designer Furniture &amp; Interior</strong> specializes in premium custom-built furniture and cohesive residential interior solutions. Rather than mass-produced catalog items, we engineer pieces tailored specifically to your home layout and lifestyle.
            </p>
            <p className="text-sm sm:text-base text-[#5C554E]">
              From custom sectional sofas and engineered sofa-cum-beds to architectural acoustic slat TV units and floor-to-ceiling modular wardrobes, our focus remains on thoughtful proportions, elegant finishing, and lasting durability.
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full text-left pt-4">
            {highlights.map((h, i) => {
              const IconComp = h.icon;
              return (
                <div
                  key={h.title}
                  className="p-8 bg-[#F4EFEA] border border-[#E6DFD5] rounded-xs flex flex-col justify-between hover:border-[#18181B] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-sm text-[#87786B] font-light">
                        Pillar 0{i + 1}
                      </span>
                      <IconComp className="w-5 h-5 text-[#18181B]" />
                    </div>
                    <h4 className="text-base font-serif font-normal text-[#18181B] mb-2">
                      {h.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4">
            <Button variant="primary" size="lg" onClick={onOpenConsultation}>
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
