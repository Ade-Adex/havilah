// // app/components/HeroHeader.tsx
// "use client";

// import React, { useRef, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { heroSlides } from "@/app/data/heroSlides";
// import HeroSlide from "./HeroSlide";
// import NextArrow from "./NextArrow";
// import PrevArrow from "./PrevArrow";
// import AutoplayButton from "./AutoplayButton";

// const HeroHeader = () => {
//   const [isAutoplay, setIsAutoplay] = useState(true);
//   const sliderRef = useRef<Slider | null>(null);
//   const [progress, setProgress] = useState(0);

//   const toggleAutoplay = () => {
//     if (sliderRef.current) {
//       if (isAutoplay) {
//         sliderRef.current.slickPause();
//       } else {
//         sliderRef.current.slickPlay();
//       }
//       setIsAutoplay(!isAutoplay);
//     }
//   };

//   const handleAfterChange = (currentIndex: number) => {
//     const totalSlides = heroSlides.length;
//     const progressValue = ((currentIndex + 1) / totalSlides) * 100;
//     setProgress(progressValue);
//   };

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: isAutoplay,
//     autoplaySpeed: 5000,
//     nextArrow: <NextArrow onClick={() => {}} />,
//     prevArrow: <PrevArrow onClick={() => {}} />,
//     className: "w-full h-full overflow-hidden",
//     afterChange: handleAfterChange,
//   };

//   return (
//     <header className="relative md:h-screen overflow-hidden">
//       <Slider ref={sliderRef} {...sliderSettings}>
//         {heroSlides.map((slide, index) => (
//           <HeroSlide key={index} slide={slide.image} description={slide.description} index={index} />
//         ))}
//       </Slider>

//       <div className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 w-3/12 md:w-2/12 h-1 bg-white">
//         <div
//           className="h-full bg-havilah-deep-cove"
//           style={{ width: `${progress}%`, transition: "width 0.5s ease" }}
//         ></div>
//       </div>

//       <AutoplayButton isAutoplay={isAutoplay} toggleAutoplay={toggleAutoplay} />
//     </header>
//   );
// };

// export default HeroHeader;





"use client";

import React, { useRef, useState } from "react";
import Head from "next/head";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { heroSlides } from "@/app/data/heroSlides";
import HeroSlide from "./HeroSlide";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import AutoplayButton from "./AutoplayButton";

const HeroHeader = () => {
  const [isAutoplay, setIsAutoplay] = useState(true);
  const sliderRef = useRef<Slider | null>(null);
  const [progress, setProgress] = useState(0);

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

  const handleAfterChange = (currentIndex: number) => {
    const totalSlides = heroSlides.length;
    const progressValue = ((currentIndex + 1) / totalSlides) * 100;
    setProgress(progressValue);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isAutoplay,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    className: "w-full h-full overflow-hidden",
    afterChange: handleAfterChange,
  };

  return (
    <>
      {/* Preload the first slide image */}
      <Head>
        <link
          rel="preload"
          as="image"
          href={heroSlides[0].image.src}
        />
      </Head>
      <header className="relative md:h-screen overflow-hidden">
        <Slider ref={sliderRef} {...sliderSettings}>
          {heroSlides.map((slide, index) => (
            <HeroSlide
              key={index}
              slide={slide.image}
              description={slide.description}
              index={index}
            />
          ))}
        </Slider>

        <div className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 w-3/12 md:w-2/12 h-1 bg-white">
          <div
            className="h-full bg-havilah-deep-cove"
            style={{ width: `${progress}%`, transition: "width 0.5s ease" }}
          ></div>
        </div>

        <AutoplayButton isAutoplay={isAutoplay} toggleAutoplay={toggleAutoplay} />
      </header>
    </>
  );
};

export default HeroHeader;
