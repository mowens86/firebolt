import Layout from '../pages/components/UI/layout/layout';
import styles from '../styles/Home.module.scss';
import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Home() {
  const [ session, loading ] = useSession();

  if (loading) {
    return (
      <Layout>
          <section>
              <h1 className={styles.title}>Firebolt</h1>
              <h2 className={styles.subTitle}>Loading...</h2>
          </section>
      </Layout>
    );
  }

  return (
    <Layout>
      
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
        
        {!session && (
              <section>
                  <h1 className={styles.title}>Firebolt</h1>
                  <h2 className={styles.subTitle}>30 second clips of pure audio bliss...</h2>
                  <div className={styles.linkWrapper}>
                    <a onClick={signIn} className={styles.link}>Login</a>
                  </div>
              </section>
        )}
    
      </Layout>
  )
}
