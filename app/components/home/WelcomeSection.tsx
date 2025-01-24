'use client'


import React from "react";
import Image from "next/image";
import welcomeImage from "@/public/images/welcome-image.png";
import Heading from "../Heading";
import Line from "../Line";
import SectionTitle from "../home/SectionTitle";
import SectionSubTitle from "../home/SectionSubTitle";
import SectionContent from "../home/SectionContent";
import SectionButton from "../home/SectionButton";
import useInView from "@/app/hooks/useInView";

const WelcomeSection = () => {
  const { ref, isInView } = useInView(0.2);
  return (
    <div
      ref={ref}
      className={`py-8 px-4 md:px-12 lg:px-16 xl:px-24 transform transition duration-700 ease-out ${
        isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      }`}
    >
      <Heading
        text="Welcome to"
        text2="Havilah Events Place"
        className="flex flex-col md:flex-row justify-center"
      />
      <Line ClassName="justify-center"/>
      <section className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-center mt-16">
        <div className="lg:w-1/2">
          <Image
            src={welcomeImage}
            alt="Welcome to Havilah Events Place"
            className="rounded-lg shadow-lg"
            priority
          />
        </div>

        <div className="lg:w-1/2 px-8 py-10 bg-white shadow-lg rounded-tr-lg rounded-br-lg lg:ml-[-20px] z-40">
          <SectionTitle text="About Us" />
          <SectionSubTitle text="The Most Preferred Location" />
          <SectionContent
            highlightedtext="Havilah Events Place "
            text="is a premier venue designed to host a wide range of events, from elegant weddings and corporate meetings to vibrant parties and cultural gatherings. With state-of-the-art facilities, flexible spaces, and a team of experienced professionals, we ensure every event is a memorable success. Conveniently located and equipped with modern & premium amenities, Havilah Events Place offers a perfect blend of style, comfort, and functionality, making it the ideal destination for any occasion. The unforgettable moments come to life in style and sophistication in our ultra-modern facility."
          />
          <SectionButton text="MORE ABOUT US" />
        </div>
      </section>
    </div>
  );
};

export default WelcomeSection;
