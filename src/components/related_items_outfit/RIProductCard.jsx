import axios from 'axios';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Price from '../shared/Price';
import Stars from '../shared/Stars';
import productReviewsData from '../overview/example_data/productReviewsData';
import Ratings from './sampleRatings';
import config from '../../../config/config';

export default function ProductCard({ productID, setOpenModal, setCompProd }) {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState('');

  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/';
  useEffect(() => {
    axios
      .get(`${url}products/${productID}`, {
        headers: { Authorization: config.TOKEN },
      })
      .then((results) => setProduct(results.data));
    axios
      .get(`${url}products/${productID}/styles`, {
        headers: { Authorization: config.TOKEN },
      })
      .then((results) => setImage(results.data.results[0].photos[0].url));
  }, [productID]);

  const handleKeyPress = (event) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      console.log('Clicking here will change overview product...');
    }
  };

  const handleClick = () => {
    setCurProd(product);
    console.log('Clicking here will change overview product...');
  };

  const compare = () => {
    setOpenModal(true);
    setCompProd(product);
  };

  const rating = () => {
    let avgRating = 0;
    const reviewCount = Object.keys(Ratings.ratings).reduce((aggCount, key) => {
      const currCount = Number(productReviewsData.ratings[key]);
      avgRating += currCount * Number(key);
      return aggCount + currCount;
    }, 0);
    avgRating /= reviewCount;

    return avgRating;
  };

  return (
    <div
      className="product-card"
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
    >
      <div className="product-card-compare">
        <FontAwesomeIcon
          icon={faStar}
          size="lg"
          type="button"
          onClick={compare}
        />
      </div>
      <img className="product-card-image" src={image} alt="Sample" />
      <p className="product-card-category">{product.category}</p>
      <p className="product-card-name">{product.name}</p>
      <Price
        className="ri-price"
        price={parseFloat(product.default_price)}
        salePrice={120}
      />
      <Stars rating={rating()} />
    </div>
  );
}

ProductCard.propTypes = {
  productID: PropTypes.number.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  setCompProd: PropTypes.func.isRequired,
};
