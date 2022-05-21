import React from 'react';
import Ratings from './Ratings';
import Reviews from './Reviews';

function RatingsAndReviews() {
  // const [modalActive, setModalStatus] = React.useState(true);

  // const toggleModal = () => {
  //   setModalStatus((prev) => !prev);
  // };

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        padding: '1em',
        fontFamily: 'Helvetica',
        fontWeight: '100',
      }}
      id="ratings-reviews"
    >
      <Ratings />
      <Reviews />
    </section>
  );
}

export default RatingsAndReviews;
