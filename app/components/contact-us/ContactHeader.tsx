"use client";

import React from "react";
import Heading from "@/app/components/Heading";
import Line from "@/app/components/Line";

const ContactHeader: React.FC = () => {
  return (
    <>
      <div className="text-center mt-8 lg:mt-24">
        <h3 className="text-[16px] font-semibold mb-3">VENUE INFO</h3>
        <p>
          Beside Adeyi Filling Station, Orogun Area, Iresa Road, Ogbomoso, Oyo
          State
        </p>
      </div>
      <div className="text-center mt-6">
        <h3 className="text-[16px] font-semibold mb-3">CONTACT US</h3>
        <p>
          Telephone:{" "}
          <a href="tel:+2348033734820" className="hover:underline">
            +2348033734820
          </a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:hismercy03@gmail.com" className="hover:underline">
            hismercy03@gmail.com
          </a>
        </p>
      </div>
      <div className="mt-8 mb-4 lg:mt-24 lg:mb-12">
        <Heading text="Get in touch" text2="With Us" />
        <Line ClassName="justify-center" />
      </div>
    </>
  );
};

export default ContactHeader;
