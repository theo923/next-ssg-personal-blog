import React from 'react';


const Content = ({item}) => {
    return (
        <div className='h-screen' >
            <div id='header' className='flex items-center justify-center bg-gradient-to-tr from-blue-100 via-blue-300 to-blue-500' style={{height: 300}}>
                <div className=''>Image with header</div>
            </div>
            <div className='grid grid-cols-3 justify justify-items-center'>
                <div className=''>5345435</div>
                <div className=''>{item}</div>
                <div className=''>5345435</div>
                
            </div>
        </div>

    )
    
}

export default Content;
