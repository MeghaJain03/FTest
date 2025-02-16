import { useEffect, useState } from 'react';
import { doctors } from '../assets/assets';
import DoctorCard from '../components/Doctors/DoctorCard';
import Testimonial from '../components/Testimonial';
import { getDoctors } from '../api/doctorsApi.js'
import Header from '../components/Header.jsx';
import { FaArrowLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer.jsx';

const Doctors = () => {
  document.title = "freudia - Therapists";
  const navigate = useNavigate()
  const [doctorsData, setDoctorsData] = useState([]);
  const [searchedVal, setSearchedVal] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [language, setLanguage] = useState("");
  const [location, setLocation] = useState("");
  useEffect(() => {
    const fetchDoctors = async () => {
      const result = await getDoctors()
      let resultantArr = result.data.data;
      const filteredArr = resultantArr.filter(data => data.qualifications.length !== 0 && data.weeklyTimeSlots.length !== 0)
      setDoctorsData(filteredArr)
    }
    fetchDoctors()
  }, [getDoctors])

  // Debounce function
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

  const handleSearch = debounce((value) => {
    setSearchedVal(value);
  }, 300);

  const filterDoctors = () => {
    return doctors.filter(doctor => {
      const matchesSpecialization = specialization ? doctor.specialization.toLowerCase() === specialization.toLowerCase() : true;
      const matchesLanguage = language ? doctor.preferredLanguages && doctor.preferredLanguages.some(lang => lang.toLowerCase() === language.toLowerCase()) : true;
      const matchesLocation = location ? doctor.state && doctor.state.toLowerCase() === location.toLowerCase() : true;
      const matchesSearch = searchedVal ? doctor.name.toLowerCase().includes(searchedVal.toLowerCase()) : true;

      return matchesSpecialization && matchesLanguage && matchesLocation && matchesSearch;
    });
  };

  useEffect(() => {
    setDoctorsData(filterDoctors());
  }, [searchedVal, specialization, language, location]);

  const handleClearFilters = () => {
    setSearchedVal("");
    setSpecialization("");
    setLanguage("");
    setLocation("");
    setDoctorsData(doctors);
  };

  return (
    <>
      <section className='bg-[#fff9ea] py-20 relative '>
        <div className='container text-center text-2xl'>

          <div className="flex items-center ml-8 gap-4 w-[20vw] cursor-pointer" onClick={() => { navigate(-1) }}>
            <FaArrowLeft className="text-[3rem]" />
            {/* <p className="text-[1.8rem] ">Back</p> */}
          </div>
          <h2 className='font-bold text-[4.1rem] mt-[-1rem]'>Find a Therapist</h2>

          <div className='w-full md:w-[80%] mt-[30px] mx-auto rounded-md flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7 p-4'>
            <aside className='lg:flex grid grid-cols-2 lg:flex-row gap-6'>
              <select
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                className='py-4 px-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                <option value="">Specialization</option>
                <option value="Therapists">Therapists</option>
                <option value="Psychologists">Psychologists (Clinical, Counseling, School)</option>
                <option value="Psychiatrists">Psychiatrists (Medical doctors who can prescribe medication)</option>
                <option value="Licensed Professional Counselors">Licensed Professional Counselors (LPCs)</option>
                <option value="Marriage and Family Therapists">Marriage and Family Therapists (MFTs)
                </option>
                <option value="Social Workers">Social Workers (LCSWs - Licensed Clinical Social Workers)</option>
                <option value="Mental Health Nurses">Mental Health Nurses (Psychiatric Nurse Practitioners)</option>
                <option value="Addiction Counselors">Addiction Counselors</option>
                <option value="Art, Music, or Dance Therapists">Art, Music, or Dance Therapists</option>
                <option value="Cognitive Behavioral Therapists (CBT) ">Cognitive Behavioral Therapists (CBT)</option>
                <option value="Dialectical Behavioral Therapists (DBT)">Dialectical Behavioral Therapists (DBT)</option>
                <option value="Psychoanalysts">Psychoanalysts</option>
                <option value="Humanistic Therapists">Humanistic Therapists</option>
                <option value="Integrative Therapists">Integrative Therapists</option>
                <option value="EMDR Therapists (Eye Movement Desensitization and Reprocessing)">EMDR Therapists (Eye Movement Desensitization and Reprocessing)</option>
                <option value="Family Systems Therapists">Family Systems Therapists</option>
                <option value="Children and Adolescents">Children and Adolescents</option>
                <option value="Adults">Adults</option>
                <option value="Couples Therapy">Couples Therapy</option>
                <option value="Family Therapy">Family Therapy</option>
                <option value="Trauma-Informed Therapists">Trauma-Informed Therapists</option>
                <option value="Geriatric Therapists">Geriatric Therapists</option>
                <option value="LGBTQIA+ Therapists">LGBTQIA+ Therapists
                </option>
                <option value="Therapists for Eating Disorders">Therapists for Eating Disorders</option>
                <option value="Grief and Loss Counselors">Grief and Loss Counselors</option>
                <option value="Veterans/First Responders Therapy">Veterans/First Responders Therapy</option>
                <option value="Therapists for Domestic Violence Survivors">Therapists for Domestic Violence Survivors</option>
                <option value="Private Practice">Private Practice</option>
                <option value="Hospital-Based Therapists">Hospital-Based Therapists</option>
                <option value="Community Mental Health Centers">Community Mental Health Centers</option>
                <option value="School-Based Therapists">School-Based Therapists</option>
                <option value="Teletherapy Practitioners">Teletherapy Practitioners</option>
                <option value="Inpatient Therapy Providers">Inpatient Therapy Providers</option>
              </select>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className='px-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                <option value="">Language</option>
                <option value="english">English</option>
                <option value="hindi">Hindi </option>
                <option value="panjabi">Punjabi </option>
                <option value="Urdu">Urdu</option>
                <option value="Bengali">Bengali</option>
                <option value="Haryanvi">Haryanvi</option>
                <option value="Bhojpuri">Bhojpuri</option>
                <option value="Maithili">Maithili</option>
                <option value="Kashmiri">Kashmiri</option>
                <option value="Tamil ">Tamil </option>
                <option value="Telugu">Telugu</option>
                <option value="Kannada ">Kannada </option>
                <option value="Malayalam">Malayalam</option>
                <option value="Tulu">Tulu</option>
                <option value="Konkani">Konkani</option>
                <option value="Sanskrit ">Sanskrit </option>
                <option value="Marathi ">Marathi </option>
                <option value="Gujarati">Gujarati</option>
                <option value="Rajasthani">Rajasthani</option>
                <option value="Sindhi">Sindhi</option>
                <option value="Odia">Odia</option>
                <option value="Nepali ">Nepali </option>
                <option value="Santali">Santali</option>

              </select>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className=' px-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                <option value="">Location</option>
                
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
              <button
                className='btn mt-0 rounded-md bg-irisBlueColor text-white px-4 py-4 hover:bg-blue-600 transition duration-200'
                onClick={handleClearFilters}
              >
                Clear all filters
              </button>
            </aside>

            <aside className='flex gap-6'>
              <input
                type="search"
                className='py-4 pl-4 pr-2 bg-white border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400'
                placeholder='Search Therapist'
                onChange={(e) => handleSearch(e.target.value)}
              />
              <button
                className='btn mt-0 rounded-md bg-irisBlueColor text-white px-4 py-4 hover:bg-blue-600 transition duration-200'
              >
                Search
              </button>
            </aside>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px]'>
            {doctorsData.length > 0 ? (
              doctorsData.map(doctor => (
                <DoctorCard key={doctor._id || doctor.email} doctor={doctor} />
              ))
            ) : (
              <p className='text-center w-screen  pt-36 text-red-500 font-bold text-4xl min-h-[32vh]'>No doctors found matching your criteria.</p>
            )}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Doctors;