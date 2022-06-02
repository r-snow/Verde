import React from 'react';
import PropTypes from 'prop-types';

export default function CartDrawerItem({
  count,
  prodName,
  styleName,
  styleUrl,
  price,
  salePrice,
  size,
}) {
  let displayPrice = price;
  if (salePrice) {
    displayPrice = salePrice;
  }
  return (
    <div className="cart-drawer--item-container">
      <img
        src={styleUrl}
        alt=""
        style={{
          height: '100px',
          width: '80px',
          objectFit: 'cover',
          marginRight: '12px',
        }}
      />
      <div className="cart-drawer--item">
        <span>
          <b style={{ marginRight: '8px' }}>{prodName}</b>
        </span>
        <span>
          <p>{styleName}</p>
        </span>
        <span>
          <p>{size}</p>
        </span>
        <span>
          <p>Quantity:</p>
          <p>{count}</p>
        </span>
        <span>
          <p>${displayPrice}</p>
        </span>
      </div>
    </div>
  );
}

CartDrawerItem.propTypes = {
  count: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  prodName: PropTypes.string.isRequired,
  styleName: PropTypes.string.isRequired,
  styleUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  salePrice: PropTypes.number.isRequired,
};
