import React from 'react'

const MoreOptions = ({ moreOption, isDarkMode, toggleDarkMode, isVideoBlurred, toggleVideoBlur }) => {
    return (
        <>
            <div className={`lg:w-[10vw] right-[25%]  absolute bottom-[0%] z-30 lg:right-[36.5%] rounded-xl bg-[#199FD9] shadow-xl ${moreOption ? 'block' : 'hidden'}`}>
                <div className="w-full h-full p-4 flex flex-col gap-3">
                    <div className="flex gap-2"> <label className="flex cursor-pointer select-none items-center">
                        <div className="relative">
                            <input
                                type="checkbox"
                                checked={isDarkMode}
                                onChange={toggleDarkMode}
                                className="sr-only"
                            />
                            <div className="block h-[1.7rem] w-11 rounded-full border border-[#BFCEFF] bg-[#EAEEFB]"></div>
                            <div
                                className={`dot bg-black absolute top-[2px] left-1 h-5 w-5 rounded-full transition-transform duration-300 ${isDarkMode ? 'translate-x-3' : 'translate-x-0'}`}
                            ></div>
                        </div>
                    </label>
                        <h1 className="text-white font-medium text-2xl">Dark Mode</h1>
                    </div>
                    <div className="flex gap-2"> <label className="flex cursor-pointer select-none items-center">
                        <div className="relative">
                            <input
                                type="checkbox"
                                checked={isVideoBlurred}
                                onChange={toggleVideoBlur}
                                className="sr-only"
                            />
                            <div className="block h-[1.7rem] w-11 rounded-full border border-[#BFCEFF] bg-[#EAEEFB]"></div>
                            <div
                                className={`dot bg-black absolute top-[2px] left-1 h-5 w-5 rounded-full transition-transform duration-300 ${isVideoBlurred ? 'translate-x-3' : 'translate-x-0'}`}
                            ></div>
                        </div>
                    </label>
                        <h1 className="text-white font-medium text-2xl">Blur Video</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoreOptions