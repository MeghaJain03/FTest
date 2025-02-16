// import "./video.css"
import { useEffect } from 'react'
import FirstFold from './FirstFold'
import { useVerification } from '../../context/verifyToken';
import { useNavigate } from 'react-router-dom';
const VideoHomePage = () => {
  const { userType } = useVerification();
  const navigate = useNavigate()
  useEffect(() => {
    if (!userType) {
      navigate("/doctors/login")
    }
  }, [])
  return (
    <section className='w-full min-h-screen bg-slate-200 text-base'>
      <FirstFold />
    </section>
  )
}

export default VideoHomePage