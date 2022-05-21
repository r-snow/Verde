import React from 'react';
import Stars from '../shared/Stars';
import Bars from '../shared/Bars';

function Ratings() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        border: 'solid 0px white',
        borderRadius: '5px',
        padding: '2em 1em',
        marginRight: '1em',
        width: 'calc((1 / 3) * 100%)',
        minWidth: '200px',
        fontSize: '0.6em',
      }}
    >
      <h4
        style={{
          display: 'flex',
        }}
      >
        Reviews & Ratings
      </h4>
      <h1>
        4.2
        <Stars rating={4.2} />
      </h1>
      <i>76% of reviews recommend this product!</i>
      <p
        style={{
          alignSelf: 'center',
        }}
      >
        Sort by...
      </p>
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
          <Bars reviewCount={11} totalCount={265} />
          {11}
        </div>
      </div>
    </div>
  );
}

export default Ratings;
