import React from 'react';
import Link from 'next/link';


const BlogNode = ({ data, post }) => {
    return (
        <div data-test="component-blog-blogNode">
            <Link id={post} href={'/blog/'+ post}>
                <div className="my-4 w-full px-2 py-4 md:mx-2 bg-white cursor-pointer hover:bg-gray-200 rounded-lg">

                    <div className="my-2">
                        <h2 className="font-prozaLibre text-2xl font-bold text-gray-700  hover:text-gray-600 ">{data?.title}</h2>
                        <h3 className="font-spartan italic text-md mt-2 text-gray-500 ">{data?.description}</h3>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className='flex'>
                            {!data?.tags ? null : data.tags.map(tag => <a href='#' key={tag} className="font-spartan italic mr-2 pl-2 py-1 pt-2 pr-3 text-xs font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer">{tag}</a>)}
                        </div>
                        <span className="font-spartan text-md font-light text-purple-800 ">{data?.date}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BlogNode;
