import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faCircleCheck,
  faThumbsUp,
  faThumbsDown,
  faComment,
  faCertificate,
  faQuoteLeft,
  faQuoteRight,
} from '@fortawesome/free-solid-svg-icons';
import Stars from '../shared/Stars';
import ReviewPhotos from './ReviewPhotos';

function ReviewListEntry({ review, submitHelpfulNess }) {
  const [textView, setTextView] = useState(false);
  const [clickedHelpful, setClickedHelpful] = useState(false);
  const [comment, clickComment] = useState(false);

  const changeView = () => {
    setTextView(!textView);
  };

  const toggleClickedHelpful = () => {
    setClickedHelpful(!clickedHelpful);
  };
  return (
    <section
      className="reviews"
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem 1rem .1rem',
        fontSize: '16px',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        fontFamily: 'Cormorant Garamond',
      }}
    >
      <Stars rating={review.rating} id="reviewStar" />
      <span
        style={{
          fontSize: '22px',
        }}
      >
        <b>{review.summary.slice(0, 60)}</b>
      </span>

      {review.body.length < 250 && (
        <span
          style={{
            padding: '0.2em 0em 0.5em',
            width: '55vw',
            overflowX: 'hidden',
            fontSize: '20px',
            fontWeight: '500',
          }}
        >
          {review.body}
        </span>
      )}

      {review.body.length > 250 && !textView && (
        <>
          <span
            style={{
              padding: '0.2em 0em',
              maxWidth: '60vw',
              fontSize: '20px',
              fontWeight: '500',
              wordWrap: 'break-word',
            }}
          >
            {review.body.slice(0, 250)}
          </span>
          <div
            role="button"
            onKeyDown={changeView}
            onClick={changeView}
            tabIndex={0}
            className="alt-review-button-body"
            style={{
              margin: '0rem 0rem 0.2rem',
              fontSize: '10px',
            }}
          >
            SHOW MORE
          </div>{' '}
        </>
      )}

      {review.body.length > 250 && textView && (
        <span
          style={{
            padding: '1em 0em',
            maxWidth: '60vw',
            wordWrap: 'break-word',
          }}
        >
          {review.body}
        </span>
      )}

      {review.photos.length !== 0 ? (
        <div className="images-container hover-pointer">
          {review.photos.map((photo) => (
            <ReviewPhotos photo={photo} key={photo.id} />
          ))}
        </div>
      ) : null}

      <div
        className="reviewer-name"
        style={{
          display: 'flex',
          width: '100%',
          color: 'darkgray',
          fontSize: '15px',
        }}
      >
        {review.reviewer_name} |{' '}
        {format(parseISO(review.date), 'MMMM dd, yyyy')} | Verified User{' '}
        <FontAwesomeIcon
          icon={faCertificate}
          size="xs"
          style={{
            opacity: '0.5',
            margin: '0em 0.2em',
          }}
        />
      </div>

      {review.recommend && (
        <span
          style={{
            fontSize: '15px',
            margin: '0.3em 0em',
            position: 'relative',
          }}
        >
          <FontAwesomeIcon
            icon={faQuoteLeft}
            size="2xs"
            style={{
              opacity: '0.5',
              margin: '0em 0.15em',
              position: 'relative',
              bottom: '5px',
              fontSize: '10px',
            }}
          />
          I recommended this product!
          <FontAwesomeIcon
            icon={faQuoteRight}
            size="2xs"
            style={{
              opacity: '0.5',
              position: 'relative',
              bottom: '5px',
              margin: '0em 0.2em',
              fontSize: '10px',
            }}
          />{' '}
          {/* <FontAwesomeIcon
            icon={faCircleCheck}
            size="xs"
            style={{
              opacity: '0.5',
              margin: '0em 0.1em',
            }}
          />{' '} */}
        </span>
      )}

      <div
        className="misc-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
          // top: '1rem',
          margin: '0rem',
        }}
      >
        {!clickedHelpful ? (
          <div style={{ margin: '0' }}>
            Was this Review Helpful?
            <button
              type="button"
              className="review-helpful-btn"
              name="yes"
              value="yes"
              onClick={(event) => {
                submitHelpfulNess(event.target.value, review.review_id);
                toggleClickedHelpful();
              }}
            >
              <FontAwesomeIcon
                icon={faThumbsUp}
                size="sm"
                className="hover-pointer"
                style={{
                  opacity: '0.5',
                  margin: '0em 0.2em',
                }}
              />
            </button>
            <button
              type="button"
              className="review-helpful-btn"
              name="no"
              value="no"
              onClick={(event) => {
                submitHelpfulNess(event.target.value, review.review_id);
                toggleClickedHelpful();
              }}
            >
              <FontAwesomeIcon
                icon={faThumbsDown}
                size="sm"
                className="hover-pointer"
                style={{
                  opacity: '0.5',
                  margin: '0em 0.2em',
                }}
              />
            </button>
          </div>
        ) : (
          <p style={{ fontSize: '16px', fontWeight: '600', color: '#746245' }}>
            Thank you for your feedback!
          </p>
        )}
        <div
          style={{
            marginLeft: 'auto',
          }}
        >
          {!comment ? (
            <div
              onClick={clickComment}
              onKeyDown={clickComment}
              className="hover-pointer"
              role="button"
              tabIndex="0"
            >
              Leave a comment
              <FontAwesomeIcon
                icon={faComment}
                size="xs"
                style={{
                  opacity: '0.5',
                  margin: '0em 0.4em',
                }}
              />
            </div>
          ) : (
            <div>
              <input
                type="text"
                placeholder="Leave a comment"
                className="hover-pointer"
                style={{ padding: '0.3rem', fontFamily: 'montserrat' }}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    clickComment();
                  }
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

ReviewListEntry.propTypes = {
  review: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  submitHelpfulNess: PropTypes.func.isRequired,
};

export default ReviewListEntry;
