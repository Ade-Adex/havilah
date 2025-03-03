import React from "react";
import Image from "next/image";
import footerBg2 from "@/public/images/footer-bg-2.png";
import ReachUs from "./ReachUs";
import Newsletter from "./Newsletter";
import HotLinks from "./HotLinks";
import SocialMedia from "./SocialMedia";
import FooterBottom from "./FooterBottom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-havilah-footer relative text-white pt-[69px]">
      {/* Footer background image */}
      <div className="absolute top-0 right-0 w-[100%] lg:w-[85%] h-full">
        <Image
          src={footerBg2}
          alt="Footer background"
          fill
          className="object-cover opacity-40"
        />
      </div>
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row justify-between px-5 lg:px-36">
          <ReachUs />
          <Newsletter />
          <HotLinks />
        </div>
        <SocialMedia />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;

