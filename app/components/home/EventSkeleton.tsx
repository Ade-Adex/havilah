"use client";

import React from "react";

const EventSkeleton: React.FC = () => {
  return (
    <div
      className="bg-white shadow-lg rounded-md overflow-hidden flex flex-col animate-pulse"
      aria-hidden="true"
    >
      {/* Image Skeleton */}
      <div className="relative h-[200px] md:h-[292px] w-full bg-gray-300" />

      {/* Card Content Skeleton */}
      <div className="p-4 flex flex-col flex-1 space-y-3">
        {/* Title Skeleton */}
        <div className="h-6 bg-gray-300 rounded w-3/4" />

        {/* Type and Date Skeleton */}
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-300 rounded w-1/4" />
          <div className="h-4 bg-gray-300 rounded w-1/4" />
        </div>

        {/* Description Skeleton */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-300 rounded w-full" />
          <div className="h-3 bg-gray-300 rounded w-5/6" />
          <div className="h-3 bg-gray-300 rounded w-4/6" />
        </div>

        {/* Status Skeleton */}
        <div className="h-4 bg-gray-300 rounded w-1/3" />
      </div>
    </div>
  );
};

export default EventSkeleton;
