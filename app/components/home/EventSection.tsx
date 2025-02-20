"use client";

import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import Line from "../Line";
import EventCard from "./EventCard";
import Rectangle from "@/public/images/Rectangle.png";
import Image from "next/image";
import { getEventsData } from "@/app/cache/useUpcomingEventCache";
import { Event } from "@/app/types/event/event";
const EventSection = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEventsData();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="px-4 md:px-12 lg:px-16 xl:px-24 relative">
      <Heading text="Event " text2="Images" className="flex justify-center" />
      <Line ClassName="justify-center"/>
      <Image
        src={Rectangle}
        alt="Overlay"
        className="absolute top-8 md:top-8 left-0 md:left-24 z-0"
        priority
      />
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-16">
        {(showAll ? events : events.slice(0, 6)).map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div> */}
      {isLoading ? (
        <p className="text-center text-gray-500">Loading events...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-16">
          {(showAll ? events : events.slice(0, 6)).map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      )}
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






// "use client";

// import React, { useState } from "react";
// import dynamic from "next/dynamic";
// import Heading from "../Heading";
// import Line from "../Line";
// import { events } from "@/app/data/eventdata";
// import Rectangle from "@/public/images/Rectangle.png";
// import Image from "next/image";

// // Lazy load the EventCard component with a fallback
// const EventCard = dynamic(() => import("./EventCard"), {
//   loading: () => <p className="text-center">Loading event...</p>,
// });

// const EventSection = () => {
//   const [showAll, setShowAll] = useState(false);

//   return (
//     <div className="px-4 md:px-12 lg:px-16 xl:px-24 relative">
//       <Heading text="Upcoming " text2="Events" className="flex justify-center" />
//       <Line ClassName="justify-center" />
//       <Image
//         src={Rectangle}
//         alt="Overlay"
//         className="absolute top-8 md:top-8 left-0 md:left-24 z-0"
//         priority
//       />

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-16">
//         {(showAll ? events : events.slice(0, 6)).map((event, index) => (
//           <EventCard key={index} event={event} />
//         ))}
//       </div>

//       <button
//         onClick={() => setShowAll(!showAll)}
//         className="flex mx-auto my-[73px] text-[10px] md:text-[12px] md:leading-[15.83px] uppercase font-[500] font-robotoSlab text-white bg-havilah-deep-cove p-3 rounded-sm"
//       >
//         {showAll ? "SHOW LESS" : "VIEW ALL EVENTS"}
//       </button>
//     </div>
//   );
// };

// export default EventSection;
