import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";

const ChildTherapyPrice = () => {
  const data = [
    { id: 1, Package: "Single Session (45 minutes)", Price: "INR 1000", Sessions: 1, Per_Sessions: "INR 1,000", Savings: "N/A", Remarks: "For Individual, One-Time Therapy" },
    { id: 2, Package: "Single Session (60 minutes)", Price: "INR 1,500", Sessions: 1, Per_Sessions: "INR 1,500", Savings: "N/A", Remarks: "For Individual, One-Time Therapy" },
    { id: 3, Package: "3-Session Package(45 minutes each)", Price: "INR 2,700", Sessions: 3, Per_Sessions: "INR 900", Savings: "Save INR 300", Remarks: "Ideal For Short-Term Therapy Goals" },
    { id: 4, Package: "5-Session Package (60 minutes each)", Price: "INR 6,500", Sessions: 5, Per_Sessions: "INR 1,300", Savings: "Save INR 1,000", Remarks: "Ideal For Moderate Therapy Needs" },
    { id: 5, Package: "8-Session Package (60 minutes each)", Price: "INR 10,000", Sessions: 8, Per_Sessions: "INR 1,250", Savings: "Save INR 2,000", Remarks: "Suitable For On-Going Therapy Support" },
    { id: 6, Package: "Parent Guidance Session", Price: "INR 1,800", Sessions: 1, Per_Sessions: "INR 1,800", Savings: "N/A", Remarks: "For Parental Support And Guidance" },
    { id: 7, Package: "12-Session Comprehensive Package", Price: "INR 14,000", Sessions: 12, Per_Sessions: "INR 1,166", Savings: "Save INR 4,000", Remarks: "Best Value For Long-Term Intervention" },
    { id: 8, Package: "Follow-up Support Call (15 minutes)", Price: "INR 500", Sessions: "Add-On", Per_Sessions: "N/A", Savings: "N/A", Remarks: "For Post-Therapy Queries And Support" },
  ];

  return (
    <>

      <Header />
      <div className="pt-32 my-[3.2rem] max-w-7xl mx-auto px-4 py-8 text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-8 text-center">Child And Adolescent Therapy</h2>

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

export default ChildTherapyPrice;
