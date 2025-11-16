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
    <nav className="bg-[#F8F7FC]  shadow-lg sticky top-0 z-50">
      <div className="px-4 md:px-10 lg:px-28 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            alt="Hexagonix"
            width={150}
            height={150}
            priority
            unoptimized
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-md text-[#4A5568] font-semibold relative">
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
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Contact Button (desktop) */}
       <div className="hidden md:block">
          <Link href="/contact">
         <button className="py-2 px-6 bg-gradient-to-tr from-[#57007B] to-[#6675F7] text-white rounded-md hover:opacity-90 transition">
          Contact us
        </button>
           </Link>
        </div>


        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4">
          {navMenuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-medium transition-all duration-300 ${
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
          <button className="mt-4 py-2 px-6 w-fit bg-gradient-to-tr from-[#57007B] to-[#6675F7] text-white rounded-md">
            Contact us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
