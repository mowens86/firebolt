import styles from './chartsContainer.module.scss';
import React from 'react';

export default function Chart( props ) {

    return (
        <section className={styles.chartsSection}>
            <h2>Weekly Top Tracks</h2>
            <div className={styles.chartsFlexContainer}>
                {props.children} 
            </div>
        </section>
    )
  }