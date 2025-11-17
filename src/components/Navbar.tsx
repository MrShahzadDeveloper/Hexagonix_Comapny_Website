"use client";

import Image from "next/image";
import logo from "../assets/logo.png";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navMenuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About us", href: "/about" },
    { name: "Case Studies", href: "/casestudies" },
    { name: "Hire", href: "/hire" },
  ];

  return (
    <nav className="bg-[#F8F7FC] shadow-lg sticky top-0 z-50">
      {/* Main bar */}
      <div className="mx-auto px-4 md:px-10 xl:px-24 py-4 md:py-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={logo}
            alt="Hexagonix"
            width={140}
            height={140}
            priority
            unoptimized
            className="h-auto w-[120px] sm:w-[140px]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm lg:text-md text-[#4A5568] font-semibold">
          {navMenuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative group transition-all duration-300 ${
                  isActive ? "text-[#57007B]" : "text-[#4A5568]"
                }`}
              >
                {item.name}
                {/* Animated bottom border */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-[#57007B] to-[#F76680] transition-all duration-300 origin-left ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Contact Button (desktop) */}
        <div className="hidden md:block flex-shrink-0">
          <Link href="/contact">
            <button className="py-2 px-6 bg-gradient-to-tr from-[#57007B] to-[#6675F7] text-white rounded-md hover:opacity-90 transition text-sm md:text-base">
              Contact us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 flex items-center justify-center p-1"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`
          md:hidden 
          bg-[#F8F7FC] 
          border-t border-gray-200 
          shadow-md 
          overflow-hidden 
          transition-all duration-300 
          ${isOpen ? "max-h-[300px] py-4" : "max-h-0 py-0"}
        `}
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col gap-3">
          {navMenuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-medium text-sm sm:text-base transition-all duration-300 ${
                  isActive
                    ? "text-[#57007B]"
                    : "text-gray-700 hover:text-[#57007B]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Mobile Contact Button */}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="mt-4 py-2 px-6 w-full sm:w-fit bg-gradient-to-tr from-[#57007B] to-[#6675F7] text-white rounded-md text-sm sm:text-base">
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
