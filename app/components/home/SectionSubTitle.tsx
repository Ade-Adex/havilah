import React from "react";

interface SectionSubTitleProps {
  text: string;
}

const SectionSubTitle = ({ text }: SectionSubTitleProps) => {
  return (
    <h2 className="font-[600] text-[26px] md:text-[32px] md:leading-[42.2px] text-havilah-deep-cove">
      {text}
    </h2>
  );
};

export default SectionSubTitle;
