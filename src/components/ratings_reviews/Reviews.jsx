import React from 'react';
import ReviewListEntry from './ReviewListEntry';

function Reviews() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '0.5em',
        border: 'solid 2px white',
        padding: '2em 8em',
        'border-radius': '5px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <em>Reviews </em>
      <br />
      <ReviewListEntry />
    </div>
  );
}

export default Reviews;
