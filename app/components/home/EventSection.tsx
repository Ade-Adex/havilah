"use client";

import React, { useState } from "react";
import Heading from "../Heading";
import Line from "../Line";
import { events } from "@/app/data/eventdata";
import EventCard from "./EventCard";
import Rectangle from "@/public/images/Rectangle.png";
import Image from "next/image";
const EventSection = () => {
  const [showAll, setShowAll] = useState(false); // State to toggle between limited and full list

  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="px-4 lg:px-24 lg:pt-24 relative">
      <Heading text="Upcoming " text2="Events" className="flex justify-center" />
      <Line ClassName="justify-center"/>
      <Image
        src={Rectangle}
        alt="Overlay"
        className="absolute top-8 md:top-8 left-0 md:left-24 z-0"
        priority
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-16">
        {(showAll ? events : events.slice(0, 6)).map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
      <button
        onClick={handleViewAll}
        className="flex mx-auto my-[73px] text-[12px] leading-[15.83px] uppercase font-[500] font-robotoSlab text-white bg-havilah-deep-cove p-3 rounded-sm"
      >
        {showAll ? "SHOW LESS" : "VIEW ALL EVENTS"}
      </button>
    </div>
  );
};

export default EventSection;
