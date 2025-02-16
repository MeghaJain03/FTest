import { useNavigate } from 'react-router-dom'

const SidePanel = ({ aboutDoctor, userType, token, decodedToken, id }) => {
  const { weeklyTimeSlots = [], ticketPrice = 100 } = aboutDoctor;
 
  const navigate = useNavigate()
  const onHandleBookTherapy = () => {

    if (!token) {
      navigate("/login")
    }
    else if (userType == "doctor") {
      navigate("/login")
    }
    else if (!(decodedToken?.email)) {
      alert("Add your email address from account settings")
    }
    else {
      navigate(`/bookDoctor/${id}`)
    }
  }
  if (Object.keys(aboutDoctor).length === 0) {
    return (
      <div className='p-4'>
        <p className='text-gray-500'>Loading doctor information...</p> 
      </div>
    );
  }
  return (
    <div className='shadow-panelShadow p-3 lg:p-10 rounded-md bg-white'>
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">₹ {100}</span>
      </div>
      <div className='mt-[30px]'>
        <p className='text__para mt-0 font-semibold text-headingColor'>
          Available Time Slots:
        </p>
        {
         weeklyTimeSlots.map((slot,index) => (
            <ul className='mt-8' key={`slot-${index}`}>
              {slot.slots.map((slott,slotIndex) =>
              (<li className='flex items-center justify-between mb-7'  key={`${slot.day}-${slotIndex}`}>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>{slot.day}</p>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>{`${slott.startTime}-${slott.endTime}`}</p>
              </li>)
              )}
            </ul>
          ))
        }
      </div>
      <button className='btn px-2 w-full rounded-md' onClick={onHandleBookTherapy}>Book A Session </button>
    </div>
  )
}

export default SidePanel