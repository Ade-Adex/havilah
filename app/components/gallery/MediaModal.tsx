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

      <div className="relative bg-white rounded-lg overflow-hidden max-w-[95%] md:max-w-2xl lg:max-w-[600px] min-h-[80vh] w-full p-2 shadow-lg">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full z-20"
        >
          <IoClose size={20} />
        </button>

        {/* Media Content */}

        <div className="relative flex justify-center items-center h-[70vh]">
          {/* Blurred background image */}
          <div className="absolute inset-0">
            <Image
              src={media.src}
              alt="Background image"
              fill
              sizes="100vw"
              className="object-cover filter blur-lg"
              priority
            />
          </div>
          {/* Foreground clear image */}
          <div className="relative z-10 w-full h-full">
            {isVideo ? (
              <ReactPlayer
                url={media.src}
                playing
                controls
                width="100%"
                height="100%"
              />
            ) : (
              <Image
                src={media.src}
                alt={media.description || "Media image"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain rounded-md"
                priority
              />
            )}
          </div>
        </div>

        {/* Description */}
        <p
          className="mt-4 text-sm md:text-base text-center line-clamp-5"
          title={media.description}
        >
          {media.description}
        </p>
      </div>
    </div>
  );
};

export default MediaModal;
