import React from 'react';
import PropTypes from 'prop-types';

export default function Price({ price, salePrice }) {
  return (
    <span
      style={{
        display: 'flex',
        gap: '0.8em',
      }}
    >
      {salePrice === 0 ? (
        <p>${price}</p>
      ) : (
        <>
          <p
            style={{
              textDecoration: 'line-through',
            }}
          >
            ${price}
          </p>
          <p>${salePrice}</p>
        </>
      )}
    </span>
  );
}

Price.propTypes = {
  price: PropTypes.number.isRequired,
  salePrice: PropTypes.number,
};

Price.defaultProps = {
  salePrice: 0,
};
