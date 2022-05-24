import axios from 'axios';

import React, { useState, useEffect } from 'react';
import Ratings from './Ratings';
import Reviews from './Reviews';
import ReviewModal from './ReviewModal';

import config from '../../../config/config';

function RatingsAndReviews() {
  const [modalActive, setModalStatus] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [visible, setVisible] = useState(2);

  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/';
  const id = 65733;
  useEffect(() => {
    axios
      .get(`${url}reviews/?product_id=${id}&count=100`, {
        headers: { Authorization: config.TOKEN },
      })
      .then((results) => setReviews(results.data.results));
  }, []);

  const toggleModal = () => {
    setModalStatus(!modalActive);
  };

  const addVisibility = () => {
    const newTotal = visible + 2;
    setVisible(newTotal);
  };

  // created a new variable newTotal to prevent linter errors with constants/

  if (modalActive) {
    document.body.classList.add('prevent-scroll-background');
  } else {
    document.body.classList.remove('prevent-scroll-background');
  }

  const sortReviews = (sortType) => {
    axios
      .get(`${url}reviews/?product_id=${id}&count=100&sort=${sortType}`, {
        headers: { Authorization: config.TOKEN },
      })
      .then((results) => setReviews(results.data.results));
  };

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontFamily: 'Helvetica',
        fontWeight: '100',
        padding: '1em',
      }}
      id="ratings-reviews"
    >
      {reviews.length !== 0 ? (
        <>
          <Ratings reviews={reviews} />
          <Reviews
            reviews={reviews}
            toggleModal={toggleModal}
            visible={visible}
            addVisibility={addVisibility}
            sortReviews={sortReviews}
          />
        </>
      ) : (
        <button
          type="button"
          onClick={toggleModal}
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '25%',
          }}
        >
          Write a new review
        </button>
      )}
      {modalActive && <ReviewModal toggleModal={toggleModal} />}
    </section>
  );
}

export default RatingsAndReviews;
