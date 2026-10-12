import React from 'react';
import { SectionHeading } from '../components/SectionHeading';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      title: 'Personalized Design',
      desc: 'Solutions developed around your individual living patterns, personal style, and room specifications.',
    },
    {
      title: 'Premium Finishing',
      desc: 'Rigorous attention to detail, smooth edge transitions, tactile fabric upholstery, and refined presentation.',
    },
    {
      title: 'Custom-Built Furniture',
      desc: 'Every piece can be adapted to specific room dimensions, storage needs, and unique functional requirements.',
    },
    {
      title: 'Design Understanding',
      desc: 'Our team focuses on understanding how you use your space before recommending furniture styles or interior layouts.',
    },
    {
      title: 'Reliable Service',
      desc: 'Professional communication, clear design discussions, and courteous assistance at our Santacruz showroom.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF9F5] border-b border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Distinct Approach"
          title="Crafted Around What Matters To You"
          subtitle="Why homeowners, architects, and discerning clients across Mumbai choose Designer Furniture & Interior for their spaces."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="bg-[#FAF9F5] border border-[#E6DFD5] p-8 sm:p-9 flex flex-col justify-between hover:border-[#18181B] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl text-[#9B8D82] font-light">
                    0{idx + 1}
                  </span>
                  <div className="w-6 h-px bg-[#EAE3D9]" />
                </div>
                <h3 className="font-serif text-2xl text-[#18181B] font-normal mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#5C554E] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE3D9] text-[11px] uppercase tracking-wider text-[#87786B]">
                Core Standard
              </div>
            </div>
          ))}

          {/* 6th Card: Visit studio CTA card */}
          <div className="bg-[#18181B] text-[#FAF9F5] p-8 sm:p-9 flex flex-col justify-between border border-[#18181B]">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] block mb-2">
                Santacruz West Studio
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#FAF9F5] mb-3">
                Experience It in Person
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                Visit our showroom on Swami Vivekanand Road to inspect wood finishes, touch fabric collections, and consult with our specialists.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2F2F35]">
              <a
                href="#contact"
                className="text-xs uppercase tracking-widest font-semibold text-[#C5A880] hover:text-[#FAF9F5] transition-colors inline-flex items-center gap-1.5"
              >
                <span>View Location &amp; Directions</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
