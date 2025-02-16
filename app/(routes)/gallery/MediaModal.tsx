import React from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

// Define types for media object
// Define types for media object
export interface MediaProps {
  type: "image" | "video";  // Can be either image or video
  src: string;              // Media source URL
  description: string;      // Description for the media
}


type MediaModalProps = {
  media: MediaProps;            // Use the defined Media type
  closeModal: () => void;
};

const MediaModal = ({ media, closeModal }: MediaModalProps) => {
  const isVideo = media.type === "video";
  const imageSrc = media.src;
  const imageAlt = media.description || "Media image";

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
      onClick={closeModal}
    >
      <div className="relative max-w-4xl max-h-[80vh] p-0 bg-white rounded-lg overflow-hidden">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full z-10"
        >
          <IoClose />
        </button>
        {/* Handle media type: Video or Image */}
        {isVideo ? (
          <ReactPlayer
            url={media.src}
            playing
            controls
            width="100%"
            height="100%"
          />
        ) : (
          <div className="relative w-full h-full max-h-[60vh] overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              layout="intrinsic"
              width={600}  // Set a width that works well for your design
              height={400} // Adjust the height accordingly to maintain aspect ratio
              className="object-contain" // Ensure the image doesn't overflow
              priority
            />
          </div>
        )}
        <p className="mt-4 text-[14px] md:text-[16px] text-center">{media.description}</p>
      </div>
    </div>
  );
};

export default MediaModal;
