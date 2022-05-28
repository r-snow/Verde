import axios from 'axios';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Price from '../shared/Price';
import Stars from '../shared/Stars';
import productReviewsData from '../overview/example_data/productReviewsData';
import Ratings from './sampleRatings';
import Compare from './CompareModal';

import config from '../../../config/config';

export default function ProductCard({ productID, curProd }) {
  const [openModal, setOpenModal] = useState(false);
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
    console.log('Clicking here will change overview product...');
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
      <img className="product-card-image" src={image} alt="Sample" />
      <p>{product.category}</p>
      <p>{product.name}</p>
      <Price price={parseFloat(product.default_price)} salePrice={120} />
      <Stars rating={rating()} />
      {openModal && (
        <Compare
          curProd={curProd}
          compProd={product}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
}

ProductCard.propTypes = {
  productID: PropTypes.number.isRequired,
};
