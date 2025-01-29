//  /cache/useGalleryCache.ts


import { get, set } from "idb-keyval";
import { Gallery } from "@/app/types/gallery";
import { fetchGallery } from "@/sanity/services/galleryServices";

const GALLERY_CACHE_KEY = "galleryData";

export const getGalleryData = async (): Promise<Gallery[]> => {
  try {
    if (typeof window === "undefined") {
      throw new Error("window is not defined, skipping cache retrieval.");
    }

    // Get cached data first
    const cachedData = await get<Gallery[]>(GALLERY_CACHE_KEY);
    
    if (Array.isArray(cachedData) && cachedData.length > 0) {
      console.log("✅ Loaded gallery data from IndexedDB:", cachedData);

      // Check if the page was reloaded by casting to PerformanceNavigationTiming
      const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
      const isReload = navEntries.length > 0 && navEntries[0].type === "reload";

      if (isReload) {
        fetchGallery()
          .then(async (fetchedData) => {
            if (Array.isArray(fetchedData)) {
              await set(GALLERY_CACHE_KEY, fetchedData);
              console.log("🔄 Updated gallery cache after refresh:", fetchedData);
            }
          })
          .catch((error) => console.warn("⚠️ Error fetching new gallery data:", error));
      }

      return cachedData;
    }

    // If no cached data, fetch from API
    const fetchedData = await fetchGallery();

    if (!Array.isArray(fetchedData)) {
      throw new Error("Invalid data format received from API");
    }

    // Store fresh data in cache
    await set(GALLERY_CACHE_KEY, fetchedData);
    console.log("✅ Stored fresh gallery data in IndexedDB.");

    return fetchedData;
  } catch (error) {
    console.error("❌ Error fetching gallery data:", error);
    throw new Error("Failed to get gallery data from cache or API");
  }
};
