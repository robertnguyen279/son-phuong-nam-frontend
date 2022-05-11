import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { IHeaderFooter } from 'types';

const HeaderFooter = ({ children }: IHeaderFooter): React.ReactElement => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default HeaderFooter;
