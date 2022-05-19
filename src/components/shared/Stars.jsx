import React from 'react';
import PropTypes from 'prop-types';

export default function Stars({ rating }) {
  return (
    <div
      className="stars testStars-WillDeleteLater"
      style={{ '--rating': rating }}
    />
  );
}

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};
