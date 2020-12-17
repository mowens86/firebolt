import React from 'react';
import { signOut } from 'next-auth/client';
import styles from './hero.module.scss';

export default function DashboardHero () {

    return (
        <section>
            <div className={styles.DashboardHero}>
                <div className={styles.linkWrapper}>
                    <a className={styles.link} onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}>Sign Out</a>
              </div>
            </div>

        </section>
    );
}