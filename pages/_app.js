import { Provider } from 'next-auth/client';
// import { AppProps } from 'next/app';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { ReactElement } from 'react';
import '../styles/globals.scss';
import 'normalize.css';

// library.add(fab, faCoffee)

export default function MyApp({ Component, pageProps }) {

  return (
  <Provider session={pageProps.session}>
    <Component {...pageProps} />
  </Provider>
    );
}
