import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { businessInfo } from '../data/business';
import { Check, Shield, Clock, MapPin } from 'lucide-react';

export const ProjectEnquiry: React.FC = () => {
  return (
    <section id="enquiry" className="py-20 sm:py-28 bg-[#FAF9F5] border-b border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Project Planning"
          title="Share Your Vision With Us"
          subtitle="Whether you have architectural blueprints, sketches, or just an initial room concept, we guide you through material selections and fabrication details."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Consultation Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F4EFEA] border border-[#E0D7CC] p-7 sm:p-9 space-y-6">
              <h3 className="font-serif text-2xl text-[#18181B] font-normal">
                What to Expect
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#4A453F]">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#18181B] text-[#FAF9F5] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <strong className="text-[#18181B] block font-semibold">
                      Direct Assessment
                    </strong>
                    We review room proportions, layout challenges, and functional needs before offering recommendations.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#18181B] text-[#FAF9F5] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <strong className="text-[#18181B] block font-semibold">
                      Material &amp; Finish Guidance
                    </strong>
                    Explore solid woods (including natural teak), durable laminates, veneers, PU finishes, and premium fabrics.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#18181B] text-[#FAF9F5] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <strong className="text-[#18181B] block font-semibold">
                      Transparent Discussion
                    </strong>
                    Clear estimates, honest technical feasibility feedback, and tailored solutions within your budget parameters.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D9D1C5] space-y-2 text-xs text-[#6E665E]">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#87786B]" />
                  <span>No spam. Your contact details are kept strictly confidential.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#87786B]" />
                  <span>Fast consultation scheduling via WhatsApp or direct phone call.</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#87786B]" />
                  <span>Showroom visits available by appointment in Santacruz West.</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#FAF9F5] border border-[#E6DFD5] text-xs text-[#5C554E] leading-relaxed">
              <span className="font-semibold text-[#18181B] block mb-1">
                Prefer immediate chat?
              </span>
              Click the green WhatsApp button below to start a live chat with our team at{' '}
              <a
                href={businessInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1F5435] font-semibold underline"
              >
                +91 98214 32122
              </a>
              .
            </div>
          </div>

          {/* Right: The Complete Enquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
