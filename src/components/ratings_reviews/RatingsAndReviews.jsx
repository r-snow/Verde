import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faPen } from '@fortawesome/free-solid-svg-icons';
import Ratings from './Ratings';
import Reviews from './Reviews';
import ReviewModal from './ReviewModal';

import config from '../../../config/config';

function RatingsAndReviews() {
  const [modalActive, setModalStatus] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [visible, setVisible] = useState(2);
  const [ratingSwitch, toggleRatingSwitch] = useState({});
  const [meta, setMeta] = useState({
    characteristics: {
      Comfort: {
        id: 0,
        value: '',
      },
      Fit: {
        id: 0,
        value: '',
      },
      Length: {
        id: 0,
        value: '',
      },
      Quality: {
        id: 0,
        value: '',
      },
    },
    ratings: { 1: '', 2: '', 3: '', 4: '', 5: '' },
    recommended: { false: '', true: '' },
  });

  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/';
  const id = 40344;
  useEffect(() => {
    axios
      .get(`${url}reviews/?product_id=${id}&sort=newest&count=1000`, {
        headers: { Authorization: config.TOKEN },
      })
      .then((results) => setReviews(results.data.results));
    axios
      .get(`${url}reviews/meta/?product_id=${id}`, {
        headers: { Authorization: config.TOKEN },
      })
      .then((results) => setMeta({ ...results.data }));
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
    // console.log(sortType.toLowerCase());
    axios
      .get(
        `${url}reviews/?product_id=${id}&count=1000&sort=${sortType.toLowerCase()}`,
        {
          headers: { Authorization: config.TOKEN },
        }
      )
      .then((results) => setReviews(results.data.results));
  };

  const submitHelpfulNess = (value, reviewId) => {
    if (value === 'yes') {
      axios.put(`${url}reviews/${reviewId}/helpful`, null, {
        headers: { Authorization: config.TOKEN },
      });
    }
  };

  return (
    <>
      <div className="separator">
        <h1 className="separator-title">Ratings & Reviews</h1>
      </div>
      <div className="section-end">
        <div className="custom-shape-divider-top-1653983827">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            />
          </svg>
        </div>
      </div>
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          fontFamily: 'Cormorant Garamond',
          fontWeight: '100',
          fontSize: '1.5em',
          padding: '0.2em',
          // border: 'solid red 5px',
          flexWrap: 'wrap',
          overflowX: 'hidden',
        }}
        id="ratings-reviews"
      >
        <Ratings
          meta={meta}
          ratingSwitch={ratingSwitch}
          toggleRatedReviews={toggleRatedReviews}
        />
        <Reviews
          reviews={ratedReviews.length === 0 ? reviews : ratedReviews}
          toggleModal={toggleModal}
          visible={visible}
          addVisibility={addVisibility}
          sortReviews={sortReviews}
          submitHelpfulNess={submitHelpfulNess}
        />
        {modalActive && (
          <ReviewModal
            meta={meta}
            toggleModal={toggleModal}
            setReviews={setReviews}
          />
        )}
        <section
          className="button-container"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignSelf: 'end',
            border: 'solid 0px cyan',
            width: '50%',
            right: '80%',
            marginLeft: 'auto',
          }}
        >
          <button type="button" className="review-button" onClick={toggleModal}>
            <FontAwesomeIcon
              icon={faPen}
              size="xs"
              style={{
                opacity: '1',
                margin: '0em 0.5em',
              }}
            />
            Write a new review
          </button>
          {visible < reviews.length && (
            <button
              type="button"
              className="review-button"
              onClick={addVisibility}
            >
              <FontAwesomeIcon
                icon={faCirclePlus}
                size="xs"
                style={{
                  opacity: '0.8',
                  margin: '0em 0.5em',
                }}
              />
              Show more
            </button>
          )}
        </section>
      </section>
    </>
  );
}

export default RatingsAndReviews;
