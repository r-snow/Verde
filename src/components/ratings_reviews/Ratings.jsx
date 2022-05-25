import React from 'react';
import PropTypes from 'prop-types';
// import Stars from '../shared/Stars';
import CustomStars from '../shared/CustomStars';
import Bars from '../shared/Bars';

function Ratings({ reviews, ratingSwitch, toggleRatedReviews }) {
  const counter = {
    sum: 0,
    recommendedCount: 0,
    oneStarReviews: 0,
    twoStarReviews: 0,
    threeStarReviews: 0,
    fourStarReviews: 0,
    fiveStarReviews: 0,
  };

  // computes average and # of reviews recommended the product and # of star reviews
  for (let i = 0; i < reviews.length; i += 1) {
    if (reviews[i].recommend === true) {
      counter.recommendedCount += 1;
    }

    if (reviews[i].rating === 1) {
      counter.oneStarReviews += 1;
    }
    if (reviews[i].rating === 2) {
      counter.twoStarReviews += 1;
    }
    if (reviews[i].rating === 3) {
      counter.threeStarReviews += 1;
    }
    if (reviews[i].rating === 4) {
      counter.fourStarReviews += 1;
    }
    if (reviews[i].rating === 5) {
      counter.fiveStarReviews += 1;
    }

    counter.sum += reviews[i].rating;
  }
  const averageRating = counter.sum / reviews.length;
  const filteredStarsKeys = Object.keys(ratingSwitch);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        border: 'solid 2px white',
        borderRadius: '5px',
        padding: '2em 1em',
        marginRight: '1em',
        width: 'calc((1 / 3) * 100%)',
        minWidth: '200px',
        fontSize: '0.8em',
      }}
    >
      <h4
        style={{
          display: 'flex',
          alignSelf: 'center',
        }}
      >
        Reviews & Ratings
      </h4>
      <h1
        style={{
          fontSize: '3.5em',
          alignSelf: 'center',
        }}
      >
        {averageRating.toFixed(2)}
        <CustomStars rating={averageRating} color="#205375" size="16px" />
      </h1>
      <i
        style={{
          marginBottom: '1em',
        }}
      >
        {((counter.recommendedCount / reviews.length) * 100).toFixed(2)}% of
        reviews recommend this product!
      </i>
      <div className="bars-container">
        <div
          className="indiv-bar"
          role="button"
          tabIndex={0}
          onClick={() => toggleRatedReviews(5)}
          onKeyDown={() => toggleRatedReviews(5)}
        >
          5 stars
          <Bars
            reviewCount={counter.fiveStarReviews}
            totalCount={reviews.length}
          />
          {counter.fiveStarReviews}
        </div>

        <div
          className="indiv-bar"
          role="button"
          tabIndex={0}
          onClick={() => toggleRatedReviews(4)}
          onKeyPress={() => toggleRatedReviews(4)}
        >
          4 stars
          <Bars
            reviewCount={counter.fourStarReviews}
            totalCount={reviews.length}
          />
          {counter.fourStarReviews}
        </div>

        <div
          className="indiv-bar"
          role="button"
          tabIndex={0}
          onClick={() => toggleRatedReviews(3)}
          onKeyDown={() => toggleRatedReviews(3)}
        >
          3 stars
          <Bars
            reviewCount={counter.threeStarReviews}
            totalCount={reviews.length}
          />
          {counter.threeStarReviews}
        </div>

        <div
          className="indiv-bar"
          role="button"
          tabIndex={0}
          onClick={() => toggleRatedReviews(2)}
          onKeyDown={() => toggleRatedReviews(2)}
        >
          2 stars
          <Bars
            reviewCount={counter.twoStarReviews}
            totalCount={reviews.length}
          />
          {counter.twoStarReviews}
        </div>

        <div
          className="indiv-bar"
          role="button"
          tabIndex={0}
          onClick={() => toggleRatedReviews(1)}
          onKeyDown={() => toggleRatedReviews(1)}
        >
          1 stars
          <Bars
            reviewCount={counter.oneStarReviews}
            totalCount={reviews.length}
          />
          {counter.oneStarReviews}
        </div>
      </div>
      <p
        style={{
          alignSelf: 'center',
        }}
      >
        Filtered By...
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignSelf: 'center',
        }}
      >
        {filteredStarsKeys.map((starKeys) => (
          <button
            type="button"
            style={{
              padding: '0.4rem 1.6rem',
              margin: '0.2rem',
            }}
            onClick={() => toggleRatedReviews(starKeys)}
          >
            {starKeys} stars
          </button>
        ))}
      </div>
    </div>
  );
}

Ratings.propTypes = {
  ratingSwitch: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape).isRequired,
  toggleRatedReviews: PropTypes.func.isRequired,
};

export default Ratings;
