import styles from './charts.module.scss';
import React from 'react';

export default function Chart( props ) {

    return (
            <figure id={props.trackid} className={styles.chartsFigure}>
                
                <img 
                    className={styles.chartsImage} 
                    src={props.trackimage}
                    alt={props.trackname} 
                    title={props.tracknamelong}
                    width={135} height={135}/>
                <div>
                    <figcaption className={styles.figContent}>
                        <h4>{props.trackname}</h4>
                        <p>{props.trackartist}</p>
                    </figcaption>
                </div>

            </figure>
    )
  }