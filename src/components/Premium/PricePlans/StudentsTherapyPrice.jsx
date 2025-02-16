import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";

const StudentsTherapyPrice = () => {
  const data = [
    { id: 1, Package: "Single Session (45 minutes)", Price: "INR 250", Sessions: 1, Per_Sessions: "INR 250", Savings: "N/A", Remarks: "Affordable Option For Quick Consultation" },
    { id: 2, Package: "3-Single Session (45 minutes each)", Price: "INR 700", Sessions: 3, Per_Sessions: "INR 233", Savings: "Save INR 50", Remarks: "For Short-Term Therapy Needs" },
    { id: 3, Package: "5-Session Package(45 minutes each)", Price: "INR 1,100", Sessions: 5, Per_Sessions: "INR 220", Savings: "Save INR 150", Remarks: "Best For Moderate-Term Support" },
    { id: 4, Package: "8-Session Package (45 minutes each)", Price: "INR 1,700", Sessions: 8, Per_Sessions: "INR 212", Savings: "Save INR 300", Remarks: "Designed For On-Going Therapy Goals" },
    { id: 5, Package: "Parent Guidance Session (60 minutes)", Price: "INR 1,000", Sessions: 1, Per_Sessions: "INR 1,100", Savings: "N/A", Remarks: "Optional Support For Parents Of Students" },
    { id: 6, Package: "12-Session Comprehensive Package", Price: "INR 2,400", Sessions: 12, Per_Sessions: "INR 200", Savings: "Save INR 600", Remarks: "Best Value For Long-Term Intervention" },
    { id: 7, Package: "Follow-up Support Call (15 minutes)", Price: "INR 300", Sessions: "Add-On", Per_Sessions: "N/A", Savings: "N/A", Remarks: "For Post-Therapy Queries And Support" },
  ];

  return (
    <>
      <Header />
      <div className="pt-32 my-[3.2rem] max-w-7xl mx-auto px-4 py-8 text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-8">Therapy for Students</h2>

        {/* Table container */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="py-3 px-4 border">Package/Service</th>
                <th className="py-3 px-4 border">Price</th>
                <th className="py-3 px-4 border">Sessions Included</th>
                <th className="py-3 px-4 border">Per Session Price</th>
                <th className="py-3 px-4 border">Savings</th>
                <th className="py-3 px-4 border">Remarks</th>
                <th className="py-3 px-4 border"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="hover:bg-gray-100">
                  <td className="py-3 px-4">{row.Package}</td>
                  <td className="py-3 px-4">{row.Price}</td>
                  <td className="py-3 px-4">{row.Sessions}</td>
                  <td className="py-3 px-4">{row.Per_Sessions}</td>
                  <td className="py-3 px-4">{row.Savings}</td>
                  <td className="py-3 px-4">{row.Remarks}</td>
                  <td className="py-3 px-4">
                    <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition duration-300">
                      <Link to="/paynow">Pay Now</Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Additional Section */}
        <div className="mt-8 text-center">
          <p className="text-2xl font-bold text-teal-600 mb-4">Not sure which therapy to choose from?</p>
          <button className="bg-teal-600 text-white font-semibold py-2 px-6 rounded-md transition duration-200 hover:bg-teal-700">
            <Link to="/contact">Get in touch with our team</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default StudentsTherapyPrice;
