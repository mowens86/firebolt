import React, { useState } from 'react';
import Layout from './components/layout/layout';
import DashboardLayout from './components/dashboard/dashboardLayout';
import Navigation from './components/dashboard/navigation/navigation';
import MainContainer from './components/dashboard/containers/mainContainer/mainContainer';
import DashboardHero from './components/dashboard/hero/hero';
import GenreContainer from './components/dashboard/containers/genreContainer/genreContainer';
import Genre from './components/dashboard/genre/genre';
import styles from '../styles/Home.module.scss';
import { signIn, useSession } from 'next-auth/client';

export default function Dashboard(props) {
  const [session, loading] = useSession();
  

  if (!session) {
    return (
      <Layout>
          <section>
              <h1 className={styles.title}>Firebolt</h1>
              <h2 className={styles.subTitle}>You're not signed in. Please Login.</h2>
              <div className={styles.linkWrapper}>
                <a onClick={signIn} className={styles.link}>Login</a>
              </div>
          </section>
      </Layout>
    );
  }

  if (session) {

    const genres = props.genre.data.map((genre) => {
      return <Genre 
                key={genre.id}
                genreid={genre.id}
                genreimage={genre.picture}
                genrename={genre.name}
      />
    });

    return (

      <Layout>
          <DashboardLayout>
            <Navigation />
            <MainContainer>
              <DashboardHero />
              <GenreContainer>
                {genres}
              </GenreContainer>
            </MainContainer>
          </DashboardLayout>
      </Layout>
    );

  }  
}

  export const getStaticProps = async () => {
    const res = await fetch(`https://api.deezer.com/genre`);
    const genre = await res.json();
    return { props: { genre } }
  }
