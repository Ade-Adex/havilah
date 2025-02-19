import { client } from "../lib/client";
import { Event } from "@/app/types/event/event";

export const fetchEvents = async (): Promise<Event[]> => {
  const query = `*[_type == "event"]{
    title,
    type,
    date,
    description,
    status,
    "imageUrl": image.asset->url
  }`;

  return await client.fetch(query);
};
