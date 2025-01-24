'use client'

import { usePathname } from "next/navigation";
import React from "react";
import floorBg from "@/public/images/floor-bg.png";
import PagesHero from "@/app/components/PagesHero";
import StageSection from "@/app/components/floor/StageSection";
import FloorSection from "@/app/components/floor/FloorSection";

const FloorPlanPage = () => {
  const pathname = usePathname();
  const formattedPathname = pathname.replace("/", "");
  return (
    <main className="pb-28 md:pb-32 lg:pb-60">
      <PagesHero bgImage={floorBg} pageTitle={formattedPathname} />
      <StageSection/>
      <FloorSection/>
    </main>
  );
};

export default FloorPlanPage;
