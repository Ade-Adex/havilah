import type { Metadata } from "next";

const baseMetadata: Metadata = {
  metadataBase: new URL("https://havilaheventsplace.com"),
  authors: [{ name: "Havila Event Place", url: "https://havilaheventsplace.com" }],
  title: "Havila Event Place - Premier Event Venue",
  description: "Book and host your weddings, conferences, ceremonies, corporate events, and special events at Havila Event Place in Ogbomoso. Enjoy elegant spaces and top-tier service for any occasion.",
  keywords: "event venue, wedding hall, conference center, banquet hall, Ogbomoso event venue, Nigerian event venue, party hall, corporate event space, special events",
  openGraph: {
    siteName: "Havila Event Place",
    locale: "en_US",
    type: "website",
    url: "https://havilaheventsplace.com",
    images: [
      {
        url: "https://havilaheventsplace.com/images/Havila_Logo.png",
        width: 1200,
        height: 630,
        alt: "Havila Event Place Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@YourTwitterHandle",
    title: "Havila Event Place - Premium Event Venue",
    description: "Book the perfect venue for your event in Ogbomoso!",
    images: ["https://havilaheventsplace.com/twitter-image.jpg"],
  },
};

const SEO_METADATA: Record<string, Metadata> = {
  home: {
    ...baseMetadata,
    title: "Home | Havila Event Place",
    description: "Discover the best event venue in Ogbomoso for weddings, corporate events, and special occasions.",
    keywords: "event venue, wedding venue, corporate events, party hall, luxury event space, Ogbomoso venue, Nigerian event venue, celebrations",
    openGraph: { ...baseMetadata.openGraph, title: "Home | Havila Event Place" },
    twitter: { ...baseMetadata.twitter, title: "Home | Havila Event Place" },
  },
  aboutUs: {
    ...baseMetadata,
    title: "About Us | Havila Event Place",
    description: "Learn about our mission, values, and why Havila Event Place in Ogbomoso is the best choice for your event.",
    keywords: "about Havila Event Place, event space Ogbomoso, wedding and event services, Nigerian venue, company values",
    openGraph: { ...baseMetadata.openGraph, title: "About Us | Havila Event Place" },
    twitter: { ...baseMetadata.twitter, title: "About Us | Havila Event Place" },
  },
  floorPlan: {
    ...baseMetadata,
    title: "Floor Plan | Havila Event Place",
    description: "Explore our venue layout to plan your perfect wedding, corporate gathering, or celebration in Ogbomoso.",
    keywords: "event space layout, wedding venue design, conference hall plan, event setup, Ogbomoso floor plan",
    openGraph: { ...baseMetadata.openGraph, title: "Floor Plan | Havila Event Place" },
    twitter: { ...baseMetadata.twitter, title: "Floor Plan | Havila Event Place" },
  },
  contactUs: {
    ...baseMetadata,
    title: "Contact Us | Havila Event Place",
    description: "Get in touch with us for event bookings, pricing, availability, and inquiries at our Ogbomoso venue.",
    keywords: "contact Havila Event Place, event bookings, Ogbomoso venue pricing, venue reservations, Nigerian event venue",
    openGraph: { ...baseMetadata.openGraph, title: "Contact Us | Havila Event Place" },
    twitter: { ...baseMetadata.twitter, title: "Contact Us | Havila Event Place" },
  },
  gallery: {
    ...baseMetadata,
    title: "Gallery | Havila Event Place",
    description: "View stunning images of our beautifully decorated event spaces and past memorable occasions in Ogbomoso.",
    keywords: "event venue photos, wedding hall images, luxury event space gallery, Ogbomoso event pictures, venue portfolio",
    openGraph: { ...baseMetadata.openGraph, title: "Gallery | Havila Event Place" },
    twitter: { ...baseMetadata.twitter, title: "Gallery | Havila Event Place" },
  },
};

export default SEO_METADATA;
