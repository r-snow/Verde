import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import CartDrawer from './CartDrawer';

export default function HeaderCart({ localCart, showDrawer, setShowDrawer }) {
  const closeDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faCartShopping}
        color="white"
        size="xl"
        type="button"
        className="header--cart"
        onClick={() => setShowDrawer(true)}
      />
      {showDrawer && (
        <CartDrawer closeDrawer={closeDrawer} localCart={localCart} />
      )}
    </div>
  );
}

HeaderCart.propTypes = {
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
