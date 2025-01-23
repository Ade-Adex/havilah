// /app/utils/meatadataConfig.ts

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
};

export default SEO_METADATA;
