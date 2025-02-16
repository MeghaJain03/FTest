import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";

const CoupleTherapyPrice = () => {
  const data = [
    { id: 1, Package: "Basic Session (60 minutes)", Total_Price: "INR 1,200", Per_Sessions: "N/A", Savings: "N/A", Remarks: "Single Session Option" },
    { id: 2, Package: "Advanced Session (90 minutes)", Total_Price: "INR 1,800", Per_Sessions: "N/A", Savings: "N/A", Remarks: "Single Session Option" },
    { id: 3, Package: "3-Session Package", Total_Price: "INR 3,400", Per_Sessions: "INR 1,133/Session", Savings: "Save INR 200", Remarks: "Standard Package For Short-Term Therapy" },
    { id: 4, Package: "5-Session Package", Total_Price: "INR 5,500", Per_Sessions: "INR 1,100/Session", Savings: "Save INR 500", Remarks: "Standard Package For Short-Term Therapy" },
    { id: 5, Package: "8-Session Package", Total_Price: "INR 8,400", Per_Sessions: "INR 1,050", Savings: "Save INR 1,200", Remarks: "Premium Package For Long-Term Therapy" },
    { id: 6, Package: "12-Session Package", Total_Price: "INR 12,000", Per_Sessions: "INR 1,000/Session", Savings: "Save INR 2,400", Remarks: "Premium Package For Long-Term Therapy" },
    { id: 7, Package: "Therapy Journals & Materials", Total_Price: "INR 500", Per_Sessions: "N/A", Savings: "N/A", Remarks: "Optional Add-on For Enhanced Therapy Experience" },
    { id: 8, Package: "Post-Therapy Support Call", Total_Price: "INR 300", Per_Sessions: "N/A", Savings: "N/A", Remarks: "Optional Add-on For Continued Support(15 minutes)" },
    { id: 9, Package: "Early Bird Discount", Total_Price: "N/A", Per_Sessions: "N/A", Savings: "10% Discount", Remarks: "For Bookings Made A Week In Advance" },
    { id: 10, Package: "Referral Discount", Total_Price: "N/A", Per_Sessions: "N/A", Savings: "INR 500 Off", Remarks: "Valid For Referring A New Couple" },
    { id: 11, Package: "Student/Low-Income Couple", Total_Price: "N/A", Per_Sessions: "INR 800/Session", Savings: "N/A", Remarks: "Special Pricing With Valid Documentation" },
  ];

  return (
    <>
      <Header />
      <div className="pt-32 my-[3.2rem] mx-auto w-4/5 text-center">
        {/* Table Title */}
        <h2 className="text-[3.2rem] text-teal-600 font-bold mb-[1.6rem]">Couples and Family Therapy</h2>

        {/* Table Container */}
        <table className="min-w-full bg-white">
          <thead className="bg-teal-600 text-white text-[1.7rem]">
            <tr>
              <th className="py-[1.6rem] px-[2.4rem] border">Package/Service</th>
              <th className="py-[1.6rem] px-[2.4rem] border">Total Price</th>
              <th className="py-[1.6rem] px-[2.4rem] border">Per Sessions</th>
              <th className="py-[1.6rem] px-[2.4rem] border">Savings</th>
              <th className="py-[1.6rem] px-[2.4rem] border">Remarks</th>
              <th className="py-[1.6rem] px-[2.4rem] border"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-gray-100 text-[1.5rem]">
                <td className="py-[1.2rem] px-[2.4rem]">{row.Package}</td>
                <td className="py-[1.2rem] px-[2.4rem]">{row.Total_Price}</td>
                <td className="py-[1.2rem] px-[2.4rem]">{row.Per_Sessions}</td>
                <td className="py-[1.2rem] px-[2.4rem]">{row.Savings}</td>
                <td className="py-[1.2rem] px-[2.4rem]">{row.Remarks}</td>
                <td className="py-[1.2rem] px-[2.4rem]">
                  <Link to="/paynow">
                    <button className="bg-teal-600 text-white px-[2.4rem] py-2 rounded-lg hover:bg-teal-700 transition duration-300">Pay Now</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Contact Section */}
        <div className="mt-[3.2rem]">
          <p className="text-[2.2rem] text-teal-600 font-bold mb-4">Not sure which therapy to choose from?</p>
          <Link to="/contact">
            <button className="bg-teal-600 text-white px-[2.4rem] text-2xl py-[1rem] rounded-lg hover:bg-teal-700 transition duration-300">
              Get in touch with our team
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CoupleTherapyPrice;
