import React from 'react';
import Ratings from './Ratings';
import Reviews from './Reviews';

function RatingsAndReviews() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        padding: '1em',
      }}
    >
      <Ratings />
      <Reviews />
    </section>
  );
}

export default RatingsAndReviews;
