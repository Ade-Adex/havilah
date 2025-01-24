"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import galleryBg from "@/public/images/gallery-bg.png";
import PagesHero from "@/app/components/PagesHero";
import Heading from "@/app/components/Heading";
import Line from "@/app/components/Line";
import { galleryImages } from "@/app/data/galleryImages";
import Image, { StaticImageData } from "next/image";
import useInView from "@/app/hooks/useInView";

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
                  ? "text-havilah-whiskey underline"
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
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {filteredCategory.images.map((image, imgIndex) => (
                  <AnimatedImage
                    key={imgIndex}
                    image={image}
                    alt={`${filteredCategory.category} Image ${imgIndex + 1}`}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};

// Animated Image Component
type AnimatedImageProps = {
  image: string | StaticImageData; // Allow both string and StaticImageData
  alt: string;
};

const AnimatedImage = ({ image, alt }: AnimatedImageProps) => {
  const { ref, isInView } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`relative w-full h-full overflow-hidden transition-all duration-700 ease-out transform ${
        isInView
          ? "opacity-100 scale-100 rotate-0"
          : "opacity-0 scale-90 rotate-3"
      }`}
    >
      <Image
        src={image}
        alt={alt}
        priority
        className="object-cover w-full h-full rounded-lg shadow-lg"
      />
    </div>
  );
};


export default GalleryPage;
