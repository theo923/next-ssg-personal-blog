import fs from 'fs';
import Link from 'next/link';
import Layout from '../components/Layout';


const App = ({slugs}) => {
  return(
    <div>
      <Layout item={slugs}/>
    </div>
  )
}


export const getStaticProps = async () => {
  const files = fs.readdirSync('./posts');
  const slugs = files.map(filename => filename.replace('.md','')).filter(slug => slug.indexOf('.') < 0);
  return {
    props: {
      slugs
    }
  }
}

export default App;