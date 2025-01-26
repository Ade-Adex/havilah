// /sanity/services/galleryService.ts

import { Gallery } from "@/types/gallery";
import { client } from "../lib/client";

// Fetch data from Sanity
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

  return await client.fetch(query);
};
