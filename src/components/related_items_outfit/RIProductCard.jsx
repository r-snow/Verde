import axios from 'axios';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Price from '../shared/Price';
import Stars from '../shared/Stars';

import config from '../../../config/config';

export default function ProductCard({ setOpenModal, productID }) {
  const [product, setProduct] = useState({});
  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/';
  useEffect(() => {
    axios
      .get(`${url}products/${productID}`, {
        headers: { Authorization: config.TOKEN },
      })
      .then((results) => console.log(results.data));
  }, []);

  // setProduct(results.data);

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
          icon={faStar}
          size="lg"
          type="button"
          onClick={() => setOpenModal(true)}
        />
      </div>
      {/* <img className="product-card-image" src={image} alt="Sample" /> */}
      <p>{product.category}</p>
      <p>{product.name}</p>
      <Price price={parseFloat(product.default_price)} salePrice={120} />
      <Stars rating={2.5} />
    </div>
  );
}

ProductCard.propTypes = {
  productID: PropTypes.number.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};
