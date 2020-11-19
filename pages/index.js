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
              <h2 className={styles.subTitle}>Signed in as {session.user.name}</h2>
              <div className={styles.linkWrapper}>
                <a onClick={signOut} className={styles.link}>Sign Out</a>
              </div>
            </section>
          )
        }
        
      </main>
    
      <Footer/>
  
    </div>
  )
}
