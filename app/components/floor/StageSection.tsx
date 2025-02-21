import React from "react";
import Heading from "../Heading";
import Line from "../Line";
import Image from "next/image";
import stageImage from "@/public/images/balkon.png";

const StageSection = () => {
  return (
    <div className="py-8 px-4 md:px-12 lg:px-16 xl:px-24 4xl:pt-72">
      <Heading text="Stage" className="" />
      <Line ClassName="justify-center" />
      <div className="relative w-full h-0 pb-[8%] lg:pb-[26.25%] pt-8 lg:pt-24"> {/* Aspect Ratio Container */}
        <Image
          src={stageImage}
          alt="stage"
          className="object-cover object-center w-full"
          priority
        />
      </div>
    </div>
  );
};

export default StageSection;
