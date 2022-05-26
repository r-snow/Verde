import React from 'react';
import PropTypes from 'prop-types';
import ReviewListEntry from './ReviewListEntry';

function Reviews({
  reviews,
  toggleModal,
  visible,
  addVisibility,
  sortReviews,
}) {
  // console.log(reviews, 'list of reviews');
  return (
    <div className="full-review-container">
      <select
        style={{
          marginBottom: '1em',
          overflow: 'hidden',
        }}
        onChange={(event) => sortReviews(event.target.value)}
      >
        <option>Sort by...</option>
        <option>Helpfulness</option>
        <option>Newest</option>
        <option>Relevance</option>
      </select>

      <div
        style={{
          border: 'solid 5px green',
          // margin: '0em 10em',
          borderRadius: '5px',
          maxHeight: '1000px',
          overflowY: 'scroll',
          overflowX: 'hidden',
        }}
      >
        {reviews.slice(0, visible).map((review) => (
          <ReviewListEntry review={review} key={review.review_id} />
        ))}
        <section
          className="button-container"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            border: 'solid 5px cyan',
            width: '100%',
          }}
        >
          <button
            type="button"
            className="end-review-buttons"
            onClick={toggleModal}
          >
            Write a review
          </button>

          {visible < reviews.length && (
            <button
              type="button"
              className="end-review-buttons"
              onClick={addVisibility}
            >
              Show more
            </button>
          )}
        </section>
      </div>
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape).isRequired,
  toggleModal: PropTypes.func.isRequired,
  visible: PropTypes.number.isRequired,
  addVisibility: PropTypes.func.isRequired,
  sortReviews: PropTypes.func.isRequired,
};

export default Reviews;
