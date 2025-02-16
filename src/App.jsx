import { VerificationProvider } from "./context/VerificationContext";
import { VerificationContextProvider } from "./context/verifyToken";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import SignupPage from "./containers/SignupPage";
import FaqPage from "./containers/FaqPage";
import BlogPage from "./containers/BlogPage";
import AdminSignup from "./components/Admin/AdminSIgnup";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";
import CreateBlog from "./components/Blog/CreateBlog";
import BlogDesc from "./components/Blog/BlogDesc";
import MoreBlogs from "./components/Blog/MoreBlogs";
import ProgramPage from "./containers/ProgramPage";
import Home from "./components/Farmers/Home/Home";
import StudentHome from "./components/Students/Home/Home";
import Register from "./components/Farmers/Authentication/Register";
import StudentRegister from "./components/Students/Authentication/Register";
import StudentLogin from "./components/Students/Authentication/StudentLogin";
import FarmerLogin from "./components/Farmers/Authentication/FarmerLogin";
import SignUp from "./components/User/SignUp";
import SignIn from "./components/User/SignIn";
import ForgotPsswd from "./components/User/ForgotPsswd";
import Verify from "./components/User/Verify";
import ResetPsswd from "./components/User/ResetPsswd";
import GroupsHome from "./components/Groups/Home";
import AboutGroup from "./components/Groups/AboutGroup";
import GroupJoined from "./components/Groups/GroupJoined";
import AllGroups from "./components/Groups/AllGroups";
import AddGroup from "./components/Groups/AddGroup/AddGroup";
import EditGroup from "./components/Groups/EditGroup/EditGroup"
import AllGroupCategories from "./components/Groups/AllGroupCategories";
import AccountHome from "./components/AccountSettings/Home";
// import MyTherapist from "./components/AccountSettings/Therapist/YourTherapist"
import Doctors from "./containers/Doctors";
import DoctorDetails from "./components/Doctors/DoctorDetails";
import BookingHome from "./components/BookTherapy/BookingHome"
import AdminHome from "./components/Admin/AdminHome";
import DoctorSignup from "./components/Doctors/Doctor Authentication/Signup";
import DoctorsLogin from "./components/Doctors/Doctor Authentication/Login";
import VideoHomePage from "./components/Video/Home";
import VideoCall from "./components/Video/VideoCall";
import { SocketProvider } from "./context/SocketProvider";
import Contact from "./containers/Contact";
import Services from "./containers/Services"
import Premium from "./containers/Premium"
import ServicesCard from "./components/ServicesCard";
import ScrollToTop from "./components/ScrollToTop"
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Business from "./components/Business/Business"
//pricePLans link
import IndividualTherapyPrice from "./components/Premium/PricePlans/IndividualTherapyPrice"
import CareerCounsellingPrice from "./components/Premium/PricePlans/CareerCounsellingPrice"
import ChildTherapyPrice from "./components/Premium/PricePlans/ChildTherapyPrice"
import CoupleTherapyPrice from "./components/Premium/PricePlans/CoupleTherapyPrice"
import MentalHealthAssessmentPrice from "./components/Premium/PricePlans/MentalHealthAssessmentPrice"
import PsychiatricConsultationPrice from "./components/Premium/PricePlans/PsychiatricConsultationPrice"
import GroupTherapyPrice from "./components/Premium/PricePlans/GroupTherapyPrice"
import LifeCoachingPrice from "./components/Premium/PricePlans/LifeCoachingPrice"
import StudentsTherapyPrice from "./components/Premium/PricePlans/StudentsTherapyPrice"
import EmergencyTherapyPrice from "./components/Premium/PricePlans/EmergencyTherapyPrice"
import DiscountPriceTable from "./components/Premium/DiscountPriceTable";
import Employee from "./components/Business/EmployeeCard/Employee";
import Organization from "./components/Business/OrganizationCard/Organization";
import OtherOrganization from "./components/OtherOrganization/OtherOrganization";

 export const url = "http://localhost:3000";
// export const url = "https://betterhelpclonebackend.onrender.com";

function App() {
  return (
    <SocketProvider>
      <VerificationProvider>
        <VerificationContextProvider>
          <main className="w-full min-h-screen bg-slate-100 overflow-hidden">
            <ScrollToTop/>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/business" element={<Business />} />
              <Route path="/business/employee" element={<Employee />} />
              <Route path="/business/organization" element={<Organization />} />
              <Route path="/business/otherorganization" element={<OtherOrganization />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/user/signin" element={<SignIn />} />
              <Route path="/user/AccountSettings" exact element={<AccountHome />} />
              <Route path="/user/AccountSettings/:section" exact element={<AccountHome />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/groups" element={<GroupsHome />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/user/signup" element={<SignUp />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/adminsignup" element={<AdminSignup />} />
              <Route path="/adminlogin" element={<AdminLogin />} />
              <Route path="/createblog" element={<CreateBlog />} />
              <Route path="/admin/addGroup" element={<AddGroup />} />
              <Route path="/blog/:title" element={<BlogDesc />} />
              <Route path="/allBlogs" element={<MoreBlogs />} />
              <Route path="/programs" element={<ProgramPage />} />
              <Route path="/programs/farmers" element={<Home />} />
              <Route path="/programs/students" element={<StudentHome />} />
              <Route path="/programs/farmers/signup" element={<Register />} />
              <Route path="/programs/students/signup" element={<StudentRegister />} />
              <Route path="/programs/students/signin" element={<StudentLogin />} />
              <Route path="/programs/farmers/signin" element={<FarmerLogin />} />
              <Route path="/user/resetPsswd" element={<ForgotPsswd />} />
              <Route path="/user/verifyPsswd" element={<Verify />} />
              <Route path="/user/changePsswd" element={<ResetPsswd />} />
              <Route path="/groups/visit/:id" element={<AboutGroup />} />
              <Route path="/groups/join/:id" element={<GroupJoined />} />
              <Route path="/groups/allGroups" element={<AllGroups />} />
              <Route path="/groups/allGroupCategories" element={<AllGroupCategories />} />
              <Route path="/admin/editGroup/:id" element={<EditGroup />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/doctors/:id" element={<DoctorDetails />} />
              <Route path="/doctors/signup" element={<DoctorSignup />} />
              <Route path="/doctors/login" element={<DoctorsLogin />} />
              <Route path="/bookDoctor/:id" element={<BookingHome />} />
              <Route path="/admin" element={<AdminHome />}></Route>
              <Route path="/callVideo" element={<VideoHomePage />}></Route>
              <Route path="/services" element={<Services />}></Route>
              <Route path="/premium" element={<Premium />}></Route>
              <Route path="/services/:id" element={<ServicesCard />}></Route>
              <Route path="/videoCall/:roomCode" element={<VideoCall />}></Route>
              {/* pricePLans links */}
              <Route path="/IndividualTherapyPrice" element={
                <>
                  <main className="bg-white min-h-[80vh]"><IndividualTherapyPrice />
                    <div className="absolute bottom-0 w-full bg-[#f5f7f5] "><Footer /></div>
                  </main>
                </>} />
              <Route path="/CoupleTherapyPrice" element={
                <>
                  <main className="bg-white min-h-screen relative"><CoupleTherapyPrice />
                    <div className="w-full bg-[#f5f7f5] "><Footer /></div>
                  </main>
                </>} />
              <Route path="/ChildTherapyPrice" element={
                <>
                  <main className="bg-white min-h-screen relative"><ChildTherapyPrice />
                    <div className="w-full bg-[#f5f7f5] "><Footer /></div>
                  </main>
                </>} />
              <Route path="/StudentsTherapyPrice" element={
                <>
                  <main className="bg-white min-h-screen relative"><StudentsTherapyPrice />
                    <div className=" w-full bg-[#f5f7f5] "><Footer /></div>
                  </main>
                </>} />
              <Route path="/LifeCoachingPrice" element={
                <>
                  <main className="bg-white min-h-screen relative"><LifeCoachingPrice />
                    <div className=" w-full bg-[#f5f7f5] "><Footer /></div>
                  </main>
                </>} />
              <Route path="/CareerCounsellingPrice" element={
                <>
                  <main className="bg-white min-h-screen relative"><CareerCounsellingPrice />
                    <div className=" w-full bg-[#f5f7f5] "><Footer /></div>
                  </main>
                </>} />
              <Route path="/EmergencyTherapyPrice" element={
                <>
                  <main className="bg-white min-h-[170vh] relative"><EmergencyTherapyPrice />
                    <div className="w-full bg-[#f5f7f5] "><Footer /></div>
                  </main>
                </>} />
              <Route path="/GroupTherapyPrice" element={
                <>
                  <main className="bg-white min-h-screen relative"><GroupTherapyPrice />
                    <div className="w-full bg-[#f5f7f5] "><Footer /></div>
                  </main>
                </>} />
              <Route path="/PsychiatricConsultationPrice" element={
                <>
                  <main className="bg-white min-h-screen relative"><PsychiatricConsultationPrice />
                    <div className="w-full bg-[#f5f7f5] "><Footer /></div>
                  </main>
                </>} />
              <Route path="/MentalHealthAssessmentPrice" element={
                <>
                  <main className="bg-white min-h-screen relative"><MentalHealthAssessmentPrice />
                    <div className="w-full bg-[#f5f7f5] "><Footer /></div>
                  </main>
                </>} />
              <Route path="/DiscountPrice" element={<><Header /><div className="pt-32 bg-white h-screen relative"><DiscountPriceTable /></div><div className="absolute bottom-0 w-full bg-[#f5f7f5] "><Footer /></div></>} />
            </Routes>
          </main>
        </VerificationContextProvider>
      </VerificationProvider>
    </SocketProvider>
  );
}

export default App;
