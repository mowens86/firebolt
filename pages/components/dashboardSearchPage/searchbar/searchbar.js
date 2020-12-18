import styles from './searchbar.module.scss';
import React, { useState, useEffect } from 'react';
import Results from '../searchResults/searchResults';
import axios from 'axios';
 
export default function Searchbar( props ) {
  const [data, setData] = useState({ data: [] });
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState(
    `https://api.deezer.com/search?q=ludacris`,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);
        setData(result.data);
    } catch (error) {
        setIsError(true);
    }
      setIsLoading(false);
    };
 
    fetchData();
  }, [url]);

  // // Default top track
  // let selectedTrack = topTracks.[0].props.trackid;
  // const [track, setTrack] = useState(selectedTrack);
  // const [autoplay, setAutoplay] = useState(false);
  
  // useEffect(() => {
  //       // Gather figures holding track ids
  //       let topTracksCollection = document.getElementsByTagName("Figure");
  //       // Convert HTMLcollection to an array
  //       topTracksCollection = [...topTracksCollection];
  //       // Loop through top tracks
  //       topTracksCollection.forEach(track => {
  //         // Add event listener to each figure
  //         track.addEventListener('click', function() {
  //           // Convert from string to integer
  //           selectedTrack = parseInt(track.id);
  //           // setState to updated track
  //           setTrack(selectedTrack);
  //           // setState autoplay on music player to true after selection, default is false on initial page load 
  //           setAutoplay(true);
  //         });
  //       });
  // });
 
  return (
    <section className={styles.searchBarSection}>
      <form
        onSubmit={event => {
          setUrl(`https://api.deezer.com/search?q=${query}`);
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
        
      <div>
      {/* {console.log(data.data)} */}
      {data.data.map(item => (
            <Results 
              key={item.id}
              trackid={item.id}
              trackimage={item.album.cover_medium}
              tracknamelong={item.title_short}
              trackname={item.title_short}
              trackartist={item.artist.name}
              trackpreview={item.preview} 
            />
          ))}
      </div>


      // {isLoading ? (
      //   <div>Loading Results...</div>
      // ) : (
        
      // <ul>
      //   {console.log(data.data)}
      // {data.data.map(item => (
      //       <li key={item.id}>
      //         <a href={item.preview}>{item.title_short}</a>
      //       </li>
      //     ))}
      // </ul>
      )}
    </section>
  );
};
