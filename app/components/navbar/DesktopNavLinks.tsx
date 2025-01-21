import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import ThemeToggle from "./ThemeToggle";
import { NavLinkProps } from "@/app/types/navbarLinks";

interface DesktopNavLinksProps {
  navLinks: NavLinkProps[];
}

const DesktopNavLinks: React.FC<DesktopNavLinksProps> = ({ navLinks }) => {
  const pathname = usePathname(); // Get the current path

  return (
    <div className="hidden md:flex gap-12 items-center relative">
      {navLinks.map((link) => {
        const isActive = pathname === link.path; // Check if the link is active
        return (
          <Link
            key={link.path}
            href={link.path}
            className={`text-[15px] transition duration-200 uppercase ${
              isActive
                ? "text-havilah-whiskey underline underline-offset-4 hover:text-havilah-light-whiskey"
                : "text-white hover:text-slate-300"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
      <button className="uppercase bg-havilah-deep-cove text-white rounded-md text-[15px] py-1 px-2">book now</button>
      <ThemeToggle />
    </div>
  );
};

export default DesktopNavLinks;
