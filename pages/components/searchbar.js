import styles from '../../styles/Home.module.scss';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Searchbar( props, { initialQuery, onSave }) {
    const [ newQuery, setNewQuery ] = useState(initialQuery);

    const searchHandler = (e) => {
        e.preventDefault();
        router.push('/dashboard');
        onSave(newQuery);
    }

    return (
        <section>
            <form>
                
                <input 
                    id="searchValue" 
                    type="text" 
                    name="query" 
                    onChange={(e) => setNewQuery(e.target.value)}
                    placeholder="Search by song title, artist, album..." />
                <button onClick={searchHandler()}>Search</button>
                {console.log(props.data)}
            </form>
            
        </section>
    )
  }

  export const getStaticProps = async () => {
    const res = await fetch(`https://api.deezer.com/search?q=${onSave(newQuery)}`);
    const data = await res.json();
    return { props: { data } }
  }