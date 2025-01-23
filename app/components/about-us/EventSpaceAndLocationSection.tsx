import React from "react";
import AboutCard from "./AboutCard";
import Image from "next/image";
import space from "@/public/images/Space.png";
import location from "@/public/images/Location.png";
import centeredCardImage from "@/public/images/Group 1691.png";

const EventSpaceAndLocationSection = () => (
  <div className="flex flex-wrap justify-center gap-8 pt-24 pb-16 px-5">
    <AboutCard
      imageSrc={space}
      title="Versatile Event Space"
      content="We offer a space that can be tailored to different event types, such as weddings, corporate functions, parties, and conferences."
    />
    <div className="relative w-full max-w-[400px] sm:max-w-[600px]">
      <Image
        src={centeredCardImage}
        alt="Centered Event Image"
        className="w-full h-auto object-cover rounded-lg"
        priority
      />
    </div>
    <AboutCard
      imageSrc={location}
      title="Prime Location"
      content="The convenience of our location, whether it’s in the heart of the city, close to transportation hubs, surrounded by scenic views."
    />
  </div>
);

export default EventSpaceAndLocationSection;
