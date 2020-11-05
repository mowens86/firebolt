import Head from 'next/head'
import Footer from './components/footer'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Router from 'next/router'


export default function Redirect() {

    return (
      <div className={styles.container}>
        <Head>
          <title>Firebolt | Redirecting</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          
          <section>
              <h1 className={styles.title}>Firebolt</h1>
              <h2 className={styles.subTitle}>Hold your musical notes, almost done. Click below to continue...</h2>
              <div className={styles.linkWrapper}>
                <Link href={`https://connect.deezer.com/oauth/access_token.php?app_id=${process.env.deezer_app_id}&secret=${process.env.deezer_secret}&code=${redirectCode}`}>
                    <a className={styles.link}>Click Here</a>
                </Link>
            </div>
          </section>
  
        </main>
  
        <Footer/>
      </div>
    )
  }