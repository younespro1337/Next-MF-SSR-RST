import { Suspense, lazy } from 'react';

function MyApp({ Component, pageProps }) {
  return (

    <Suspense fallback={'loading...'}>
<Component {...pageProps} />
    </Suspense>
  );
}

export default MyApp;
