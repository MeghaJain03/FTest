import { useEffect, useState, useCallback, useMemo } from "react";
import { approveLicense, disapproveLicense, getDoctors } from "../../api/doctorsApi";

const Notifications = () => {
    const [notification, setNotification] = useState([]);

    const fetchDoctors = useCallback(async () => {
        const response = await getDoctors();
        setNotification(response.data.data);
    }, []);

    useEffect(() => {
        fetchDoctors();
    }, [fetchDoctors]);

    const onHandleDecline = useCallback(async (id) => {
        const response = await disapproveLicense(id);
        setNotification(response.data.data);
    }, []);

    const onHandleAccept = useCallback(async (id) => {
        const response = await approveLicense(id);
        setNotification(response.data.data);
    }, []);

    const pendingNotifications = useMemo(() => {
        return notification.filter(doctor => doctor.isApproved === "pending");
    }, [notification]);

    return (
        <div className="profile w-[100%] h-[95%] rounded-md pt-1">
            <table className="table-auto border-collapse w-[95%] mx-auto my-5 bg-[#d0d8d5] rounded-md">
                <thead>
                    <tr className="bg-secondary text-white text-[1.4rem]">
                        <th className="border border-gray-300 px-4 py-2">Photo</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Gender</th>
                        <th className="border border-gray-300 px-4 py-2">Contact Number</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                        <th className="border border-gray-300 px-4 py-2">State</th>
                        <th className="border border-gray-300 px-4 py-2">Preferred Language</th>
                        <th className="border border-gray-300 px-4 py-2">License</th>
                        <th className="border border-gray-300 px-4 py-2">Aadhar</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pendingNotifications.map((doctor) => (
                        <tr key={doctor._id} className="text-center text-[1.2rem]">
                            <td className="border border-gray-300 px-4 py-2">
                                <div className="overflow-hidden w-[4.2vw] h-[4.2vw] rounded-full bg-secondary flex items-center justify-center mx-auto">
                                    <img className="w-full h-full object-cover" src={doctor.photo} alt="Doctor" />
                                </div>
                            </td>
                            <td className="border border-gray-300 px-4 py-2 font-bold capitalize">{doctor.name}</td>
                            <td className="border border-gray-300 px-4 py-2 font-bold capitalize">{doctor.gender}</td>
                            <td className="border border-gray-300 px-4 py-2 font-bold capitalize">{doctor.phone}</td>
                            <td className="border border-gray-300 px-4 py-2 font-bold capitalize">{doctor.email}</td>
                            <td className="border border-gray-300 px-4 py-2 font-bold capitalize">{doctor.state}</td>
                            <td className="border border-gray-300 px-4 py-2 font-bold capitalize">{doctor.preferredLanguages.join(", ")}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <a href={doctor.license} target="_blank" rel="noopener noreferrer" className="text-secondary font-bold underline">See the license</a>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <a href={doctor.aadhar} target="_blank" rel="noopener noreferrer" className="text-secondary font-bold underline">Verify the Aadhar</a>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <div className="flex gap-4 justify-center">
                                    <button
                                        className="decline responseBtn border-[2px] border-[#43856F] text-[#43856F] font-bold py-1 px-3 rounded-md transition-all ease-in-out duration-300 hover:border-[#93c2af]"
                                        onClick={() => onHandleDecline(doctor._id)}
                                    >
                                        Decline
                                    </button>
                                    <button
                                        className="accept responseBtn bg-secondary border-[2px] border-[#43856F] text-white font-bold py-1 px-3 rounded-md transition-all ease-in-out duration-300 hover:bg-[#275548] hover:border-[#275548]"
                                        onClick={() => onHandleAccept(doctor._id)}
                                    >
                                        Accept
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Notifications;