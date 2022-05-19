import React from 'react';
import SizeSelector from './SizeSelector';
import QtySelector from './QtySelector';

export default function AddToCart() {
  return (
    <div>
      <span>
        <SizeSelector />
        <QtySelector />
      </span>
      {/* <AddToCartBtn /> */}
    </div>
  );
}
