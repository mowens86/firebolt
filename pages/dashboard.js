import React from 'react';
import Layout from './components/layout/layout';
import DashboardLayout from './components/dashboard/dashboardLayout';
import styles from '../styles/Home.module.scss';
import { signIn, useSession } from 'next-auth/client';
// import { getSession } from 'next-auth/client';

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
          {console.log(props.chart.tracks.data.[0])}
          <DashboardLayout 
            trackimage={props.chart.tracks.data.[0].album.cover_small}
            trackname={props.chart.tracks.data.[0].title_short}
            trackartist={props.chart.tracks.data.[0].artist.name}/>
          

      </Layout>
    );
  }

  export const getStaticProps = async () => {
    const res = await fetch(`https://api.deezer.com/chart`);
    const chart = await res.json();
    return { props: { chart } }
  }
