/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import config from '../../../../config/config';

export default function AddAnswer({ question, setShowModal }) {
  const [errorMessage, setErrorMessage] = useState('');
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = React.useState([]);

  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/';

  const isValidEmail = (val) => {
    const validEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validEmail.test(val);
  };

  const handleSubmit = () => {
    const error = [];
    if (!answer.length) {
      error.push('Answer');
    }
    if (!nickname.length) {
      error.push('Nickname');
    }
    if (!isValidEmail(email)) {
      error.push('Valid Email');
    }
    if (error.length) {
      setErrorMessage(`You must enter the following: ${error.join(', ')}`);
    } else {
      axios
        .post(
          `${url}qa/questions/${question.question_id}/answers`,
          {
            body: answer,
            name: nickname,
            email,
            photos,
          },
          {
            headers: { Authorization: config.TOKEN },
          }
        )
        .then(() => {
          setShowModal(false);
        });
    }
  };

  const addPhoto = (event) => {
    const images = [];
    images.push(event.target.value);
    setPhotos(images);
  };

  return (
    <div className="answer-modal">
      <button
        className="answer-modal-close"
        type="button"
        onClick={() => setShowModal(false)}
      >
        X
      </button>
      <h2>Submit Your Answer: {question.question_body}</h2>
      {errorMessage && (
        <div
          style={{
            backgroundColor: 'red',
            fontWeight: 'bold',
            padding: '5px',
          }}
        >
          {errorMessage}
        </div>
      )}
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
        }}
      >
        <div
          style={{
            padding: '5px',
            height: '100px',
            width: '150px',
          }}
        >
          <label>Your Answer*:</label>
          <textarea
            type="text"
            id="answer"
            maxLength={1000}
            minLength={1}
            autoComplete="off"
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <div
          style={{
            padding: '5px',
            height: '70px',
          }}
        >
          <label>Upload Photos (Limit 5)</label>
          <input
            type="file"
            accept="image/*"
            id="formFileMultiple"
            multiple
            onChange={addPhoto}
          />
          {photos.length > 0 && (
            <div>
              <span>Preview:</span>
              <br />
              {photos.map((photo) => (
                <img src={photo} height="50px" alt="Preview" />
              ))}
            </div>
          )}
        </div>
        <div
          style={{
            padding: '5px',
            height: '70px',
          }}
        >
          <label htmlFor="nickname">Nickname*:</label>
          <input
            id="nickname"
            maxLength={60}
            placeholder="Example: jack543!"
            onChange={(e) => setNickname(e.target.value)}
          />
          <span
            style={{
              fontStyle: 'italic',
            }}
          >
            &nbsp; For privacy reasons, do not use your full name or email
            address
          </span>
        </div>
        <div
          style={{
            padding: '5px',
            height: '70px',
          }}
        >
          <label>Email*:</label>
          <input
            type="email"
            id="email"
            maxLength={60}
            placeholder="jack@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span
            style={{
              fontStyle: 'italic',
            }}
          >
            &nbsp;For authentication reasons, you will not be emailed
          </span>
        </div>
      </form>
      <button
        className="answer-form-submit-button"
        type="button"
        onClick={handleSubmit}
      >
        Submit Answer
      </button>
    </div>
  );
}
AddAnswer.propTypes = {
  question: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  setShowModal: PropTypes.func.isRequired,
};
