import React from "react";
import ProcessCard from "./ProcessCard";

const Process = () => {
  const steps = [
    "Step 1: Sign Up",
    "Step 2: Complete Profile",
    "Step 3: Get Matched",
    "Step 4: Book Your Appointment",
    "Step 5: Pay and Confirm",
    "Step 6: Therapy Sessions Begin",
  ];

  return (
    <div className="flex justify-center items-center py-[4.8rem] px-[1.6rem] bg-gray-200">
      <ProcessCard steps={steps} />
    </div>
  );
};

export default Process;
