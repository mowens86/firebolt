import { Provider } from 'next-auth/client';
import '../styles/globals.scss';
import 'normalize.css';

function MyApp({ Component, pageProps }) {
  return (
  <Provider session={pageProps.session}>
    <Component {...pageProps} />
  </Provider>
    );
}

export default MyApp
