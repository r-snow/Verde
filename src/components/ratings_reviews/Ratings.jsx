import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
// import Stars from '../shared/Stars';
import CustomStars from '../shared/CustomStars';
import Bars from '../shared/Bars';
import Sliders from '../shared/Sliders';

function Ratings({ meta, ratingSwitch, toggleRatedReviews }) {
  const totalReviews =
    Number(meta.recommended.true) + Number(meta.recommended.false);
  const totalRatingScore =
    Number(meta.ratings[5]) * 5 +
    Number(meta.ratings[4]) * 4 +
    Number(meta.ratings[3]) * 3 +
    Number(meta.ratings[2]) * 2 +
    Number(meta.ratings[1]) * 1;
  const averageRatingScore = totalRatingScore / totalReviews;
  const filteredStarsKeys = Object.keys(ratingSwitch);
  const metaEntries = Object.entries(meta.characteristics);
  // computes average and # of reviews recommended the product and # of star reviews
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
        margin: '0.5em 0em 0em 0rem',
        width: '30rem',
        minWidth: '30rem',
        fontSize: '0.8em',
      }}
    >
      <p
        style={{
          fontSize: '2em',
          margin: '0.3rem 0',
        }}
      >
        Reviews & Ratings
      </p>
      <p
        style={{
          fontSize: '3.5em',
          margin: '0.1em 0em',
        }}
      >
        {averageRatingScore.toFixed(2)}
        <CustomStars rating={averageRatingScore} color="cyan" size="25px" />
      </p>

      <i style={{ textAlign: 'center', marginBottom: '1em', width: '17rem' }}>
        <p
          style={{
            display: 'inline',
            fontSize: '2em',
          }}
        >
          {((Number(meta.recommended.true) / totalReviews) * 100).toFixed(2)}
        </p>
        <p style={{ display: 'inline' }}>
          % of reviews recommend this product!
        </p>
      </i>
      <div className="sliders-container">
        {metaEntries.map((entry) => (
          <Sliders
            id={entry[1].id}
            key={nanoid()}
            average={entry[1].value}
            char={entry[0]}
          />
        ))}
      </div>
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
            reviewCount={Number(meta.ratings[5])}
            totalCount={totalReviews}
          />
          <p style={{ margin: '0em 1em' }}>{Number(meta.ratings[5])}</p>
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
            reviewCount={Number(meta.ratings[4])}
            totalCount={totalReviews}
          />
          <p style={{ margin: '0em 1em' }}>{Number(meta.ratings[4])}</p>
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
            reviewCount={Number(meta.ratings[3])}
            totalCount={totalReviews}
          />
          <p style={{ margin: '0em 1em' }}>{Number(meta.ratings[3])}</p>
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
            reviewCount={Number(meta.ratings[2])}
            totalCount={totalReviews}
          />
          <p style={{ margin: '0em 1em' }}>{Number(meta.ratings[2])}</p>
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
            reviewCount={Number(meta.ratings[1])}
            totalCount={totalReviews}
          />
          <p style={{ margin: '0em 1em' }}>{Number(meta.ratings[1])}</p>
        </div>
      </div>
      <p
        style={{
          alignSelf: 'center',
        }}
      >
        <FontAwesomeIcon
          icon={faBarsStaggered}
          size="xs"
          style={{
            opacity: '0.5',
            margin: '0em 0.2em',
          }}
        />
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
            key={nanoid()}
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
  meta: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  ratingSwitch: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  toggleRatedReviews: PropTypes.func.isRequired,
};

export default Ratings;
