import React from "react";
import StepCard from "./StepCard";

const cardData = [
  {
    id: 1,
    title: "Step 1: Create Your Profile",
    description: "Create your profile to let us know more about you.",
    image: "/work1.webp",
    link: "/login",
  },
  {
    id: 2,
    title: "Step 2: Get Matched to the Best Therapist",
    description: "After analyzing your profile, we match you with three of our therapists.",
    image: "/work2.webp",
    link: "/therapist",
  },
  {
    id: 3,
    title: "Step 3: Schedule Your Appointment",
    description: "Based on your needs, schedule an appointment with one of the matched therapists.",
    image: "/work3.webp",
    link: "/appointment",
  },
  {
    id: 4,
    title: "Step 4: Therapy Sessions Begin!",
    description: "Once you schedule your first appointment, your healing journey begins with us!",
    image: "/work4.webp",
    link: "/therapist",
  },
];

const Working = () => (
  <section className="bg-gradient py-[4rem] px-[2rem] bg-gray-100 text-center">
    <h2 className="text-[3.8rem] font-bold text-teal-600 mb-[3.2rem]">How It Works?</h2>
    <div className="space-y-[5.5rem]">
      {cardData.map((card, index) => (
        <div key={card.id} className="relative">
          <StepCard {...card} />
          {/* Arrow (only between cards) */}
          {index < cardData.length - 1 && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 text-teal-600 text-[3rem] animate-bounce mt-6">
              ↓
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Working;
