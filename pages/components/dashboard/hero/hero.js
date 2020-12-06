import React from 'react';
import { signOut } from 'next-auth/client';
import styles from './hero.module.scss';

export default function DashboardHero () {

    return (
        <section>
            <div>
                <img className={styles.DashboardHero} src="/dashboardhero.jpg" />
                <div className={styles.signOutWrapper}>
                <a className={styles.signOut} onClick={signOut}>Sign Out</a>
              </div>
            </div>

        </section>
    );
}