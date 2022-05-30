import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function HeaderCart() {
  return (
    <div className="header--cart">
      <FontAwesomeIcon icon={faCartShopping} color="white" size="xl" />
    </div>
  );
}
