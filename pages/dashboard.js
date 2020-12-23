import React, { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/client';

import Layout from './components/UI/layout/layout';
import DashboardLayout from './components/UI/dashboardLayout/dashboardLayout';
import Navigation from './components/navigation/navigation';
import DashboardContainer from './components/UI/dashboardContainer/dashboardContainer';
import DashboardHero from './components/dashboardHomePage/hero/hero';
import ChartsContainer from './components/dashboardHomePage/chartsContainer/chartsContainer';
import Charts from './components/dashboardHomePage/charts/charts';
import MusicPlayer from './components/dashboardHomePage/player/player';

import Loading from './components/UI/loading/loading';
import NoSession from './components/UI/noSession/noSession';

// import { getSession } from 'next-auth/client';

export default function Dashboard(props) {
  const [session, loading] = useSession();

  // Capitalize first letter function
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

  // Map out top tracks from static props
  const topTracks = props.chart.tracks.data.map((track) => {
    return <Charts 
              key={track.id}
              trackid={track.id}
              trackimage={track.album.cover_medium}
              tracknamelong={capitalizeFirstLetter(track.title_short)}
              trackname={capitalizeFirstLetter(track.title_short)}
              trackartist={capitalizeFirstLetter(track.artist.name)}
              trackpreview={track.preview}
            />
  });

  // Default top track
  let selectedTrack = topTracks.[0].props.trackid;
  const [track, setTrack] = useState(selectedTrack);
  const [autoplay, setAutoplay] = useState(false);
  
  useEffect(() => {
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
            setAutoplay(true);
          });
        });
  });

  if (loading) {
    return (
      <Loading />
    );
  }

  if (!session) {
    return (
      <NoSession />
    );
  }

  if (session) {
    return (

      <Layout>
          <DashboardLayout>
            <Navigation />
            <DashboardContainer>
              <DashboardHero />
              <ChartsContainer>
                {topTracks}
              </ChartsContainer>
              <MusicPlayer musictrack={track} autoplaysetting={autoplay}/>
            </DashboardContainer>
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
