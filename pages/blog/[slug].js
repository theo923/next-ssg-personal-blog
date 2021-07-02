import * as React from 'react';
import * as fs from 'fs';
import path from 'path';
import marked from 'marked';
import matter from 'gray-matter';
import Head from 'next/head';
import Layout from '../../components/Layout'

const Post = ({data, httpString}) => {
    return(
        <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Anaheim&family=Cinzel+Decorative&family=Hind+Siliguri:wght@300&family=Josefin+Sans:wght@200&family=Jost:ital,wght@1,300&family=Julius+Sans+One&family=Proza+Libre&family=Rajdhani&family=Ubuntu:wght@300&display=swap" rel="stylesheet" />
            <title>{data.title}</title>
        </Head>
        <Layout data={data} httpString={httpString}></Layout>
        </>
    )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync('posts');
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
    const readMarkdownFile = fs.readFileSync(path.join('posts', slug + '.md')).toString();
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