import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

export const ValueProposition: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Your Requirements',
      desc: 'We start by understanding your lifestyle, space dimensions, storage goals, and aesthetic references.',
    },
    {
      num: '02',
      title: 'Design',
      desc: 'Proportion studies, material recommendations, wood selection, and architectural space integration.',
    },
    {
      num: '03',
      title: 'Custom Craftsmanship',
      desc: 'Precision woodworking, joinery, premium upholstery tailoring, and detailed finishing in our workshop.',
    },
    {
      num: '04',
      title: 'Finished Space',
      desc: 'Careful delivery and on-site installation, transforming your residence into a harmonious, bespoke home.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#18181B] text-[#FAF9F5] border-b border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          label="The Craftsmanship Journey"
          title="Your Idea. Our Craftsmanship."
          subtitle="Every space has different requirements. Our approach focuses on understanding how you live, work and use your space before creating furniture and interiors around those needs."
        />

        {/* 4-Step Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="bg-[#222226] border border-[#2F2F35] p-7 sm:p-8 flex flex-col justify-between relative group hover:border-[#C5A880]/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl text-[#C5A880] font-light">
                    {step.num}
                  </span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block w-4 h-4 text-[#71717A] group-hover:text-[#C5A880] transition-colors" />
                  )}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#FAF9F5] font-normal mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2E2E34] text-[10px] uppercase tracking-widest text-[#71717A]">
                Phase {idx + 1} of 4
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
