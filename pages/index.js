import fs from 'fs';
import Link from 'next/link';
import Layout from '../components/Layout';


const App = ({slugs}) => {
  slugs = slugs.map(slug => {
    return (
      <div key={slug}>
        <Link id={slug} href={'/blog/'+ slug}>
          <a>{'/blog/'+ slug}</a>
        </Link><br/>
      </div>
    )
  })

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