import React from 'react';
import BlogList from './BlogList';
import BlogPost from './BlogPost'


const Body = ({category, data, item, httpString}) => {
    return (
        <div className='mt-12 mx-4 mb-2 md:mx-8 md:mb-8'>
            <div className='flex flex-col'>
                {httpString ? <BlogPost data={data} httpString={httpString} /> : <BlogList category={category} data={data} item={item}/>}
            </div>
        </div>

    )
    
}

export default Body;
