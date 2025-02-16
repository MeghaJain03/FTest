import React, { useState, useEffect, useRef } from 'react';
import { IoChatboxEllipsesSharp, IoCloseSharp, IoSend } from "react-icons/io5";
import { useSocket } from '../../context/SocketProvider';
import { useVerification } from '../../context/verifyToken';
// import { useUser } from '../context/UserContext';

const RoomChat = ({ room, socketId,isDarkMode }) => {
  const socket = useSocket();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesContainerRef = useRef(null);
  const { userType, decodedToken ,token} = useVerification();
  let userName="";
  // let isLoggedIn=false;
  useEffect(() => {
    if (token) { 
      userName=decodedToken?.fullName;
      // isLoggedIn=true;
    }
  }, [])
  // const { isLoggedIn, userName } = useUser() || {};

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const message = { text: inputValue, sender: socket.id, room, userName };
      console.log("Sending message:", message);

      socket.emit('sendRoomMessage', message);
      setInputValue('');
    }
  };

  // Listen for message confirmations
  useEffect(() => {
    const handleMessageSent = (confirmationMessage) => {
      console.log("Message sent confirmation:", confirmationMessage);
      setMessages((prevMessages) => [...prevMessages, confirmationMessage]);
    };

    socket.on('messageSent', handleMessageSent);

    return () => {
      socket.off('messageSent', handleMessageSent);
    };
  }, [socket]);

  useEffect(() => {
    if (socket) {
      const handleReceiveMessage = (message) => {
        console.log(`Received message:`, message);
        setMessages((prevMessages) => [...prevMessages, message]);
      };

      socket.on("receiveRoomMessage", handleReceiveMessage);

      return () => {
        socket.off("receiveRoomMessage", handleReceiveMessage);
      };
    }
  }, [socket]);





  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);


  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket connected with ID:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, [socket]);

  return (
    <>
        <div className='relative'>
          <div
            className='w-[4.5vw] h-[4.5vw] lg:w-[3.5vw] lg:h-[3.5vw] flex items-center justify-center cursor-pointer'
            onClick={toggleChat}
          >
            {!isOpen ? (
              <IoChatboxEllipsesSharp className={`${isDarkMode?'text-white':'text-[#000]'}  text-[2rem] text-black'`} />
            ) : (
              <IoCloseSharp className={`${isDarkMode?'text-white':'text-[#000]'}   text-[2rem] text-black`} />
            )}
          </div>
          {isOpen && (
            <div className='fixed bottom-[10%] right-[15%] w-[83vw] lg:right-[2%] lg:w-[25vw]  z-30 bg-white border border-gray-300 shadow-lg rounded-[1.2rem] overflow-hidden'>
              <div className='border-b-[1px] p-[1.6rem]'>
                <h2 className='font-bold text-[2rem] lg:text-[1.6rem]'>Chat Window</h2>
              </div>
              <div className='w-full '>
                <div
                  className='w-full h-[39vh] flex flex-col overflow-y-auto overflow-x-hidden px-[0.8rem]'
                  ref={messagesContainerRef}
                >
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex flex-col ${msg.sender === socket.id
                        ? 'justify-start items-end'
                        : 'justify-end items-start'
                        }`}
                    >
                      <div
                        className={`p-[0.8rem] m-[0.8rem] max-w-[45%] rounded-lg text-[1.4rem] ${msg.sender === socket.id
                          ? 'bg-[#199FD9] text-white'
                          : 'bg-gray-300 text-black'
                          }`}
                      >
                        {msg.userName && (
                          <div className="text-[1.2rem] text-black font-medium">
                            {msg.userName}
                          </div>
                        )}
                        {msg.text}
                      </div>

                    </div>
                  ))}
                </div>
                <div className='w-full border-t-[1px] h-[6vh] px-[1.6rem] flex items-center justify-around'>
                  <input
                    className='w-[80%] h-full outline-none text-[1.8rem] lg:text-[1.4rem]'
                    type='text'
                    placeholder='Type a message'
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={(e) =>
                      e.key === 'Enter' ? handleSendMessage() : null
                    }
                  />
                  <div
                    className='w-[6vw] h-[6vw] lg:w-[2vw] lg:h-[2vw] bg-[#199FD9] rounded-full flex items-center justify-center cursor-pointer'
                    onClick={handleSendMessage}
                  >
                    <IoSend className='text-xl text-white' />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
    
    </>
  );
};

export default RoomChat;
