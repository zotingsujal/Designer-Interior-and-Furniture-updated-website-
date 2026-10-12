export interface Testimonial {
  id: string;
  author: string;
  quote: string;
  projectContext?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    author: 'Uday Limaye',
    quote:
      'Moizzbhai has a unique taste. I recently did my furniture for my home and his advice was perfect. He has an eye for detail and ensures his customer is happy and satisfied. If you are looking to have a new house done or redoing your furniture, take his advice once. Very helpful and practical, and ensures to keep your home spacious while accommodating all your requirements.',
    projectContext: 'Home Furniture & Planning',
  },
  {
    id: 't-2',
    author: 'Shriram Tikam',
    quote:
      'Ordered a dressing table from Designer Furniture. Finishing of the product is excellent. Very good workmanship and premium look. Thoroughly satisfied.',
    projectContext: 'Custom Dressing Table',
  },
  {
    id: 't-3',
    author: 'Mohan George',
    quote:
      'Very good teak wood furniture, good quality, good finishing and elegant look. Appreciate the excellent behaviour of all at Designer Furniture.',
    projectContext: 'Teak Wood Furniture',
  },
  {
    id: 't-4',
    author: 'Govind Jadhwani',
    quote:
      'We have beautiful experience with Designer (Concept) Furniture. Provides good quality service.',
    projectContext: 'Furniture & Service',
  },
  {
    id: 't-5',
    author: 'Vishal Basu',
    quote:
      'They have the best elite class designed furniture and interiors available for your dream home. Staff members are great. The owner himself is so knowledgeable and understands your needs and serves in the way you wanted. I am very much overwhelmed with the experience. Thank you!',
    projectContext: 'Dream Home Furniture & Interiors',
  },
  {
    id: 't-6',
    author: 'Norton Vaz',
    quote:
      'An impeccable quality of workforce combined with natural skills to create awesomeness out of wood and glass. Be it interiors from A to Z, Designer Furniture & Interior is the place to visit to beautify your homes. Phenomenal employees and work ethics. Reliable and genuine. All the best!',
    projectContext: 'Interiors & Woodcraft',
  },
  {
    id: 't-7',
    author: 'Kiran Kamath',
    quote:
      'Very pleasant experience overall. Sandeep was very patient in understanding our requirements and offered several solutions. In fact, the sofa we were replacing was purchased from Furniture Concepts in 1997. We are a returning customer.',
    projectContext: 'Custom Sofa Replacement (Returning Customer)',
  },
  {
    id: 't-8',
    author: 'Yug Potdar',
    quote:
      'Absolutely stunning designs! Transformed our space into a masterpiece with attention to detail, creativity, and top-notch service. Highly recommend for anyone seeking modern, elegant interiors that truly stand out.',
    projectContext: 'Interior Transformation',
  },
  {
    id: 't-9',
    author: 'Ankita Divya',
    quote:
      'I got a custom-made sofa and an ottoman from here. The design I gave for reference has been replicated to a very good extent. Would definitely recommend.',
    projectContext: 'Custom Sofa & Ottoman from Reference',
  },
  {
    id: 't-10',
    author: 'Yashashri Moray',
    quote:
      'The sales executives are so expert that they immediately understood our requirements. The sofa set design we liked was customised into a sofa-cum-bed and delivered well before the scheduled time! It was always a happy and satisfying experience on all subsequent purchases we made from them.',
    projectContext: 'Custom Sofa-cum-Bed',
  },
];
