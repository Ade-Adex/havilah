import React from "react";

interface SectionTitleProps {
  text: string;
}

const SectionTitle = ({ text }: SectionTitleProps) => {
  return (
    <h4 className="font-[400] text-[18px] md:text-[20px] md:leading-[26.38px] md:tracking-[18%] text-havilah-whiskey">
      {text}
    </h4>
  );
};

export default SectionTitle;
