import React from 'react';
import Carousel from './Carousel';
import ProductCard from './RIProductCard';

export default function RelatedItems() {
  return (
    <div>
      <h2>Related Items</h2>
      <div className="carousel">
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
    </div>
  );
}
