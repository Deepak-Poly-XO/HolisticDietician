import React from "react";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/contactpage/HeroSection";
import ReachOut from "@/components/contactpage/ReachOut";
import Drop from "@/components/contactpage/DropSection";
import Faqs from "@/components/contactpage/Faqs";
import FadeInSection from "@/components/common/FadeIn";
import Footer from "@/components/common/Footer";


export default function ContactPage(){
  return(
    <div>
      <Navbar />
      <FadeInSection>
        <Hero />
      </FadeInSection>
      <FadeInSection>
        <ReachOut />
      </FadeInSection>
      <FadeInSection>
        <Drop />
      </FadeInSection>
      <FadeInSection>
        <Faqs />
      </FadeInSection>
      <Footer />
    </div>
  )
}