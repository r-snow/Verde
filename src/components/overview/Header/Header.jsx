import React from 'react';
import HeaderCart from './HeaderCart';

export default function Header() {
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
      <HeaderCart />
    </header>
  );
}
