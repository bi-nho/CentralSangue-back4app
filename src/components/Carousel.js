import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img01 from './img/img01.jpg';
import img02 from './img/img02.jpg';
import img03 from './img/img03.jpg';

const ImageCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} >
      <div>
        <img className = "imgcarousel" src={img01} alt="01"/>
      </div>
      <div>
        <img className = "imgcarousel" src={img02} alt="02"/>
      </div>
      <div >
        <img className = "imgcarousel" src={img03} alt="03"/>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;