import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CharacteristicsButtons from './CharacteristicsButtons';
import ClickStars from './ClickStars';

function ReviewModal({ toggleModal }) {
  const [wordCount, updateWordCount] = useState(0);

  const [formRating, changeFormRating] = useState(0);
  const [formRecommend, changeFormRecommend] = useState('');
  const [formSummary, changeFormSummary] = useState('');
  const [formBody, changeFormBody] = useState('');
  const [formName, changeFormName] = useState('');
  const [formEmail, changeFormEmail] = useState('');
  const [formImages, changeFormImages] = useState([]);
  const [radioQualities, setRadioQualities] = useState({
    size: '',
    width: '',
    comfort: '',
    quality: '',
    length: '',
  });

  const uploadImages = (event) => {
    changeFormImages(Object.values(event.target.files).slice(0, 5));
  };

  const handleRadioChange = (rating, newRating) => {
    setRadioQualities((prev) => ({
      ...prev,
      [rating]: newRating,
    }));
  };
  // finish photos

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
      formImages,
      radioQualities
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
          backgroundColor: '#C2DED1',
          border: 'solid white 1px',
          position: 'absolute',
          padding: '2em',
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
            padding: '10em',
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
              fontSize: '0.7em',
            }}
          >
            <p>1 - Poor</p>
            <p>2 - Fair</p>
            <p>3 - Average</p>
            <p>4 - Good</p>
            <p>5 - Great</p>
          </div>
          <div className="do-you-recommend" style={{ marginBottom: '3rem' }}>
            <p>Do you recommend this product?</p>
            <label htmlFor="yes">
              <input
                type="radio"
                value="yes"
                name="recommend-btn"
                className="recommendation-radio-btns"
                checked={formRecommend === 'yes'}
                onChange={(event) => changeFormRecommend(event.target.value)}
              />
              Yes
            </label>
            <label htmlFor="no">
              <input
                type="radio"
                value="no"
                name="recommend-btn"
                className="recommendation-radio-btns"
                checked={formRecommend === 'no'}
                onChange={(event) => changeFormRecommend(event.target.value)}
              />
              No
            </label>
          </div>
          <div className="characteristics-radio-btns">
            <CharacteristicsButtons
              characteristic="size"
              handleRadioChange={handleRadioChange}
            />
            <CharacteristicsButtons
              characteristic="width"
              handleRadioChange={handleRadioChange}
            />
            <CharacteristicsButtons
              characteristic="comfort"
              handleRadioChange={handleRadioChange}
            />
            <CharacteristicsButtons
              characteristic="quality"
              handleRadioChange={handleRadioChange}
            />
            <CharacteristicsButtons
              characteristic="length"
              handleRadioChange={handleRadioChange}
            />
          </div>
          <label htmlFor="body" style={{ padding: '2rem' }}>
            Summary
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
          </label>
          <label htmlFor="body">
            Body
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
          </label>
          {wordCount < 50 && (
            <p
              style={{
                fontSize: '0.7em',
              }}
            >
              <i>Minimum required characters left:{50 - wordCount}</i>
            </p>
          )}
          {wordCount >= 50 && <p>Character requirement achieved!</p>}
          <label
            htmlFor="upload-photos"
            style={{
              fontSize: '1.5em',
              margin: '4rem',
              border: 'solid lightgray 0.1em',
              borderRadius: '1rem',
              padding: '10rem 20rem',
            }}
          >
            Upload up to 5 photos
            <br />
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={uploadImages}
            />
          </label>
          <label htmlFor="nickname" style={{ padding: '1rem 0rem' }}>
            Nickname
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
          </label>
          <p className="disclaimer-text">
            For privacy reasons, do <i>not</i> use your full name or email
            address.
          </p>
          <label htmlFor="email" style={{ padding: '1rem 0rem' }}>
            Email
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
          </label>
          <p
            className="disclaimer-text"
            style={{
              marginBottom: '2rem',
            }}
          >
            For authentication reasons, you <i>will not</i> be emailed.
          </p>
          <button
            type="submit"
            style={{ padding: '1rem 2rem', borderRadius: '0.5rem' }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

ReviewModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default ReviewModal;
