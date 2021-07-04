import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const BlogPost = ({ data, httpString }) => {
    
    return (
        <div className='p-4 md:p-14'>
            <div className='font-prozaLibre text-5xl leading-loose'>{data?.title}</div>
            <div className='font-spartan italic text-lg leading-relaxed'>{data?.description}</div>
            <div className='flex items-center my-4 leading-relaxed'>
                {data?.tags.map(tag => <div key={tag} className="font-spartan italic mr-2 pl-2 py-1 pt-2 pr-3 text-xs font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
                    <Link href={`/category/${tag}`}>{tag}</Link>
                </div>)}
            </div>
            <span className="font-spartan text-lg font-light text-gray-600">{data?.date}</span>
            <div className='my-10' style={{left: '5%', right: '5%', width: '90%' , height: '2px', backgroundImage: 'linear-gradient(to right, transparent, rgb(48,49,51), transparent)'}}></div>
            <div className='font-hindSiliguri pb-96 mb-96 text-2xl leading-relaxed' dangerouslySetInnerHTML={{__html: httpString}}></div>
        </div>
        
    )
    
}

export default BlogPost;
