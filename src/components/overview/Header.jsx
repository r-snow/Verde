import React from 'react';
import HeaderCart from './HeaderCart';

export default function Header() {
  return (
    <header
      id="top"
      style={{
        backgroundColor: 'rgb(144, 169, 139)',
        padding: '0.6rem 1rem',
        marginBottom: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span
        style={{
          display: 'flex',
        }}
      >
        <img
          src="./assets/verde_icon.png"
          alt="logo"
          style={{
            width: '40px',
            height: '40px',
          }}
        />
        <h1
          style={{
            margin: 0,
            color: 'white',
            fontFamily: 'Cormorant Garamond',
          }}
        >
          Verde
        </h1>
      </span>
      <HeaderCart />
    </header>
  );
}
