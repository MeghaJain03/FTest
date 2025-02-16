import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { cardData } from '../assets/assets'
import Section from './Section'

const ServicesCard = () => {
    const { id } = useParams()
    const [service, setservice] = useState(cardData[Number(id) - 1]);
    console.log(service);

    return (
        <div className="bg-[#fefaf7] px-[6.4rem] py-[4rem]">
            {/* Heading */}
            <div className="text-[#2C7A7B] text-[3.6rem] font-bold mb-6 text-center">
                {service.title}
            </div>

            <Section title={service.details.questions[0].question}>
                {service.details.questions[0].answer}
            </Section>

            <Section title={service.details.questions[1].question}>
                In today's dynamic and competitive world, selecting the right career can be overwhelming. {service.link} helps you:
                {
                    service.details.questions[1].answer.map(text => {
                        const [mainTopic, rest] = text.split(":");
                        return (<ul className="list-disc pl-8">
                            <li><strong>{mainTopic}: </strong>{rest}</li>

                        </ul>)
                    })
                }
            </Section>

            <Section title={service.details.questions[2].question}>
                {
                    service.details.questions[2].answer.map(text => {
                        return (<ul className="list-disc pl-8">
                            <li>{text}</li>
                        </ul>)
                    })
                }
            </Section>

            <Section title={service.details.questions[3].question}>
                {
                    service.details.questions[3].answer.map(text => {
                        const [mainTopic, rest] = text.split(":");
                        return (<ul className="list-disc pl-8">
                            <li><strong>{mainTopic}: </strong>{rest}</li>

                        </ul>)
                    })
                }
            </Section>

            <Section title={service.details.questions[4].question}>
            {
                    service.details.questions[4].answer.map(text => {
                        return (<ul className="list-disc pl-8">
                            <li>{text}</li>
                        </ul>)
                    })
                }
            </Section>

            {/* Call to Action */}
            <Section title="Take Charge of Your Future with Freudia">
                <Link to="/CareerCounsellingPrice">
                    <button className="bg-teal-600 text-white py-2 px-6 rounded-md transition-colors duration-300 hover:bg-teal-700">
                        Check Out
                    </button>
                </Link>
            </Section>
        </div>
    )
}

export default ServicesCard