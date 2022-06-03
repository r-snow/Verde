import React from 'react';
import PropTypes from 'prop-types';
import HeaderCart from './HeaderCart';

export default function Header({
  localCart,
  showDrawer,
  setShowDrawer,
  deleteCartItem,
  setCurProd,
}) {
  return (
    <header id="top">
      <span className="header--left">
        <img
          className="header--icon"
          src="./assets/verde_icon.png"
          alt="logo"
        />
        <h1 className="header--title">Verde</h1>
      </span>
      <HeaderCart
        localCart={localCart}
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        deleteCartItem={deleteCartItem}
        setCurProd={setCurProd}
      />
    </header>
  );
}

Header.propTypes = {
  localCart: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  showDrawer: PropTypes.bool.isRequired,
  setShowDrawer: PropTypes.func.isRequired,
  deleteCartItem: PropTypes.func.isRequired,
  setCurProd: PropTypes.func.isRequired,
};
