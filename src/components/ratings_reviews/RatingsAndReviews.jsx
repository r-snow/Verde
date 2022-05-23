import axios from 'axios';

import React, { useState, useEffect } from 'react';
import Ratings from './Ratings';
import Reviews from './Reviews';
import ReviewModal from './ReviewModal';

const config = require('../../../config');

function RatingsAndReviews() {
  const [modalActive, setModalStatus] = useState(false);
  const [reviews, setReviews] = useState([]);

  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/';
  const id = 65733;
  useEffect(() => {
    axios
      .get(`${url}reviews/?product_id=${id}`, {
        headers: { Authorization: config.TOKEN },
      })
      .then((results) => setReviews(results.data.results));
  }, []);

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
      <Reviews toggleModal={toggleModal} reviews={reviews} />
      {modalActive && <ReviewModal toggleModal={toggleModal} />}
    </section>
  );
}

export default RatingsAndReviews;
