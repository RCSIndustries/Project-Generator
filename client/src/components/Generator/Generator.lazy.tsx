import React, { lazy, Suspense } from 'react';

const LazyGenerator = lazy(() => import('./Generator'));

const Generator = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyGenerator {...props} />
  </Suspense>
);

export default Generator;
