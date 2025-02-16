import React from "react";

const DiscountPriceTable = () => {
  const data = [
    { id: 1, Package: "Single Session", Sessions: "1 Session", Cost: "INR 250/session", Validity: "7 Days", Additional_Features: "On-Demand Therapy" },
    { id: 2, Package: "Basic Package", Sessions: "4 Sessions", Cost: "INR 800/month", Validity: "30 days", Additional_Features: "Free Mental Wellness E-book" },
    { id: 3, Package: "Advance Package", Sessions: "8 Sessions", Cost: "INR 1500/month", Validity: "45 Days", Additional_Features: "3 Free Group Support Sessions" },
    { id: 4, Package: "Annual Plan", Sessions: "50 Sessions", Cost: "INR 9000/year", Validity: "12 Months", Additional_Features: "Priority Booking + 3 Free Group Support Sessions" },
  ];

  return (
    <div className="my-[3.2rem] md:mx-auto w-4/5 text-center">
      {/* Table Container */}
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-teal-600 text-white text-[1.6rem]">
            <th className="py-[1.6rem] px-[2.4rem] border">Package</th>
            <th className="py-[1.6rem] px-[2.4rem] border">Sessions</th>
            <th className="py-[1.6rem] px-[2.4rem] border">Cost</th>
            <th className="py-[1.6rem] px-[2.4rem] border">Validity</th>
            <th className="py-[1.6rem] px-[2.4rem] border">Additional Features</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100 text-[1.4rem]">
              <td className="py-[1.2rem] px-[2.4rem]">{row.Package}</td>
              <td className="py-[1.2rem] px-[2.4rem]">{row.Sessions}</td>
              <td className="py-[1.2rem] px-[2.4rem]">{row.Cost}</td>
              <td className="py-[1.2rem] px-[2.4rem]">{row.Validity}</td>
              <td className="py-[1.2rem] px-[2.4rem]">{row.Additional_Features}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiscountPriceTable;
