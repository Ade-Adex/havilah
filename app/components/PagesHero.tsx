"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";


interface PagesHeroProps {
  bgImage: StaticImageData;
  pageTitle: string;
}

const PagesHero: React.FC<PagesHeroProps> = ({ bgImage, pageTitle }) => {
  return (
    <div className="relative w-full h-[180px] lg:h-[unset] lg:max-h-[296px]">
      {/* Render the image */}
      <Image
        src={bgImage}
        alt="About Hero"
        objectFit="cover"
        priority
        className="z-[-1] h-full" // Optional: If you need other elements to overlay
      />
      {/* Text overlay or additional content */}
      <div className="absolute top-[50%] lg:top-[50%] left-[10%] flex flex-col gap-5 text-white text-[14px] md:text-[18px] font-[500] font-robotoSlab">
        <h1 className="text-2xl md:text-5xl font-bold font-robotoSlab capitalize">
          {pageTitle}
        </h1>
        <div className="flex gap-3">
          <h6 className="text-havilah-whiskey">Home</h6> / <h6>{pageTitle}</h6>
        </div>
      </div>
    </div>
  );
};

export default PagesHero;
