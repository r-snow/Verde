import React from 'react';
import Stars from '../shared/Stars';
import Bars from '../shared/Bars';

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
        <Stars rating={(Math.round(4.2 * 4) / 4).toFixed(2)} />
      </h1>
      <i>76% of reviews recommend this product!</i>
      <br />
      Sort by...
      <div className="bars-container">
        <div className="indiv-bar">
          5 stars
          <Bars reviewCount={90} totalCount={265} />
          {90}
        </div>

        <div className="indiv-bar">
          4 stars
          <Bars reviewCount={61} totalCount={265} />
          {61}
        </div>

        <div className="indiv-bar">
          3 stars
          <Bars reviewCount={75} totalCount={265} />
          {75}
        </div>

        <div className="indiv-bar">
          2 stars
          <Bars reviewCount={31} totalCount={265} />
          {31}
        </div>

        <div className="indiv-bar">
          1 stars
          <Bars reviewCount={7} totalCount={264} />
          {7}
        </div>
      </div>
    </div>
  );
}

export default Ratings;
