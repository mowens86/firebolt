import styles from './genreContainer.module.scss';
import React from 'react';

export default function Chart( props ) {

    return (
        <section className={styles.genreSection}>
            <h2>Genres</h2>
            <div className={styles.genreFlexContainer}>
                {props.children} 
            </div>
        </section>
    )
  }