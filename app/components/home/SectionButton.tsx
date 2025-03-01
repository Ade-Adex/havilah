"use client";

import React from "react";
import Link from "next/link";

interface SectionButtonProps {
  text: string;
  href: string;
  external?: boolean;
}

const SectionButton = ({ text, href, external }: SectionButtonProps) => {
  if (external) {
    return (
      <div className="mt-6">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-havilah-whiskey text-white rounded-sm font-semibold font-robotoSlab text-sm lg:text-base md:leading-[21.1px] transition-transform duration-300 hover:scale-105"
        >
          {text}
        </a>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <Link href={href}>
        <button className="px-4 py-2 bg-havilah-whiskey text-white rounded-sm font-semibold font-robotoSlab text-sm lg:text-base md:leading-[21.1px] transition-transform duration-300 hover:scale-105">
          {text}
        </button>
      </Link>
    </div>
  );
};

export default SectionButton;
