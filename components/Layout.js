import React from "react";
import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";
import categories from "./Text/categories";

const navItem = ["About", "Blog", "Project", "Contact"];

const Layout = ({ type, category, data, item, httpString }) => {
    return (
        <div data-test="component-app-layout">
            <Navigation navItem={navItem} />
            <Content
                type={type}
                category={category}
                data={data}
                item={item}
                httpString={httpString}
                categories={categories}
            />
            <Footer />
        </div>
    );
};

export default Layout;
