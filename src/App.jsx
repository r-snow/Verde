import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Overview from './components/overview/Overview';
import QnA from './components/questions_answers/QnA';
import RatingsAndReviews from './components/ratings_reviews/RatingsAndReviews';
import RelatedItems from './components/related_items_outfit/RelatedItems';
import YourOutfit from './components/related_items_outfit/YourOutfit';
import currentProduct from './components/related_items_outfit/sampleProductData';

function App(props) {
  const { name } = props;
  const [curProd, setCurProd] = useState(currentProduct);

  return (
    <>
      <h1>
        Hello
        {` ${name}`}
      </h1>
      <Overview />
      <RelatedItems curProd={curProd} setCurProd={setCurProd} />
      <YourOutfit curProd={curProd} />
      <QnA />
      <RatingsAndReviews />
    </>
  );
}

App.propTypes = {
  name: PropTypes.string,
};

App.defaultProps = {
  name: 'Verde Customer',
};

export default App;
