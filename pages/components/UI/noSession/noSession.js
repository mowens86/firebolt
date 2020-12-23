import React from 'react';
import { signIn } from 'next-auth/client';
import Layout from '../layout/layout';
import styles from '../../../../styles/Home.module.scss';

export default function NoSession() {
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
    )
}