import React from "react";

export default function CertificationsSection() {
  return (
    <div
      id="awards"
      className="z-0 min-h-screen bg-[#F7FEF4] text-black flex justify-center items-center px-4 py-12"
    >
      <div className="flex flex-col lg:flex-row w-full max-w-6xl space-y-10 lg:space-y-0 lg:space-x-10">
        
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
          <div className="w-full">
            <h1
              className="text-[18px] sm:text-[20px] bg-[#E4FED9] inline-block px-4 py-1 mb-6"
              style={{ fontFamily: "Playfair, serif" }}
            >
              Qualifications
            </h1>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <p
              className="text-2xl sm:text-3xl"
              style={{ fontFamily: "Playfair, serif" }}
            >
              Education
            </p>
            <ul
              className="list-disc pl-6 text-base sm:text-lg space-y-2"
              style={{ fontFamily: "spectral, serif" }}
            >
              <li>Bachelors in Science</li>
              <li>Masters in Science</li>
              <li>Dietic Internship | Maharaja Sayaji Rao University</li>
            </ul>
          </div>

          {/* Certifications & Awards */}
          <div className="space-y-3">
            <p
              className="text-2xl sm:text-3xl"
              style={{ fontFamily: "Playfair, serif" }}
            >
              Certifications & Awards
            </p>
            <ul
              className="list-disc pl-6 text-base sm:text-lg space-y-2"
              style={{ fontFamily: "spectral, serif" }}
            >
              <li>Power Holistic Dietitian Certificate</li>
              <li>The Glamorous Power Awards</li>
            </ul>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-[90%] sm:w-[70%] aspect-[3/4] bg-awards bg-cover bg-center shadow-xl rounded-xl" />
        </div>
      </div>
    </div>
  );
}
