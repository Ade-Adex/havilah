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
      className={`${bgColor} px-4 md:px-12 lg:px-16 xl:px-24 pt-[25px] pb-[55px] lg:pt-[55px] xl:max-h-[480px] text-white font-robotoSlab font-semibold`}
    >
      <h4 className="text-[16px] md:text-[20px] mb-3">{title}</h4>
      <div className="text-[20px] lg:text-[28px] xl:text-[32px]">{text}</div>
    </div>
  );
};

export default VisionMissionCard;
