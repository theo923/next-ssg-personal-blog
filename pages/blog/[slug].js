import * as React from 'react';
import * as fs from 'fs';
import path from 'path';
import marked from 'marked';
import matter from 'gray-matter';
import Head from 'next/head';
import Layout from '../../components/Layout';

const Post = ({data, httpString}) => {
    const type = 'blog';
    return(
        <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Anaheim&family=Cinzel+Decorative&family=Hind+Siliguri:wght@300&family=Julius+Sans+One&family=Proza+Libre&family=Rajdhani&family=Spartan:wght@400&family=Ubuntu:wght@300&display=swap" rel="stylesheet" />
            <link href='../styles/prism-material-dark.css' rel="stylesheet" />
            <meta name="description" content={httpString} />
            <meta name="keywords" content={data.tags} />
            <title>{`${data.title} | Theo's Blog`}</title>
        </Head>
        <Layout type={type} data={data} httpString={httpString}></Layout>
        </>
    )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync('posts').reverse();
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md','')
        }
    }));

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async ({params: {slug}}) => {
    const readMarkdownFile = fs.readFileSync(path.join('posts', slug + '.md'), "utf8").toString();
    const matterMarkdownFile = matter(readMarkdownFile);
    const httpString = marked(matterMarkdownFile.content);

    return {
        props: {
            httpString,
            data: matterMarkdownFile.data
        }
    }
}

export default Post;