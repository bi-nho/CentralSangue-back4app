import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel';
import News from '../../components/News/News';
import Charts from '../../components/Charts/Charts';
import './Home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='imgcarousel'>
      <Carousel/>
      </div>
      <News/>
      <Charts />
    </div>
  );
};

export default Home;