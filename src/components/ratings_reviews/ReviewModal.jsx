import React from 'react';
import CharacteristicsButtons from './CharacteristicsButtons';
import ClickStars from './ClickStars';

function ReviewModal() {
  // const [rating, setRating] = React.useState(0);

  // const handleClickStars = (value) => {
  //   console.log(value);
  //   setRating(value);
  // };

  return (
    <section>
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
  );
}

export default ReviewModal;
