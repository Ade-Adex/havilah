import React from "react";
import AboutCard from "./AboutCard";
import Image from "next/image";
import space from "@/public/images/Space.png";
import location from "@/public/images/Location.png";
import waiter from "@/public/images/waiter.png";
import centeredCardImage from "@/public/images/Group 1691.png";
import CardImage from "@/public/images/Group 1000004532.png";

const EventSpaceAndLocationSection = () => (
  <main className="pt-[200px] pb-[100px]">
  <div className="flex justify-center px-5 relative">
    <div className="inline-block">
      <AboutCard
        imageSrc={space}
        title="Versatile Event Space"
        content="We offer a space that can be tailored to different event types, such as weddings, corporate functions, parties, and conferences."
      />
    </div>
    <div className="relative w-[40%] flex items-center justify-center">
      <Image
        src={centeredCardImage}
        alt="Centered Event Image"
        className="object-cover max-w-[358px]"
        priority
      />

      <Image
        src={CardImage}
        alt="Centered Event Image"
        className="w-full h-auto object-cover rounded-lg absolute top-16"
        priority
      />
    </div>

    <div className="inline-block">
      <AboutCard
        imageSrc={location}
        title="Prime Location"
        content="The convenience of our location, whether it’s in the heart of the city, close to transportation hubs, surrounded by scenic views."
      />
    </div>
  </div>

    <div className="mt-[120px] ml-[55%]">
      <AboutCard
        imageSrc={waiter}
        title="On-Site Catering"
        content="Premier on-site catering service dedicated to delivering exceptional culinary experiences for every occasion. Founded by our CEO, our business prides itself on crafting delicious, customized menus,"
      />
    </div>

  </main>
);

export default EventSpaceAndLocationSection;
