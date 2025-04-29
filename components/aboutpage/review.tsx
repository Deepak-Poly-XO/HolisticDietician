import React from "react";
import Link from "next/link";

export default function ReviewSection() {
  return (
    <>
    <div className="z-0 min-h-screen bg-review text-black flex justify-center items-center px-4 py-12 mt-12 border">
      <div className="w-full max-w-4xl text-center space-y-10">
        
        {/* Title */}
        <div className="flex items-center justify-center">
          <Link href="/#testimonials">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl"
              style={{ fontFamily: "Playfair, serif" }}
            >
              SUCCESS STORIES
            </h1>
          </Link>
        </div>

        {/* Quote & Text */}
        <div className="flex flex-col items-center space-y-6">
          <h1
            className="text-xl sm:text-2xl md:text-3xl px-4"
            style={{ fontFamily: "Playfair, serif" }}
          >
            “Just because of Urvashi mam I was able to lose my weight”
          </h1>

          <p
            className="text-base sm:text-lg max-w-2xl"
            style={{ fontFamily: "spectral, serif" }}
          >
            I was close to 72kg, never liked to weigh myself. I lost 9kg since
            following your diet. My husband also lost 11kg after following
            Urvashi mam's diet. We both feel confident now. Thank you so much
            Urvashi mam.
          </p>

          <p
            className="text-lg sm:text-xl"
            style={{ fontFamily: "caveat, serif" }}
          >
            – Vaishali Mittal
          </p>
        </div>
      </div>
    </div>
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
    </>
  );
}
