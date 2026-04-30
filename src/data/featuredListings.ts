export interface FeaturedListing {
  name: string;
  subtitle: string;
  snippet: string;
  description: string;
  logo: string;
  email: string;
  phone: string;
  ctaLabel?: string;
}

export const featuredListings: FeaturedListing[] = [
  {
    name: 'YNX Notary',
    subtitle: 'Mobile Notary Services',
    snippet: 'Licensed, bonded, insured, and built for polished document support across DFW.',
    description:
      'Mobile, remote, and electronic notarization for legal, business, and everyday documents with a clean, guided signing experience.',
    logo: '/images/logo.jpg',
    email: 'notary@annalico.com',
    phone: '(972) 900-7147',
    ctaLabel: 'View Listing',
  },
  {
    name: 'Anna Salon Studio',
    subtitle: 'Luxury Hair & Beauty',
    snippet: 'Color, cuts, and client care with a polished studio experience.',
    description:
      'A salon-side featured listing for beauty clients who want elevated service, streamlined booking, and a thoughtful client experience.',
    logo: '/images/llc2.jpg',
    email: 'info@theyenan.com',
    phone: '(972) 900-7147',
    ctaLabel: 'View Listing',
  },
];

const WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000;
const WEDNESDAY_ANCHOR = new Date('2026-01-07T12:00:00');

export function getWeeklyFeaturedListing(date = new Date()): FeaturedListing {
  const diff = date.getTime() - WEDNESDAY_ANCHOR.getTime();
  const cycle = Math.floor(diff / WEEK_IN_MS);
  const index = ((cycle % featuredListings.length) + featuredListings.length) % featuredListings.length;
  return featuredListings[index];
}
