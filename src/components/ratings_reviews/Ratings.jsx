import React from 'react';

function Ratings() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        border: 'solid 0px white',
        'border-radius': '5px',
        padding: '2em 1em',
        marginRight: '1em',
        'min-width': '200px',
      }}
    >
      Average Ratings
      <h1>
        4.2
        <div
          className="stars"
          style={{ '--rating': (Math.round(4.2 * 4) / 4).toFixed(2) }}
        />
      </h1>
      <i>67% of reviews recommend this product!</i>
      <br />
      Sort by...
      <div className="bars-container">
        <div className="indiv-bar">
          {'5 stars '}
          <div className="bars" /> {90}
          <br />
        </div>

        <div className="indiv-bar">
          {'4 stars '}
          <div className="bars" /> {61}
          <br />
        </div>

        <div className="indiv-bar">
          {'3 stars '}
          <div className="bars" /> {75}
          <br />
        </div>

        <div className="indiv-bar">
          {'2 stars '}
          <div className="bars" /> {31}
          <br />
        </div>

        <div className="indiv-bar">
          {'1 stars '}
          <div className="bars" /> {7}
          <br />
        </div>
      </div>
    </div>
  );
}

export default Ratings;
