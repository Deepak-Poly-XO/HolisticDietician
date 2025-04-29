import React from "react";

export default function Drop() {
  return (
    <div className="z-0 min-h-[calc(100vh-12rem)] text-black flex justify-center items-center bg-[#CBFFCB] border px-4">
      <div className="w-full max-w-3xl flex flex-col justify-center items-center space-y-6 text-center">
        {/* Image */}
        <div>
          <img src="/watermelon.png" alt="Watermelon" className="w-9" />
        </div>

        {/* Heading */}
        <div>
          <h1
            style={{ fontFamily: "Playfair, serif" }}
            className="text-2xl sm:text-3xl md:text-5xl leading-tight"
          >
            You have the Power to rewrite your Story
          </h1>
        </div>

        {/* Subtext */}
        <div className="w-full sm:w-4/5">
          <p
            style={{ fontFamily: "Playfair, serif" }}
            className="text-lg sm:text-xl md:text-2xl"
          >
            AND IT STARTS TODAY
          </p>
        </div>
      </div>
    </div>
  );
}
