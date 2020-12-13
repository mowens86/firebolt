import React, { useState } from 'react';
import Layout from './components/layout/layout';
import DashboardLayout from './components/dashboard/dashboardLayout';
import Navigation from './components/navigation/navigation';
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

    const genres = props.genre.data.map((genre) => {
      return <div key={genre.id}>
        <p>{genre.name}</p>
        <img src={genre.picture} />
      </div>
    });

    // let selectedTrack = topTracks.[0].props.trackid;
    // const [track, setTrack] = useState(selectedTrack);
    // const [play, setPlay] = useState(false);


    // // Gather figures holding track ids
    // let topTracksCollection = document.getElementsByTagName("Figure");
    // // Convert HTMLcollection to an array
    // topTracksCollection = [...topTracksCollection];
    // // Loop through top tracks
    // topTracksCollection.forEach(track => {
    //   // Add event listener to each figure
    //   track.addEventListener('click', function() {
    //     // Convert from string to integer
    //     selectedTrack = parseInt(track.id);
    //     // setState to updated track
    //     setTrack(selectedTrack);
    //     // setState autoplay on music player to true after selection, default is false on initial page load 
    //     setPlay(true);
    //   });
    // });

    return (

      <Layout>
          <DashboardLayout>
            <Navigation />
            <MainContainer>
              <DashboardHero />
              <ChartsContainer>
                {genres}
                {console.log(props.genre.data)}
              </ChartsContainer>
              {/* <MusicPlayer musictrack={track} autoplay={play}/> */}
            </MainContainer>
          </DashboardLayout>
      </Layout>
    );

  }  
}

  export const getStaticProps = async () => {
    const res = await fetch(`https://api.deezer.com/genre`);
    const genre = await res.json();
    return { props: { genre } }
  }
