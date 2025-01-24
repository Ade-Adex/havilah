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
      <div className="inline-block relative">
        <AboutCard
          imageSrc={space}
          title="Versatile Event Space"
          content="We offer a space that can be tailored to different event types, such as weddings, corporate functions, parties, and conferences."
        />

        {/* lines below space card */}

        <div className="absolute lg:top-[240px] xl:top-[260px] left-[70%] flex items-center w-[300px]">
          {/* left vertical line */}
          <div className="lg:h-[50px] xl:h-[70px] w-[2px] bg-[#1C1A47]"></div>
          {/* left top circle */}
          <div className="w-[12px] h-[12px] rounded-full bg-[#1C1A47] absolute top-[-10%] left-[-5px]"></div>
          {/* bottom circle */}
          <div className="w-[12px] h-[12px] rounded-full bg-[#1C1A47] absolute top-[90%] left-[-5px]"></div>
          <div className="flex-1 h-[2px] bg-[#1C1A47] lg:mt-[17%] xl:mt-[25%]"></div>
        </div>
      </div>

      
      <div className="relative w-[40%] flex items-center justify-center">
        
        <div className="absolute top-[-5px] left-[60%] flex items-center w-[300px]">
          {/* left vertical line */}
          <div className="lg:h-[50px] xl:h-[70px] w-[2px] bg-[#1C1A47] absolute left-[6px] top-[50%]"></div>
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
        <Image
          src={centeredCardImage}
          alt="Centered Event Image"
          className="object-cover lg:mt-[-30px] xl:mt-[0] lg:max-w-[280px] xl:max-w-[358px]"
          priority
        />

        <Image
          src={CardImage}
          alt="Centered Event Image"
          className="w-full h-auto object-cover rounded-lg absolute top-16"
          priority
        />
      </div>

      <div className="inline-block mt-[5%]">
        <AboutCard
          imageSrc={location}
          title="Prime Location"
          content="The convenience of our location, whether it’s in the heart of the city, close to transportation hubs, surrounded by scenic views."
        />
      </div>
    </div>

    <div className="mt-[120px] ml-[55%] relative">
      <AboutCard
        imageSrc={waiter}
        title="On-Site Catering"
        content="Premier on-site catering service dedicated to delivering exceptional culinary experiences for every occasion. Founded by our CEO, our business prides itself on crafting delicious, customized menus,"
      />

      {/* Line with dots */}
      <div className="absolute top-[50%] left-[-50%] flex items-center w-[300px]">
        {/* Left vertical line */}
        <div className="h-[50px] w-[2px] bg-[#1C1A47]"></div>
      </div>
    </div>
  </main>
);

export default EventSpaceAndLocationSection;
