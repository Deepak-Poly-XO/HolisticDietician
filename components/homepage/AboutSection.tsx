import React from "react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="z-0 min-h-screen bg-[#F7FEF4] text-black flex justify-center items-center py-12">
      <div className="w-[90%] flex flex-col-reverse lg:flex-row justify-center items-center gap-12">
        
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center space-y-5 text-center lg:text-left">
          <h1
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-[32px] sm:text-[40px]"
          >
            Hey,
          </h1>
          <p
            style={{ fontFamily: "Spectral, serif" }}
            className="text-[16px] sm:text-[18px] leading-relaxed max-w-[600px]"
          >
            I’m Urvashi, a certified dietitian dedicated to guiding you toward a balanced and healthy lifestyle. <br /><br />
            I offer tailored nutrition plans, fitness routines, and support for stress, sleep, and habit formation. <br /><br />
            Whether you're managing weight, training for sports, or navigating pregnancy, I’ve got you covered — online or in-person.
          </p>
          <Link
            href="/about"
            style={{ fontFamily: "Spectral, serif" }}
            className="underline hover:text-blue-800"
          >
            More About Me
          </Link>
        </div>

        {/* Image Section */}
        <div
          style={{ boxShadow: "-3px -3px 10px 10px rgba(0, 0, 0, 0.1)" }}
          className="bg-blue-400 rounded-xl overflow-hidden w-[100%] max-w-[400px] flex items-center justify-center"
        >
          <img
            src="/img2.jpg"
            alt="About Urvashi"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>

      </div>
    </div>
  );
}
