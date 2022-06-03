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
    Number(meta.ratings[5] || 0) * 5 +
    Number(meta.ratings[4] || 0) * 4 +
    Number(meta.ratings[3] || 0) * 3 +
    Number(meta.ratings[2] || 0) * 2 +
    Number(meta.ratings[1] || 0) * 1;
  const averageRatingScore = totalRatingScore / totalReviews;
  const filteredStarsKeys = Object.keys(ratingSwitch);
  const metaEntries = Object.entries(meta.characteristics);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        borderRadius: '3rem',
        padding: '2rem 1rem',
        margin: '10 auto',
        width: '30rem',
        minWidth: '30rem',
        fontSize: '14px',
      }}
    >
      <div className="ratings-all-titles-containers">
        <div
          className="rating-title-text"
          style={{
            fontSize: '30px',
            textAlign: 'center',
            fontFamily: 'Montserrat',
          }}
        >
          {averageRatingScore.toFixed(2)}
          <CustomStars
            rating={averageRatingScore}
            color="var(--gold-theme)"
            size="30px"
            style={{ position: 'absolute', bottom: 40, lineHeight: 1 }}
          />
        </div>

        <div
          style={{
            textAlign: 'center',
            marginBottom: '1em',
            width: '20rem',
            fontFamily: 'Montserrat',
          }}
        >
          <p className="percent-title">
            {((Number(meta.recommended.true) / totalReviews) * 100).toFixed(2)}
          </p>
          <p style={{ display: 'inline' }}>
            % OF REVIEWS RECOMMEND THIS PRODUCT!
          </p>
        </div>
      </div>
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
          className="indiv-bar hover-pointer"
          role="button"
          tabIndex={0}
          onClick={() => toggleRatedReviews(5)}
          onKeyDown={() => toggleRatedReviews(5)}
        >
          <p style={{ margin: '0em 1em' }}>5 stars</p>
          <Bars
            reviewCount={Number(meta.ratings[5] || 0)}
            totalCount={totalReviews}
          />
          <p style={{ margin: '0em 1em' }}>{Number(meta.ratings[5] || 0)}</p>
        </div>

        <div
          className="indiv-bar hover-pointer"
          role="button"
          tabIndex={0}
          onClick={() => toggleRatedReviews(4)}
          onKeyPress={() => toggleRatedReviews(4)}
        >
          <p style={{ margin: '0em 1em' }}>4 stars</p>
          <Bars
            reviewCount={Number(meta.ratings[4] || 0)}
            totalCount={totalReviews}
          />
          <p style={{ margin: '0em 1em' }}>{Number(meta.ratings[4] || 0)}</p>
        </div>

        <div
          className="indiv-bar hover-pointer"
          role="button"
          tabIndex={0}
          onClick={() => toggleRatedReviews(3)}
          onKeyDown={() => toggleRatedReviews(3)}
        >
          <p style={{ margin: '0em 1em' }}>3 stars</p>
          <Bars
            reviewCount={Number(meta.ratings[3] || 0)}
            totalCount={totalReviews}
          />
          <p style={{ margin: '0em 1em' }}>{Number(meta.ratings[3] || 0)}</p>
        </div>

        <div
          className="indiv-bar hover-pointer"
          role="button"
          tabIndex={0}
          onClick={() => toggleRatedReviews(2)}
          onKeyDown={() => toggleRatedReviews(2)}
        >
          <p style={{ margin: '0em 1em' }}>2 stars</p>
          <Bars
            reviewCount={Number(meta.ratings[2] || 0)}
            totalCount={totalReviews}
          />
          <p style={{ margin: '0em 1em' }}>{Number(meta.ratings[2] || 0)}</p>
        </div>

        <div
          className="indiv-bar hover-pointer"
          role="button"
          tabIndex={0}
          onClick={() => toggleRatedReviews(1)}
          onKeyDown={() => toggleRatedReviews(1)}
        >
          <p style={{ margin: '0em 1em' }}>1 stars</p>
          <Bars
            reviewCount={Number(meta.ratings[1] || 0)}
            totalCount={totalReviews}
          />
          <p style={{ margin: '0em 1em' }}>{Number(meta.ratings[1] || 0)}</p>
        </div>
      </div>
      <p
        style={{
          alignSelf: 'center',
          fontSize: '24px',
          margin: '0',
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
          flexDirection: 'column',
          flexWrap: 'wrap-reverse',
          alignSelf: 'center',
        }}
      >
        {filteredStarsKeys.map((starKeys) => (
          <button
            type="button"
            // key={nanoid()}
            className="alt-review-button"
            style={{
              padding: '0.4rem 1.6rem',
              margin: '0.2rem',
            }}
            onClick={() => toggleRatedReviews(starKeys)}
          >
            {starKeys} STARS
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
