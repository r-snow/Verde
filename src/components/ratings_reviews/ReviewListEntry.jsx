import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import Stars from '../shared/Stars';
import ReviewPhotos from './ReviewPhotos';

function ReviewListEntry({ review }) {
  const [textView, setTextView] = useState(false);

  const changeView = () => {
    setTextView(!textView);
  };
  // console.log(review, 'review passed down into ReviewListEntry');
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '0.5em',
        padding: '0.2em 0.3em',
        fontSize: '0.5em',
        borderRadius: '5px',
        border: 'solid 2px white',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <span
        style={{
          fontSize: '2em',
        }}
      >
        <b>{review.summary.slice(0, 60)}</b>
      </span>
      <Stars rating={review.rating} id="reviewStar" />

      {review.body.length < 250 && (
        <span
          style={{
            padding: '1em 0em',
          }}
        >
          {review.body}
        </span>
      )}

      {review.body.length > 250 && !textView && (
        <>
          <span
            style={{
              padding: '1em 0em',
            }}
          >
            {review.body.slice(0, 250)}
          </span>
          <button type="button" onClick={changeView}>
            Show more
          </button>{' '}
        </>
      )}

      {review.body.length > 250 && textView && (
        <span
          style={{
            padding: '1em 0em',
          }}
        >
          {review.body}
        </span>
      )}

      <div className="images-container">
        {review.photos.map((photo) => (
          <ReviewPhotos photo={photo} key={photo.id} />
        ))}
      </div>
      <div
        className="review-char-container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '65%',
        }}
      >
        <span>Size: Awesome </span>
        <span>Fits: True to Size</span>
        <span>Length: Long</span>
      </div>

      <div
        className="reviewer-name"
        style={{
          display: 'flex',
          width: '100%',
          fontSize: '0.5em',
          color: 'darkgray',
          margin: '2em 0em 1em 0.2em',
        }}
      >
        {review.reviewer_name} |{' '}
        {format(parseISO(review.date), 'MMMM dd, yyyy')} | Verified User |{' '}
        {review.recommend && 'Recommended!'}
      </div>

      <div
        className="misc-container"
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          lineHeight: '10px',
          fontSize: '0.2em',
          width: '100%',
        }}
      >
        <div>Was this Review Helpful?</div>
        <button type="button" className="review-helpful-btn">
          Yes
        </button>
        <button type="button" className="review-helpful-btn">
          No
        </button>
        <div
          style={{
            marginLeft: 'auto',
          }}
        >
          Leave a comment
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
};

export default ReviewListEntry;
