import React from "react";

interface SectionButtonProps {
  text: string;
}
const SectionButton = ({ text }: SectionButtonProps) => {
  return (
    <div className="mt-6">
      <a
        href="https://wa.me/2348033734820"
        target="_blank"
        rel="noopener noreferrer"
        className="px-2 py-2 bg-havilah-whiskey text-white rounded-sm font-[600] font-robotoSlab text-[12px] lg:text-[16px] md:leading-[21.1px]"
      >
        {text}
      </a>
    </div>
  );
};

export default SectionButton;
