import React from 'react';
import ReviewListEntry from './ReviewListEntry';

function Reviews() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '0.2em',
        border: 'solid 0px white',
        padding: '0.2em 0em 0em 0em',
        borderRadius: '5px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <em>Reviews</em>
      <select
        style={{
          display: 'flex',
          flexDirection: 'row',
          float: 'right',
          marginBottom: '1em',
        }}
      >
        <option>Sort by...</option>
        <option>Helpfulness</option>
        <option>Newest</option>
        <option>Relevance</option>
      </select>
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

export default Reviews;
