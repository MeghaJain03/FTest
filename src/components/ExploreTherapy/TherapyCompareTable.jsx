import React, { useState } from "react";
import { therapyComparison } from "../../assets/assets";
import { assets } from "../../assets/assets";
import { RxQuestionMarkCircled } from "react-icons/rx";

const TherapyCompareTable = () => {
  const tickImgUrl =
    "https://assets.betterhelp.com/betterhelp_two/icons/yes.svg";
  const crossImgUrl =
    "https://assets.betterhelp.com/betterhelp_two/icons/no.svg";
  const [openInfo, setOpenInfo] = useState(true);
  const toggleInfo = (index) => {
    setOpenInfo(openInfo === index ? null : index);   
  };
  return (
    <table className="w-full lg:w-[53%]">
      <thead>
        <tr>
          <th></th>
          <th className="text-[1.8rem] text-[#f5f7f5] ">
            Freudia
          </th>
          <th className="text-[1.8rem] text-[#f5f7f5] ">In-office</th>
        </tr>
      </thead>
      <tbody>
        {therapyComparison.map((option, index) => (
          <tr key={index} className="border-b-[1.5px] border-b-[#617669]">
            <td className="text-[#f5f7f5] text-[1.3rem] lg:text-[1.6rem] lg:p-[2.4rem] lg:pl-[0.2rem] font-inter py-[0.8rem] pl-[2.8rem] pr-[0.8rem] flex items-start justify-between lg:justify-start lg:gap-3">
              <h4 className="w-[50%]">{option.feature}</h4>
              <div className="relative w-[65%] h-full">
                <img
                  src={assets.info}
                  alt="Info"
                  onMouseEnter={() => {
                    toggleInfo(index);
                  }}
                  onMouseLeave={() => toggleInfo(null)}
                />
                <p
                  className={`py-4 w-[70%] p-5 z-[9] bg-textPrimary text-primary absolute left-[15%] text-[1.4rem] top-[-110%] rounded-xl ${
                    openInfo===index ? "visible" : "hidden"
                  }`}
                >
                  {option.faq}
                </p>
                <div className={`w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[10px] border-r-textPrimary absolute left-[11%] top-0 ${openInfo===index ? "visible" : "hidden"} `}></div>

              </div>
     
            </td>
            {/* For BetterHelp */}
            <td className="bg-[#f5f7f5] text-[1.6rem] w-[7.2rem] ">
              <img
                src={option.betterHelp ? tickImgUrl : crossImgUrl}
                alt={option.betterHelp ? "Yes" : "No"}
                className="block mx-auto"
              />
            </td>

            {/* For In-office */}
            <td>
              {option.inOffice.nan ? (
                <RxQuestionMarkCircled
                  style={{
                    fontSize: "2.8rem",
                    color: "#325343",
                    backgroundColor: "gray",
                    display: "block",
                    margin: "auto",
                  }}
                />
              ) : (
                <img
                  src={option.inOffice.result ? tickImgUrl : crossImgUrl}
                  alt={option.inOffice.result ? "Yes" : "No"}
                  className="block mx-auto"
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TherapyCompareTable;
