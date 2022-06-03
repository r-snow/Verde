import React from 'react';
import PropTypes from 'prop-types';
import ReviewListEntry from './ReviewListEntry';

function Reviews({ reviews, visible, sortReviews, submitHelpfulNess }) {
  return (
    <div
      className="full-review-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
      }}
    >
      <select
        className="size-select hover-pointer"
        style={{
          marginBottom: '12px',
          // textAlign: 'left',
          alignSelf: 'end',
        }}
        onChange={(event) => sortReviews(event.target.value)}
      >
        <option>SORT BY...</option>
        <option>Helpfulness</option>
        <option>Newest</option>
        <option>Relevance</option>
      </select>

      <div
        id="review-list-container"
        style={{
          borderRadius: '5px',
          maxHeight: '1000px',
          overflowY: 'scroll',
        }}
      >
        {reviews.slice(0, visible).map((review) => (
          <ReviewListEntry
            review={review}
            key={review.review_id}
            submitHelpfulNess={submitHelpfulNess}
          />
        ))}
      </div>
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape).isRequired,
  visible: PropTypes.number.isRequired,
  sortReviews: PropTypes.func.isRequired,
  submitHelpfulNess: PropTypes.func.isRequired,
};

export default Reviews;
