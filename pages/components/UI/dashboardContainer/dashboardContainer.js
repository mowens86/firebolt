import styles from './dashboardContainer.module.scss';
import React from 'react';

export default function Chart( props ) {

    return (
        <div className={styles.mainSection}>
            {props.children}
        </div>
    )
  }