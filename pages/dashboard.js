import React from 'react';
import Layout from './components/layout/layout';
import DashboardLayout from './components/dashboard/dashboardLayout';
import Navigation from './components/dashboard/navigation/navigation';
import MainContainer from './components/dashboard/containers/mainContainer/mainContainer';
import DashboardHero from './components/dashboard/hero/hero';
import ChartsContainer from './components/dashboard/containers/chartsContainer/chartsContainer';
import Charts from './components/dashboard/charts/charts';
import styles from '../styles/Home.module.scss';
import { signIn, useSession } from 'next-auth/client';

// import { getSession } from 'next-auth/client';

export default function Dashboard(props) {
  const [session, loading] = useSession();

  const capitalizeFirstLetter = (str) => {
    if(str.length > 15) str = str.substring(0,15) + '...';
    return str
      .toLowerCase()
      .split(' ')
      .map(function(word) {
          return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ');
  };

  const topTracks = props.chart.tracks.data.map((track) => {
    return <Charts 
              key={track.id}
              trackimage={track.album.cover_medium}
              tracknamelong={track.title_short}
              trackname={capitalizeFirstLetter(track.title_short)}
              trackartist={capitalizeFirstLetter(track.artist.name)}
              trackpreview={track.preview}
            />
  });

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
          {/* {console.log(props.chart.tracks.data)} */}
          <DashboardLayout>
            <Navigation />
            <MainContainer>
              <DashboardHero />
              <ChartsContainer>
                {topTracks}
              </ChartsContainer>
            </MainContainer>
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
