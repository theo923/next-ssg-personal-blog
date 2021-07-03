import React from 'react';
import Link from 'next/link';

const CategoriesSideBar = ({categories}) => {

    const CategoriesGenerator = (tag) => {
        return (
            <div key={tag} className="flex flex-wrap 2xl:flex-col px-6 ">
                <Link href={`/category/${tag}`} >
                    <div className="flex items-center my-2 mt-6  bg-white cursor-pointer hover:bg-gray-200 rounded-lg text-gray-700 hover:text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                        <div className="font-hindSiliguri px-2 text-lg">{tag}</div>
                    </div>
                </Link>
            </div>
        )
    }

    return (
        <div className='block sticky top-14 overflow-hidden' style={{maxHeight: 'calc(100vh - 148px)', flex: '0 100000 250px'}}>
            <div className='mt-12 mx-6 mb-6 2xl:ml-3 mr-4 md:mr-6 xl:mr-8 shadow-xl'>
                <div className="py-4 2xl:w-64 bg-white rounded-lg shadow-lg">
                    <h1 className="font-prozaLibre mx-10 lg:mt-10 text-2xl lg:text-3xl font-semibold text-gray-800">Categories</h1>
                    {!categories ? null : categories.map(tag => CategoriesGenerator(tag))}
                </div>
            </div>
        </div>
    )
    
}

export default CategoriesSideBar;
