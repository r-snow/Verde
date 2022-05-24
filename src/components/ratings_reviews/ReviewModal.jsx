import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CharacteristicsButtons from './CharacteristicsButtons';
import ClickStars from './ClickStars';

function ReviewModal({ toggleModal }) {
  const [wordCount, updateWordCount] = useState(0);

  // const [formRating, changeFormRating] = useState(0);
  // const [formRecommend, changeFormRecommend] = useState('');
  // const [formSize, changeFormSize] = useState('');
  // const [formWidth, changeFormWidth] = useState('');
  // const [formComfort, changeFormComfort] = useState('');
  // const [formQuality, changeFormQuality] = useState('');
  // const [formLength, changeFormLength] = useState('');
  // const [formFunction, changeFormFunction] = useState('');
  // const [formSummary, changeFormSummary] = useState('');
  // const [formBody, changeFormBody] = useState('');
  // const [formName, changeFormName] = useState('');
  // const [formEmail, changeFormEmail] = useState('');

  const changeWordCount = () => {
    updateWordCount(wordCount + 1);
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
        <section
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
        >
          Rating
          <ClickStars />
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
              value="Yes"
              name="recommend-btn"
              className="recommendation-radio-btns"
            />
            Yes
            <input
              type="radio"
              value="No"
              name="recommend-btn"
              className="recommendation-radio-btns"
            />
            No
          </div>
          <div className="characteristics-radio-btns">
            <CharacteristicsButtons characteristic="size" />
            <CharacteristicsButtons characteristic="width" />
            <CharacteristicsButtons characteristic="comfort" />
            <CharacteristicsButtons characteristic="quality" />
            <CharacteristicsButtons characteristic="length" />
            <CharacteristicsButtons characteristic="function" />
          </div>
          <form>
            <p>Review Summary 60 char cap</p>
            <input
              type="text"
              name="review-summary"
              id="Review Summary"
              placeholder="Example: Best purchase ever!"
              className="review-summary-form"
              maxLength="60"
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
              onChange={changeWordCount}
            />
            {wordCount < 50 && (
              <p>Minimum required characters left:{50 - wordCount}</p>
            )}
            {wordCount >= 50 && <p>Character requirement achieved!</p>}
          </form>
          <div className="upload-photos-modal">Upload Photos Here!</div>
          <button type="button">Upload Photos</button>
          <form>
            <p>Nickname 60 char cap</p>
            <input
              type="text"
              placeholder="Example:jackson11"
              className="name-email-input"
              maxLength="60"
            />
            <p className="disclaimer-text">
              For privacy reasons, do <i>not</i> use your full name or email
              address.
            </p>
            <p>Email 60 char cap</p>
            <input
              type="text"
              placeholder="Example:jackson11@email.com"
              className="name-email-input"
              maxLength="60"
            />
            <p className="disclaimer-text">
              For authentication reasons, you <i>will not</i> be emailed.
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}

ReviewModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default ReviewModal;
