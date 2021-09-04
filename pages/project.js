import Layout from "../components/Layout";
import Head from "next/head";

const Project = () => {
  const type = "project";
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Anaheim&family=Cinzel+Decorative&family=Hind+Siliguri:wght@300&family=Julius+Sans+One&family=Proza+Libre&family=Rajdhani&family=Spartan:wght@400&family=Ubuntu:wght@300&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Theo's previous projects" />
        <meta name="keywords" content="Theo theo923 projects" />
        <title>Project | Theo's Blog</title>
      </Head>
      <Layout type={type} />
    </>
  );
};

export default Project;
