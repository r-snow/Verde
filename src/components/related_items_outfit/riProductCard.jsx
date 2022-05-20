import React from 'react';
import Price from '../shared/Price';
import Image from './Image';

export default function ProductCard() {
  return (
    <div>
      <Image />
      {/* Product Category: */}
      <p>Jackets</p>
      {/* Product Name: */}
      <p>Camo Onesie</p>
      {/* Price: */}
      <Price price={140} salePrice={120} />
      {/* Star Rating */}
    </div>
  );
}
