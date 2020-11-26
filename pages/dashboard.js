import React from 'react';
import Layout from './components/layout/layout';
import Searchbar from './components/searchbar/searchbar';
import styles from '../styles/Home.module.scss';
import { signIn, useSession } from 'next-auth/client';
// import Router, { useRouter } from 'next/router';
// import { getSession } from 'next-auth/client';
// import Link from 'next/link';

export default function Dashboard(props) {
  const [session, loading] = useSession();

  if (!session) {
    return (
      <Layout>
          <section>
              <h1 className={styles.title}>Firebolt</h1>
              <h2 className={styles.subTitle}>You're not signed in. Please Login.</h2>
              <div className={styles.linkWrapper}>
                <a onClick={signIn} className={styles.link}>Login</a>
              </div>
          </section>
      </Layout>
    );
  }

    return (
      <Layout>
          <section>
              <h1 className={styles.title}>Firebolt</h1>
              <h2 className={styles.subTitle}>Welcome to the dashboard</h2>
          </section>

          {console.log(props.data.data.[0].title)}
          
          <Searchbar />

      </Layout>
    );
  }

  export const getStaticProps = async () => {
    const res = await fetch('https://api.deezer.com/search?q=good+things');
    const data = await res.json();
    return { props: { data } }
  }
