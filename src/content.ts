export const contact = {
  office: { label: '(02) 9130 7009', href: 'tel:0291307009' },
  mobile: { label: '0407 667 881', href: 'tel:0407667881' },
  email: { label: 'info@amberfoxblinds.com.au', href: 'mailto:info@amberfoxblinds.com.au' },
};

export const navLinks = [
  { label: 'Products', href: '#/products' },
  { label: 'About', href: '#about' },
  { label: 'Automation', href: '#automation' },
  { label: 'Gallery', href: '#/gallery' },
];

export interface ProductPhoto {
  /** Image basename in /public/images; expects `-600` and `-1200` .jpg/.webp variants. */
  image: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProductOption {
  name: string;
  text: string;
}

export interface Product {
  name: string;
  /** Route segment: the card links to `#/products/<slug>`. */
  slug: string;
  /** Image basename in /public/images; expects `-480` and `-900` .jpg/.webp variants. */
  image: string;
  alt: string;
  height: number;
  tagline: string;
  intro: string[];
  optionsHeading: string;
  options: ProductOption[];
  /** Optional second group, e.g. slat or louvre sizes. */
  extraHeading?: string;
  extra?: ProductOption[];
  benefits: string[];
  photos: ProductPhoto[];
}

const photo = (image: string, alt: string, width = 1086, height = 1448): ProductPhoto => ({ image, alt, width, height });

// Card order matches the homepage grid. Product notes are condensed from Amberfox's
// site content documents; treat them as draft copy until signed off.
export const products: Product[] = [
  {
    name: 'Plantation Shutters',
    slug: 'plantation-shutters',
    image: 'shutters',
    alt: 'White plantation shutters on a tall stairwell window',
    height: 1200,
    tagline: 'Timeless style with outstanding light, privacy and airflow control.',
    intro: [
      'Plantation shutters are one of the most elegant and enduring window furnishings. Custom made for each window, they give you precise control over light, privacy and airflow while adding lasting value to your home.',
      'Their clean lines suit contemporary and traditional interiors alike, and we make them for standard windows, bay and feature windows, French, sliding and bi-fold doors, and arched or shaped openings.',
    ],
    optionsHeading: 'Materials',
    options: [
      { name: 'Basswood', text: 'A fine, lightweight and stable timber with a smooth painted finish and crisply defined louvres. Ideal for living areas, bedrooms and feature windows.' },
      { name: 'Visionwood', text: 'A premium engineered polymer that looks like painted timber but resists moisture and humidity. It won\'t warp, crack or peel, so it suits bathrooms, kitchens, laundries and coastal homes.' },
    ],
    extraHeading: 'Louvre sizes',
    extra: [
      { name: '63mm', text: 'A classic look for smaller windows and traditional interiors.' },
      { name: '89mm', text: 'Our most popular size, balancing light control, privacy and outlook.' },
      { name: '114mm', text: 'A wide, contemporary louvre for large windows and open-plan spaces.' },
    ],
    benefits: [
      'Premium Basswood or durable Visionwood',
      'Excellent light, privacy and ventilation control',
      'Improved insulation and energy efficiency',
      'Durable, easy to maintain and built to last',
      'Adds value and sophistication to your home',
      'Custom made for a perfect fit',
    ],
    photos: [
      photo('products/shutters-1', 'White plantation shutters across bedroom windows above a timber bench'),
      photo('products/shutters-2', 'Bi-fold plantation shutters closed across a set of French doors', 924, 1232),
      photo('products/shutters-3', 'Shaped plantation shutters on a raked stairwell window beneath woven pendant lights'),
      photo('products/shutters-4', 'Plantation shutters on a kitchen window above a marble benchtop'),
      photo('products/shutters-5', 'Angled plantation shutters fitted to a raked bedroom window'),
      photo('products/shutters-6', 'Triangular gable shutters above a reading nook with a leather armchair'),
      photo('products/shutters-7', 'Plantation shutters on a galley kitchen window under a raked ceiling'),
      photo('products/shutters-8', 'Shutter doors fitted beside built-in white bookshelves'),
      photo('products/shutters-9', 'Timber shutters fitted into a skylight in a rustic raked ceiling', 1200, 1200),
    ],
  },
  {
    name: 'Roller Blinds',
    slug: 'roller-blinds',
    image: 'roller-blinds',
    alt: 'White roller blinds on floor-to-ceiling windows overlooking Sydney Harbour',
    height: 1200,
    tagline: 'Clean, modern and endlessly versatile.',
    intro: [
      'Roller blinds are one of the most popular window furnishings, offering a clean, modern look with effective control over light, privacy and glare. Their simple design complements almost any interior.',
      'Custom made for your windows in an extensive range of colours, textures and fabrics, they suit every room. Choose a double roller to pair a sunscreen and a blockout blind on the same window, with filtered daylight by day and full privacy at night.',
    ],
    optionsHeading: 'Fabric options',
    options: [
      { name: 'Sunscreen', text: 'Filters light while keeping your view. Cuts glare and UV, ideal for living areas, kitchens and home offices.' },
      { name: 'Light filtering', text: 'Softly diffuses daylight for a warm atmosphere with more daytime privacy.' },
      { name: 'Blockout', text: 'Maximum privacy and light control for bedrooms, media rooms and nurseries.' },
    ],
    benefits: [
      'Sleek, contemporary design',
      'Sunscreen, light-filtering and blockout fabrics',
      'Double roller option for day and night',
      'Suits large and small windows',
      'Motorisation with remote, app or voice control',
      'Custom made for a perfect fit',
    ],
    photos: [
      photo('products/roller-blinds-1', 'Sunscreen roller blinds on harbour-view windows above a timber deck'),
      photo('products/roller-blinds-2', 'Roller blinds across a kitchen window wall with a city view'),
      photo('products/roller-blinds-3', 'Roller blinds above balcony doors in a light-filled living room'),
      photo('products/roller-blinds-4', 'Blockout roller blind above a freestanding bath in a dark-tiled bathroom', 1200, 1600),
      photo('products/roller-blinds-5', 'Roller blind on a bathroom window beside a clawfoot bath'),
      photo('products/roller-blinds-6', 'Light-filtering roller blind with leaf shadows falling across the fabric'),
      photo('products/roller-blinds-7', 'Roller blind half raised over a window looking onto a garden courtyard'),
      photo('products/roller-blinds-8', 'Double roller blinds on a timber-framed window above a garden'),
      photo('products/roller-blinds-9', 'Roller blind on a bedroom window beside an armchair', 1200, 1600),
      photo('products/roller-blinds-10', 'Roller blinds framing a city skyline view', 1200, 1600),
      photo('products/roller-blinds-11', 'Sunscreen roller blind over a dining table with an apartment view', 1200, 1600),
      photo('products/roller-blinds-12', 'Harbour-view living room with roller blinds along the windows', 1200, 1600),
      photo('products/roller-blinds-13', 'Sunscreen roller blinds filtering a harbour view behind a sculpture', 1200, 1600),
      photo('products/roller-blinds-14', 'Close-up of a grey roller blind with a fascia beside a tiled wall'),
      photo('products/roller-blinds-15', 'Close-up of a roller blind chain and bracket', 1200, 1600),
      photo('products/roller-blinds-16', 'Close-up of a roller blind bottom rail and chain', 1200, 1600),
      photo('products/roller-blinds-17', 'Close-up of a roller blind chain tensioner on a white wall', 1200, 1600),
    ],
  },
  {
    name: 'Awnings',
    slug: 'awnings',
    image: 'awnings',
    alt: 'Outdoor mesh blinds on a covered deck overlooking Norfolk pines and the beach',
    height: 1200,
    tagline: 'Zip Screen outdoor blinds for year-round alfresco living.',
    intro: [
      'Zip Screen outdoor blinds extend your living space outdoors, protecting you from sun, wind, rain and insects. Each blind runs in side channels for a smooth, tensioned finish that stays put in windy conditions.',
      'Built for Australian conditions, they cut heat, glare and UV while keeping airflow and your view. They suit alfresco areas, patios and verandahs, balconies, pergolas, outdoor kitchens and cafés.',
    ],
    optionsHeading: 'Fabric options',
    options: [
      { name: 'Sunscreen mesh', text: 'Filters sunlight and cuts glare and heat while keeping your view open. The most popular choice.' },
      { name: 'Privacy mesh', text: 'A tighter weave for more daytime privacy, still letting light and air through.' },
      { name: 'Clear or tinted PVC', text: 'Maximum protection from wind and rain while preserving your outlook. Ideal for cooler months.' },
    ],
    benefits: [
      'Protection from sun, wind and light rain',
      'Reduces heat, glare and UV',
      'Insect protection with mesh fabrics',
      'Secure zip-guided system',
      'Manual or motorised, with timers and weather sensors',
      'Custom made for a perfect fit',
    ],
    photos: [
      photo('products/awnings-1', 'Outdoor mesh blinds on a covered deck overlooking Norfolk pines and the beach'),
      photo('products/awnings-2', 'Charcoal zip screen blinds along a first-floor verandah', 1200, 900),
    ],
  },
  {
    name: 'Roman Blinds',
    slug: 'roman-blinds',
    image: 'roman-blinds',
    alt: 'Sheer white linen Roman blind above garden-facing French windows',
    height: 1143,
    tagline: 'The softness of curtains with the practicality of a blind.',
    intro: [
      'Raised, a Roman blind folds into elegant horizontal pleats. Lowered, it gives a smooth, tailored finish that complements both classic and contemporary interiors.',
      'Choose unlined to show off a decorative fabric\'s texture, lined for better insulation, drape and privacy, or blockout-lined for room darkening and thermal performance.',
    ],
    optionsHeading: 'Fabric options',
    options: [
      { name: 'Sheer', text: 'Gently filters natural light for an open, airy feel.' },
      { name: 'Light filtering', text: 'Softens daylight and gives daytime privacy without blocking the light.' },
      { name: 'Blockout', text: 'Maximum privacy and light control for bedrooms and media rooms.' },
    ],
    benefits: [
      'Elegant, timeless appearance',
      'Soft fabric with clean, tailored folds',
      'Unlined, lined or blockout-lined',
      'Suits traditional and modern interiors',
      'Motorisation available',
      'Custom made for a perfect fit',
    ],
    photos: [
      photo('products/roman-blinds-1', 'Sheer white linen Roman blind above garden-facing French windows', 1113, 1413),
      photo('products/roman-blinds-2', 'Pair of sheer Roman blinds above a built-in study desk', 1181, 1332),
      photo('products/roman-blinds-3', 'Wide sheer Roman blind above a sofa in a bright living room'),
      photo('products/roman-blinds-4', 'Roman blind on a small window in a moody, lamp-lit study', 1034, 1379),
      photo('products/roman-blinds-5', 'Linen Roman blind raised above black-framed French windows', 1042, 1509),
      photo('products/roman-blinds-6', 'Close-up of linen Roman blind folds beside timber shelving', 1200, 1600),
    ],
  },
  {
    name: 'Venetian Blinds',
    slug: 'venetian-blinds',
    image: 'venetian-blinds',
    alt: 'White Venetian blinds behind a freestanding bath with ocean views',
    height: 1200,
    tagline: 'Precise control over light, privacy and airflow.',
    intro: [
      'Venetian blinds are timeless and practical. Tilt the slats to adjust how much light comes in while keeping your privacy, or raise them fully to open up the view.',
      'Available in timber, PVC and aluminium, in slat widths to suit every window, they work in everything from contemporary apartments to classic family homes.',
    ],
    optionsHeading: 'Materials',
    options: [
      { name: 'Timber', text: 'Natural warmth, texture and character for living areas, bedrooms and home offices.' },
      { name: 'PVC', text: 'Durable and moisture resistant, with the look of painted timber. Ideal for bathrooms, laundries and kitchens.' },
      { name: 'Aluminium', text: 'Lightweight, sleek and durable in a wide range of colours, for homes and offices.' },
    ],
    extraHeading: 'Slat sizes',
    extra: [
      { name: '25mm', text: 'Slim and contemporary, ideal for smaller windows.' },
      { name: '50mm', text: 'The most popular choice, balancing light control and a clear view.' },
      { name: '63mm', text: 'A bold, architectural look for larger windows (selected materials).' },
    ],
    benefits: [
      'Exceptional light, privacy and ventilation control',
      'Timber, PVC and aluminium',
      'Choice of slat sizes',
      'Durable and easy to maintain',
      'Suits modern and traditional interiors',
      'Custom made for a perfect fit',
    ],
    photos: [
      photo('products/venetian-blinds-1', 'White Venetian blinds behind a freestanding bath with ocean views'),
      photo('products/venetian-blinds-2', 'Timber Venetian blinds tilted open to a park and harbour view'),
      photo('products/venetian-blinds-3', 'Venetian blinds on a tall kitchen window seen from the hallway', 998, 1330),
      photo('products/venetian-blinds-4', 'Venetian blind on a laundry window beneath a chandelier'),
    ],
  },
  {
    name: 'Curtains',
    slug: 'curtains',
    image: 'curtains',
    alt: 'Floor-length sheer linen curtains in a study beside built-in bookshelves',
    height: 1203,
    tagline: 'Softness, warmth and texture, tailored to every window.',
    intro: [
      'Custom-made curtains balance style, privacy and function, whether you\'re creating a luxurious living space, a restful bedroom or a contemporary open-plan home.',
      'Choose from S-Fold (wave), double or triple pinch pleat, inverted pleat, eyelet and pencil pleat headings, on discreet ceiling tracks or decorative rods, lined or unlined. Motorised tracks are available too.',
    ],
    optionsHeading: 'Fabric options',
    options: [
      { name: 'Sheer', text: 'Filters light and softens glare while keeping rooms bright and airy. Ideal for living and dining areas.' },
      { name: 'Light filtering', text: 'Diffuses daylight with more privacy for a warm, inviting feel.' },
      { name: 'Blockout', text: 'Maximum privacy and light control for bedrooms, nurseries and media rooms, with added insulation.' },
    ],
    benefits: [
      'Soft, elegant appearance',
      'Sheer, light-filtering and blockout fabrics',
      'Choice of lining and heading styles',
      'Improved insulation and acoustic comfort',
      'Motorised tracks available',
      'Custom made for a perfect fit',
    ],
    photos: [
      photo('products/curtains-1', 'S-Fold sheer curtains behind a timber dining table', 1200, 1600),
      photo('products/curtains-2', 'Floor-length sheer linen curtains in a study beside built-in bookshelves', 1085, 1450),
      photo('products/curtains-3', 'Sheer curtains drawn back from a bedroom window with a water view'),
      photo('products/curtains-4', 'Sheer curtains around a curved living room with herringbone floors', 1200, 1600),
      photo('products/curtains-5', 'Sheer wave-fold curtains along a bedroom window wall', 1200, 1600),
      photo('products/curtains-6', 'Sheer linen curtains framing an arched window with a garden view', 1048, 1397),
      photo('products/curtains-7', 'White curtains with a contrasting linen band at the hem', 1200, 1072),
      photo('products/curtains-8', 'Close-up of layered sheer and linen curtains on a ceiling track', 1200, 1600),
      photo('products/curtains-9', 'Sheer curtains in a family room beside plantation shutters', 1200, 900),
    ],
  },
];

export const productBySlug = (slug: string) => products.find((product) => product.slug === slug);

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
