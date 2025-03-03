"use client";

import Head from "next/head";
import CeoMessageSection from "@/app/components/about-us/CeoMessageSection";
import EventSpaceAndLocationSection from "@/app/components/about-us/EventSpaceAndLocationSection";
import FooterSection from "@/app/components/about-us/FooterSection";
import IntroductionSection from "@/app/components/about-us/IntroductionSection";
import VisionMissionSection from "@/app/components/about-us/VisionMissionSection";
import React, { Suspense } from "react";
import aboutHeroImage from "@/public/images/aboutHero.png";
import PagesHero from "@/app/components/PagesHero";
import aboutBg1 from "@/public/images/aboutBg1.png";
import aboutBg2 from "@/public/images/aboutBg2.png";
import { useScrollToSection } from "@/app/hooks/useScrollToSection";
import { usePathname } from "next/navigation";

const AboutUsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutUsContent />
    </Suspense>
  );
  
};

function AboutUsContent() {
  
  const pathname = usePathname();
  const formattedPathname = pathname.replace("/", "");

  useScrollToSection();

  return (
    <>
      {/* Preload the critical LCP background image */}
      <Head>
        <link rel="preload" as="image" href={aboutBg2.src} />
      </Head>
      <main>
        <PagesHero bgImage={aboutHeroImage} pageTitle={formattedPathname} />
        {/* Background Image Wrapper with preloaded LCP element */}
        <div
          className="bg-fill bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutBg2.src})` }}
        >
          <IntroductionSection />
          <EventSpaceAndLocationSection />
          <VisionMissionSection />
        </div>
        <div
          className="bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutBg1.src})` }}
        >
          <CeoMessageSection />
        </div>
        <FooterSection />
      </main>
    </>
  );
}

export default AboutUsPage;
