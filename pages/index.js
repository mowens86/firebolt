import Head from 'next/head';
import Footer from './components/footer';
import styles from '../styles/Home.module.scss';
import React from 'react';
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
                  <h2 className={styles.subTitle}>Music your way, all of the time...</h2>
                  <div className={styles.linkWrapper}>
                    <a onClick={signIn} className={styles.link}>Login</a>
                  </div>
              </section>
        )}
        
        {
          session && (
            <section>
              <h1 className={styles.title}>Firebolt</h1>
              <h2 className={styles.subTitle}>Signed in as {session.user.email}</h2>
              <div className={styles.linkWrapper}>
                <button onClick={signOut} className={styles.link}>Sign Out</button>
              </div>
            </section>
          )
        }
        
      </main>
    
      <Footer/>
  
    </div>
  )
}
