import React from "react";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/aboutpage/Hero";
import Drop from "@/components/aboutpage/DropSection";
import Certification from "@/components/aboutpage/Certification";
import Review from "@/components/aboutpage/review";
import Footer from "@/components/common/Footer";
import FadeInSection from "@/components/common/FadeIn";


export default function AboutSection(){
  return(
    <>
      <Navbar />
      <FadeInSection>
        <Hero />
      </FadeInSection>
      <Drop />
      <FadeInSection>
      <Certification />
      </FadeInSection>
      <FadeInSection>
      <Review />
      </FadeInSection>
      <Footer />
    </>
  )
}