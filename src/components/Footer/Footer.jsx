import React from "react";
import Title from "./Title";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SocialMediaLogos from "./SocialMediaLogos";
import { Link } from "react-router-dom";
// [#f5f7f5]
// min-h-[65rem] lg:min-h-[auto]
const Footer = () => {
  return (
    <section className="w-full h-[17vh] bg-[#008784]   border-t-[1px] border-t-[#e7ece7] px-[2.4rem] ">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start md:w-[90%] md:mx-auto lg:w-[80%] md:pb-[3rem] lg:items-center lg:pb-0 border-b-[#e7ece7] border-b-2">
        <section className="grid grid-rows-5 gap-y-6 lg:gap-y-0 grid-cols-2 lg:flex lg:gap-6 lg:pt-0 pt-11">
          <Title text="Home" />
          <Title text="Services" />
          <Title text="Business" />
          <Title text="About" />
          <Link to="/doctors/signup" className="text-2xl text-black">Become A Therapist</Link>
          <Link to="/blog" className="text-2xl text-white">Blog</Link>
          <Title text="FAQ" />
        </section>
        <section className="flex mb-12 lg:mb-0 lg:items-center lg:py-7">
         <a href="https://www.facebook.com/freudia4u/"> <SocialMediaLogos Icon={FaFacebookF} /> </a>
         <a href="http://www.instagram.com/freudia4u"> <SocialMediaLogos Icon={FaInstagram} /> </a>
          <a href="https://www.youtube.com/freudia_official"><SocialMediaLogos Icon={FaYoutube} /></a>
          <a href="https://www.x.com/freudia"><SocialMediaLogos Icon={FaXTwitter} /> </a>
         <a href="https://www.linkedin.com/company/freudia/"> <SocialMediaLogos Icon={FaLinkedinIn} /> </a>
        </section>
      </div>
      <section className="grid grid-cols-1  lg:grid-rows-1 lg:grid-cols-5 gap-y-5 lg:mb-8 md:w-[90%] md:mx-auto md:pt-[3rem] lg:flex lg:gap-6 lg:items-end lg:pt-7 lg:w-[80%]">
        <Title text="Terms & Conditions" />
        <Title text="Privacy Policy" />
        <Title text="Refund Policy" />
        <Title text="©️ 2024 Freudia Platforms Pvt. Ltd" />
      </section>
    </section>
  );
};

export default Footer;
