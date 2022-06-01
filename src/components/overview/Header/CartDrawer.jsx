import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { nanoid } from 'nanoid';
import axios from 'axios';
import config from '../../../../config/config';
import CartDrawerItem from './CartDrawerItem';
import CartDrawerBtns from './CartDrawerBtns';

export default function CartDrawer({ closeDrawer }) {
  const [cartItems, setCartItems] = useState([]);

  const cartElements = cartItems.map((item) => (
    <CartDrawerItem skuId={item.sku_id} count={item.count} key={nanoid()} />
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
        <div>
          <h3 className="cart-drawer--header">Your Cart</h3>
          {cartElements}
        </div>
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
        <CartDrawerBtns />
      </div>
    </div>
  );
}

CartDrawer.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
};
