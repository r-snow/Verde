import React from 'react';
// import ProductCard from './RIProductCard';
import Carousel from './Carousel';
import ProductCard from './riProductCard';

export default function relatedItems() {
  return (
    <div>
      <h2>Related Items</h2>
      <Carousel>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Carousel>
    </div>
  );
}
