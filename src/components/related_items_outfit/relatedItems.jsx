import React from 'react';
import ProductCard from './RIProductCard';

export default function relatedItems() {
  return (
    <div>
      <h2>Related Items</h2>
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </div>
  );
}
