import fs from 'fs';
import Link from 'next/link'

const Home = ({slugs}) => {
  return(
    <div>
      {slugs.map(slug => {
        return (
          <div key={slug}>
            <Link href={'/blog/'+ slug}>
              <a>{'/blog/'+ slug}</a>
            </Link><br/>
          </div>
        )
      })}
    </div>
  )
}


export const getStaticProps = async () => {
  const files = fs.readdirSync('posts');
  const slugs = files.map(filename => filename.replace('.md',''));
  return {
    props: {
      slugs
    }
  }
}

export default Home;