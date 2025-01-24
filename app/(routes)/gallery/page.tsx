"use client";

import { usePathname } from "next/navigation";
import React from "react";
import galleryBg from "@/public/images/gallery-bg.png";
import PagesHero from "@/app/components/PagesHero";

const GalleryPage = () => {
  const pathname = usePathname();
  const formattedPathname = pathname.replace("/", "");
  return (
    <main>
      <PagesHero bgImage={galleryBg} pageTitle={formattedPathname} />
    </main>
  );
};

export default GalleryPage;
