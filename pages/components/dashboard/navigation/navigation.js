import Link from 'next/link';
import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import styles from './navigation.module.scss';
// import { getSession } from 'next-auth/client';

const home = <FontAwesomeIcon icon={faHome} />;

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
                
                <div className={styles.linkWrapper}>
                    <Link href="/dashboard">
                        <a className={styles.link}><FontAwesomeIcon icon={faHome} /> Home</a>
                    </Link>
                
                    <Link href="/dashboard">
                        <a className={styles.link}><FontAwesomeIcon icon={faSearch} /> Search</a>
                    </Link>

                    <Link href="/dashboard">
                        <a className={styles.link}><FontAwesomeIcon icon={faTable} /> Genre</a>
                    </Link>
                    </div>
                
                <div className={styles.linkWrapper}>
                    <Link href="/dashboard">
                        <a className={styles.link}><FontAwesomeIcon icon={faBroadcastTower} /> Radio</a>
                    </Link>

                    <Link href="/dashboard">
                        <a className={styles.link}><FontAwesomeIcon icon={faMicrophone} /> Podcast</a>
                    </Link>
                </div>

                <div className={styles.linkWrapper}>
                    <Link href="/dashboard">
                        <a className={styles.link}><FontAwesomeIcon icon={faHeart} /> Favorites</a>
                    </Link>
                </div>

            </nav>
        </section>
    );
  }
