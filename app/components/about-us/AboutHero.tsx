"use client";

import React from "react";
import Image from "next/image"; 
import aboutHeroImage from "@/public/images/aboutHero.png"; 
import { usePathname } from "next/navigation";

const AboutHero = () => {
  const pathname = usePathname();
  const formattedPathname = pathname.replace("/", "");

  return (
    <div className="relative w-full h-[290px] lg:h-[296px]">
      {/* Render the image */}
      <Image
        src={aboutHeroImage}
        alt="About Hero"
        objectFit="cover"
        priority
        className="z-[-1]" // Optional: If you need other elements to overlay
      />
      {/* Text overlay or additional content */}
      <div className="absolute top-[50%] left-32 flex flex-col gap-5 text-white text-[18px] font-[500] font-robotoSlab">
        <h1 className="text-3xl md:text-5xl font-bold font-robotoSlab">
          About Us
        </h1>
        <div className="flex gap-3">
          <h6 className="text-havilah-whiskey">Home</h6> / <h6>{formattedPathname}</h6>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
