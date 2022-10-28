import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Browsercat</title>
      <meta
        name="description"
        content="A Social Preview Image generation service, built on Next.js"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to Browsercat!</h1>
    </main>
  </div>
)

export default Home
