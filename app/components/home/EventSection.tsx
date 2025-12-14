"use client";

import React, { useState, Suspense, lazy } from "react";
import Heading from "../Heading";
import Line from "../Line";
import Rectangle from "@/public/images/Rectangle.png";
import Image from "next/image";
import { Event } from "@/app/types/event/event";
import EventSkeleton from "./EventSkeleton";
import { useScrollToSection } from "@/app/hooks/useScrollToSection";

// Lazy load the EventCard component
const LazyEventCard = lazy(() => import("./EventCard"));

type EventSectionProps = {
  events: Event[];
};

const EventSection = ({ events }: EventSectionProps) => {
  const [showAll, setShowAll] = useState(false);
  const handleViewAll = () => setShowAll((prev) => !prev);
  useScrollToSection()

  return (
    <div
      id="events"
      className="px-4 md:px-12 lg:px-16 xl:px-24 relative scroll-mt-[100px]"
    >
      <Heading text="Upcoming " text2="Events" className="flex justify-center" />
      <Line ClassName="justify-center" />
      <Image
        src={Rectangle}
        alt="Overlay"
        className="absolute top-8 md:top-8 left-0 md:left-24 z-0"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-16">
        {(showAll ? events : events.slice(0, 6))
          .slice() // clone array
          .reverse()
          .map((event) => (
            <Suspense
              key={event._id}
              fallback={
                <EventSkeleton/>
              }
            >
              <LazyEventCard event={event} />
            </Suspense>
          ))}
      </div>

      <button
        onClick={handleViewAll}
        className="flex mx-auto my-[73px] text-[10px] md:text-[12px] md:leading-[15.83px] uppercase font-[500] font-robotoSlab text-white bg-havilah-deep-cove p-3 rounded-sm"
      >
        {showAll ? "SHOW LESS" : "VIEW ALL EVENTS"}
      </button>
    </div>
  );
};

export default EventSection;
