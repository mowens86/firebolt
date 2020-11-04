import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'


export default Dashboard = () => {
    return (
      <div className={styles.container}>
        <Head>
          <title>Firebolt | Dashboard</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          
          <section>
              <h1 className={styles.title}>Firebolt</h1>
              <h2 className={styles.subTitle}>Welcome to the dashboard</h2>
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