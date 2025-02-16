import axios from "axios";
import { url } from "../App";

export const postContactForm = async (formData) => {
    console.log(formData);
    return await axios.post(`${url}/api/contact`, formData )
}