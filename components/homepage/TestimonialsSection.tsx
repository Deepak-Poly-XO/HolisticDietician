'use client';

import React, { useEffect, useState } from "react";

const testimonials = [
  "“A Big thumbs up to Dr Urvashi!! So caring so understanding an ultimate support throughout my journey.”",
  "“Urvashi, you are an amazing dietician. The way you are handling my case, is simply awesome. ”",
  "“Very meticulous. Very dedicated. Trustworthy”",
  "“Urvashi has been really good dietitian coach for our dad (Shyam Lal Ahuja) who is 80 + and was struggling to lose weight.”",
  "“We are very happy with holistic dietitian, Urvashi is such a blessing for our elder care home.”",
  "“My journey towards weight loss started with Urvashi Ma'am in Jan 2022 . It's been 8 months and I have successfully lost 27 kgs starting way up from 108 and now reaching 81 kgs.”"
];

const names = [
  "Guneet Chandhok",
  "Ravi Kumar",
  "Anand Vermani",
  "Anshu Wahi",
  "Aakanksha Upadhyay",
  "Rinky Atandon"
];

const links = [
  "https://maps.app.goo.gl/HRyJi5gi3mCbLQKn6",
  "https://maps.app.goo.gl/bp9K11udZAEpsv6t9",
  "https://maps.app.goo.gl/a8mCeWgo1TnaV6D2A",
  "https://maps.app.goo.gl/Nkt5hhYp7T2GxzRx9",
  "https://maps.app.goo.gl/RfL15H3cazsUegQCA",
  "https://maps.app.goo.gl/FAFjhBrzRpQquJLZ7"
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div id="testimonials" className="z-0 bg-[#F7FEF4] text-black flex justify-center items-center py-10 px-4 md:px-10">
      <div
        className="bg-testimonial w-full max-w-7xl rounded-lg flex items-center justify-between p-4 md:p-10 relative overflow-hidden h-[30em]"
        style={{ boxShadow: '0 4px 10px black' }}
      >

        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="hidden text-white absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2"
        >
          <p className="text-3xl md:text-5xl cursor-pointer opacity-40">{'<'}</p>
        </button>

        {/* Testimonial Content */}
        <a
          href={links[currentIndex]}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-center w-full px-4"
        >
          <img src="/stars.png" alt="stars" className="w-8 md:w-12 mb-6" />
          <p
            className="text-lg md:text-2xl text-white italic leading-relaxed mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {testimonials[currentIndex]}
          </p>
          <p
            className="text-sm md:text-base text-white"
            style={{ fontFamily: 'Caveat, serif' }}
          >
            {names[currentIndex]}
          </p>
        </a>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="hidden text-white absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2"
        >
          <p className="text-3xl md:text-5xl cursor-pointer opacity-40">{'>'}</p>
        </button>
      </div>
    </div>
  );
}
