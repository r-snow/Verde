import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
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
  // console.log(review, 'review passed down into ReviewListEntry');
  return (
    <section
      className="reviews"
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        fontSize: '16px',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
      }}
    >
      <span
        style={{
          fontSize: '24px',
        }}
      >
        <b>{review.summary.slice(0, 60)}</b>
      </span>
      <Stars rating={review.rating} id="reviewStar" />

      {review.body.length < 250 && (
        <span
          style={{
            padding: '0.2em 0em 0.5em',
            width: '60vw',
            overflowX: 'hidden',
          }}
        >
          {review.body}
        </span>
      )}

      {review.body.length > 250 && !textView && (
        <>
          <span
            style={{
              padding: '0.2em 0em 0.5rem',
              maxWidth: '60vw',
              wordWrap: 'break-word',
            }}
          >
            {review.body.slice(0, 250)}
          </span>
          <button
            type="button"
            onClick={changeView}
            className="review-button"
            style={{
              padding: '0.2rem 0.7rem',
              borderRadius: '0.2rem',
              margin: '0rem 0rem 1rem 0rem',
              backgroundColor: 'transparent',
              fontSize: '18px',
            }}
          >
            SHOW MORE
          </button>{' '}
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
        <div className="images-container">
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
          fontSize: '14px',
          margin: '0',
        }}
      >
        {review.reviewer_name} |{' '}
        {format(parseISO(review.date), 'MMMM dd, yyyy')} | Verified User{' '}
        <FontAwesomeIcon
          icon={faCertificate}
          size="xs"
          style={{
            opacity: '0.5',
            margin: '0.3em 0.2em',
          }}
        />
      </div>
      <span
        style={{
          fontSize: '16px',
          margin: '0rem',
          border: 'solid 5px green',
        }}
      >
        {review.recommend && (
          <div style={{ margin: '0rem 0rem' }}>
            <FontAwesomeIcon
              icon={faCircleCheck}
              size="lg"
              style={{
                opacity: '0.5',
                margin: '0em 0.1em',
              }}
            />{' '}
            <FontAwesomeIcon
              icon={faQuoteLeft}
              size="xs"
              style={{
                opacity: '0.5',
                margin: '0em 0.15em',
                fontSize: '10px',
              }}
            />
            I recommended this product!
            <FontAwesomeIcon
              icon={faQuoteRight}
              size="xs"
              style={{
                opacity: '0.5',
                margin: '0em 0.2em',
                fontSize: '10px',
              }}
            />{' '}
          </div>
        )}
      </span>

      <div
        className="misc-container"
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          width: '100%',
          position: 'relative',
          top: '0.2rem',
          margin: '0',
        }}
      >
        {!clickedHelpful ? (
          <div>
            <div
              style={{
                display: 'inline',
                fontSize: '16px',
                border: 'solid 5px blue',
              }}
            >
              Was this Review Helpful?
            </div>
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
                style={{ padding: '0.7rem 0.7rem' }}
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
