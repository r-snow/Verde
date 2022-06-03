import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CartDrawerItem from './CartDrawerItem';
import CartDrawerBtns from './CartDrawerBtns';

export default function CartDrawer({
  closeDrawer,
  localCart,
  deleteCartItem,
  setCurProd,
}) {
  const [cartTotal, setCartTotal] = useState(0);
  const cartElements = localCart.map((item) => (
    <CartDrawerItem
      count={item.count}
      prodName={item.prodName}
      styleName={item.styleName}
      styleUrl={item.styleUrl}
      price={item.price}
      salePrice={item.salePrice}
      size={item.size}
      idx={item.idx}
      deleteCartItem={deleteCartItem}
      setCurProd={setCurProd}
      closeDrawer={closeDrawer}
      productID={item.productID}
      key={nanoid()}
    />
  ));

  useEffect(() => {
    let newCartTotal = 0;
    for (let i = 0; i < localCart.length; i += 1) {
      newCartTotal += Number(localCart[i].price) * Number(localCart[i].count);
    }
    setCartTotal(newCartTotal);
  }, [localCart]);

  return (
    <div className="drawer--container">
      <div
        className="drawer-window fade-in"
        onClick={closeDrawer}
        onKeyDown={closeDrawer}
        role="button"
        tabIndex={0}
        aria-label="transparent div"
      />
      <div className="header--cart-drawer slide-in">
        <div style={{ overflowY: 'scroll' }}>
          <h3 className="cart-drawer--header">
            {cartElements.length ? 'Your Cart' : 'Your Cart Is Empty'}
          </h3>
          {cartElements}
        </div>
        <FontAwesomeIcon
          icon={faXmark}
          color="black"
          size="xl"
          type="button"
          onClick={closeDrawer}
          className="cart-drawer-exit"
        />
        <CartDrawerBtns cartTotal={cartTotal} />
      </div>
    </div>
  );
}

CartDrawer.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
  deleteCartItem: PropTypes.func.isRequired,
  setCurProd: PropTypes.func.isRequired,
  localCart: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};
