import React from "react";
import Link from "next/link";

export default function DropSection() {
  return (
    <div className="bg-drop mt-16">
      {/* Top SVG Wave */}
      <div className="overflow-hidden">
        <svg
          viewBox="0 130 1440 120"
          className="w-full h-16 sm:h-20 md:h-24 lg:h-32 rotate-180 z-10"
        >
          <path
            fill="#F7FEF4"
            d="M0,200 C100,250 260 100 540,200 C720,230 900,80 1180,160 C1360,210 1440,160 1440,160 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>

      {/* Main Content */}
      <div className="z-0 min-h-[60vh] sm:min-h-[70vh] md:min-h-screen text-black flex justify-center items-center">
        <div className="
          w-[90%] max-w-2xl 
          flex flex-col items-center mt-5 space-y-5
          sm:w-[80%] sm:mt-8
          md:w-[60%] md:mt-10
          lg:w-[50%] lg:mt-12
        ">
          {/* Watermelon Icon */}
          <div>
            <img
              src="/watermelon.png"
              alt=""
              className="w-10 sm:w-12 md:w-16"
            />
          </div>
          {/* Heading and Text */}
          <div className="flex flex-col justify-center items-center">
            <h1
              style={{ fontFamily: "Playfair Display, serif" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center"
            >
              No More Confusion
            </h1>
            <p
              style={{ fontFamily: "spectral, serif" }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
            >
              Just Clarity, Care, and Real Results.
            </p>
          </div>
          {/* Contact Button */}
          <div className="mt-6 sm:mt-8">
            <Link
              href="/contact"
              style={{ fontFamily: "spectral, serif" }}
              className="border p-2 sm:p-3 md:p-4 rounded hover:bg-[#D1EFC5] transition"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom SVG Wave */}
      <div className="overflow-hidden">
        <svg
          viewBox="0 130 1440 120"
          className="w-full h-16 sm:h-20 md:h-24 lg:h-32 z-10"
        >
          <path
            fill="#D1EFC5"
            d="M0,200 C100,250 260 100 540,200 C720,230 900,80 1180,160 C1360,210 1440,160 1440,160 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
