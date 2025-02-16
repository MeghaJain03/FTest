import React, { useState } from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { RiAdminLine } from "react-icons/ri";
import { FaMicrophoneSlash } from "react-icons/fa";

const ParticipantsList = ({ participants, socketId, hostId, isAdmin, handleKick, handleMakeAdmin, handleMuteParticipant,isHost,isDarkMode }) => {
    const [openMoreActionsId, setOpenMoreActionsId] = useState(null);

    const handleMoreActions = (participantId) => {
        setOpenMoreActionsId(prevId => (prevId === participantId ? null : participantId));
    };

    return (
        <>
            <div className="participants-list p-[1.6rem]">
                <div className="flex items-center justify-between border-b"><h2 className="text-[2rem] font-semibold  pb-[0.8rem]">Participants</h2> <h5 className="text-[2rem] font-semibold  pb-2">{participants.length}</h5></div>
                <ol className="list-decimal space-y-3 py-[0.8rem] ">
                    {participants.map((participant) => (
                        <li
                            key={participant.id}
                            className=" relative flex items-center justify-between px-[0.8rem]  h-[8.5vh] bg-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:text-white"
                        >
                            <div>
                                <h1 className={`text-[1.7rem] py-[0.5rem] `}>{participant.name}</h1>
                                {participant.isHost && (
                                    <h1 className={`text-[1.3rem] font-medium  `}>
                                        Meeting Host
                                    </h1>
                                )}
                                {participant.isAdmin && !participant.isHost && (
                                    <span className="text-[1.3rem] font-medium bg-green-100 rounded-full px-2 py-0.5 dark:bg-green-700">
                                        Meeting Admin
                                    </span>
                                )}
                            </div>
                            <div>
                                {(isHost || isAdmin) && !participant.isHost && !participant.isAdmin && (
                                    <BiDotsVerticalRounded className="text-[1.7rem] cursor-pointer" onClick={() => handleMoreActions(participant.id)} />
                                )}
                            </div>
                            <div className={`absolute text-[1.3rem] w-[40vw] md:w-[20vw]  lg:w-[15vw] -bottom-32 right-0 z-20 rounded-md flex flex-col items-center justify-center gap-2 shadow-xl bg-white overflow-hidden ${openMoreActionsId === participant.id ? "block" : "hidden"}`}>
                                {(isHost || isAdmin) && !participant.isHost && !participant.isAdmin && (
                                    <>
                                        <button className="flex items-center  gap-4 text-black  w-full py-[0.45rem] transition-all duration-150 ease-in-out hover:bg-gray-300" onClick={() => handleMakeAdmin(participant.id)}>
                                            <RiAdminLine className="text-[2rem] font-bold w-[18%]" />
                                            <p className="text-gray-600">Make Admin</p>
                                        </button>
                                        <button className="flex items-center  gap-4 text-black  w-full py-[0.45rem] transition-all duration-150 ease-in-out hover:bg-gray-300" onClick={() => handleMuteParticipant(participant.id)}>
                                            <FaMicrophoneSlash className="text-[1.5rem] font-bold w-[18%] " />
                                            <p className="text-gray-600">Mute</p>
                                        </button>
                                        <button
                                            className="flex items-center  gap-4 text-black w-full py-[0.45rem] transition-all duration-150 ease-in-out hover:bg-gray-300"
                                            onClick={() => handleKick(participant.id)}
                                        >
                                            <IoMdRemoveCircleOutline className="text-[2rem] font-bold w-[18%]" />
                                            <p className="text-gray-600">Remove from the call</p>
                                        </button>
                                    </>
                                )}
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    )
}

export default ParticipantsList