import React from 'react';
// import Product from './sampleRelatedItems';
import Price from './price';

function ProductCard(props) {
  return (
    <div>
      <ProductImage />
      <p>Jackets</p>
      {/* Product Name: */}
      <p>Camo Onesie</p>
      {/* Price: */}
      <Price price={140} salePrice={120} />
      {/* Star Rating */}
    </div>
  );
}

export default ProductCard;
