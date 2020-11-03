import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Firebolt | Music Your Way</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <div>
            <h1 className={styles.title}>Firebolt</h1>
          </div>
        </section>

      </main>

      <footer className={styles.footer}>
        <a
          className={styles.hover}
          href="https://www.deezer.com/us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/firebolt.svg" alt="Firebolt Logo" className={styles.logo} />
          {' '} Music data powered by XXX
          
        </a>
      </footer>
    </div>
  )
}
