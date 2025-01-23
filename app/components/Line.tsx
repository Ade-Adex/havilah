import Image from "next/image";
import React from "react";
import lineImage from "@/public/images/heading_line.png";

interface LineProps {
  ClassName?: string;
}

const Line: React.FC<LineProps> = ({ ClassName }) => {
  return (
    <div className={`flex ${ClassName} items-center mt-4`}>
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
