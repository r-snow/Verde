import React from 'react';
import PropTypes from 'prop-types';

export default function CartDrawerBtns({ cartTotal }) {
  return (
    <button
      className="cart-drawer--btns checkout--btn"
      type="button"
      onClick={() => {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
      }}
    >
      {`CHECKOUT - $${cartTotal}`}
    </button>
  );
}

CartDrawerBtns.propTypes = {
  cartTotal: PropTypes.number.isRequired,
};
