import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/Havila_Logo.png";

const LogoSection = () => (
  <Link href="/" className="flex gap-2 items-center">
    <Image
      src={logo}
      alt="Havilah Logo"
      width={72}
      height={72}
      priority
      className="rounded-md w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
    />
  </Link>
);

export default LogoSection;
