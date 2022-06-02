import React from 'react';
import PropTypes from 'prop-types';
import HeaderCart from './HeaderCart';

export default function Header({ localCart, showDrawer, setShowDrawer }) {
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
};
