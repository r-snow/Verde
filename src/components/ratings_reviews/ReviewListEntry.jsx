import React from 'react';
import Stars from '../shared/Stars';

function ReviewListEntry() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '0.5em',
        padding: '0.2em 0.3em',
        fontSize: '0.7em',
        borderRadius: '5px',
        border: 'solid 2px white',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
      }}
    >
      <span>
        <b>Bolded Summary of the product</b>
      </span>
      <Stars rating={2.5} />
      <span>Body should be 50-1000 characters</span>
      <div className="images-container">
        <img
          src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/067/561/513/original/884790_01.jpg.jpeg?action=crop&width=750"
          alt="yeezys"
          className="review-thumbnails"
        />
        <img
          src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2022%2F03%2Fadidas-yeezy-boost-350-v2-zebra-white-black-sneakers-price-restock-release-date-1.jpg?q=80&w=1000&cbr=1&fit=max"
          alt="yeezys2"
          className="review-thumbnails"
        />
      </div>
      <div
        className="review-char-container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '65%',
        }}
      >
        <span>Size: Awesome </span>
        <span>Fits: True to Size</span>
        <span>Length: Long</span>
      </div>

      <div
        className="reviewer-name"
        style={{
          display: 'flex',
          width: '100%',
          fontSize: '0.5em',
          color: 'darkgray',
          margin: '2em 0em 1em 0.2em',
        }}
      >
        BobbyBigBob | October 29 1995 | Verified User | Recommended
      </div>

      <div
        className="misc-container"
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          lineHeight: '10px',
          fontSize: '0.2em',
          width: '100%',
        }}
      >
        <div>Was this Review Helpful?</div>
        <button type="button" className="review-helpful-btn">
          Yes
        </button>
        <button type="button" className="review-helpful-btn">
          No
        </button>
        <div
          style={{
            marginLeft: 'auto',
          }}
        >
          Leave a comment
        </div>
      </div>
    </section>
  );
}

export default ReviewListEntry;
