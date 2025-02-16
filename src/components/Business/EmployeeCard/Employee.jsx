import React from "react";
import NavbarNew from "../NavbarNew";
import Banner from "../Banner";
import ContentCard from "../ContentCard";
import Testimonials from "../Testimonials";
import Footer from "../../Footer/Footer";
import LogoCarousel from "../LogoCarousel";
import EmployeeFeatures from "./EmployeeFeatures";

const Employee = () => {
  return (
    <>
      <NavbarNew />

      <div>
        <div className='h-full w-full flex flex-col space-y-[14.4rem] mb-[8rem]'>
          <Banner
            bgurl={"employee-bg"}
            title={"We're the industry leader for a reason"}
            content={ "Freudia has earned its place as the industry leader in mental health care by setting new benchmarks in accessibility, affordability, and innovation. Our holistic and user-centric approach ensures that individuals and communities receive the mental health support they need, no matter where they are or what challenges they face. With Freudia, mental health care is not just a service—it&apos;s a commitment to a healthier, happier world."
            }
            bannerSource='EMPLOYEE-BANNER'
          />
          <div>
            <LogoCarousel />
          </div>
          <ContentCard />
        </div>
        <div>
          <EmployeeFeatures />
        </div>
      </div>

      <div className='mb-16'>
        <Testimonials />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Employee;
