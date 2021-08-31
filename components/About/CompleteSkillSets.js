
import React from 'react';
import SetIntersectionObserver from '../functionality/SetIntersectionObserver';
import { FaStar } from 'react-icons/fa';


const CompleteSkillSets = ({ forwardRef }) => {

    const skills = {
        'React': true,
        'Redux': true,
        'NextJS': true,
        'Agile': true,
        'Serverless': true,
        'TypeScript': true,
        'AWS RDS': true,
        'ExpressJS': true,
        'Framer-Motion': true,
        'PostgreSQL': true,
        'TailwindCSS': true,
        'MongoDB': true,
        'JWT': true,
        'Jest & Enzyme': true,
        'Test Driven Development': true,
        'Docker & Unraid': true,
        'CI/CD': true,
        'RESTApi': true,
        'GraphQL': true,
        'Prisma': true,
        'MariaDB': true,
        'Axios & Fetch': true,
        'Progressive Web App': true,
        'Server-Side Rendering': true,
        'Static Site Generation': true,
    }

    const SkillsGenerator = (name, star, idx) => {
        return (
            <SetIntersectionObserver key={idx} type={idx} direction='left'>
                <div className='font-spartan border-gray-700'>
                    <span className='flex justify-items-center items-center m-6'><FaStar className={`text-yellow-500 mr-2 ${star ? '' : 'hidden'}`} size={13} />{name}</span>
                </div>
            </SetIntersectionObserver>
        )
    }

    return (
        <>
            <div data-test="component-completeSkillSets" ref={forwardRef} className='pt-20 mt-40 lg:mx-20 min-h-screen'>
                <div className='flex flex-col items-center justify-center mb-12 h-full'>
                    <SetIntersectionObserver type={1} direction='down'>
                        <h3 className='font-spartan text-5xl my-20 lg:m-28'>Skill Sets</h3>
                    </SetIntersectionObserver>
                    <div className='grid grid-cols-2 justify-items-start items-start text-xl'>
                        {skills ? Object.entries(skills).map(([key, val], idx) => {
                            return SkillsGenerator(key, val, idx)
                        })
                            : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompleteSkillSets;


