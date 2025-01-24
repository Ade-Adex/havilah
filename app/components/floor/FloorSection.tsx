import React from "react";
import Heading from "../Heading";
import Line from "../Line";
import Image from "next/image";
import floorImage from "@/public/images/parter.png";

const FloorSection = () => {
  return (
    <div className="py-8 px-4 md:px-12 lg:px-16 xl:px-24">
      <Heading text="Floor" className="" />
      <Line ClassName="justify-center" />
      <div className="relative w-full h-full pt-16 md:pt-24">
        {" "}
        {/* Aspect Ratio Container */}
        <Image src={floorImage} alt="stage" className="object-cover" priority />
      </div>
    </div>
  );
};

export default FloorSection;
