
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';
import SetIntersectionObserver from '../functionality/SetIntersectionObserver';


const ContactItem = ({forwardRef, executeScroll, coreProjectsRef}) => {

    return (
        <>
            <div ref={forwardRef} className='pt-20 mx-4 mt-20 lg:mx-20 min-h-screen'>
                <div className='flex flex-col justify-items-center items-center'>
                    <SetIntersectionObserver type={1}  direction='left'><h3 className='font-spartan text-2xl lg:text-5xl mb-20 text-center'>Thank you for visiting my site</h3></SetIntersectionObserver>
                    <SetIntersectionObserver type={2}  direction='left'><h3 className='font-spartan text-2xl lg:text-5xl mb-20 text-center'>Are you interested in my skills?</h3></SetIntersectionObserver>
                    <SetIntersectionObserver type={3}  direction='left'><h3 className='font-spartan text-2xl lg:text-5xl mb-20 text-center'>Please feel free to contact me</h3></SetIntersectionObserver>
                    <SetIntersectionObserver type={4}  direction='left'>
                    <div className='flex gap-16 mb-8'>
                        <div><a href='https://github.com/theo923' target='_blank'><FaGithub className='cursor-pointer hover:text-blue-500' size={30} /></a></div>
                        <div><a href='https://www.linkedin.com/in/theotam923/' target='_blank'><FaLinkedinIn className='cursor-pointer hover:text-blue-500' size={30} /></a></div>
                        <div><a href='https://twitter.com/TheoTam4' target='_blank'><FaTwitter className='cursor-pointer hover:text-blue-500' size={30} /></a></div>
                        <div><a href='mailto:theotam923@gmail.com' target='_blank'><FaMailBulk className='cursor-pointer hover:text-blue-500' size={30} /></a></div>
                    </div>
                    </SetIntersectionObserver>  
                    <SetIntersectionObserver type={5}  direction='left'><p className='font-anaheim text-2xl mb-20 text-center'>Telephone call is avaliable: +4407718602197</p></SetIntersectionObserver>
                    <SetIntersectionObserver type={6}  direction='left'><button className='font-anaheim text-2xl mb-20 text-blue-500 hover:text-blue-700' onClick={() => executeScroll(coreProjectsRef)}>Go To The Top</button></SetIntersectionObserver>
                    <SetIntersectionObserver type={7}  direction='left'><button className='font-anaheim text-2xl mb-20 text-blue-500 hover:text-blue-700'><Link href='/'>Go To My Blog</Link></button></SetIntersectionObserver>
                    <SetIntersectionObserver type={8}  direction='left'><button className='font-anaheim text-2xl mb-20 text-blue-500 hover:text-blue-700'><a href='https://github.com/theo923'>Go To Github and learn more</a></button></SetIntersectionObserver>
                    <SetIntersectionObserver type={9}  direction='left'><button className='font-anaheim text-2xl mb-20 text-blue-500 hover:text-blue-700'><Link href='/contact'>Leave a Comment</Link></button></SetIntersectionObserver>
                </div>
            </div>
        </>
    )
}

export default ContactItem;


