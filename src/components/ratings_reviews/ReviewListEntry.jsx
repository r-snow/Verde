import React from 'react';

function ReviewListEntry() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '0.5em',
        padding: '2em 3em',
        'border-radius': '5px',
        border: 'solid 2px white',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      {' Review #1'}
      <div className="reviewer-name">BobbyBigBob</div>
      <span className="stars" style={{ '--rating': 2.5 }} />
      Review Summary
      <span>
        <b>Bolded Summary of the product</b>
      </span>
      Review Body
      <span>Body should be 50-1000 characters</span>
      <br />
      <img
        src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/067/561/513/original/884790_01.jpg.jpeg?action=crop&width=750"
        alt="yeezys"
        height="100"
        width="200"
      />
      <img
        src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2022%2F03%2Fadidas-yeezy-boost-350-v2-zebra-white-black-sneakers-price-restock-release-date-1.jpg?q=80&w=1000&cbr=1&fit=max"
        alt="yeezys2"
        height="150"
        width="200"
      />
      <i>Should be displayed as thumbnails later...</i>
      <span>Size: Awesome </span>
      <span>Fits: True to Size</span>
      <span>Length: Long</span>
      <div>
        Was this Review Helpful?
        <button type="submit">Yes</button>
        <button type="submit">No</button>
      </div>
      <div>Leave a comment</div>
    </section>
  );
}

export default ReviewListEntry;
