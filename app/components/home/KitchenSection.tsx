"use client";

import React from "react";
import Heading from "../Heading";
import Line from "../Line";
import Image from "next/image";
import kitchenImage from "@/public/images/kitchen-image.png";
import SectionTitle from "./SectionTitle";
import SectionSubTitle from "./SectionSubTitle";
import SectionContent from "./SectionContent";
import SectionButton from "./SectionButton";
import useInView from "@/app/hooks/useInView";
import triangle from "@/public/images/triangle.png";

const KitchenSection = () => {
  const { ref, isInView } = useInView(0.2);
  return (
    <div
      id="kitchen"
      ref={ref}
      aria-label="Havilah Kitchen"
      className={`py-8 px-4 md:px-12 lg:px-16 xl:px-24 transform transition duration-700 ease-out ${
        isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="absolute top-0 right-0 w-[100%] lg:w-[100%] h-full">
        <Image
          src={triangle}
          alt="Footer background"
          fill
          className="object-cover opacity-80"
        />
      </div>
      <Heading
        text="Havilah "
        text2="Kitchen"
        className="flex justify-center"
      />
      <Line ClassName="justify-center" />
      <section className="flex flex-col lg:flex-row  gap-y-4 lg:gap-y-0 items-center md:mt-16 4xl:items-stretch">
        <div className="lg:w-1/2 px-8 py-10 bg-white border shadow-lg rounded-lg lg:rounded-tl-lg lg:rounded-bl-lg lg:rounded-none z-40 4xl:flex-1 4xl:my-10 4xl:flex 4xl:flex-col 4xl:justify-center">
          <SectionTitle text="Why Havilah Kitchen" />
          <SectionSubTitle text="Your Event, Our Culinary Excellence" />
          <SectionContent
            highlightedtext="Havilah Kitchen "
            text="is a premier on-site catering service dedicated to delivering exceptional culinary experiences for every occasion. Founded by our CEO , our business prides itself on crafting delicious, customized menus that cater to the unique tastes and needs of our clients. Whether it's a corporate event, wedding, or private party, we combine fresh, high-quality ingredients with professional service to ensure every event is a memorable success."
          />
          <SectionButton
            text="BOOK US"
            href="https://wa.me/2348033734820"
            external
          />
        </div>
        <div className="w-full lg:w-1/2 lg:ml-[-20px] 4xl:ml-[-40px] ">
          <Image
            src={kitchenImage}
            alt="Havilah Kitchen"
            className="md:w-full h-full rounded-lg shadow-lg"
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default KitchenSection;
