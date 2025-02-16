import { useParams, useLocation, useNavigate  } from "react-router-dom";
import { useSocket } from "../../context/SocketProvider";
import React, { useEffect, useRef, useState, useCallback } from "react";
import * as mediasoupClient from 'mediasoup-client';
// import { useDoctor } from '../context/DoctorContext';
import { useVerification } from "../../context/verifyToken";
import ControlPanel from "./ControlPanel";
import ParticipantsList from "./ParticipantsList";
import MoreOptions from "./MoreOptions";
import SetupScreen from "./SetupScreen";
import MeetingInfo from "./MeetingInfo";
import { GiPin } from "react-icons/gi";
import { checkRoomCode } from "../../api/payment";

const VideoCall = () => {
  const navigate = useNavigate();
  const socket = useSocket();
  const { token, userType, decodedToken, getPrivateFromServer } = useVerification()
  //   const { doctor } = useDoctor() || {};
  const [doctor, setDoctor] = useState("")
  const userId = decodedToken?.userId;
  useEffect(() => {
    if (token) {
      setDoctor(decodedToken?.fullName);
      console.log(decodedToken)
    }
  }, [token,decodedToken])
  const { roomCode } = useParams();
  const localVideoRef = useRef(null);
  const [copySuccess, setCopySuccess] = useState("");
  const [param, setParam] = useState({
    encodings: [
      { rid: 'r0', maxBitrate: 100000, scalabilityMode: 'S1T3' },
      { rid: 'r1', maxBitrate: 300000, scalabilityMode: 'S1T3' },
      { rid: 'r2', maxBitrate: 900000, scalabilityMode: 'S1T3' },
    ],
    codecOptions: { videoGoogleStartBitrate: 1000 }
  });
  const [loading, setLoading] = useState(true)
  const [isAccessGranted, setIsAccessGranted] = useState(false)
  const [device, setDevice] = useState();
  const [rtpCapabilities, setRtpCapabilities] = useState(null);
  const [producerTransport, setProducerTransport] = useState();
  const [consumer, setConsumer] = useState(null);
  const [consumerTransport, setConsumerTransport] = useState([]);
  const [consumers, setConsumers] = useState([]);
  const [audioProducer, setAudioProducer] = useState();
  const [videoProducer, setVideoProducer] = useState();
  const [socketId, setSocketId] = useState();
  const [moreOption, setMoreOption] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVideoBlurred, setIsVideoBlurred] = useState(false);
  const [producerId, setProducerId] = useState();
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [hostId, setHostId] = useState();
  const [participantsTab, setParticipantsTab] = useState(false);
  const [notification, setNotification] = useState("");
  const [moreActions, setMoreActions] = useState(false);

  const [isAdmin, setIsAdmin] = useState();
  const [hasJoined, setHasJoined] = useState(false);
  const [localStream, setLocalStream] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [isHost, setisHost] = useState(queryParams.get('isHost') === 'true')
  const [pinnedVideoId, setPinnedVideoId] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null); // State to hold the timeout ID
  const [meetingInfo, setMeetingInfo] = useState(isHost);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [screenStream, setScreenStream] = useState(null);
  const [screenProducer, setScreenProducer] = useState(null);

  const timeAlert = (endTime) => {
    const endDate = parseTime(endTime);
    const currentTime = new Date();
    const alertTime = new Date(endDate.getTime() - 10 * 60 * 1000); // 10 minutes before endTime

    const timeout = alertTime - currentTime; // Calculate the timeout duration
    console.log("timeout", timeout)
    console.log("alertTime", alertTime)
    console.log("currentTime", currentTime)
    console.log("endDate", endDate)
    if (timeout > 0) {
      const id = setTimeout(() => {
        alert("10 minutes left!");
      }, timeout);
      setTimeoutId(id); // Store the timeout ID
    } else {
      alert("The meeting has already ended or is about to end.");
    }
  };

  const parseTime = (timeString) => {
    const [time, modifier] = timeString.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "pm" && hours < 12) {
      hours += 12; // Convert to 24-hour format
    }
    if (modifier === "am" && hours === 12) {
      hours = 0; // Midnight case
    }

    const now = new Date();
    const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
    return endDate;
  };
  useEffect(() => {
    const fetchCheckRoomCode = async () => {
      const response = await checkRoomCode(roomCode)
      if (response.data.access) {
        let userId = null;
        if (token) {
          userId = decodedToken?._id
        }
        if (response.data.endTime) {
          timeAlert(response.data.endTime)
        }
        setLoading(false)
        setIsAccessGranted(true)
        if (response.data.hostId === userId) {
          setisHost(true)
        }
      } else {
        setLoading(false)
        setIsAccessGranted(false)
      }
    }
    fetchCheckRoomCode()

    // Cleanup function to clear the timeout
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, [roomCode,userId]); // Add timeoutId to the dependency array

  console.log("isHost", isHost)
  useEffect(() => {
    socket.on("updateParticipants", ({ participants, hostId }) => {
      setParticipants(participants);
      setHostId(participants[0].id)

      participants.forEach(participant => {
        if (participant.id === socket.id) {
          setIsAdmin(participant.isAdmin);
        }
      })
    });

    socket.on("user-joined", ({ doctor }) => {
      showNotification(`${doctor} has joined the meeting`);
    });

    socket.on("user-left", ({ doctor }) => {
      showNotification(`${doctor} has left the meeting`);
    });

    socket.on("toggle-video-blur", ({ producerId, isBlurred }) => {
      setConsumers((prevConsumers) =>
        prevConsumers.map((consumer) =>
          consumer.id === producerId
            ? { ...consumer, isBlurred }
            : consumer
        )
      );
    });

    socket.on("kicked", () => {
      alert("You have been removed from the meeting.");
      window.location.href = "/";
    });

    return () => {
      socket.off("updateParticipants");
      socket.off("user-joined");
      socket.off("user-left");
      socket.off("toggle-video-blur")
      socket.off("kicked");
    };
  }, [socket]);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 5000);
  };

  const handleKick = useCallback((participantId) => {
    const confirmKick = window.confirm("Are you sure you want to kick this participant?");
    if (confirmKick) {
      socket.emit("kick-participant", { participantId });
    }
    setMoreActions(prev => !prev);
  }, [socket]);

  const toggleMute = useCallback(() => {
    const updatedMuteState = !isMuted;
    setIsMuted(updatedMuteState);
    if (localVideoRef.current) {
      const audioTracks = localVideoRef.current.stream.getAudioTracks();
      audioTracks.forEach(track => {
        track.enabled = !updatedMuteState;
      });
    }
    socket.emit('toggle-mute', { socketId, isMuted: updatedMuteState });
  }, [isMuted, localVideoRef, socketId]);

  const toggleCamera = useCallback(() => {
    const updatedCameraState = !isCameraOff;
    setIsCameraOff(updatedCameraState);
    if (localVideoRef.current) {
      const videoTracks = localVideoRef.current.stream.getVideoTracks();
      videoTracks.forEach(track => {
        track.enabled = !updatedCameraState;
      });
    }
    socket.emit('toggle-camera', { socketId, isCameraOff: updatedCameraState });
  }, [isCameraOff, localVideoRef, socketId]);

  const toggleVideoBlur = useCallback(() => {
    const updatedBlurState = !isVideoBlurred;
    setIsVideoBlurred(updatedBlurState);
    if (producerId) {
      socket.emit("toggle-video-blur", { producerId, isBlurred: updatedBlurState });
    }
  }, [isVideoBlurred]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prevMode => !prevMode);
  }, []);

  const toggleParticipants = useCallback(() => {
    setParticipantsTab(prevMode => !prevMode);
  }, []);

  const handleMoreOption = useCallback(() => {
    setMoreOption(prev => !prev);
  }, []);

  const handleMoreActions = useCallback(() => {
    setMoreActions(prev => !prev);
  }, []);

  const handleMeetingInfo = useCallback(() => {
    setMeetingInfo(prev => !prev);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`http://localhost:5173/videoCall/${roomCode}`)
      .then(() => {
        setCopySuccess("Link copied to clipboard!");
        setTimeout(() => setCopySuccess(""), 2000);
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  };


  useEffect(() => {
    isAccessGranted ? getLocalStream() : null;
  }, [isAccessGranted]);

  const removeConsumer = (remoteProducerId) => {
    setConsumers(prevConsumers => prevConsumers.filter(consumer => consumer.id !== remoteProducerId));
  };

  const streamSuccess = (stream) => {
    // console.log(stream);
    localVideoRef.current.srcObject = stream;
    localVideoRef.current.stream = stream

    setLocalStream(stream);
  };




  const joinRoom = () => {
    socket.emit('joinRoom', { roomCode, doctor }, (data) => {
      setSocketId(data.socketId);
      setRtpCapabilities(data.rtpCapabilities);
      createDevice(data.rtpCapabilities);
      setHasJoined(true);


    });
  };

  const getLocalStream = () => {
    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: { min: 640, max: 1920 }, height: { min: 400, max: 1080 } }
    })
      .then(streamSuccess)
      .catch(error => {
        console.log("Error getting local stream:", error.message);
      });
  };

  const createDevice = async (RtpCapabilities) => {
    if (!RtpCapabilities) {
      console.error('RTP capabilities are not set');
      return;
    }
    try {
      const newDevice = new mediasoupClient.Device();
      await newDevice.load({ routerRtpCapabilities: RtpCapabilities });
      setDevice(newDevice);
      createSendTransport(newDevice);
    } catch (error) {
      console.log(error);
      if (error.name === 'UnsupportedError') {
        console.warn('Browser not supported');
      }
    }
  };

  useEffect(() => {
    if (device) {
      console.log("Device initialized. Now ready for signaling.");

      socket.on('new-producer', ({ producerId }) => signalNewConsumerTransport(device, producerId));
    }
  }, [device]);

  const getProducers = (newDevice) => {
    socket.emit('getProducers', producerIds => {
      // console.log(producerIds)
      producerIds.forEach(producerId => signalNewConsumerTransport(newDevice, producerId));
    });
  };

  const createSendTransport = (newDevice) => {
    socket.emit('createWebRtcTransport', { consumer: false }, ({ params }) => {
      if (params.error) {
        console.log("Error creating WebRTC transport:", params.error);
        return;
      }
      // console.log(params);
      const newProducerTransport = newDevice.createSendTransport(params);
      setProducerTransport(newProducerTransport);

      newProducerTransport.on('connect', async ({ dtlsParameters }, callback, errback) => {
        try {
          await socket.emit('transport-connect', { dtlsParameters });
          callback();
        } catch (error) {
          errback(error);
        }
      });

      newProducerTransport.on('produce', async (parameters, callback, errback) => {
        try {
          // console.log(parameters);

          socket.emit('transport-produce', { kind: parameters.kind, rtpParameters: parameters.rtpParameters }, ({ id, producersExist }) => {
            callback({ id });

            console.log(producersExist);
            console.log(id);

            setProducerId(() => {
              if (parameters.kind == 'video') {
                return id
              }
            })


            if (producersExist) getProducers(newDevice)
          });
        } catch (error) {
          errback(error);
        }
      });

      connectSendTransport(newProducerTransport);
    });
  };

  const connectSendTransport = async (newProducerTransport) => {
    try {
      if (localStream) {
        console.log(localStream.getVideoTracks()[0]);

        localVideoRef.current.srcObject = localStream;
        localVideoRef.current.stream = localStream;

        const videoTrack = localStream.getVideoTracks()[0];
        const audioTrack = localStream.getAudioTracks()[0]

        const audioProducer = await newProducerTransport.produce({
          track: audioTrack,
          encodings: undefined,
          codecOptions: undefined,
        });

        const videoProducer = await newProducerTransport.produce({
          track: videoTrack,
          encodings: param.encodings,
          codecOptions: param.codecOptions,
        });

        setAudioProducer(audioProducer);
        setVideoProducer(videoProducer)

        videoProducer.on("trackended", () => console.log("Video track ended"));
        videoProducer.on("transportclose", () => console.log("Video transport closed"));

        audioProducer.on("trackended", () => console.log("Audio track ended"));
        audioProducer.on("transportclose", () => console.log("Audio transport closed"));
      }

    } catch (error) {
      console.error("Error producing track:", error);
    }
  };

  const signalNewConsumerTransport = async (newDevice, remoteProducerId) => {
    if (!newDevice) {
      console.error('Device is not initialized');
      return;
    }

    await socket.emit('createWebRtcTransport', { consumer: true }, ({ params }) => {
      if (params.error) {
        console.log(params.error);
        return;
      }

      const newConsumerTransport = newDevice.createRecvTransport(params);
      console.log(newConsumerTransport);

      setConsumerTransport((prev) => [...prev, newConsumerTransport]);

      newConsumerTransport.on('connect', async ({ dtlsParameters }, callback, errback) => {
        try {
          await socket.emit('transport-recv-connect', { dtlsParameters, serverConsumerTransportId: params.id });
          callback();
        } catch (error) {
          errback(error);
        }
      });

      connectRecvTransport(newConsumerTransport, newDevice, remoteProducerId, params.id);
    });
  };


  const connectRecvTransport = async (newConsumerTransport, newDevice, remoteProducerId, serverConsumerTransportId) => {
    await socket.emit('consume', { rtpCapabilities: newDevice.rtpCapabilities, remoteProducerId, serverConsumerTransportId }, async ({ params }) => {
      if (params.error) {
        console.error('Cannot consume:', params.error);
        return;
      }

      const newConsumer = await newConsumerTransport.consume({
        id: params.id,
        producerId: params.producerId,
        kind: params.kind,
        rtpParameters: params.rtpParameters,
      });

      setConsumerTransport((prevConsumerTransport) => [
        ...prevConsumerTransport,
        {
          consumerTransport: newConsumerTransport,
          serverConsumerTransportId: params.id,
          producerId: remoteProducerId,
          newConsumer,
        },
      ]);

      console.log(newConsumer);

      const { track } = newConsumer;
      const newStream = new MediaStream([track]);


      setConsumers((prevConsumers) => {

        if (prevConsumers.some((consumer) => consumer.id === remoteProducerId)) {
          return prevConsumers;
        }
        return [
          ...prevConsumers,
          { id: remoteProducerId, kind: params.kind, stream: newStream },
        ];
      });

      socket.emit('consumer-resume', { serverConsumerId: params.serverConsumerId });
      setConsumer(newConsumer);
    });
  };


  socket.on('producer-closed', ({ remoteProducerId }) => {
    const producerToClose = consumerTransport.find(
      transportData => transportData.producerId === remoteProducerId
    );

    if (producerToClose) {
      producerToClose.consumerTransport.close();
      producerToClose.consumer.close();
      setConsumerTransport(prevConsumerTransport =>
        prevConsumerTransport.filter(
          transportData => transportData.producerId !== remoteProducerId
        )
      );
    }

    removeConsumer(remoteProducerId);
  });

  const handleMakeAdmin = (participantId) => {

    socket.emit("make-admin", { participantId });
    setMoreActions(prev => !prev);
  };

  const handleMuteParticipant = (participantId) => {
    socket.emit("mute-participant", { participantId });
    setMoreActions(prev => !prev);
  };

  useEffect(() => {
    socket.on("muted-by-host", () => {
      if (localVideoRef.current) {
        const audioTracks = localVideoRef.current.srcObject.getAudioTracks();
        audioTracks.forEach(track => track.enabled = false);
      }
    });

    return () => {
      socket.off("muted-by-host");
    };
  }, [socket]);

  const toggleScreenShare = useCallback(async () => {
    if (!isScreenSharing) {
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
        });
        setScreenStream(stream);
        setIsScreenSharing(true);

        const screenTrack = stream.getVideoTracks()[0];
        const newScreenProducer = await producerTransport.produce({
          track: screenTrack,
          encodings: param.encodings,
          codecOptions: param.codecOptions,
        });
        console.log("screenProducer", newScreenProducer);

        newScreenProducer.on("trackended", () => {
          console.log("trackended");
          stopScreenShare(newScreenProducer);
        });
        setScreenProducer(newScreenProducer);

      } catch (error) {
        console.error("Error sharing screen:", error);
      }
    } else {
      console.log("else part");

      if (screenProducer) {
        console.log(screenProducer);
        stopScreenShare(screenProducer);
      }
    }
  }, [isScreenSharing, producerTransport, param, screenProducer]);

  const stopScreenShare = (screenProducer) => {
    console.log(screenProducer);

    if (screenStream) {
      screenStream.getTracks().forEach(track => track.stop());
      setScreenStream(null);
    }
    setIsScreenSharing(false);

    if (screenProducer) {
      console.log(screenProducer);
      socket.emit('stop-screen-share', { producerId: screenProducer.id });
    }
  };

  useEffect(() => {
    socket.on('stop-screen-share', ({ producerId }) => {
      console.log(producerId);

      setConsumers(prevConsumers => prevConsumers.filter(consumer => consumer.id !== producerId));
    });

    return () => {
      socket.off('stop-screen-share');
    };
  }, [socket]);

  useEffect(() => {
    const handleLeaveMeeting = () => {
      console.log("User left the meeting!");
      socket.emit("leaveRoom", { roomCode, socketId,doctor });

   
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
        console.log("Stopped camera and microphone access.");
      }
      navigate("/");
    };

   
    const handlePopState = (event) => {
      console.log("Back button detected!");
      handleLeaveMeeting();
    };

    
    window.history.pushState(null, "", window.location.href);

    window.addEventListener("popstate", handlePopState);
    

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [socket, roomCode, socketId, navigate]);

  const handlePinVideo = (consumerId) => {
    setPinnedVideoId(prevId => (prevId === consumerId ? null : consumerId));
  };


  return (
    <>{
      loading ? (
        <div>loading</div>
      ) :
        hasJoined ? (
          <div id="video" className={`videoCall text-base rounded-lg h-screen`}>
            <div className="flex-grow flex justify-center items-center bg-gray-200 py-4 h-[90%] relative">
              <MeetingInfo handleCopyLink={handleCopyLink} copySuccess={copySuccess} roomCode={roomCode} meetingInfo={meetingInfo} handleMeetingInfo={handleMeetingInfo} />

              <div className={`w-full ${isDarkMode ? 'bg-[#202124]' : 'bg-gray-100'}  h-[90vh] overflow-hidden `}>
                <div className="p-5 h-full">
                  <div className="flex items-center justify-center h-full gap-3 flex-col lg:flex-wrap lg:flex-row  relative">
                    <video style={{ filter: isVideoBlurred ? 'blur(10px)' : 'none' }} ref={localVideoRef} id="localVideo" autoPlay muted className={`${consumers.length > 1 ? "absolute w-[65vw] h-[20vh] lg:w-[20vw] lg:h-[25vh] bottom-0 right-[2%] object-cover rounded-xl z-20" : "lg:h-[85vh] lg:w-[80vw] object-cover"}  ${isDarkMode ? 'border-[3px] border-white ' : 'border-[3px] border-black'} `}></video>
                    {isScreenSharing == true && (
                      <video
                        autoPlay
                        className="w-[90vw] h-[30vh] lg:h-[65vh] lg:w-[60vw] object-cover border-[3px] border-black"
                        ref={(videoRef) => {
                          if (videoRef) {
                            videoRef.srcObject = screenStream;
                          }
                        }}
                      ></video>
                    )}
                    {consumers.map((consumer) => (
                      <div key={consumer.id} className="relative overflow-hidden">
                        {consumer.kind === "video" &&
                          <button onClick={() => handlePinVideo(consumer.id)} className={`absolute top-2 right-2 z-20 w-[5vw] h-[5vw] lg:w-[2vw] lg:h-[2vw] rounded-full bg-black bg-opacity-50 flex items-center justify-center`}>
                            <GiPin className="text-xl text-white" />
                          </button>}
                        {consumer.kind === "video" ? (
                          (pinnedVideoId === null || consumer.id === pinnedVideoId) && (
                            <video
                              id={consumer.id}
                              style={{ filter: consumer.isBlurred ? 'blur(10px)' : 'none' }}
                              autoPlay
                              className={`${pinnedVideoId === consumer.id ? "lg:h-[86vh] lg:w-[80vw] object-cover" : (consumers.length > 2 || isScreenSharing ? "w-[90vw] h-[30vh] lg:w-[30vw] lg:h-[20vw] rounded-xl object-cover" : "w-[90vw] h-[30vh] lg:h-[85vh] lg:w-[80vw] object-cover")} ${isDarkMode ? 'border-[1px] border-white' : 'border-[1px] border-black'}`}
                              ref={(videoRef) => {
                                if (videoRef) {
                                  videoRef.srcObject = consumer.stream;
                                }
                              }}
                            ></video>
                          )
                        ) : (
                          <audio
                            autoPlay
                            ref={(audioRef) => {
                              if (audioRef) {
                                audioRef.srcObject = consumer.stream;
                              }
                            }}
                            style={{ display: 'none' }}
                          ></audio>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <MoreOptions
                moreOption={moreOption}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
                isVideoBlurred={isVideoBlurred}
                toggleVideoBlur={toggleVideoBlur}
              />

              {notification && (
                <div className={`absolute bottom-4 z-40 right-4 text-[1.5rem] ${!isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} font-semibold p-4 rounded-lg shadow-md transition duration-150 ease-in-out`}>
                  {notification}
                </div>
              )}

              <div className={`absolute z-30 w-[83vw] h-[95%] md:w-[30vw] right-[15%] lg:w-[20vw] lg:h-[95%] bg- rounded-xl lg:right-[5%] bottom-0 shadow-xl transition-all duration-300 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} ${participantsTab ? 'block' : 'hidden'}`}>
                <ParticipantsList
                  participants={participants}
                  socketId={socketId}
                  hostId={hostId}
                  isAdmin={isAdmin}
                  handleKick={handleKick}
                  handleMakeAdmin={handleMakeAdmin}
                  handleMoreActions={handleMoreActions}
                  handleMuteParticipant={handleMuteParticipant}
                  moreActions={moreActions}
                  isHost={isHost}
                  isDarkMode={isDarkMode}
                />
              </div>

            </div>

            <ControlPanel
              isCameraOff={isCameraOff}
              isDarkMode={isDarkMode}
              isMuted={isMuted}
              toggleCamera={toggleCamera}
              toggleMute={toggleMute}
              toggleParticipants={toggleParticipants}
              handleMoreOption={handleMoreOption}
              roomCode={roomCode}
              participants={participants}
              handleMeetingInfo={handleMeetingInfo}
              toggleScreenShare={toggleScreenShare}
              isScreenSharing={isScreenSharing}
              socketId />

          </div>

        ) : (
          isAccessGranted ?
            <SetupScreen
              isVideoBlurred={isVideoBlurred}
              localVideoRef={localVideoRef}
              toggleMute={toggleMute}
              toggleCamera={toggleCamera}
              toggleVideoBlur={toggleVideoBlur}
              joinRoom={joinRoom}
              isHost={isHost}
              isMuted={isMuted}
              isCameraOff={isCameraOff} />
            : <div className="min-h-screen text-5xl text-center pt-12 bg-[#f9f7ef]">404 Not Found</div>
        )

    }

    </>
  );
};

export default VideoCall;
