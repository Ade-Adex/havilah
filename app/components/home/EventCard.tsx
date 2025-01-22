'use client'


import React from "react";
import Image from "next/image";
import completed from "@/public/images/complete.png";
import loading from "@/public/images/Loading.png";
import useInView from "@/app/hooks/useInView";
import { Event } from "@/app/types/event/event";
import OngoingIcon from "./OngoingIcon";
import UpcomingIcon from "./UpcomingIcon";

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const { title, type, date, description, status, imageUrl } = event;
  const { ref, isInView } = useInView(0.2);

  // const statusClasses = {
  //   Pending: "text-yellow-500",
  //   Completed: "text-green-500",
  //   Ongoing: "text-blue-500",
  //   Upcoming: "text-purple-500",
  // };

  return (
    <div
      ref={ref}
      className={`bg-white shadow-lg rounded-md overflow-hidden flex flex-col transform transition duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Image */}
      <div className="relative h-[292px] w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Card Content */}
      <div className="p-[15px] flex flex-col flex-1">
        {/* Title */}
        <h2
          className="text-lg font-semibold text-havilah-deep-cove font-robotoSlab line-clamp-2 min-h-[24px] md:min-h-[48px]"
          title={title}
        >
          {title}
        </h2>

        {/* Type and Date */}
        <div className="flex justify-between items-center mt-3">
          <div className="text-[12px] leading-[15.83px] uppercase font-[500] font-robotoSlab text-white bg-havilah-deep-cove p-3 rounded-sm">
            {type}
          </div>
          <div className="flex items-center text-gray-500">
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
            {date}
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-700 flex-1">{description}</p>

        {/* Status */}
        <div className="mt-4 flex items-center">
          <span
            className={`text-sm font-semibold flex items-center text-havilah-deep-cove`}
          >
            {status === "Pending" && (
              <Image src={loading} alt="Pending" className="h-5 w-5 mr-2" />
            )}
            {status === "Completed" && (
              <Image src={completed} alt="Completed" className="h-5 w-5 mr-2" />
            )}
            {status === "Ongoing" && (
              <OngoingIcon className="h-5 w-5 mr-2 text-havilah-deep-cove" />
            )}
            {status === "Upcoming" && (
              <UpcomingIcon className="h-5 w-5 mr-2 text-havilah-deep-cove" />
            )}
            <span className="ml-2">{status}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
