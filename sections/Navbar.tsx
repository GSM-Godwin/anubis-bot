"use client";

import Image from "next/image";
import logo from "@/assets/logo.svg";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaBars, FaTimes, FaTwitter, FaTiktok } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="border-white border-2 bg-white bg-opacity-10 w-full flex rounded-full justify-between items-center px-5 py-2" role="navigation">
      <div className="text-white text-[24px] flex items-center">
        <Image src={logo} alt="logo" width={40} height={40} />
        <p>ANUBIS</p>
      </div>

      <div id="navLinks" className="hidden lg:block z-50">
        <ul className="flex md:gap-5 lg:gap-10 text-[18px]">
          <li><a href="/" className="text-white hover:opacity-75 transition cursor-pointer">Home</a></li>
          <li><a href="/documentation" className="text-white/50 hover:opacity-75 transition cursor-pointer">Documentation</a></li>
          <li><a href="/web-bot" className="text-white/50 hover:opacity-75 transition cursor-pointer">Web Bot</a></li>
          <li><a href="/tutorials" className="text-white/50 hover:opacity-75 transition cursor-pointer">Tutorials</a></li>
        </ul>
      </div>

      {/* Desktop Icons */}
      <div className="hidden lg:block">
        <div className="flex gap-3 text-[24px]">
          <RiTelegram2Fill />
          <FaTwitter />
          <FaTiktok className="text-[19px]" />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} aria-expanded={menuOpen} aria-label="Toggle menu">
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-black text-white transform ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } transition-transform ease-in-out duration-300 z-50`}
      >
        <div className="p-5 flex flex-col h-full">
          <div className="self-end">
            <button onClick={toggleMenu} aria-label="Close menu">
              <FaTimes size={24} />
            </button>
          </div>

          <ul className="mt-10 space-y-8 text-[18px]">
            <li><a href="/" className="hover:opacity-75 transition">Home</a></li>
            <li><a href="/documentation" className="hover:opacity-75 transition">Documentation</a></li>
            <li><a href="/web-bot" className="hover:opacity-75 transition">Web Bot</a></li>
            <li><a href="/tutorials" className="hover:opacity-75 transition">Tutorials</a></li>
          </ul>

          <div className="mt-10">
            <div className="flex gap-3 text-[24px]">
              <RiTelegram2Fill />
              <FaTwitter />
              <FaTiktok className="text-[19px]" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
