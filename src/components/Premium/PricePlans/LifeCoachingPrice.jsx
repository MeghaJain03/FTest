import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";

const LifeCoachingPrice = () => {
  const data = [
    { id: 1, Package: "Individual Support Package", Features: ["1-on-1 coaching for emotional resilience.", "Coping strategies for terminal diagnosis.", "50-minutes session"], Sessions: "1 Session (50 minutes)", Price: "INR 800", TargetAudience: "Individuals needing mental preparedness and emotional support." },
    { id: 2, Package: "Family Coaching Package", Features: ["90-minute session for families.", "Guidance on communication and emotional support.", "Strategies to support loved ones."], Sessions: "1 Session (90 minutes)", Price: "INR 1,500", TargetAudience: "Family supporting a terminally ill loved one." },
    { id: 3, Package: "Comprehensive Care Plan", Features: ["Includes 5 sessions with life coaches.", "Emphasis on emotional resilience, legacy planning, and acceptance.", "Regular follow-ups."], Sessions: "5 Sessions (50 minutes each)", Price: "INR 3,500", TargetAudience: "Individuals and families seeking a structured coaching approach." },
    { id: 4, Package: "Palliative Care Mental Support", Features: ["Collaboration with medical teams.", "Addressing grief, fears, and emotional struggles during palliative care."], Sessions: "3 Sessions (60 minutes each)", Price: "INR 2,500", TargetAudience: "Patients in palliative care and their families." },
    { id: 5, Package: "Legacy Building Coaching", Features: ["Focused sessions on creating personal legacies (letters, messages, videos, etc.).", "Emotional closure and fulfillment."], Sessions: "2 Sessions (60 minutes each)", Price: "INR 2,000", TargetAudience: "Individuals wishing to leave lasting memories or messages for loved ones." },
    { id: 6, Package: "Unlimited Monthly Support", Features: ["Unlimited access to life coaches for emotional support and guidance.", "Regular weekly sessions.", "Phone/Online support."], Sessions: "Unlimited Sessions (1 month)", Price: "INR 5,000", TargetAudience: "Terminally ill individuals seeking ongoing emotional and mental well-being support." },
  ];

  return (
    <>
      <Header />
      <div className="pt-32 my-[3.2rem] max-w-[128rem] mx-auto px-4 py-8 text-center">
        {/* Table Title */}
        <h2 className="text-[3.2rem] font-bold text-teal-600 mb-8">Life Coaching For Terminal Illness</h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-teal-600 text-white text-[1.7rem]">
              <tr>
                <th className="py-[1.2rem] px-[1.6rem] border">Package Name</th>
                <th className="py-[1.2rem] px-[1.6rem] border">Features</th>
                <th className="py-[1.2rem] px-[1.6rem] border">Session Details</th>
                <th className="py-[1.2rem] px-[1.6rem] border">Price</th>
                <th className="py-[1.2rem] px-[1.6rem] border">Target Audience</th>
                <th className="py-[1.2rem] px-[1.6rem] border"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="hover:bg-gray-100 text-[1.5rem]">
                  <td className="py-[1.2rem] px-[1.6rem]">{row.Package}</td>
                  <td className="py-[1.2rem] px-[1.6rem] text-left">
                    <ul className="list-disc pl-6">
                      {row.Features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-[1.2rem] px-[1.6rem]">{row.Sessions}</td>
                  <td className="py-[1.2rem] px-[1.6rem]">{row.Price}</td>
                  <td className="py-[1.2rem] px-[1.6rem]">{row.TargetAudience}</td>
                  <td className="py-[1.2rem] px-[1.6rem]">
                    <button className="bg-teal-600 text-white font-semibold py-2 px-6 rounded-md transition duration-200 hover:bg-teal-700">
                      <Link to="/paynow">Pay Now</Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Contact Section */}
        <div className="mt-[3.2rem]">
          <p className="text-2xl font-bold text-teal-600 mb-4">Not sure which therapy to choose from?</p>
          <button className="bg-teal-600 text-white font-semibold px-[2.4rem] text-2xl py-[1rem] rounded-md transition duration-200 hover:bg-teal-700">
            <Link to="/contact">Get in touch with our team</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default LifeCoachingPrice;
