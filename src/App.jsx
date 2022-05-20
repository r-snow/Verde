import React from 'react';
import { hot } from 'react-hot-loader/root';
import PropTypes from 'prop-types';
import Overview from './components/overview/Overview';
import QnA from './components/questions_answers/QnA';
import RelatedItems from './components/related_items_outfit/relatedItems';
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
    </>
  );
}

App.propTypes = {
  name: PropTypes.string,
};

App.defaultProps = {
  name: 'Verde Customer',
};

export default hot(App);
