import React, { useState } from 'react';
import { useSession } from 'next-auth/client';

import Layout from './components/UI/layout/layout';
import DashboardLayout from './components/UI/dashboardLayout/dashboardLayout';
import Navigation from './components/navigation/navigation';
import DashboardContainer from './components/UI/dashboardContainer/dashboardContainer';
import DashboardHero from './components/dashboardHomePage/hero/hero';
import GenreContainer from './components/dashboardGenrePage/genreContainer/genreContainer';
import Genre from './components/dashboardGenrePage/genre/genre';

import Loading from './components/UI/loading/loading';
import NoSession from './components/UI/noSession/noSession';


export default function Genres(props) {
  const [session, loading] = useSession();

  if (loading) {
    return (
      <Loading />
    );
  }
  

  if (!session) {
    return (
      <NoSession />
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
