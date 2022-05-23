import React from 'react';
import PropTypes from 'prop-types';
import ReviewListEntry from './ReviewListEntry';

function Reviews({ toggleModal }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        // border: 'solid 5px white',
        width: 'calc((2 / 3) * 100% - 10px)',
        borderRadius: '5px',
        alignItems: 'center',
      }}
    >
      <select
        style={{
          alignSelf: 'flex-end',
          marginBottom: '1em',
        }}
      >
        <option>Sort by...</option>
        <option>Helpfulness</option>
        <option>Newest</option>
        <option>Relevance</option>
      </select>
      <button
        type="button"
        style={{
          alignSelf: 'flex-end',
          width: '150px',
          marginBottom: '1em',
        }}
        onClick={toggleModal}
      >
        Write a review
      </button>
      <ReviewListEntry />
      <ReviewListEntry />
      <button
        type="button"
        style={{
          padding: '0.6em 0.5em',
          marginTop: '1rem',
        }}
      >
        Show more
      </button>
    </div>
  );
}

Reviews.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Reviews;
