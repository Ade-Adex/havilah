import React from "react";

interface SectionSubTitleProps {
  text: string;
}

const SectionSubTitle = ({ text }: SectionSubTitleProps) => {
  return (
    <h2 className="font-[600] font-robotoSlab text-[20px] md:text-[28px] lg:text-[32px] lg:leading-[42.2px] text-havilah-deep-cove">
      {text}
    </h2>
  );
};

export default SectionSubTitle;
