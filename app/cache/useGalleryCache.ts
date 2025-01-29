//  /cache/useGalleryCache.ts


import { get, set } from "idb-keyval";
import { Gallery } from "@/app/types/gallery";
import { fetchGallery } from "@/sanity/services/galleryServices";

// Cache key for gallery data
const GALLERY_CACHE_KEY = "galleryData";
const SESSION_CACHE_KEY = "galleryFetched"; // Key to track page refresh

// Get or fetch gallery data from cache or API
export const getGalleryData = async (): Promise<Gallery[]> => {
  try {
    // Check if the page was refreshed using sessionStorage
    const isPageRefreshed = !sessionStorage.getItem(SESSION_CACHE_KEY);

    if (!isPageRefreshed) {
      // If not refreshed, try to get cached data
      const cachedData = await get<Gallery[]>(GALLERY_CACHE_KEY);

      if (Array.isArray(cachedData) && cachedData.length > 0) {
        console.log("Loaded gallery data from IndexedDB:", cachedData);
        return cachedData;
      }
    }

    // If refreshed or no cached data, fetch from API
    const fetchedData = await fetchGallery();
    await set(GALLERY_CACHE_KEY, fetchedData); // Store fetched data in IndexedDB

    // Mark data as fetched in sessionStorage to prevent unnecessary API calls
    sessionStorage.setItem(SESSION_CACHE_KEY, "true");

    console.log("Fetched gallery data from API:", fetchedData);
    return fetchedData;
  } catch (error) {
    console.error("Error fetching or caching gallery data:", error);
    throw new Error("Failed to get gallery data from cache or API");
  }
};
