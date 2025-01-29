import React from "react";

interface SectionTitleProps {
  text: string;
}

const SectionTitle = ({ text }: SectionTitleProps) => {
  return (
    <h4 className="font-[400] font-robotoSlab text-[16px] md:text-[20px] md:leading-[26.38px] md:tracking-[3px] text-havilah-whiskey">
      {text}
    </h4>
  );
};

export default SectionTitle;
