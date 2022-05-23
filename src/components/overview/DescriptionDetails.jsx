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
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '8em',
      }}
    >
      <p>{category}</p>
      <p>{name}</p>
      {description.length && <p>{description}</p>}
      <span>
        <Stars rating={2.5} />
        <a
          href="#ratings-reviews"
          style={{
            color: 'black',
          }}
        >
          Read all [#] of reviews
        </a>
      </span>
      <Price price={140} salePrice={100} />
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
};
