import React from "react";
import Image from "next/image";
import newsletterBgImage from "@/public/images/footer-news-letter-image.png";
import footerBg2 from "@/public/images/footer-bg-2.png";
import logo from "@/public/images/Havila_Logo.png";
import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";
import { footerLinks } from "./footerLinks";
import {
  FaRegEnvelope,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-havilah-footer relative text-white pt-[69px]">
      {/* Background Image */}
      <div className="absolute top-0 right-0 w-[100%] lg:w-[85%] h-full">
        <Image
          src={footerBg2}
          alt="Footer background"
          fill
          className="object-cover opacity-40"
        />
      </div>

      <div className=" relative z-10">
        <div className="">
          <div className="flex flex-col lg:flex-row justify-between px-5 lg:px-36">
            {/* Reach Us Section */}
            <div className="mb-10 lg:mb-0 lg:max-w-[224px]  font-robotoSlab text-[12px] md:text-[15px] md:leading-[19.76px]">
              <h4 className="font-bold mb-5">Reach Us</h4>
              <p className="mb-[24px] font-[400] font-montserrat">
                We&apos;re here to help make your event extraordinary! Whether
                you have questions or need assistance with planning, We&apos;re
                here to support you.
              </p>
              <ul className="flex flex-col gap-5">
                <li className="relative font-[400] text-[11px] md:text-[14px]">
                  <SlLocationPin className="absolute top-0" size={24} />
                  <div className="ml-8">
                    Beside Adeyi Filling Station, Orogun Area, Iresa Road,
                    Ogbomoso, Oyo State
                  </div>
                </li>
                <li className="relative font-[400] text-[11px] md:text-[14px]">
                  <FaRegEnvelope className="absolute top-0" size={24} />
                  <div className="ml-8">
                    <a
                      href="mailto:hismercy03@gmail.com"
                      className="hover:underline"
                    >
                      hismercy03@gmail.com
                    </a>
                  </div>
                </li>
                <li className="relative mt-3 font-[400] text-[11px] md:text-[14px]">
                  <FiPhoneCall className="absolute top-0" size={24} />
                  <div className="ml-8">
                    <a href="tel:+2348033734820" className="hover:underline">
                      +2348033734820
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="mb-10 lg:mb-0 lg:w-1/3 flex flex-col items-center">
              <Image src={logo} alt="Logo" className="h-20 w-20 mb-6" />
              <div className="rounded-lg bg-havilah-footer pt-5 pb-16 px-4 relative hidden md:flex">
                <div className="hidden md:block absolute top-0 left-0 md:w-[56%] h-full">
                  <Image
                    src={newsletterBgImage}
                    alt="Footer background"
                    fill
                    className="object-cover opacity-50"
                  />
                </div>
                <h2 className="text-lg font-semibold mb-5 text-center font-robotoSlab leading-[26px] tracking-[5px]">
                  Newsletter
                </h2>
                <form className="w-full max-w-sm mt-12 ">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 px-4 py-2 rounded-l-md text-black"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-havilah-deep-cove text-white rounded-r-md"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    * We will keep you informed with all relevant updates and
                    important information.
                  </p>
                </form>
              </div>
            </div>

            {/* Hot Links Section */}
            <div className="max-w-[250px]">
              <h2 className="text-[14px] md:text-lg font-bold mb-5 font-robotoSlab uppercase">
                Hot Links
              </h2>
              <ul>
                {footerLinks.map((link, index) => (
                  <li
                    key={index}
                    className="font-[400] font-robotoSlab text-[12px] md:text-[14px] mb-3 hover:underline cursor-pointer"
                  >
                    <Link href={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Social Media Section */}
          <div className="flex justify-end py-3 space-x-4 px-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://wa.me/2348033734820"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className=" pt-12 pb-8 flex items-center justify-center border-t border-gray-700">
          <p className="text-[10px] md:text-[12px] font-[300] font-robotoSlab text-gray-400">
            © 2024, Havilah Events Place. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
