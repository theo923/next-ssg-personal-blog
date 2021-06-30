import React from 'react';


const Body = ({item}) => {
    return (
        <div className=' rounded-2xl shadow-2xl mt-12 mx-4 mb-2 md:mx-8 md:mb-8 xl:m-12 ' style={{height: 3000}} >
            <div>{item}</div>
        </div>

    )
    
}

export default Body;
