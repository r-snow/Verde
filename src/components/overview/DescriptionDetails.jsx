import React from 'react';
import AddToCart from './AddToCart';
import StyleSelector from './StyleSelector';
import Price from '../shared/Price';
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
      <span>
        <Stars rating={2.5} />
        <a
          href="#ratings-reviews"
          style={{
            color: 'black',
          }}
        >
          Read all [#] of reviews
        </a>
      </span>
      <Price price={140} salePrice={100} />
      <StyleSelector />
      <AddToCart />
    </div>
  );
}
