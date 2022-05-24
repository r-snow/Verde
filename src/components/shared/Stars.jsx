import React from 'react';
import PropTypes from 'prop-types';

export default function Stars({ rating }) {
  const roundedRating = (Math.round(rating * 4) / 4).toFixed(2);
  return <div className="stars" style={{ '--rating': roundedRating }} />;
}

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};
