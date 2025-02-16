import React from 'react'
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { BsFillCameraVideoFill, BsFillCameraVideoOffFill, BsThreeDots } from "react-icons/bs";
import { MdCallEnd } from "react-icons/md";
import RoomChat from "./RoomChat";
import { IoPeopleSharp } from "react-icons/io5";
import { IoMdInformationCircle } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import { useCallback } from 'react';
import { MdScreenShare } from "react-icons/md";
import { MdOutlineStopScreenShare } from "react-icons/md";

const ControlPanel = ({ isCameraOff, isDarkMode, isMuted, toggleCamera, toggleMute, toggleParticipants, handleMoreOption, roomCode, socketId, participants, handleMeetingInfo,isScreenSharing,toggleScreenShare  }) => {
    const [secondaryOptions, setSecondaryOptions] = useState(false);

    const handleSecondaryOptions = useCallback(() => {
        setSecondaryOptions(prev => !prev);
      }, []);
    return (
        <>
            <div className={`flex items-center justify-between px-10 lg:px-4 ${isDarkMode ? 'bg-[#202124]' : 'bg-gray-100'} shadow-md h-[10%]`}>
                <div className={` hidden lg:flex items-center justify-center  ${isDarkMode ? 'text-white' : 'text-[#000]'}`}>
                    <div><h1 className={`px-2 font-medium lg:text-[1.8rem] text-[1.5rem]`}>5:90 PM</h1></div><span className="font-medium"> | </span>
                    <div><h1 className="px-2 font-medium lg:text-[1.8rem] text-[1.5rem]">{roomCode}</h1></div>
                </div>

                <div className="flex items-center justify-center gap-[1.2rem] sm:gap-4">
                    <div onClick={toggleMute} className="lg:w-[3.5vw] lg:h-[3.5vw] w-20 h-20 flex items-center justify-center bg-gray-300 rounded-full cursor-pointer transition ease-in-out duration-150 hover:bg-gray-400">
                        {isMuted ? <FaMicrophoneSlash className="lg:text-[1.8rem] text-3xl" /> : <FaMicrophone className="lg:text-[1.8rem] text-3xl" />}
                    </div>
                    <div onClick={toggleCamera} className="lg:w-[3.5vw] lg:h-[3.5vw] w-20 h-20 flex items-center justify-center bg-gray-300 rounded-full hover:bg-gray-400 transition ease-in-out duration-150 cursor-pointer">
                        {isCameraOff ? <BsFillCameraVideoOffFill className="lg:text-[1.8rem] text-3xl" /> : <BsFillCameraVideoFill className="lg:text-[1.8rem] text-3xl" />}
                    </div>
                    <div onClick={toggleScreenShare} className="lg:w-[3.5vw] lg:h-[3.5vw] w-20 h-20 flex items-center justify-center bg-gray-300 rounded-full hover:bg-gray-400 transition ease-in-out duration-150 cursor-pointer">
                        {isScreenSharing ? <MdOutlineStopScreenShare className="lg:text-[1.8rem] text-3xl" /> : <MdScreenShare  className="lg:text-[1.8rem] text-3xl" />}
                    </div>
                    <div onClick={handleMoreOption} className="lg:w-[3.5vw] lg:h-[3.5vw] w-20 h-20 flex items-center justify-center bg-gray-300 rounded-full hover:bg-gray-400 transition ease-in-out duration-150 cursor-pointer">
                        <BsThreeDots className="lg:text-[2rem] text-4xl" />
                    </div>
                    <div
                        className="lg:w-[3.5vw] lg:h-[3.5vw] w-20 h-20 p-4 flex justify-center items-center bg-red-500 text-white rounded-full hover:bg-red-600"
                        onClick={() => (window.location.href = "/")}
                    >
                        <MdCallEnd className="text-[1.8rem] text-3xl text-white" />
                    </div>
                </div>

                <div className={`items-center justify-center gap-2 lg:gap-0 hidden lg:flex`}>
                    <IoMdInformationCircle onClick={handleMeetingInfo} className={`lg:text-[2.4rem] text-4xl font-bold cursor-pointer ${isDarkMode ? 'text-white' : 'text-[#000]'}`} />
                    <div className="lg:w-[3.5vw] lg:h-[3.5vw] w-16 h-16 flex items-center justify-center cursor-pointer relative" onClick={toggleParticipants}>
                        <IoPeopleSharp className={`lg:text-[2.4rem] text-4xl ${isDarkMode ? 'text-white' : 'text-[#000]'}`} />
                        <div className={`${isDarkMode ? 'bg-white text-[#000]' : 'bg-black text-white'} absolute top-0 rounded-full lg:w-[1.2vw] lg:h-[1.2vw] w-5 h-5 text-xs right-1 flex items-center justify-center font-medium`}>{participants.length}</div>
                    </div>
                    <RoomChat room={roomCode} socketId={socketId} isDarkMode={isDarkMode} />
                </div>

                <div className={`lg:hidden flex items-center justify-center gap-2 relative`}>
                    {secondaryOptions ?<IoIosArrowDown onClick={handleSecondaryOptions} className={`text-5xl ${isDarkMode ? 'text-white' : 'text-[#000]'}`} />:<IoIosArrowUp onClick={handleSecondaryOptions} className={`text-5xl ${isDarkMode ? 'text-white' : 'text-[#000]'} `} />}
                    <div className={`w-[5rem] md:w-[7vw] px-10 py-10 z-40  absolute  bottom-16 rounded-xl flex flex-col items-center justify-center gap-6 ${isDarkMode ?"bg-black":"bg-white"} shadow-md ${secondaryOptions ? 'block' : 'hidden'}`}>
                        <IoMdInformationCircle onClick={handleMeetingInfo} className={`lg:text-[2.4rem] text-5xl font-bold cursor-pointer ${isDarkMode ? 'text-white' : 'text-[#000]'}`} />
                        <div className="lg:w-[3.5vw] lg:h-[3.5vw] w-16 h-16 flex items-center justify-center cursor-pointer relative" onClick={toggleParticipants}>
                            <IoPeopleSharp className={`lg:text-[2.4rem] text-[2.3rem] ${isDarkMode ? 'text-white' : 'text-[#000]'}`} />
                            <div className={`${isDarkMode ? 'bg-white text-[#000]' : 'bg-black text-white'} absolute top-0 rounded-full lg:w-[1.2vw] lg:h-[1.2vw] w-6 h-6 text-lg right-1 flex items-center justify-center font-medium`}>{participants.length}</div>
                        </div>
                        <RoomChat room={roomCode} socketId={socketId} isDarkMode={isDarkMode} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ControlPanel