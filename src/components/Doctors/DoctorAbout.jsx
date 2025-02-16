// import React from 'react'
// import { formateDate } from '../../utils/formateDate'

// const DoctorAbout = ({ aboutDoctor }) => {

//   const { fullName, about, experiences, qualifications, } = aboutDoctor
//   return (
//     <div>
//       <div>
//         <h3 className='text-[23px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>About of
//           <span className='text-irisBlueColor font-bold text-[25px] leading-[3rem]'>{fullName}</span> </h3>
//         <p className='text_para text-2xl font-light mt-2'>{about}</p>
//       </div>

//       <div className='mt-12'>
//         <h3 className='text-[22px] leading-[30px] text-headingColor font-semibold flex items-center gap-2' >Education</h3>

//         <ul className='pt-4 md:p-5'>
//           {qualifications.map((qualification, index) => (
//             <li key={index} className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-8 md-[30px]'>
//               <div>
//                 <span className='text-irisBlueColor text-[16px] leading-[3rem] font-semibold'>{qualification.timePeriod}</span>
//                 <p className='text-[16px] leading-6 font-medium text-textColor'>{qualification.degree}</p>
//               </div>
//               <p className='text-[14px] leading-5 font-medium text-textColor'>{qualification.institution}</p>
//             </li>
//           ))}
//         </ul>

//       </div>


//       <div className='mt-12'>
//         <h3 className='text-[22px] leading-[30px] text-headingColor font-semibold flex items-center gap-2' >Experience</h3>
//         <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
//   {experiences.map((experience, index) => (
//     <li key={index} className='p-7 rounded bg-[#fff9ea]'>
//       <span className='text-yellowColor text-[15px] leading-6 font-semibold'>{experience.timePeriod}</span>
//       <p className='text-[16px] leading-[3rem] font-medium text-textColor'>{experience.designation}</p>
//       <p className='text-[14px] leading-5 font-medium text-textColor'>{experience.institution}</p>
//     </li>
//   ))}
// </ul>   
//       </div>

//     </div>
//   )
// }

// export default DoctorAbout





// import React from 'react'
// import { formateDate } from '../../utils/formateDate'
// import PropTypes from 'prop-types';
// const DoctorAbout = ({ aboutDoctor = {} }) => {
//   const { fullName = '', about = '', experiences = [], qualifications = [] } = aboutDoctor;

//   return (
//     <div>
//       <div>
//         <h3 className='text-[23px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
//           About 
//           <span className='text-irisBlueColor font-bold text-[25px] leading-[3rem]'>
//             {fullName || 'Doctor'}
//           </span>
//         </h3>
//         <p className='text_para text-2xl font-light mt-2'>{about || 'No information available.'}</p>
//       </div>

//       {/* Education Section */}
//       <div className='mt-12'>
//         <h3 className='text-[22px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>Education</h3>
//         <ul className='pt-4 md:p-5'>
//           {qualifications.length > 0 ? (
//             qualifications.map((qualification, index) => (
//               <li key={index} className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-8 md-[30px]'>
//                 <div>
//                   <span className='text-irisBlueColor text-[16px] leading-[3rem] font-semibold'>
//                     {qualification.timePeriod || 'N/A'}
//                   </span>
//                   <p className='text-[16px] leading-6 font-medium text-textColor'>
//                     {qualification.degree || 'Unknown Degree'}
//                   </p>
//                 </div>
//                 <p className='text-[14px] leading-5 font-medium text-textColor'>
//                   {qualification.institution || 'Unknown Institution'}
//                 </p>
//               </li>
//             ))
//           ) : (
//             <p className='text-textColor'>No qualifications available.</p>
//           )}
//         </ul>
//       </div>

//       {/* Experience Section */}
//       <div className='mt-12'>
//         <h3 className='text-[22px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>Experience</h3>
//         <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
//           {experiences.length > 0 ? (
//             experiences.map((experience, index) => (
//               <li key={index} className='p-7 rounded bg-[#fff9ea]'>
//                 <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
//                   {experience.timePeriod || 'N/A'}
//                 </span>
//                 <p className='text-[16px] leading-[3rem] font-medium text-textColor'>
//                   {experience.designation || 'Unknown Designation'}
//                 </p>
//                 <p className='text-[14px] leading-5 font-medium text-textColor'>
//                   {experience.institution || 'Unknown Institution'}
//                 </p>
//               </li>
//             ))
//           ) : (
//             <p className='text-textColor'>No experience available.</p>
//           )}
//         </ul>   
//       </div>
//     </div>
//   )
// }

// export default DoctorAbout;







import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const DoctorAbout = ({ aboutDoctor = {} }) => {
  const { fullName = '', about = '', experiences = [], qualifications = [] } = aboutDoctor;

  return (
    <div>
      <div>
        <h3 className='text-[23px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
          About 
          <span className='text-irisBlueColor font-bold text-[25px] leading-[3rem]'>
            {fullName || 'Doctor'}
          </span>
        </h3>
        <p className='text_para text-2xl font-light mt-2'>{about || 'No information available.'}</p>
      </div>

      {/* Education Section */}
      <div className='mt-12'>
        <h3 className='text-[22px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>Education</h3>
        <ul className='pt-4 md:p-5'>
          {qualifications.length > 0 ? (
            qualifications.map((qualification, index) => (
              <li key={index} className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-8 md-[30px]'>
                <div>
                  <span className='text-irisBlueColor text-[16px] leading-[3rem] font-semibold'>
                    {qualification.timePeriod || 'N/A'}
                  </span>
                  <p className='text-[16px] leading-6 font-medium text-textColor'>
                    {qualification.degree || 'Unknown Degree'}
                  </p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                  {qualification.institution || 'Unknown Institution'}
                </p>
              </li>
            ))
          ) : (
            <p className='text-textColor'>No qualifications available.</p>
          )}
        </ul>
      </div>

      {/* Experience Section */}
      <div className='mt-12'>
        <h3 className='text-[22px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>Experience</h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
          {experiences.length > 0 ? (
            experiences.map((experience, index) => (
              <li key={index} className='p-7 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                  {experience.timePeriod || 'N/A'}
                </span>
                <p className='text-[16px] leading-[3rem] font-medium text-textColor'>
                  {experience.designation || 'Unknown Designation'}
                </p>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                  {experience.institution || 'Unknown Institution'}
                </p>
              </li>
            ))
          ) : (
            <p className='text-textColor'>No experience available.</p>
          )}
        </ul>   
      </div>
    </div>
  );
};

// ✅ Add PropTypes for validation
DoctorAbout.propTypes = {
  aboutDoctor: PropTypes.shape({
    fullName: PropTypes.string,
    about: PropTypes.string,
    experiences: PropTypes.arrayOf(
      PropTypes.shape({
        timePeriod: PropTypes.string,
        designation: PropTypes.string,
        institution: PropTypes.string,
      })
    ),
    qualifications: PropTypes.arrayOf(
      PropTypes.shape({
        timePeriod: PropTypes.string,
        degree: PropTypes.string,
        institution: PropTypes.string,
      })
    ),
  }),
};

export default DoctorAbout;

