import React from "react";

export default function Faqs() {
  return (
    <>
    <div className="z-0 min-h-screen text-black flex flex-col justify-center items-center py-16 px-4">
      <div className="w-full max-w-4xl flex flex-col items-center space-y-12 border p-8 sm:p-10">
        
        {/* Heading */}
        <div>
          <h1
            style={{ fontFamily: "Playfair, serif" }}
            className="text-2xl sm:text-3xl md:text-4xl text-center"
          >
            ANSWERS JUST FOR YOU
          </h1>
        </div>

        {/* FAQ Items */}
        <div className="w-full flex flex-col space-y-8">
          {faqData.map((faq, index) => (
            <div key={index} className="space-y-2">
              <h2
                style={{ fontFamily: "Playfair, serif" }}
                className="text-lg sm:text-xl md:text-2xl font-semibold"
              >
                {faq.question}
              </h2>
              <p className="text-base sm:text-lg md:text-lg text-gray-700">
                {faq.answer}
              </p>
            </div>
          ))}
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

// FAQ content moved outside for cleaner JSX
const faqData = [
  {
    question: "What can I expect during my first consultation?",
    answer:
      "During your first consultation, we'll discuss your health goals, lifestyle, and any current challenges you may be facing. Together, we'll create a personalized plan that feels realistic, supportive, and aligned with your needs.",
  },
  {
    question: "Are the diet plans tailored to my specific health conditions?",
    answer:
      "Yes! Every plan is customized to support your unique health needs, whether it's managing weight, improving gut health, balancing metabolic conditions, or supporting recovery and healing.",
  },
  {
    question: "Can I receive guidance virtually if I don't live nearby?",
    answer:
      "Absolutely. I offer both in-person and virtual consultations, so you can receive personalized support from wherever you are.",
  },
  {
    question: "Do you offer support during pregnancy and breastfeeding?",
    answer:
      "Yes, I provide maternal nutrition guidance designed to nourish you and your baby during pregnancy, postpartum recovery, and breastfeeding.",
  },
  {
    question: "How soon will I start seeing results?",
    answer:
      "Every journey is different. Some clients notice changes within a few weeks, while for others it may take longer. My focus is on building sustainable, healthy habits that lead to long-term success.",
  },
];
