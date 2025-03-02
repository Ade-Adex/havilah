import React from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

export interface MediaProps {
  type: "image" | "video";  
  src: string;             
  description: string;     
}

type MediaModalProps = {
  media: MediaProps;
  closeModal: () => void;
};

const MediaModal = ({ media, closeModal }: MediaModalProps) => {
  const isVideo = media.type === "video";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      {/* Clickable Background (for closing modal) */}
      <div className="absolute inset-0" onClick={closeModal}></div>

      <div className="relative bg-white rounded-lg overflow-hidden max-w-[95%] md:max-w-2xl lg:max-w-4xl max-h-[85vh] w-full p-2 shadow-lg">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full z-10"
        >
          <IoClose size={20} />
        </button>

        {/* Media Content */}
        <div className="flex justify-center items-center max-h-[70vh]">
          {isVideo ? (
            <ReactPlayer url={media.src} playing controls width="100%" height="100%" />
          ) : (
            <Image
              src={media.src}
              alt={media.description || "Media image"}
              width={600}
              height={400}
              className="object-contain"
              priority
            />
          )}
        </div>

        {/* Description */}
        <p className="mt-4 text-sm md:text-base text-center">{media.description}</p>
      </div>
    </div>
  );
};

export default MediaModal;
