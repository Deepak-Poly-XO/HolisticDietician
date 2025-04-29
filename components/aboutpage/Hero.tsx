import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-5.3rem)] bg-[#F7FEF4] text-black flex justify-center items-center px-4 sm:px-6 md:px-10 ">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-screen-xl space-y-8 lg:space-y-0 lg:space-x-12 mb-[2em]">

        {/* Left side image */}
        <div className="w-full lg:w-[40%] h-auto max-h-[600px] shadow-xl rounded-xl overflow-hidden mt-[2em]">
          <img
            src="/img3.jpeg"
            alt="Urvashi Sareen"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right side text */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center space-y-6">
          <div>
            <h1
              style={{ fontFamily: "playfair, serif" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Urvashi Sareen
            </h1>
            <p
              style={{ fontFamily: "spectral, serif" }}
              className="text-lg sm:text-xl mt-2"
            >
              Certified Dietitian
            </p>
          </div>

          <div>
            <p
              style={{ fontFamily: "spectral, serif" }}
              className="text-sm sm:text-base md:text-lg leading-relaxed "
            >
              With years of experience supporting individuals from all walks of life, I specialize in creating personalized, sustainable diet plans and workout routines designed to make healthy living both practical and lasting. <br /> <br />
              My areas of specialization include weight management, sports nutrition, pregnancy and lactation, metabolic disorders, therapeutic diets, and more. Along the way, I’ve been honored with several{" "}
              <Link href="#awards" className="underline">
                awards and certifications
              </Link>{" "}
              that reflect my dedication to this field. <br /> <br />
              My approach is holistic—I focus not just on food, but also on forming healthy habits, improving sleep, managing stress, and supporting overall well-being. Whether you prefer online or in-person consultations, I’m here to support you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
