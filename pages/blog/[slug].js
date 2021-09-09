import * as React from "react";
import * as fs from "fs";
import path from "path";
import marked from "marked";
import matter from "gray-matter";
import Head from "next/head";
import Layout from "../../components/Layout";

const Post = ({ data, httpString }) => {
    const type = "blog";
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Anaheim&family=Cinzel+Decorative&family=Hind+Siliguri:wght@300&family=Julius+Sans+One&family=Proza+Libre&family=Rajdhani&family=Spartan:wght@400&family=Ubuntu:wght@300&display=swap"
                    rel="stylesheet"
                />

                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta
                    name="description"
                    content="Blog about Theo's coding journey, lifestyle, learning different language and modules( React, NextJS, ExpressJS and others.....)."
                />
                <meta name="keywords" content="Theo theo923 blog React" />

                <link rel="manifest" href="/manifest.json" />
                <link
                    href="icons/icon-16x16.png"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                />
                <link
                    href="icons/icon-32x32.png"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                />
                <link
                    rel="apple-touch-icon"
                    href="icons/icon-256x256.png"
                ></link>
                <meta name="theme-color" content="#317EFB" />

                <link
                    href="../styles/prism-material-dark.css"
                    rel="stylesheet"
                />
                <meta name="description" content={httpString} />
                <meta name="keywords" content={data.tags} />
                <title>{`${data.title} | Theo's Blog`}</title>
            </Head>
            <Layout type={type} data={data} httpString={httpString}></Layout>
        </>
    );
};

export const getStaticPaths = async () => {
    const files = fs.readdirSync("posts").reverse();
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace(".md", ""),
        },
    }));

    return {
        paths: paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const readMarkdownFile = fs
        .readFileSync(path.join("posts", slug + ".md"), "utf8")
        .toString();
    const matterMarkdownFile = matter(readMarkdownFile);
    const httpString = marked(matterMarkdownFile.content);

    return {
        props: {
            httpString,
            data: matterMarkdownFile.data,
        },
    };
};

export default Post;
