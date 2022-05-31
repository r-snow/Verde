import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import CartDrawer from './CartDrawer';

export default function HeaderCart() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div className="header--cart">
      <FontAwesomeIcon
        icon={faCartShopping}
        color="white"
        size="xl"
        type="button"
        onClick={() => setIsOpen(true)}
      />
      {isOpen && <CartDrawer closeDrawer={closeDrawer} />}
    </div>
  );
}
