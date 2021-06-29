import * as React from 'react';
import * as fs from 'fs';
import path from 'path';
import marked from 'marked';
import matter from 'gray-matter';
import Head from 'next/head'

const Post = ({data, httpString}) => {
    return(
        <>
        <Head><title>{data.title}</title></Head>
        <div dangerouslySetInnerHTML={{__html: httpString}}></div>
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