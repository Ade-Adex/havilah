import React from "react";

const GallerySkeleton = () => {
  const skeletonItems = Array.from({ length: 8 });
  return (
    <div>
      {/* Skeleton Buttons */}
      <div className="flex gap-4 mb-8 justify-center mt-8">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="px-8 py-2 bg-gray-300 animate-pulse rounded-full h-[40px]"
          ></div>
        ))}
      </div>

      {/* Skeleton Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skeletonItems.map((_, index) => (
          <div
            key={index}
            className="w-full h-[200px] bg-gray-300 animate-pulse rounded-lg"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GallerySkeleton;
