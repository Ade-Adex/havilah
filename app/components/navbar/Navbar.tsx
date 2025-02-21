"use client";

import React, { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";
import navLinks from "./navLinks";
// import ThemeToggle from "./ThemeToggle";
import LogoSection from "./LogoSection";
import DesktopNavLinks from "./DesktopNavLinks";
import MobileMenu from "./MobileMenu";
import "@mantine/core/styles.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [opened, { toggle }] = useDisclosure(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`top-0 left-0 w-full z-50 shadow-lg border-b border-gray-400 dark:border-gray-600 h-20 lg:h-24 xl:h-28 ${
        scrolled ? "fixed bg-[#161A27]" : "absolute "
      }`}
    >
      <div className="mx-auto px-4 md:px-12 lg:px-16 xl:px-24 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo Section */}
          <LogoSection />

          {/* Desktop Navigation Links */}
          <DesktopNavLinks navLinks={navLinks} />

          {/* Mobile Menu */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="https://wa.me/2348033734820"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase bg-havilah-deep-cove text-white rounded-md text-[14px] py-1 px-2"
            >
              book now
            </a>
            <Burger
              opened={opened}
              onClick={toggle}
              color="#fff"
              aria-label="Toggle navigation"
              lineSize={2}
              size="lg"
            />
            {/* <ThemeToggle /> */}
          </div>
        </div>

        {/* Mobile Dropdown */}
        <MobileMenu opened={opened} toggle={toggle} navLinks={navLinks} />
      </div>
    </nav>
  );
};

export default Navbar;
