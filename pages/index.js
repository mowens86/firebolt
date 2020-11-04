import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Firebolt | Music Your Way</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <section>
            <h1 className={styles.title}>Firebolt</h1>
            <h2 className={styles.subTitle}>Music your way, all of the time...</h2>
            <div className={styles.linkWrapper}>
              <Link href={`https://connect.deezer.com/oauth/auth.php?app_id=${process.env.deezer_app_id}&redirect_uri=http://localhost:3000/dashboard&perms=basic_access,email`}>
                  <a className={styles.link}>Login</a>
              </Link>
            </div>
        </section>

      </main>

      <footer className={styles.footer}>
        <a
          className={styles.footerLink}
          href="https://www.deezer.com/us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/firebolt.svg" alt="Firebolt Logo" className={styles.logo} />
          {' '} Music data powered by:
          
        </a>
          <a 
          href="/deezer.png"
          href="https://www.deezer.com/us/"
          target="_blank"
          >
            <img src="/deezer.png" alt="Firebolt Logo" className={styles.deezer} />
          </a>
      </footer>
    </div>
  )
}
