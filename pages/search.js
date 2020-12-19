import React, { useState, useEffect } from 'react';
import Layout from './components/UI/layout/layout';
import DashboardLayout from './components/UI/dashboardLayout/dashboardLayout';
import Navigation from './components/navigation/navigation';
import DashboardContainer from './components/UI/dashboardContainer/dashboardContainer';
import SearchContainer from './components/dashboardSearchPage/searchContainer/searchContainer';
import SearchBarAndResults from './components/dashboardSearchPage/searchbar/searchbar';
import MusicPlayer from './components/dashboardHomePage/player/player';
import styles from '../styles/Home.module.scss';
import { signIn, useSession } from 'next-auth/client';

export default function Search(props) {
  const [session, loading] = useSession();

  // Music player controls
  let selectedTrack = null;
  const [track, setTrack] = useState(selectedTrack);
  const [autoplay, setAutoplay] = useState(false);

  // Collect figures and track ids from searched query to listen for any clicks to update the music player  
  useEffect(() => {
        // Gather figures holding track ids
        let searchedTracksCollection = document.getElementsByTagName("Figure");
        // Convert HTMLcollection to an array
        searchedTracksCollection = [...searchedTracksCollection];
        // Loop through top tracks
        searchedTracksCollection.forEach(track => {
          // Add event listener to each figure
          track.addEventListener('click', function() {
            console.log("clicked");
            // Convert from string to integer
            selectedTrack = parseInt(track.id);
            // setState to updated track
            setTrack(selectedTrack);
            // setState autoplay on music player to true after selection, default is false on initial page load 
            setAutoplay(true);
          });
        });
  });

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
          <DashboardLayout>
            <Navigation />
            <DashboardContainer>
              <SearchContainer>
                <SearchBarAndResults />
              </SearchContainer>
              {/* <MusicPlayer /> */}
              <MusicPlayer musictrack={track} autoplaysetting={autoplay} />
            </DashboardContainer>
          </DashboardLayout>
      </Layout>
    );

  }  
}
