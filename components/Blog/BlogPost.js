import React from "react";
import Link from "next/link";
import Image from "next/image";
import Prism from "prismjs";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-jsx";
import SetIntersectionObserver from "../functionality/SetIntersectionObserver";

const BlogPost = ({ data, httpString }) => {
    React.useEffect(() => {
        if (typeof window !== "undefined") {
            Prism.highlightAll(httpString);
        }
    }, []);

    return (
        <article data-test="component-blog-blogPost" className="blogPost">
            <h1>{data?.title}</h1>
            <h2>{data?.description}</h2>
            <div className="blogNodeTag my-5">
                <div>
                    {data?.tags.map((tag) => (
                        <button key={tag}>
                            <Link href={`/category/${tag}`}>{tag}</Link>
                        </button>
                    ))}
                </div>
                <span>{data?.date}</span>
            </div>
            <div className="blogPostBreak" />
            <div
                className="blogPostContent"
                dangerouslySetInnerHTML={{ __html: httpString }}
            ></div>
        </article>
    );
};

export default BlogPost;
