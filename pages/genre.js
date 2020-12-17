import React, { useState } from 'react';
import Layout from './components/UI/layout/layout';
import DashboardLayout from './components/UI/dashboardLayout/dashboardLayout';
import Navigation from './components/navigation/navigation';
import DashboardContainer from './components/UI/dashboardContainer/dashboardContainer';
import DashboardHero from './components/dashboardHomePage/hero/hero';
import GenreContainer from './components/dashboardGenrePage/genreContainer/genreContainer';
import Genre from './components/dashboardGenrePage/genre/genre';
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
            <DashboardContainer>
              <DashboardHero />
              <GenreContainer>
                {genres}
              </GenreContainer>
            </DashboardContainer>
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
