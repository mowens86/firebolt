import styles from './charts.module.scss';
import React, { useState } from 'react';

export default function Chart( props ) {

    return (
        <section>
            <p>Some info: {props.data}</p>
            
        </section>
    )
  }

  export const getStaticProps = async () => {
    const res = await fetch(`https://api.deezer.com/chart`);
    const data = await res.json();
    return { props: { data } }
  }