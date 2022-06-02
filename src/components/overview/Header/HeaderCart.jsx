import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import CartDrawer from './CartDrawer';

export default function HeaderCart() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [keepDrawer, setKeepDrawer] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    let timeoutId;
    if (isFirstLoad) {
      setIsFirstLoad(false);
    } else if (!showDrawer && !isFirstLoad) {
      setKeepDrawer(true);
      timeoutId = setTimeout(() => {
        setKeepDrawer(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showDrawer]);

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
      {(keepDrawer || showDrawer) && (
        <CartDrawer
          closeDrawer={closeDrawer}
          drawerClass={showDrawer ? 'fade-in' : 'fade-out'}
        />
      )}
    </div>
  );
}
