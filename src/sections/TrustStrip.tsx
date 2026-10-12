import React from 'react';

export const TrustStrip: React.FC = () => {
  const pillars = [
    { title: 'Premium Furniture', description: 'Handcrafted solid wood & tailored upholstery' },
    { title: 'Custom Designs', description: 'Engineered specifically for your space dimensions' },
    { title: 'Interior Solutions', description: 'End-to-end design coordination & joinery' },
    { title: 'Customer-Focused Service', description: 'Attentive personal guidance from concept to delivery' },
  ];

  return (
    <section className="bg-[#FAF9F5] border-b border-[#E6DFD5] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#EAE3D9]">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className={`flex flex-col justify-center ${
                idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-6 lg:pl-8' : ''
              }`}
            >
              <h3 className="font-serif text-lg sm:text-xl text-[#18181B] font-medium tracking-tight mb-1">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-[#6E665E] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
