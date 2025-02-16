import React, { useState } from "react";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { BsFillCameraVideoFill, BsFillCameraVideoOffFill } from "react-icons/bs";

const SetupScreen = ({ isVideoBlurred, localVideoRef, toggleMute, toggleCamera, toggleVideoBlur, joinRoom, isHost, isMuted, isCameraOff }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <div className={`flex items-center justify-center h-screen bg-gray-100 `}>
        <div className="flex items-center justify-center gap-20 lg:gap-10 lg:flex-row flex-col">
          <div className="relative flex items-center justify-center">
            <div className="w-[90%] lg:w-[35vw] lg:h-[45vh] bg-slate-200 rounded-2xl overflow-hidden ">
            {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-300 gap-5">
                    <div className="loader"></div> 
                    <span className='text-[2rem]'>Loading...</span>

                  </div>
                )}
              <video onLoadedData={() => setIsLoading(false)} style={{ filter: isVideoBlurred ? 'blur(10px)' : 'none' }} ref={localVideoRef} id="localVideo" autoPlay muted className={`object-cover w-full h-full `}></video>
              <div className=''>
                <div onClick={toggleMute} className="lg:w-[3.5vw] lg:h-[3.5vw] w-20 h-20 flex items-center justify-center bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400 absolute z-20 bottom-4 left-[8%] lg:left-[5%]">
                  {isMuted ? <FaMicrophoneSlash className="text-[1.8rem]" /> : <FaMicrophone className="text-[1.8rem]" />}
                </div>
                <div onClick={toggleCamera} className=" lg:w-[3.5vw] lg:h-[3.5vw] w-20 h-20 flex items-center justify-center bg-gray-300 rounded-full hover:bg-gray-400 transition absolute z-20 bottom-4 left-[25%] lg:left-[20%]">
                  {isCameraOff ? <BsFillCameraVideoOffFill className="text-[1.8rem]" /> : <BsFillCameraVideoFill className="text-[1.8rem]" />}
                </div>

              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <h1 className=" text-[3rem] lg:text-[2rem] font-medium">Ready to join?</h1>
            <button onClick={joinRoom} className="py-3 px-7 rounded-full bg-secondary text-white font-medium text-[2.2rem] lg:text-[1.8rem]">
              {isHost ? "Start Meeting" : "Join Meeting"}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SetupScreen