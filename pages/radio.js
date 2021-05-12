import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/client';

import Layout from './components/UI/layout/layout';
import DashboardLayout from './components/UI/dashboardLayout/dashboardLayout';
import Navigation from './components/navigation/navigation';
import DashboardContainer from './components/UI/dashboardContainer/dashboardContainer';
import DashboardHero from './components/dashboardHomePage/hero/hero';
import RadioStationsContainer from './components/dashboardRadioPage/radioStationsContainer/radioStationsContainer';
import RadioStations from './components/dashboardRadioPage/radioStations/radioStations';

import Loading from './components/UI/loading/loading';
import NoSession from './components/UI/noSession/noSession';

export default function Radio(props) {
    const [ session, loading ] = useSession();
    
    // console.log(props.radio.data);

    const topRadioStations = props.radio.data.map((station) => {
        // console.log(station);
        return <RadioStations 
            key={station.id}
            radioid={station.id}
            radioimage={station.picture_medium}
            radiotitle={station.title}
            radiotracklist={station.tracklist}
        />

    })

    if (loading) {
        return (
            <Loading />
        )
    }

    if (!session) {
        return (
            <NoSession />
        )
    }

    return (
        <Layout>
            <DashboardLayout>
                <Navigation />
                <DashboardContainer>
                    <DashboardHero />
                    <RadioStationsContainer>
                    {/* <h2 className={"construction"}>This page is under under construction...</h2>
                    <style jsx>{`
                        .construction {
                        padding-top: 5rem;
                        color: #fff;
                        text-align: center;
                        }
                    `}</style> */}
                    {topRadioStations}
                    </RadioStationsContainer>
                </DashboardContainer>
            </DashboardLayout>
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch(`https://api.deezer.com/radio/top`);
    const radio = await res.json();
    return { props: { radio } }; // will be passed to the page component as props
}