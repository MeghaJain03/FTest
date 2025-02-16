import React from "react";
import { Link } from "react-router-dom";

const AssessmentPrice = () => {
  const data = [
    { id: 1, Package: "Basic Assessment", Features: ["One-on-one consultation.", "Standardized mental health questionnaire.", "Summary report of findings."], TargetAudience: "Individuals", Duration: "30 minutes", Price: "INR 1,000", AdditionalNote: "Ideal for those seeking a quick overview." },
    { id: 2, Package: "Comprehensive Evaluation", Features: ["Detailed psychological testing.", "One-on-One consultation.", "In-depth mental health report."], TargetAudience: "Individuals or families", Duration: "1 hour", Price: "INR 3,500", AdditionalNote: "Recommended for deep insights." },
    { id: 3, Package: "Corporate Assessment", Features: ["Group mental health survey.", "AI-based analysis.", "Team mental wellness report."], TargetAudience: "Small to large organizations", Duration: "2 hours", Price: "INR 25,000", AdditionalNote: "For improving workplace mental health." },
    { id: 4, Package: "Student Wellness Check", Features: ["School/college-wide screening.", "Stress and academic pressure analysis.", "Personalized reports."], TargetAudience: "Educational Institutes", Duration: "Customizable", Price: "INR 15,000", AdditionalNote: "Tailored for student groups." },
    { id: 5, Package: "Crisis Risk Assessment", Features: ["Urgent mental health evaluation.", "Suicide risk assessment.", "Immediate intervention suggestions."], TargetAudience: "Individuals in distress", Duration: "1 hour", Price: "INR 5,000", AdditionalNote: "For crisis situations." },
  ];

  return (
    <>
      <Header />
      <div className="pt-32 my-[3.2rem] max-w-[128rem] mx-auto px-4 py-8 text-center">
        {/* Table Title */}
        <h2 className="text-[3.2rem] font-bold text-teal-600 mb-8">Mental Health Assessment</h2>

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
                <tr key={row.id} className="hover:bg-gray-100 text-[1.5rem]">
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
        <div className="mt-8 text-center">
          <p className="text-2xl font-bold text-teal-600 mb-4">Not sure which therapy to choose from?</p>
          <button className="bg-teal-600 text-white font-semibold px-[2.4rem] text-2xl py-[1rem] rounded-md transition duration-200 hover:bg-teal-700">
            <Link to="/contact">Get in touch with our team</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default AssessmentPrice;
