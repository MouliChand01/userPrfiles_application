import Head from 'next/head'
import Userlist from '../components/Userlist'
import styles from '../styles/Home.module.css'

export default function Home({ userInfo }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Users Profile's Info Application</title>
        <meta name='keywords' content='userInfo , userProfile' />
        <meta name='description' content='this website will provided a basic Idea about Next.js for Mouli' />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>User ProfileInfo<a href='/'> Application</a></h1>
      </div>
      <Userlist userInfo={userInfo} />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users') // this is the fack api 
  const userInfo = await res.json()
  return {
    props: {
      userInfo,
    },
  }
}
