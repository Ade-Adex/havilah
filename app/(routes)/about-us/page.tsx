// "use client";

import AboutHero from "@/app/components/about-us/AboutHero";
import CeoMessageSection from "@/app/components/about-us/CeoMessageSection";
import EventSpaceAndLocationSection from "@/app/components/about-us/EventSpaceAndLocationSection";
import FooterSection from "@/app/components/about-us/FooterSection";
import IntroductionSection from "@/app/components/about-us/IntroductionSection";
import VisionMissionSection from "@/app/components/about-us/VisionMissionSection";
import React from "react";


const AboutUsPage = () => {
  return (
    <main className="">
      <AboutHero/>
      <IntroductionSection/>
      <EventSpaceAndLocationSection/>
      <VisionMissionSection/>
      <CeoMessageSection/>
      <FooterSection/>
    </main>
  );
};

export default AboutUsPage;
