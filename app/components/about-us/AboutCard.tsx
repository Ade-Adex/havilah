import Image, { StaticImageData } from "next/image"; // Import StaticImageData type
import React from "react";

interface AboutCardProps {
  imageSrc: StaticImageData; // Correct type for Next.js optimized images
  title: string;
  content: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ imageSrc, title, content }) => {
  return (
    <div className="bg-havilah-card rounded-lg px-3 pt-3 pb-6 font-robotoSlab w-full lg:max-w-[250px] lg:min-h-[150px] xl:max-w-[378px] xl:min-h-[253px]  4xl:min-w-[550px] 4xl:min-h-[350px] 4xl:flex 4xl:flex-col  4xl:justify-center">
      <div className="flex gap-3 mb-3 items-center">
        <div className="w-[35px] h-[35px] xl:w-[50px] mxl:h-[50px] relative">
          <Image
            src={imageSrc}
            alt={title}
            className=""
            width={100}
            height={100}
          />
        </div>
        <span className="text-[16px] xl:text-[20px] text-havilah-deep-cove font-semibold">
          {title}
        </span>
      </div>
      <div className="text-[14px] xl:text-[18px] font-[400] text-[#555555]">{content}</div>
    </div>
  );
};

export default AboutCard;
