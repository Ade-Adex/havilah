import React from "react";
import AboutCard from "./AboutCard";
import Image from "next/image";
import space from "@/public/images/Space.png";
import location from "@/public/images/Location.png";
import waiter from "@/public/images/waiter.png";
import centeredCardImage from "@/public/images/aboutImage.png";

const EventSpaceAndLocationSection = () => (
  <main className="py-8 lg:pt-[200px] lg:pb-[100px] px-4 md:px-12 lg:px-16 xl:px-[unset]">
    <div className="flex flex-col lg:flex-row justify-center relative gap-5">
      <div className="flex items-center justify-center lg:hidden">
        {/* Centered Image */}
        <Image
          src={centeredCardImage}
          alt="Centered Event Image"
          className="object-cover"
          priority
        />
      </div>

      {/* top left About Card */}
      <div className="inline-block relative">
        <AboutCard
          imageSrc={space}
          title="Versatile Event Space"
          content="We offer a space that can be tailored to different event types, such as weddings, corporate functions, parties, and conferences."
        />

        {/* lines below space card */}

        <div className="absolute lg:top-[240px] xl:top-[260px] left-[70%] flex items-center w-[300px] hidden lg:flex">
          {/* left vertical line */}
          <div className="lg:h-[50px] xl:h-[70px] w-[2px] bg-[#1C1A47]"></div>
          {/* left top circle */}
          <div className="w-[12px] h-[12px] rounded-full bg-[#1C1A47] absolute top-[-10%] left-[-5px]"></div>
          {/* bottom circle */}
          <div className="w-[12px] h-[12px] rounded-full bg-[#1C1A47] absolute top-[90%] left-[-5px]"></div>
          <div className="flex-1 h-[2px] bg-[#1C1A47] lg:mt-[17%] xl:mt-[25%]"></div>
        </div>
      </div>

      <div className="relative w-[40%] flex items-center justify-center hidden lg:flex">
        {/* Lines from the centered Image to the Top Right About Card */}

        <div className="absolute top-[-5px] left-[60%] flex items-center w-[300px] ">
          {/* left vertical line */}
          <div className="h-[50px]  w-[2px] bg-[#1C1A47] absolute left-[6px] top-[50%]"></div>
          {/* left bottom circle */}
          <div className="w-[12px] h-[12px] rounded-full bg-[#1C1A47] mx-[1px] absolute left-0 top-[450%]"></div>
          {/* Left top circle */}
          <div className="w-[12px] h-[12px] rounded-full bg-[#1C1A47] mx-[1px]"></div>
          {/* Horizontal line */}
          <div className="flex-1 h-[2px] bg-[#1C1A47]"></div>
          {/* Right top circle */}
          <div className="w-[12px] h-[12px] rounded-full bg-[#1C1A47] mx-[1px]"></div>
          {/* Right vertical line */}
          <div className="lg:h-[50px] xl:h-[70px] w-[2px] bg-[#1C1A47] absolute right-[6px] top-[50%]"></div>
          {/* Right bottom circle */}
          <div className="w-[12px] h-[12px] rounded-full bg-[#1C1A47] mx-[1px] absolute right-[0px] lg:top-[400%] xl:top-[550%]"></div>
        </div>

        {/* Centered Image */}
        <Image
          src={centeredCardImage}
          alt="Centered Event Image"
          className="object-cover"
          priority
        />
      </div>

      {/* Top right About Card */}
      <div className="lg:inline-block lg:mt-[5%]">
        <AboutCard
          imageSrc={location}
          title="Prime Location"
          content="The convenience of our location, whether it’s in the heart of the city, close to transportation hubs, surrounded by scenic views."
        />
      </div>
    </div>

    <div className="lg:px-[unset] mt-5 lg:mt-[2%] lg:ml-[53%]  relative">
      {/* Bottom  */}
      <AboutCard
        imageSrc={waiter}
        title="On-Site Catering"
        content="Premier on-site catering service dedicated to delivering exceptional culinary experiences for every occasion. Founded by our CEO, our business prides itself on crafting delicious, customized menus,"
      />

      {/* lines in front of waiter card */}

      <div className="absolute top-[-12%] left-[-15%] flex items-center lg:w-[70px] xl:w-[100px] hidden lg:flex">
        {/* left vertical line */}
        <div className="lg:h-[140px] xl:h-[140px] w-[2px] bg-[#1C1A47]"></div>
        {/* left top circle */}
        <div className="w-[12px] h-[12px] rounded-full bg-[#1C1A47] absolute lg:top-[-2%] xl:top-[0%] left-[-5px]"></div>
        {/* left bottom circle */}
        <div className="w-[12px] h-[12px] rounded-full bg-[#1C1A47] absolute lg:top-[95%] xl:top-[95%] left-[-5px]"></div>
        {/* horizontal line */}
        <div className="flex-1 h-[2px] bg-[#1C1A47] lg:mt-[200%] xl:mt-[138%]"></div>
        {/* horizontal line right circle */}
        <div className="w-[12px] h-[12px] rounded-full bg-[#1C1A47] absolute lg:top-[95%] xl:top-[95%] left-[94%]"></div>
      </div>
    </div>
  </main>
);

export default EventSpaceAndLocationSection;
