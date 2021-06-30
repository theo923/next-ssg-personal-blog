import React from 'react';
import AuthorInfo from './AuthorSideBar';
import Body from './Body';
import CatergoriesSideBar from './CatergoriesSideBar'


const Content = ({item, catergories}) => {
    return (
        <div className='h-screen' >
            <div id='header' className='flex items-center justify-center shadow-lg bg-gradient-to-r from-blue-500 to-blue-600' style={{height: 600}}>
                <div className=''>Image with header</div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 '>
                <div className='hidden 2xl:block justify-self-center'><CatergoriesSideBar catergories={catergories} /></div>
                <div className='col-span-2 2xl:col-span-3'><Body item={item} /></div>
                <div className='justify-self-center '><AuthorInfo /></div>
                
            </div>
        </div>

    )
    
}

export default Content;
