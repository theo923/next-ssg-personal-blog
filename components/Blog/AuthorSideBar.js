import React from 'react';
import Image from 'next/image';



const AuthorSideBar = () => {
    return (
        <div className='block sticky top-14 overflow-hidden shadow-2xl rounded-lg mt-12 mx-6 mb-6 2xl:ml-3 mr-4 md:mr-6 xl:mr-8' style={{maxHeight: 'calc(100vh - 148px)', flex: '0 100000 250px'}}>
            <div className="max-w-sm mx-auto bg-white md:rounded-lg">
                <Image className="object-cover object-center" height='100' width='100%' layout='responsive' src='/image/profilepic.jpg' alt="avatar" />
                
                <div className="px-6 py-4 ">
                    <h1 className="font-prozaLibre text-2xl font-semibold text-gray-800">Theo Tam</h1>

                    <p className="font-spartan italic text-md py-2 text-gray-700">Coder / Learner / Challenger</p>
                    

                    <div className='font-hindSiliguri text-md'>
                        <div className="flex items-center mt-6 text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>

                            <h1 className="px-3">Full Stack React Developer</h1>
                        </div>

                        <div className="flex items-center mt-6 text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>                            
                            <h1 className="px-3"><a className='text-blue-500 hover:text-blue-300' href='https://twitter.com/TheoTam4' target='_blank'>@TheoTam4</a></h1>
                        </div>

                        <div className="flex items-center mt-6 text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                            <h1 className="px-3"><a className='text-blue-500 hover:text-blue-300' href='https://github.com/theo923' target='_blank'>@theo923</a></h1>
                        </div>

                        <div className="flex items-center mt-6 text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            <h1 className="px-3">theotam923@gmail.com</h1>
                        </div>

                        <div className="flex items-center mt-6 text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>                          
                            <h1 className="px-3">London</h1>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    )
    
}

export default AuthorSideBar;
