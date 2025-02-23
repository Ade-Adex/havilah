"use client";

import CeoMessageSection from "@/app/components/about-us/CeoMessageSection";
import EventSpaceAndLocationSection from "@/app/components/about-us/EventSpaceAndLocationSection";
import FooterSection from "@/app/components/about-us/FooterSection";
import IntroductionSection from "@/app/components/about-us/IntroductionSection";
import VisionMissionSection from "@/app/components/about-us/VisionMissionSection";
import { usePathname } from "next/navigation";
import React from "react";
import aboutHeroImage from "@/public/images/aboutHero.png";
import PagesHero from "@/app/components/PagesHero";
import aboutBg1 from "@/public/images/aboutBg1.png";
import aboutBg2 from "@/public/images/aboutBg2.png";

const AboutUsPage = () => {
  const pathname = usePathname();
  const formattedPathname = pathname.replace("/", "");
  return (
    <main className="">
      <PagesHero bgImage={aboutHeroImage} pageTitle={formattedPathname} />
      {/* Background Image Wrapper */}
      <div 
        className="bg-fill bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutBg2.src})` }}
      >
        <IntroductionSection />
        <EventSpaceAndLocationSection />
      <VisionMissionSection />
      </div>
      <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${aboutBg1.src})` }}>
      <CeoMessageSection />

      </div>
      <FooterSection />
    </main>
  );
};

export default AboutUsPage;
