import React from 'react';
import PropTypes from 'prop-types';
import CharacteristicsButtons from './CharacteristicsButtons';
import ClickStars from './ClickStars';

function ReviewModal({ toggleModal }) {
  // const [rating, setRating] = React.useState(0);

  // const handleClickStars = (value) => {
  //   console.log(value);
  //   setRating(value);
  // };

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
            padding: '1em',
            // justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '5rem',
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
            <p>5 = Amazing</p>
            <p>4 = Good</p>
            <p>3 = Average</p>
            <p>2 = Not terrible</p>
            <p>1 = Bad</p>
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
            <p>Review Summary 50 char cap</p>
            <input
              type="text"
              name="review-summary"
              id="Review Summary"
              placeholder="Review Summary"
              className="review-summary-form"
            />
            <p>Review Body 50-1000 char + render min word counter</p>
            <input
              type="text"
              name="review-body"
              id="Review Body"
              placeholder="Review Body"
              className="review-body-form"
            />
            <p>Minimum Word Count: 50</p>
          </form>
          <div className="upload-photos-modal">Upload Photos Here!</div>
          <button type="button">Upload Photos</button>
          <form>
            <p>Nickname 60 char cap</p>
            <input
              type="text"
              placeholder="Example:jackson11"
              className="name-email-input"
            />
          </form>
          <form>
            <p>Email 60 char cap</p>
            <input
              type="text"
              placeholder="Example:jackson11@email.com"
              className="name-email-input"
            />
            <p>
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
