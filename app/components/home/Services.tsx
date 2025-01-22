import Image from "next/image";
import React from "react";
import modern from "@/public/images/Modern.png";
import floor from "@/public/images/floor.png";
import parking from "@/public/images/parking lot.png";

const Services = () => {
  return (
    <div className=" py-12 bg-havilah-deep-cove ">
      <div className="flex flex-col md:flex-row justify-center gap-5 px-8 md:px-0 md:justify-around text-white">
        <div className="text-center flex gap-2">
          <div className="w-12 h-12">
            <Image src={modern} alt="Ultra Modern Facilities" />
          </div>
          <h3 className="text-[16px] font-[500] font-robotoSlab mt-auto">
            ULTRA MODERN FACILITIES
          </h3>
        </div>
        <div className="text-center flex gap-2">
          <div className="w-12 h-12">
            <Image src={floor} alt="1K Capacity" />
          </div>
          <h3 className="text-[16px] font-[500] font-robotoSlab mt-auto">
            1K CAPACITY
          </h3>
        </div>
        <div className="text-center flex gap-2">
          <div className="w-12 h-12">
            <Image src={parking} alt="Parking Available" />
          </div>
          <h3 className="text-[16px] font-[500] font-robotoSlab mt-auto">
            PARKING AVAILABLE
          </h3>
        </div>
      </div>
      <button className="flex mx-auto mt-12 md:mt-9 text-[14px] leading-[21px] uppercase font-[600] font-robotoSlab text-white bg-havilah-whiskey p-3 rounded-sm">
        CHECK AVAILABILITY
      </button>
    </div>
  );
};

export default Services;
