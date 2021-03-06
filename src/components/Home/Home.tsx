import React from 'react';
import Carousel from './Carousel';
import WhyUs from './WhyUs';
import Services from 'components/Services';
import Products from './Products';
import Blogs from './Blogs';

const Home = (): React.ReactElement => {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel />
        <Products />
        <Blogs />
        <Services />
        <WhyUs />
      </div>
    </div>
  );
};

export default Home;
