import React from 'react';
import Navigation from './Navigation';
import Content from './Content';

const navItem = ['Blog', 'Project', 'About']
const catergories = ['React', 'NextJS', 'JavaScript', 'HTML5', 'CSS', 'Lifestyle', 'Music']

const Layout = ({item}) => {
    return (
        <div>
            <Navigation navItem={navItem} />
            <Content item={item} catergories={catergories} />
        </div>
    )
    
}

export default Layout;
