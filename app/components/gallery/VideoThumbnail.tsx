"use client";

import React, { useState } from "react";
import useInView from "@/app/hooks/useInView";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";
import { MediaProps } from "./MediaModal";

type VideoThumbnailProps = {
  videoSrc: string;
  description: string;
  openModal: (media: MediaProps) => void;
};

const VideoThumbnail = ({
  videoSrc,
  description,
  openModal,
}: VideoThumbnailProps) => {
  const { ref, isInView } = useInView(0.2);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation(); // Prevent modal from opening immediately
    setIsPlaying(true);
  };

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      onClick={() => openModal({ type: "video", src: videoSrc, description })}
      onKeyDown={(e) =>
        e.key === "Enter" &&
        openModal({ type: "video", src: videoSrc, description })
      }
      className={`relative w-full h-full overflow-hidden transition-all duration-700 ease-out transform rounded-xl cursor-pointer focus:outline-none ${
        isInView ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 rotate-3"
      }`}
    >
      {!isPlaying ? (
        <div className="relative">
          <video
            src={videoSrc}
            className="w-full h-[160px] md:h-[200px] object-cover"
            controls={false}
            muted
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <button
              aria-label="Play video"
              className="px-4 py-4 bg-black/80 text-white rounded-full focus:outline-none"
              onClick={handlePlayButtonClick}
            >
              <FaPlay size={16} />
            </button>
          </div>
        </div>
      ) : (
        <ReactPlayer
          url={videoSrc}
          playing
          controls
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
};

export default VideoThumbnail;
