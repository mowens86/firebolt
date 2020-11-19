import styles from '../../styles/Home.module.scss';
import React, { useState } from 'react';

export default function Searchbar({ initialQuery, onSave }) {
    const [ newQuery, setNewQuery ] = useState(initialQuery);

    const searchHandler = (e) => {
        e.preventDefault();
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
                <button onClick={() => onSave(newQuery)}>Search</button>
            </form>
        </section>
    )
  }