import React from 'react';
import styles from './searchResults.module.scss';

export default function Chart( props ) {
    
    return (

            <figure id={props.trackid} className={styles.searchGrid}>
                <div className={styles.searchContent}>
                    <p>{props.resultnumber}</p>
                </div>
                <div className={styles.searchContent}>
                    <p>{props.trackartist}</p>
                </div>
                <div className={styles.searchContent}>
                    <p>{props.trackname}</p>
                </div>
                <div className={styles.searchContent}>
                    <p>{props.albumtitle}</p>
                </div>
            </figure>


            // <figure id={props.trackid} className={styles.searchResultsFigure}>
            //     <img
            //         className={styles.searchResultsImage} 
            //         src={props.trackimage}
            //         alt={props.trackname} 
            //         title={props.tracknamelong}
            //         width={135} height={135}/>
            //     <div>
            //         <figcaption className={styles.figContent}>
            //             <h4>{props.trackname}</h4>
            //             <p>{props.trackartist}</p>
            //         </figcaption>
            //     </div>
            // </figure>
    )
  }