"use client";

import React from "react";
import Image from "next/image";
import completed from "@/public/images/complete.png";
import pending from "@/public/images/Loading.png";
import useInView from "@/app/hooks/useInView";
import { Event } from "@/app/types/event/event";
import OngoingIcon from "./OngoingIcon";
import UpcomingIcon from "./UpcomingIcon";
import EventDate from "@/app/components/home/EventDate";

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const { title, type, date, description, status, imageUrl } = event;
  const { ref, isInView } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`bg-white shadow-lg rounded-md overflow-hidden flex flex-col transform transition duration-700 ease-out group ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      aria-labelledby={`event-${title}`}
    >
      {/* Image */}
      <div className="relative h-[200px] md:h-[292px] w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Card Content */}
      <div className="p-[15px] flex flex-col flex-1">
        {/* Title */}
        <h2
          id={`event-${title}`}
          className="text-[14px] md:text-lg font-semibold text-havilah-deep-cove font-robotoSlab line-clamp-2 min-h-[24px] md:min-h-[48px]"
          title={title}
        >
          {title}
        </h2>

        {/* Type and Date */}
        <div className="flex justify-between items-center mt-3">
          <div className="text-[10px] md:text-[12px] md:leading-[15.83px] uppercase font-[500] font-robotoSlab text-white bg-havilah-deep-cove p-2 md:p-3 rounded-sm">
            {type}
          </div>
          <div className="flex items-center text-[12px] md:text-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-6 4h6m-6 0H5a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-6 0H5m6 0v11"
              />
            </svg>
            {/* {new Date(date).toLocaleString("en-US", {
              weekday: "short", // e.g., "Thu"
              month: "short", // e.g., "Jul"
              day: "2-digit", // e.g., "25"
              year: "numeric", // e.g., "2024"
              hour: "2-digit", // e.g., "03"
              minute: "2-digit", // e.g., "30"
              hour12: true, // 12-hour format with AM/PM
            })} */}
            <EventDate date={date} />
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-[12px] md:text-[14px] flex-1">{description}</p>

        {/* Status */}
        <div className="mt-4 flex items-center">
          <span
            className={`text-[10px] md:text-[12px] font-semibold flex items-center text-havilah-deep-cove`}
          >
            {status === 'Pending' && (
              <Image src={pending} alt="Pending" className="h-5 w-5 mr-2" />
            )}
            {status === 'Completed' && (
              <Image src={completed} alt="Completed" className="h-5 w-5 mr-2" />
            )}
            {status === 'Ongoing' && (
              <OngoingIcon className="h-5 w-5 mr-2 text-havilah-deep-cove" />
            )}
            {status === 'Upcoming' && (
              <UpcomingIcon className="h-5 w-5 mr-2 text-havilah-deep-cove" />
            )}
            <span className="ml-2 capitalize">{status}</span>
          </span>
        </div>
      </div>
    </div>
  )
};

export default EventCard;
