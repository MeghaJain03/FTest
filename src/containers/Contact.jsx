import { useState } from "react"
import { postContactForm } from "../api/contactApi"
import Header from "../components/Header"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    document.title = "freudia - Contact";
    const [formData, setformData] = useState({
        email: "",
        subject: "",
        message: ""
    })
    const onHandleFormSubmit = async (e) => {
        e.preventDefault();
        const response = await postContactForm(formData)
        if(response.data.success){
            toast.success("Contact form submitted successfully")
        }

    }
    document.title = "freudia - Contact"
    return (
    <>
        <ToastContainer className="text-2xl font-semibold" />
        <section className="min-h-screen"
         style={{ background: 'linear-gradient(to right, rgb(205, 240, 244), rgb(241, 253, 251), rgb(255, 255, 255), rgb(254, 250, 239), rgb(254, 246, 225))' }}>
            <Header />
            <div className='px-4 mx-auto max-w-screen pt-[10rem] flex'>
                <div className="w-[50%] pt-16  pl-28">
                    <h2 className='text-[3.7rem] font-bold'>Contact Us</h2>
                    <p className='mb-8 lg:mb-16  text-[1.5rem] font-medium w-[75%] text_para'>Get a experience issue? Want to send feedback about a beta feature? Let us know.</p>
                </div>

                <form onSubmit={onHandleFormSubmit} className='space-y-9 w-[40%] pt-[3rem]'>
                    <div>
                        <label htmlFor="email" className='form_label'>
                            Your Email
                        </label>
                        <input type="email" id='email' placeholder='example@gmail.com' className='text-[1.4rem] form_input mt-3'
                            value={formData.email}
                            onChange={(e) => { setformData((prev) => ({ ...prev, email: e.target.value })) }}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className='form_label'>
                            Subject
                        </label>
                        <input type="text" id='subject' placeholder='Let us know how we can help you' className='text-[1.4rem] form_input mt-3'
                            value={formData.subject}
                            onChange={(e) => { setformData((prev) => ({ ...prev, subject: e.target.value })) }}
                            required
                        />
                    </div>
                    <div className='sm:col-span-2'>
                        <label htmlFor="email" className='form_label'>
                            Your Message
                        </label>
                        <textarea rows='6' type="text" id='message' placeholder='Leave a comment...' className='text-[1.4rem] form_input mt-3'
                            value={formData.message}
                            onChange={(e) => { setformData((prev) => ({ ...prev, message: e.target.value })) }}
                            required
                        />
                    </div>
                    <button type='submit' className='btn bg-secondary rounded sm:w-fit'>Submit</button>
                </form>
            </div>
            <div className="fixed w-full h-[11vh] bottom-0 bg-secondary "></div>
        </section>
    </>)
}

export default Contact