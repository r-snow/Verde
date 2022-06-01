import React from 'react';

export default function CartDrawerBtns() {
  return (
    <span className="cart-drawer--btns">
      <button className="cart-drawer--btns clear-cart--btn" type="button">
        CLEAR CART
      </button>
      <button className="cart-drawer--btns checkout--btn" type="button">
        CHECKOUT
      </button>
    </span>
  );
}
