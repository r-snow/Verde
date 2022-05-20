import React from 'react';

function ReviewModal() {
  return (
    <section>
      Rating
      <div className="stars" style={{ '--rating': 3 }} />
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
        Do you recommend this product?
        <input type="radio" value="Yes" />
        Yes
        <input type="radio" value="No" />
        No
      </div>
      <div className="characteristics-radio-btns">
        <div className="size-char">
          Size
          <input type="radio" value="1" />
          <input type="radio" value="2" />
          <input type="radio" value="3" />
          <input type="radio" value="4" />
          <input type="radio" value="5" />
        </div>
        <div className="width-char">
          Width
          <input type="radio" value="1" />
          <input type="radio" value="2" />
          <input type="radio" value="3" />
          <input type="radio" value="4" />
          <input type="radio" value="5" />
        </div>
        <div className="comfort-char">
          Comfort
          <input type="radio" value="1" />
          <input type="radio" value="2" />
          <input type="radio" value="3" />
          <input type="radio" value="4" />
          <input type="radio" value="5" />
        </div>
        <div className="quality-char">
          Quality
          <input type="radio" value="1" />
          <input type="radio" value="2" />
          <input type="radio" value="3" />
          <input type="radio" value="4" />
          <input type="radio" value="5" />
        </div>
        <div className="length-char">
          Length
          <input type="radio" value="1" />
          <input type="radio" value="2" />
          <input type="radio" value="3" />
          <input type="radio" value="4" />
          <input type="radio" value="5" />
        </div>
        <div className="function-char">
          function
          <input type="radio" value="1" />
          <input type="radio" value="2" />
          <input type="radio" value="3" />
          <input type="radio" value="4" />
          <input type="radio" value="5" />
        </div>
      </div>
      <div className="review-summary-modal">Review Summary 50 char cap</div>
      <div className="review-body-modal">
        Review Body 50-1k char cap + render minimum word counter
      </div>
      <div className="upload-photos-modal">Upload Photos Here!</div>
      <form>
        <p>Nickname 60 char cap</p>
        <input type="text" placeholder="Example:jackson11" />
      </form>
      <form>
        <p>Email 60 char cap</p>
        <input type="text" placeholder="Example:jackson11@email.com" />
        <p>
          For authentication reasons, you <i>will not</i> be emailed.
        </p>
      </form>
    </section>
  );
}

export default ReviewModal;
