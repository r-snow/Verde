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
        <b>{prodName}</b>
        <p>{styleName}</p>
        <p>{`Size ${size}`}</p>
        <span>
          <p>{`Quantity ${count}`}</p>
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
