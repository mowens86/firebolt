import styles from './charts.module.scss';
import React from 'react';

export default function Chart( props ) {
    
    const capitalizeFirstLetter = (str) => {
        if(str.length > 15) str = str.substring(0,15) + '...';
        return str
          .toLowerCase()
          .split(' ')
          .map(function(word) {
              return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
      };

      const getTrackId = () => {
        return props.trackid && console.log(props.trackid);
        // return props.trackid;
      };

    return (
            <div className={styles.chartsWrapper}>
                <figure id={props.trackid} onClick={getTrackId} className={styles.chartsFigure}>
                    
                    <img 
                        className={styles.chartsImage} 
                        src={props.trackimage}
                        alt={props.trackname} 
                        title={props.tracknamelong}/>
                    <div>
                        <figcaption className={styles.figContent}>
                            <h4>{capitalizeFirstLetter(props.trackname)}</h4>
                            <p>{capitalizeFirstLetter(props.trackartist)}</p>
                            {/* <audio controls>
                                <source src={props.trackpreview} type="audio/mpeg"/>
                            </audio> */}
                            
                        </figcaption>
                    </div>

                </figure>
            </div>
    )
  }