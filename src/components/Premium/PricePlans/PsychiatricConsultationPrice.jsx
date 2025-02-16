import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";

const PsychiatricConsultationPrice = () => {
  const data = [
    { id: 1, Package: "Basic Psychiatric Consult", Features: ["One session with a psychiatrist.", "Preliminary diagnosis and recommendations.", "Prescription (if required)"], TargetAudience: "Individuals seeking evaluation.", Duration: "30 minutes", Price: "INR 1,500", AdditionalNote: "Ideal for first-time consultations." },
    { id: 2, Package: "Comprehensive Consult", Features: ["Detailed psychiatric evaluation.", "Two follow-up sessions.", "Treatment plan and medication management."], TargetAudience: "Individuals with ongoing needs.", Duration: "1 hour + follow-ups", Price: "INR 5,000", AdditionalNote: "Best for moderate to severe cases." },
    { id: 3, Package: "Family Psychiatric Plan", Features: ["Psychiatric consultation for families.", "Assessing family dynamics affecting mental health.", "Group guidance."], TargetAudience: "Families with shared concerns.", Duration: "1.5 hours", Price: "INR 7,500", AdditionalNote: "Suitable for family-centered care." },
    { id: 4, Package: "Corporate Wellness Psychiatry", Features: ["Psychiatric evaluations for employees.", "Stress and burnout assessments.", "Mental wellness recommendations."], TargetAudience: "Organizations", Duration: "Customizable", Price: "INR 25,000 per session", AdditionalNote: "For improving organizational well-being." },
    { id: 5, Package: "Student Psychiatry Plan", Features: ["Focused sessions on academic stress, ADHD, and other student issues.", "Parental consultation."], TargetAudience: "Students", Duration: "45 minutes", Price: "INR 2,000", AdditionalNote: "Tailored for young individuals and teens." },
  ];

  return (
    <>
      <Header />
      <div className="pt-32 my-[3.2rem] max-w-[128rem] mx-auto px-4 py-8 text-center">
        {/* Table Title */}
        <h2 className="text-[3.2rem] font-bold text-teal-600 mb-8">Psychiatric Consultation</h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-teal-600 text-white text-[1.7rem]">
              <tr>
                <th className="py-[1.2rem] px-[1.6rem] border">Package Name</th>
                <th className="py-[1.2rem] px-[1.6rem] border">Inclusions</th>
                <th className="py-[1.2rem] px-[1.6rem] border">Target Audience</th>
                <th className="py-[1.2rem] px-[1.6rem] border">Duration</th>
                <th className="py-[1.2rem] px-[1.6rem] border">Price</th>
                <th className="py-[1.2rem] px-[1.6rem] border">Additional Note</th>
                <th className="py-[1.2rem] px-[1.6rem] border"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="hover:bg-gray-100 text-[1.7rem]">
                  <td className="py-[1.2rem] px-[1.6rem]">{row.Package}</td>
                  <td className="py-[1.2rem] px-[1.6rem] text-left">
                    <ul className="list-disc pl-6">
                      {row.Features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-[1.2rem] px-[1.6rem]">{row.TargetAudience}</td>
                  <td className="py-[1.2rem] px-[1.6rem]">{row.Duration}</td>
                  <td className="py-[1.2rem] px-[1.6rem]">{row.Price}</td>
                  <td className="py-[1.2rem] px-[1.6rem]">{row.AdditionalNote}</td>
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
          <p className="text-[2.2rem] font-bold text-teal-600 mb-4">Not sure which therapy to choose from?</p>
          <button className="bg-teal-600 text-white font-semibold px-[2.4rem] text-2xl py-[1rem] rounded-md transition duration-200 hover:bg-teal-700">
            <Link to="/contact">Get in touch with our team</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default PsychiatricConsultationPrice;
