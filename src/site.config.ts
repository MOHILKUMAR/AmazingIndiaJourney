// ─────────────────────────────────────────────────────────────
//  CLIENT DETAILS: edit this one file to update the whole site
//  Source: Agra Day Tour Packages brochure 2026–27
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'Agra Day Tour Packages',
  parent: 'Fair India Travel',
  tagline: 'Private, tailor-made journeys since 2009',
  motto: 'The holidays you dream are the holidays we pack.',
  description:
    'Private same-day Taj Mahal tours, Golden Triangle and Rajasthan tour packages from Delhi and Agra. Approved by the Ministry of Tourism, India. Trusted since 2009.',
  // TODO (client): replace these 4 dummy contact details with the real ones
  email: 'info@example.com',
  phone: '+91-00000-00000',
  whatsapp: '910000000000', // digits only, with country code
  address: '123 Sample Road, Agra, Uttar Pradesh, India',
  established: 2009,
  stats: { years: '18+', travellers: '50K+' },
  rating: { score: 4.9, count: '5,000+', source: 'Google' },
  currency: { symbol: 'US$', code: 'USD', perLabel: 'per person' },
  languages: ['English', 'Spanish', 'German', 'French', 'Russian', 'Japanese'],
  social: {
    instagram: '', // TODO
    facebook: '', // TODO
    tripadvisor: '', // TODO
  },
  // Google Apps Script web-app URL for the enquiry form (see google-sheets/README.md)
  leadsEndpoint: import.meta.env.PUBLIC_LEADS_ENDPOINT ?? '',
};

export const categories = [
  {
    id: 'same-day', slug: 'same-day-tours', label: 'Same Day Tours', short: 'Same Day',
    blurb: 'India’s top heritage sites without an overnight stay, perfect for short layovers.',
    heroTitle: 'Same day tours from Delhi',
    heroText: 'See the Taj Mahal, Delhi or Jaipur in a single day with a private AC car, private guide and pickup from your Delhi hotel or the airport.',
    image: '/images/hero.webp',
    seoTitle: 'Same Day Taj Mahal & Delhi Tours from Delhi',
    seoDescription: 'Private same day Taj Mahal, Delhi and Jaipur tours from Delhi by car or superfast train. From US$70 per person, free cancellation up to 24 hours before.',
    faqGroups: ['Booking', 'Taj Mahal & monuments'],
  },
  {
    id: 'golden-triangle', slug: 'golden-triangle-tours', label: 'Golden Triangle Tours', short: 'Golden Triangle',
    blurb: 'Delhi, Agra and Jaipur: the perfect introduction to India.',
    heroTitle: 'Golden Triangle tours',
    heroText: 'Delhi, Agra and Jaipur in 3 to 6 days, with 4 and 5 star hotels, a private car and driver, and local guides in every city.',
    image: '/images/tours/gt-5.webp',
    seoTitle: 'Golden Triangle Tours: Delhi, Agra & Jaipur in 3 to 6 Days',
    seoDescription: 'Private Golden Triangle tour packages covering Delhi, Agra and Jaipur in 3, 4, 5 or 6 days with 4 and 5 star hotels. Reserve with a 15% deposit.',
    faqGroups: ['Booking', 'On tour'],
  },
  {
    id: 'gt-extension', slug: 'golden-triangle-extensions', label: 'Golden Triangle + Extensions', short: 'GT + Extensions',
    blurb: 'Add tigers, lake cities or spiritual Varanasi to the classic route.',
    heroTitle: 'Golden Triangle with extensions',
    heroText: 'The classic Delhi, Agra and Jaipur route plus Ranthambore tiger safaris, Udaipur, Jodhpur or Varanasi, in 8 day private tours.',
    image: '/images/tours/gt-ranthambore.webp',
    seoTitle: 'Golden Triangle Tours with Ranthambore, Udaipur & Varanasi',
    seoDescription: '8 day Golden Triangle tours extended to Ranthambore, Jodhpur and Udaipur, Udaipur or Varanasi. Private car, guides and hotels. Price on request.',
    faqGroups: ['Booking', 'On tour'],
  },
  {
    id: 'rajasthan', slug: 'rajasthan-tours', label: 'Rajasthan Tour Packages', short: 'Rajasthan',
    blurb: 'Forts, deserts and royal heritage: a deeper dive into Rajasthan.',
    heroTitle: 'Rajasthan tour packages',
    heroText: 'Forts, palaces, desert camps and lake cities across Rajasthan, in private 11, 14 and 19 day journeys that start with the Golden Triangle.',
    image: '/images/amber-fort.webp',
    seoTitle: 'Rajasthan Tour Packages: 11, 14 & 19 Day Private Tours',
    seoDescription: 'Private Rajasthan tour packages with forts, palaces and heritage stays across Jaipur, Udaipur, Jodhpur, Jaisalmer and more. Price on request.',
    faqGroups: ['Booking', 'On tour'],
  },
] as const;
export type CategoryId = (typeof categories)[number]['id'];
export const categoryHref = (id: string) => `/${categories.find((c) => c.id === id)?.slug ?? 'tours'}/`;

export const nav = [
  { label: 'Same Day Tours', href: '/same-day-tours/' },
  { label: 'Golden Triangle', href: '/golden-triangle-tours/' },
  { label: 'GT + Extensions', href: '/golden-triangle-extensions/' },
  { label: 'Rajasthan', href: '/rajasthan-tours/' },
  { label: 'All Tours', href: '/tours/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const whatsappLink = (text = 'Hi! I would like to know more about your India tours.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
