import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import config from '../../../../config/config';

export default function CartDrawerBtns({ setRefreshCart }) {
  const clearCart = () => {
    axios
      .delete('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart', {
        headers: { Authorization: config.TOKEN },
      })
      .finally(() => {
        setRefreshCart((prev) => prev + 1);
      });
  };

  return (
    <span className="cart-drawer--btns">
      <button
        className="cart-drawer--btns clear-cart--btn"
        type="button"
        onClick={clearCart}
      >
        CLEAR CART
      </button>
      <button
        className="cart-drawer--btns checkout--btn"
        type="button"
        onClick={(e) =>
          (window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        }
      >
        CHECKOUT
      </button>
    </span>
  );
}

CartDrawerBtns.propTypes = {
  setRefreshCart: PropTypes.func.isRequired,
};
