// main-app/src/pages/_app.js
import { Suspense } from 'react';





function MyApp({ Component, pageProps }) {
  return (
<div>
      <Suspense fallback={'loading'}>
        <Component {...pageProps} />
      </Suspense>
      </div>
  );
}

export default MyApp;
