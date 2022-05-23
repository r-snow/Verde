import React from 'react';
import AddToCart from './AddToCart';
import StyleSelector from './StyleSelector';
import Price from '../shared/Price';
import Stars from '../shared/Stars';
import productData from './example_data/productData';

export default function DescriptionDetails() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '8em',
      }}
    >
      <p>{productData.category}</p>
      <p>{productData.name}</p>
      {productData.description.length && <p>{productData.description}</p>}
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
