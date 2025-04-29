import React from "react";

export default function HeroSection() {
  return (
    <div className="bg-[#F3FFD5]">
      <div className="z-0 h-screen text-black flex justify-center items-center px-4 sm:px-0">
        <div className="text-center">
          
          {/* Heading */}
          <h1
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-[36px] sm:text-[60px] font-semibold leading-tight"
          >
            Transform Your Health,<br />Permanently
          </h1>

          {/* Subheading */}
          <p
            style={{ fontFamily: "Spectral, serif" }}
            className="mt-6 text-[18px] sm:text-[24px] leading-relaxed"
          >
            Empowering you with sustainable diet plans,<br />
            personalized fitness guidance, and holistic<br />
            wellness coaching
          </p>

        </div>
      </div>
    </div>
  );
}
