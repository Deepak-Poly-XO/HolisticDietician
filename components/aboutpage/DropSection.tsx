import React from "react";
import Link from "next/link";

export default function DropSection() {
  return (
    <div className="z-0 min-h-screen text-black flex justify-center items-center bg-[#F4FFC7] px-4">
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] flex flex-col justify-center items-center space-y-8 py-10 text-center">
        
        {/* Image */}
        <img src="/watermelon.png" alt="Watermelon icon" className="w-10 sm:w-12" />

        {/* Heading */}
        <h1
          style={{ fontFamily: "playfair, serif" }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold"
        >
          A healing journey — <br /> crafted for every chapter and beyond.
        </h1>

        {/* Paragraph */}
        <p
          style={{ fontFamily: "spectral, serif" }}
          className="text-sm sm:text-base md:text-lg leading-relaxed w-full sm:w-[90%]"
        >
          Support your body&#39;s natural healing, manage health challenges, and build lasting vitality with personalized nutrition guidance. Whether you&#39;re seeking healthy weight changes, metabolic balance, digestive support, or recovery nourishment, we&#39;ll create a plan that&#39;s thoughtfully designed for your unique journey.
        </p>

        {/* Button */}
        <Link href="/contact"
          style={{ fontFamily: "spectral, serif" }}
          className="bg-[#A9FF9C] px-6 py-3 rounded-md shadow-md hover:bg-[#94ec87] transition duration-200 text-sm sm:text-base"
        >
          Start Your Wellness Journey
        </Link>
      </div>
    </div>
  );
}
