import React from 'react';
import Layout from './components/layout/layout';
import DashboardLayout from './components/dashboard/dashboardLayout';
import Navigation from './components/dashboard/navigation/navigation';
import Charts from './components/dashboard/charts/charts';
import styles from '../styles/Home.module.scss';
import { signIn, useSession } from 'next-auth/client';
// import { getSession } from 'next-auth/client';

export default function Dashboard(props) {
  const [session, loading] = useSession();

  

  const mappedCharts = () => {
    let images = props.chart.tracks.data.map( image => image.album.cover_medium);
    return images;
  };
  

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

  if (session) {
    return (

      <Layout>
          {console.log(props.chart.tracks.data)}
          <DashboardLayout>
            <Navigation />
            <Charts 
                
                // trackimage={() => this.mappedCharts}

                trackimage={props.chart.tracks.data.[9].album.cover_medium}
                trackname={props.chart.tracks.data.[9].title_short}
                trackartist={props.chart.tracks.data.[9].artist.name}
                trackpreview={props.chart.tracks.data.[9].preview}
                />
          </DashboardLayout>
      </Layout>
    );

  }  
}

  export const getStaticProps = async () => {
    const res = await fetch(`https://api.deezer.com/chart`);
    const chart = await res.json();
    return { props: { chart } }
  }
