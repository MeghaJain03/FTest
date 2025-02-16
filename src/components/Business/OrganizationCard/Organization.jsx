import React from "react";
import NavbarNew from "../NavbarNew";
import NgoSwiper from "./NgoSwiper";
import Banner from "../Banner";
import Footer from "../../Footer/Footer";
import RequestDemo from "../../RequestDemo";

const Organization = () => {
  return (
    <>
      <NavbarNew />
      <div className='w-full'>
        <div className='h-full w-full flex flex-col space-y-16 sm:space-y-24 md:space-y-28 lg:space-y-36 mb-32'>
          <Banner
            bgurl={"organizaton-bg"}
            title={"We're the industry leader for a reason"}
            content={
              "Freudia has earned its place as the industry leader in mental health care by setting new benchmarks in accessibility, affordability, and innovation. Our holistic and user-centric approach ensures that individuals and communities receive the mental health support they need, no matter where they are or what challenges they face. With Freudia, mental health care is not just a service—it&apos;s a commitment to a healthier, happier world."
            }
            bannerSource='ORGANIZATION-BANNER'
          />
        </div>
      </div>
      <div className='mb-12 sm:mb-14 md:mb-16'>
        <NgoSwiper />
      </div>
      <div className='flex items-center justify-center mb-12 sm:mb-14 md:mb-16'>
        <RequestDemo source='ORGANIZATION-CARD' />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Organization;
