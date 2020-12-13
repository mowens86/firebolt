import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
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
                
                <div className={styles.linkWrapper}>
                    <Link href="/dashboard">
                        <a className={styles.link}><FontAwesomeIcon icon={faHome} size="xs" /> <span className={styles.linkSpan}>Home</span></a>
                    </Link>
                
                    <Link href="/dashboard">
                        <a className={styles.link}><FontAwesomeIcon icon={faSearch} size="xs" /> <span className={styles.linkSpan}>Search</span></a>
                    </Link>

                    <Link href="/genre">
                        <a className={styles.link}><FontAwesomeIcon icon={faTable} size="xs" /> <span className={styles.linkSpan}>Genre</span></a>
                    </Link>
                    </div>
                
                <div className={styles.linkWrapper}>
                    <Link href="/dashboard">
                        <a className={styles.link}><FontAwesomeIcon icon={faHeadphones} size="xs" /> <span className={styles.linkSpan}>Radio</span></a>
                    </Link>

                    <Link href="/dashboard">
                        <a className={styles.link}><FontAwesomeIcon icon={faMicrophone} size="sm" /> <span className={styles.linkSpan}>Podcast</span></a>
                    </Link>
                </div>

                <div className={styles.linkWrapper}>
                    <Link href="/dashboard">
                        <a className={styles.link}><FontAwesomeIcon icon={faHeart} size="xs" /> <span className={styles.linkSpan}>Favorites</span></a>
                    </Link>
                </div>

            </nav>
        </section>
    );
  }
