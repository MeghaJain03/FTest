import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";

const EmergencyTherapyPrice = () => {
  const data = [
    { id: 1, Package: "Basic Emergency Session", Features: ["Immediate support for emotional distress.", "30-minutes session with a licensed therapist.", "Quick relief and stabilization techniques."], Sessions: "1 Session (30 minutes)", Price: "INR 500", TargetAudience: "Individuals in acute emotional distress requiring short-term support." },
    { id: 2, Package: "Advanced Emergency Care", Features: ["Comprehensive 60-minute therapy session.", "Includes grounding and coping techniques.", "Follow-up sessions scheduling."], Sessions: "1 Session (60 minutes)", Price: "INR 1,000", TargetAudience: "Individuals facing more severe crises, such as trauma or panic attacks." },
    { id: 3, Package: "24-Hour Support Plan", Features: ["Unlimited access to therapists for 24 hours.", "Multiple check-ins for emotional stability.", "Priority response within 10 minutes."], Sessions: "Multiple Sessions (24-Hour Plan)", Price: "INR 3,000", TargetAudience: "Individuals experiencing a severe crisis requiring round-the-clock mental health support." },
    { id: 4, Package: "Trauma Stabilization Pack", Features: ["3 therapy sessions tailored for trauma management.", "60-minutes per session.", "Follow-up plan for ongoing therapy."], Sessions: "3 Sessions (60 minutes each)", Price: "INR 2,500", TargetAudience: "Individuals recovering from traumatic events needing short-term stabilization." },
    { id: 5, Package: "Family Crisis Support", Features: ["90-minute session involving the individual and family.", "Guidance for supporting loved ones.", "Family-focused coping strategies."], Sessions: "1 Session (90 minutes)", Price: "INR 1,500", TargetAudience: "Families managing the crisis of a loved one or seeking collective emotional stability." },
  ];

  return (
    <>
      <Header />
      <div className="pt-32 my-[3.2rem] max-w-[128rem] mx-auto px-4 py-8 text-center">
        {/* Table Title */}
        <h2 className="text-[2rem] lg:text-[3.2rem] font-bold text-teal-600 mb-8">Crisis Intervention (or Emergency Therapy)</h2>

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
                    <ul>
                      {row.Features.map((feature, index) => (
                        <li key={index} className="list-disc pl-6">{feature}</li>
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
        <div className="mt-[3.2rem] text-center">
          <p className="text-[2.6rem] font-bold text-teal-600 mb-4">Not sure which therapy to choose from?</p>
          <button className="bg-teal-600 text-white font-semibold py-[0.8rem] px-[2.4rem] text-2xl rounded-md transition duration-200 hover:bg-teal-700">
            <Link to="/contact">Get in touch with our team</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default EmergencyTherapyPrice;
