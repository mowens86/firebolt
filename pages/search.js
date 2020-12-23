import React, { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/client';
import axios from 'axios';

import Layout from './components/UI/layout/layout';
import DashboardLayout from './components/UI/dashboardLayout/dashboardLayout';
import Navigation from './components/navigation/navigation';
import DashboardContainer from './components/UI/dashboardContainer/dashboardContainer';
import SearchContainer from './components/dashboardSearchPage/searchContainer/searchContainer';
import Results from '../pages/components/dashboardSearchPage/searchResults/searchResults';
import MusicPlayer from './components/dashboardHomePage/player/player';

import Loading from './components/UI/loading/loading';
import NoSession from './components/UI/noSession/noSession';

import styles from '../pages/components/dashboardSearchPage/searchbar/searchbar.module.scss';

// import SearchBarAndResults from './components/dashboardSearchPage/searchbar/searchbar';


export default function Search(props) {
  const [session, loading] = useSession();

  // Search query states and status
  const [data, setData] = useState({ data: [] });
  const [query, setQuery] = useState('');

  const year = new Date().getFullYear();
  const [url, setUrl] = useState(
    `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=top+hits+${year}`,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Fetch search query data
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios.get(url);
        setData(result.data);
    } catch (error) {
        setIsError(true);
    }
      setIsLoading(false);
    };
 
    fetchData();
  }, [url]); 

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

  // Searched query results
  const searchResults = data.data.map(item => {
    return  <Results 
              key={item.id}
              trackid={item.id}
              trackimage={item.album.cover_medium}
              tracknamelong={capitalizeFirstLetter(item.title_short)}
              trackname={capitalizeFirstLetter(item.title_short)}
              trackartist={capitalizeFirstLetter(item.artist.name)}
              trackpreview={item.preview} 
            />
  });

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
              <SearchContainer>
                {/* <SearchBarAndResults /> */}
                <div className={styles.searchBarSection}>

                  <form
                    onSubmit={event => {
                      setUrl(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}`);
                      event.preventDefault();
                    }}>

                    <input
                      className={styles.searchBarInput}
                      type="text"
                      value={query}
                      placeholder="Search for songs and artists..."
                      onChange={event => setQuery(event.target.value)}
                    />
                    
                    <div className={styles.searchBarButtonWrapper}>
                      <button 
                        className={styles.searchBarButton}
                        type="submit">
                        Search
                      </button>
                    </div>
                  </form>

                  {isError && <div>Something went wrong ...</div>}

                  {isLoading ? (
                    <div>Loading Results...</div>
                  ) : (
                    
                  <div className={styles.searchResultsFlex}>
                    {searchResults}
                  </div>
                  )}

                  {/* <div className={styles.musicPlayerContainer}>
                    <MusicPlayer musictrack={track} autoplaysetting={autoplay}/>
                  </div> */}
                  </div>
              </SearchContainer>
              {/* <MusicPlayer /> */}
              <MusicPlayer musictrack={track} autoplaysetting={autoplay} />
            </DashboardContainer>
          </DashboardLayout>
      </Layout>
    );

  }  
}
