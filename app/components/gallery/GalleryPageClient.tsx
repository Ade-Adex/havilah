// /app/gallery/GalleryPageClient.tsx

"use client";

import { useState } from "react";
import React, { Suspense } from "react";

import galleryBg from "@/public/images/gallery-bg.png";
import PagesHero from "@/app/components/PagesHero";
import Heading from "@/app/components/Heading";
import Line from "@/app/components/Line";

import { Gallery } from "@/app/types/gallery";
import GallerySkeleton from "./GallerySkeleton";
import MediaModal, { MediaProps } from "./MediaModal";
import AnimatedImage from "@/app/components/gallery/AnimatedImage";
import VideoThumbnail from "@/app/components/gallery/VideoThumbnail";

type GalleryPageClientProps = {
  galleryImages: Gallery[];
};

const GalleryPageClient = ({ galleryImages }: GalleryPageClientProps) => {
  const [selectedCategory, setSelectedCategory] = useState("events");
  const [selectedMedia, setSelectedMedia] = useState<MediaProps | null>(null);

  const openModal = (media: MediaProps) => setSelectedMedia(media);

  // Define order for categories
  const categoryOrder = ["events", "hall", "videos"];
  const sortedGalleryImages = galleryImages.sort(
    (a, b) =>
      categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)
  );

  return (
    <main>
      <PagesHero bgImage={galleryBg} pageTitle="GALLERY" />
      <section className="py-[75px] px-4 md:px-12 lg:px-16 xl:px-24 4xl:pt-72">
        <Heading
          text="Take a glimpse of our stunning"
          text2="hall and its exceptional features"
          className="justify-start"
        />
        <Line ClassName="justify-center" />

        {/* Category buttons */}
        <nav className="flex gap-4 mb-8 justify-center mt-8" aria-label="Gallery Categories">
          {sortedGalleryImages.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category.category)}
              className={`px-4 py-2 text-[14px] md:text-[16px] font-[500] uppercase font-robotoSlab md:leading-[21.1px] focus:outline-none focus:ring ${
                selectedCategory === category.category
                  ? "text-havilah-whiskey underline"
                  : "text-havilah-deep-cove"
              }`}
            >
              {category.category}
            </button>
          ))}
        </nav>

        {/* Display media for the selected category */}
        {sortedGalleryImages
          .filter((cat) => cat.category === selectedCategory)
          .map((filteredCategory) => (
            <article key={filteredCategory.category}>
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
                      <Suspense key={index} fallback={<GallerySkeleton />}>
                        <VideoThumbnail
                          videoSrc={mediaSrc}
                          description={mediaDescription}
                          openModal={openModal}
                        />
                      </Suspense>
                    );
                  } else {
                    return (
                      <Suspense key={index} fallback={<GallerySkeleton />}>
                        <AnimatedImage
                          image={mediaSrc}
                          alt={`${filteredCategory.category} Image ${index + 1}`}
                          description={mediaDescription}
                          openModal={openModal}
                        />
                      </Suspense>
                    );
                  }
                })}
              </div>
            </article>
          ))}

        {/* Media modal */}
        {selectedMedia && (
          <MediaModal
            media={selectedMedia}
            closeModal={() => setSelectedMedia(null)}
          />
        )}
      </section>
    </main>
  );
};

export default GalleryPageClient;
