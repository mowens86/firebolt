import React from 'react';
import styles from './radioStationsContainer.module.scss';

export default function RadioStationsContainer( props ) {

    return (
        <section className={styles.radioSection}>
            <h2>Top Radio Stations (Under Construction...)</h2>
            <div className={styles.radioFlexContainer}>
                {props.children} 
            </div>
        </section>
    )
  }