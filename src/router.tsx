import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoadingScreen from 'components/LoadingScreen';
import HeaderFooter from 'components/HeaderFooter';

const HomePage = lazy(() => import('components/Home'));

export default (
  <Suspense fallback={<LoadingScreen />}>
    <HeaderFooter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </HeaderFooter>
  </Suspense>
);
