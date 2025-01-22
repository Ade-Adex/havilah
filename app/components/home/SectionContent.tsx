import React from "react";

interface SectionContentProps {
  text: string;
  highlightedtext: string;
}

const SectionContent = ({ text, highlightedtext }: SectionContentProps) => {
  return (
    <div className={`text-[14px] md:text-[16px]`}>
      <span className="text-havilah-whiskey">{highlightedtext}</span>
      <span className="dark:text-black">{text}</span>
    </div>
  );
};

export default SectionContent;
