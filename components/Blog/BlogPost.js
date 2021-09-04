import React from "react";
import Link from "next/link";
import Image from "next/image";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import SetIntersectionObserver from "../functionality/SetIntersectionObserver";

const BlogPost = ({ data, httpString }) => {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll(httpString);
    }
  }, []);

  return (
    <article data-test="component-blog-blogPost" className=" md:p-14">
      <h1 className="font-prozaLibre text-5xl leading-loose">{data?.title}</h1>
      <h2 className="font-spartan italic text-lg leading-relaxed">
        {data?.description}
      </h2>
      <div className="flex items-center my-4 leading-relaxed">
        {data?.tags.map((tag) => (
          <div
            key={tag}
            className="font-spartan italic mr-2 pl-2 py-1 pt-2 pr-3 text-xs font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
          >
            <Link href={`/category/${tag}`}>{tag}</Link>
          </div>
        ))}
      </div>
      <span className="font-spartan text-lg font-light text-gray-600">
        {data?.date}
      </span>
      <div
        className="my-10"
        style={{
          left: "5%",
          right: "5%",
          width: "90%",
          height: "2px",
          backgroundImage:
            "linear-gradient(to right, transparent, rgb(48,49,51), transparent)",
        }}
      ></div>
      <div
        className="font-hindSiliguri text-2xl pb-96 mb-96 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: httpString }}
      ></div>
    </article>
  );
};

export default BlogPost;
