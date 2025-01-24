"use client";

import React from "react";
import ContactBg from "@/public/images/contact-bg.png";
import { usePathname } from "next/navigation";
import PagesHero from "@/app/components/PagesHero";

const ContactUaPage = () => {
  const pathname = usePathname();
  const formattedPathname = pathname.replace("/", "");
  return (
    <main>
      <PagesHero bgImage={ContactBg} pageTitle={formattedPathname} />
    </main>
  );
};

export default ContactUaPage;
