import Head from 'next/head'
import Footer from './components/footer'
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
              <Link href={`https://connect.deezer.com/oauth/auth.php?app_id=${encodeURIComponent(process.env.deezer_app_id)}&redirect_uri=${encodeURIComponent(process.env.deezer_redirect_uri)}&perms=basic_access,email`}>
                  <a className={styles.link}>Login</a>
              </Link>
            </div>
        </section>

      </main>
    
      <Footer/>
  
    </div>
  )
}
