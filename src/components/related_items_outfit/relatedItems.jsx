import React from 'react';
// import ProductCard from './RIProductCard';
import Carousel, { CarouselItem } from './Carousel';
import ProductCard from './riProductCard';

export default function relatedItems() {
  return (
    <div>
      <h2>Related Items</h2>
      <Carousel>
        <CarouselItem>Item1</CarouselItem>
        <CarouselItem>Item2</CarouselItem>
        <CarouselItem>Item3</CarouselItem>
        <CarouselItem>Item4</CarouselItem>
        <CarouselItem>Item5</CarouselItem>
        <CarouselItem>Item6</CarouselItem>
        <CarouselItem>Item7</CarouselItem>
      </Carousel>
    </div>
  );
}
