import React from 'react';
import PropTypes from 'prop-types';
import Overview from './components/overview/Overview';
import QnA from './components/questions_answers/QnA';
import RatingsAndReviews from './components/ratings_reviews/RatingsAndReviews';
import RelatedItems from './components/related_items_outfit/RelatedItems';
import YourOutfit from './components/related_items_outfit/YourOutfit';

function App(props) {
  const { name } = props;
  return (
    <>
      <h1>
        Hello
        {` ${name}`}
      </h1>
      <Overview />
      <RelatedItems />
      <YourOutfit />
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
