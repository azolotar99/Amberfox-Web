export const contact = {
  office: { label: '(02) 9130 7009', href: 'tel:0291307009' },
  mobile: { label: '0407 667 881', href: 'tel:0407667881' },
  email: { label: 'info@amberfoxblinds.com.au', href: 'mailto:info@amberfoxblinds.com.au' },
};

export const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Automation', href: '#automation' },
  { label: 'Gallery', href: '#gallery' },
];

export interface Product {
  name: string;
  /** Image basename in /public/images; expects `-480` and `-900` .jpg/.webp variants. */
  image: string;
  alt: string;
  height: number;
}

// Card order matches the homepage grid.
export const products: Product[] = [
  { name: 'Plantation Shutters', image: 'shutters', alt: 'White plantation shutters on a tall stairwell window', height: 1200 },
  { name: 'Roller Blinds', image: 'roller-blinds', alt: 'White roller blinds on floor-to-ceiling windows overlooking Sydney Harbour', height: 1200 },
  { name: 'Awnings', image: 'awnings', alt: 'Outdoor mesh blinds on a covered deck overlooking Norfolk pines and the beach', height: 1200 },
  { name: 'Roman Blinds', image: 'roman-blinds', alt: 'Sheer white linen Roman blind above garden-facing French windows', height: 1143 },
  { name: 'Venetian Blinds', image: 'venetian-blinds', alt: 'White Venetian blinds behind a freestanding bath with ocean views', height: 1200 },
  { name: 'Curtains', image: 'curtains', alt: 'Floor-length sheer linen curtains in a study beside built-in bookshelves', height: 1203 },
];

export const tickerItems = [
  'Plantation Shutters',
  'Roller Blinds',
  'Roman Blinds',
  'Venetian Blinds',
  'Awnings',
  'Curtains',
  'Automation',
];

export interface Testimonial {
  text: string;
  initials: string;
  name: string;
  location: string;
}

// Placeholder copy until real reviews are supplied.
export const testimonials: Testimonial[] = [
  {
    text: 'Amberfox did a brilliant job with our plantation shutters. The team was on time, tidy and the shutters look absolutely stunning. We\'d recommend them to anyone in the Eastern Suburbs.',
    initials: 'SR',
    name: 'Sarah R.',
    location: 'Paddington, NSW',
  },
  {
    text: 'Really impressed with the service from start to finish. The motorised blinds they installed are fantastic — so convenient and they look great. Very professional team.',
    initials: 'MK',
    name: 'Michael K.',
    location: 'Bondi, NSW',
  },
  {
    text: 'Honest pricing, great product knowledge and a clean installation. They\'ve done two of our properties now and both times have been excellent. Couldn\'t be happier.',
    initials: 'JT',
    name: 'James T.',
    location: 'Rose Bay, NSW',
  },
];
