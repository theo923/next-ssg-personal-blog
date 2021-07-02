import React from 'react';
import Link from 'next/link';

const CategoriesSideBar = ({categories}) => {

    const CategoriesGenerator = (tag) => {
        return (
            <div>
                <Link href={`/category/${tag}`} >
                    <div key={tag} className="flex items-center py-2 mt-6  bg-white cursor-pointer hover:bg-gray-200 rounded-lg text-gray-700 hover:text-blue-600 dark:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                        <div className="font-hindSiliguri px-2 text-lg">{tag}</div>
                    </div>
                </Link>
            </div>
        )
    }

    return (
        <div className='block sticky top-14 overflow-x-auto overflow-y-auto' style={{maxHeight: 'calc(100vh - 148px)', flex: '0 100000 250px'}}>
            <div className='mt-12 mx-6 mb-6 2xl:ml-3 mr-4 md:mr-6 xl:mr-8 shadow-xl'>
                <div className="pb-4 w-64 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <h1 className="font-prozaLibre px-10 mt-10 text-3xl font-semibold text-gray-800 dark:text-white">Categories</h1>
                    <div className="px-6 py-4 ">
                        {!categories ? null : categories.map(tag => CategoriesGenerator(tag))}
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default CategoriesSideBar;
