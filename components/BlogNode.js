import React from 'react';
import Link from 'next/link';


const BlogNode = ({ data, post }) => {
    return (
        <div>
            <Link id={post} href={'/blog/'+ post}>
                <div className="my-4 w-full px-8 py-4 mx-2 bg-white cursor-pointer hover:bg-gray-200 rounded-lg dark:bg-gray-800">

                    <div className="my-2">
                        <p className="font-prozaLibre text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">{data?.title}</p>
                        <p className="font-spartan italic text-md mt-2 text-gray-600 dark:text-gray-300">{data?.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className='flex'>
                            {!data?.tags ? null : data.tags.map(tag => <a href='#' key={tag} className="font-spartan italic mr-2 pl-2 py-1 pt-2 pr-3 text-xs font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer">{tag}</a>)}
                        </div>
                        <span className="text-sm font-light text-gray-600 dark:text-gray-400">{data?.date}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BlogNode;
