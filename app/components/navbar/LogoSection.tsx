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
      className="rounded-md w-12 h-12 md:w-16 md:h-16"
    />
  </Link>
);

export default LogoSection;
