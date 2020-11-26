import React from 'react';
import Layout from '../components/layout/layout';
import styles from './signin.module.scss';
import { providers, signIn } from 'next-auth/client';

export default function SignIn({ providers }) {
  return (
    <Layout>
      
        <div className={styles.signInWrapper}>
        <div className={styles.overlay}>
          <div className={styles.logoWrapper}>
            <img src="/firebolt.svg" alt="Firebolt Logo" className={styles.logo} />
            <h2 className={styles.title}>Firebolt</h2>
          </div>
     
      {Object.values(providers).map(provider => (


          <div 
              className={styles.linkWrapper} 
              key={provider.name}>
            <a 
              className={styles.link} 
              onClick={() => signIn(provider.id, { callbackUrl: 'http://localhost:3000/dashboard' })}
              >Sign in with {provider.name}
            </a>

          </div>
        
      ))}
        </div>
      </div>
    </Layout>
  )
}

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(context)
  }
}