import React from 'react';

export default function CartDrawerBtns() {
  return (
    <span className="cart-drawer--btns">
      <button className="cart-drawer--btns clear-cart--btn" type="button">
        Clear Cart
      </button>
      <button className="cart-drawer--btns checkout--btn" type="button">
        Checkout
      </button>
    </span>
  );
}
