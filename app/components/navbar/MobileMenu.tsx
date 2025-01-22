import React from "react";
import Link from "next/link";
import LogoSection from "./LogoSection";
import { NavLinkProps } from "@/app/types/navbarLinks";
import { Burger } from "@mantine/core";

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
      className={`fixed top-0 left-0 w-full h-screen bg-[#161A27] text-white flex flex-col  z-50 transform transition-all duration-300 ease-in-out lg:hidden ${
        opened ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="flex justify-between items-center md:h-28 mb-6 px-6 border-b border-gray-600 dark:border-gray-600">
        <LogoSection />
        <Burger
          opened={opened}
          onClick={toggle}
          color="#fff"
          aria-label="Toggle navigation"
          lineSize={2}
          size="lg"
        />
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
