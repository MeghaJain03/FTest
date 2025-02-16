import axios from "axios"
import { url } from "../App"

export const getDoctors = async () => {
    return await axios.get(`${url}/api/doctors`);
}

export const getDoctorWithId=async(id)=>{
    return await axios.get(`${url}/api/doctors/${id}`);
}

export const approveLicense = async (id) => {
    return await axios.patch(`${url}/api/doctors/approve-license/${id}`)
}

export const disapproveLicense = async (id) => {
    return await axios.patch(`${url}/api/doctors/disapprove-license/${id}`)
}

export const updateDetails = async (formattedUserType, userId, education, experience) => {
    const data = {
        userId, userType: formattedUserType, education, experience
    }
    // console.log(data)
    return await axios.patch(`${url}/api/doctors/addDetails`,{data})
}

export const updateTimeAvailability = async(userId,selectedSlots)=>{
    console.log(userId,selectedSlots);
    const data={
        userId,selectedSlots
    }
    return await axios.patch(`${url}/api/doctors/addTimeAvailability`,{data})
}
