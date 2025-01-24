"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import galleryBg from "@/public/images/gallery-bg.png";
import PagesHero from "@/app/components/PagesHero";
import Heading from "@/app/components/Heading";
import Line from "@/app/components/Line";
import { galleryImages } from "@/app/data/galleryImages";
import Image from "next/image";

const GalleryPage = () => {
  const pathname = usePathname();
  const formattedPathname = pathname.replace("/", "");
  const [selectedCategory, setSelectedCategory] = useState("event"); // Default category

  return (
    <main>
      <PagesHero bgImage={galleryBg} pageTitle={formattedPathname} />
      <div className="py-[75px] px-4 md:px-12 lg:px-16 xl:px-24">
        <Heading
          text="Take a glimpse of our stunning"
          text2="hall and its exceptional features"
          className="justify-start"
        />
        <Line ClassName="justify-center" />

        {/* Category buttons */}
        <div className="flex gap-4 mb-8 justify-center mt-8">
          {galleryImages.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category.category)}
              className={`px-4 py-2 text-[16px] font-[500] capitalize font-robotoSlab leading-[21.1px] ${
                selectedCategory === category.category
                  ? " text-havilah-whiskey underline"
                  : "text-havilah-deep-cove"
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Display images for the selected category */}
        {galleryImages
          .filter((category) => category.category === selectedCategory)
          .map((filteredCategory) => (
            <div key={filteredCategory.category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredCategory.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="relative w-full h-0 pb-[75%] overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`${filteredCategory.category} Image ${imgIndex + 1}`}
                      fill
                      className="object-cover w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};

export default GalleryPage;
