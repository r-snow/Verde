import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import CartDrawer from './CartDrawer';

export default function HeaderCart() {
  const [showDrawer, setShowDrawer] = useState(false);

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <div className="header--cart">
      <FontAwesomeIcon
        icon={faCartShopping}
        color="white"
        size="xl"
        type="button"
        onClick={() => setShowDrawer(true)}
      />
      {showDrawer && <CartDrawer closeDrawer={closeDrawer} />}
    </div>
  );
}
