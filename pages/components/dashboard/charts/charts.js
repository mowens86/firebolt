import styles from './charts.module.scss';
import React from 'react';

export default function Chart( props ) {

    return (
            <div className={styles.chartsWrapper}>
                <figure className={styles.chartsFigure}>
                    <img 
                        className={styles.chartsImage} 
                        src={props.trackimage} 
                        alt={props.trackname} 
                        title={props.tracknamelong}/>
                    <div>
                        <figcaption className={styles.figContent}>
                            <h4>{props.trackname}</h4>
                            <p>{props.trackartist}</p>
                            <audio controls>
                                <source src={props.trackpreview} type="audio/mpeg"/>
                            </audio>
                        </figcaption>
                    </div>

                </figure>
            </div>
    )
  }