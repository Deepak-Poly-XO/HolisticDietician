'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={`sticky top-0 z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"} bg-[#D1EFC5] shadow-md h-24 flex justify-between items-center px-6 sm:px-20`}>
      
      {/* Logo Section */}
      <Link href="/" onClick={() => setMenuOpen(false)}>
        <div className="text-black cursor-pointer text-center">
          <h1 style={{ fontFamily: 'Playfair Display, serif' }} className="text-lg sm:text-xl font-medium">HOLISTIC</h1>
          <p style={{ fontFamily: 'Dancing Script, serif' }} className="text-sm sm:text-base font-semibold mt-[-5px]">Dietitian</p>
        </div>
      </Link>

      {/* Desktop Links */}
      <div style={{ fontFamily: 'Spectral, serif' }} className="hidden sm:flex text-black ml-[70px] space-x-6">
        <Link href='/about'>About</Link>
        <Link href='/#services'>Services</Link>
        <Link href='/#testimonials'>Testimonials</Link>
        <Link href='/contact'>Contact</Link>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="sm:hidden text-black flex items-center">
        <button onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Book Button Desktop */}
      <div style={{ fontFamily: 'Spectral, serif' }} className="hidden sm:block text-black">
        <Link href="/contact" className="bg-[#A9FF9C] p-2 rounded-sm px-4 cursor-pointer">Book a Consultation</Link>
      </div>

      {/* Mobile Menu Dropdown */}
      <div style={{ fontFamily: 'Spectral, serif' }}  className={`text-black absolute top-24 left-0 w-full bg-[#D1EFC5] flex flex-col items-center space-y-6 py-6 shadow-md sm:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <Link href="/about" onClick={toggleMenu}>About</Link>
        <Link href="/#services" onClick={toggleMenu}>Services</Link>
        <Link href="/#testimonials" onClick={toggleMenu}>Testimonials</Link>
        <Link href="/contact" onClick={toggleMenu}>Contact</Link>
        <Link href="/contact" onClick={toggleMenu} className="bg-[#A9FF9C] p-2 rounded-sm px-4">Book a Consultation</Link>
      </div>

    </div>
  );
}
