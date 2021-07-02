import * as React from 'react';
import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Layout from '../../components/Layout';


const categories = ['React', 'NextJS', 'JavaScript', 'HTML5', 'CSS', 'Lifestyle', 'Music']

const Catergory = ({category, data, slugs}) => {
    return(
        <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Anaheim&family=Cinzel+Decorative&family=Hind+Siliguri:wght@300&family=Josefin+Sans:wght@200&family=Jost:ital,wght@1,300&family=Julius+Sans+One&family=Proza+Libre&family=Rajdhani&family=Ubuntu:wght@300&display=swap" rel="stylesheet" />
            <title>{data.title}</title>
        </Head>
          <Layout data={data} item={slugs} category={category}/>
          </>
    )
  }

export const getStaticPaths = async () => {
    
    const files = categories;
    const paths = files.map((filename, idx) => ({
        params: {
            category: files[idx]
        }
    }));

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async ({params: {category}}) => {
    const files = fs.readdirSync('posts');
    const slugs = files.map(filename => filename.replace('.md',''));
    const readMarkdownFile = files.map(slug => fs.readFileSync(path.join('posts', slug)).toString());
    const matterMarkdownFile = readMarkdownFile.map(file => matter(file).data);
      return {
        props: {
            category,
            slugs,
            data: matterMarkdownFile
        }
    }
}

export default Catergory;