import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const ReachUs: React.FC = () => {
  return (
    <div className="mb-10 lg:mb-0 lg:max-w-[224px] font-robotoSlab text-[12px] md:text-[15px] md:leading-[19.76px]">
      <h4 className="font-bold mb-5">Reach Us</h4>
      <p className="mb-[24px] font-[400] font-montserrat">
        We&apos;re here to help make your event extraordinary! Whether you have
        questions or need assistance with planning, we&apos;re here to support you.
      </p>
      <ul className="flex flex-col gap-5">
        <li className="relative font-[400] text-[11px] md:text-[14px]">
          <SlLocationPin className="absolute top-0" size={24} />
          <div className="ml-8">
            Beside Adeyi Filling Station, Orogun Area, Iresa Road, Ogbomoso, Oyo State
          </div>
        </li>
        <li className="relative font-[400] text-[11px] md:text-[14px]">
          <FaRegEnvelope className="absolute top-0" size={24} />
          <div className="ml-8">
            <a href="mailto:admin@havilaheventsplace.com" className="hover:underline">
              admin@havilaheventsplace.com
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
  );
};

export default ReachUs;
