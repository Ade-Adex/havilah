"use client";

import React from "react";
import Image from "next/image";
import useInView from "@/app/hooks/useInView";
import { MediaProps } from "./MediaModal";

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
      role="button"
      tabIndex={0}
      onClick={() => openModal({ type: "image", src: image, description })}
      onKeyDown={(e) =>
        e.key === "Enter" && openModal({ type: "image", src: image, description })
      }
      className={`relative w-full h-full overflow-hidden transition-all duration-700 ease-out transform cursor-pointer focus:outline-none ${
        isInView ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 rotate-3"
      }`}
    >
      <Image
        src={image}
        alt={alt}
        width={200}
        height={200}
        style={{ width: "100%", height: "auto" }}
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4AWP4//8/AwAI/AL+NNgAAAABJRU5ErkJggg=="
        loading="lazy"
      />
    </div>
  );
};

export default AnimatedImage;
