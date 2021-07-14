
import React from 'react';
import SetIntersectionObserver from '../functionality/SetIntersectionObserver';
import Cover from './Cover';
import CoreProjects from './CoreProjects';
import LangNHobbies from './LangNHobbies';
import SoftSkills from './SoftSkills';
import CompleteSkillStacks from './CompleteSkillStacks';
import ContactItem from './ContactItem';


const AboutMe = () => {
    const coverRef = React.useRef(null)
    const coreProjectsRef = React.useRef(null)
    const completeSkillStacksRef = React.useRef(null)
    const softSkillsRef = React.useRef(null)
    const langNHobbiesRef = React.useRef(null)
    const contactItemRef = React.useRef(null)
    const executeScroll = Ref => Ref.current.scrollIntoView() 

    return (
        <div>
            <section data-test="component-aboutme" className="flex justify-center min-h-screen">
                <div className="container bg-gray-100 rounded-lg shadow-lg">
                    <Cover forwardRef={coverRef} executeScroll={executeScroll} coreProjectsRef={coreProjectsRef}/>
                    <div className='mb-56' />
                    <CoreProjects forwardRef={coreProjectsRef} />
                    <div className='mb-56' />
                    <CompleteSkillStacks forwardRef={completeSkillStacksRef} />
                    <div className='mb-56' />
                    <SoftSkills forwardRef={softSkillsRef} />
                    <div className='mb-56' />
                    <LangNHobbies forwardRef={langNHobbiesRef} />
                    <div className='mb-56' />
                    <ContactItem forwardRef={contactItemRef} executeScroll={executeScroll} coreProjectsRef={coverRef}/>
                </div>
            </section>
        </div>
    )
    
}

export default AboutMe;


