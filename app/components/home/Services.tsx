import Image from "next/image";
import React from "react";
import modern from "@/public/images/Modern.png";
import floor from "@/public/images/floor.png";
import parking from "@/public/images/parking lot.png"; // Consider renaming this file to "parking-lot.png"

const Services = () => {
  return (
    <div className="py-12 bg-havilah-deep-cove">
      <div className="flex flex-col md:flex-row items-center lg:justify-around gap-5 px-8 lg:px-0 text-white">
        {/* Ultra Modern Facilities */}
        <div className="w-full flex justify-center">
          <div className="w-full flex ml-[15%] md:ml-0 md:justify-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
              <Image
                src={modern}
                alt="Ultra Modern Facilities"
                placeholder="blur"
              />
            </div>
            <h3 className="text-[12px] lg:text-[16px] font-[500] font-robotoSlab mt-auto">
              ULTRA MODERN FACILITIES
            </h3>
          </div>
        </div>

        {/* 1K Capacity */}
        <div className="w-full flex justify-center">
          <div className="w-full flex ml-[15%] md:ml-0 md:justify-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
              <Image
                src={floor}
                alt="1K Capacity"
                placeholder="blur"
              />
            </div>
            <h3 className="text-[12px] lg:text-[16px] font-[500] font-robotoSlab mt-auto">
              1K CAPACITY
            </h3>
          </div>
        </div>

        {/* Parking Available */}
        <div className="w-full flex justify-center">
          <div className="w-full flex ml-[15%] md:ml-0 md:justify-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
              <Image
                src={parking}
                alt="Parking Available"
                placeholder="blur"
              />
            </div>
            <h3 className="text-[12px] lg:text-[16px] font-[500] font-robotoSlab mt-auto">
              PARKING AVAILABLE
            </h3>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <a
          href="https://wa.me/2348033734820"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit mt-12 md:mt-9 text-[12px] lg:text-[14px] leading-[21px] uppercase font-[600] font-robotoSlab text-white bg-havilah-whiskey py-2 px-3 lg:p-3 rounded-sm"
        >
          CHECK AVAILABILITY
        </a>
      </div>
    </div>
  );
};

export default Services;
