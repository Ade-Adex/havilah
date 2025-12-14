// types/event.ts

import type { StaticImageData } from "next/image";

export type Event = {
  _id: string
  title: string
  type: string // e.g., "Wedding", "Conference", etc.
  date: string // ✅ ISO format with time (YYYY-MM-DDTHH:mm:ss.sssZ)
  description: string
  status: 'Pending' | 'Completed' | 'Ongoing' | 'Upcoming'
  imageUrl: string
  // imageUrl: string | StaticImageData; // Allow both string and StaticImageData
}



export type EventData = {
  _id: string
  title: string
  type: string // e.g., "Wedding", "Conference", etc.
  date: string // ✅ ISO format with time (YYYY-MM-DDTHH:mm:ss.sssZ)
  description: string
  status: 'Pending' | 'Completed' | 'Ongoing' | 'Upcoming'
  imageUrl: string | StaticImageData // Allow both string and StaticImageData
}
