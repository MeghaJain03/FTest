import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";

const IndividualTherapyPrice = () => {
  const data = [
    { id: 1, Package: "Single Session", Sessions: "1 Session", Cost: "INR 500/session", Validity: "On-Demand", Additional_Features: "One Time Consultation" },
    { id: 2, Package: "Basic Package", Sessions: "4 Sessions", Cost: "INR 1800/month", Validity: "30 days", Additional_Features: "Personalized Session Planning" },
    { id: 3, Package: "Advance Package", Sessions: "8 Sessions", Cost: "INR 3400/month", Validity: "45 Days", Additional_Features: "Free Resource Kit For Mental Wellness" },
    { id: 4, Package: "Premium Annual Plan", Sessions: "50 Sessions", Cost: "INR 18000/year", Validity: "12 Months", Additional_Features: "Priority Scheduling + Exclusive Webinars" },
  ];

  return (
    <>
      <Header />
      <div className="pt-32 my-[3.2rem] mx-auto w-4/5 text-center">
        {/* Table Title */}
        <h2 className="text-[3.2rem] text-teal-600 font-black mb-[1.6rem]">Individual Therapy</h2>

        {/* Table Container */}
        <table className="min-w-full bg-white">
          <thead className="bg-teal-600 text-white text-[1.7rem]">
            <tr>
              <th className="py-[1.6rem] px-[2.4rem] border">Package</th>
              <th className="py-[1.6rem] px-[2.4rem] border">Sessions</th>
              <th className="py-[1.6rem] px-[2.4rem] border">Cost</th>
              <th className="py-[1.6rem] px-[2.4rem] border">Validity</th>
              <th className="py-[1.6rem] px-[2.4rem] border">Additional Features</th>
              <th className="py-[1.6rem] px-[2.4rem] border"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-gray-100 text-[1.5rem]">
                <td className="py-[1.2rem] px-[2.4rem]">{row.Package}</td>
                <td className="py-[1.2rem] px-[2.4rem]">{row.Sessions}</td>
                <td className="py-[1.2rem] px-[2.4rem]">{row.Cost}</td>
                <td className="py-[1.2rem] px-[2.4rem]">{row.Validity}</td>
                <td className="py-[1.2rem] px-[2.4rem]">{row.Additional_Features}</td>
                <td className="py-[1.2rem] px-[2.4rem]">
                  <Link to="/paynow">
                    <button className="bg-teal-600 text-white px-[2.4rem] py-2 rounded-lg hover:bg-teal-700 transition duration-300">Pay Now</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Contact section */}
        <div className="mt-[3.2rem]">
          <p className="text-teal-600 font-bold mb-4 text-[2.2rem]">Not sure which therapy to choose from?</p>
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

export default IndividualTherapyPrice;
