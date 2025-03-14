import React, { useRef, useState } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { url } from "../../App";

const SignUp = () => {
  const fileInputRef = useRef(null);
  const [formData, setformData] = useState({
    email: "",
    password: "",
    phoneNumber:"",
    profileFile: assets.profileIcon,
    profileImage: null,
  });

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, profileImage,phoneNumber } = formData;
    const formDataToSend = new FormData();
    formDataToSend.append("email", email);
    formDataToSend.append("phoneNumber",phoneNumber)
    formDataToSend.append("password", password);
    if (profileImage) {
      formDataToSend.append("profileImage", profileImage);
      console.log("profileImage", profileImage);
    }
    else{
      alert("please upload your profile photo")
      return
    }
    // for (const [key, value] of formDataToSend.entries()) {
    //   console.log(`${key}: ${typeof(value)}`);
    // }
    try {
      const response = await axios.post(
        `${url}/api/users/register`,
        formDataToSend
      );
      console.log("res", response.data);

      if (response.data.success) {
        setformData((prev) => ({
          ...prev,
          email: "",
          password: "",
          phoneNumber:"",
          profileImage: null,
        }));
        toast.success("Account Created Successfully");
      }
    } catch (error) {
      if (error.response) {
        toast.error("email already exists");
        setformData((prev) => ({
          ...prev,
          email: "",
          password: "",
          phoneNumber:"",
          profileImage: null,
        }));
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  const onhandleUpload = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({ ...prev, [name]: value }));
  };

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setformData((prev) => ({
        ...prev,
        profileFile: URL.createObjectURL(file), // For preview
        profileImage: file,
      }));
    }
  };

  return (
    <>
      <ToastContainer className="text-2xl font-semibold" />
      <main className="flex flex-col justify-between  w-full min-h-[100vh] bg-[#5b7568] ">
        <Header customBG={true} />
        <section className="w-full py-28 px-[3rem] md:px-[11rem] flex flex-col md:flex-row my-auto">
          <aside className="w-full md:w-[50%] ">
            <p className="text-[3.2rem] w-full md:w-[80%] text-textPrimary font-overpass font-light p-[1rem_0_0_1rem]">
              Sometimes when things are falling apart, they may actually be
              falling into place.
            </p>
          </aside>
          <aside className="w-full md:w-[50%] bg-white rounded-2xl py-10">
            <form
              className="flex flex-col gap-8 w-[80%] items-center mx-auto"
              onSubmit={onHandleSubmit}
            >
              <div
                className={`relative w-36 h-36  rounded-full ${
                  !formData.profileImage
                    ? ""
                    : "border-[2px] border-[#90928f] overflow-hidden"
                }`}
              >
                <img
                  src={
                    formData.profileImage
                      ? formData.profileFile
                      : assets.profileIcon
                  }
                  className="w-full h-full object-contain"
                  alt=""
                />
                <input
                  type="file"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={onFileChange}
                  accept="image/*"
                />
                <span
                  className="text-[#444444] absolute bottom-[-6%]  right-[-2%] text-5xl cursor-pointer"
                  onClick={onhandleUpload}
                >
                  +
                </span>
              </div>
              <div className="flex items-center mt-0">
                <p className="text-2xl font-semibold">Upload your profilePic</p>
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="hover:shadow-[0_0_0_3px_#a6de9b] w-full border-[2px] border-[#6d706c] font-inter text-2xl font-semibold px-6 py-6 text-[#4a4d4a] rounded-xl"
                onChange={handleChange}
                value={formData.email}
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                className="hover:shadow-[0_0_0_3px_#a6de9b] w-full border-[2px] border-[#6d706c] font-inter text-2xl font-semibold px-6 py-6 text-[#4a4d4a] rounded-xl"
                onChange={handleChange}
                maxLength={10}
                value={formData.phoneNumber}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="hover:shadow-[0_0_0_3px_#a6de9b] w-full border-[2px] border-[#6d706c] font-inter text-2xl font-semibold px-6 py-6 text-[#4a4d4a] rounded-xl"
                onChange={handleChange}
                value={formData.password}
              />
              <input
                type="submit"
                value="Signup"
                className="text-primary w-full bg-[#a6de9b] py-[1.5rem] text-4xl text-center font-overpass rounded-[5rem]  border-[1px] 
                font-medium hover:bg-secondary hover:text-textPrimary transition all ease 1s cursor-pointer"
              />
              <Link
                to="/user/signin"
                className="text-secondary text-2xl font-bold hover:text-primary transition all ease 1s cursor-pointer"
              >
                Already have an account??{" "}
                <span className="underline">Login</span>
              </Link>
            </form>
          </aside>
        </section>
  
      </main>
    </>
  );
};

export default SignUp;
