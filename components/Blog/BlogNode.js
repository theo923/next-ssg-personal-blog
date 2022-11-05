import React from "react";
import Link from "next/link";

const BlogNode = ({ data, post }) => {
  return (
    <div data-test="component-blog-blogNode">
      <Link id={post} href={"/blog/" + post}>
        <div className="blogNode">
          <div className="my-2">
            <h2>{data?.title}</h2>
            <h3>{data?.description}</h3>
          </div>
          <div className="blogNodeTag">
            <div>
              {data?.tags.map((tag) => (
                <button key={tag}>
                  <Link href={`/category/${tag}`}>{tag}</Link>
                </button>
              ))}
            </div>
            <span className="blogPostDate">{data?.date}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogNode;
