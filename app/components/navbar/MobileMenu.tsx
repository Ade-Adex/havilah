import React from "react";
import Link from "next/link";
import LogoSection from "./LogoSection";
import { NavLinkProps } from "@/app/types/navbarLinks";

interface MobileMenuProps {
  opened: boolean;
  toggle: () => void;
  navLinks: NavLinkProps[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  opened,
  toggle,
  navLinks,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-[#161A27] text-white flex flex-col p-6 z-50 transform transition-all duration-300 ease-in-out md:hidden ${
        opened ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="flex justify-between items-center mb-6 border-b border-gray-600 dark:border-gray-600">
        <LogoSection />
        <button onClick={toggle} className="text-gray-200">
          Close
        </button>
      </div>

      <nav className="flex flex-col space-y-4">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            onClick={toggle}
            className="text-white hover:text-blue-400 transition text-center"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
