import React from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeFeatures = () => {
  return (
    <>
      <div className='px-4'>
        {/* Heading and Description Section */}
        <div className='flex flex-col justify-center items-center text-center xl:text-left gap-7 mt-6 xl:mt-0'>
          <h1 className='text-[24px] sm:text-[28px] xl:text-[32px] font-[300] text-[#444444]'>
            What you get
          </h1>
          <p className='text-[16px] sm:text-[18px] text-center mb-11 w-full sm:w-[500px] xl:w-[650px] font-thin text-[#4a4d4a] mx-auto xl:mx-0'>
          Freudia offers a holistic mental health solution that is both affordable and accessible, ensuring personalized care for every individual. 
          With therapy sessions starting at just ₹250, the platform prioritizes inclusivity and affordability for students, rural clients, and underserved communities. 
          Combining expert care from highly qualified psychologists with cutting-edge technology, Freudia delivers real-time insights through AI and biometric tools, enabling early detection and tailored interventions.
          Freudia also ensures complete anonymity and confidentiality, fostering a stigma-free environment with anonymous support groups and secure data handling. Through its community-focused programs, such as the Farmers 
          Wellness Program, and corporate wellness initiatives, Freudia extends its impact to both individuals and organizations. With 24/7 access, self-help tools, and progress tracking, Freudia is a trusted partner in the journey toward better mental health.
          </p>
        </div>

        {/* Cards Section */}
        <div className='mb-20 flex flex-col justify-center items-center'>
          {/* First Row of Cards */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            <EmployeeCard
              title='Largest Network'
              description='30,000 and counting therapists on the platform.'
              imgurl='/Network.png'
            />
            <EmployeeCard
              title='Match within 24 hours'
              description='88% of clients are matched within 24 hours.'
              imgurl='/Match.png'
            />
            <EmployeeCard
              title='Communicate your way'
              description='Enjoy live sessions via video, phone, and live chat.'
              imgurl='/Communicate.png'
            />
          </div>

          {/* Second Row of Cards */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8'>
            <EmployeeCard
              title='Robust reporting'
              description='Live & robust utilisation reporting with all the details you need.'
              imgurl='/Robust.webp'
            />
            <EmployeeCard
              title='Pay for what you use'
              description='Simple pay-per-use pricing plan for your employees'
              imgurl='/Pay.png'
            />
            <EmployeeCard
              title='Zero integration rollout'
              description='No hassle rollout within 14 days from an agreement.'
              imgurl='/Calender.png'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeFeatures;
