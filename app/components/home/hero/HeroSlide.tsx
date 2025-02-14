"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

interface HeroSlideProps {
  image: StaticImageData;
  description: string;
  index: number;
}

const HeroSlide = ({ image, description, index }: HeroSlideProps) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-full h-full overflow-hidden relative"
    >
      <Image
        src={image}
        alt={`hero ${index}`}
        className="w-full h-[50vh] md:h-screen object-cover"
        priority
        height={500}
        sizes="(max-width: 768px) 50vw, 100vw"
        placeholder="blur"
      />
      {/* Full-screen overlay over the image */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Centered description text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-havilah-whiskey font-robotoSlab text-[40px] md:text-[60px] lg:text-[96px] lg:leading-[126.61px] font-semibold text-center">
          {description}
        </span>
      </div>
    </motion.div>
  );
};

export default HeroSlide;
