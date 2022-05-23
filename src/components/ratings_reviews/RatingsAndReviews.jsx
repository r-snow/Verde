import React from 'react';
import Ratings from './Ratings';
import Reviews from './Reviews';
import ReviewModal from './ReviewModal';

function RatingsAndReviews() {
  const [modalActive, setModalStatus] = React.useState(false);

  const toggleModal = () => {
    setModalStatus(!modalActive);
  };

  if (modalActive) {
    document.body.classList.add('prevent-scroll-background');
  } else {
    document.body.classList.remove('prevent-scroll-background');
  }

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        fontFamily: 'Helvetica',
        fontWeight: '100',
        padding: '1em',
      }}
      id="ratings-reviews"
    >
      <Ratings />
      <Reviews toggleModal={toggleModal} />
      {modalActive && <ReviewModal toggleModal={toggleModal} />}
    </section>
  );
}

export default RatingsAndReviews;
