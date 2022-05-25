import axios from 'axios';

import React, { useState, useEffect, useMemo } from 'react';
import Ratings from './Ratings';
import Reviews from './Reviews';
import ReviewModal from './ReviewModal';

import config from '../../../config/config';

function RatingsAndReviews() {
  const [modalActive, setModalStatus] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [visible, setVisible] = useState(2);
  const [ratingSwitch, toggleRatingSwitch] = useState({});

  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/';
  const id = 40344;
  useEffect(() => {
    axios
      .get(`${url}reviews/?product_id=${id}&count=100`, {
        headers: { Authorization: config.TOKEN },
      })
      .then((results) => setReviews(results.data.results));
  }, []);

  const toggleRatedReviews = (rating) => {
    const copy = { ...ratingSwitch };
    if (copy[rating]) {
      delete copy[rating];
    } else {
      copy[rating] = rating;
    }
    toggleRatingSwitch(copy);
  };

  const ratedReviews = useMemo(() => {
    const filtered = Object.values(ratingSwitch);
    const result = [];
    for (let i = 0; i < filtered.length; i += 1) {
      for (let j = 0; j < reviews.length; j += 1) {
        if (reviews[j].rating === filtered[i]) {
          result.push(reviews[j]);
        }
      }
    }
    return result;
  }, [ratingSwitch, reviews]);

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
      .get(
        `${url}reviews/?product_id=${id}&count=100&sort=${sortType.toLowerCase()}`,
        {
          headers: { Authorization: config.TOKEN },
        }
      )
      .then((results) => setReviews(results.data.results));
  };

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        fontFamily: 'Helvetica',
        fontWeight: '100',
        padding: '0.2em',
        border: 'solid white 2px',
      }}
      id="ratings-reviews"
    >
      {reviews.length === 0 && (
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

      <div
        style={{
          display: 'flex',
        }}
      >
        <Ratings
          reviews={reviews}
          ratingSwitch={ratingSwitch}
          toggleRatedReviews={toggleRatedReviews}
        />
        <Reviews
          reviews={ratedReviews.length === 0 ? reviews : ratedReviews}
          toggleModal={toggleModal}
          visible={visible}
          addVisibility={addVisibility}
          sortReviews={sortReviews}
        />
      </div>

      {modalActive && <ReviewModal toggleModal={toggleModal} />}
    </section>
  );
}

export default RatingsAndReviews;
