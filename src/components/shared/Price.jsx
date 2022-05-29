import React from 'react';
import PropTypes from 'prop-types';

export default function Price({ price, salePrice, fontSize }) {
  return (
    <span
      style={{
        display: 'flex',
        gap: '0.8em',
        fontSize: fontSize === false ? '18px' : `${fontSize.toString()}px`,
        fontWeight: '500',
        fontFamily: 'Cormorant Garamond',
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
  fontSize: PropTypes.number,
};

Price.defaultProps = {
  salePrice: 0,
  fontSize: false,
};
