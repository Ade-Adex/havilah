import React from "react";
import Image, { StaticImageData } from "next/image";

interface PagesHeroProps {
  bgImage: StaticImageData;
  pageTitle: string;
}

const PagesHero: React.FC<PagesHeroProps> = ({ bgImage, pageTitle }) => {
  return (
    <div className="relative w-full h-[160px] md:h-[180px] lg:h-[unset] lg:max-h-[296px]">
      {/* Background image */}
      <Image
        src={bgImage}
        alt={`${pageTitle} header image`}
        style={{ objectFit: "fill", objectPosition: "center" }}
        // priority
        placeholder="blur"
        className="z-[-1] w-full h-full"
        sizes="100vw" // Adjust sizes as needed
      />
      {/* Overlay text */}
      <div className="absolute top-3/4 left-[10%] transform -translate-y-1/2 flex flex-col gap-3 md:gap-5 text-white text-[14px] md:text-[18px] font-[500] font-robotoSlab">
        <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold font-robotoSlab capitalize">
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
