import styles from './genre.module.scss';
import React from 'react';

export default function Chart( props ) {

    return (
            <figure id={props.genreid} className={styles.genreFigure}>
                <img 
                    className={styles.genreImage} 
                    src={props.genreimage}
                    alt={props.genrename}
                    width={135}
                    height={135} />
                <div>
                    <figcaption className={styles.figContent}>
                        <h4>{props.genrename}</h4>
                    </figcaption>
                </div>

            </figure>
    )
  }