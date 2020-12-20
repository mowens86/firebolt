import styles from './charts.module.scss';
import React from 'react';

export default function Chart( props ) {
    
    // const capitalizeFirstLetter = (str) => {
    //     if(str.length > 15) str = str.substring(0,15) + '...';
    //     return str
    //       .toLowerCase()
    //       .split(' ')
    //       .map(function(word) {
    //           return word[0].toUpperCase() + word.substr(1);
    //     })
    //     .join(' ');
    //   };

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
                        {/* <h4>{capitalizeFirstLetter(props.trackname)}</h4>
                        <p>{capitalizeFirstLetter(props.trackartist)}</p> */}
                        <h4>{props.trackname}</h4>
                        <p>{props.trackartist}</p>
                    </figcaption>
                </div>

            </figure>
    )
  }