import React from "react";
import Heading from "../Heading";
import Line from "../Line";
import { events } from "@/app/data/eventdata";
import EventCard from "./EventCard";
import Rectangle from "@/public/images/Rectangle.png";
import Image from "next/image";
const EventSection = () => {
  return (
    <div className="p-4 md:p-12 lg:px-24 lg:pt-24 relative">
      <Heading text="Upcoming " text2="Events" className="flex" />
      <Line />
      <Image
        src={Rectangle}
        alt="Overlay"
        className="absolute top-3 md:top-8 left-14 md:left-24 z-0"
        priority
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-16">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventSection;
