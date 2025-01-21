import Image from "next/image";
import React from "react";
import lineImage from "@/public/images/heading_line.png";

const Line = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <Image
        src={lineImage}
        alt="decorative line"
        priority
        className="w-36 md:w-52 lg:w-64 h-auto"
      />
    </div>
  );
};

export default Line;
