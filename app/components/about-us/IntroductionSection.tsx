import React from "react";
import Line from "../Line";

const IntroductionSection = () => (
  <div className="lg:max-w-[982px] mx-auto px-5 pt-12">
    <div className="font-robotoSlab text-[14px] md:text-[16px] font-[400]">
      <Line ClassName="justify-start" />
      <h1 className="text-[28px] lg:text-[64px] font-semibold text-havilah-whiskey inline">
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
