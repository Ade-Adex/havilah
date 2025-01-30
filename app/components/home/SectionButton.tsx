import React from "react";

interface SectionButtonProps {
  text: string;
}
const SectionButton = ({ text }: SectionButtonProps) => {
  return (
    <button className="mt-6 px-2 py-2 bg-havilah-whiskey text-white rounded-sm font-[600] font-robotoSlab text-[12px] lg:text-[16px] md:leading-[21.1px]">
      {text}
    </button>
  );
};

export default SectionButton;
