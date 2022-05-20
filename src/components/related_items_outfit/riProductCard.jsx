import React from 'react';
import Price from '../shared/Price';
import Image from './Image';

export default function ProductCard() {
  const handleKeyPress = (event) => {
    event.preventDefault9();
    if (event.key === 'Enter') {
      console.log('Compare to current product coming soon...');
    }
  };

  const handleClick = () => {
    console.log('Compare to current product coming soon...');
  };

  return (
    <div
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
    >
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
