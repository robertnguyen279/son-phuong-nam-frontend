import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoadingScreen from 'components/LoadingScreen';
import HeaderFooter from 'components/HeaderFooter';
import AboutUs from 'components/AboutUs';
import Products from 'components/Products';
import Product from 'components/Product';
import Posts from 'components/Posts';
import ContactPage from 'components/ContactPage';

const HomePage = lazy(() => import('components/Home'));

export default (
  <Suspense fallback={<LoadingScreen />}>
    <HeaderFooter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/gioi-thieu" component={AboutUs} />
        <Route exact path="/san-pham" component={Products} />
        <Route exact path="/san-pham/:urlString" component={Product} />
        <Route exact path="/bai-viet" component={Posts} />
        <Route exact path="/lien-he" component={ContactPage} />
      </Switch>
    </HeaderFooter>
  </Suspense>
);
