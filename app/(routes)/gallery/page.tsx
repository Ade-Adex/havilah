"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ReactPlayer from "react-player";
import galleryBg from "@/public/images/gallery-bg.png";
import PagesHero from "@/app/components/PagesHero";
import Heading from "@/app/components/Heading";
import Line from "@/app/components/Line";
import { getGalleryData } from "@/app/cache/useGalleryCache";
import { Gallery } from "@/app/types/gallery";
import useInView from "@/app/hooks/useInView";
import GallerySkeleton from "./GallerySkeleton";
import { FaPlay } from "react-icons/fa";
import MediaModal, { MediaProps } from "./MediaModal";

const GalleryPage = () => {
  const pathname = usePathname();
  const formattedPathname = pathname.replace("/", "").toUpperCase();
  const [selectedCategory, setSelectedCategory] = useState("event");
  const [galleryImages, setGalleryImages] = useState<Gallery[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMedia, setSelectedMedia] = useState<MediaProps | null>(null);

  console.log("selected", selectedMedia);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGalleryData();
        setGalleryImages(data);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const openModal = (media: MediaProps) => {
    setSelectedMedia(media);
  };

  return (
    <main>
      <PagesHero bgImage={galleryBg} pageTitle={formattedPathname} />
      <div className="py-[75px] px-4 md:px-12 lg:px-16 xl:px-24">
        <Heading
          text="Take a glimpse of our stunning"
          text2="hall and its exceptional features"
          className="justify-start"
        />
        <Line ClassName="justify-center" />

        {/* Category buttons */}
        <div className="flex gap-4 mb-8 justify-center mt-8">
          {galleryImages.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category.category)}
              className={`px-4 py-2 text-[14px] md:text-[16px] font-[500] capitalize font-robotoSlab leading-[21.1px] ${
                selectedCategory === category.category
                  ? "text-havilah-whiskey underline"
                  : "text-havilah-deep-cove"
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Display media or skeleton for the selected category */}
        {isLoading ? (
          <GallerySkeleton />
        ) : (
          galleryImages
            .filter((category) => category.category === selectedCategory)
            .map((filteredCategory) => (
              <div key={filteredCategory.category}>
                <div
                  className={`grid grid-cols-2 sm:grid-cols-2 ${
                    filteredCategory.images.some((media) =>
                      media.src.asset.url.endsWith(".mp4")
                    )
                      ? "md:grid-cols-3"
                      : "md:grid-cols-3 lg:grid-cols-4"
                  } gap-4`}
                >
                  {filteredCategory.images.map((media, index) => {
                    const mediaSrc = media.src.asset.url;
                    const mediaDescription =
                      media.description || "No description available";

                    if (mediaSrc.endsWith(".mp4")) {
                      return (
                        <VideoThumbnail
                          key={index}
                          videoSrc={mediaSrc}
                          description={mediaDescription}
                          openModal={openModal}
                        />
                      );
                    } else {
                      return (
                        <AnimatedImage
                          key={index}
                          image={mediaSrc}
                          alt={`${filteredCategory.category} Image ${index + 1}`}
                          description={mediaDescription}
                          openModal={openModal}
                        />
                      );
                    }
                  })}
                </div>
              </div>
            ))
        )}

        {/* Display modal when selected media is not null */}
        {selectedMedia && (
          <MediaModal
            media={selectedMedia}
            closeModal={() => setSelectedMedia(null)}
          />
        )}
      </div>
    </main>
  );
};

// Updated Animated Image Component
// Animated Image Component
type AnimatedImageProps = {
  image: string;
  alt: string;
  description: string;
  openModal: (media: MediaProps) => void;
};

const AnimatedImage = ({
  image,
  alt,
  description,
  openModal,
}: AnimatedImageProps) => {
  const { ref, isInView } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`relative w-full h-full overflow-hidden transition-all duration-700 ease-out transform cursor-pointer ${
        isInView
          ? "opacity-100 scale-100 rotate-0"
          : "opacity-0 scale-90 rotate-3"
      }`}
      onClick={() => openModal({ type: "image", src: image, description })}
    >
      <Image
        src={image}
        alt={alt}
        // priority
        width={200} // intrinsic width
        height={200} // intrinsic height
        style={{ width: "100%", height: "auto" }}
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4AWP4//8/AwAI/AL+NNgAAAABJRU5ErkJggg=="
        loading="lazy"
      />
    </div>
  );
};

// Video Thumbnail Component
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

  const handlePlayButtonClick = () => {
    setIsPlaying(true); // Update state when the play button is clicked
  };

  return (
    <div
      ref={ref}
      className={`relative w-full h-full overflow-hidden transition-all duration-700 ease-out transform rounded-xl ${
        isInView
          ? "opacity-100 scale-100 rotate-0"
          : "opacity-0 scale-90 rotate-3"
      }`}
      onClick={() => openModal({ type: "video", src: videoSrc, description })}
    >
      {!isPlaying ? (
        <div className="cursor-pointer">
          <video
            src={videoSrc}
            className="w-full h-[160px] md:h-[200px] object-cover"
            controls={false}
            muted
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <button
              className="px-4 py-4 bg-black/80 text-white rounded-full"
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
      {/* <p className="absolute bottom-4 left-4 text-white">{description}</p> */}
    </div>
  );
};

export default GalleryPage;
