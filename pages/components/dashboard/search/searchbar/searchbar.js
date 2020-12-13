import styles from './searchbar.module.scss';
import React, { useState } from 'react';

export default function Searchbar( props ) {
    const [ query, setQuery ] = useState('');

    return (
        <section>

            <form>
                <input 
                    id="searchValue" 
                    type="text" 
                    name="query"
                    value={query}
                    onInput={(e) => setQuery(e.target.value)}
                    placeholder="Search by song title, artist, album..." />
                <button type="submit" onClick={() => searchHandler()}>Search</button>
            </form>
        </section>
    )
  }

  export const getStaticProps = async () => {
    const res = await fetch(`https://api.deezer.com/search?q=${setQuery}`);
    const data = await res.json();
    return { props: { data } }
  }