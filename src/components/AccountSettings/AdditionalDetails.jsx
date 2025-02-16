import { useState } from 'react';
import Heading from './Heading';
import Button from '../Button';
import { updateDetails } from '../../api/doctorsApi';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const AdditionalDetails = ({ userDetails }) => {
    const [formData, setFormData] = useState({
        education: [{ degree: '', institution: '', timePeriod: '' }],
        experience: [{ designation: '', institution: '', timePeriod: '' }],
    });

    const handleEducationChange = (index, field, value) => {
        const updatedEducation = [...formData.education];
        updatedEducation[index][field] = value;
        setFormData({ ...formData, education: updatedEducation });
    };

    const addEducation = () => {
        setFormData({
            ...formData,
            education: [...formData.education, { degree: '', institution: '', timePeriod: '' }],
        });
    };

    const removeEducation = (index) => {
        const updatedEducation = formData.education.filter((_, i) => i !== index);
        setFormData({ ...formData, education: updatedEducation });
    };

    const handleExperienceChange = (index, field, value) => {
        const updatedExperience = [...formData.experience];
        updatedExperience[index][field] = value;
        setFormData({ ...formData, experience: updatedExperience });
    };

    const addExperience = () => {
        setFormData({
            ...formData,
            experience: [...formData.experience, { designation: '', institution: '', timePeriod: '' }],
        });
    };

    const removeExperience = (index) => {
        const updatedExperience = formData.experience.filter((_, i) => i !== index);
        setFormData({ ...formData, experience: updatedExperience });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { formattedUserType, userId } = userDetails()
        // console.log(formData.education)
        // console.log(formData.experience)
        const response = await updateDetails(formattedUserType, userId, formData.education, formData.experience)
        if (response.data.statusCode === 200) {
            toast.success(response.data.message);
            setFormData((prev)=>({
                ...prev,                
                    education: [{ degree: '', institution: '', timePeriod: '' }],
                    experience: [{ designation: '', institution: '', timePeriod: '' }],
                
            }))
        }
        // console.log('Form Data Submitted:', formData);
    };

    return (
        <>
            <ToastContainer className="text-2xl"/>
            <div className="bg-textPrimary my-5 px-9 pt-11 pb-6 flex flex-col gap-4 rounded-md">
                <Heading content="Additional Details" />
                <form className="flex flex-col gap-4 text-[1.5rem]" onSubmit={handleSubmit}>
                    {/* Education Section */}
                    <div>
                        <label className="font-bold">Education:</label>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            {formData.education.map((edu, index) => (
                                <div key={index} className="mb-4 border p-4 rounded-md">
                                    <input
                                        type="text"
                                        name={`degree-${index}`}
                                        value={edu.degree}
                                        placeholder="Degree"
                                        onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                                        className="w-full mb-2 border-b-green-600 p-2 border-b-[1.5px] outline-none"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name={`institution-${index}`}
                                        value={edu.institution}
                                        placeholder="Institution"
                                        onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                                        className="w-full mb-2 border-b-green-600 p-2 border-b-[1.5px] outline-none"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name={`timePeriod-${index}`}
                                        value={edu.timePeriod}
                                        placeholder="Time Period (e.g., Sep 12, 2014 - Sep 12, 2016)"
                                        onChange={(e) => handleEducationChange(index, 'timePeriod', e.target.value)}
                                        className="w-full mb-2 border-b-green-600 p-2 border-b-[1.5px] outline-none"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeEducation(index)}
                                        className="mt-2 text-red-500"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={addEducation}
                            className="text-secondary"
                        >
                            Add Education
                        </button>
                    </div>

                    {/* Experience Section */}
                    <div>
                        <label className="font-bold">Experience:</label>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            {formData.experience.map((exp, index) => (
                                <div key={index} className="mb-4 border p-4 rounded-md">
                                    <input
                                        type="text"
                                        name={`designation-${index}`}
                                        value={exp.designation}
                                        placeholder="Designation"
                                        onChange={(e) => handleExperienceChange(index, 'designation', e.target.value)}
                                        className="w-full mb-2 border-b-green-600 p-2 border-b-[1.5px] outline-none"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name={`institution-${index}`}
                                        value={exp.institution}
                                        placeholder="Institution"
                                        onChange={(e) => handleExperienceChange(index, 'institution', e.target.value)}
                                        className="w-full mb-2 border-b-green-600 p-2 border-b-[1.5px] outline-none"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name={`timePeriod-${index}`}
                                        value={exp.timePeriod}
                                        placeholder="Time Period (e.g., Jul 4, 2010 - Aug 13, 2014)"
                                        onChange={(e) => handleExperienceChange(index, 'timePeriod', e.target.value)}
                                        className="w-full border-b-green-600 p-2 border-b-[1.5px] outline-none"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeExperience(index)}
                                        className="mt-2 text-red-500"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={addExperience}
                            className="text-secondary"
                        >
                            Add Experience
                        </button>
                    </div>

                    <button
                        type="submit"
                        className='text-textPrimary border-none flex justify-center items-center hover:bg-secondary hover:text-white transition-all ease 1s cursor-pointer py-[0.6rem] lg:w-[15%] bg-secondary rounded-md text-[1.6rem] z-[99]'
                    >Add Details</button>

                </form>
            </div>
        </>
    );
};

export default AdditionalDetails;
