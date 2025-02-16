import React from "react";
import NavbarNew from "./NavbarNew";
import Cards from "./Cards";
import Banner from "./Banner";
import ContentCard from "./ContentCard";
import FeatureSection from "./FeatureSection";
import Footer from "../Footer/Footer";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";

const Business = () => {
  document.title = "freudia - Business";
  return (
    <>
      <NavbarNew />
      <div className="bg-gradient">
        {/* Card Section */}
        <div className='w-full h-screen flex flex-col sm:flex-row items-center justify-center sm:space-x-[4rem] space-y-[4rem] sm:space-y-0 p-8'>
          <Link to='/business/employee' className="w-full">
            <Cards name={"Employee"} />
          </Link>
          <Link to='/business/organization' className="w-full">
            <Cards name={"Organization"} />
          </Link>
        </div>

        {/* Banner and ContentCard Section */}
        <div className='w-full flex flex-col space-y-20 sm:space-y-24 lg:space-y-36 mb-10'>
          <Banner
            bgurl={"business-bg"}
            title={" The #1 mental health benefit"}
            content={
              "Freudia Platforms Private Limited has established itself as India&apos;s leading mental health solution, offering a comprehensive, affordable, and innovative approach to mental well-being. With its unique blend of affordability, accessibility, and technology-driven care, Freudia has set a new benchmark in the mental health industry, addressing the critical gaps in mental health services across the nation."
            }
            bannerSource='BUSINESS-BANNER'
          />
          <ContentCard />
        </div>

        {/* Feature Section */}
        <div className='p-4 sm:p-6 lg:p-10'>
          <FeatureSection />
        </div>

        {/* Testimonials Section */}
        <div className='mb-8 sm:mb-12 lg:mb-16 p-4 overflow-x-hidden'>
          <Testimonials />
        </div>

        {/* Footer */}
        <div className='bg-gray-100'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Business;
