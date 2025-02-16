import React, { useCallback, useEffect, useState } from 'react';
import Heading from './Heading';
import Button from '../Button';
import { updateTimeAvailability } from '../../api/doctorsApi';

// Days of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const AvailabilitySlots = ({ userDetails }) => {
    const [weeklySlots, setWeeklySlots] = useState(generateWeeklyTimeSlots());
    const [selectedSlots, setSelectedSlots] = useState([{
        day: "",
        slots: []
    }])
    const { userId } = userDetails()
    const onSaveChanges = async () => {
        if (selectedSlots.length === 0) {
            alert("please select available time")
        } else {
            if (userId) {
                // console.log(userId)
                const response = await updateTimeAvailability(userId, selectedSlots)
                console.log(response)
                if (response.data.success) {
                    // setWeeklySlots([])
                    alert("updated successfully")
                }
            }
        }
    }
    const toggleAvailability = useCallback((dayIndex, slotIndex) => {
        setWeeklySlots(prevSlots => {
            const newSlots = [...prevSlots];
            newSlots[dayIndex].slots[slotIndex].available = !newSlots[dayIndex].slots[slotIndex].available;
            return newSlots;
        });
    }, []);

    useEffect(() => {
        const newSelectedSlots = weeklySlots
            .map(day => ({
                day: daysOfWeek[day.day],
                slots: day.slots.filter(slot => slot.available).map(({ available, ...rest }) => rest)
            }))
            .filter(day => day.slots.length > 0);

        setSelectedSlots(newSelectedSlots)
    }, [weeklySlots]);
    useEffect(() => {
        console.log("selectedSlots", selectedSlots)
    }, [selectedSlots])

    return (
        <div className="w-full mx-auto p-[2.4rem] border border-gray-300 rounded-lg bg-white shadow-md">
            <Heading content="Doctor's Weekly Availability" />
            <div className="overflow-x-auto py-7">
                <table className="min-w-full table-auto border-collapse">
                    <thead className="bg-gray-100 sticky top-0 z-10">
                        <tr>
                            <th className="px-[1.6rem] py-[0.8rem] text-left text-gray-700 font-semibold text-[1.25rem]">Day</th>
                            {weeklySlots[0].slots.map((slot, index) => (
                                <th
                                    key={index}
                                    className="px-4 py-2 text-center text-gray-700 font-semibold whitespace-nowrap text-[1.25rem]"
                                >
                                    {slot.startTime} - {slot.endTime}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className='text-[1.2rem]'>
                        {weeklySlots.map((day, dayIndex) => (
                            <tr key={dayIndex} className="even:bg-gray-50">
                                <td className="px-4 py-2 border border-gray-200 font-medium text-gray-800 ">
                                    {daysOfWeek[dayIndex]}
                                </td>
                                {day.slots.map((slot, slotIndex) => (
                                    <td
                                        key={slotIndex}
                                        className="px-4 py-2 border border-gray-200 text-center"
                                    >
                                        <button
                                            className={`w-full py-[0.7rem] text-[1.2rem] font-medium rounded transition-colors duration-200 focus:outline-none ${slot.available
                                                ? 'bg-green-500 text-white hover:bg-green-600'
                                                : 'bg-secondary text-white hover:bg-irisBlueColor'
                                                }`}
                                            onClick={() => toggleAvailability(dayIndex, slotIndex)}
                                        >
                                            {slot.available ? 'Available' : 'Unavailable'}
                                        </button>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Button
                bg="bg-secondary"
                paddingY="py-[0.6rem] "
                paddingX="lg:w-[15%]"
                text="text-[1.6rem] z-[99]"
                font="rounded-md"
                color="text-textPrimary border-none flex justify-center items-center"
                content="Save Changes"
                hoverbg="hover:bg-secondary  hover:text-white transition all ease 1s cursor-pointer"
                onClick={onSaveChanges}
            />
        </div>
    );
};


function generateWeeklyTimeSlots() {
    const weeklySlots = [];
    const startTime = new Date();
    startTime.setHours(0, 0, 0, 0); 
    const totalSlots = Math.floor(24 * 60 / 50);
    for (let day = 0; day < 7; day++) {
        const daySlots = [];
        for (let i = 0; i < totalSlots; i++) {
            const slotStart = new Date(startTime.getTime() + day * 24 * 60 * 60 * 1000 + i * 50 * 60 * 1000); 
            const slotEnd = new Date(slotStart.getTime() + 50 * 60 * 1000); 
            daySlots.push({
                startTime: slotStart.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
                endTime: slotEnd.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
                available: false
            });
        }
        weeklySlots.push({ day, slots: daySlots });
    }
    return weeklySlots;
}

export default AvailabilitySlots;
