import React from 'react';
import PropTypes from 'prop-types';

export default function Price({ price, salePrice, fontSize }) {
  return (
    <span
      style={{
        display: 'flex',
        gap: '0.4rem',
        fontSize: fontSize === false ? '18px' : `${fontSize.toString()}px`,
        fontFamily: 'EB Garamond, serif',
        margin: '1rem 0',
      }}
    >
      {salePrice === 0 || salePrice === price ? (
        <p style={{ margin: 0 }}>${price}</p>
      ) : (
        <>
          <p
            style={{
              textDecoration: 'line-through',
              margin: 0,
              color: 'grey',
            }}
          >
            ${price}
          </p>
          <p style={{ margin: 0 }}>${salePrice}</p>
        </>
      )}
    </span>
  );
}

Price.propTypes = {
  price: PropTypes.number.isRequired,
  salePrice: PropTypes.number,
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

Price.defaultProps = {
  salePrice: 0,
  fontSize: false,
};
