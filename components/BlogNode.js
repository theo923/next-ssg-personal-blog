import React from 'react';
import Link from 'next/link';


const BlogNode = ({ post }) => {
    return (
        <div>
            <Link id={post} href={'/blog/'+ post}>
                <div className="my-4 w-full px-8 py-4 mx-2 bg-white cursor-pointer hover:bg-gray-200 rounded-lg dark:bg-gray-800">

                    <div className="my-2">
                        <p className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{post}</p>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisi</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">Design</a>
                        <span className="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
                    </div>
                </div>
            </Link>
        </div>
        
    )
    
}

export default BlogNode;
