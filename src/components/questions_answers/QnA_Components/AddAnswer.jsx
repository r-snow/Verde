/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddAnswer({ question, setShowModal }) {
  // const [question, setQuestion] = useState(question);
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  // const [photos, setPhotos] = useState([]);
  // const [photosToUpload, setPhotosToUpload] = useState([]);

  const isValidEmail = (val) => {
    const validEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validEmail.test(val);
  };

  const handleSubmit = () => {
    if (answer.length && nickname.length && isValidEmail(email)) {
      setShowModal(false);
    }
  };

  //   function handlePhotos(e) {
  //     setPhotosToUpload(e.target.files);
  //     handleUpload(e.target.files);
  //   }

  // function handleUpload(files) {
  //     if (files.length <= 5) {
  //       const uploads = [];
  //       for (let i = 0; i < files.length; i++) {

  //       }
  //       setPhotos(uploads);
  //     }
  //   }

  // function handleClick(e) {
  //   if (e.target !== e.currentTarget) {
  //     e.stopPropagation();
  //     return;
  //   }
  //   setShowModal(false);
  // }

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
            // onChange={handlePhotos}
          />
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
