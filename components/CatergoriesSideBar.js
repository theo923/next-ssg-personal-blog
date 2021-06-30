import React from 'react';

const CatergoriesSideBar = ({catergories}) => {

    const CatergoriesGenerator = (tag) => {
        return (
            <div key={tag} className="flex items-center py-2 mt-6  bg-white cursor-pointer hover:bg-gray-200 rounded-lg text-gray-700 dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                <a href='#' className="px-2 text-sm">{tag}</a>
            </div>
        )
    }

    return (
        <div className='block sticky top-14 overflow-x-auto overflow-y-auto' style={{maxHeight: 'calc(100vh - 148px)', flex: '0 100000 250px'}}>
            <div className='mt-12 mx-6 mb-6 2xl:ml-3 mr-4 md:mr-6 xl:mr-8 shadow-xl'>
                <div className="pb-4 w-64 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <h1 className="px-12 mt-10 text-xl font-semibold text-gray-800 dark:text-white">Catergories</h1>
                    <div className="px-6 py-4 ">
                        {!catergories ? null : catergories.map(tag => CatergoriesGenerator(tag))}
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default CatergoriesSideBar;
