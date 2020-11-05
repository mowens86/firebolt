import Head from 'next/head'
import Footer from './components/footer'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'


export default function Dashboard() {
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
  
        <Footer/>
      </div>
    )
  }