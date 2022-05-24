import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CharacteristicsButtons from './CharacteristicsButtons';
import ClickStars from './ClickStars';

function ReviewModal({ toggleModal }) {
  const [wordCount, updateWordCount] = useState(0);

  const [formRating, changeFormRating] = useState(0);
  const [formRecommend, changeFormRecommend] = useState('');
  const [formSize, changeFormSize] = useState('');
  const [formWidth, changeFormWidth] = useState('');
  const [formComfort, changeFormComfort] = useState('');
  const [formQuality, changeFormQuality] = useState('');
  const [formLength, changeFormLength] = useState('');
  const [formFunction, changeFormFunction] = useState('');
  const [formSummary, changeFormSummary] = useState('');
  const [formBody, changeFormBody] = useState('');
  const [formName, changeFormName] = useState('');
  const [formEmail, changeFormEmail] = useState('');

  // finish radio buttons state + photos

  const changeWordCount = (text) => {
    updateWordCount(text.length);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      formRating,
      formRecommend,
      formSummary,
      formBody,
      formName,
      formEmail,

      formSize,
      formWidth,
      formComfort,
      formQuality,
      formLength,
      formFunction
    );
    // axios.post this form later
  };

  return (
    <div className="full-modal-container">
      <div
        className="modal-overlay"
        onClick={toggleModal}
        role="button"
        tabIndex={0}
        onKeyDown={toggleModal}
        aria-label="close modal with overlay"
      />
      <div
        className="outline-color"
        style={{
          backgroundColor: 'cyan',
          border: 'solid white 1px',
          position: 'absolute',
          padding: '1em',
          alignSelf: 'center',
        }}
      >
        <form
          className="reviewModal-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            borderRadius: '5rem',
            padding: '3em 1em 5em 1em',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onSubmit={handleSubmit}
        >
          Rating
          <ClickStars changeFormRating={changeFormRating} />
          <div
            className="rating-definition"
            style={{
              fontSize: '0.5em',
            }}
          >
            <p>1 - Poor</p>
            <p>2 - Fair</p>
            <p>3 - Average</p>
            <p>4 - Good</p>
            <p>5 - Great</p>
          </div>
          <div className="do-you-recommend">
            <p>Do you recommend this product?</p>
            <input
              type="radio"
              value="yes"
              name="recommend-btn"
              className="recommendation-radio-btns"
              checked={formRecommend === 'yes'}
              onChange={(event) => changeFormRecommend(event.target.value)}
            />
            Yes
            <input
              type="radio"
              value="no"
              name="recommend-btn"
              className="recommendation-radio-btns"
              checked={formRecommend === 'no'}
              onChange={(event) => changeFormRecommend(event.target.value)}
            />
            No
          </div>
          <div className="characteristics-radio-btns">
            <CharacteristicsButtons
              characteristic="size"
              onChange={(event) => changeFormSize(event.target.value)}
            />
            <CharacteristicsButtons
              characteristic="width"
              onChange={(event) => changeFormWidth(event.target.value)}
            />
            <CharacteristicsButtons
              characteristic="comfort"
              onChange={(event) => changeFormComfort(event.target.value)}
            />
            <CharacteristicsButtons
              characteristic="quality"
              onChange={(event) => changeFormQuality(event.target.value)}
            />
            <CharacteristicsButtons
              characteristic="length"
              onChange={(event) => changeFormLength(event.target.value)}
            />
            <CharacteristicsButtons
              characteristic="function"
              onChange={(event) => changeFormFunction(event.target.value)}
            />
          </div>
          <p>Review Summary 60 char cap</p>
          <input
            type="text"
            name="review-summary"
            id="Review Summary"
            placeholder="Example: Best purchase ever!"
            className="review-summary-form"
            maxLength="60"
            onChange={(event) => {
              changeFormSummary(event.target.value);
            }}
          />
          <p>Review Body 50-1000 char + render min word counter</p>
          <input
            type="text"
            name="review-body"
            id="Review Body"
            placeholder="Why did you like the product or not?"
            className="review-body-form"
            minLength="50"
            maxLength="1000"
            onChange={(event) => {
              changeFormBody(event.target.value);
              changeWordCount(event.target.value);
            }}
          />
          {wordCount < 50 && (
            <p>Minimum required characters left:{50 - wordCount}</p>
          )}
          {wordCount >= 50 && <p>Character requirement achieved!</p>}
          <div className="upload-photos-modal">Upload Photos Here!</div>
          <button type="button">Upload Photos</button>
          <p>Nickname 60 char cap</p>
          <input
            type="text"
            name="nickname"
            placeholder="Example:jackson11"
            className="name-email-input"
            maxLength="60"
            onChange={(event) => {
              changeFormName(event.target.value);
            }}
          />
          <p className="disclaimer-text">
            For privacy reasons, do <i>not</i> use your full name or email
            address.
          </p>
          <p>Email 60 char cap</p>
          <input
            type="text"
            name="email"
            placeholder="Example:jackson11@email.com"
            className="name-email-input"
            maxLength="60"
            onChange={(event) => {
              changeFormEmail(event.target.value);
            }}
          />
          <p
            className="disclaimer-text"
            style={{
              marginBottom: '2rem',
            }}
          >
            For authentication reasons, you <i>will not</i> be emailed.
          </p>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

ReviewModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default ReviewModal;
