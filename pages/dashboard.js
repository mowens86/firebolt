import React, { useState } from 'react';
import Layout from './components/layout/layout';
import DashboardLayout from './components/dashboard/dashboardLayout';
import Navigation from './components/dashboard/navigation/navigation';
import MainContainer from './components/dashboard/containers/mainContainer/mainContainer';
import DashboardHero from './components/dashboard/hero/hero';
import ChartsContainer from './components/dashboard/containers/chartsContainer/chartsContainer';
import Charts from './components/dashboard/charts/charts';
import styles from '../styles/Home.module.scss';
import { signIn, useSession } from 'next-auth/client';

import MusicPlayer from './components/dashboard/player/player';

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

  if (session) {

    const topTracks = props.chart.tracks.data.map((track) => {
      return <Charts 
                key={track.id}
                trackid={track.id}
                trackimage={track.album.cover_medium}
                tracknamelong={track.title_short}
                trackname={track.title_short}
                trackartist={track.artist.name}
                trackpreview={track.preview}
              />
    });

    let selectedTrack = topTracks.[0].props.trackid;
    const [track, setTrack] = useState(selectedTrack);
    const [play, setPlay] = useState(false);


    // Gather figures holding track ids
    let topTracksCollection = document.getElementsByTagName("Figure");
    // Convert HTMLcollection to an array
    topTracksCollection = [...topTracksCollection];
    // Loop through top tracks
    topTracksCollection.forEach(track => {
      // Add event listener to each figure
      track.addEventListener('click', function() {
        // Convert from string to integer
        selectedTrack = parseInt(track.id);
        // setState to updated track
        setTrack(selectedTrack);
        // setState autoplay on music player to true after selection, default is false on initial page load 
        setPlay(true);
      });
    });

    return (

      <Layout>
          <DashboardLayout>
            <Navigation />
            <MainContainer>
              <DashboardHero />
              <ChartsContainer>
                {topTracks}
              </ChartsContainer>
              <MusicPlayer musictrack={track} autoplay={play}/>
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
