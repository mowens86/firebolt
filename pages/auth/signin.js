import React from 'react';
import Layout from '../components/layout/layout';
import styles from './signin.module.scss';
import { providers, signIn } from 'next-auth/client';

export default function SignIn({ providers }) {
  return (
    <Layout>
      {Object.values(providers).map(provider => (
        <div >
          <div 
              className={styles.linkWrapper} 
              key={provider.name}>
            <a 
              className={styles.link} 
              onClick={() => signIn(provider.id, { callbackUrl: 'http://localhost:3000/' })}
              >Sign in with {provider.name}
            </a>
          </div>
        </div>
      ))}
    </Layout>
  )
}

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(context)
  }
}