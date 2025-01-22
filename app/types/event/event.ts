// types/event.ts

import type { StaticImageData } from "next/image";

export type Event = {
  title: string;
  type: string; // e.g., "Wedding", "Conference", etc.
  date: string; // ISO format or human-readable date
  description: string;
  status: "Pending" | "Completed" | "Ongoing" | "Upcoming";
  imageUrl: string | StaticImageData; // Allow both string and StaticImageData
};
