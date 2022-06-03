import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import CartDrawer from './CartDrawer';

export default function HeaderCart({
  localCart,
  showDrawer,
  setShowDrawer,
  deleteCartItem,
  setCurProd,
}) {
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
        <CartDrawer
          deleteCartItem={deleteCartItem}
          closeDrawer={closeDrawer}
          localCart={localCart}
          setCurProd={setCurProd}
        />
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
  deleteCartItem: PropTypes.func.isRequired,
  setCurProd: PropTypes.func.isRequired,
};
