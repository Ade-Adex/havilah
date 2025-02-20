import React from "react";
import VisionMissionCard from "./VisionMissionCard";

const VisionMissionSection = () => (
  <div id="vision-mission" className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 scroll-mt-[100px]">
    <VisionMissionCard
      title="OUR VISION"
      text="To be the premier destination for all events, known for our exceptional spaces, innovative services, and the ability to make every occasion truly memorable."
      bgColor="bg-havilah-deep-cove"
    />
    <VisionMissionCard
      title="OUR MISSION"
      text="To create unforgettable experiences with a versatile venue, exceptional service, and a commitment to excellence."
      bgColor="bg-havilah-whiskey"
    />
  </div>
);

export default VisionMissionSection;
