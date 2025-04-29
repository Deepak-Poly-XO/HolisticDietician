import React from "react";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";

export default function HeroSection() {
  return (
    <div className="bg-backdrop2 rounded-2xl shadow-2xl">
      <div className="z-0  lg:h-[29em] text-black flex flex-col justify-center items-center px-4 py-16">
        <div className="w-full max-w-4xl text-center space-y-6">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            READY TO GET STARTED?
          </h1>
          <h2
            className="text-xl sm:text-2xl md:text-3xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Let's talk about your journey
          </h2>
        </div>

        {/* Optional Scroll Arrow */}
        {/* <div className="mt-10">
          <Link href="#reachout">
            <img src="/down-arrow.png" alt="Go Down" className="w-10 sm:w-12" />
          </Link>
        </div> */}
      </div>
    </div>
  );
}
