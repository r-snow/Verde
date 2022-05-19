import React from 'react';
import Price from './price';
import Image from './Image.jsx';

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
