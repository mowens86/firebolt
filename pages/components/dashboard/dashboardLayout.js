import React from 'react';
import Navigation from './navigation/navigation';
import Search from './searchbar/searchbar';
import Charts from './charts/charts';
import styles from './dashboardLayout.module.scss';
// import { getSession } from 'next-auth/client';

export default function DashboardLayout () {

    return (
        <section className={styles.dashboardWrapper}>
            <Navigation />
            {/* <Search /> */}
            <Charts />
        </section>
    );
  }
