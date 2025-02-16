import LoginInfo from './LoginInfo/LoginInfo'
import YourTherapist from './Therapist/YourTherapist'
import Notifications from './Notifications/Notifications'
import EditSessions from './EditSessions'
import Payment from './Payment'
import MyProfile from './MyProfile'
import QuitTherapy from './QuitTherapy'
import { useVerification } from '../../context/verifyToken'
import AdditionalDetails from './AdditionalDetails'
import AvailableTimeSlots from './AvailableTimeSlots'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {
  const { userType, getUserIdUserType } = useVerification();
  const { section } = useParams();
  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [section])

  return (
    <>

      <div className='px-8 md:px-48 py-24 bg-[#fef8eaaa] min-h-screen'>
        <h2 className='text-5xl'>Account Settings</h2>
        {
          !(userType === "doctor") && (
            <>
              <LoginInfo />
              <div id="my-profile"><MyProfile /></div>
              <div id="your-therapist"><YourTherapist /></div>
              <div id="notifications"><Notifications /></div>
              <EditSessions />
              <div id="payment"><Payment /></div>
              <QuitTherapy />
            </>)
        }{
          (userType === "doctor") && (
            <>
              <LoginInfo />
              <AdditionalDetails userDetails={getUserIdUserType} />
              <AvailableTimeSlots userDetails={getUserIdUserType} />
              <MyProfile />
            </>
          )
        }
      </div>
    </>
  )
}

export default Home