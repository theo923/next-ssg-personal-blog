import React from 'react';
import SetIntersectionObserver from '../functionality/SetIntersectionObserver';
import { FaGithub, FaTwitter, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';
import Link from 'next/link';


const Cover = ({ forwardRef, executeScroll, coreProjectsRef }) => {
    return (
        <>
            <div data-test="component-cover" ref={forwardRef} className='pb-20 lg:pb-20 mb-20 mx-4 lg:mx-20 min-h-screen'>
                <div className='flex flex-col items-center justify-center h-full m-11'>
                    <SetIntersectionObserver type={1} direction='down'>
                        <h1 className='font-spartan text-center text-5xl sm:text-6xl mb-4 mt-60 lg:mt-80'>Theo Tam</h1>
                        <h2 className='font-spartan text-center text-2xl sm:text-4xl mb-4'>React Developer</h2>
                    </SetIntersectionObserver>

                    <SetIntersectionObserver type={2} direction='left'>
                        <div className='flex gap-16 mb-8'>
                            <a href='https://github.com/theo923' target='_blank'><FaGithub className='cursor-pointer hover:text-blue-500' size={30} /></a>
                            <a href='https://www.linkedin.com/in/theotam923/' target='_blank'><FaLinkedinIn className='cursor-pointer hover:text-blue-500' size={30} /></a>
                            <a href='https://twitter.com/TheoTam4' target='_blank'><FaTwitter className='cursor-pointer hover:text-blue-500' size={30} /></a>
                            <a href='mailto:theotam923@gmail.com' target='_blank'><FaMailBulk className='cursor-pointer hover:text-blue-500' size={30} /></a>
                        </div>
                    </SetIntersectionObserver>

                    <SetIntersectionObserver type={3} direction='right'>
                        <p className='font-anaheim text-lg text-center mb-12 mx-9 xl:mx-40'>A React Developer based in UK with <span className=' p-0.5 bg-red-200'>3 years</span> of experiences in programming. Actively on Github <span className=' p-0.5 bg-red-200'>every day</span> with above <span className=' p-0.5 bg-red-200'>300+</span> contributions this year. Created more than <span className=' p-0.5 bg-red-200'>5+</span> projects within 2 months. Keep learning and writing Blog post <span className=' p-0.5 bg-red-200'>every day</span>.</p>
                    </SetIntersectionObserver>
                    <div className='font-anaheim grid grid-cols-2 mb-4 justify-items-center items-center gap-16'>
                        <SetIntersectionObserver type={4} direction='left'>
                            <button className='rounded-sm bg-transparent border-gray-700 border-2 py-2 px-4 hover:bg-blue-300 hover:text-white hover:scale-125 transition duration-500 ease-in-out' onClick={() => executeScroll(coreProjectsRef)}>Details</button>
                        </SetIntersectionObserver>
                        <SetIntersectionObserver type={5} direction='right'>
                            <button className='rounded-sm bg-transparent border-gray-700 border-2 py-2 px-6 hover:bg-blue-300 hover:text-white hover:scale-125 transition duration-500 ease-in-out'><Link href='/'>Blog</Link></button>
                        </SetIntersectionObserver>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cover;


