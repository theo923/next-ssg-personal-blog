import React from "react";
import Link from "next/link";
import Image from "next/image";
import Prism from "prismjs";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import SetIntersectionObserver from "../functionality/SetIntersectionObserver";
import Blind75 from "../External/Blind75";
import { useRouter } from "next/router";

const BlogPost = ({ data, httpString }) => {
  const router = useRouter();
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll(httpString);
    }
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll(httpString);
    }
  }, [router?.asPath]);

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
        <span className="blogPostDate">{data?.date}</span>
      </div>
      <div className="blogPostBreak" />
      {data?.tags && data?.tags.includes("Blind75") && <Blind75 />}
      <div
        className="blogPostContent"
        dangerouslySetInnerHTML={{ __html: httpString }}
      ></div>
    </article>
  );
};

export default BlogPost;
