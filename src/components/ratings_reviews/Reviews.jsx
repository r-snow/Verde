import React from 'react';
import ReviewListEntry from './ReviewListEntry';

function Reviews() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '0.2em',
        border: 'solid 0px white',
        padding: '0.2em 0em 0em 0em',
        'border-radius': '5px',
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
        }}
      >
        <option>Sort by...</option>
        <option>Helpfulness</option>
        <option>Newest</option>
        <option>Relevance</option>
      </select>
      <br />
      <ReviewListEntry />
      <ReviewListEntry />
      <button
        type="submit"
        style={{
          padding: '0.6em 0.5em',
          'margin-top': '1rem',
        }}
      >
        Show more
      </button>
    </div>
  );
}

export default Reviews;
