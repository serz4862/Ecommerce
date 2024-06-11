import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MainCarouselData from './MainCarouselData';



const items = MainCarouselData.map((item)=> <img src= {item.image} alt= ""/>)

const MainCarousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        // responsive={responsive}
        controlsStrategy="alternate"
    />
);

export default MainCarousel;

