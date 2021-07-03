import Layout from '../components/Layout';
import Head from 'next/head';

const Project = () => {
  const type = 'project';
  return(
      <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Anaheim&family=Cinzel+Decorative&family=Hind+Siliguri:wght@300&family=Julius+Sans+One&family=Proza+Libre&family=Rajdhani&family=Spartan:wght@400&family=Ubuntu:wght@300&display=swap" rel="stylesheet" />
            <title>Project</title>
        </Head>
        <Layout type={type}/>
      </>
  )
}



export default Project;