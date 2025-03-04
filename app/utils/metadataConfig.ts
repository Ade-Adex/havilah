import type { Metadata } from "next";

const baseMetadata: Metadata = {
  metadataBase: new URL("https://www.havilaheventsplace.com"),
  authors: [{ name: "Havila Event Place", url: "https://www.havilaheventsplace.com" }],
  title: "Havilah Event Place - Premier Event Venue",
  description: "Book and host your weddings, conferences, ceremonies, corporate events, and special events at Havilah Event Place in Ogbomoso. Enjoy elegant spaces and top-tier service for any occasion.",
  keywords: "event venue, wedding hall, conference center, banquet hall, Ogbomoso event venue, Nigerian event venue, party hall, corporate event space, special events",
  openGraph: {
    siteName: "Havilah Event Place",
    locale: "en_US",
    type: "website",
    url: "https://www.havilaheventsplace.com",
    images: [
      {
        url: "https://www.havilaheventsplace.com/images/Havila_Logo.png",
        width: 1200,
        height: 630,
        alt: "Havilah Event Place Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@YourTwitterHandle",
    title: "Havilah Event Place - Premium Event Venue",
    description: "Book the perfect venue for your event in Ogbomoso!",
    images: ["https://www.havilaheventsplace.com/twitter-image.jpg"],
  },
};

const SEO_METADATA: Record<string, Metadata> = {
  home: {
    ...baseMetadata,
    title: "Home | Havilah Event Place",
    description: "Discover the best event venue in Ogbomoso for weddings, corporate events, and special occasions.",
    keywords: "event venue, wedding venue, corporate events, party hall, luxury event space, Ogbomoso venue, Nigerian event venue, celebrations",
    openGraph: { ...baseMetadata.openGraph, title: "Home | Havilah Event Place" },
    twitter: { ...baseMetadata.twitter, title: "Home | Havilah Event Place" },
  },
  aboutUs: {
    ...baseMetadata,
    title: "About Us | Havilah Event Place",
    description: "Learn about our mission, values, and why Havilah Event Place in Ogbomoso is the best choice for your event.",
    keywords: "about Havilah Event Place, event space Ogbomoso, wedding and event services, Nigerian venue, company values",
    openGraph: { ...baseMetadata.openGraph, title: "About Us | Havilah Event Place" },
    twitter: { ...baseMetadata.twitter, title: "About Us | Havilah Event Place" },
  },
  floorPlan: {
    ...baseMetadata,
    title: "Floor Plan | Havilah Event Place",
    description: "Explore our venue layout to plan your perfect wedding, corporate gathering, or celebration in Ogbomoso.",
    keywords: "event space layout, wedding venue design, conference hall plan, event setup, Ogbomoso floor plan",
    openGraph: { ...baseMetadata.openGraph, title: "Floor Plan | Havilah Event Place" },
    twitter: { ...baseMetadata.twitter, title: "Floor Plan | Havilah Event Place" },
  },
  contactUs: {
    ...baseMetadata,
    title: "Contact Us | Havilah Event Place",
    description: "Get in touch with us for event bookings, pricing, availability, and inquiries at our Ogbomoso venue.",
    keywords: "contact Havilah Event Place, event bookings, Ogbomoso venue pricing, venue reservations, Nigerian event venue",
    openGraph: { ...baseMetadata.openGraph, title: "Contact Us | Havilah Event Place" },
    twitter: { ...baseMetadata.twitter, title: "Contact Us | Havilah Event Place" },
  },
  gallery: {
    ...baseMetadata,
    title: "Gallery | Havilah Event Place",
    description: "View stunning images of our beautifully decorated event spaces and past memorable occasions in Ogbomoso.",
    keywords: "event venue photos, wedding hall images, luxury event space gallery, Ogbomoso event pictures, venue portfolio",
    openGraph: { ...baseMetadata.openGraph, title: "Gallery | Havilah Event Place" },
    twitter: { ...baseMetadata.twitter, title: "Gallery | Havilah Event Place" },
  },
};

export default SEO_METADATA;
