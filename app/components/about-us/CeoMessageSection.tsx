import React from "react";
import Image from "next/image";
import Line from "../Line";
import Heading from "../Heading";
import client from "@/public/images/client.png";

const CeoMessageSection = () => (
  <div className="mx-auto xl:max-w-[1099px] grid grid-cols-1 md:grid-cols-2 mt-16 gap-7 px-4 md:px-12 lg:px-16 xl:px-[unset]">
  <div className="w-full relative">
    <Image
      src={client}
      alt="Havilah CEO"
      priority
      className="object-cover"
    />
  </div>
  <div>
    <Heading
      text="WORD FROM "
      text2="OUR CEO"
      className="flex flex-col md:flex-row text-start justify-center md:justify-start"
    />
    <Line ClassName="justify-start" />
    <div className="font-[400] text-[14px] md:text-[16px]">
      Welcome to{" "}
      <span className="text-havilah-whiskey font-semibold">
        Havilah Events Place,
      </span>{" "}
      where we believe every event is a unique opportunity to create
      lasting memories. As the CEO, I take great pride in leading a team
      that is passionate about delivering exceptional service and
      unforgettable experiences. Our event center was founded on the
      principles of excellence, innovation, and a deep commitment to our
      clients&apos; visions. Whether you are planning an intimate gathering, a
      grand wedding, or a corporate function, our state-of-the-art
      facilities and versatile spaces are designed to meet your needs. But
      it&apos;s not just about the venue—it&apos;s about the experience. We go above
      and beyond to ensure that every detail is perfect, from the initial
      planning stages to the moment your guests walk through the door. Our
      dedicated team works closely with you to understand your vision, and
      we&apos;re here to provide guidance, support, and creative solutions
      to bring that vision to life. We strive to make the planning process
      as seamless as possible, so you can focus on enjoying your special
      day. At Havilah Events Home, we don&apos;t just host events—we
      create experiences that you and your guests will cherish for years
      to come. Thank you for considering us for your special occasion. We
      look forward to the opportunity to serve you and make your event
      truly unforgettable.
    </div>
  </div>
</div>
);

export default CeoMessageSection;
