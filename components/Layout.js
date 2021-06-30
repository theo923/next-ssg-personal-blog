import React from 'react';
import Navigation from './Navigation';
import Content from './Content';

const navItem = ['Blog', 'Project', 'About']

const Layout = ({item}) => {
    return (
        <div>
            <Navigation navItem={navItem} />
            <Content item={item} />
        </div>
    )
    
}

export default Layout;
