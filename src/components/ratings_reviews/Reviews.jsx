import React from 'react';
import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCirclePlus, faPen } from '@fortawesome/free-solid-svg-icons';
import ReviewListEntry from './ReviewListEntry';

function Reviews({
  reviews,
  // toggleModal,
  visible,
  // addVisibility,
  sortReviews,
  submitHelpfulNess,
}) {
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
        style={{
          marginBottom: '1em',
          textAlign: 'left',
          alignSelf: 'end',
          padding: '0.7rem 6rem',
          borderRadius: '2rem',
        }}
        onChange={(event) => sortReviews(event.target.value)}
      >
        <option>Sort by...</option>
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
          // border: 'solid 5px green',
          // maxWidth: '80rem',
          // margin: '0em 10em',
          // overflowX: 'hidden',
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
  // toggleModal: PropTypes.func.isRequired,
  visible: PropTypes.number.isRequired,
  // addVisibility: PropTypes.func.isRequired,
  sortReviews: PropTypes.func.isRequired,
  submitHelpfulNess: PropTypes.func.isRequired,
};

export default Reviews;
