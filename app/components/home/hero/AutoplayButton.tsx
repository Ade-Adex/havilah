// app/components/AutoplayButton.tsx
"use client";

import { Pause, Play } from "iconsax-react";

interface AutoplayButtonProps {
  isAutoplay: boolean;
  toggleAutoplay: () => void;
}

const AutoplayButton = ({ isAutoplay, toggleAutoplay }: AutoplayButtonProps) => (
  <button
    onClick={toggleAutoplay}
    className="absolute bottom-5 md:bottom-8 left-10 lg:left-20 transform -translate-x-1/2 bg-black p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center"
  >
    {isAutoplay ? (
      <Pause size="20" color="white" />
    ) : (
      <Play size="20" color="white" />
    )}
  </button>
);

export default AutoplayButton;
