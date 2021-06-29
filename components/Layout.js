import React from 'react';
import Navigation from './Navigation';
import Content from './Content';

const Layout = ({item}) => {
    return (
        <div>
            <Navigation />
            <Content item={item}/>
        </div>
    )
    
}

export default Layout;
