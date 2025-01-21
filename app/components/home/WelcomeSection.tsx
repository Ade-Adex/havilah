import React from "react";
import Image from "next/image";
import welcomeImage from "@/public/images/welcome-image.png";
import Heading from "../Heading";
import Line from "../Line";
import SectionTitle from "../home/SectionTitle";
import SectionSubTitle from "../home/SectionSubTitle";
import SectionContent from "../home/SectionContent";
import SectionButton from "../home/SectionButton";

const WelcomeSection = () => {
  return (
    <div className="p-4 md:p-12 lg:p-24">
      <Heading text="Welcome to" text2="Havilah Events Place" />
      <Line />
      <section className="flex flex-col md:flex-row items-center mt-16">
        <div className="md:w-1/2">
          <Image
            src={welcomeImage}
            alt="Welcome to Havilah Events Place"
            className="rounded-lg shadow-lg"
            priority
          />
        </div>

        <div className="md:w-1/2 p-8 bg-gray-100 shadow-lg rounded-lg ml-[-20px] z-40">
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
