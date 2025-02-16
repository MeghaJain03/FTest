import React from "react";
import NavbarNew from "../Business/NavbarNew";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import CardLayout from "./CardLayout";
// import RequestDemo from "../RequestDemo";

const OtherOrganization = () => {
  return (
    <>
      <NavbarNew />
      <div>
        <img
          src='/organizationbanner.jpg'
          alt='banner'
          className='w-full h-[18.7rem] object-cover bg-no-repeat'
        />
      </div>
      <div className='flex flex-col gap-12 justify-center items-center text-center py-[90px]'>
        <h1 className='text-[48px] font-[250] text-[#444444]'>
          We work with everyone
        </h1>
        <p className='text-[18px] w-[750px] font-thin text-[#4a4d4a]'>
        At Freudia, inclusivity is at the heart of everything we do. Our platform is designed to support individuals, families, communities, and organizations, regardless of their background, location, or financial capacity.
       We cater to students, professionals, rural communities, and underserved populations by providing affordable and accessible mental health care. Corporations and businesses benefit from tailored wellness programs that enhance employee well-being and productivity. Our services extend to urban and rural areas alike, ensuring no one is left behind.
       By working with diverse groups and adapting to their unique needs, Freudia fosters a sense of connection, understanding, and empowerment for all.
        </p>
        {/* <RequestDemo source='Other-Organization' /> */}
      </div>
      <div className='mb-40 flex flex-col gap-12'>
        <CardLayout
          title='Universities'
          description="Freudia collaborates with universities to create a supportive environment that prioritizes students mental well-being. Our affordable therapy sessions, starting at just ₹250, make professional mental health care accessible to students, reducing the barriers of cost and stigma.

          Through tailored workshops, awareness campaigns, and anonymous support groups, we address common challenges like academic stress, anxiety, and peer pressure. Our AI-driven tools and personalized solutions empower universities to monitor and improve the overall mental health of their students."
          imageSrc='/universities.png'
          imagePosition='right'
          cardSource={"Universities"}
        />
        <CardLayout
          title='Non-Profits'
          description='Freudia is dedicated to collaborating with nonprofit organizations to extend affordable, accessible mental health care to underserved populations. By working with nonprofits, we can offer therapy, support groups, and wellness programs to individuals in vulnerable communities who might not otherwise have access to such services.'
          imageSrc='/Non-Profit.webp'
          imagePosition='left'
          cardSource={"Non-Profits"}
        />
        <CardLayout
          title='Schools'
          description="Freudia partners with schools to provide mental health support to students, teachers, and parents. Our platform offers affordable therapy sessions, workshops, and 
          awareness programs that address common mental health challenges in educational settings."
          imageSrc='/School.webp'
          imagePosition='right'
          cardSource={"Schools"}
        />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default OtherOrganization;
