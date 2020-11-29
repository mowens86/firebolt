import styles from './charts.module.scss';
import React, { useState } from 'react';

export default function Chart( props ) {

    return (
        <section className={styles.chartsSection}>
            <h2>Weekly Top Tracks</h2>
            <div className={styles.chartsWrapper}>
                <figure className={styles.chartsFigure}>
                    <img />
                    <div>
                        <figcaption>
                            <h3>Info</h3>
                            <p>Small info</p>
                        </figcaption>
                    </div>

                </figure>
            </div>
            
        </section>
    )
  }