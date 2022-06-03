import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import config from '../../../../config/config';

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
  setCurProd,
  closeDrawer,
  productID,
}) {
  let displayPrice = price;
  if (salePrice) {
    displayPrice = salePrice;
  }

  const deleteItem = () => {
    deleteCartItem(idx);
  };

  const changeToThisProduct = () => {
    get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productID}`,
      {
        headers: { Authorization: config.TOKEN },
      }
    ).then(({ data }) => {
      setCurProd(data);
      closeDrawer();
    });
  };

  return (
    <div className="cart-drawer--item-container">
      <button
        type="button"
        onClick={changeToThisProduct}
        className="hover-pointer cart-item-btn"
      >
        <img src={styleUrl} className="cart-item-img" alt="" />
      </button>
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
  productID: PropTypes.number.isRequired,
  idx: PropTypes.number.isRequired,
  deleteCartItem: PropTypes.func.isRequired,
  setCurProd: PropTypes.func.isRequired,
  closeDrawer: PropTypes.func.isRequired,
};
