import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";

const CareerCounsellingPrice = () => {
  const data = [
    { id: 1, Package: "Basic Career Package", Features: ["1-on-1 session with a career counselor.", "Assessment of strengths and interests.", "General career advice."], Sessions: "1 Session (45 minutes)", Price: "INR 750", TargetAudience: "Students or individuals seeking initial career guidance." },
    { id: 2, Package: "Comprehensive Career Plan", Features: ["Detailed career mapping.", "Personality and aptitude tests.", "2 follow-up sessions for actionable career strategies."], Sessions: "3 Session (60 minutes each)", Price: "INR 2,500", TargetAudience: "Students, fresh graduates, or professionals seeking a well-defined career plans." },
    { id: 3, Package: "Skill Development Focus", Features: ["Evaluation of current skillset.", "Recommendations for skill improvement.", "Guidance on certifications or training programs."], Sessions: "1 Sessions (60 minutes)", Price: "INR 1,000", TargetAudience: "Individuals looking to upskill or shift careers." },
    { id: 4, Package: "Student Special Package", Features: ["Aptitude and personality tests.", "Insights on suitable courses and colleges.", "1 follow-up Q&A session"], Sessions: "2 Sessions (60 minutes each)", Price: "INR 1,500", TargetAudience: "High school or college students deciding on education or career paths." },
    { id: 5, Package: "Professional Transition pack", Features: ["Career transition guidance.", "Resume and LinkedIn profile optimization.", "Mock interviews for targeted job applications."], Sessions: "2 Sessions (60 minutes each)", Price: "INR 2,000", TargetAudience: "Mid-career professionals considering a career switch or transition." },
    { id: 6, Package: "Premium Career Success Plan", Features: ["Comprehensive career roadmap.", "Unlimited access to counselor for 1 month.", "Customized strategies for long-term success."], Sessions: "Unlimited (1 month access)", Price: "INR 5,000", TargetAudience: "Individuals seeking long-term career growth and strategic planning." },
  ];

  return (
    <>
      <Header />
      <div className="pt-32 my-[3.2rem] max-w-[128rem] mx-auto px-4 py-8 text-center">
        {/* Table Title */}
        <h2 className="text-[3.2rem] font-bold text-teal-600 mb-8">Career Counselling</h2>

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
          <p className="text-2xl font-bold text-teal-600 mb-4">Not sure which therapy to choose from?</p>
          <button className="bg-teal-600 text-white font-semibold py-2 px-6 rounded-md transition duration-200 hover:bg-teal-700">
            <Link to="/contact">Get in touch with our team</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default CareerCounsellingPrice;
