
import React from 'react';
import SetIntersectionObserver from '../functionality/SetIntersectionObserver';
import { FaStar } from 'react-icons/fa';
import { IconContext } from "react-icons";

const CoreProjects = ({forwardRef}) => {

    return (
        <>
            <div ref={forwardRef} className='sticky mt-20 mx-4 lg:mx-20 h-screen'>
                <div className='flex flex-col items-center justify-center mb-12 mt-20 h-full'>
                    <SetIntersectionObserver type={1}  direction='down'>
                    <div className='font-spartan text-5xl m-28'>Projects</div>
                    </ SetIntersectionObserver>
                    <div className='grid grid-rows-3 lg:w-3/4 gap-52'>
                        <SetIntersectionObserver type={2}  direction='left'>
                        <div className='float-left'>
                            <div className='font-spartan text-4xl'>NextJS Personal Blog</div>
                            <div className='font-anaheim text-lg '>A Static Generation Site using NextJS</div>
                            <div className='grid grid-cols-2'>
                                <div className='col-span-2'>Frameworks & Libraries Used:</div>
                                <span className='flex'><IconContext.Provider value={{className: " text-yellow-500" }}><FaStar />NextJS</IconContext.Provider></span>
                                <div>React</div>
                                <div>MongoDB</div>
                            </div>
                            <div className='grid grid-cols-2'>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        </SetIntersectionObserver>
                        <SetIntersectionObserver type={3}  direction='right'>
                        <div className='float-right'>2</div>
                        </SetIntersectionObserver>
                        <SetIntersectionObserver type={4}  direction='left'>
                        <div className='float-left'>3</div>
                        </SetIntersectionObserver>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoreProjects;


