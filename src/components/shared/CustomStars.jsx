import React from 'react';
import PropTypes from 'prop-types';

export default function CustomStars({ rating, color, size }) {
  // const roundedRating = (Math.round(rating * 4) / 4).toFixed(2);

  return (
    <div
      className="custom-stars"
      style={{ '--rating': rating, '--color': color, fontSize: size }}
    />
  );
}

CustomStars.propTypes = {
  rating: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
