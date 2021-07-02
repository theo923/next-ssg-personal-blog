import React from 'react';
import AuthorInfo from './AuthorSideBar';
import Body from './Body';
import CategoriesSideBar from './CategoriesSideBar'


const Content = ({category, data, item, httpString, categories}) => {
    return (
        <div className='h-full'>
            <div id='header' className='flex items-center justify-center shadow-lg bg-gradient-to-r from-blue-500 to-blue-600' style={{height: 600}}></div>
            <div className='grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 '>
                <div className='hidden 2xl:block justify-self-center'><CategoriesSideBar categories={categories} /></div>
                <div className='col-span-2 2xl:col-span-3'><Body category={category} data={data} item={item} httpString={httpString} /></div>
                <div className='justify-self-center '><AuthorInfo /></div>
            </div>
        </div>

    )
    
}

export default Content;
