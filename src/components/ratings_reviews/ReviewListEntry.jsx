import React from 'react';
import PropTypes from 'prop-types';
import Stars from '../shared/Stars';
import ReviewPhotos from './ReviewPhotos';

function ReviewListEntry({ review }) {
  // console.log(review, 'review passed down into ReviewListEntry');
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '0.5em',
        padding: '0.2em 0.3em',
        fontSize: '0.7em',
        borderRadius: '5px',
        border: 'solid 2px white',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
      }}
    >
      <span>
        <b>{review.summary}</b>
      </span>
      <Stars rating={review.rating} id="reviewStar" />
      <span>{review.body}</span>
      <div className="images-container">
        {review.photos.map((photo) => (
          <ReviewPhotos photo={photo} />
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
        {review.reviewer_name} | {review.date} | Verified User |{' '}
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
