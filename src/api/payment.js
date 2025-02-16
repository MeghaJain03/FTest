// import { url } from "../App"
// import axios from "axios"

// export const createOrder = async ({ orderDetails }) => {
//     return await axios.post(`${url}/api/orders`, orderDetails)
// }

// export const verifyPayment = async ({ orderId, orderDetails, roomCode }) => {
//     console.log(roomCode)
//     const { patientName, email, amount, timeSlot, doctorName, doctorEmail, doctorId } = orderDetails

//     const data = {
//         orderId,
//         roomCode,
//         email,
//         amount,
//         patientName,
//         doctorName,
//         doctorEmail,
//         doctorId,
//         timeSlot: timeSlot
//     }
//     console.log(data)
//     let res = await axios.post(`${url}/api/orders/verify`, { data })
//      console.log("orderId", orderId, "orderDetails", orderDetails)
//     if (res && res.data) {
//         alert("Payment Verified")
//     }

// }

// export const checkRoomCode = async (roomCode) => {
//     return await axios.post(`${url}/api/orders/room/${roomCode}`)
// }




// import { url } from "../App";
// import axios from "axios";

// /**
//  * Creates an order by sending order details to the API.
//  * @param {Object} orderDetails - The order details object.
//  * @returns {Promise} - Axios response promise.
//  */
// export const createOrder = async (orderDetails) => {
//     try {
//         const response = await axios.post(`${url}/api/orders`, orderDetails);
//         return response.data;
//     } catch (error) {
//         console.error("Error creating order:", error);
//         throw error;
//     }
// };

// /**
//  * Verifies payment by sending order details and room code to the API.
//  * @param {string} orderId - The order ID.
//  * @param {Object} orderDetails - The order details object.
//  * @param {string} roomCode - The room code for verification.
//  * @returns {Promise} - Axios response promise.
//  */
// export const verifyPayment = async (orderId, orderDetails, roomCode) => {
//     try {
//         console.log("Room Code:", roomCode);
        
//         const { patientName, email, amount, timeSlot, doctorName, doctorEmail, doctorId } = orderDetails;
        
//         const data = {
//             orderId,
//             roomCode,
//             email,
//             amount,
//             patientName,
//             doctorName,
//             doctorEmail,
//             doctorId,
//             timeSlot
//         };

//         console.log("Verifying Payment Data:", data);

//         const res = await axios.post(`${url}/api/orders/verify`, data); // ✅ Corrected data structure

//         console.log("Order ID:", orderId, "Order Details:", orderDetails);

//         if (res?.data) {
//             alert("Payment Verified");
//         }

//         return res.data;
//     } catch (error) {
//         console.error("Error verifying payment:", error);
//         throw error;
//     }
// };

// /**
//  * Checks the room code validity.
//  * @param {string} roomCode - The room code to verify.
//  * @returns {Promise} - Axios response promise.
//  */
// export const checkRoomCode = async (roomCode) => {
//     try {
//         const response = await axios.post(`${url}/api/orders/room/${roomCode}`);
//         return response.data;
//     } catch (error) {
//         console.error("Error checking room code:", error);
//         throw error;
//     }
// };





import { url } from "../App";
import axios from "axios";

/**
 * Creates an order by sending order details to the API.
 * @param {Object} orderDetails - The order details object.
 * @returns {Promise} - Axios response promise.
 */
export const createOrder = async (orderDetails) => {
    try {
        console.log("Sending order details:", orderDetails);
        const response = await axios.post(`${url}/api/orders`, orderDetails);
        console.log("Order creation response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error creating order:", error);
        if (error.response) {
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
            console.error("Response headers:", error.response.headers);
        }
        throw error;
    }
};

/**
 * Verifies payment by sending order details and room code to the API.
 * @param {string} orderId - The order ID.
 * @param {Object} orderDetails - The order details object.
 * @param {string} roomCode - The room code for verification.
 * @returns {Promise} - Axios response promise.
 */
export const verifyPayment = async (orderId, orderDetails, roomCode) => {
    try {
        const response = await axios.post(`${url}/api/verify`, { orderId, orderDetails, roomCode });
        return response.data;
    } catch (error) {
        console.error("Error verifying payment:", error);
        throw error;
    }
};


/**
 * Checks if the room code is valid.
 * @param {string} roomCode - The room code to check.
 * @returns {Promise} - Axios response promise.
 */
export const checkRoomCode = async (roomCode) => {
    try {
        const response = await axios.get(`${url}/api/rooms/${roomCode}`);
        return response.data;
    } catch (error) {
        console.error("Error checking room code:", error);
        throw error;
    }
};