import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faPen } from '@fortawesome/free-solid-svg-icons';
import ReviewListEntry from './ReviewListEntry';

function Reviews({
  reviews,
  toggleModal,
  visible,
  addVisibility,
  sortReviews,
  submitHelpfulNess,
}) {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const reviewOffset = document.getElementById(
  //       'review-list-container'
  //     ).offsetHeight;
  //     const reviewScroll = document.getElementById(
  //       'review-list-container'
  //     ).scrollTop;
  //     const reviewScrollHeight = document.getElementById(
  //       'review-list-container'
  //     ).scrollHeight;
  //     console.log(reviewOffset, reviewScroll, reviewScrollHeight);
  //     if (reviewOffset + reviewScroll >= reviewScrollHeight) {
  //       console.log('happy');
  //       addVisibility();
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  // }, [addVisibility]);

  // if (
  //   document.getElementById('review-list-container').offsetHeight +
  //     document.getElementById('review-list-container').scrollTop +
  //     1 >=
  //   document.getElementById('review-list-container').scrollHeight
  // ) {
  //   console.log('bottom of the page');
  //   // addVisibility();
  // }

  // if (
  //   document.getElementById('review-list-container').offsetHeight +
  //     document.getElementById('review-list-container').scrollTop +
  //     1 >=
  //   document.getElementById('review-list-container').scrollHeight
  // ) {
  //   console.log('bottom of the page');
  //   // addVisibility();
  // }

  // console.log(reviews, 'list of reviews');
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
          alignSelf: 'end',
          padding: '0.5rem 2rem',
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
        <section
          className="button-container"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            border: 'solid 0px cyan',
            width: '100%',
          }}
        >
          {visible < reviews.length && (
            <button
              type="button"
              className="end-review-buttons"
              onClick={addVisibility}
            >
              <FontAwesomeIcon
                icon={faCirclePlus}
                size="xs"
                style={{
                  opacity: '0.5',
                  margin: '0em 0.5em',
                }}
              />
              Show more
            </button>
          )}
          <button
            type="button"
            className="end-review-buttons"
            onClick={toggleModal}
          >
            <FontAwesomeIcon
              icon={faPen}
              size="xs"
              style={{
                opacity: '0.5',
                margin: '0em 0.5em',
              }}
            />
            Write a new review
          </button>
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
  submitHelpfulNess: PropTypes.func.isRequired,
};

export default Reviews;
