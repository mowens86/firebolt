import React from 'react';
import styles from './searchResults.module.scss';

export default function Chart( props ) {
    
    return (
            <figure id={props.trackid} className={styles.searchGrid}>
                <div className={styles.searchContent}>
                    <p>{props.resultnumber}</p>
                </div>
                <div className={styles.searchContent}>
                    <p>{props.trackname}</p>
                </div>
                <div className={styles.searchContent}>
                    <p>{props.trackartist}</p>
                </div>
                <div className={styles.searchContent}>
                    <p>{props.albumtitle}</p>
                </div>
            </figure>
    )
  }