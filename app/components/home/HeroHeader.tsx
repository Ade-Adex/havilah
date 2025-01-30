"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Pause, Play } from "iconsax-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from "@/public/images/hero1.png";
import hero2 from "@/public/images/hero2.png";
import hero3 from "@/public/images/hero3.png";
import hero4 from "@/public/images/hero4.png";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";

interface ArrowProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const HeroHeader = () => {
  const [isAutoplay, setIsAutoplay] = useState(true);
  const sliderRef = useRef<Slider | null>(null);
  const [progress, setProgress] = useState(0);
  const heroImages = [hero1, hero2, hero3, hero4];

  const NextArrow = ({ onClick }: ArrowProps) => (
    <div
      className="absolute hidden md:block top-1/2 right-5 z-10 transform -translate-y-1/2 cursor-pointer rounded-full p-2 hover:bg-havilah-footer text-white"
      onClick={onClick}
    >
      <FiChevronsRight size={52}/>
    </div>
  );

  const PrevArrow = ({ onClick }: ArrowProps) => (
    <div
      className="absolute hidden md:block top-1/2 left-5 z-10 transform -translate-y-1/2 cursor-pointer rounded-full p-2 hover:bg-havilah-footer text-white"
      onClick={onClick}
    >
      <FiChevronsLeft size={52}/>
    </div>
  );

  const toggleAutoplay = () => {
    if (sliderRef.current) {
      if (isAutoplay) {
        sliderRef.current.slickPause();
      } else {
        sliderRef.current.slickPlay();
      }
      setIsAutoplay(!isAutoplay);
    }
  };

  // const handleBeforeChange = (newIndex: number) => {
  //   const totalSlides = heroImages.length;
  //   const progressValue = ((newIndex + 1) / totalSlides) * 100;
  //   setProgress(progressValue);
  // };

  const handleAfterChange = (currentIndex: number) => {
    const totalSlides = heroImages.length;
    const progressValue = ((currentIndex + 1) / totalSlides) * 100;
    setProgress(progressValue);
  };
  

  return (
    <header className="relative md:h-screen overflow-hidden">
      <Slider
        ref={sliderRef}
        dots={false}
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={isAutoplay}
        autoplaySpeed={5000}
        nextArrow={<NextArrow onClick={() => {}} />}
        prevArrow={<PrevArrow onClick={() => {}} />}
        className="w-full h-full"
        afterChange={handleAfterChange}
        // beforeChange={(_, newIndex) => handleBeforeChange(newIndex)}
      >
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-[85vh] md:h-full"
          >
            <Image
              src={image}
              alt={`hero ${index}`}
              className="w-full h-full object-cover object-center"
              priority
              sizes="100vw"
            />
          </motion.div>
        ))}
      </Slider>

      <div className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 w-3/12 md:w-2/12 h-1 bg-gray-300">
        <div
          className="h-full bg-havilah-deep-cove"
          style={{ width: `${progress}%`, transition: "width 0.5s ease" }}
        ></div>
      </div>

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
    </header>
  );
};

export default HeroHeader;
