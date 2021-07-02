import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../components/Layout';
import Head from 'next/head';

const App = ({data, slugs}) => {
  return(
      <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Anaheim&family=Cinzel+Decorative&family=Hind+Siliguri:wght@300&family=Julius+Sans+One&family=Proza+Libre&family=Rajdhani&family=Spartan:wght@400&family=Ubuntu:wght@300&display=swap" rel="stylesheet" />
            <title>{data ? data.title : null}</title>
        </Head>
        <Layout data={data} item={slugs}/>
      </>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts');
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