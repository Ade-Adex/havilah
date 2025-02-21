import React from "react";
import footerBg from "@/public/images/about-footerbg.png";

const FooterSection = () => (
  <div
    className="mt-16 bg-cover bg-center h-64 flex items-center justify-center text-center text-white"
    style={{ backgroundImage: `url(${footerBg.src})` }}
  >
    <div className="font-robotoSlab">
      <h2 className="text-xl md:text-2xl font-bold">Book Our Facility Today</h2>
      <p className="mt-2 font-[500] text-[14px] md:text-[18px]">
        Do you want to be a part of our beautiful Havilah family?
      </p>
      <div className="mt-4">
      <a
        href="https://wa.me/2348033734820"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-havilah-whiskey text-white text-[12px] md:text-[14px] font-semibold rounded"
      >
        Book Now!
      </a>

      </div>
    </div>
  </div>
);

export default FooterSection;
