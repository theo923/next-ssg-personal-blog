import React from 'react';
import BlogList from './BlogList';


const Body = ({item}) => {
    return (
        <div className=' mt-12 mx-4 mb-2 md:mx-8 md:mb-8 ' >
            <div className=' flex flex-col' style={{height: 3000}} >
                <BlogList item={item}/>
            </div>
        </div>

    )
    
}

export default Body;
