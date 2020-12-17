import React from 'react';
import styles from './dashboardLayout.module.scss';
// import { getSession } from 'next-auth/client';

export default function DashboardLayout (props) {

    return (
        <section className={styles.dashboardWrapper}>
            {props.children}
        </section>
    );
  }
