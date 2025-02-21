import React from "react";
import Line from "../Line";

const IntroductionSection = () => (
  <div className="px-4 md:px-12 lg:px-16 xl:px-[unset] lg:max-w-[982px] mx-auto pt-12 4xl:pt-72">
    <div className="font-robotoSlab text-[12px] md:text-[16px] font-[400]">
      <Line ClassName="justify-center md:justify-start" />
      <h1 className="text-[28px] lg:text-[50px] xl:text-[64px] font-semibold text-havilah-whiskey inline">
        Havilah Events Place,
      </h1>
      <span>
        {" "}
        where we bring your visions to life with elegance and precision. Our event
        center is a premier destination for hosting weddings, corporate events, social
        gatherings, and more. With a versatile range of beautifully designed spaces and
        state-of-the-art facilities, we cater to events of all sizes and styles. At
        Havilah Events Place, we believe that every event is unique, and our dedicated
        team is committed to ensuring that your special day is nothing short of
        extraordinary.
      </span>
    </div>
  </div>
);

export default IntroductionSection;
