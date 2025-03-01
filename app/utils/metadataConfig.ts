// /app/utils/metadataConfig.ts

import type { Metadata } from "next";

const baseMetadata: Metadata = {
  metadataBase: new URL("https://havilaheventsplace.com"),
  authors: [{ name: "Havila Event Place", url: "https://havilaheventsplace.com" }],
  title: "Havila Event Place - Premier Event Venue",
  description: "Book and Host your weddings, conferences, ceremonies, corporate events and special events at Havila Event Place. The perfect venue for your event with Elegant spaces, great service!",
  openGraph: {
    siteName: "Havila Event Place",
    locale: "en_US",
    type: "website",
    url: "https://havilaheventsplace.com",
    images: [
      {
        url: "https://havilaheventsplace.com/images/Havila_Logo.png", // ✅ Fixed absolute URL
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
    description: "Book the perfect venue for your event in Lagos!",
    images: ["https://havilaheventsplace.com/images/twitter-image.jpg"], 
  },
};



const SEO_METADATA: Record<string, Metadata> = {
  home: {
    ...baseMetadata,
    title: "Home | Havila Event Place",
    description: "Discover the perfect venue for your events in Lagos at Havila Event Place.",
    openGraph: { ...baseMetadata.openGraph, title: "Home | Havila Event Place" },
    twitter: { ...baseMetadata.twitter, title: "Home | Havila Event Place" },
  },
  aboutUs: {
    ...baseMetadata,
    title: "About Us | Havila Event Place",
    description: "Learn about our mission, values, and why Havila Event Place is the best venue choice.",
    openGraph: { ...baseMetadata.openGraph, title: "About Us | Havila Event Place" },
    twitter: { ...baseMetadata.twitter, title: "About Us | Havila Event Place" },
  },
  floorPlan: {
    ...baseMetadata,
    title: "Floor Plan | Havila Event Place",
    description: "Explore the layout of our event venue to plan your perfect event.",
    openGraph: { ...baseMetadata.openGraph, title: "Floor Plan | Havila Event Place" },
    twitter: { ...baseMetadata.twitter, title: "Floor Plan | Havila Event Place" },
  },
  contactUs: {
    ...baseMetadata,
    title: "Contact Us | Havila Event Place",
    description: "Reach out for event bookings, pricing, and availability.",
    openGraph: { ...baseMetadata.openGraph, title: "Contact Us | Havila Event Place" },
    twitter: { ...baseMetadata.twitter, title: "Contact Us | Havila Event Place" },
  },
  gallery: {
    ...baseMetadata,
    title: "Gallery | Havila Event Place",
    description: "View stunning images of our event spaces and past events in Lagos.",
    openGraph: { ...baseMetadata.openGraph, title: "Gallery | Havila Event Place" },
    twitter: { ...baseMetadata.twitter, title: "Gallery | Havila Event Place" },
  },
};

export default SEO_METADATA;
