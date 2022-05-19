import React from 'react';
import Price from './Price';
import Stars from '../shared/Stars';

export default function DescriptionDetails() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '8em',
      }}
    >
      <p>Basketball Shoes</p>
      <p>Air Minis 250</p>
      <p>
        This optimized air cushion pocket reduces impact but keeps a perfect
        balance underfoot.
      </p>
      <Stars rating={2.5} />
      <Price price={140} salePrice={100} />
      {/* <AddToCart /> */}
    </div>
  );
}
