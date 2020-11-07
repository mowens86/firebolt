import Head from 'next/head'
import Footer from './components/footer'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Redirect() {

    const router = useRouter();
    const generatedCode = router.asPath.slice(15, 47);

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
                <Link href={`https://connect.deezer.com/oauth/access_token.php?app_id=${process.env.deezer_app_id}&secret=${process.env.deezer_secret}&code=${generatedCode}`}>
                    <a className={styles.link}>Click Here</a>
                </Link>
            </div>
          </section>
    <div>{generatedCode}</div>
        </main>
  
        <Footer/>
      </div>
    )
  }