import Head from 'next/head';
import Footer from './footer/footer';
import styles from './layout.module.scss';
import React from 'react';

export default function Layout(props) {

  return (
    <div className={styles.container}>
      <Head>
        <html lang="en" />
        <title>Firebolt | Music Your Way</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="description" content="Listen to 30 second clips of your favorite music using the Deezer API. Check out the weekly top tracks and search for your favorite songs and artists." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <main className={styles.main}> 
        {props.children}
      </main>   
      <Footer/>
    </div>
  )
}
