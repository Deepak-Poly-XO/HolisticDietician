import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
    <footer className="z-0 bg-[#D1EFC5] min-h-[60vh] flex flex-col justify-center items-center px-4 py-8 text-black">
      {/* Main Content */}
      <div className="w-full max-w-3xl flex flex-col items-center text-black">
        <div className="flex flex-col items-center">
          <h1
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center"
          >
            HOLISTIC
          </h1>
          <p
            style={{ fontFamily: "Dancing Script, cursive" }}
            className="text-2xl sm:text-3xl md:text-4xl mt-[-10px] text-center"
          >
            Dietitian
          </p>
        </div>
        <nav
          style={{ fontFamily: "spectral, serif" }}
          className="mt-8 w-full flex flex-wrap justify-center gap-x-8 gap-y-4 text-base sm:text-lg"
        >
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/#services">Services</Link>
          <Link href="/contact">Contact Me</Link>
        </nav>
      </div>

      {/* Bottom Bar */}
      <div
        style={{ fontFamily: "spectral, serif" }}
        className="w-full max-w-5xl mt-10 pt-8 border-t border-[#b7d8a7] flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm"
      >
        <div className="text-center md:text-left">
          <a
            href="https://www.flaticon.com/free-icons/good"
            target="_blank"
            rel="noopener noreferrer"
            title="good icons"
            className="underline"
          >
            Good icons created by Freepik - Flaticon
          </a>
        </div>
        <div className="text-center">
          <p>© 2025 Holistic Dietitian. All rights reserved.</p>
        </div>
        <div className="text-center md:text-right">
          <p>
            Website by{" "}
            <a className="underline" href="https://www.linkedin.com/in/deepak-poly-416565236/" rel="noopener noreferrer" target="_blank">
              Deepak Poly
            </a>
          </p>
          <p>
            Inspiration{" "}
            <a className="underline" href="https://hellomagic.io/" rel="noopener noreferrer" target="_blank">
              HelloMagicStudio
            </a>
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
