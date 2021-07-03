import React from 'react';
import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';

const navItem = ['Blog', 'Project', 'Contact']
const categories = ['React', 'NextJS', 'JavaScript', 'HTML5', 'CSS', 'Lifestyle', 'Music']

const Layout = ({type, category, data, item, httpString}) => {
    return (
        <div>
            <Navigation navItem={navItem} />
            <Content type={type} category={category} data={data} item={item} httpString={httpString} categories={categories} />
            <Footer />
        </div>
    )
    
}

export default Layout;
