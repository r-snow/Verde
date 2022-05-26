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
        justifyContent: 'start',
        alignItems: 'center',
        border: 'solid 0px blue',
        borderRadius: '5px',
        padding: '2em 1em',
        margin: '1em 0em 0em 0rem',
        width: '30rem',
        minWidth: '30rem',
        fontSize: '0.8em',
      }}
    >
      <h4>Reviews & Ratings</h4>
      <h1
        style={{
          fontSize: '3.5em',
          margin: '0.4em 0em',
        }}
      >
        {averageRating.toFixed(2)}
        <CustomStars rating={averageRating} color="cyan" size="25px" />
      </h1>

      <i style={{ textAlign: 'center', marginBottom: '1em', width: '17rem' }}>
        <h1
          style={{
            display: 'inline',
            fontSize: '2em',
          }}
        >
          {((counter.recommendedCount / reviews.length) * 100).toFixed(2)}
        </h1>
        <p style={{ display: 'inline' }}>
          % of reviews recommend this product!
        </p>
      </i>
      <div className="bars-container">
        <div
          className="indiv-bar"
          role="button"
          tabIndex={0}
          onClick={() => toggleRatedReviews(5)}
          onKeyDown={() => toggleRatedReviews(5)}
        >
          <p style={{ margin: '0em 1em' }}>5 stars</p>
          <Bars
            reviewCount={counter.fiveStarReviews}
            totalCount={reviews.length}
          />
          <p style={{ margin: '0em 1em' }}>{counter.fiveStarReviews}</p>
        </div>

        <div
          className="indiv-bar"
          role="button"
          tabIndex={0}
          onClick={() => toggleRatedReviews(4)}
          onKeyPress={() => toggleRatedReviews(4)}
        >
          <p style={{ margin: '0em 1em' }}>4 stars</p>
          <Bars
            reviewCount={counter.fourStarReviews}
            totalCount={reviews.length}
          />
          <p style={{ margin: '0em 1em' }}>{counter.fourStarReviews}</p>
        </div>

        <div
          className="indiv-bar"
          role="button"
          tabIndex={0}
          onClick={() => toggleRatedReviews(3)}
          onKeyDown={() => toggleRatedReviews(3)}
        >
          <p style={{ margin: '0em 1em' }}>3 stars</p>
          <Bars
            reviewCount={counter.threeStarReviews}
            totalCount={reviews.length}
          />
          <p style={{ margin: '0em 1em' }}>{counter.threeStarReviews}</p>
        </div>

        <div
          className="indiv-bar"
          role="button"
          tabIndex={0}
          onClick={() => toggleRatedReviews(2)}
          onKeyDown={() => toggleRatedReviews(2)}
        >
          <p style={{ margin: '0em 1em' }}>2 stars</p>
          <Bars
            reviewCount={counter.twoStarReviews}
            totalCount={reviews.length}
          />
          <p style={{ margin: '0em 1em' }}>{counter.twoStarReviews}</p>
        </div>

        <div
          className="indiv-bar"
          role="button"
          tabIndex={0}
          onClick={() => toggleRatedReviews(1)}
          onKeyDown={() => toggleRatedReviews(1)}
        >
          <p style={{ margin: '0em 1em' }}>1 stars</p>
          <Bars
            reviewCount={counter.oneStarReviews}
            totalCount={reviews.length}
          />
          <p style={{ margin: '0em 1em' }}>{counter.oneStarReviews}</p>
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
          flexWrap: 'wrap-reverse',
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
