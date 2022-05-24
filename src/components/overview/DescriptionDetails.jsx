import React from 'react';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart';
import StyleSelector from './StyleSelector';
import Price from '../shared/Price';
import Stars from '../shared/Stars';

export default function DescriptionDetails({
  category,
  name,
  description,
  styles,
  currStyle,
  setCurrStyle,
  currPrice,
  currSalePrice,
  reviewCount,
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '8em',
        alignItems: 'center',
      }}
    >
      <p>{category}</p>
      <p>{name}</p>
      {description.length && (
        <p
          style={{
            textAlign: 'center',
          }}
        >
          {description}
        </p>
      )}
      <span>
        <Stars rating={2.5} />
        <a
          href="#ratings-reviews"
          style={{
            color: 'black',
          }}
        >
          Read all {reviewCount} of reviews
        </a>
      </span>
      <Price price={currPrice} salePrice={currSalePrice} />
      <StyleSelector
        styles={styles}
        currStyle={currStyle}
        setCurrStyle={setCurrStyle}
      />
      <AddToCart />
    </div>
  );
}

DescriptionDetails.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  styles: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  currStyle: PropTypes.number.isRequired,
  setCurrStyle: PropTypes.func.isRequired,
  currPrice: PropTypes.number.isRequired,
  currSalePrice: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
};
