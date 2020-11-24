import Head from 'next/head';
import Footer from './components/footer';
import styles from '../styles/Home.module.scss';
import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Home() {
  const [ session, loading ] = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Firebolt | Music Your Way</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!session && (
              <section>
                  <h1 className={styles.title}>Firebolt</h1>
                  <h2 className={styles.subTitle}>30 second clips of pure audio bliss...</h2>
                  <div className={styles.linkWrapper}>
                    <a onClick={signIn} className={styles.link}>Login</a>
                  </div>
              </section>
        )}
        
        {
          session && (
            <section>
              <h1 className={styles.title}>Firebolt</h1>
              <h2 className={styles.subTitle}>Signed in as {session.user.name}, go to the...</h2>
              <div className={styles.linkWrapper}>
                <Link href="/dashboard">
                  <a className={styles.link}>Dashboard</a>
                </Link>
              </div>
              <div className={styles.signOutWrapper}>
                <a className={styles.signOut} onClick={signOut}>Sign Out Here</a>
              </div>
            </section>
          )
        }
        
      </main>
    
      <Footer/>
  
    </div>
  )
}
