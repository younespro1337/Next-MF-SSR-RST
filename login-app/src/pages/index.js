// main-app/src/pages/index.js
import React, { lazy, Suspense } from 'react';
import Login from './components/login/page';
function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
<h1>hello im home page Login App</h1>
<Login />
      </Suspense>
    </div>
  );
}

export default Home;
