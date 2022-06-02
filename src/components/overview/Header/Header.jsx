import React from 'react';
import HeaderCart from './HeaderCart';
import PropTypes from 'prop-types';

export default function Header({ localCart }) {
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
      <HeaderCart localCart={localCart} />
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
};
