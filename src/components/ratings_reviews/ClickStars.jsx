import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function ClickStars({ changeFormRating }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => (
        <button
          type="button"
          key={nanoid()}
          className={index <= (hover || rating) ? 'on' : 'off'}
          id="clickableStars"
          onClick={() => {
            setRating(index);
            changeFormRating(index + 1);
          }}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(rating)}
        >
          <span className="star">★</span>
        </button>
      ))}
    </div>
  );
}

ClickStars.propTypes = {
  changeFormRating: PropTypes.func.isRequired,
};

export default ClickStars;
