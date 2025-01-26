// /app/utils/metadataConfig.ts

import type { Metadata } from "next";

const baseMetadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  authors: [{ name: "Adex", url: "https://example.com" }],
  openGraph: {
    siteName: "Havila Event Place",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/public/images/Havila_Logo.png",
        width: 1200,
        height: 630,
        alt: "Example Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-image.jpg"],
  },
};

const SEO_METADATA: Record<string, Metadata> = {
  home: {
    ...baseMetadata,
    title: "Home | Havila Event Place",
    description: "Welcome to Havila Event Place, your gateway to amazing content.",
    openGraph: {
      ...baseMetadata.openGraph,
      title: "Home | Havila Event Place",
      description: "Welcome to Havila Event Place, your gateway to amazing content.",
    },
    twitter: {
      ...baseMetadata.twitter,
      title: "Home | Havila Event Place",
      description: "Welcome to Havila Event Place, your gateway to amazing content.",
    },
  },
  aboutUs: {
    ...baseMetadata,
    title: "About Us | Havila Event Place",
    description:
      "Learn more about Havila Event Place, our mission, vision, and values.",
    openGraph: {
      ...baseMetadata.openGraph,
      title: "About Us | Havila Event Place",
      description:
        "Learn more about Havila Event Place, our mission, vision, and values.",
    },
    twitter: {
      ...baseMetadata.twitter,
      title: "About Us | Havila Event Place",
      description:
        "Learn more about Havila Event Place, our mission, vision, and values.",
    },
  },
  floorPlan: {
    ...baseMetadata,
    title: "Floor Plan | Havila Event Place",
    description: "Explore the layout of Havila Event Place's venue and facilities.",
    openGraph: {
      ...baseMetadata.openGraph,
      title: "Floor Plan | Havila Event Place",
      description:
        "Explore the layout of Havila Event Place's venue and facilities.",
    },
    twitter: {
      ...baseMetadata.twitter,
      title: "Floor Plan | Havila Event Place",
      description:
        "Explore the layout of Havila Event Place's venue and facilities.",
    },
  },
  contactUs: {
    ...baseMetadata,
    title: "Contact Us | Havila Event Place",
    description: "Get in touch with Havila Event Place for inquiries or bookings.",
    openGraph: {
      ...baseMetadata.openGraph,
      title: "Contact Us | Havila Event Place",
      description:
        "Get in touch with Havila Event Place for inquiries or bookings.",
    },
    twitter: {
      ...baseMetadata.twitter,
      title: "Contact Us | Havila Event Place",
      description:
        "Get in touch with Havila Event Place for inquiries or bookings.",
    },
  },
  gallery: {
    ...baseMetadata,
    title: "Gallery | Havila Event Place",
    description: "View the stunning photos and videos of Havila Event Place.",
    openGraph: {
      ...baseMetadata.openGraph,
      title: "Gallery | Havila Event Place",
      description: "View the stunning photos and videos of Havila Event Place.",
    },
    twitter: {
      ...baseMetadata.twitter,
      title: "Gallery | Havila Event Place",
      description: "View the stunning photos and videos of Havila Event Place.",
    },
  },
};

export default SEO_METADATA;
