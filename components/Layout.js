import React from 'react';
import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';

const navItem = ['Blog', 'Project', 'About']
const categories = ['React', 'NextJS', 'JavaScript', 'HTML5', 'CSS', 'Lifestyle', 'Music']

const Layout = ({category, data, item, httpString}) => {
    return (
        <div>
            <Navigation navItem={navItem} />
            <Content category={category} data={data} item={item} httpString={httpString} categories={categories} />
            <Footer />
        </div>
    )
    
}

export default Layout;
