import React from "react";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <div id="services" className="z-0 min-h-screen text-black flex justify-center items-center px-4">
      <div className="h-[90%] w-full max-w-7xl flex flex-col md:flex-row justify-center  md:space-x-5 space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="w-full md:w-[32%] h-auto flex ">
          <div className="w-[90%] mt-[40px] flex flex-col space-y-3">
            <h1 style={{ fontFamily: 'Playfair Display, serif' }} className="text-[22px]">Services I offer</h1>
            <p style={{ fontFamily: 'Spectral, serif' }}>
              I work one-on-one with you to understand the root of your health challenges and create thoughtful, holistic nutrition plans that align with your body’s unique needs.
            </p>
            <div style={{ fontFamily: 'Spectral, serif' }} className="text-black">
              <Link href="/contact" className="bg-[#A9FF9C] hover:bg-[#85ff6c] transition-all duration-300 p-[10px] rounded-sm pl-[14px] pr-[12px] inline-block">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[65%] h-auto flex justify-center">
          <div className="mt-[40px] flex flex-col space-y-6 md:ml-[40px]">
            <div>
              <h1 className="h1-services">Weight Management Programs</h1>
              <p className="p-services">for healthy and sustainable weight loss</p>
            </div>
            <div>
              <h1 className="h1-services">Nutritional Support for Healthy Weight Gain</h1>
              <p className="p-services">tailored plans to gain weight mindfully</p>
            </div>
            <div>
              <h1 className="h1-services">Maternal Nutrition</h1>
              <p className="p-services">guidance during pregnancy and breastfeeding</p>
            </div>
            <div>
              <h1 className="h1-services">Metabolic Health Plans</h1>
              <p className="p-services">support for diabetes, high cholesterol, and blood pressure</p>
            </div>
            <div>
              <h1 className="h1-services">Gut Health Optimization</h1>
              <p className="p-services">relief and balance for digestive issues</p>
            </div>
            <div>
              <h1 className="h1-services">Cancer Nutrition Therapy</h1>
              <p className="p-services">supportive plans during and after cancer treatment</p>
            </div>
            <div>
              <h1 className="h1-services">Lifestyle Recovery Diets</h1>
              <p className="p-services">nutritional guidance for de-addiction and healing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
