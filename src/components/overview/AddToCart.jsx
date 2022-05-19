import React from 'react';
import SizeSelector from './SizeSelector';
import QtySelector from './QtySelector';

export default function AddToCart() {
  const handleCartSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
  };

  return (
    <form onSubmit={handleCartSubmit}>
      <span>
        <SizeSelector />
        <QtySelector />
      </span>
      <button type="submit">Add to Cart</button>
    </form>
  );
}
