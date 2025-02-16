import { Link } from "react-router-dom";
import Header from "../../Header";

const GroupTherapyPrice = () => {
  const data = [
    { id: 1, Package: "Starter Group Package", Features: ["4 group therapy sessions (1 hour each).", "Focus on stress management and emotional well-being.", "Self-help resources."], GroupSize: "5-10 members", Duration: "1 month", Price: "INR 5,000 per person", AdditionalNote: "Ideal for small teams or families." },
    { id: 2, Package: "Team Wellness Plan", Features: ["6 group therapy sessions (1.5 hours each).", "Conflict resolution and relationship-building exercises.", "Access to 24/7 chatbot support."], GroupSize: "10-20 members", Duration: "2 months", Price: "INR 10,000 per person", AdditionalNote: "Suitable for teams or communities." },
    { id: 3, Package: "Corporate Group Plan", Features: ["8 therapy sessions (2 hours each).", "Work-life balance and stress reduction workshops.", "Biometric mental health tracking and AI assessments."], GroupSize: "20-50 members", Duration: "3 months", Price: "INR 15,000 per person", AdditionalNote: "Designed for corporate and large groups." },
    { id: 4, Package: "Family Therapy Plan", Features: ["5 sessions (1 hour each).", "Focus on family dynamics, communication, and relationship repair.", "Customized therapy goals."], GroupSize: "4-8 members", Duration: "1 month", Price: "INR 7,500 per person", AdditionalNote: "Ideal for improving family relationships." },
    { id: 5, Package: "Specialized Group Plan", Features: ["10 therapy sessions(2 hours each).", "Tailored themes (e.g., grief support, addiction recovery).", "Progress reports and personalized guidance."], GroupSize: "5-15 members", Duration: "6 months", Price: "INR 20,000 per person", AdditionalNote: "For groups with specific therapeutic needs." },
  ];

  return (
    <>
      <Header />
      <div className="pt-32 my-[3.2rem] max-w-[128rem] mx-auto px-4 py-8 text-center">
        {/* Table Title */}
        <h2 className="text-[3.2rem] font-bold text-teal-600 mb-8 text-center">Group Therapy</h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-teal-600 text-white text-[1.7rem]">
              <tr>
                <th className="py-[1.2rem] px-[1.6rem] border">Package Name</th>
                <th className="py-[1.2rem] px-[1.6rem] border">Inclusions</th>
                <th className="py-[1.2rem] px-[1.6rem] border">Group Size</th>
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
                    <ul>
                      {row.Features.map((feature, index) => (
                        <li key={index} className="list-disc pl-6">{feature}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-[1.2rem] px-[1.6rem]">{row.GroupSize}</td>
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
          <p className="text-2xl font-bold text-teal-600 mb-4">Not sure which therapy to choose from?</p>
          <button className="bg-teal-600 text-white font-semibold py-2 px-6 rounded-md transition duration-200 hover:bg-teal-700">
            <Link to="/contact">Get in touch with our team</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default GroupTherapyPrice;
