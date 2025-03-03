"use client";

import React from "react";
import Link from "next/link";
import { footerLinks } from "./footerLinks";

const HotLinks: React.FC = () => {
  // Helper function: if the path contains "#", replace it with "?section="
  const transformPath = (path: string): string => {
    if (path.includes("#")) {
      const [base, section] = path.split("#");
      return `${base}?section=${section}`;
    }
    return path;
  };

  return (
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
            <Link href={transformPath(link.path)}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotLinks;
