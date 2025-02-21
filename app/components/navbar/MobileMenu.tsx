import React from "react";
import Link from "next/link";
import LogoSection from "./LogoSection";
import { NavLinkProps } from "@/app/types/navbarLinks";
import { Burger } from "@mantine/core";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-[#161A27] text-white flex flex-col  z-50 transform transition-all duration-300 ease-in-out lg:hidden ${
        opened ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="flex justify-between items-center md:h-28 mb-6 px-4 md:px-12 h-20 border-b border-gray-600 dark:border-gray-600">
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

      <nav className="flex flex-col space-y-4 justify-center items-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.path}
              href={link.path}
              onClick={toggle}
              className={`text-[15px] transition duration-200 uppercase  ${
                isActive
                  ? "text-havilah-whiskey underline underline-offset-4 hover:text-havilah-light-whiskey "
                  : "text-white hover:text-slate-300"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileMenu;
