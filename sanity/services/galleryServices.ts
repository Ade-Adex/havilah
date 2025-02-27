// /sanity/services/galleryService.ts

import { Gallery } from "@/app/types/gallery";
import { client } from "../lib/client";

export const fetchGallery = async (): Promise<Gallery[]> => {
  const query = `*[_type == "gallerySchema"]{
    category,
    images[] {
      src {
        asset -> {
          url
        }
      },
      description
    }
  }`;
  // Here we add Next.js caching options (revalidate every 60 seconds)
  return await client.fetch(query, undefined, { next: { revalidate: 60 } });
};
