import React from 'react';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';


const Footer = () => {
    return(
        <footer data-test="component-footer" className="flex flex-col items-center justify-between px-6 py-4 bg-white  sm:flex-row">
            <div className="font-spartan italic text-xl font-bold text-gray-800 lg:text-4xl hover:text-gray-700 ">
                <div>
                <Link href="/">Theo's Blog</Link>
                </div>
            </div>

            <p className="font-spartan italic text-lg py-2 text-gray-800 sm:py-0">All rights reserved</p>

            <div className="flex -mx-2 gap-3">
                <a href='https://github.com/theo923' target='_blank'><FaGithub className='cursor-pointer hover:text-blue-500' size={20} /></a>
                <a href='https://www.linkedin.com/in/theotam923/' target='_blank'><FaLinkedinIn className='cursor-pointer hover:text-blue-500' size={20} /></a>
                <a href='https://twitter.com/TheoTam4' target='_blank'><FaTwitter className='cursor-pointer hover:text-blue-500' size={20} /></a>
                <a href='mailto:theotam923@gmail.com' target='_blank'><FaMailBulk className='cursor-pointer hover:text-blue-500' size={20} /></a>
            </div>
        </footer>
    )
}

export default Footer;