
import React from 'react';
import SetIntersectionObserver from '../functionality/SetIntersectionObserver';


const LangNHobbies = ({forwardRef}) => {

    return (
        <>
            <div ref={forwardRef} className='sticky pt-20 mx-4 lg:mx-20 h-screen'>
                
                <div className='grid grid-cols-2 text-center'>
                    <SetIntersectionObserver type={3}  direction='left'>
                    <div className='font-spartan border-r-2 border-gray-700'>
                        LANGUAGES
                    </div>
                    </SetIntersectionObserver>
                    <SetIntersectionObserver type={4}  direction='right'>
                    <div className='font-spartan border-l-2 border-gray-700'>
                        HOBBIES
                    </div>
                    </SetIntersectionObserver>
                </div>
                
            </div>
        </>
    )
}

export default LangNHobbies;


