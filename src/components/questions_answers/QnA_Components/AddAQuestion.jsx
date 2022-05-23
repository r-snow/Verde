/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddAQuestion({ productID, setOpenModal }) {
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit() {
    if (question.length && nickname.length && email.length) {
      setOpenModal(false);
    }
  }
  return (
    <div className="add-question-modal">
      <button
        className="add-question-modal-close"
        type="button"
        onClick={() => setOpenModal(false)}
      >
        X
      </button>
      <h2>New Question About: product #{productID}</h2>
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
          <label>Your Question*:</label>
          <textarea
            type="text"
            id="question"
            maxLength={1000}
            minLength={1}
            autoComplete="off"
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div
          style={{
            padding: '5px',
            height: '70px',
          }}
        >
          <label>Nickname*:</label>
          <input
            id="nickname"
            maxLength={60}
            placeholder="Example: jack123!"
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
            placeholder="jack123@email.com"
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
        className="question-form-submit-button"
        type="button"
        onClick={handleSubmit}
      >
        Submit Answer
      </button>
    </div>
  );
}
AddAQuestion.propTypes = {
  productID: PropTypes.string.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};
