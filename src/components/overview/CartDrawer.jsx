import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { nanoid } from 'nanoid';
import axios from 'axios';
import config from '../../../config/config';

export default function CartDrawer({ closeDrawer }) {
  const [cartItems, setCartItems] = useState([]);

  const cartElements = cartItems.map((item) => (
    <div key={nanoid()} className="cart-drawer--item">
      <span>
        <b>SKU:</b>
        <p>{item.sku_id}</p>
      </span>
      <span>
        <b>Size:</b>
        <p>S</p>
      </span>
      <span>
        <b>Quantity:</b>
        <p>{item.count}</p>
      </span>
      <span>
        <b>Price:</b>
        <p>$18.00</p>
      </span>
      <FontAwesomeIcon
        icon={faXmark}
        color="black"
        size="xl"
        type="button"
        onClick={closeDrawer}
        style={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
        }}
      />
    </div>
  ));

  useEffect(() => {
    axios
      .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart', {
        headers: { Authorization: config.TOKEN },
      })
      .then(({ data }) => setCartItems(data))
      .catch(() => setCartItems([]));
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100000,
      }}
    >
      <div
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(49, 49, 49, 0.8)',
        }}
        onClick={closeDrawer}
        onKeyDown={closeDrawer}
        role="button"
        tabIndex={0}
        aria-label="transparent div"
      />
      <div className="header--cart-drawer">
        <h3>Your Cart</h3>
        {cartElements}
        <FontAwesomeIcon
          icon={faXmark}
          color="black"
          size="xl"
          type="button"
          onClick={closeDrawer}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
          }}
        />
      </div>
    </div>
  );
}

CartDrawer.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
};
