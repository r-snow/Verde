import axios from 'axios';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Price from '../shared/Price';
import Stars from '../shared/Stars';
import productReviewsData from '../overview/example_data/productReviewsData';
import Ratings from './sampleRatings';

import config from '../../../config/config';

export default function YOProductCard({ handleRemove, productID, index }) {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState('');
  const [salePrice, setSalePrice] = useState('');

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
      .then((results) => {
        setImage(results.data.results[0].photos[0].url);
        if (results.data.results[0].sale_price === null) {
          setSalePrice(0);
        } else {
          setSalePrice(parseFloat(results.data.results[0].sale_price));
        }
      });
  }, [productID]);

  // const handleKeyPress = (event) => {
  //   event.preventDefault();
  //   if (event.key === 'Enter') {
  //     console.log('Clicking here will change overview product...');
  //   }
  // };

  // const handleClick = () => {
  //   console.log('Clicking here will change overview product...');
  // };

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
      // onClick={handleClick}
      // onKeyPress={handleKeyPress}
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
          onClick={() => handleRemove(index)}
        />
      </div>
      <img className="product-card-image" src={image} alt="Sample" />
      <p className="product-card-category">{product.category}</p>
      <p className="product-card-name">{product.name}</p>
      <Price price={parseFloat(product.default_price)} salePrice={salePrice} />
      <Stars rating={rating()} />
    </div>
  );
}

YOProductCard.propTypes = {
  productID: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  handleRemove: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
