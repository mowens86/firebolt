import styles from '../../../styles/Home.module.scss';
import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';

export default function Searchbar( {data} ) {
    const [ newQuery, setNewQuery ] = useState('');

    const searchHandler = () => {
        router.push('/');
    }

    return (
        <section>
            <form>
                
                <input 
                    id="searchValue" 
                    type="text" 
                    name="query"
                    value={newQuery}
                    onInput={(e) => setNewQuery(e.target.value)}
                    placeholder="Search by song title, artist, album..." />
                <button type="submit" onClick={() => searchHandler()}>Search</button>
                {console.log(data)}
            </form>
            
        </section>
    )
  }

  export const getStaticProps = async () => {
    const res = await fetch(`https://api.deezer.com/search?q=eminem`);
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return { props: { data } }
  }