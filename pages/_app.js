import { useEffect } from 'react';

import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return <Component {...pageProps} />;
}
