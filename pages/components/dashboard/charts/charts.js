import styles from './charts.module.scss';
import React from 'react';

export default function Chart( props ) {

    return (
        <section className={styles.chartsSection}>
            <h2>Weekly Top Tracks</h2>
            <div className={styles.chartsWrapper}>
                <figure className={styles.chartsFigure}>
                    <img className={styles.chartsImage} src={props.trackimage}/>
                    <div>
                        <figcaption className={styles.figContent}>
                            <h3>{props.trackname}</h3>
                            <p>{props.trackartist}</p>
                            <audio controls>
                                <source src={props.trackpreview} type="audio/mpeg"/>
                            </audio>
                        </figcaption>
                    </div>

                </figure>
            </div>
            
        </section>
    )
  }