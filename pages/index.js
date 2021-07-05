import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../components/Layout';
import Head from 'next/head';

const App = ({data, slugs}) => {
  const type = 'blog';
  return(
      <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Anaheim&family=Cinzel+Decorative&family=Hind+Siliguri:wght@300&family=Julius+Sans+One&family=Proza+Libre&family=Rajdhani&family=Spartan:wght@400&family=Ubuntu:wght@300&display=swap" rel="stylesheet" />
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            />
            <meta name="description" content="Description" />
            <meta name="keywords" content="Keywords" />

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
            <link rel="apple-touch-icon" href="icons/icon-256x256.png"></link>
            <meta name="theme-color" content="#317EFB" />
            <title>Theo's Blog</title>
        </Head>
        <Layout type={type} data={data} item={slugs}/>
      </>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts', "utf8").reverse();
  const slugs = files.map(filename => filename.replace('.md',''));
  const readMarkdownFile = files.map(slug => fs.readFileSync(path.join('posts', slug)).toString());
  const matterMarkdownFile = readMarkdownFile.map(file => matter(file).data);
  return {
    props: {
      slugs,
      data: matterMarkdownFile
    }
  }
}



export default App;