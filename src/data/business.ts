export interface BusinessInfo {
  name: string;
  phone: string;
  phoneRaw: string;
  telHref: string;
  whatsappHref: string;
  whatsappMessage: string;
  address: {
    line1: string;
    line2: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  categories: string[];
  tagline: string;
  subtitle: string;
  trustStatement: string;
  mapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
}

export const businessInfo: BusinessInfo = {
  name: 'Designer Furniture & Interior',
  phone: '098214 32122',
  phoneRaw: '+919821432122',
  telHref: 'tel:+919821432122',
  whatsappHref: 'https://wa.me/919821432122?text=Hello%20Designer%20Furniture%20%26%20Interior%2C%20I%20would%20like%20to%20enquire%20about%20custom%20furniture%20and%20interior%20solutions.',
  whatsappMessage: 'Hello Designer Furniture & Interior, I would like to enquire about custom furniture and interior solutions.',
  address: {
    line1: 'F-004, 1st Floor, Swami Vivekanand Rd',
    line2: 'BEST Colony, Santacruz (West)',
    landmark: 'Next to BUS DEPOT',
    area: 'Santacruz (West)',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400054',
    full: 'F-004, 1st Floor, Swami Vivekanand Rd, next to BUS DEPOT, BEST Colony, Santacruz (West), Mumbai, Maharashtra 400054',
  },
  categories: [
    'Premium Custom Furniture',
    'Luxury Interiors',
    'Bespoke Furniture',
    'Home Interiors',
  ],
  tagline: 'Furniture Crafted Around Your Lifestyle.',
  subtitle: 'Premium custom furniture and elegant interior solutions designed to make your space truly yours.',
  trustStatement: 'Bespoke Furniture • Premium Interiors • Custom Craftsmanship',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.826767420531!2d72.8368545!3d19.0823377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c911b33230a5%3A0xe543329aa2ff7bf2!2sSwami%20Vivekanand%20Rd%2C%20Santacruz%20West%2C%20Mumbai%2C%20Maharashtra%20400054!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  googleMapsDirectionsUrl: 'https://maps.google.com/?q=F-004,+1st+Floor,+Swami+Vivekanand+Rd,+next+to+BUS+DEPOT,+BEST+Colony,+Santacruz+(West),+Mumbai,+Maharashtra+400054',
};
