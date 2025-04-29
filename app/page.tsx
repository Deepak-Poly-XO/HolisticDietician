import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/homepage/HeroSection";
import AboutSection from "@/components/homepage/AboutSection";
import ServiceSection from "@/components/homepage/ServicesSection";
import DropSection from "@/components/homepage/DropSection";
import TestimonialSection from "@/components/homepage/TestimonialsSection";
import Footer from "@/components/common/Footer";
import FadeInSection from "@/components/common/FadeIn";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FadeInSection>
        <HeroSection />
      </FadeInSection>
      <FadeInSection>
        <AboutSection />
      </FadeInSection>
      <FadeInSection>
        <ServiceSection />
      </FadeInSection>
      <FadeInSection>
        <TestimonialSection />
      </FadeInSection>
      <FadeInSection>
        <DropSection />
      </FadeInSection>
      <Footer />
    </div>
  );
}
