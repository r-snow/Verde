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

  function handleSubmit() {
    if (answer.length && nickname.length && email.length) {
      setShowModal(false);
    }
  }

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
    <div>
      <div>
        <div>
          <div>
            <h5>Submit Your Answer: {question.question_body}</h5>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              data-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div>
            <form>
              <div className="mb-3">
                <label>Your Answer*:</label>
                <textarea
                  type="text"
                  id="answer"
                  maxLength={1000}
                  onChange={(e) => setAnswer(e.target.value)}
                />
              </div>
              <div>
                <label>Upload Photos (Limit 5)</label>
                <input
                  type="file"
                  accept="image/*"
                  id="formFileMultiple"
                  multiple
                  // onChange={handlePhotos}
                />
              </div>
              <div>
                <label htmlFor="nickname">Nickname*:</label>
                <input
                  id="nickname"
                  maxLength={60}
                  placeholder="Example: jack543!"
                  onChange={(e) => setNickname(e.target.value)}
                />
                For privacy reasons, do not use your full name or email address
              </div>
              <div className="mb-3">
                <label>Email*:</label>
                <input
                  type="email"
                  id="email"
                  maxLength={60}
                  placeholder="jack@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
                For authentication reasons, you will not be emailed
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit Answer
            </button>
          </div>
        </div>
      </div>
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
