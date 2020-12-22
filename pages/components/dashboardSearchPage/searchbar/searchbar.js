import styles from './searchbar.module.scss';
import React, { useState, useEffect } from 'react';
import Results from '../searchResults/searchResults';
// import MusicPlayer from '../../dashboardHomePage/player/player';
import axios from 'axios';
 
export default function Searchbar( props ) {
  
  const [data, setData] = useState({ data: [] });
  const [query, setQuery] = useState('');

  const year = new Date().getFullYear();
  const [url, setUrl] = useState(
    `https://api.deezer.com/search?q=top+hits+${year}`,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
 
  // Fetch search query data
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

 
  return (
    <div className={styles.searchBarSection}>

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
        
      <div className={styles.searchResultsFlex}>
      {/* {console.log(data.data)} */}
       {searchResults}
      </div>
      )}

      {/* <div className={styles.musicPlayerContainer}>
        <MusicPlayer musictrack={track} autoplaysetting={autoplay}/>
      </div> */}
    </div>
  );
};
