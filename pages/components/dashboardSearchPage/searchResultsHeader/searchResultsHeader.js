import React from 'react';
import styles from './searchResultsHeader.module.scss';

export default function SearchResultsHeader() {
    return (
        <div className={styles.searchResultsHeader}>
        <div className={styles.searchHeaderContent}>
          <h3>#</h3>
        </div>
        <div className={styles.searchHeaderContent}>
          <h3>Track</h3>
        </div>
        <div className={styles.searchHeaderContent}>
          <h3>Artist</h3>
        </div>
        <div className={styles.searchHeaderContent}>
          <h3>Album</h3>
        </div>
      </div>
    )
}