import { get, set } from "idb-keyval";
import { Event } from "../types/event/event";
import { fetchEvents } from "@/sanity/services/upcomingEventServices";

const EVENTS_CACHE_KEY = "eventsData";

export const getEventsData = async (): Promise<Event[]> => {
  try {
    if (typeof window === "undefined") {
      throw new Error("window is not defined, skipping cache retrieval.");
    }

    // Get cached events first
    const cachedData = await get<Event[]>(EVENTS_CACHE_KEY);
    
    if (Array.isArray(cachedData) && cachedData.length > 0) {
      console.log("✅ Loaded events from IndexedDB:", cachedData);

      // Check if the page was reloaded
      const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
      const isReload = navEntries.length > 0 && navEntries[0].type === "reload";

      if (isReload) {
        fetchEvents()
          .then(async (fetchedData) => {
            if (Array.isArray(fetchedData)) {
              await set(EVENTS_CACHE_KEY, fetchedData);
              console.log("🔄 Updated event cache after refresh:", fetchedData);
            }
          })
          .catch((error) => console.warn("⚠️ Error fetching new event data:", error));
      }

      return cachedData;
    }

    // If no cached data, fetch from API
    const fetchedData = await fetchEvents();

    if (!Array.isArray(fetchedData)) {
      throw new Error("Invalid data format received from API");
    }

    // Store fresh data in cache
    await set(EVENTS_CACHE_KEY, fetchedData);
    console.log("✅ Stored fresh event data in IndexedDB.");

    return fetchedData;
  } catch (error) {
    console.error("❌ Error fetching event data:", error);
    throw new Error("Failed to get event data from cache or API");
  }
};
