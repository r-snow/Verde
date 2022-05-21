import React, { useState } from 'react';

function ClickStars() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => (
        <button
          type="button"
          className={index <= (hover || rating) ? 'on' : 'off'}
          id="clickableStars"
          onClick={() => setRating(index)}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(rating)}
        >
          <span className="star">★</span>
        </button>
      ))}
    </div>
  );
}

export default ClickStars;
