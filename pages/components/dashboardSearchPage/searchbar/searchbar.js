import styles from './searchbar.module.scss';
import React, { Fragment, useState, useEffect } from 'react';
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
 
  return (
    <section>
      <form
        onSubmit={event => {
          setUrl(`https://api.deezer.com/search?q=${query}`);
          event.preventDefault();
        }}>
        <input
          type="text"
          value={query}
          placeholder="Search for songs and artists"
          onChange={event => setQuery(event.target.value)}
        />
        <button type="button">
          Search
        </button>
      </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (

      <ul>
      {data.data.map(item => (
            <li key={item.id}>
              <a href={item.preview}>{item.title_short}</a>
            </li>
          ))}
      </ul>
      )}
    </section>
  );
};
