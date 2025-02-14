// "use client";

// import React, { useRef, useState } from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import { Pause, Play } from "iconsax-react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
// import { heroSlides } from "@/app/data/heroSlides";

// interface ArrowProps {
//   onClick: React.MouseEventHandler<HTMLDivElement>;
// }

// const HeroHeader = () => {
//   const [isAutoplay, setIsAutoplay] = useState(true);
//   const sliderRef = useRef<Slider | null>(null);
//   const [progress, setProgress] = useState(0);

//   const NextArrow = ({ onClick }: ArrowProps) => (
//     <div
//       className="absolute hidden md:block top-1/2 right-5 z-10 transform -translate-y-1/2 cursor-pointer rounded-full p-2 hover:bg-havilah-footer text-white"
//       onClick={onClick}
//     >
//       <FiChevronsRight size={52}/>
//     </div>
//   );

//   const PrevArrow = ({ onClick }: ArrowProps) => (
//     <div
//       className="absolute hidden md:block top-1/2 left-5 z-10 transform -translate-y-1/2 cursor-pointer rounded-full p-2 hover:bg-havilah-footer text-white"
//       onClick={onClick}
//     >
//       <FiChevronsLeft size={52}/>
//     </div>
//   );

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

//   // const handleBeforeChange = (newIndex: number) => {
//   //   const totalSlides = heroImages.length;
//   //   const progressValue = ((newIndex + 1) / totalSlides) * 100;
//   //   setProgress(progressValue);
//   // };

//   const handleAfterChange = (currentIndex: number) => {
//     const totalSlides = heroSlides.length;
//     const progressValue = ((currentIndex + 1) / totalSlides) * 100;
//     setProgress(progressValue);
//   };
  

//   return (
//     <header className="relative md:h-screen overflow-hidden">
//       <Slider
//         ref={sliderRef}
//         dots={false}
//         infinite
//         speed={500}
//         slidesToShow={1}
//         slidesToScroll={1}
//         autoplay={isAutoplay}
//         autoplaySpeed={5000}
//         nextArrow={<NextArrow onClick={() => {}} />}
//         prevArrow={<PrevArrow onClick={() => {}} />}
//         className="w-full h-full overflow-hidden"
//         afterChange={handleAfterChange}
//         // beforeChange={(_, newIndex) => handleBeforeChange(newIndex)}
//       >
//         {heroSlides.map((slide, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className="w-full h-full overflow-hidden relative"
//           >
//             <Image
//               src={slide.image}
//               alt={`hero ${index}`}
//               className="w-full h-[50vh] md:h-screen"
//               priority
//               height={500}
//               sizes="(max-width: 768px) 50vw, 100vw"
//               style={{ objectFit: "fill", objectPosition: "center"}}
//               placeholder = 'blur'
//             />
//             {/* Centered description */}
//           <span className="absolute inset-0 flex items-center justify-center text-havilah-whiskey font-robotoSlab text-[40px] md:text-[60px] lg:text-[96px] lg:leading-[126.61px] font-semibold">
//             {slide.description}
//           </span>
//           </motion.div>
//         ))}
//       </Slider>

//       <div className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 w-3/12 md:w-2/12 h-1 bg-white">
//         <div
//           className="h-full bg-havilah-deep-cove"
//           style={{ width: `${progress}%`, transition: "width 0.5s ease" }}
//         ></div>
//       </div>

//       <button
//         onClick={toggleAutoplay}
//         className="absolute bottom-5 md:bottom-8 left-10 lg:left-20 transform -translate-x-1/2 bg-black p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center"
//       >
//         {isAutoplay ? (
//           <Pause size="20" color="white" />
//         ) : (
//           <Play size="20" color="white" />
//         )}
//       </button>
//     </header>
//   );
// };

// export default HeroHeader;







// app/components/HeroHeader.tsx
"use client";

import React, { useRef, useState } from "react";
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
    <header className="relative md:h-screen overflow-hidden">
      <Slider ref={sliderRef} {...sliderSettings}>
        {heroSlides.map((slide, index) => (
          <HeroSlide key={index} image={slide.image} description={slide.description} index={index} />
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
  );
};

export default HeroHeader;
