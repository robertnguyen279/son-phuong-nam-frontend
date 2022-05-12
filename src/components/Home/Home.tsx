import React from 'react';
import Carousel from './Carousel';
import WhyUs from './WhyUs';

const Home = (): React.ReactElement => {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel />
        <WhyUs />
      </div>
    </div>
  );
};

export default Home;
