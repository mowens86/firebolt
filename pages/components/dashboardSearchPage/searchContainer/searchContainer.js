import styles from './searchContainer.module.scss';
import React from 'react';

export default function Chart( props ) {

    return (
        <section className={styles.searchSection}>
            <h2>Search For Your Favorites</h2>
            <div className={styles.searchFlexContainer}>
                {props.children} 
            </div>
        </section>
    )
  }