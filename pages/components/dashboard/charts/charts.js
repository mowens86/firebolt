import styles from './charts.module.scss';
import React, { useState } from 'react';

export default function Chart( props ) {

    return (
        <section className={styles.chartsSection}>
            <h2>Weekly Top Tracks</h2>
            <div className={styles.chartsWrapper}>
                <figure className={styles.chartsFigure}>
                    <img src={props.trackimage}/>
                    <div>
                        <figcaption>
                            <h3>{props.trackname}</h3>
                            <p>{props.trackartist}</p>
                        </figcaption>
                    </div>

                </figure>
            </div>
            
        </section>
    )
  }