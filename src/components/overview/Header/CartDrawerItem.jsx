import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function CartDrawerItem({
  count,
  prodName,
  styleName,
  styleUrl,
  price,
  salePrice,
  size,
  idx,
  deleteCartItem,
}) {
  let displayPrice = price;
  if (salePrice) {
    displayPrice = salePrice;
  }

  const deleteItem = () => {
    deleteCartItem(idx);
  };

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
      <FontAwesomeIcon
        type="button"
        onClick={deleteItem}
        color="black"
        size="lg"
        icon={faTrash}
        className="cart-drawer--item-delete hover-pointer"
      />
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
  idx: PropTypes.number.isRequired,
  deleteCartItem: PropTypes.func.isRequired,
};
