import Image, { StaticImageData } from "next/image"; // Import StaticImageData type
import React from "react";

interface AboutCardProps {
  imageSrc: StaticImageData; // Correct type for Next.js optimized images
  title: string;
  content: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ imageSrc, title, content }) => {
  return (
    <div className="bg-havilah-card rounded-lg px-3 pt-3 pb-6 font-robotoSlab lg:max-w-[378px] lg:min-h-[253px]">
      <div className="flex gap-3 mb-3 items-center">
        <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] relative">
          <Image
            src={imageSrc}
            alt={title}
            className=""
            width={100}
            height={100}
          />
        </div>
        <span className="text-[20px] text-havilah-deep-cove font-semibold">
          {title}
        </span>
      </div>
      <div className="text-[15px] md:text-[18px] font-[400] text-[#555555]">{content}</div>
    </div>
  );
};

export default AboutCard;
