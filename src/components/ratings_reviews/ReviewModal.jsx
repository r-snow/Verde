import React from 'react';
import Stars from '../shared/Stars';

function ReviewModal() {
  return (
    <section>
      Rating
      <Stars rating={3} />
      <div
        className="rating-definition"
        style={{
          'font-size': '0.5em',
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
        <div className="size-char">
          <p className="char-words">Size</p>
          <input type="radio" value="1" name="size" />
          <input type="radio" value="2" name="size" />
          <input type="radio" value="3" name="size" />
          <input type="radio" value="4" name="size" />
          <input type="radio" value="5" name="size" />
        </div>
        <div className="width-char">
          <p className="char-words">Width</p>
          <input type="radio" value="1" name="width" />
          <input type="radio" value="2" name="width" />
          <input type="radio" value="3" name="width" />
          <input type="radio" value="4" name="width" />
          <input type="radio" value="5" name="width" />
        </div>
        <div className="comfort-char">
          <p className="char-words">Comfort</p>
          <input type="radio" value="1" name="comfort" />
          <input type="radio" value="2" name="comfort" />
          <input type="radio" value="3" name="comfort" />
          <input type="radio" value="4" name="comfort" />
          <input type="radio" value="5" name="comfort" />
        </div>
        <div className="quality-char">
          <p className="char-words">Quality</p>
          <input type="radio" value="1" name="quality" />
          <input type="radio" value="2" name="quality" />
          <input type="radio" value="3" name="quality" />
          <input type="radio" value="4" name="quality" />
          <input type="radio" value="5" name="quality" />
        </div>
        <div className="length-char">
          <p className="char-words">Length</p>
          <input type="radio" value="1" name="length" />
          <input type="radio" value="2" name="length" />
          <input type="radio" value="3" name="length" />
          <input type="radio" value="4" name="length" />
          <input type="radio" value="5" name="length" />
        </div>
        <div className="function-char">
          <p className="char-words">Function</p>
          <input type="radio" value="1" name="function" />
          <input type="radio" value="2" name="function" />
          <input type="radio" value="3" name="function" />
          <input type="radio" value="4" name="function" />
          <input type="radio" value="5" name="function" />
        </div>
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
