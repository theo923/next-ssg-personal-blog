import React from 'react';
import AuthorInfo from './AuthorSideBar';
import Body from './Body';
import CategoriesSideBar from './CategoriesSideBar';
import ProjectInfo from '../Project/ProjectInfo';


const Content = ({type, category, data, item, httpString, categories}) => {
    return (
        <div className='h-full'>
            {type === 'blog' ?
                <div>
                    <div id='header' className='flex items-center justify-center shadow-lg bg-gradient-to-r from-blue-500 to-blue-600' style={{height: 400}}></div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 '>
                        <div className='order-2 2xl:order-1 lg:col-span-3 2xl:col-span-1 block justify-self-center'><CategoriesSideBar categories={categories} /></div>
                        <div className='2xl:order-2 lg:col-span-2 2xl:col-span-3'><Body category={category} data={data} item={item} httpString={httpString} /></div>
                        <div className='2xl:order-3 justify-self-center '><AuthorInfo /></div>
                    </div>
                </div> : 
            type === 'project' ? 
                <div id='header' className='flex items-center justify-center shadow-lg bg-gradient-to-r from-purple-400 to-purple-500'>
                    <ProjectInfo />
                </div> 
            : null}
        </div>

    )
    
}

export default Content;
