// // import { FaPlus } from 'react-icons/fa6'
// // import { FaChevronLeft } from "react-icons/fa";
// // import { MdOutlineCurrencyRupee } from "react-icons/md";
// // import { doctors } from '../../assets/assets';
// // import { createOrder, verifyPayment } from '../../api/payment';
// // import { useSocket } from "../../context/SocketProvider";
// // import { load } from '@cashfreepayments/cashfree-js'
// // import { useEffect, useState } from 'react';

// // const SecondPage = ({ nextStep, prevStep, id, orderDetails, name, ticketPrice }) => {
// //   const [roomCode, setRoomCode] = useState(null);
// //   const socket = useSocket();
// //   // console.log(orderDetails)
// //   let cashfree;
// //   const createRoom = () => {
// //     console.log("Emitting create-room event");
// //     socket.emit("create-roomCode", (code) => {
// //       // console.log("Room code received:", code);
// //       setRoomCode(code);
// //     });
// //   };
// //   useEffect(() => {
// //     createRoom()
// //   }, [])
// //   let initializeSDK = async function () {
// //     cashfree = await load({
// //       mode: "sandbox",
// //     })
// //   }

// //   initializeSDK()

// //   const continueToThirdStep = async (e) => {
// //     e.preventDefault()
// //     const response = await createOrder({ orderDetails })
// //     if (response.data && response.data.payment_session_id) {
// //       // console.log("res", response.data)
// //       nextStep()
// //       // setOrderId(res.data.order_id)
// //       let checkoutOptions = {
// //         paymentSessionId: response.data.payment_session_id,
// //         redirectTarget: "_modal",
// //       }
// //       // console.log("checkoutxsmtpsib-c5e4b0d9f37edda8c1121a470ecda5f4dd1b1c722cb753ccc46cf37bb8808950-ExdPtGpvqQafJDN3Options", checkoutOptions);

// //       cashfree.checkout(checkoutOptions).then(async (res) => {
// //         console.log("payment initialized");
// //         Object.entries(orderDetails).forEach(([key, value]) => {
// //           console.log(`${key}: ${value}`);
// //       });
       

// //         await verifyPayment({ orderId: response.data.order_id, orderDetails, roomCode });

// //         // if (res && res.status === "SUCCESS") {
// //         //   await verifyPayment({ orderId: response.data.order_id,orderDetails });
// //         // } else {
// //         //   alert("Payment was cancelled or failed.");
// //         //   // Handle the cancellation or failure case here
// //         // }
// //       }).catch((error) => {
// //         alert("Payment was cancelled or failed.");
// //         console.error("Error during payment checkout:", error);
// //         // Handle any errors that occur during the checkout process
// //       });

// //     }
// //     console.log("response = ", response)
// //     // nextStep()
// //   }
// //   return (
// //     <div className='w-full h-full  py-14 px-28'>
// //       <div className="flex items-center justify-between mb-5">
// //         <div className='flex gap-9 text-[2.7rem] items-center'>
// //           <FaChevronLeft className='text-4xl cursor-pointer' onClick={prevStep} />
// //           <h2 className='font-medium text-gray-600'>Confirm & Pay</h2>
// //         </div>
// //         <FaPlus className="text-[2.7rem] rotate-45" />
// //       </div>

// //       <aside className="flex w-full h-[83%]">
// //         <div className="w-[60%] h-full flex flex-col justify-center">
// //           <p className="text-[1.5rem] text-textColor tracking-tight">Confirm your session to book with <span className="text-irisBlueColor"> {name}</span></p>
// //           <ul className="text-[1.4rem] mt-4 list-disc pl-11 mb-5">
// //             <li className="pb-2 tracking-wide">93% Of users found online consultation helpful</li>
// //             <li className="pb-2 tracking-wide">Consultation will happen only on mobile app</li>
// //           </ul>
// //           <p className="text-[1.5rem] text-textColor tracking-tight mb-3">Patient Name</p>
// //           <div className=" w-[77%] mb-5 shadow-md hover:border-irisBlueColor transition duration-200 flex justify-between text-xl gap-4 items-center border-[1px] border-[#d8eaff] py-5 px-8 rounded">
// //             <span>{orderDetails.patientName}</span>
// //           </div>
// //           <p className="text-[1.5rem] text-textColor tracking-tight mb-3 mt-5">Final Fee</p>
// //           <div className="text-[1.8rem] font-semibold flex items-center">
// //             <MdOutlineCurrencyRupee />
// //             <span className="">{ticketPrice}</span>

// //           </div>
// //           <button className='w-[77%] btn px-2 rounded-md' onClick={continueToThirdStep}>Continue To Payment</button>
// //         </div>
// //         <div className="w-[50%] flex flex-col justify-center items-center">
// //           <div className="w-32 h-24 bg-[#01b5c571] flex justify-center items-center text-black rounded relative mb-4">
// //             <MdOutlineCurrencyRupee className="text-4xl" />
// //             <div className="w-6 h-6 rounded-full bg-yellow-700 absolute top-0 right-0"></div>
// //             <div className="w-6 h-6 rounded-full bg-yellow-700 absolute bottom-0 left-0"></div>
// //           </div>
// //           <span className="text-[1.6rem] font-semibold">3x more affordable !</span>
// //           <span className="text-2xl text-center w-[70%] mt-2">Get affordable healthcare online with fees
// //             upto 3 times lesser than in clinic fees.</span>
// //         </div>

// //       </aside >
// //     </div >
// //   )
// // }

// // export default SecondPage


// import { FaPlus } from 'react-icons/fa6';
// import { FaChevronLeft } from "react-icons/fa";
// import { MdOutlineCurrencyRupee } from "react-icons/md";
// import { createOrder, verifyPayment } from '../../api/payment';
// import { useSocket } from "../../context/SocketProvider";
// import { load } from '@cashfreepayments/cashfree-js';
// import { useEffect, useState } from 'react';

// const SecondPage = ({ nextStep, prevStep, orderDetails, name, ticketPrice }) => {
//   const [roomCode, setRoomCode] = useState(null);
//   const [cashfree, setCashfree] = useState(null);
//   const socket = useSocket();

//   // Create room when the component mounts
//   useEffect(() => {
//     socket.emit("create-roomCode", (code) => {
//       console.log("Room code received:", code);
//       setRoomCode(code);
//     });
//   }, [socket]);

//   // Initialize Cashfree SDK
//   useEffect(() => {
//     const initializeSDK = async () => {
//       const cashfreeInstance = await load({ mode: "sandbox" });
//       setCashfree(cashfreeInstance);
//     };
//     initializeSDK();
//   }, []);

//   const continueToThirdStep = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await createOrder({ orderDetails }); // ✅ Fixed function call

//       if (response?.data?.payment_session_id) {
//         nextStep();

//         let checkoutOptions = {
//           paymentSessionId: response.data.payment_session_id,
//           redirectTarget: "_modal",
//         };

//         console.log("Initializing payment...");
//         console.log("Order Details:", orderDetails);

//         cashfree?.checkout(checkoutOptions).then(async (res) => {
//           console.log("Payment initialized");

//           await verifyPayment({ orderId: response.data.order_id, orderDetails, roomCode }); // ✅ Fixed function call

//           if (res && res.status === "SUCCESS") {
//             console.log("Payment successful!");
//           } else {
//             alert("Payment was cancelled or failed.");
//           }
//         }).catch((error) => {
//           alert("Payment was cancelled or failed.");
//           console.error("Error during payment checkout:", error);
//         });
//       }
//     } catch (error) {
//       console.error("Error during order creation:", error);
//       alert("Failed to create order. Please try again.");
//     }
//   };

//   return (
//     <div className='w-full h-full py-14 px-28'>
//       <div className="flex items-center justify-between mb-5">
//         <div className='flex gap-9 text-[2.7rem] items-center'>
//           <FaChevronLeft className='text-4xl cursor-pointer' onClick={prevStep} />
//           <h2 className='font-medium text-gray-600'>Confirm & Pay</h2>
//         </div>
//         <FaPlus className="text-[2.7rem] rotate-45" />
//       </div>

//       <aside className="flex w-full h-[83%]">
//         <div className="w-[60%] h-full flex flex-col justify-center">
//           <p className="text-[1.5rem] text-textColor tracking-tight">
//             Confirm your session to book with <span className="text-irisBlueColor">{name}</span>
//           </p>
//           <ul className="text-[1.4rem] mt-4 list-disc pl-11 mb-5">
//             <li className="pb-2 tracking-wide">93% Of users found online consultation helpful</li>
//             <li className="pb-2 tracking-wide">Consultation will happen only on mobile app</li>
//           </ul>
//           <p className="text-[1.5rem] text-textColor tracking-tight mb-3">Patient Name</p>
//           <div className="w-[77%] mb-5 shadow-md hover:border-irisBlueColor transition duration-200 flex justify-between text-xl gap-4 items-center border-[1px] border-[#d8eaff] py-5 px-8 rounded">
//             <span>{orderDetails.patientName}</span>
//           </div>
//           <p className="text-[1.5rem] text-textColor tracking-tight mb-3 mt-5">Final Fee</p>
//           <div className="text-[1.8rem] font-semibold flex items-center">
//             <MdOutlineCurrencyRupee />
//             <span>{ticketPrice}</span>
//           </div>
//           <button className='w-[77%] btn px-2 rounded-md' onClick={continueToThirdStep}>
//             Continue To Payment
//           </button>
//         </div>
//         <div className="w-[50%] flex flex-col justify-center items-center">
//           <div className="w-32 h-24 bg-[#01b5c571] flex justify-center items-center text-black rounded relative mb-4">
//             <MdOutlineCurrencyRupee className="text-4xl" />
//             <div className="w-6 h-6 rounded-full bg-yellow-700 absolute top-0 right-0"></div>
//             <div className="w-6 h-6 rounded-full bg-yellow-700 absolute bottom-0 left-0"></div>
//           </div>
//           <span className="text-[1.6rem] font-semibold">3x more affordable!</span>
//           <span className="text-2xl text-center w-[70%] mt-2">
//             Get affordable healthcare online with fees up to 3 times lesser than in-clinic fees.
//           </span>
//         </div>
//       </aside>
//     </div>
//   );
// };

// export default SecondPage;




import { FaPlus } from 'react-icons/fa6';
import { FaChevronLeft } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { createOrder, verifyPayment } from '../../api/payment';
import { useSocket } from "../../context/SocketProvider";
import { load } from '@cashfreepayments/cashfree-js';
import { useEffect, useState } from 'react';

const SecondPage = ({ nextStep, prevStep, orderDetails, name, ticketPrice }) => {
  const [roomCode, setRoomCode] = useState(null);
  const [cashfree, setCashfree] = useState(null);
  const socket = useSocket();

  // Create room when the component mounts
  useEffect(() => {
    socket.emit("create-roomCode", (code) => {
      console.log("Room code received:", code);
      setRoomCode(code);
    });
  }, [socket]);

  // Initialize Cashfree SDK
  useEffect(() => {
    const initializeSDK = async () => {
      const cashfreeInstance = await load({ mode: "sandbox" });
      setCashfree(cashfreeInstance);
    };
    initializeSDK();
  }, []);

  const continueToThirdStep = async (e) => {
    e.preventDefault();

    console.log('Order Details:', orderDetails);
    console.log('Next Step Function:', nextStep);
    console.log('Cashfree Instance:', cashfree);

    if (!orderDetails || !nextStep || !cashfree) {
      alert('Missing required information. Please try again.');
      return;
    }

    try {
      const response = await createOrder({ orderDetails });

      if (response?.data?.payment_session_id) {
        nextStep();

        let checkoutOptions = {
          paymentSessionId: response.data.payment_session_id,
          redirectTarget: "_modal",
        };

        console.log("Initializing payment...");
        console.log("Order Details:", orderDetails);

        cashfree?.checkout(checkoutOptions).then(async (res) => {
          console.log("Payment initialized");

          await verifyPayment({ orderId: response.data.order_id, orderDetails, roomCode });

          if (res && res.status === "SUCCESS") {
            console.log("Payment successful!");
          } else {
            alert("Payment was cancelled or failed.");
          }
        }).catch((error) => {
          alert("Payment was cancelled or failed.");
          console.error("Error during payment checkout:", error);
        });
      }
    } catch (error) {
      console.error("Error during order creation:", error);
      alert("Failed to create order. Please try again.");
    }
  };

  return (
    <div className='w-full h-full py-14 px-28'>
      <div className="flex items-center justify-between mb-5">
        <div className='flex gap-9 text-[2.7rem] items-center'>
          <FaChevronLeft className='text-4xl cursor-pointer' onClick={prevStep} />
          <h2 className='font-medium text-gray-600'>Confirm & Pay</h2>
        </div>
        <FaPlus className="text-[2.7rem] rotate-45" />
      </div>

      <aside className="flex w-full h-[83%]">
        <div className="w-[60%] h-full flex flex-col justify-center">
          <p className="text-[1.5rem] text-textColor tracking-tight">
            Confirm your session to book with <span className="text-irisBlueColor">{name}</span>
          </p>
          <ul className="text-[1.4rem] mt-4 list-disc pl-11 mb-5">
            <li className="pb-2 tracking-wide">93% Of users found online consultation helpful</li>
            <li className="pb-2 tracking-wide">Consultation will happen only on mobile app</li>
          </ul>
          <p className="text-[1.5rem] text-textColor tracking-tight mb-3">Patient Name</p>
          <div className="w-[77%] mb-5 shadow-md hover:border-irisBlueColor transition duration-200 flex justify-between text-xl gap-4 items-center border-[1px] border-[#d8eaff] py-5 px-8 rounded">
            <span>{orderDetails.patientName}</span>
          </div>
          <p className="text-[1.5rem] text-textColor tracking-tight mb-3 mt-5">Final Fee</p>
          <div className="text-[1.8rem] font-semibold flex items-center">
            <MdOutlineCurrencyRupee />
            <span>{ticketPrice}</span>
          </div>
          <button className='w-[77%] btn px-2 rounded-md' onClick={continueToThirdStep}>
            Continue To Payment
          </button>
        </div>
        <div className="w-[50%] flex flex-col justify-center items-center">
          <div className="w-32 h-24 bg-[#01b5c571] flex justify-center items-center text-black rounded relative mb-4">
            <MdOutlineCurrencyRupee className="text-4xl" />
            <div className="w-6 h-6 rounded-full bg-yellow-700 absolute top-0 right-0"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-700 absolute bottom-0 left-0"></div>
          </div>
          <span className="text-[1.6rem] font-semibold">3x more affordable!</span>
          <span className="text-2xl text-center w-[70%] mt-2">
            Get affordable healthcare online with fees up to 3 times lesser than in-clinic fees.
          </span>
        </div>
      </aside>
    </div>
  );
};

export default SecondPage;