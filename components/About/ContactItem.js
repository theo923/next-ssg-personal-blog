
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedinIn, FaMailBulk, FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';
import SetIntersectionObserver from '../functionality/SetIntersectionObserver';


const ContactItem = ({forwardRef, executeScroll, coreProjectsRef}) => {

    return (
        <>
            <div ref={forwardRef} className='py-20 my-20 mx-4 lg:mx-14 min-h-screen'>
                <div className='flex flex-col justify-items-center items-center'>
                    <SetIntersectionObserver type={1}  direction='left'><h3 className='font-spartan text-2xl lg:text-5xl mb-20 text-center mt-20'>Thank you for visiting my site</h3></SetIntersectionObserver>
                    <SetIntersectionObserver type={2}  direction='left'><h3 className='font-spartan text-2xl lg:text-5xl mb-20 text-center'>Are you interested in my skills?</h3></SetIntersectionObserver>
                    <SetIntersectionObserver type={3}  direction='left'><h3 className='font-spartan text-2xl lg:text-5xl mb-20 text-center'>Please feel free to contact me</h3></SetIntersectionObserver>
                    <SetIntersectionObserver type={4}  direction='left'>
                    <div className='flex gap-16 mb-8'>
                        <a href='https://github.com/theo923' target='_blank'><FaGithub className='cursor-pointer hover:text-blue-500' size={30} /></a>
                        <a href='https://www.linkedin.com/in/theotam923/' target='_blank'><FaLinkedinIn className='cursor-pointer hover:text-blue-500' size={30} /></a>
                        <a href='https://twitter.com/TheoTam4' target='_blank'><FaTwitter className='cursor-pointer hover:text-blue-500' size={30} /></a>
                        <a href='mailto:theotam923@gmail.com' target='_blank'><FaMailBulk className='cursor-pointer hover:text-blue-500' size={30} /></a>
                    </div>
                    </SetIntersectionObserver>  
                    <SetIntersectionObserver type={5}  direction='left'><p className='font-anaheim text-2xl mb-20 text-center'>Telephone call is avaliable: +4407718602197</p></SetIntersectionObserver>
                    <SetIntersectionObserver type={6}  direction='left'><button className='font-anaheim flex justify-items-center items-center text-2xl mb-20 text-blue-400 hover:text-blue-800' onClick={() => executeScroll(coreProjectsRef)}><FaAngleDoubleRight className='mr-3 floatLeftRight' />Go To The Top<FaAngleDoubleLeft className='ml-3 floatRightLeft' /></button></SetIntersectionObserver>
                    <SetIntersectionObserver type={7}  direction='left'><button className='font-anaheim flex justify-items-center items-center text-2xl mb-20 text-blue-400 hover:text-blue-800'><FaAngleDoubleRight className='mr-3 floatLeftRight' /><Link href='/'>Go To My Blog</Link><FaAngleDoubleLeft className='ml-3 floatRightLeft' /></button></SetIntersectionObserver>
                    <SetIntersectionObserver type={8}  direction='left'><button className='font-anaheim flex justify-items-center items-center text-2xl mb-20 text-blue-400 hover:text-blue-800'><FaAngleDoubleRight className='mr-3 floatLeftRight' /><a href='https://github.com/theo923'>Go To Github and learn more</a><FaAngleDoubleLeft className='ml-3 floatRightLeft' /></button></SetIntersectionObserver>
                    <SetIntersectionObserver type={9}  direction='left'><button className='font-anaheim flex justify-items-center items-center text-2xl mb-20 text-blue-400 hover:text-blue-800'><FaAngleDoubleRight className='mr-3 floatLeftRight' /><Link href='/contact'>Leave a Comment</Link><FaAngleDoubleLeft className='ml-3 floatRightLeft' /></button></SetIntersectionObserver>
                </div>
            </div>
        </>
    )
}

export default ContactItem;


