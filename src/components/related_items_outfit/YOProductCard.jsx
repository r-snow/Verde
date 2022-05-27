import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Price from '../shared/Price';
import Stars from '../shared/Stars';

export default function YOProductCard({
  image,
  // features,
  handleRemove,
  product,
  index,
}) {
  const handleKeyPress = (event) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      console.log('Clicking here will change overview product...');
    }
  };

  const handleClick = () => {
    console.log('Clicking here will change overview product...');
  };

  return (
    <div
      className="product-card"
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
      style={{
        width: 'fit-content',
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '30px',
      }}
    >
      <div className="product-card-compare">
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="lg"
          type="button"
          onClick={handleRemove()}
        />
      </div>
      <img className="product-card-image" src={image} alt="Sample" />
      <p>{product.category}</p>
      <p>{product.name}</p>
      <Price price={parseFloat(product.default_price)} salePrice={120} />
      <Stars rating={2.5} />
    </div>
  );
}

YOProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  // features: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number,
  //   PropTypes.bool,
  //   PropTypes.object,
  //   PropTypes.array,
  // ]).isRequired,
  product: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  handleRemove: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
