import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../context/SocketProvider";
import { assets } from "../../assets/assets";
const FirstFold = () => {
  document.title="Freudia Connect";
  const [roomCode, setRoomCode] = useState(null);
  const [isHost, setIsHost] = useState(false);
  const socket = useSocket();
  const navigate = useNavigate();

  const createRoom = () => {
    console.log("Emitting create-room event");
    socket.emit("create-roomCode", (code) => {
      console.log("Room code received:", code);
      setRoomCode(code);
      setIsHost(true);
    });
  };

  useEffect(() => {
    if (roomCode) {
      const hostParam = isHost ? "true" : "false";
      navigate(`/videoCall/${roomCode}?isHost=${hostParam}`);
    }
  }, [roomCode, navigate, isHost]);

  return (
    <div className="min-h-screen flex flex-col gap-10 lg:flex-row items-center justify-center bg-gray-50 px-10 lg:px-16">
     
      <div className="w-full lg:w-[40%] mb-12 lg:mb-0 text-center lg:text-left">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-7xl font-bold text-gray-800 mb-4">
            Video calls and meetings for everyone
          </h1>
          <p className="text-gray-600 text-lg md:text-xl lg:text-2xl font-medium">
            Connect, collaborate, and celebrate from anywhere with Freudia Connect
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <button
            onClick={createRoom}
            className="bg-secondary text-white py-3 px-6 sm:py-4 sm:px-8 rounded-lg sm:rounded-xl text-2xl  lg:text-3xl font-semibold"
          >
            New meeting
          </button>
        </div>
      </div>

     
      <div className="w-full lg:w-[40%] flex justify-center px-4 lg:px-8">
        <div className="text-center">
          <img
            src={assets.screen}
            alt="new meeting"
            className="w-[55%] h-auto  lg:w-[22vw] mx-auto mb-6 rounded-full"
          />
          <h2 className="text-4xl  lg:text-4xl font-semibold mb-2">
            Get a link you can share
          </h2>
          <p className="text-gray-600 text-xl  lg:text-2xl px-32">
            Click <span className="font-bold">New Meeting</span> to get a link
            you can send to people you want to meet with
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstFold;
