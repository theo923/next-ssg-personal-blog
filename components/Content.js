import React from 'react';
import AuthorInfo from './Blog/AuthorSideBar';
import Body from './Blog/Body';
import CategoriesSideBar from './Blog/CategoriesSideBar';
import ProjectInfo from './Project/ProjectInfo';
import ContactMe from './Contact/ContactMe';
import AboutMe from './About/AboutMe';


const Content = ({type, category, data, item, httpString, categories}) => {

    return (
        <div className='h-full'>
            {type === 'blog' ?
                <div>
                    <div id='header' className='flex items-center justify-center shadow-lg bg-gradient-to-r from-blue-500 to-blue-600' style={{height: 400}}>
                        <p className='m-4 text-2xl font-anaheim text-white flex text-center'>Hello, I am Theo, Welcome to my blog.<br /> I love learning and I will keep sharing what I have learnt everyday.<br /> If you have questions/comments please leave a message on the Contact page</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 '>
                        <div className='order-2 2xl:order-1 lg:col-span-3 2xl:col-span-1 block justify-self-center'><CategoriesSideBar categories={categories} /></div>
                        <div className='2xl:order-2 lg:col-span-2 2xl:col-span-3'><Body category={category} data={data} item={item} httpString={httpString} /></div>
                        <div className='2xl:order-3 justify-self-center '><AuthorInfo /></div>
                    </div>
                </div> : 
            type === 'project' ? 
                <div id='header' className='flex items-center justify-center shadow-lg bg-gradient-to-r from-purple-400 to-purple-500'>
                    <ProjectInfo />
                </div> : 
            type === 'contact' ? 
                <div id='header' className='flex items-center justify-center shadow-lg bg-gradient-to-r from-red-400 to-red-500'>
                    <ContactMe />
                </div> : 
            type === 'about' ? 
                <div id='header' className='bg-gradient-to-r from-green-600 to-green-700'>
                    <AboutMe />
                </div> : null}
        </div>

    )
    
}

export default Content;
