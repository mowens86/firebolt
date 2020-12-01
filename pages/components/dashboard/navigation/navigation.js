import Link from 'next/link';
// import React, { ReactElement } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './navigation.module.scss';
// import { getSession } from 'next-auth/client';

export default function Navigation () {

    return (
        <section className={styles.navigationWrapper}>
            <div>
                <h2 className={styles.title}>
                    <span>
                        <img src="/firebolt.svg" alt="Firebolt Logo" className={styles.logo} />
                    </span> Firebolt</h2>
            </div>
            <nav className={styles.navigation}>
                <Link href="/dashboard">
                    <a className={styles.link}>Home</a>
                </Link>
            </nav>
        </section>
    );
  }
