import Layout from '../components/Layout';
import Head from 'next/head';


const About = () => {
  const type = 'about';
  return(
      <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Anaheim&family=Cinzel+Decorative&family=Hind+Siliguri:wght@300&family=Julius+Sans+One&family=Proza+Libre&family=Rajdhani&family=Spartan:wght@400&family=Ubuntu:wght@300&display=swap" rel="stylesheet" />
            <style>{"html, body { scroll-behavior: smooth; }"}</style>
            <meta name="description" content="Theo's about me" />
            <meta name="keywords" content="Theo theo923 about" />
            <title>About | Theo's Blog</title>
        </Head>
        <Layout type={type}/>
      </>
  )
}



export default About;