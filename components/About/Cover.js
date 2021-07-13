
import React from 'react';
import SetIntersectionObserver from '../functionality/SetIntersectionObserver';
import Link from 'next/link'


const Cover = ({forwardRef, executeScroll, coreProjectsRef}) => {

    return (
        <>
            <div ref={forwardRef} className='py-20 lg:p-20 sticky mx-4 lg:mx-20 h-screen'>
                <div className='flex flex-col items-center justify-center h-full'>
                    <SetIntersectionObserver type={1} direction='down'>
                        <div className='font-spartan text-6xl mb-4'>Theo Tam</div>
                        <div className='font-spartan text-4xl mb-4'>React Developer</div>
                    </SetIntersectionObserver>    

                    <SetIntersectionObserver type={2}  direction='left'>
                    <div className='flex gap-16 mb-8'>
                        <div><a href='https://github.com/theo923' target='_blank'><svg className='cursor-pointer fill-current hover:text-blue-500' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a></div>
                        <div><a href='https://www.linkedin.com/in/theotam923/' target='_blank'><svg className='cursor-pointer fill-current hover:text-blue-500' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a></div>
                        <div><a href='https://twitter.com/TheoTam4' target='_blank'><svg className='cursor-pointer fill-current hover:text-blue-500' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a></div>
                    </div>
                    </SetIntersectionObserver>  
                    
                    <SetIntersectionObserver type={3}  direction='right'>
                    <p className='font-anaheim text-lg text-center mb-12 mx-9 xl:mx-40'>A React Developer based in UK with <span className=' p-0.5 bg-red-200'>3 years</span> of experiences in programming. Actively on Github <span className=' p-0.5 bg-red-200'>every day</span> with above <span className=' p-0.5 bg-red-200'>250+</span> contributions this year. Created more than <span className=' p-0.5 bg-red-200'>5+</span> projects within 2 months. Keep learning and writing Blog post <span className=' p-0.5 bg-red-200'>every day</span>.</p>
                    </SetIntersectionObserver>
                    <div className='font-anaheim grid grid-cols-2 mb-4 justify-items-center items-center gap-16'>
                        <SetIntersectionObserver type={4}  direction='left'>
                            <button className='rounded-sm bg-transparent border-gray-700 border-2 py-2 px-4 hover:bg-blue-300 hover:text-white hover:scale-125' onClick={() => executeScroll(coreProjectsRef)}>Details</button>
                        </SetIntersectionObserver>
                        <SetIntersectionObserver type={5}  direction='right'>
                            <button className='rounded-sm bg-transparent border-gray-700 border-2 py-2 px-6 hover:bg-blue-300 hover:text-white hover:scale-125'><Link href='/'>Blog</Link></button>
                        </SetIntersectionObserver>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Cover;


