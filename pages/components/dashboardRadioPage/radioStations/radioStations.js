import React from 'react';
import styles from './radioStations.module.scss';


export default function RadioStations(props) {

    return (
        <figure id={props.radioid} className={styles.radioFigure}>
                
            <img 
                className={styles.radioImage} 
                src={props.radioimage}
                alt={props.radiotitle} 
                title={props.radiotitle}/>
            <div>
                <figcaption className={styles.figContent}>
                    <h4>{props.radiotitle}</h4>
                </figcaption>
            </div>

        </figure>

    )
}

// key={station.id}
// radioid={station.id}
// radioimage={station.picture_medium}
// radiotitle={station.title}
// radiotracklist={station.tracklist}