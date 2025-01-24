"use client";

import AboutHero from "@/app/components/about-us/AboutHero";
import CeoMessageSection from "@/app/components/about-us/CeoMessageSection";
import EventSpaceAndLocationSection from "@/app/components/about-us/EventSpaceAndLocationSection";
import FooterSection from "@/app/components/about-us/FooterSection";
import IntroductionSection from "@/app/components/about-us/IntroductionSection";
import VisionMissionSection from "@/app/components/about-us/VisionMissionSection";
import { usePathname } from "next/navigation";
import React from "react";
import aboutHeroImage from "@/public/images/aboutHero.png";
import PagesHero from "@/app/components/PagesHero";

const AboutUsPage = () => {
  const pathname = usePathname();
  const formattedPathname = pathname.replace("/", "");
  return (
    <main className="">
      <PagesHero bgImage={aboutHeroImage} pageTitle={formattedPathname} />
      <IntroductionSection />
      <EventSpaceAndLocationSection />
      <VisionMissionSection />
      <CeoMessageSection />
      <FooterSection />
    </main>
  );
};

export default AboutUsPage;
