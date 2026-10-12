import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Phone, MessageSquare, MapPin, Clock, ExternalLink, Calendar } from 'lucide-react';
import { businessInfo } from '../data/business';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';

interface ContactProps {
  onOpenConsultation?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenConsultation }) => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Visit or Speak With Us"
          title="Showroom &amp; Consultation Inquiries"
          subtitle="Our studio and showroom are conveniently located on Swami Vivekanand Road in Santacruz (West), Mumbai."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Studio Details Card */}
          <div className="lg:col-span-6 bg-[#F4EFEA] border border-[#E0D7CC] p-8 sm:p-12 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <Logo theme="dark" size="md" className="mb-4" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#87786B] block mb-1">
                  Showroom &amp; Design Studio
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal">
                  {businessInfo.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C554E] mt-1">
                  Bespoke Furniture &bull; Luxury Interiors &bull; Custom Craftsmanship
                </p>
              </div>

              {/* Showroom Address */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#EAE3D9] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#18181B]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-1">
                    Showroom Address
                  </h4>
                  <p className="text-sm text-[#4A453F] leading-relaxed">
                    {businessInfo.address.line1},
                    <br />
                    {businessInfo.address.landmark},
                    <br />
                    {businessInfo.address.line2},
                    <br />
                    {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.pincode}
                  </p>
                  <a
                    href={businessInfo.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#18181B] hover:text-[#C5A880] mt-2 underline"
                  >
                    <span>Open in Maps App for Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#EAE3D9] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-[#18181B]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-1">
                    Direct Phone Line
                  </h4>
                  <a
                    href={businessInfo.telHref}
                    className="text-base font-semibold text-[#18181B] hover:text-[#C5A880] transition-colors"
                  >
                    {businessInfo.phone}
                  </a>
                  <p className="text-xs text-[#6E665E] mt-0.5">
                    Click to call our design team directly
                  </p>
                </div>
              </div>

              {/* Studio Hours / Visit Note */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#EAE3D9] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#18181B]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-1">
                    Personalized Consultations
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A453F] leading-relaxed">
                    We welcome visits to review material swatches, solid wood timber selections, and fabric samples. An advance phone call or WhatsApp message is recommended to ensure our senior designer is dedicated to your space planning.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-8 border-t border-[#D9D1C5] grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              <Button
                variant="primary"
                size="md"
                href={businessInfo.telHref}
                className="w-full text-center"
              >
                <Phone className="w-4 h-4 mr-1.5" />
                Call Now
              </Button>

              <Button
                variant="whatsapp"
                size="md"
                href={businessInfo.whatsappHref}
                isExternal
                className="w-full text-center"
              >
                <MessageSquare className="w-4 h-4 mr-1.5" />
                WhatsApp Us
              </Button>
            </div>
          </div>

          {/* Showroom Experience & Consultation Schedule Card (Replacing Google Maps section) */}
          <div className="lg:col-span-6 bg-[#FAF9F5] border border-[#E0D7CC] p-8 sm:p-12 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="border-b border-[#EAE3D9] pb-5">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#87786B] block mb-1">
                  In-Person Showroom Experience
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal">
                  What You Can Explore at Our Studio
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#4A453F] leading-relaxed">
                <div className="p-4 bg-[#F4EFEA] border border-[#E6DFD5]">
                  <strong className="text-[#18181B] block font-semibold mb-1">
                    1. Wood &amp; Polish Swatches
                  </strong>
                  Examine solid teak wood grains, premium natural veneers, PU finishes, and matte/gloss lacquer samples under true architectural lighting.
                </div>

                <div className="p-4 bg-[#F4EFEA] border border-[#E6DFD5]">
                  <strong className="text-[#18181B] block font-semibold mb-1">
                    2. Fabric &amp; Upholstery Collections
                  </strong>
                  Touch and compare high-density foam cushions, textured bouclé, linen weaves, and stain-resistant velvet swatches for custom sofas.
                </div>

                <div className="p-4 bg-[#F4EFEA] border border-[#E6DFD5]">
                  <strong className="text-[#18181B] block font-semibold mb-1">
                    3. Live Proportions &amp; Joinery Details
                  </strong>
                  Test comfort levels, inspect soft-close drawer runners, concealed hydraulic lift mechanisms, and acoustic slat alignments in person.
                </div>
              </div>

              <div className="pt-2 text-xs text-[#6E665E]">
                <strong className="text-[#18181B]">Showroom Landmark:</strong> Located on 1st Floor, Swami Vivekanand Road, right next to BEST Bus Depot, Santacruz (West), Mumbai.
              </div>
            </div>

            <div className="pt-8 border-t border-[#EAE3D9] mt-8">
              {onOpenConsultation && (
                <Button
                  variant="primary"
                  size="md"
                  onClick={onOpenConsultation}
                  className="w-full text-center"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Showroom Appointment
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
