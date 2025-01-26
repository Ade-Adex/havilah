//  /cache/useGalleryCache.ts

import { get, set } from "idb-keyval";
import { Gallery } from "@/app/types/gallery";
import { fetchGallery } from "@/sanity/services/galleryServices";

// Cache key for gallery data
const GALLERY_CACHE_KEY = 'galleryData';

// Get or fetch gallery data from cache or API
export const getGalleryData = async (): Promise<Gallery[]> => {
  try {
    // Try to get cached data from IndexedDB
    const cachedData = await get<Gallery[]>(GALLERY_CACHE_KEY);
    
    // Ensure cachedData is an array before checking length
    if (Array.isArray(cachedData) && cachedData.length > 0) {
      console.log(`Loaded gallery data from IndexedDB:`, cachedData);
      return cachedData;
    }

    // If no cached data, fetch from API
    const fetchedData = await fetchGallery();
    await set(GALLERY_CACHE_KEY, fetchedData); // Store fetched data in IndexedDB
    console.log(`Fetched gallery data from API:`, fetchedData);
    return fetchedData;
  } catch (error) {
    console.error(`Error fetching or caching gallery data:`, error);
    throw new Error(`Failed to get gallery data from cache or API`);
  }
};
