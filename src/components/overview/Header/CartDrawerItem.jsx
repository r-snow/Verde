import React from 'react';
import PropTypes from 'prop-types';

export default function CartDrawerItem({ skuId, count }) {
  return (
    <div className="cart-drawer--item">
      <span>
        <b>SKU:</b>
        <p>{skuId}</p>
      </span>
      <span>
        <b>Size:</b>
        <p>S</p>
      </span>
      <span>
        <b>Quantity:</b>
        <p>{count}</p>
      </span>
      <span>
        <b>Price:</b>
        <p>$18.00</p>
      </span>
    </div>
  );
}

CartDrawerItem.propTypes = {
  skuId: PropTypes.number.isRequired,
  count: PropTypes.string.isRequired,
};
