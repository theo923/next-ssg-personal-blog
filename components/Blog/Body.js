import React from "react";
import BlogList from "./BlogList";
import dynamic from "next/dynamic";
const BlogPost = dynamic(() => import("./BlogPost"));

const Body = ({ category, data, item, httpString }) => {
    return (
        <div
            data-test="component-blog-body"
            className="mt-12 mx-4 mb-2 md:mx-8 md:mb-8"
        >
            <div className="flex flex-col">
                {httpString ? (
                    <BlogPost data={data} httpString={httpString} />
                ) : (
                    <BlogList category={category} data={data} item={item} />
                )}
            </div>
        </div>
    );
};

export default Body;
