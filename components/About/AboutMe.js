
import React from 'react';
import SetIntersectionObserver from '../functionality/SetIntersectionObserver';
import Cover from './Cover';
import CoreProjects from './CoreProjects';
import LangNHobbies from './LangNHobbies';


const AboutMe = () => {
    const coverRef = React.useRef(null)
    const coreProjectsRef = React.useRef(null)
    const langNHobbiesRef = React.useRef(null)
    const executeScroll = Ref => Ref.current.scrollIntoView() 

    return (
        <div>
            <section data-test="component-aboutme" className="flex justify-center min-h-screen">
                <div className="container bg-gray-100 rounded-lg shadow-lg">
                    {/* <button onClick={() => executeScroll(langNHobbiesRef)}>12312</button> */}
                    <Cover forwardRef={coverRef} executeScroll={executeScroll} coreProjectsRef={coreProjectsRef}/>
                    <div className='my-72' />
                    <CoreProjects forwardRef={coreProjectsRef} />
                    <div className='my-72' />
                    <LangNHobbies forwardRef={langNHobbiesRef} />
                </div>
            </section>
        </div>
    )
    
}

export default AboutMe;


