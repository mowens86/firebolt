import Head from 'next/head';
import Footer from '../footer/footer';
import styles from './layout.module.scss';
import React from 'react';
import Link from 'next/link';

export default function Layout(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Firebolt | Music Your Way</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}> 
        {props.children}
      </main>   
      <Footer/>
    </div>
  )
}
