import React from 'react'
import { RiFileCopyLine } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";

const MeetingInfo = ({handleCopyLink,copySuccess,roomCode,meetingInfo,handleMeetingInfo}) => {
  return (
   <>
   <div className={`absolute w-[50vw] md:w-[50vw] lg:w-[23vw] bg-gray-500 bottom-0 z-40 left-[0.8rem] rounded-lg text-white p-[1rem] sm:p-[1.2rem] md:p-[1.5rem] flex flex-col gap-[0.5rem] sm:gap-[0.6rem] md:gap-[0.8rem] ${meetingInfo ? 'block' : 'hidden'}`}>
              <div className="flex items-center justify-between">
                <h1 className="text-[1.5rem]  md:text-[2rem] font-medium">Your meeting's ready</h1>
                <IoCloseOutline onClick={handleMeetingInfo} className="text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] font-bold cursor-pointer" />
              </div>
              <p className="text-[1rem]  md:text-[1.25rem]">Share this meeting link with others you want in the meeting</p>
              <div className="w-full py-[0.6rem] sm:py-[0.7rem] md:py-[0.8rem] bg-gray-300 px-[0.6rem] sm:px-[0.7rem] md:px-[0.8rem] rounded-md flex items-center justify-between">
                <p className="text-[0.9rem] md:text-[1.3rem] text-black">http://localhost:5173/videoCall/{roomCode}</p>
                <RiFileCopyLine
                  className="text-[1.6rem]  md:text-[1.8rem] text-black cursor-pointer hover:scale-110"
                  onClick={handleCopyLink}
                />
              </div>
              {copySuccess && <p className="text-green-500 text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] mt-2">{copySuccess}</p>}
            </div>
   </>
  )
}

export default MeetingInfo