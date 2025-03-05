"use client";

import React from "react";
import Image from "next/image";
import newsletterBgImage from "@/public/images/footer-news-letter-image.png";
import logo from "@/public/images/Havila_Logo.png";

const Newsletter: React.FC = () => {
  return (
    <div className="mb-10 lg:mb-0 lg:w-1/3 flex flex-col items-center">
      <Image src={logo} alt="Logo" className="h-14 w-14 md:h-20 md:w-20 mb-6" />
      <div className="rounded-lg bg-havilah-footer pt-5 pb-16 px-4 relative hidden md:flex flex-col">
        {/* Newsletter background image */}
        <div className="hidden md:block absolute top-0 left-0 md:w-[56%] h-full z-0">
          <Image
            src={newsletterBgImage}
            alt="Newsletter background"
            fill
            className="object-cover opacity-50"
            sizes="(max-width: 768px) 100vw, 56vw"
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-lg font-semibold mb-5 text-center font-robotoSlab leading-[26px] tracking-[5px]">
            Newsletter
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-sm mt-8 relative"
          >
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-l-md text-black cursor-not-allowed"
                disabled
                title="Feature coming soon"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-havilah-deep-cove text-white rounded-r-md cursor-not-allowed"
                disabled
                title="Feature coming soon"
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              * We will keep you informed with all relevant updates and important information.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
