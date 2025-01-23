import React from "react";

interface VisionMissionCardProps {
  title: string;
  text: string;
  bgColor: string;
}

const VisionMissionCard: React.FC<VisionMissionCardProps> = ({
  title,
  text,
  bgColor,
}) => {
  return (
    <div
      className={`${bgColor} px-5 pt-[25px] pb-[55px] lg:pt-[55px] lg:px-[70px] max-h-[480px] text-white font-robotoSlab font-semibold`}
    >
      <h4 className="text-[18px] md:text-[20px] mb-3">{title}</h4>
      <div className="text-[20px] md:text-[32px]">{text}</div>
    </div>
  );
};

export default VisionMissionCard;
