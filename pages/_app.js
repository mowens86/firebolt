import { Provider } from 'next-auth/client';
// import { AppProps } from 'next/app';
import '../styles/globals.scss';
import 'normalize.css';

export default function MyApp({ Component, pageProps }) {

  return (
  <Provider session={pageProps.session}>
    <Component {...pageProps} />
  </Provider>
    );
}
