import React from 'react';
import BlogNode from './BlogNode'


const BlogList = ({item}) => {
    return (
        <div className='flex flex-col justify-items-center' >
            {!item ? null : item.map(post => <BlogNode key={post} post={post} /> ) }
        </div>

    )
    
}

export default BlogList;
